// === Module 5300: GestureDetector ===

// Module 5300 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod5301 from "module_5301" /* 5301 */;
import _mod5303 from "module_5303" /* 5303 */;
import _mod5304 from "module_5304" /* 5304 */;
import _mod5306 from "module_5306" /* 5306 */;
import NativeDetector from "NativeDetector" /* 5338 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod5301.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5303.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5304.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5306.GestureDetector, {});
  const obj3 = {};
};