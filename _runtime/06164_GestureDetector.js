// _runtime/06164_GestureDetector.js
import Fragment from "react/00021_Fragment.js";
import _mod6165 from "metro/06165__.js";
import ComposedGesture from "06167_ComposedGesture.js";
import CALLBACK_TYPE from "06168_CALLBACK_TYPE.js";
import _mod6170 from "metro/06170__.js";
import NativeDetector2 from "06202_NativeDetector.js";

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
