// discord_app/design/components/Button/native/useToggleButtonProps.native.tsx
import size from "../../../../../_runtime/metro/00002__.js";

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
