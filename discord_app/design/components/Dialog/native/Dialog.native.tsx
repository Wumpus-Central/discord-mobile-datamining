// discord_app/design/components/Dialog/native/Dialog.native.tsx
import noop from "noop";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { AccessibilityView } from "../../AccessibilityView/AccessibilityView.native.tsx";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Dialog/native/Dialog.native.tsx");

export const Dialog = function Dialog(dialogKey) {
  let onDismiss;
  let zIndex;
  dialogKey = dialogKey.dialogKey;
  ({ onDismiss, zIndex } = dialogKey);
  const merged = Object.assign(dialogKey, Object.create(null));
  const id = noop.useId();
  const obj = { style: items, accessibilityViewIsModal: true, onAccessibilityEscape: onDismiss, nativeID: null };
  items = [StyleSheet.absoluteFill, { zIndex }];
  if (dialogKey == null) {
    dialogKey = id;
  }
  obj[3] = dialogKey;
  const merged1 = Object.assign(merged);
  return jsx(AccessibilityView /* AccessibilityView */.AccessibilityView, { style: items, accessibilityViewIsModal: true, onAccessibilityEscape: onDismiss, nativeID: null });
};