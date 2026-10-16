// _runtime/15355_OverlayCreator.js
import noop from "metro/00019__.js";
import get_ActivityIndicator from "metro/00017__.js";
import module_15356_mod from "metro/15356__.js";
import _isNativeReflectConstruct_mod from "metro/15357__.js";
import jsxProd from "react/00021_jsxProd.js";

if (noop) {
  const __esModule = noop.__esModule;
}
let module_15356 = module_15356_mod;
if (!module_15356) {
  let obj = { default: module_15356 };
  let tmp4 = obj;
} else {
  tmp4 = module_15356;
}
module_15356 = tmp4;
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
        },
      },
    };
  };
}
