// === Module 6157: GestureDetector ===

// Module 6157 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod6158 from "module_6158" /* 6158 */;
import ComposedGesture from "ComposedGesture" /* 6160 */;
import CALLBACK_TYPE from "CALLBACK_TYPE" /* 6161 */;
import _mod6163 from "module_6163" /* 6163 */;
import NativeDetector2 from "NativeDetector" /* 6195 */;

const jsx = Fragment.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  const obj = _mod6158;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof ComposedGesture.ComposedGesture)) {
    let tmp8;
    if (!(gesture.gesture instanceof CALLBACK_TYPE.BaseGesture)) {
      const NativeDetector = NativeDetector2.NativeDetector;
      const merged = Object.assign(gesture);
      tmp8 = <NativeDetector />;
    }
    return tmp8;
  }
  const GestureDetector = _mod6163.GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
};