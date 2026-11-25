// === Module 6018: setAccessibilityFocusPrevious ===

// Module 6018 (setAccessibilityFocusPrevious)
import NativeDeviceAccessibilityModuleDefault from "NativeDeviceAccessibilityModule" /* 6019 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/a11y/native/setAccessibilityFocusPrevious.tsx");

export default function setAccessibilityFocusPrevious() {
  NativeDeviceAccessibilityModuleDefault.restorePreviousFocus();
};