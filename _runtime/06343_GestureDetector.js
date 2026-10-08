// === Module 6343: GestureDetector ===

// Module 6343 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6344 from "module_6344" /* 6344 */;
import _mod6346 from "module_6346" /* 6346 */;
import _mod6347 from "module_6347" /* 6347 */;
import _mod6349 from "module_6349" /* 6349 */;
import NativeDetector from "NativeDetector" /* 6381 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6344.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6346.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6347.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6349.GestureDetector, {});
  const obj3 = {};
};