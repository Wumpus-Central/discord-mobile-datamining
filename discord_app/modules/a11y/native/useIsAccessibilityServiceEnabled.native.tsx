// discord_app/modules/a11y/native/useIsAccessibilityServiceEnabled.native.tsx
import set from "../../../../_runtime/00002_set.js";
import enforcingDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceAccessibilityModule.tsx";
import SCREEN_READER_ENABLED_GETTER from "useIsScreenReaderEnabled.native.tsx";
import keys from "../../../../_runtime/00641_keys.js";

function ACCESSIBILITY_SERVICE_ENABLED_GETTER(accessibilityServiceEnabled) {
  return accessibilityServiceEnabled.accessibilityServiceEnabled;
}
let closure_4 = keys.create((arg0) => {
  closure_0 = arg0;
  let obj = enforcingDefault;
  const result = obj.onAccessibilityServiceEnabledChanged((accessibilityServiceEnabled) => {
    callback({ accessibilityServiceEnabled });
  });
  obj = { accessibilityServiceEnabled: enforcingDefault.isAccessibilityServiceEnabled() };
  return obj;
});
let result = set.fileFinishedImporting("modules/a11y/native/useIsAccessibilityServiceEnabled.native.tsx");

export const getIsAccessibilityServiceEnabled = function getIsAccessibilityServiceEnabled() {
  let accessibilityServiceEnabled = SCREEN_READER_ENABLED_GETTER.getIsScreenReaderEnabled();
  if (!accessibilityServiceEnabled) {
    accessibilityServiceEnabled = state.getState().accessibilityServiceEnabled;
  }
  return accessibilityServiceEnabled;
};
export const useIsAccessibilityServiceEnabled = function useIsAccessibilityServiceEnabled() {
  let isScreenReaderEnabled = SCREEN_READER_ENABLED_GETTER.useIsScreenReaderEnabled();
  if (!isScreenReaderEnabled) {
    isScreenReaderEnabled = state(ACCESSIBILITY_SERVICE_ENABLED_GETTER);
  }
  return isScreenReaderEnabled;
};
