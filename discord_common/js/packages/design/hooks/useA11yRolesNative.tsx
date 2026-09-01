// discord_common/js/packages/design/hooks/useA11yRolesNative.tsx
import set from "../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";

const Platform = get_ActivityIndicator.Platform;
const result = set.fileFinishedImporting("../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx");

export const useCheckboxA11yNative = function useCheckboxA11yNative(checked) {
  checked = checked.checked;
  let obj = { accessibilityRole: "checkbox", accessibilityState: null };
  obj = { checked, selected: checked };
  const merged = Object.assign(Object.assign(checked, Object.create(null)));
  obj[1] = obj;
  return obj;
};
export const useRadioA11yNative = function useRadioA11yNative(selected) {
  selected = selected.selected;
  let obj = { accessibilityRole: "radio", accessibilityState: null };
  obj = { checked: selected, selected };
  const merged = Object.assign(Object.assign(selected, Object.create(null)));
  obj[1] = obj;
  return obj;
};
