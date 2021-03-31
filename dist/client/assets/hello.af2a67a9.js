import {h as hooks} from "./hooks.02cb6516.js";
import {k as reactive, p as pushScopeId, l as popScopeId, m as withScopeId, n as createStaticVNode} from "./vendor.cfe872db.js";
var hello_vue_vue_type_style_index_0_scoped_true_lang = "\nh1[data-v-3a9da694] {\n  cursor: pointer;\n  color: red;\n}\n";
const _sfc_main = {
  async setup() {
    const [data, dataPath] = await hooks.useServerData();
    const state = reactive({message: data == null ? void 0 : data.message});
    const refreshData = async () => {
      const response = await fetch(dataPath);
      const json = await response.json();
      state.message = json.message;
    };
    if (!data && true) {
      await refreshData();
    }
    return {state, refreshData};
  }
};
const _withId = /* @__PURE__ */ withScopeId("data-v-3a9da694");
pushScopeId("data-v-3a9da694");
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<span data-v-3a9da694>We believe computers can dream.</span><br data-v-3a9da694><br data-v-3a9da694><span data-v-3a9da694><a href="https://opensea.io/accounts/dreamland" data-v-3a9da694>Buy NFTs of our work here</a></span><br data-v-3a9da694><br data-v-3a9da694><span data-v-3a9da694>This would&#39;ve be impossible without the amazing work of Ryan Murdoch. You can check out his <a href="https://rynmurdock.github.io/" data-v-3a9da694>website</a> or <a href="https://github.com/rynmurdock" data-v-3a9da694>github</a> for more!</span><br data-v-3a9da694><br data-v-3a9da694><span data-v-3a9da694><a href="mailto:dreams@dreamland.to" data-v-3a9da694>dreams@dreamland.to</a></span><br data-v-3a9da694><br data-v-3a9da694>', 12);
popScopeId();
const _sfc_render = /* @__PURE__ */ _withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return _hoisted_1;
});
_sfc_main.render = _sfc_render;
_sfc_main.__scopeId = "data-v-3a9da694";
export default _sfc_main;
