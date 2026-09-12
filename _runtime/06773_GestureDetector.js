// === Module 6773: GestureDetector ===

// Module 6773 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6774 from "module_6774" /* 6774 */;
import _mod6776 from "module_6776" /* 6776 */;
import _mod6777 from "module_6777" /* 6777 */;
import _mod6779 from "module_6779" /* 6779 */;
import NativeDetector from "NativeDetector" /* 6811 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  let obj = _mod6774;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6776.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6777.BaseGesture)) {
      obj = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  obj = {};
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6779.GestureDetector, {});
};