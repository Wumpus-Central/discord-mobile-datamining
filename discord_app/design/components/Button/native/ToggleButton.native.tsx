// discord_app/design/components/Button/native/ToggleButton.native.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import BaseTextButton2 from "BaseTextButton.native.tsx";
import useToggleButtonProps from "useToggleButtonProps.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let pressed;

let closure_2 = ["pressed"];
const jsx = Fragment.jsx;
const forwardRef = react.forwardRef;
let obj = { Icon: BaseTextButton2.BaseTextButton.Icon };
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (pressed, ref) => {
        let tmp4;
        let tmp5;
        let tmp9;
        const obj = react2;
        const cResult = obj.c(9);
        if (cResult[0] !== pressed) {
          pressed = pressed.pressed;
          const tmp8 = _objectWithoutProperties(pressed, closure_2);
          cResult[0] = pressed;
          cResult[1] = pressed;
          cResult[2] = tmp8;
          tmp5 = tmp8;
          tmp4 = pressed;
        } else {
          tmp4 = cResult[1];
          tmp5 = cResult[2];
        }
        if (cResult[3] !== tmp5) {
          const obj2 = { on: tmp5, off: tmp5 };
          cResult[3] = tmp5;
          cResult[4] = obj2;
          tmp9 = obj2;
        } else {
          tmp9 = cResult[4];
        }
        const tmpResult = useToggleButtonProps;
        const toggleButtonProps = tmpResult.useToggleButtonProps(tmp9, tmp4);
        let str = "toggle-off";
        if (tmp4) {
          str = "toggle-on";
        }
        if (cResult[5] === ref) {
          if (cResult[6] === str) {
            let tmp11;
            if (cResult[7] === toggleButtonProps) {
              tmp11 = cResult[8];
            }
            return tmp11;
          }
        }
        const BaseTextButton = BaseTextButton2.BaseTextButton;
        const merged = Object.assign(toggleButtonProps);
        const tmp13 = <BaseTextButton ref={ref} variant={str} />;
        cResult[5] = ref;
        cResult[6] = str;
        cResult[7] = toggleButtonProps;
        cResult[8] = tmp13;
        tmp11 = tmp13;
      }
    : (pressed, ref) => {
        pressed = pressed.pressed;
        const merged = Object.assign(pressed, Object.assign({ pressed: 0 }));
        const obj = useToggleButtonProps;
        const toggleButtonProps = obj.useToggleButtonProps({ on: merged, off: merged }, pressed);
        const BaseTextButton = BaseTextButton2.BaseTextButton;
        const merged1 = Object.assign(toggleButtonProps);
        let str = "toggle-off";
        if (pressed) {
          str = "toggle-on";
        }
        return <BaseTextButton ref={ref} variant={str} />;
      },
);
let obj2 = assign(forwardRefResult, obj);
const result = size.fileFinishedImporting("design/components/Button/native/ToggleButton.native.tsx");

export const ToggleButton = obj2;
