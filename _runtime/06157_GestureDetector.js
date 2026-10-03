// === Module 6157: GestureDetector ===

// Module 6157 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6158 from "module_6158" /* 6158 */;
import _mod6160 from "module_6160" /* 6160 */;
import _mod6161 from "module_6161" /* 6161 */;
import _mod6163 from "module_6163" /* 6163 */;
import NativeDetector from "NativeDetector" /* 6195 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6158.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6160.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6161.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6163.GestureDetector, {});
  const obj3 = {};
};