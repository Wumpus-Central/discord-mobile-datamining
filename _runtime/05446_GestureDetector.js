// === Module 5446: GestureDetector ===

// Module 5446 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod5447 from "module_5447" /* 5447 */;
import _mod5449 from "module_5449" /* 5449 */;
import _mod5450 from "module_5450" /* 5450 */;
import _mod5453 from "module_5453" /* 5453 */;
import NativeDetector from "NativeDetector" /* 5488 */;

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5447.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5449.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5450.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5453.GestureDetector, {});
  const obj3 = {};
}