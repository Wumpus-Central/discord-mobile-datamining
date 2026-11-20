// === Module 5070: GestureDetector ===

// Module 5070 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod5071 from "module_5071" /* 5071 */;
import _mod5073 from "module_5073" /* 5073 */;
import _mod5074 from "module_5074" /* 5074 */;
import _mod5077 from "module_5077" /* 5077 */;
import NativeDetector from "NativeDetector" /* 5112 */;

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5071.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5073.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5074.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5077.GestureDetector, {});
  const obj3 = {};
}