// discord_app/design/void/AccessibilityFocusView/native/AccessibilityFocusView.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import __INTERNAL_VIEW_CONFIGDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/AccessibilityFocusNativeComponent.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import obj132 from "../../../../utils/PlatformUtils.tsx";

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