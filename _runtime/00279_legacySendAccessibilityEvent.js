// === Module 279: legacySendAccessibilityEvent ===

// Module 279 (legacySendAccessibilityEvent)
import _modDef68 from "module_68" /* 68 */;
import nullthrowsDefault from "nullthrows" /* 70 */;


export default function legacySendAccessibilityEvent(_nativeTag, arg1) {
  if ("focus" === arg1) {
    const tmp3 = nullthrowsDefault;
    const tmp3Result = tmp3(_modDef68.sendAccessibilityEvent);
    const obj = _modDef68;
    tmp3Result(_nativeTag, obj.getConstants().AccessibilityEventTypes.typeViewFocused);
  }
  if ("click" === arg1) {
    const tmp8 = nullthrowsDefault;
    const tmp8Result = tmp8(_modDef68.sendAccessibilityEvent);
    const obj2 = _modDef68;
    tmp8Result(_nativeTag, obj2.getConstants().AccessibilityEventTypes.typeViewClicked);
  }
};