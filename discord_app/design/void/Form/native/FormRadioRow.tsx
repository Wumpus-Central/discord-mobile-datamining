// === Module 8592: FormRadioRow ===

// Module 8592 (FormRadioRow)
import c from "c" /* 576 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4832 */;
import TableRadioRow from "TableRadioRow" /* 6261 */;
import RedesignCompat from "RedesignCompat" /* 6263 */;
import FormRowDefault from "FormRow" /* 6827 */;
import Form_FormRadioDefault from "Form/FormRadio" /* 6833 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["selected", "align", "leading", "value", "onPress", "style"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormRadioRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FormRadioRow(arg0) {
  const cResult = c.c(31);
  if (cResult[0] !== arg0) {
    ({ selected, align, leading, value, onPress, style } = arg0);
    const tmp13 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = leading;
    cResult[2] = onPress;
    cResult[3] = tmp13;
    cResult[4] = selected;
    cResult[5] = style;
    cResult[6] = align;
    cResult[7] = value;
    let tmp10 = value;
    let tmp9 = align;
    let tmp8 = style;
    let tmp7 = selected;
    let tmp6 = tmp13;
    let tmp5 = onPress;
    let tmp4 = leading;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
  }
  let str = "left";
  if (undefined !== tmp9) {
    str = tmp9;
  }
  const context = noop.useContext(RedesignCompat.RedesignCompatContext);
  if (cResult[8] !== tmp7) {
    const obj2 = { selected: tmp7 };
    cResult[8] = tmp7;
    cResult[9] = obj2;
    let tmp15 = obj2;
  } else {
    tmp15 = cResult[9];
  }
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative(tmp15);
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (context) {
    if (cResult[10] === tmp5) {
      if (cResult[11] === tmp6) {
        if (cResult[12] === tmp7) {
          if (cResult[13] === tmp4) {
            if (cResult[14] === tmp10) {
              let tmp33 = cResult[15];
            }
            return tmp33;
          }
        }
      }
    }
    const obj3 = { icon: tmp4, value: tmp10, legacyCompat_selected: tmp7, legacyCompat_onPress: tmp5 };
    const merged = Object.assign(tmp6);
    const tmp38 = jsx(TableRadioRow.TableRadioRow, { icon: tmp4, value: tmp10, legacyCompat_selected: tmp7, legacyCompat_onPress: tmp5 });
    cResult[10] = tmp5;
    cResult[11] = tmp6;
    cResult[12] = tmp7;
    cResult[13] = tmp4;
    cResult[14] = tmp10;
    cResult[15] = tmp38;
    tmp33 = tmp38;
  } else {
    if (cResult[16] === str) {
      if (cResult[17] === tmp7) {
        let tmp17 = cResult[18];
      }
      if (cResult[19] === str) {
        if (cResult[20] === tmp4) {
          if (cResult[21] === tmp7) {
            let tmp21 = cResult[22];
          }
          if (cResult[23] === accessibilityRole) {
            if (cResult[24] === accessibilityState) {
              if (cResult[25] === tmp5) {
                if (cResult[26] === tmp6) {
                  if (cResult[27] === tmp8) {
                    if (cResult[28] === tmp17) {
                      if (cResult[29] === tmp21) {
                        let tmp25 = cResult[30];
                      }
                      return tmp25;
                    }
                  }
                }
              }
            }
          }
          const obj4 = {};
          const merged1 = Object.assign(tmp6);
          obj4.style = tmp8;
          obj4.onPress = tmp5;
          obj4.accessibilityRole = accessibilityRole;
          obj4.accessibilityState = accessibilityState;
          obj4.trailing = tmp17;
          obj4.leading = tmp21;
          const tmp32 = jsx(FormRowDefault, {});
          cResult[23] = accessibilityRole;
          cResult[24] = accessibilityState;
          cResult[25] = tmp5;
          cResult[26] = tmp6;
          cResult[27] = tmp8;
          cResult[28] = tmp17;
          cResult[29] = tmp21;
          cResult[30] = tmp32;
          tmp25 = tmp32;
        }
      }
      let tmp22 = tmp4;
      if ("left" === str) {
        const obj5 = { selected: tmp7 };
        tmp22 = jsx(Form_FormRadioDefault, { selected: tmp7 });
      }
      cResult[19] = str;
      cResult[20] = tmp4;
      cResult[21] = tmp7;
      cResult[22] = tmp22;
      tmp21 = tmp22;
    }
    let tmp18 = null;
    if ("right" === str) {
      const obj6 = { selected: tmp7 };
      tmp18 = jsx(Form_FormRadioDefault, { selected: tmp7 });
    }
    cResult[16] = str;
    cResult[17] = tmp7;
    cResult[18] = tmp18;
    tmp17 = tmp18;
  }
  const tmpResult = useA11yRolesNative;
}) : (function FormRadioRow(arg0) {
  ({ selected, align } = arg0);
  if (align === undefined) {
    align = "left";
  }
  ({ leading, onPress } = arg0);
  ({ value, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ selected: 0, align: 0, leading: 0, value: 0, onPress: 0, style: 0 }));
  const context = noop.useContext(RedesignCompat.RedesignCompatContext);
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected });
  if (context) {
    const obj2 = { icon: leading, value, legacyCompat_selected: selected, legacyCompat_onPress: onPress };
    const merged1 = Object.assign(merged);
    let tmp8Result = jsx(TableRadioRow.TableRadioRow, { icon: leading, value, legacyCompat_selected: selected, legacyCompat_onPress: onPress });
  } else {
    const obj3 = {};
    const merged2 = Object.assign(merged);
    obj3.style = style;
    obj3.onPress = onPress;
    obj3.accessibilityRole = tmp6;
    obj3.accessibilityState = tmp7;
    let tmp8Result3 = null;
    if ("right" === align) {
      const obj4 = { selected };
      tmp8Result3 = jsx(Form_FormRadioDefault, { selected });
    }
    obj3.trailing = tmp8Result3;
    let tmp8Result4 = leading;
    if ("left" === align) {
      const obj5 = { selected };
      tmp8Result4 = jsx(Form_FormRadioDefault, { selected });
    }
    obj3.leading = tmp8Result4;
    tmp8Result = jsx(FormRowDefault, {});
  }
  return tmp8Result;
});