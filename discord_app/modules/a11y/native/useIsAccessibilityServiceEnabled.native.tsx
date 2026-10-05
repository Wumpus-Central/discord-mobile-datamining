// discord_app/modules/a11y/native/useIsAccessibilityServiceEnabled.native.tsx
import react_nativeDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceAccessibilityModule.tsx";
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled.native.tsx";
import 00570__ from "../../../../_runtime/metro/00570__.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function ACCESSIBILITY_SERVICE_ENABLED_GETTER(accessibilityServiceEnabled) {
  return accessibilityServiceEnabled.accessibilityServiceEnabled;
}
const state = module_570.create((arg0) => {
  let obj3;
  let closure_0 = arg0;
  let obj = react_nativeDefault;
  const result = obj.onAccessibilityServiceEnabledChanged((accessibilityServiceEnabled) => {
    const obj = { accessibilityServiceEnabled };
    closure_0(obj);
  });
  const obj2 = { accessibilityServiceEnabled: obj3.isAccessibilityServiceEnabled() };
  obj3 = react_nativeDefault;
  return obj2;
});
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = useIsScreenReaderEnabled;
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled() || state(ACCESSIBILITY_SERVICE_ENABLED_GETTER);
  return isScreenReaderEnabled;
}) : (() => {
  const obj = useIsScreenReaderEnabled;
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled() || state(ACCESSIBILITY_SERVICE_ENABLED_GETTER);
  return isScreenReaderEnabled;
});
let result = size.fileFinishedImporting("modules/a11y/native/useIsAccessibilityServiceEnabled.native.tsx");

export const getIsAccessibilityServiceEnabled = function getIsAccessibilityServiceEnabled() {
  const obj = useIsScreenReaderEnabled;
  const accessibilityServiceEnabled = obj.getIsScreenReaderEnabled() || state.getState().accessibilityServiceEnabled;
  return accessibilityServiceEnabled;
};
export const useIsAccessibilityServiceEnabled = tmp2;