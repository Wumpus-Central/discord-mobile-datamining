// _runtime/00279_legacySendAccessibilityEvent.js
import _modDef68 from "metro/00068__.js";
import nullthrowsDefault from "00070_nullthrows.js";

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
}
