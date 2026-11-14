// === Module 5614: GestureDetector ===

// Module 5614 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod5615 from "module_5615" /* 5615 */;
import _mod5617 from "module_5617" /* 5617 */;
import _mod5618 from "module_5618" /* 5618 */;
import _mod5621 from "module_5621" /* 5621 */;
import NativeDetector from "NativeDetector" /* 5656 */;

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5615.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5617.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5618.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5621.GestureDetector, {});
  const obj3 = {};
}