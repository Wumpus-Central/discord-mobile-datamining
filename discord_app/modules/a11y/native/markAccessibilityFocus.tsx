// === Module 4659: markAccessibilityFocus ===

// Module 4659 (markAccessibilityFocus)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import obj1322 from "obj132" /* 500 */;

const NativeModules = get_ActivityIndicator.NativeModules;
const result = obj132.fileFinishedImporting("modules/a11y/native/markAccessibilityFocus.tsx");

export default function markAccessibilityFocus() {
  if (obj.isIOS()) {
    const DCDAccessibilityManager = NativeModules.DCDAccessibilityManager;
    DCDAccessibilityManager.markCurrentFocus();
  }
  obj = obj1322;
};