// === Module 7869: useIsAccessibilityServiceEnabled ===

// Module 7869 (useIsAccessibilityServiceEnabled)
import NativeDeviceAccessibilityModuleDefault from "NativeDeviceAccessibilityModule" /* 5301 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5360 */;
import module_570 from "module_570" /* 570 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function ACCESSIBILITY_SERVICE_ENABLED_GETTER(accessibilityServiceEnabled) {
  return accessibilityServiceEnabled.accessibilityServiceEnabled;
}
const state = module_570.create((arg0) => {
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
export const useIsAccessibilityServiceEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsAccessibilityServiceEnabled() {
  let isScreenReaderEnabled = useIsScreenReaderEnabled.useIsScreenReaderEnabled();
  if (!isScreenReaderEnabled) {
    isScreenReaderEnabled = state(ACCESSIBILITY_SERVICE_ENABLED_GETTER);
  }
  return isScreenReaderEnabled;
}) : (function useIsAccessibilityServiceEnabled() {
  let isScreenReaderEnabled = useIsScreenReaderEnabled.useIsScreenReaderEnabled();
  if (!isScreenReaderEnabled) {
    isScreenReaderEnabled = state(ACCESSIBILITY_SERVICE_ENABLED_GETTER);
  }
  return isScreenReaderEnabled;
});