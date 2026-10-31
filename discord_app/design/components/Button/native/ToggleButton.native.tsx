// discord_app/design/components/Button/native/ToggleButton.native.tsx
import BaseTextButton from "BaseTextButton.native.tsx";
import useToggleButtonProps from "useToggleButtonProps.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let merged = Object.assign(
  function ToggleButton(pressed) {
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
  },
  { Icon: fn(5635).BaseTextButton.Icon },
);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Button/native/ToggleButton.native.tsx");

export const ToggleButton = merged;
