// === Module 14242: ToggleIconButton ===

// Module 14242 (ToggleIconButton)
import BaseIconButton from "BaseIconButton" /* 8151 */;
import useToggleButtonProps from "useToggleButtonProps" /* 14241 */;
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
  let obj = {};
  const merged1 = Object.assign(merged);
  if (selectedIcon == null) {
    selectedIcon = icon;
  }
  obj = { on: obj, off: null, icon: selectedIcon };
  const obj1 = {};
  const merged2 = Object.assign(merged);
  obj1.icon = icon;
  obj.off = obj1;
  const toggleIconButtonProps = obj.useToggleIconButtonProps(obj, flag);
  const obj2 = {};
  const merged3 = Object.assign(toggleIconButtonProps);
  obj2.ref = ref;
  obj2.variant = flag ? dependencyMap[variant].on : dependencyMap[variant].off;
  return jsx(BaseIconButton.BaseIconButton, {});
});