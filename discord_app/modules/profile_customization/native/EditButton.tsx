// === Module 14433: EditButton ===

// Module 14433 (EditButton)
import c from "c" /* 576 */;
import IconButton from "IconButton" /* 7586 */;
import _modDef7636 from "module_7636" /* 7636 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/profile_customization/native/EditButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(8);
  ({ onPress, accessibilityLabel, style, variant, disabled } = arg0);
  let str = "primary-overlay";
  if (undefined !== variant) {
    str = variant;
  }
  if (cResult[0] === accessibilityLabel) {
    if (cResult[1] === disabled) {
      if (cResult[2] === onPress) {
        if (cResult[3] === str) {
          let tmp4 = cResult[4];
        }
        if (cResult[5] === style) {
          if (cResult[6] === tmp4) {
            let tmp6 = cResult[7];
          }
          return tmp6;
        }
        const obj2 = { style, children: tmp4 };
        const tmp9 = <View style={style}>{tmp4}</View>;
        cResult[5] = style;
        cResult[6] = tmp4;
        cResult[7] = tmp9;
        tmp6 = tmp9;
      }
    }
  }
  const tmp5 = jsx(IconButton.IconButton, { icon: _modDef7636, variant: str, size: "sm", onPress, accessibilityLabel, disabled });
  cResult[0] = accessibilityLabel;
  cResult[1] = disabled;
  cResult[2] = onPress;
  cResult[3] = str;
  cResult[4] = tmp5;
  tmp4 = tmp5;
  const obj3 = { icon: _modDef7636, variant: str, size: "sm", onPress, accessibilityLabel, disabled };
}) : ((disabled) => {
  let str = disabled.variant;
  ({ onPress, accessibilityLabel, style } = disabled);
  if (str === undefined) {
    str = "primary-overlay";
  }
  const obj = { style, children: jsx(IconButton.IconButton, { icon: _modDef7636, variant: str, size: "sm", onPress, accessibilityLabel, disabled: disabled.disabled }) };
  return <View style={style}>{jsx(IconButton.IconButton, { icon: _modDef7636, variant: str, size: "sm", onPress, accessibilityLabel, disabled: disabled.disabled })}</View>;
});