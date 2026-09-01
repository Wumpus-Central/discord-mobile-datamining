// discord_app/modules/a11y/native/setAccessibilityFocusPrevious.tsx
import set from "../../../../_runtime/00002_set.js";
import enforcingDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceAccessibilityModule.tsx";

const result = set.fileFinishedImporting("modules/a11y/native/setAccessibilityFocusPrevious.tsx");

export default function setAccessibilityFocusPrevious() {
  enforcingDefault.restorePreviousFocus();
}
