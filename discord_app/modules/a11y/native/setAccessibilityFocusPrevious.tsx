// === Module 4953: setAccessibilityFocusPrevious ===

// Module 4953 (setAccessibilityFocusPrevious)
import NativeDeviceAccessibilityModuleDefault from "NativeDeviceAccessibilityModule" /* 4954 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/a11y/native/setAccessibilityFocusPrevious.tsx");

export default function setAccessibilityFocusPrevious() {
  NativeDeviceAccessibilityModuleDefault.restorePreviousFocus();
};