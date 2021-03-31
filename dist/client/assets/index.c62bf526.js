import {h as hooks} from "./hooks.02cb6516.js";
import {c as createBlock, F as Fragment, s as renderList, m as withScopeId, p as pushScopeId, l as popScopeId, o as openBlock, b as createVNode, t as unref, v as toDisplayString} from "./vendor.cfe872db.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "\nh1[data-v-252811bf],\nimg[data-v-252811bf] {\n  max-height: inherit;\n  max-width: 300px;\n}\na[data-v-252811bf] {\n  text-decoration: none;\n}\n.box[data-v-252811bf] {\n  display: block;\n  width: 300px;\n  margin-bottom: 5px;\n}\n.imgspan[data-v-252811bf] {\n  font-weight: 400;\n}\n";
const _withId = /* @__PURE__ */ withScopeId("data-v-252811bf");
pushScopeId("data-v-252811bf");
const _hoisted_1 = {class: "grid"};
const _hoisted_2 = {class: "imgspan"};
popScopeId();
const _sfc_main = {
  expose: [],
  async setup(__props) {
    const api = hooks.useServerAPI();
    const data = await hooks.useServerData(async () => {
      var x = await api.imageGet();
      return x.json;
    });
    return /* @__PURE__ */ _withId((_ctx, _cache) => {
      return openBlock(), createBlock("div", _hoisted_1, [
        (openBlock(), createBlock(Fragment, null, renderList(1, (item, index) => {
          return createVNode("div", {
            key: index,
            class: "box"
          }, [
            createVNode("img", {
              src: unref(data).url
            }, null, 8, ["src"]),
            createVNode("span", _hoisted_2, toDisplayString(unref(data).title), 1)
          ]);
        }), 64))
      ]);
    });
  }
};
_sfc_main.__scopeId = "data-v-252811bf";
export default _sfc_main;
