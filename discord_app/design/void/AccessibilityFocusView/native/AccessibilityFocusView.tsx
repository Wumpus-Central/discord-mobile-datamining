// discord_app/design/void/AccessibilityFocusView/native/AccessibilityFocusView.tsx
import noopAll from "noop" /* 19 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 13481 */;
import { jsx } from "jsxProd" /* 21 */;
import set from "set" /* 500 */;

noopAll;
if (set.isAndroid()) {
  let importDefaultResult = __INTERNAL_VIEW_CONFIGDefault;
} else {
  importDefaultResult = require("get ActivityIndicator").requireNativeComponent("AccessibilityFocusView");
}
const result = set.fileFinishedImporting("design/void/AccessibilityFocusView/native/AccessibilityFocusView.tsx");

export default function AccessibilityFocusView(arg0) {
  ({ onAccessibilityFocus, onAccessibilityBlur } = arg0);
  const obj = {};
  const merged = Object.assign(Object.assign(arg0, Object.create(null)));
  obj.onAccessibilityFocus = onAccessibilityFocus;
  obj.onAccessibilityBlur = onAccessibilityBlur;
  return <closure_1 />;
};