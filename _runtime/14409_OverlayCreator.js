// === Module 14409: OverlayCreator ===

// Module 14409 (OverlayCreator)
import noop from "module_19" /* 19 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import module_14410 from "module_14410" /* 14410 */;
import _isNativeReflectConstruct from "module_14411" /* 14411 */;
import jsxProd from "jsxProd" /* 21 */;

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
            let obj = size;
            if (size === undefined) {
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