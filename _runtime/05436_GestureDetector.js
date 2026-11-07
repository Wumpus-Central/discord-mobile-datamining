// === Module 5436: GestureDetector ===

// Module 5436 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod5437 from "module_5437" /* 5437 */;
import _mod5439 from "module_5439" /* 5439 */;
import _mod5440 from "module_5440" /* 5440 */;
import _mod5443 from "module_5443" /* 5443 */;
import NativeDetector from "NativeDetector" /* 5478 */;

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5437.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5439.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5440.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5443.GestureDetector, {});
  const obj3 = {};
}