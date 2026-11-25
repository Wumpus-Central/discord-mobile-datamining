// === Module 6020: markAccessibilityFocus ===

// Module 6020 (markAccessibilityFocus)
import NativeDeviceAccessibilityModuleDefault from "NativeDeviceAccessibilityModule" /* 6019 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/a11y/native/markAccessibilityFocus.tsx");

export default function markAccessibilityFocus() {
  NativeDeviceAccessibilityModuleDefault.markCurrentFocus();
};