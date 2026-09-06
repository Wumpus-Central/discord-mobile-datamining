// === Module 14165: useToggleButtonProps ===

// Module 14165 (useToggleButtonProps)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/components/Button/native/useToggleButtonProps.native.tsx");

export const useToggleButtonProps = function useToggleButtonProps(on, checked) {
  const obj = {};
  const merged = Object.assign(checked ? on.on : on.off);
  obj.accessibilityRole = "togglebutton";
  obj.accessibilityState = { checked };
  return obj;
};
export const useToggleIconButtonProps = function useToggleIconButtonProps(on, checked) {
  const obj = {};
  const merged = Object.assign(checked ? on.on : on.off);
  obj.accessibilityRole = "togglebutton";
  obj.accessibilityState = { checked };
  return obj;
};