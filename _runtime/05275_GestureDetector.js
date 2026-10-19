// === Module 5275: GestureDetector ===

// Module 5275 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod5276 from "module_5276" /* 5276 */;
import _mod5278 from "module_5278" /* 5278 */;
import _mod5279 from "module_5279" /* 5279 */;
import _mod5281 from "module_5281" /* 5281 */;
import NativeDetector from "NativeDetector" /* 5313 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod5276.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5278.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5279.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5281.GestureDetector, {});
  const obj3 = {};
};