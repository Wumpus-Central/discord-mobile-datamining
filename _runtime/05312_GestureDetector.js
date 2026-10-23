// === Module 5312: GestureDetector ===

// Module 5312 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod5313 from "module_5313" /* 5313 */;
import _mod5315 from "module_5315" /* 5315 */;
import _mod5316 from "module_5316" /* 5316 */;
import _mod5318 from "module_5318" /* 5318 */;
import NativeDetector from "NativeDetector" /* 5350 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod5313.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5315.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5316.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5318.GestureDetector, {});
  const obj3 = {};
};