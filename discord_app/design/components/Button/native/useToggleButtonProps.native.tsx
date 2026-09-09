// discord_app/design/components/Button/native/useToggleButtonProps.native.tsx
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("design/components/Button/native/useToggleButtonProps.native.tsx");

export const useToggleButtonProps = function useToggleButtonProps(on, pressed) {
  const obj = {};
  const merged = Object.assign(pressed ? on.on : on.off);
  obj.accessibilityRole = "togglebutton";
  obj.accessibilityState = { checked: pressed };
  return obj;
};
export const useToggleIconButtonProps = function useToggleIconButtonProps(on, flag) {
  const obj = {};
  const merged = Object.assign(flag ? on.on : on.off);
  obj.accessibilityRole = "togglebutton";
  obj.accessibilityState = { checked: flag };
  return obj;
};
