// === Module 5189: GestureDetector ===

// Module 5189 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod5190 from "module_5190" /* 5190 */;
import _mod5192 from "module_5192" /* 5192 */;
import _mod5193 from "module_5193" /* 5193 */;
import _mod5196 from "module_5196" /* 5196 */;
import NativeDetector from "NativeDetector" /* 5231 */;

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5190.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5192.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5193.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5196.GestureDetector, {});
  const obj3 = {};
}