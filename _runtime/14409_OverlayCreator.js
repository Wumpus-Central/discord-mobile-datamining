// _runtime/14409_OverlayCreator.js
import noop from "metro/00019__.js";
import get_ActivityIndicator from "metro/00017__.js";
import 14410__ from "metro/14410__.js";
import _isNativeReflectConstruct from "metro/14411__.js";
import jsxProd from "react/00021_jsxProd.js";

if (noop) {
  const __esModule = noop.__esModule;
}
if (!module_14410) {
  let obj = { default: module_14410 };
  let tmp4 = obj;
} else {
  tmp4 = module_14410;
}
module_14410 = tmp4;
if (!_isNativeReflectConstruct) {
  obj = { default: _isNativeReflectConstruct };
  let tmp6 = obj;
} else {
  tmp6 = _isNativeReflectConstruct;
}
_isNativeReflectConstruct = tmp6;

export default function OverlayCreator() {
  return function overlay() {
    closure_0 = closure_1.default();
    return {
      onCommand(type) {
        if ("overlay" === type.type) {
          closure_0.emit("overlay", type.payload);
        }
      },
      features: {
        overlay(emitter) {
          return () => {
            let obj = arg0;
            if (arg0 === undefined) {
              obj = {};
            }
            obj = { style: { flex: 1 }, children: null };
            obj = {};
            const merged = Object.assign(obj);
            const items = [<emitter />, <_isNativeReflectConstruct.default emitter={emitter} />];
            obj.children = items;
            return <RN.View />;
          };
        }
      }
    };
  };
};