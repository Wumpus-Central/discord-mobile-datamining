// === Module 14267: ToggleButton ===

// Module 14267 (ToggleButton)
import c from "c" /* 576 */;
import BaseTextButton from "BaseTextButton" /* 5602 */;
import useToggleButtonProps from "useToggleButtonProps" /* 14268 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["pressed"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
let obj = { Icon: fn(5602).BaseTextButton.Icon };
let merged = Object.assign(noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((pressed, ref) => {
  const cResult = c.c(9);
  if (cResult[0] !== pressed) {
    pressed = pressed.pressed;
    const tmp8 = _objectWithoutProperties(pressed, closure_2);
    cResult[0] = pressed;
    cResult[1] = pressed;
    cResult[2] = tmp8;
    let tmp5 = tmp8;
    let tmp4 = pressed;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] !== tmp5) {
    const obj2 = { on: tmp5, off: tmp5 };
    cResult[3] = tmp5;
    cResult[4] = obj2;
    let tmp9 = obj2;
  } else {
    tmp9 = cResult[4];
  }
  const toggleButtonProps = useToggleButtonProps.useToggleButtonProps(tmp9, tmp4);
  let str = "toggle-off";
  if (tmp4) {
    str = "toggle-on";
  }
  if (cResult[5] === ref) {
    if (cResult[6] === str) {
      if (cResult[7] === toggleButtonProps) {
        let tmp11 = cResult[8];
      }
      return tmp11;
    }
  }
  const obj3 = {};
  const merged = Object.assign(toggleButtonProps);
  obj3.ref = ref;
  obj3.variant = str;
  const tmp13 = jsx(BaseTextButton.BaseTextButton, {});
  cResult[5] = ref;
  cResult[6] = str;
  cResult[7] = toggleButtonProps;
  cResult[8] = tmp13;
  tmp11 = tmp13;
  const tmpResult = useToggleButtonProps;
}) : ((pressed, ref) => {
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
})), obj);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Button/native/ToggleButton.native.tsx");

export const ToggleButton = merged;