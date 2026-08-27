// === Module 4814: markAccessibilityFocus ===

// Module 4814 (markAccessibilityFocus)
import set from "set" /* 2 */;
import enforcingDefault from "enforcing" /* 4813 */;

const result = set.fileFinishedImporting("modules/a11y/native/markAccessibilityFocus.tsx");

export default function markAccessibilityFocus() {
  enforcingDefault.markCurrentFocus();
};