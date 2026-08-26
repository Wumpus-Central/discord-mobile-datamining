// === Module 13951: OverlayCreator ===

// Module 13951 (OverlayCreator)
import noop from "noop" /* 19 */;
import closure_0 from "get ActivityIndicator" /* 17 */;
import map from "map" /* 13952 */;
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 13953 */;
import closure_3 from "jsxProd" /* 21 */;

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
    obj = {
      onCommand(type) {
        if ("overlay" === type.type) {
          closure_0.emit("overlay", type.payload);
        }
      },
      features: obj
    };
    obj = {
      overlay(arg0) {
        closure_0 = arg0;
        return () => {
          let obj = arg0;
          if (arg0 === undefined) {
            obj = {};
          }
          obj = { style: { flex: 1 }, children: null };
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