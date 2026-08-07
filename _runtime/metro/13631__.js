// _runtime/metro/13631__.js
import noop from "noop";
import map from "map";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";

if (noop) {
  const __esModule = noop.__esModule;
}
if (!map) {
  let obj = { default: null };
  obj[0] = map;
  let tmp4 = obj;
} else {
  tmp4 = map;
}
let c0 = tmp4;
if (!_isNativeReflectConstruct) {
  obj = { default: null };
  obj[0] = _isNativeReflectConstruct;
  let tmp6 = obj;
} else {
  tmp6 = _isNativeReflectConstruct;
}
let closure_1 = tmp6;

export default () => () => {
  closure_0 = closure_0.default();
  obj = {
    onCommand(type) {
      if ("storybook" === type.type) {
        closure_0.emit("storybook", type.payload);
      }
    },
    features: obj
  };
  obj = {
    storybookSwitcher(arg0) {
      let closure_0 = arg0;
      return (arg0) => {
        let closure_0 = arg0;
        return function StorybookSwitcherContainer(arg0) {
          let obj = { storybookUi: closure_0, emitter: closure_0, children: null };
          obj = {};
          const merged = Object.assign(arg0);
          obj[2] = <closure_0 />;
          return <outer3_1.default />;
        };
      };
    }
  };
  return obj;
};