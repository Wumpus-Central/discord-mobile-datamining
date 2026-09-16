// === Module 4356: useA11yRolesNative ===

// Module 4356 (useA11yRolesNative)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const Platform = _mod17.Platform;
const result = size.fileFinishedImporting("../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx");

export const useCheckboxA11yNative = function useCheckboxA11yNative(checked) {
  checked = checked.checked;
  const obj = { accessibilityRole: "checkbox", accessibilityState: null };
  const merged = Object.assign(Object.assign(checked, Object.assign({ checked: 0 })));
  obj.accessibilityState = { checked, selected: checked };
  return obj;
};
export const useRadioA11yNative = function useRadioA11yNative(selected) {
  selected = selected.selected;
  const obj = { accessibilityRole: "radio", accessibilityState: null };
  const merged = Object.assign(Object.assign(selected, Object.assign({ selected: 0 })));
  obj.accessibilityState = { checked: selected, selected };
  return obj;
};