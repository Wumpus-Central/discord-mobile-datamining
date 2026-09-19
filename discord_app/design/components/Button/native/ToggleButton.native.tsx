// discord_app/design/components/Button/native/ToggleButton.native.tsx
import BaseTextButton from "BaseTextButton.native.tsx";
import useToggleButtonProps from "useToggleButtonProps.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const obj = { Icon: fn(5187).BaseTextButton.Icon };
let merged = Object.assign(
  noop.forwardRef((pressed, ref) => {
    pressed = pressed.pressed;
    const merged = Object.assign(pressed, Object.assign({ pressed: 0 }));
    const toggleButtonProps = useToggleButtonProps.useToggleButtonProps({ on: merged, off: merged }, pressed);
    const obj2 = {};
    const merged1 = Object.assign(toggleButtonProps);
    obj2.ref = ref;
    let str = "toggle-off";
    if (pressed) {
      str = "toggle-on";
    }
    obj2.variant = str;
    return jsx(BaseTextButton.BaseTextButton, {});
  }),
  obj,
);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Button/native/ToggleButton.native.tsx");

export const ToggleButton = merged;
