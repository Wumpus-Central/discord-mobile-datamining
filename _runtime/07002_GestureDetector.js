// === Module 7002: GestureDetector ===

// Module 7002 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod7003 from "module_7003" /* 7003 */;
import _mod7005 from "module_7005" /* 7005 */;
import _mod7006 from "module_7006" /* 7006 */;
import _mod7008 from "module_7008" /* 7008 */;
import NativeDetector from "NativeDetector" /* 7040 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod7003.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod7005.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod7006.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod7008.GestureDetector, {});
  const obj3 = {};
};