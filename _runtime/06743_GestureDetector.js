// === Module 6743: GestureDetector ===

// Module 6743 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6744 from "module_6744" /* 6744 */;
import _mod6746 from "module_6746" /* 6746 */;
import _mod6747 from "module_6747" /* 6747 */;
import _mod6749 from "module_6749" /* 6749 */;
import NativeDetector from "NativeDetector" /* 6781 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  let obj = _mod6744;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6746.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6747.BaseGesture)) {
      obj = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  obj = {};
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6749.GestureDetector, {});
};