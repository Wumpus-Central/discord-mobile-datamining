// discord_app/design/components/Button/native/ToggleIconButton.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import BaseIconButton from "BaseIconButton.native.tsx";
import useToggleButtonProps from "useToggleButtonProps.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["pressed", "selectedIcon", "variant", "icon"];
const jsx = fn(21).jsx;
const dependencyMap = {
  default: { off: "toggle-icon-default-off", on: "toggle-icon-default-on" },
  critical: { off: "toggle-icon-critical-off", on: "toggle-icon-critical-on" },
  "icon-only": { off: "toggle-icon-only-off", on: "toggle-icon-only-on" },
};
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Button/native/ToggleIconButton.native.tsx");

export const ToggleIconButton = noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        const cResult = c.c(19);
        if (cResult[0] !== arg0) {
          ({ pressed, selectedIcon, variant, icon } = arg0);
          const tmp11 = _objectWithoutProperties(arg0, closure_2);
          cResult[0] = arg0;
          cResult[1] = icon;
          cResult[2] = tmp11;
          cResult[3] = selectedIcon;
          cResult[4] = pressed;
          cResult[5] = variant;
          let tmp8 = variant;
          let tmp6 = selectedIcon;
          let tmp5 = tmp11;
          let tmp4 = icon;
        } else {
          tmp4 = cResult[1];
          tmp5 = cResult[2];
          tmp6 = cResult[3];
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
          if (cResult[7] === tmp6) {
            let tmp13 = cResult[8];
          }
          if (cResult[9] === tmp4) {
            if (cResult[10] === tmp5) {
              let tmp15 = cResult[11];
            }
            if (cResult[12] === tmp13) {
              if (cResult[13] === tmp15) {
                let tmp19 = cResult[14];
              }
              const toggleIconButtonProps = useToggleButtonProps.useToggleIconButtonProps(tmp19, tmp12);
              const tmp23 = tmp12 ? dependencyMap[str].on : dependencyMap[str].off;
              if (cResult[15] === ref) {
                if (cResult[16] === tmp23) {
                  if (cResult[17] === toggleIconButtonProps) {
                    let tmp25 = cResult[18];
                  }
                  return tmp25;
                }
              }
              const obj2 = {};
              const merged = Object.assign(toggleIconButtonProps);
              obj2.ref = ref;
              obj2.variant = tmp23;
              const tmp30 = jsx(BaseIconButton.BaseIconButton, {});
              cResult[15] = ref;
              cResult[16] = tmp23;
              cResult[17] = toggleIconButtonProps;
              cResult[18] = tmp30;
              tmp25 = tmp30;
              const tmpResult = useToggleButtonProps;
            }
            const obj3 = { on: tmp13, off: tmp15 };
            cResult[12] = tmp13;
            cResult[13] = tmp15;
            cResult[14] = obj3;
            tmp19 = obj3;
          }
          const obj4 = {};
          const merged1 = Object.assign(tmp5);
          obj4.icon = tmp4;
          cResult[9] = tmp4;
          cResult[10] = tmp5;
          cResult[11] = obj4;
          tmp15 = obj4;
        }
        const obj5 = {};
        const merged2 = Object.assign(tmp5);
        obj5.icon = tmp6;
        cResult[6] = tmp5;
        cResult[7] = tmp6;
        cResult[8] = obj5;
        tmp13 = obj5;
      }
    : (pressed, ref) => {
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
      },
);
