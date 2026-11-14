// _runtime/01840_JSPropsUpdaterNative.js
import _createClassDefault from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

const JSPropsUpdaterNative = global;
const require = arg1;
let closure_4 = {
  code: "(function pnpm_JSPropsUpdaterNativeTs1(){let[viewTag,jsProps]=this.__closure;global._tagToJSPropNamesMapping[viewTag]=Object.fromEntries(jsProps.map(function(propName){return[propName,true];}));})",
};
let closure_5 = {
  code: "(function pnpm_JSPropsUpdaterNativeTs2(){let[viewTag]=this.__closure;delete global._tagToJSPropNamesMapping[viewTag];})",
};
class JSPropsUpdaterNative {
  constructor() {
    tmp = closure_3(this, JSPropsUpdaterNative);
    return;
  }
}
const entry = {
  key: "registerComponent",
  value: function registerComponent(getComponentViewTag, arg1) {
    const componentViewTag = getComponentViewTag.getComponentViewTag();
    const _tagToComponentMapping = JSPropsUpdaterNative._tagToComponentMapping;
    const result = _tagToComponentMapping.set(componentViewTag, getComponentViewTag);
    items = [closure_4, componentViewTag, arg1];
    c0 = undefined;
    c1 = undefined;
    [tmp3, tmp4, tmp5] = items;
    function pnpm_JSPropsUpdaterNativeTs1() {
      JSPropsUpdaterNative._tagToJSPropNamesMapping[c0] = Object.fromEntries(
        _undefined.map((item) => {
          items = [item, true];
          return items;
        }),
      );
    }
    const items1 = [tmp4, tmp5];
    pnpm_JSPropsUpdaterNativeTs1.__closure = items1;
    pnpm_JSPropsUpdaterNativeTs1.__workletHash = 5387571609022;
    pnpm_JSPropsUpdaterNativeTs1.__initData = tmp3;
    require("metro/01708__.js").scheduleOnUI(pnpm_JSPropsUpdaterNativeTs1);
  },
};
let items = [
  entry,
  {
    key: "unregisterComponent",
    value: function unregisterComponent(self) {
      const componentViewTag = self.getComponentViewTag();
      const _tagToComponentMapping = JSPropsUpdaterNative._tagToComponentMapping;
      _tagToComponentMapping.delete(componentViewTag);
      items = [hasOwnProperty, componentViewTag];
      c0 = undefined;
      [tmp3, tmp4] = items;
      function pnpm_JSPropsUpdaterNativeTs2() {
        delete tmp2[tmp];
      }
      const items1 = [tmp4];
      pnpm_JSPropsUpdaterNativeTs2.__closure = items1;
      pnpm_JSPropsUpdaterNativeTs2.__workletHash = 14671416118448;
      pnpm_JSPropsUpdaterNativeTs2.__initData = tmp3;
      require("metro/01708__.js").scheduleOnUI(pnpm_JSPropsUpdaterNativeTs2);
    },
  },
  {
    key: "updateProps",
    value: function updateProps(arr) {
      const item = arr.forEach((tag) => {
        const _tagToComponentMapping = JSPropsUpdaterNative._tagToComponentMapping;
        value = _tagToComponentMapping.get(tag.tag);
        if (value != null) {
          value.setNativeProps(tag.updates);
        }
      });
    },
  },
];
const tmp2 = _createClassDefault(JSPropsUpdaterNative, items);
tmp2._tagToComponentMapping = new Map();
const map = new Map();

export default new tmp2();
