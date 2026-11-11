// === Module 5551: GestureDetector ===

// Module 5551 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod5552 from "module_5552" /* 5552 */;
import _mod5554 from "module_5554" /* 5554 */;
import _mod5555 from "module_5555" /* 5555 */;
import _mod5558 from "module_5558" /* 5558 */;
import NativeDetector from "NativeDetector" /* 5593 */;

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5552.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5554.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5555.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5558.GestureDetector, {});
  const obj3 = {};
}