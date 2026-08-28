// === Module 4825: setAccessibilityFocusPrevious ===

// Module 4825 (setAccessibilityFocusPrevious)
import set from "set" /* 2 */;
import enforcingDefault from "enforcing" /* 4826 */;

const result = set.fileFinishedImporting("modules/a11y/native/setAccessibilityFocusPrevious.tsx");

export default function setAccessibilityFocusPrevious() {
  enforcingDefault.restorePreviousFocus();
};