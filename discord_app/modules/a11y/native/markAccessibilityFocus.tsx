// === Module 5404: markAccessibilityFocus ===

// Module 5404 (markAccessibilityFocus)
import NativeDeviceAccessibilityModuleDefault from "NativeDeviceAccessibilityModule" /* 5403 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/a11y/native/markAccessibilityFocus.tsx");

export default function markAccessibilityFocus() {
  NativeDeviceAccessibilityModuleDefault.markCurrentFocus();
};