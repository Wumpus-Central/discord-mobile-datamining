// _runtime/metro/13804__.js
import noop from "../00019_noop.js";
import map from "../13786_map.js";
import _isNativeReflectConstruct from "../13805__isNativeReflectConstruct.js";
import closure_2 from "../react/00021_jsxProd.js";

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
map = tmp4;
if (!_isNativeReflectConstruct) {
  obj = { default: null };
  obj[0] = _isNativeReflectConstruct;
  let tmp6 = obj;
} else {
  tmp6 = _isNativeReflectConstruct;
}
_isNativeReflectConstruct = tmp6;

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
      closure_0 = arg0;
      return (arg0) => {
        closure_0 = arg0;
        return function StorybookSwitcherContainer(arg0) {
          let obj = { storybookUi: closure_0, emitter: closure_0, children: null };
          obj = {};
          const merged = Object.assign(arg0);
          obj[2] = <closure_0 />;
          return <closure_3_1.default />;
        };
      };
    }
  };
  return obj;
};