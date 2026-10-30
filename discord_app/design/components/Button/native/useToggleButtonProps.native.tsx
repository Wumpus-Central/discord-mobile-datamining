// === Module 12745: useToggleButtonProps ===

// Module 12745 (useToggleButtonProps)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/components/Button/native/useToggleButtonProps.native.tsx");

export function useToggleButtonProps(on, pressed) {
  const obj = {};
  const merged = Object.assign(pressed ? on.on : on.off);
  obj.accessibilityRole = "togglebutton";
  obj.accessibilityState = { checked: pressed };
  return obj;
}
export function useToggleIconButtonProps(on, flag) {
  const obj = {};
  const merged = Object.assign(flag ? on.on : on.off);
  obj.accessibilityRole = "togglebutton";
  obj.accessibilityState = { checked: flag };
  return obj;
}