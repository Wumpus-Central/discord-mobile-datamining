// === Module 5350: GestureDetector ===

// Module 5350 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod5351 from "module_5351" /* 5351 */;
import _mod5353 from "module_5353" /* 5353 */;
import _mod5354 from "module_5354" /* 5354 */;
import _mod5356 from "module_5356" /* 5356 */;
import NativeDetector from "NativeDetector" /* 5388 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod5351.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5353.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5354.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5356.GestureDetector, {});
  const obj3 = {};
};