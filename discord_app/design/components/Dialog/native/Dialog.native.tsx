// === Module 4716: Dialog ===

// Module 4716 (Dialog)
import AccessibilityView from "AccessibilityView" /* 4717 */;
import closure_2 from "noop" /* 19 */;
import { StyleSheet } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
const result = require("set").fileFinishedImporting("design/components/Dialog/native/Dialog.native.tsx");

export const Dialog = function Dialog(dialogKey) {
  dialogKey = dialogKey.dialogKey;
  ({ onDismiss, zIndex } = dialogKey);
  const merged = Object.assign(dialogKey, Object.create(null));
  const id = closure_2.useId();
  const obj = { style: items, accessibilityViewIsModal: true, onAccessibilityEscape: onDismiss, nativeID: null };
  items = [StyleSheet.absoluteFill, { zIndex }];
  if (dialogKey == null) {
    dialogKey = id;
  }
  obj[3] = dialogKey;
  const merged1 = Object.assign(merged);
  return jsx(AccessibilityView.AccessibilityView, { style: items, accessibilityViewIsModal: true, onAccessibilityEscape: onDismiss, nativeID: null });
};