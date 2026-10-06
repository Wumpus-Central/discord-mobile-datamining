// === Module 6164: GestureDetector ===

// Module 6164 (GestureDetector)
import Fragment from "Fragment" /* 21 */;
import _mod6165 from "module_6165" /* 6165 */;
import ComposedGesture from "ComposedGesture" /* 6167 */;
import CALLBACK_TYPE from "CALLBACK_TYPE" /* 6168 */;
import _mod6170 from "module_6170" /* 6170 */;
import NativeDetector2 from "NativeDetector" /* 6202 */;

const jsx = Fragment.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  const obj = _mod6165;
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
  const GestureDetector = _mod6170.GestureDetector;
  const merged1 = Object.assign(gesture);
  tmp8 = <GestureDetector />;
};