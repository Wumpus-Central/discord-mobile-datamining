// === Module 7952: useIsAccessibilityServiceEnabled ===

// Module 7952 (useIsAccessibilityServiceEnabled)
import NativeDeviceAccessibilityModuleDefault from "NativeDeviceAccessibilityModule" /* 4908 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 4962 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

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