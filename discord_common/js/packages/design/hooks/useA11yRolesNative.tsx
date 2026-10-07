// discord_common/js/packages/design/hooks/useA11yRolesNative.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import size from "../../../../../_runtime/metro/00002__.js";

const Platform = _mod17.Platform;
const result = size.fileFinishedImporting("../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx");

export const useCheckboxA11yNative = function useCheckboxA11yNative(cResult) {
  const checked = cResult.checked;
  const obj = { accessibilityRole: "checkbox", accessibilityState: null };
  const merged = Object.assign(Object.assign(cResult, Object.assign({ checked: 0 })));
  obj.accessibilityState = { checked, selected: checked };
  return obj;
};
export const useRadioA11yNative = function useRadioA11yNative(cResult) {
  const selected = cResult.selected;
  const obj = { accessibilityRole: "radio", accessibilityState: null };
  const merged = Object.assign(Object.assign(cResult, Object.assign({ selected: 0 })));
  obj.accessibilityState = { checked: selected, selected };
  return obj;
};
