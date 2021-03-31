<template>
  <div class="mt-8">
 <span>We believe computers can dream.</span><br />
      <br />
      <span
        ><a href="https://opensea.io/accounts/dreamland"
          >Buy NFTs of our work here</a
        >
      </span>
      <br />
      <br />
      <span
        >This would've be impossible without the amazing work of Ryan Murdoch.
        You can check out his
        <a href="https://rynmurdock.github.io/">website</a> or
        <a href="https://github.com/rynmurdock">github</a> for more!</span
      >
      <br />
      <br />
      <span><a href="mailto:dreams@dreamland.to">dreams@dreamland.to</a></span>
      <br />
      <br />
    </div>
</template>

<script>
import { ref, reactive, getCurrentInstance } from 'vue'
import { useServerData } from 'fastify-vite/hooks'

export default {
  async setup () {
    const [ data, dataPath ] = await useServerData()
    const state = reactive({ message: data?.message })
    const refreshData = async () => {
      const response = await fetch(dataPath)
      const json = await response.json()
      state.message = json.message
    }
    // If navigation happened client-side
    if (!data && !import.meta.env.SSR) {
      await refreshData()
    }
    return { state, refreshData }
  }
}
</script>

<style scoped>
.about {
  margin-top: 10px;
}
</style>