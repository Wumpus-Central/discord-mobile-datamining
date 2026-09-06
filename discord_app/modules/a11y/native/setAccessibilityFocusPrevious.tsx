// discord_app/modules/a11y/native/setAccessibilityFocusPrevious.tsx
import NativeDeviceAccessibilityModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceAccessibilityModule.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/a11y/native/setAccessibilityFocusPrevious.tsx");

export default function setAccessibilityFocusPrevious() {
  NativeDeviceAccessibilityModuleDefault.restorePreviousFocus();
}
