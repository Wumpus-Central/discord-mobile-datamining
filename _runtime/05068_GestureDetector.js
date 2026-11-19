// === Module 5068: GestureDetector ===

// Module 5068 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod5069 from "module_5069" /* 5069 */;
import _mod5071 from "module_5071" /* 5071 */;
import _mod5072 from "module_5072" /* 5072 */;
import _mod5075 from "module_5075" /* 5075 */;
import NativeDetector from "NativeDetector" /* 5110 */;

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5069.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5071.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5072.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5075.GestureDetector, {});
  const obj3 = {};
}