// === Module 7622: useIsAccessibilityServiceEnabled ===

// Module 7622 (useIsAccessibilityServiceEnabled)
import react_nativeDefault from "react-native" /* 5718 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5777 */;
import module_570 from "module_570" /* 570 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

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