// === Module 5604: GestureDetector ===

// Module 5604 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod5605 from "module_5605" /* 5605 */;
import _mod5607 from "module_5607" /* 5607 */;
import _mod5608 from "module_5608" /* 5608 */;
import _mod5611 from "module_5611" /* 5611 */;
import NativeDetector from "NativeDetector" /* 5646 */;

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5605.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5607.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5608.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5611.GestureDetector, {});
  const obj3 = {};
}