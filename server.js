const mongodb = require('fastify-mongodb')
const fastify = require('fastify')()
const fastifyVite = require('fastify-vite')
const fastifyApi = require('fastify-api')

async function main () {
  await fastify.register(fastifyApi)
  await fastify
    .register(mongodb, { forceClose: true, url: 'mongodb+srv://dbRead:IfSzNju4sNwNQC6m@cluster0.mq6v7.mongodb.net/mydb?retryWrites=true&w=majority' })

  await fastify.register(fastifyVite, {
    api: true,
    dev: process.env.NODE_ENV !== 'production',
    rootDir: (resolve) => resolve(__dirname),
    clientEntryPath: '/entry/client.js',
    serverEntryPath: '/entry/server.js'
  })

  fastify.api(({ get }) => ({
    echo: get('/echo/:msg', ({ msg }, req, reply) => {
      reply.send({ msg })
    }),
    other: get('/other', (req, reply) => {
      reply.send('string response')
    }),
    imageGet: get('/graph', (req, reply) => {
      const db = fastify.mongo.db

      db.collection('images', onCollection)

      function onCollection (err, col) {
        if (err) return reply.send(err)

        col.findOne({}, (err, user) => {
          if (err) {
            reply.send(err)
          }
          console.log('user', user)
          reply.send(user)
        })
      }
    })

  }))
  fastify.vite.global = { prop: 'data' }

  fastify.get('/favicon.ico', (_, reply) => {
    reply.code(404)
    reply.send('')
  })
  fastify.vite.get('/hello', {
    data (req) {
      return { message: `Hello from ${req.raw.url} - ${Math.random()}` }
    }
  })

  fastify.get('/*', fastify.vite.handler)
  fastify.post('/*', fastify.vite.handler)
  return fastify
}

if (require.main === module) {
  main().then((fastify) => {
    fastify.listen(3000, (err, address) => {
      if (err) {
        console.error(err)
        process.exit(1)
      }
      console.log(`Server listening on ${address}`)
    })
  })
}

module.exports = main
