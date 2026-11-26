// === Module 5319: GestureDetector ===

// Module 5319 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod5320 from "module_5320" /* 5320 */;
import _mod5322 from "module_5322" /* 5322 */;
import _mod5323 from "module_5323" /* 5323 */;
import _mod5326 from "module_5326" /* 5326 */;
import NativeDetector from "NativeDetector" /* 5361 */;

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5320.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5322.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5323.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5326.GestureDetector, {});
  const obj3 = {};
}