// === Module 6090: GestureDetector ===

// Module 6090 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6091 from "module_6091" /* 6091 */;
import _mod6093 from "module_6093" /* 6093 */;
import _mod6094 from "module_6094" /* 6094 */;
import _mod6096 from "module_6096" /* 6096 */;
import NativeDetector from "NativeDetector" /* 6128 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6091.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6093.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6094.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6096.GestureDetector, {});
  const obj3 = {};
};