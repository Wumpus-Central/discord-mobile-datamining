// _runtime/00279_legacySendAccessibilityEvent.js
import _modDef68 from "metro/00068__.js";
import nullthrowsDefault from "00070_nullthrows.js";

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
}
