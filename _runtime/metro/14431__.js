// === Module 14431: ? ===

// Module 14431
import noop from "module_19" /* 19 */;
import module_14413 from "module_14413" /* 14413 */;
import _isNativeReflectConstruct from "module_14432" /* 14432 */;
import jsxProd from "jsxProd" /* 21 */;

if (noop) {
  const __esModule = noop.__esModule;
}
if (!module_14413) {
  let obj = { default: module_14413 };
  let tmp4 = obj;
} else {
  tmp4 = module_14413;
}
module_14413 = tmp4;
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