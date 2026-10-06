// === Module 4600: react-native ===

// Module 4600 (react-native)
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

const Platform = react_native.Platform;
const result = size.fileFinishedImporting("../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx");

export const useCheckboxA11yNative = function useCheckboxA11yNative(cResult) {
  let obj2;
  const checked = cResult.checked;
  const obj = { accessibilityRole: "checkbox", accessibilityState: obj2 };
  obj2 = { checked, selected: checked };
  const merged = Object.assign(Object.assign(cResult, Object.assign({ checked: 0 })));
  return obj;
};
export const useRadioA11yNative = function useRadioA11yNative(cResult) {
  let obj2;
  const selected = cResult.selected;
  const obj = { accessibilityRole: "radio", accessibilityState: obj2 };
  obj2 = { checked: selected, selected };
  const merged = Object.assign(Object.assign(cResult, Object.assign({ selected: 0 })));
  return obj;
};