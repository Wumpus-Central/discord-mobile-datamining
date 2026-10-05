// discord_app/design/components/Button/native/ToggleIconButton.native.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import BaseIconButton2 from "BaseIconButton.native.tsx";
import useToggleButtonProps from "useToggleButtonProps.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_2 = ["pressed", "selectedIcon", "variant", "icon"];
const jsx = Fragment.jsx;
let closure_5 = {
  default: { off: "toggle-icon-default-off", on: "toggle-icon-default-on" },
  critical: { off: "toggle-icon-critical-off", on: "toggle-icon-critical-on" },
  "icon-only": { off: "toggle-icon-only-off", on: "toggle-icon-only-on" },
};
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        let icon;
        let pressed;
        let selectedIcon;
        let tmp4;
        let tmp5;
        let tmp6;
        let tmp7;
        let tmp8;
        let variant;
        const obj = react2;
        const cResult = obj.c(19);
        if (cResult[0] !== arg0) {
          ({ pressed, selectedIcon, variant, icon } = arg0);
          const tmp11 = _objectWithoutProperties(arg0, closure_2);
          cResult[0] = arg0;
          cResult[1] = icon;
          cResult[2] = tmp11;
          cResult[3] = selectedIcon;
          cResult[4] = pressed;
          cResult[5] = variant;
          tmp8 = variant;
          tmp7 = pressed;
          tmp6 = selectedIcon;
          tmp5 = tmp11;
          tmp4 = icon;
        } else {
          tmp4 = cResult[1];
          tmp5 = cResult[2];
          tmp6 = cResult[3];
          tmp7 = cResult[4];
          tmp8 = cResult[5];
        }
        let str = "default";
        if (undefined !== tmp8) {
          str = tmp8;
        }
        if (tmp6 == null) {
          tmp6 = tmp4;
        }
        if (cResult[6] === tmp5) {
          let tmp13;
          if (cResult[7] === tmp6) {
            tmp13 = cResult[8];
          }
          if (cResult[9] === tmp4) {
            let tmp15;
            if (cResult[10] === tmp5) {
              tmp15 = cResult[11];
            }
            if (cResult[12] === tmp13) {
              let tmp19;
              if (cResult[13] === tmp15) {
                tmp19 = cResult[14];
              }
              const tmpResult = useToggleButtonProps;
              const toggleIconButtonProps = tmpResult.useToggleIconButtonProps(tmp19, tmp12);
              const tmp23 = undefined !== tmp7 && tmp7 ? closure_5[str].on : closure_5[str].off;
              if (cResult[15] === ref) {
                if (cResult[16] === tmp23) {
                  let tmp25;
                  if (cResult[17] === toggleIconButtonProps) {
                    tmp25 = cResult[18];
                  }
                  return tmp25;
                }
              }
              const BaseIconButton = BaseIconButton2.BaseIconButton;
              const merged = Object.assign(toggleIconButtonProps);
              const tmp30 = <BaseIconButton ref={ref} variant={tmp23} />;
              cResult[15] = ref;
              cResult[16] = tmp23;
              cResult[17] = toggleIconButtonProps;
              cResult[18] = tmp30;
              tmp25 = tmp30;
            }
            const obj3 = { on: tmp13, off: tmp15 };
            cResult[12] = tmp13;
            cResult[13] = tmp15;
            cResult[14] = obj3;
            tmp19 = obj3;
          }
          const obj4 = { icon: tmp4 };
          const merged1 = Object.assign(tmp5);
          cResult[9] = tmp4;
          cResult[10] = tmp5;
          cResult[11] = obj4;
          tmp15 = obj4;
        }
        const obj5 = { icon: tmp6 };
        const merged2 = Object.assign(tmp5);
        cResult[6] = tmp5;
        cResult[7] = tmp6;
        cResult[8] = obj5;
        tmp13 = obj5;
      }
    : (pressed, ref) => {
        let obj3;
        let selectedIcon;
        let variant;
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
        const obj = { icon: selectedIcon };
        const useToggleIconButtonProps = useToggleButtonProps.useToggleIconButtonProps;
        useToggleButtonProps;
        const merged1 = Object.assign(merged);
        if (selectedIcon == null) {
          selectedIcon = icon;
        }
        const obj2 = { on: obj, off: obj3 };
        obj3 = { icon };
        const merged2 = Object.assign(merged);
        const toggleIconButtonProps = useToggleIconButtonProps(obj2, flag);
        const BaseIconButton = BaseIconButton2.BaseIconButton;
        const merged3 = Object.assign(toggleIconButtonProps);
        return <BaseIconButton ref={ref} variant={flag ? closure_5[variant].on : closure_5[variant].off} />;
      },
);
const result = size.fileFinishedImporting("design/components/Button/native/ToggleIconButton.native.tsx");

export const ToggleIconButton = forwardRefResult;
