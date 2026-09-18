// === Module 8171: useIsAccessibilityServiceEnabled ===

// Module 8171 (useIsAccessibilityServiceEnabled)
import NativeDeviceAccessibilityModuleDefault from "NativeDeviceAccessibilityModule" /* 5070 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5129 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

function ACCESSIBILITY_SERVICE_ENABLED_GETTER(accessibilityServiceEnabled) {
  return accessibilityServiceEnabled.accessibilityServiceEnabled;
}
const state = module_560.create((arg0) => {
  closure_0 = arg0;
  const result = NativeDeviceAccessibilityModuleDefault.onAccessibilityServiceEnabledChanged((accessibilityServiceEnabled) => {
    closure_0({ accessibilityServiceEnabled });
  });
  const obj2 = { accessibilityServiceEnabled: null };
  obj2.accessibilityServiceEnabled = NativeDeviceAccessibilityModuleDefault.isAccessibilityServiceEnabled();
  return obj2;
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