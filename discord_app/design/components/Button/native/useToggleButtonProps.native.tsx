// === Module 14248: useToggleButtonProps ===

// Module 14248 (useToggleButtonProps)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/components/Button/native/useToggleButtonProps.native.tsx");

export const useToggleButtonProps = function useToggleButtonProps(cResult, cResult2) {
  const obj = {};
  const merged = Object.assign(cResult2 ? cResult.on : cResult.off);
  obj.accessibilityRole = "togglebutton";
  obj.accessibilityState = { checked: cResult2 };
  return obj;
};
export const useToggleIconButtonProps = function useToggleIconButtonProps(first1, flag) {
  const obj = {};
  const merged = Object.assign(flag ? first1.on : first1.off);
  obj.accessibilityRole = "togglebutton";
  obj.accessibilityState = { checked: flag };
  return obj;
};