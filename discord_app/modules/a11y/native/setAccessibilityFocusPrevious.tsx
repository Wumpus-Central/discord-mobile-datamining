// === Module 4658: setAccessibilityFocusPrevious ===

// Module 4658 (setAccessibilityFocusPrevious)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import obj1322 from "obj132" /* 500 */;

const NativeModules = get_ActivityIndicator.NativeModules;
const result = obj132.fileFinishedImporting("modules/a11y/native/setAccessibilityFocusPrevious.tsx");

export default function setAccessibilityFocusPrevious() {
  if (obj.isIOS()) {
    const DCDAccessibilityManager = NativeModules.DCDAccessibilityManager;
    DCDAccessibilityManager.restorePreviousFocus();
  }
  obj = obj1322;
};