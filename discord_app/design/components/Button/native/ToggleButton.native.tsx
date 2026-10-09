// discord_app/design/components/Button/native/ToggleButton.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import BaseTextButton from "BaseTextButton.native.tsx";
import useToggleButtonProps from "useToggleButtonProps.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["pressed", "ref"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
let obj2 = { Icon: fn(5377).BaseTextButton.Icon };
let merged = Object.assign(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ToggleButton(arg0) {
        const cResult = c.c(10);
        if (cResult[0] !== arg0) {
          ({ pressed, ref } = arg0);
          const tmp9 = _objectWithoutProperties(arg0, closure_2);
          cResult[0] = arg0;
          cResult[1] = pressed;
          cResult[2] = tmp9;
          cResult[3] = ref;
          let tmp6 = ref;
          let tmp5 = tmp9;
          let tmp4 = pressed;
        } else {
          tmp4 = cResult[1];
          tmp5 = cResult[2];
          tmp6 = cResult[3];
        }
        if (cResult[4] !== tmp5) {
          const obj2 = { on: tmp5, off: tmp5 };
          cResult[4] = tmp5;
          cResult[5] = obj2;
          let tmp10 = obj2;
        } else {
          tmp10 = cResult[5];
        }
        const toggleButtonProps = useToggleButtonProps.useToggleButtonProps(tmp10, tmp4);
        let str = "toggle-off";
        if (tmp4) {
          str = "toggle-on";
        }
        if (cResult[6] === tmp6) {
          if (cResult[7] === str) {
            if (cResult[8] === toggleButtonProps) {
              let tmp12 = cResult[9];
            }
            return tmp12;
          }
        }
        const obj3 = {};
        const merged = Object.assign(toggleButtonProps);
        obj3.ref = tmp6;
        obj3.variant = str;
        const tmp14 = jsx(BaseTextButton.BaseTextButton, {});
        cResult[6] = tmp6;
        cResult[7] = str;
        cResult[8] = toggleButtonProps;
        cResult[9] = tmp14;
        tmp12 = tmp14;
        const tmpResult = useToggleButtonProps;
      }
    : function ToggleButton(pressed) {
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
  obj2,
);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Button/native/ToggleButton.native.tsx");

export const ToggleButton = merged;
