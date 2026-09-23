// === Module 7000: GestureDetector ===

// Module 7000 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod7001 from "module_7001" /* 7001 */;
import _mod7003 from "module_7003" /* 7003 */;
import _mod7004 from "module_7004" /* 7004 */;
import _mod7006 from "module_7006" /* 7006 */;
import NativeDetector from "NativeDetector" /* 7038 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod7001.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod7003.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod7004.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod7006.GestureDetector, {});
  const obj3 = {};
};