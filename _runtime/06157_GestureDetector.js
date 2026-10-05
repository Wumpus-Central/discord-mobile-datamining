// _runtime/06157_GestureDetector.js
import Fragment from "react/00021_Fragment.js";
import _mod6158 from "metro/06158__.js";
import ComposedGesture from "06160_ComposedGesture.js";
import CALLBACK_TYPE from "06161_CALLBACK_TYPE.js";
import _mod6163 from "metro/06163__.js";
import NativeDetector2 from "06195_NativeDetector.js";

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
