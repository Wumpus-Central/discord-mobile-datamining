// === Module 6865: GestureDetector ===

// Module 6865 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6866 from "module_6866" /* 6866 */;
import _mod6868 from "module_6868" /* 6868 */;
import _mod6869 from "module_6869" /* 6869 */;
import _mod6871 from "module_6871" /* 6871 */;
import NativeDetector from "NativeDetector" /* 6903 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6866.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6868.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6869.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6871.GestureDetector, {});
  const obj3 = {};
};