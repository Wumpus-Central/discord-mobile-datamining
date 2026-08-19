// === Module 13480: AccessibilityFocusView ===

// Module 13480 (AccessibilityFocusView)
import noopAll from "noop" /* 19 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 13481 */;
import { jsx } from "jsxProd" /* 21 */;
import obj132 from "obj132" /* 500 */;

noopAll;
if (obj132.isAndroid()) {
  __INTERNAL_VIEW_CONFIGDefault;
} else {
  require("get ActivityIndicator").requireNativeComponent("AccessibilityFocusView");
}
const result = obj132.fileFinishedImporting("design/void/AccessibilityFocusView/native/AccessibilityFocusView.tsx");

export default function AccessibilityFocusView(arg0) {
  ({ onAccessibilityFocus, onAccessibilityBlur } = arg0);
  const obj = {};
  const merged = Object.assign(Object.assign(arg0, Object.create(null)));
  obj.onAccessibilityFocus = onAccessibilityFocus;
  obj.onAccessibilityBlur = onAccessibilityBlur;
  return <closure_1 />;
};