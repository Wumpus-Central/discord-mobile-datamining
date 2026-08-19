// === Module 4105: useCheckboxA11yNative ===

// Module 4105 (useCheckboxA11yNative)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const Platform = get_ActivityIndicator.Platform;
const result = obj132.fileFinishedImporting("../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx");

export const useCheckboxA11yNative = function useCheckboxA11yNative(checked) {
  checked = checked.checked;
  const obj = { checked, selected: checked };
  const merged = Object.assign(Object.assign(checked, Object.create(null)));
  obj[1] = obj;
  return obj;
};
export const useRadioA11yNative = function useRadioA11yNative(selected) {
  selected = selected.selected;
  const obj = { checked: selected, selected };
  const merged = Object.assign(Object.assign(selected, Object.create(null)));
  obj[1] = obj;
  return obj;
};