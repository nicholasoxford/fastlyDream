"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports[Symbol.toStringTag] = "Module";
var vue = require("vue");
var head = require("@vueuse/head");
var vueRouter = require("vue-router");
var serverRenderer = require("@vue/server-renderer");
var render$1 = require("fastify-vite/render");
var hooks = require("fastify-vite/hooks");
var base_vue_vue_type_style_index_0_lang = "\n#app {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n  margin-top: 60px;\n}\n";
const _sfc_main$2 = {
  setup() {
    head.useHead({
      title: "Vite App",
      meta: [{
        charset: "utf-8"
      }, {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }]
    });
    return {route: vueRouter.useRoute()};
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = vue.resolveComponent("router-link");
  const _component_router_view = vue.resolveComponent("router-view");
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, {to: "/"}, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Index`);
      } else {
        return [
          vue.createTextVNode("Index")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` - `);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, {to: "/hello"}, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Hello`);
      } else {
        return [
          vue.createTextVNode("Hello")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_router_view, null, {
    default: vue.withCtx(({Component}, _push2, _parent2, _scopeId) => {
      if (_push2) {
        serverRenderer.ssrRenderSuspense(_push2, {
          default: () => {
            serverRenderer.ssrRenderVNode(_push2, vue.createVNode(vue.resolveDynamicComponent(Component), {
              key: $setup.route.path
            }, null), _parent2);
          },
          _: 2
        });
      } else {
        return [
          (vue.openBlock(), vue.createBlock(vue.Suspense, null, {
            default: vue.withCtx(() => [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(Component), {
                key: $setup.route.path
              }))
            ]),
            _: 2
          }, 1024))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
_sfc_main$2.ssrRender = _sfc_ssrRender$1;
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("/Users/nicholas.oxford/Documents/example/base.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const pages = {"./pages/hello.vue": () => Promise.resolve().then(function() {
  return hello;
}), "./pages/index.vue": () => Promise.resolve().then(function() {
  return index;
})};
const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages(.*)\.vue$/)[1].toLowerCase();
  return {
    path: name === "/index" ? "/" : name,
    component: pages[path]
  };
});
function getRouter() {
  return vueRouter.createRouter({
    history: vueRouter.createMemoryHistory(),
    routes
  });
}
function createApp(req) {
  const app = vue.createSSRApp(_sfc_main$2);
  const head$1 = head.createHead();
  const ctx = {req};
  const router = getRouter();
  app.use(router);
  app.use(head$1);
  return {ctx, app, head: head$1, router};
}
const render = render$1.getRender(createApp);
var hello_vue_vue_type_style_index_0_scoped_true_lang = "\nh1[data-v-3a9da694] {\n  cursor: pointer;\n  color: red;\n}\n";
const _sfc_main$1 = {
  async setup() {
    const [data, dataPath] = await hooks.useServerData();
    const state = vue.reactive({message: data == null ? void 0 : data.message});
    const refreshData = async () => {
      const response = await fetch(dataPath);
      const json = await response.json();
      state.message = json.message;
    };
    if (!data && false) {
      await refreshData();
    }
    return {state, refreshData};
  }
};
const _withId$1 = /* @__PURE__ */ vue.withScopeId("data-v-3a9da694");
const _sfc_ssrRender = /* @__PURE__ */ _withId$1((_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) => {
  _push(`<!--[--><span data-v-3a9da694>We believe computers can dream.</span><br data-v-3a9da694><br data-v-3a9da694><span data-v-3a9da694><a href="https://opensea.io/accounts/dreamland" data-v-3a9da694>Buy NFTs of our work here</a></span><br data-v-3a9da694><br data-v-3a9da694><span data-v-3a9da694>This would&#39;ve be impossible without the amazing work of Ryan Murdoch. You can check out his <a href="https://rynmurdock.github.io/" data-v-3a9da694>website</a> or <a href="https://github.com/rynmurdock" data-v-3a9da694>github</a> for more!</span><br data-v-3a9da694><br data-v-3a9da694><span data-v-3a9da694><a href="mailto:dreams@dreamland.to" data-v-3a9da694>dreams@dreamland.to</a></span><br data-v-3a9da694><br data-v-3a9da694><!--]-->`);
});
_sfc_main$1.ssrRender = _sfc_ssrRender;
_sfc_main$1.__scopeId = "data-v-3a9da694";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("/Users/nicholas.oxford/Documents/example/pages/hello.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var hello = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: _sfc_main$1
});
var index_vue_vue_type_style_index_0_scoped_true_lang = "\nh1[data-v-252811bf],\nimg[data-v-252811bf] {\n  max-height: inherit;\n  max-width: 300px;\n}\na[data-v-252811bf] {\n  text-decoration: none;\n}\n.box[data-v-252811bf] {\n  display: block;\n  width: 300px;\n  margin-bottom: 5px;\n}\n.imgspan[data-v-252811bf] {\n  font-weight: 400;\n}\n";
const _withId = /* @__PURE__ */ vue.withScopeId("data-v-252811bf");
const _sfc_main = {
  expose: [],
  __ssrInlineRender: true,
  async setup(__props) {
    const api = hooks.useServerAPI();
    const data = await hooks.useServerData(async () => {
      var x = await api.imageGet();
      return x.json;
    });
    return /* @__PURE__ */ _withId((_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({class: "grid"}, _attrs))} data-v-252811bf><!--[-->`);
      serverRenderer.ssrRenderList(1, (item, index2) => {
        _push(`<div class="box" data-v-252811bf><img${serverRenderer.ssrRenderAttr("src", vue.unref(data).url)} data-v-252811bf><span class="imgspan" data-v-252811bf>${serverRenderer.ssrInterpolate(vue.unref(data).title)}</span></div>`);
      });
      _push(`<!--]--></div>`);
    });
  }
};
_sfc_main.__scopeId = "data-v-252811bf";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("/Users/nicholas.oxford/Documents/example/pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: _sfc_main
});
exports.render = render;
