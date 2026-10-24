// === Module 5314: GestureDetector ===

// Module 5314 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod5315 from "module_5315" /* 5315 */;
import _mod5317 from "module_5317" /* 5317 */;
import _mod5318 from "module_5318" /* 5318 */;
import _mod5320 from "module_5320" /* 5320 */;
import NativeDetector from "NativeDetector" /* 5352 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod5315.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5317.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5318.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5320.GestureDetector, {});
  const obj3 = {};
};