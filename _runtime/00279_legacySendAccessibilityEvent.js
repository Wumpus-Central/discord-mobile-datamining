// _runtime/00279_legacySendAccessibilityEvent.js
import measureDefault from "00068_measure.js";
import nullthrowsDefault from "00070_nullthrows.js";

importDefault = arg2;
const dependencyMap = arg6;

export default function legacySendAccessibilityEvent(_nativeTag, arg1) {
  if ("focus" === arg1) {
    const tmp3Result = nullthrowsDefault(measureDefault.sendAccessibilityEvent);
    tmp3Result(_nativeTag, measureDefault.getConstants().AccessibilityEventTypes.typeViewFocused);
  }
  if ("click" === arg1) {
    const tmp8Result = nullthrowsDefault(measureDefault.sendAccessibilityEvent);
    tmp8Result(_nativeTag, measureDefault.getConstants().AccessibilityEventTypes.typeViewClicked);
  }
}
