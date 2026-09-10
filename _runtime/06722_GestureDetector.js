// === Module 6722: GestureDetector ===

// Module 6722 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6723 from "module_6723" /* 6723 */;
import _mod6725 from "module_6725" /* 6725 */;
import _mod6726 from "module_6726" /* 6726 */;
import _mod6728 from "module_6728" /* 6728 */;
import NativeDetector from "NativeDetector" /* 6760 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  let obj = _mod6723;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6725.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6726.BaseGesture)) {
      obj = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  obj = {};
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6728.GestureDetector, {});
};