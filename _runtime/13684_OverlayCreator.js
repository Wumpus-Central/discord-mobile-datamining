// _runtime/13684_OverlayCreator.js
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
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
let closure_1 = tmp4;
if (!_isNativeReflectConstruct) {
  obj = { default: null };
  obj[0] = _isNativeReflectConstruct;
  let tmp6 = obj;
} else {
  tmp6 = _isNativeReflectConstruct;
}

export default function OverlayCreator() {
  return function overlay() {
    let closure_0 = closure_1.default();
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
        let closure_0 = arg0;
        return () => {
          let obj = arg0;
          if (arg0 === undefined) {
            obj = {};
          }
          obj = { style: { flex: 1 }, children: null };
          obj = {};
          const merged = Object.assign(obj);
          const items = [<RN />, <outer2_2.default emitter={RN} />];
          obj[1] = items;
          return <RN.View />;
        };
      }
    };
    return obj;
  };
};