// discord_app/design/components/Button/native/useToggleButtonProps.native.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";

const result = obj132.fileFinishedImporting("design/components/Button/native/useToggleButtonProps.native.tsx");

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