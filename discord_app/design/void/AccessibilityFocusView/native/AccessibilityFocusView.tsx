// discord_app/design/void/AccessibilityFocusView/native/AccessibilityFocusView.tsx
import AccessibilityFocusNativeComponentDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/AccessibilityFocusNativeComponent.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/AccessibilityFocusView/native/AccessibilityFocusView.tsx");

export default function AccessibilityFocusView(arg0) {
  ({ onAccessibilityFocus, onAccessibilityBlur } = arg0);
  const merged = Object.assign(arg0, Object.assign({ onAccessibilityFocus: 0, onAccessibilityBlur: 0 }));
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.onAccessibilityFocus = onAccessibilityFocus;
  obj.onAccessibilityBlur = onAccessibilityBlur;
  return jsx(AccessibilityFocusNativeComponentDefault, {});
}
