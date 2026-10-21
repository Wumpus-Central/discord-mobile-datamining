// === Module 5296: GestureDetector ===

// Module 5296 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod5297 from "module_5297" /* 5297 */;
import _mod5299 from "module_5299" /* 5299 */;
import _mod5300 from "module_5300" /* 5300 */;
import _mod5302 from "module_5302" /* 5302 */;
import NativeDetector from "NativeDetector" /* 5334 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod5297.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5299.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5300.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5302.GestureDetector, {});
  const obj3 = {};
};