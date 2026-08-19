// === Module 13785: OverlayCreator ===

// Module 13785 (OverlayCreator)
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import map from "map" /* 13786 */;
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 13787 */;
import jsxProd from "jsxProd" /* 21 */;

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

export default function OverlayCreator() {
  return function overlay() {
    closure_0 = closure_1.default();
    let obj = {
      overlay(arg0) {
        closure_0 = arg0;
        return () => {
          let obj = arg0;
          if (arg0 === undefined) {
            obj = {};
          }
          obj = {};
          const merged = Object.assign(obj);
          const items = [<RN />, <closure_2_2.default emitter={RN} />];
          obj[1] = items;
          return <RN.View />;
        };
      }
    };
    return obj;
  };
};