import {u as useHead, a as useRoute, r as resolveComponent, o as openBlock, c as createBlock, b as createVNode, w as withCtx, S as Suspense, d as resolveDynamicComponent, e as createTextVNode, f as createRouter, g as createWebHistory, h as createSSRApp, i as createHead, j as hydrate_1} from "./vendor.cfe872db.js";
const p = function polyfill(modulePath = ".", importFunctionName = "__import__") {
  try {
    self[importFunctionName] = new Function("u", `return import(u)`);
  } catch (error) {
    const baseURL = new URL(modulePath, location);
    const cleanup = (script) => {
      URL.revokeObjectURL(script.src);
      script.remove();
    };
    self[importFunctionName] = (url) => new Promise((resolve, reject) => {
      const absURL = new URL(url, baseURL);
      if (self[importFunctionName].moduleMap[absURL]) {
        return resolve(self[importFunctionName].moduleMap[absURL]);
      }
      const moduleBlob = new Blob([
        `import * as m from '${absURL}';`,
        `${importFunctionName}.moduleMap['${absURL}']=m;`
      ], {type: "text/javascript"});
      const script = Object.assign(document.createElement("script"), {
        type: "module",
        src: URL.createObjectURL(moduleBlob),
        onerror() {
          reject(new Error(`Failed to import: ${url}`));
          cleanup(script);
        },
        onload() {
          resolve(self[importFunctionName].moduleMap[absURL]);
          cleanup(script);
        }
      });
      document.head.appendChild(script);
    });
    self[importFunctionName].moduleMap = {};
  }
};
p("/assets/");
var base_vue_vue_type_style_index_0_lang = "\n#app {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n  margin-top: 60px;\n}\n";
const _sfc_main = {
  setup() {
    useHead({
      title: "Vite App",
      meta: [{
        charset: "utf-8"
      }, {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }]
    });
    return {route: useRoute()};
  }
};
const _hoisted_1 = /* @__PURE__ */ createTextVNode("Index");
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" - ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Hello");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createBlock("div", null, [
    createVNode(_component_router_link, {to: "/"}, {
      default: withCtx(() => [
        _hoisted_1
      ]),
      _: 1
    }),
    _hoisted_2,
    createVNode(_component_router_link, {to: "/hello"}, {
      default: withCtx(() => [
        _hoisted_3
      ]),
      _: 1
    }),
    createVNode(_component_router_view, null, {
      default: withCtx(({Component}) => [
        (openBlock(), createBlock(Suspense, null, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(Component), {
              key: $setup.route.path
            }))
          ]),
          _: 2
        }, 1024))
      ]),
      _: 1
    })
  ]);
}
_sfc_main.render = _sfc_render;
let scriptRel;
const seen = {};
const __vitePreload = function preload(baseModule, deps) {
  if (!deps) {
    return baseModule();
  }
  if (scriptRel === void 0) {
    const relList = document.createElement("link").relList;
    scriptRel = relList && relList.supports && relList.supports("modulepreload") ? "modulepreload" : "preload";
  }
  return Promise.all(deps.map((dep) => {
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", rej);
      });
    }
  })).then(() => baseModule());
};
const pages = {"./pages/hello.vue": () => true ? __vitePreload(() => __import__("./hello.af2a67a9.js"), ["/assets/hello.af2a67a9.js","/assets/hello.77319922.css","/assets/hooks.02cb6516.js","/assets/vendor.cfe872db.js"]) : null, "./pages/index.vue": () => true ? __vitePreload(() => __import__("./index.c62bf526.js"), ["/assets/index.c62bf526.js","/assets/index.402d6fe1.css","/assets/hooks.02cb6516.js","/assets/vendor.cfe872db.js"]) : null};
const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages(.*)\.vue$/)[1].toLowerCase();
  return {
    path: name === "/index" ? "/" : name,
    component: pages[path]
  };
});
function getRouter() {
  return createRouter({
    history: createWebHistory(),
    routes
  });
}
function createApp(req) {
  const app2 = createSSRApp(_sfc_main);
  const head = createHead();
  const ctx = {req};
  const router2 = getRouter();
  app2.use(router2);
  app2.use(head);
  return {ctx, app: app2, head, router: router2};
}
const {app, router} = createApp();
hydrate_1.hydrate(app);
router.isReady().then(() => app.mount("#app"));
