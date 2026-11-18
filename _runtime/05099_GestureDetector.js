// === Module 5099: GestureDetector ===

// Module 5099 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod5100 from "module_5100" /* 5100 */;
import _mod5102 from "module_5102" /* 5102 */;
import _mod5103 from "module_5103" /* 5103 */;
import _mod5106 from "module_5106" /* 5106 */;
import NativeDetector from "NativeDetector" /* 5141 */;

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5100.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5102.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5103.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5106.GestureDetector, {});
  const obj3 = {};
}