// === Module 5320: GestureDetector ===

// Module 5320 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod5321 from "module_5321" /* 5321 */;
import _mod5323 from "module_5323" /* 5323 */;
import _mod5324 from "module_5324" /* 5324 */;
import _mod5326 from "module_5326" /* 5326 */;
import NativeDetector from "NativeDetector" /* 5358 */;

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5321.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5323.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5324.BaseGesture)) {
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