// discord_common/js/packages/design/hooks/useA11yRolesNative.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import size from "../../../../../_runtime/metro/00002__.js";

const Platform = _mod17.Platform;
const result = size.fileFinishedImporting("../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx");

export const useCheckboxA11yNative = function useCheckboxA11yNative(checked) {
  checked = checked.checked;
  let obj = { accessibilityRole: "checkbox", accessibilityState: null };
  obj = { checked, selected: checked };
  const merged = Object.assign(Object.assign(checked, Object.assign({ checked: 0 })));
  obj.accessibilityState = obj;
  return obj;
};
export const useRadioA11yNative = function useRadioA11yNative(selected) {
  selected = selected.selected;
  let obj = { accessibilityRole: "radio", accessibilityState: null };
  obj = { checked: selected, selected };
  const merged = Object.assign(Object.assign(selected, Object.assign({ selected: 0 })));
  obj.accessibilityState = obj;
  return obj;
};
