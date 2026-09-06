// === Module 6672: GestureDetector ===

// Module 6672 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6673 from "module_6673" /* 6673 */;
import _mod6675 from "module_6675" /* 6675 */;
import _mod6676 from "module_6676" /* 6676 */;
import _mod6678 from "module_6678" /* 6678 */;
import NativeDetector from "NativeDetector" /* 6710 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  let obj = _mod6673;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6675.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6676.BaseGesture)) {
      obj = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  obj = {};
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6678.GestureDetector, {});
};