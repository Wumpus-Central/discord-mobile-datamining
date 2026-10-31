// === Module 15851: ToggleButton ===

// Module 15851 (ToggleButton)
import BaseTextButton from "BaseTextButton" /* 5635 */;
import useToggleButtonProps from "useToggleButtonProps" /* 12780 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let merged = Object.assign(function ToggleButton(pressed) {
  pressed = pressed.pressed;
  const merged = Object.assign(pressed, Object.assign({ pressed: 0, ref: 0 }));
  const toggleButtonProps = useToggleButtonProps.useToggleButtonProps({ on: merged, off: merged }, pressed);
  const obj2 = {};
  const merged1 = Object.assign(toggleButtonProps);
  obj2.ref = pressed.ref;
  let str = "toggle-off";
  if (pressed) {
    str = "toggle-on";
  }
  obj2.variant = str;
  return jsx(BaseTextButton.BaseTextButton, {});
}, { Icon: fn(5635).BaseTextButton.Icon });
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Button/native/ToggleButton.native.tsx");

export const ToggleButton = merged;