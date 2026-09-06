// discord_app/modules/a11y/native/useIsAccessibilityServiceEnabled.native.tsx
import NativeDeviceAccessibilityModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceAccessibilityModule.tsx";
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled.native.tsx";
import 00560__ from "../../../../_runtime/metro/00560__.js";
import size from "../../../../_runtime/metro/00002__.js";

function ACCESSIBILITY_SERVICE_ENABLED_GETTER(accessibilityServiceEnabled) {
  return accessibilityServiceEnabled.accessibilityServiceEnabled;
}
const state = module_560.create((arg0) => {
  closure_0 = arg0;
  let obj = NativeDeviceAccessibilityModuleDefault;
  const result = obj.onAccessibilityServiceEnabledChanged((accessibilityServiceEnabled) => {
    closure_0({ accessibilityServiceEnabled });
  });
  obj = { accessibilityServiceEnabled: NativeDeviceAccessibilityModuleDefault.isAccessibilityServiceEnabled() };
  return obj;
});
let result = size.fileFinishedImporting("modules/a11y/native/useIsAccessibilityServiceEnabled.native.tsx");

export const getIsAccessibilityServiceEnabled = function getIsAccessibilityServiceEnabled() {
  let accessibilityServiceEnabled = useIsScreenReaderEnabled.getIsScreenReaderEnabled();
  if (!accessibilityServiceEnabled) {
    accessibilityServiceEnabled = state.getState().accessibilityServiceEnabled;
  }
  return accessibilityServiceEnabled;
};
export const useIsAccessibilityServiceEnabled = function useIsAccessibilityServiceEnabled() {
  let isScreenReaderEnabled = useIsScreenReaderEnabled.useIsScreenReaderEnabled();
  if (!isScreenReaderEnabled) {
    isScreenReaderEnabled = state(ACCESSIBILITY_SERVICE_ENABLED_GETTER);
  }
  return isScreenReaderEnabled;
};