// === Module 5288: GestureDetector ===

// Module 5288 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod5289 from "module_5289" /* 5289 */;
import _mod5291 from "module_5291" /* 5291 */;
import _mod5292 from "module_5292" /* 5292 */;
import _mod5295 from "module_5295" /* 5295 */;
import NativeDetector from "NativeDetector" /* 5330 */;

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5289.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5291.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5292.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5295.GestureDetector, {});
  const obj3 = {};
}