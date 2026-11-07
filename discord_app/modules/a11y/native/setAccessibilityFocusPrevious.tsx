// === Module 6093: setAccessibilityFocusPrevious ===

// Module 6093 (setAccessibilityFocusPrevious)
import NativeDeviceAccessibilityModuleDefault from "NativeDeviceAccessibilityModule" /* 6094 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/a11y/native/setAccessibilityFocusPrevious.tsx");

export default function setAccessibilityFocusPrevious() {
  NativeDeviceAccessibilityModuleDefault.restorePreviousFocus();
};