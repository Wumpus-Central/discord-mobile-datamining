// === Module 5351: GestureDetector ===

// Module 5351 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod5352 from "module_5352" /* 5352 */;
import _mod5354 from "module_5354" /* 5354 */;
import _mod5355 from "module_5355" /* 5355 */;
import _mod5357 from "module_5357" /* 5357 */;
import NativeDetector from "NativeDetector" /* 5389 */;

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5352.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5354.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5355.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5357.GestureDetector, {});
  const obj3 = {};
}