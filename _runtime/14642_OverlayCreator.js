// === Module 14642: OverlayCreator ===

// Module 14642 (OverlayCreator)
import noop from "module_19" /* 19 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import module_14643_mod from "module_14643" /* 14643 */;
import _isNativeReflectConstruct_mod from "module_14644" /* 14644 */;
import jsxProd from "jsxProd" /* 21 */;

if (noop) {
  const __esModule = noop.__esModule;
}
let module_14643 = module_14643_mod;
if (!module_14643) {
  let obj = { default: module_14643 };
  let tmp4 = obj;
} else {
  tmp4 = module_14643;
}
module_14643 = tmp4;
let _isNativeReflectConstruct = _isNativeReflectConstruct_mod;
if (!_isNativeReflectConstruct) {
  let obj2 = { default: _isNativeReflectConstruct };
  let tmp6 = obj2;
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
            const obj2 = { style: { flex: 1 }, children: null };
            const merged = Object.assign(obj);
            const items = [<emitter />, <_isNativeReflectConstruct.default emitter={emitter} />];
            obj2.children = items;
            return <RN.View style={{ flex: 1 }}>{null}</RN.View>;
          };
        }
      }
    };
  };
};