// === Module 14190: ToggleIconButton ===

// Module 14190 (ToggleIconButton)
import c from "c" /* 576 */;
import BaseIconButton from "BaseIconButton" /* 8115 */;
import useToggleButtonProps from "useToggleButtonProps" /* 14189 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["pressed", "selectedIcon", "variant", "icon", "ref"];
const jsx = fn(21).jsx;
const dependencyMap = { default: { off: "toggle-icon-default-off", on: "toggle-icon-default-on" }, critical: { off: "toggle-icon-critical-off", on: "toggle-icon-critical-on" }, "icon-only": { off: "toggle-icon-only-off", on: "toggle-icon-only-on" } };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Button/native/ToggleIconButton.native.tsx");

export const ToggleIconButton = ReactCompilerGating.isReactCompilerEnabled() ? (function ToggleIconButton(arg0) {
  const cResult = c.c(20);
  if (cResult[0] !== arg0) {
    ({ pressed, selectedIcon, variant, icon, ref } = arg0);
    const tmp12 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = icon;
    cResult[2] = tmp12;
    cResult[3] = ref;
    cResult[4] = selectedIcon;
    cResult[5] = pressed;
    cResult[6] = variant;
    let tmp9 = variant;
    let tmp7 = selectedIcon;
    let tmp6 = ref;
    let tmp5 = tmp12;
    let tmp4 = icon;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp9 = cResult[6];
  }
  let str = "default";
  if (undefined !== tmp9) {
    str = tmp9;
  }
  if (tmp7 == null) {
    tmp7 = tmp4;
  }
  if (cResult[7] === tmp5) {
    if (cResult[8] === tmp7) {
      let tmp14 = cResult[9];
    }
    if (cResult[10] === tmp4) {
      if (cResult[11] === tmp5) {
        let tmp16 = cResult[12];
      }
      if (cResult[13] === tmp14) {
        if (cResult[14] === tmp16) {
          let tmp20 = cResult[15];
        }
        const toggleIconButtonProps = useToggleButtonProps.useToggleIconButtonProps(tmp20, tmp13);
        const tmp24 = tmp13 ? dependencyMap[str].on : dependencyMap[str].off;
        if (cResult[16] === tmp6) {
          if (cResult[17] === tmp24) {
            if (cResult[18] === toggleIconButtonProps) {
              let tmp25 = cResult[19];
            }
            return tmp25;
          }
        }
        const obj2 = {};
        const merged = Object.assign(toggleIconButtonProps);
        obj2.ref = tmp6;
        obj2.variant = tmp24;
        const tmp30 = jsx(BaseIconButton.BaseIconButton, {});
        cResult[16] = tmp6;
        cResult[17] = tmp24;
        cResult[18] = toggleIconButtonProps;
        cResult[19] = tmp30;
        tmp25 = tmp30;
        const tmpResult = useToggleButtonProps;
      }
      const obj3 = { on: tmp14, off: tmp16 };
      cResult[13] = tmp14;
      cResult[14] = tmp16;
      cResult[15] = obj3;
      tmp20 = obj3;
    }
    const obj4 = {};
    const merged1 = Object.assign(tmp5);
    obj4.icon = tmp4;
    cResult[10] = tmp4;
    cResult[11] = tmp5;
    cResult[12] = obj4;
    tmp16 = obj4;
  }
  const obj5 = {};
  const merged2 = Object.assign(tmp5);
  obj5.icon = tmp7;
  cResult[7] = tmp5;
  cResult[8] = tmp7;
  cResult[9] = obj5;
  tmp14 = obj5;
}) : (function ToggleIconButton(pressed) {
  let flag = pressed.pressed;
  if (flag === undefined) {
    flag = false;
  }
  ({ selectedIcon, variant } = pressed);
  if (variant === undefined) {
    variant = "default";
  }
  const icon = pressed.icon;
  const merged = Object.assign(pressed, Object.assign({ pressed: 0, selectedIcon: 0, variant: 0, icon: 0, ref: 0 }));
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
  obj5.ref = pressed.ref;
  obj5.variant = flag ? dependencyMap[variant].on : dependencyMap[variant].off;
  return jsx(BaseIconButton.BaseIconButton, {});
});