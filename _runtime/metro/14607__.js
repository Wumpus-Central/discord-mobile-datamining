// === Module 14607: ? ===

// Module 14607
import noop from "module_19" /* 19 */;
import module_14589_mod from "module_14589" /* 14589 */;
import _isNativeReflectConstruct_mod from "module_14608" /* 14608 */;
import jsxProd from "jsxProd" /* 21 */;

if (noop) {
  const __esModule = noop.__esModule;
}
let module_14589 = module_14589_mod;
if (!module_14589) {
  let obj = { default: module_14589 };
  let tmp4 = obj;
} else {
  tmp4 = module_14589;
}
module_14589 = tmp4;
let _isNativeReflectConstruct = _isNativeReflectConstruct_mod;
if (!_isNativeReflectConstruct) {
  const obj2 = { default: _isNativeReflectConstruct };
  let tmp6 = obj2;
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
            const obj = { storybookUi: emitter, emitter, children: null };
            const merged = Object.assign(arg0);
            obj.children = <emitter />;
            return <_isNativeReflectConstruct.default storybookUi={emitter} emitter={emitter}>{null}</_isNativeReflectConstruct.default>;
          };
        };
      }
    }
  };
};