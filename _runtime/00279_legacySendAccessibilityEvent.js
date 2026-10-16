// === Module 279: legacySendAccessibilityEvent ===

// Module 279 (legacySendAccessibilityEvent)
import _modDef68 from "module_68" /* 68 */;
import nullthrowsDefault from "nullthrows" /* 70 */;

importDefault = arg2;
const dependencyMap = arg6;

export default function legacySendAccessibilityEvent(_nativeTag, arg1) {
  if ("focus" === arg1) {
    const tmp3Result = nullthrowsDefault(_modDef68.sendAccessibilityEvent);
    tmp3Result(_nativeTag, _modDef68.getConstants().AccessibilityEventTypes.typeViewFocused);
  }
  if ("click" === arg1) {
    const tmp8Result = nullthrowsDefault(_modDef68.sendAccessibilityEvent);
    tmp8Result(_nativeTag, _modDef68.getConstants().AccessibilityEventTypes.typeViewClicked);
  }
};