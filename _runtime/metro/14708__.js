// === Module 14708: ? ===

// Module 14708
import noop from "module_19" /* 19 */;
import module_14690_mod from "module_14690" /* 14690 */;
import _isNativeReflectConstruct_mod from "module_14709" /* 14709 */;
import jsxProd from "jsxProd" /* 21 */;

if (noop) {
  const __esModule = noop.__esModule;
}
let module_14690 = module_14690_mod;
if (!module_14690) {
  let obj = { default: module_14690 };
  let tmp4 = obj;
} else {
  tmp4 = module_14690;
}
module_14690 = tmp4;
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