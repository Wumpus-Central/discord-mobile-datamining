// === Module 5438: GestureDetector ===

// Module 5438 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod5439 from "module_5439" /* 5439 */;
import _mod5441 from "module_5441" /* 5441 */;
import _mod5442 from "module_5442" /* 5442 */;
import _mod5445 from "module_5445" /* 5445 */;
import NativeDetector from "NativeDetector" /* 5480 */;

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5439.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5441.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5442.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5445.GestureDetector, {});
  const obj3 = {};
}