// === Module 4955: markAccessibilityFocus ===

// Module 4955 (markAccessibilityFocus)
import NativeDeviceAccessibilityModuleDefault from "NativeDeviceAccessibilityModule" /* 4954 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/a11y/native/markAccessibilityFocus.tsx");

export default function markAccessibilityFocus() {
  NativeDeviceAccessibilityModuleDefault.markCurrentFocus();
};