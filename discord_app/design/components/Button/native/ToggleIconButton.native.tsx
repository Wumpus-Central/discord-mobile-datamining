// === Module 14451: ToggleIconButton ===

// Module 14451 (ToggleIconButton)
import BaseIconButton from "BaseIconButton" /* 8184 */;
import useToggleButtonProps from "useToggleButtonProps" /* 14450 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const dependencyMap = { default: { off: "toggle-icon-default-off", on: "toggle-icon-default-on" }, critical: { off: "toggle-icon-critical-off", on: "toggle-icon-critical-on" }, "icon-only": { off: "toggle-icon-only-off", on: "toggle-icon-only-on" } };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Button/native/ToggleIconButton.native.tsx");

export const ToggleIconButton = noop.forwardRef((pressed, ref) => {
  let flag = pressed.pressed;
  if (flag === undefined) {
    flag = false;
  }
  ({ selectedIcon, variant } = pressed);
  if (variant === undefined) {
    variant = "default";
  }
  const icon = pressed.icon;
  const merged = Object.assign(pressed, Object.assign({ pressed: 0, selectedIcon: 0, variant: 0, icon: 0 }));
  const obj2 = {};
  const merged1 = Object.assign(merged);
  if (selectedIcon == null) {
    selectedIcon = icon;
  }
  const obj3 = { on: obj2, off: null };
  obj2.icon = selectedIcon;
  const obj4 = {};
  const merged2 = Object.assign(merged);
  obj4.icon = icon;
  obj3.off = obj4;
  const toggleIconButtonProps = useToggleButtonProps.useToggleIconButtonProps(obj3, flag);
  const obj5 = {};
  const merged3 = Object.assign(toggleIconButtonProps);
  obj5.ref = ref;
  obj5.variant = flag ? dependencyMap[variant].on : dependencyMap[variant].off;
  return jsx(BaseIconButton.BaseIconButton, {});
});