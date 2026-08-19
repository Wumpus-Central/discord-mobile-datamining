// === Module 279: legacySendAccessibilityEvent ===

// Module 279 (legacySendAccessibilityEvent)
import measureDefault from "measure" /* 68 */;
import nullthrowsDefault from "nullthrows" /* 70 */;

importDefault = arg2;
const dependencyMap = arg6;
arg5.default = function legacySendAccessibilityEvent(_nativeTag, arg1) {
  if ("focus" === arg1) {
    const tmp3Result = nullthrowsDefault(measureDefault.sendAccessibilityEvent);
    tmp3Result(_nativeTag, measureDefault.getConstants().AccessibilityEventTypes.typeViewFocused);
  }
  if ("click" === arg1) {
    const tmp8Result = nullthrowsDefault(measureDefault.sendAccessibilityEvent);
    tmp8Result(_nativeTag, measureDefault.getConstants().AccessibilityEventTypes.typeViewClicked);
  }
};