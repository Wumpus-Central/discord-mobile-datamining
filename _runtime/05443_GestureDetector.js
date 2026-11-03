// === Module 5443: GestureDetector ===

// Module 5443 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod5444 from "module_5444" /* 5444 */;
import _mod5446 from "module_5446" /* 5446 */;
import _mod5447 from "module_5447" /* 5447 */;
import _mod5449 from "module_5449" /* 5449 */;
import NativeDetector from "NativeDetector" /* 5481 */;

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5444.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5446.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5447.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5449.GestureDetector, {});
  const obj3 = {};
}