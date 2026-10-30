// === Module 5315: GestureDetector ===

// Module 5315 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod5316 from "module_5316" /* 5316 */;
import _mod5318 from "module_5318" /* 5318 */;
import _mod5319 from "module_5319" /* 5319 */;
import _mod5321 from "module_5321" /* 5321 */;
import NativeDetector from "NativeDetector" /* 5353 */;

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5316.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5318.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5319.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5321.GestureDetector, {});
  const obj3 = {};
}