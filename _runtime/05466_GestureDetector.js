// === Module 5466: GestureDetector ===

// Module 5466 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod5467 from "module_5467" /* 5467 */;
import _mod5469 from "module_5469" /* 5469 */;
import _mod5470 from "module_5470" /* 5470 */;
import _mod5473 from "module_5473" /* 5473 */;
import NativeDetector from "NativeDetector" /* 5508 */;

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5467.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5469.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5470.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5473.GestureDetector, {});
  const obj3 = {};
}