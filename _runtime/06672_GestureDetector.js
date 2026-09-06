// === Module 6672: GestureDetector ===

// Module 6672 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6673 from "module_6673" /* 6673 */;
import _mod6675 from "module_6675" /* 6675 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  let obj = _mod6673;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6675.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(6676).BaseGesture)) {
      obj = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(6710).NativeDetector, {});
    }
    return tmp8;
  }
  obj = {};
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(6678).GestureDetector, {});
};