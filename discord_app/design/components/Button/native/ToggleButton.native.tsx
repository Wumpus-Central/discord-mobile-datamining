// === Module 14191: ToggleButton ===

// Module 14191 (ToggleButton)
import BaseTextButton from "BaseTextButton" /* 4990 */;
import useToggleButtonProps from "useToggleButtonProps" /* 14192 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { Icon: fn(4990).BaseTextButton.Icon };
let merged = Object.assign(noop.forwardRef((pressed, ref) => {
  pressed = pressed.pressed;
  const merged = Object.assign(pressed, Object.assign({ pressed: 0 }));
  let obj = useToggleButtonProps;
  const toggleButtonProps = obj.useToggleButtonProps({ on: merged, off: merged }, pressed);
  obj = {};
  const merged1 = Object.assign(toggleButtonProps);
  obj.ref = ref;
  let str = "toggle-off";
  if (pressed) {
    str = "toggle-on";
  }
  obj.variant = str;
  return jsx(BaseTextButton.BaseTextButton, {});
}), obj);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Button/native/ToggleButton.native.tsx");

export const ToggleButton = merged;