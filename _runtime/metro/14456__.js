// _runtime/metro/14456__.js
import noop from "00019__.js";
import 14438__ from "14438__.js";
import _isNativeReflectConstruct from "14457__.js";
import jsxProd from "../react/00021_jsxProd.js";

if (noop) {
  const __esModule = noop.__esModule;
}
if (!module_14438) {
  let obj = { default: module_14438 };
  let tmp4 = obj;
} else {
  tmp4 = module_14438;
}
module_14438 = tmp4;
if (!_isNativeReflectConstruct) {
  obj = { default: _isNativeReflectConstruct };
  let tmp6 = obj;
} else {
  tmp6 = _isNativeReflectConstruct;
}
_isNativeReflectConstruct = tmp6;

export default () => () => {
  closure_0 = closure_0.default();
  return {
    onCommand(type) {
      if ("storybook" === type.type) {
        closure_0.emit("storybook", type.payload);
      }
    },
    features: {
      storybookSwitcher(arg0) {
        closure_0 = arg0;
        return (arg0) => {
          closure_0 = arg0;
          return function StorybookSwitcherContainer(arg0) {
            let obj = { storybookUi: emitter, emitter, children: null };
            obj = {};
            const merged = Object.assign(arg0);
            obj.children = <emitter />;
            return <_isNativeReflectConstruct.default />;
          };
        };
      }
    }
  };
};