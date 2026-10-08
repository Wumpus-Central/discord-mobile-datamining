// === Module 5300: setAccessibilityFocusPrevious ===

// Module 5300 (setAccessibilityFocusPrevious)
import NativeDeviceAccessibilityModuleDefault from "NativeDeviceAccessibilityModule" /* 5301 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/a11y/native/setAccessibilityFocusPrevious.tsx");

export default function setAccessibilityFocusPrevious() {
  NativeDeviceAccessibilityModuleDefault.restorePreviousFocus();
};