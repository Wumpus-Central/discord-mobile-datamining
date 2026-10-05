// discord_app/modules/a11y/native/setAccessibilityFocusPrevious.tsx
import react_nativeDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceAccessibilityModule.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/a11y/native/setAccessibilityFocusPrevious.tsx");

export default function setAccessibilityFocusPrevious() {
  const obj = react_nativeDefault;
  obj.restorePreviousFocus();
}
