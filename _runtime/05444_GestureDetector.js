// === Module 5444: GestureDetector ===

// Module 5444 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod5445 from "module_5445" /* 5445 */;
import _mod5447 from "module_5447" /* 5447 */;
import _mod5448 from "module_5448" /* 5448 */;
import _mod5451 from "module_5451" /* 5451 */;
import NativeDetector from "NativeDetector" /* 5486 */;

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5445.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5447.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5448.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5451.GestureDetector, {});
  const obj3 = {};
}