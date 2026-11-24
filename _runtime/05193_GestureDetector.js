// === Module 5193: GestureDetector ===

// Module 5193 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod5194 from "module_5194" /* 5194 */;
import _mod5196 from "module_5196" /* 5196 */;
import _mod5197 from "module_5197" /* 5197 */;
import _mod5200 from "module_5200" /* 5200 */;
import NativeDetector from "NativeDetector" /* 5235 */;

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5194.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5196.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5197.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5200.GestureDetector, {});
  const obj3 = {};
}