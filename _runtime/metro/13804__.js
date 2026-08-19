// _runtime/metro/13804__.js
import noop from "../00019_noop.js";
import map from "../13786_map.js";
import _isNativeReflectConstruct from "../13805__isNativeReflectConstruct.js";
import jsxProd from "../react/00021_jsxProd.js";

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
  let obj = {
    storybookSwitcher(arg0) {
      closure_0 = arg0;
      return (arg0) => {
        closure_0 = arg0;
        return function StorybookSwitcherContainer(arg0) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[2] = <closure_0 />;
          return <closure_3_1.default />;
        };
      };
    }
  };
  return obj;
};