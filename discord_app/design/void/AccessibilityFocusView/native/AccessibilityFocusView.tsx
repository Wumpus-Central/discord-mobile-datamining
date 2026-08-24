// discord_app/design/void/AccessibilityFocusView/native/AccessibilityFocusView.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import __INTERNAL_VIEW_CONFIGDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/AccessibilityFocusNativeComponent.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

noopAll;
const result = require("set").fileFinishedImporting("design/void/AccessibilityFocusView/native/AccessibilityFocusView.tsx");

export default function AccessibilityFocusView(arg0) {
  ({ onAccessibilityFocus, onAccessibilityBlur } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.onAccessibilityFocus = onAccessibilityFocus;
  obj.onAccessibilityBlur = onAccessibilityBlur;
  return jsx(__INTERNAL_VIEW_CONFIGDefault, {});
};