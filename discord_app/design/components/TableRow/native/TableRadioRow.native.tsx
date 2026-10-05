// === Module 6071: TableRadioRow ===

// Module 6071 (TableRadioRow)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import native from "native" /* 4582 */;
import react_native from "react-native" /* 4594 */;
import TableRow2 from "TableRow" /* 5993 */;
import TableRadioGroup from "TableRadioGroup" /* 6072 */;
import FormRadio from "FormRadio" /* 6075 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let value;

let closure_2 = ["value", "label", "subLabel", "disabled", "accessibilityHint", "legacyCompat_selected", "legacyCompat_onPress"];
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((value) => {
  let accessibilityHint;
  let accessibilityRole;
  let accessibilityState;
  let disabled;
  let label;
  let legacyCompat_onPress;
  let legacyCompat_selected;
  let subLabel;
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(33);
  if (cResult[0] !== value) {
    value = value.value;
    let closure_1 = value;
    ({ label, subLabel, disabled, accessibilityHint, legacyCompat_selected, legacyCompat_onPress } = value);
    let closure_0 = legacyCompat_onPress;
    const tmp14 = _objectWithoutProperties(value, closure_2);
    cResult[0] = value;
    cResult[1] = accessibilityHint;
    cResult[2] = label;
    cResult[3] = legacyCompat_onPress;
    cResult[4] = legacyCompat_selected;
    cResult[5] = tmp14;
    cResult[6] = subLabel;
    cResult[7] = disabled;
    cResult[8] = value;
    tmp10 = disabled;
    tmp9 = subLabel;
    tmp8 = tmp14;
    tmp7 = legacyCompat_selected;
    tmp5 = label;
    tmp4 = accessibilityHint;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    closure_0 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
    closure_1 = cResult[8];
  }
  const context = react.useContext(TableRadioGroup.TableRadioGroupContext);
  const onSelect = context.onSelect;
  if (tmp7 == null) {
    tmp7 = context.selectedValue === tmp11;
  }
  if (cResult[9] === legacyCompat_onPress) {
    if (cResult[10] === onSelect) {
      let tmp17;
      let tmp18;
      let str;
      if (cResult[11] === tmp11) {
        tmp17 = cResult[12];
      }
      if (cResult[13] !== tmp5) {
        const tmpResult = native;
        const nodeText = tmpResult.getNodeText(tmp5);
        cResult[13] = tmp5;
        cResult[14] = nodeText;
        tmp18 = nodeText;
      } else {
        tmp18 = cResult[14];
      }
      if (cResult[15] !== tmp9) {
        const tmpResult3 = native;
        const nodeText1 = tmpResult3.getNodeText(tmp9);
        cResult[15] = tmp9;
        cResult[16] = nodeText1;
        str = nodeText1;
      } else {
        str = cResult[16];
      }
      if (cResult[17] === (undefined !== tmp10 && tmp10)) {
        let tmp21;
        let tmp25;
        if (cResult[18] === tmp7) {
          tmp21 = cResult[19];
        }
        const tmpResult4 = react_native;
        const radioA11yNative = tmpResult4.useRadioA11yNative(tmp21);
        ({ accessibilityRole, accessibilityState } = radioA11yNative);
        if (str == null) {
          str = "";
        }
        const _HermesInternal = HermesInternal;
        const combined = "" + tmp18 + ", " + str;
        if (cResult[20] !== tmp7) {
          const tmp27 = jsx(FormRadio.FormRadio, { selected: tmp7 });
          cResult[20] = tmp7;
          cResult[21] = tmp27;
          tmp25 = tmp27;
        } else {
          tmp25 = cResult[21];
        }
        if (cResult[22] === tmp4) {
          if (cResult[23] === accessibilityRole) {
            if (cResult[24] === accessibilityState) {
              if (cResult[25] === (undefined !== tmp10 && tmp10)) {
                if (cResult[26] === tmp17) {
                  if (cResult[27] === tmp5) {
                    if (cResult[28] === tmp8) {
                      if (cResult[29] === tmp9) {
                        if (cResult[30] === combined) {
                          let tmp28;
                          if (cResult[31] === tmp25) {
                            tmp28 = cResult[32];
                          }
                          return tmp28;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const TableRow = TableRow2.TableRow;
        const merged = Object.assign(tmp8);
        const tmp33 = <TableRow arrow={false} label={tmp5} subLabel={tmp9} disabled={undefined !== tmp10 && tmp10} accessibilityState={accessibilityState} accessible accessibilityRole={accessibilityRole} accessibilityLabel={combined} accessibilityHint={tmp4} onPress={tmp17} trailing={tmp25} />;
        cResult[22] = tmp4;
        cResult[23] = accessibilityRole;
        cResult[24] = accessibilityState;
        cResult[25] = undefined !== tmp10 && tmp10;
        cResult[26] = tmp17;
        cResult[27] = tmp5;
        cResult[28] = tmp8;
        cResult[29] = tmp9;
        cResult[30] = combined;
        cResult[31] = tmp25;
        cResult[32] = tmp33;
        tmp28 = tmp33;
      }
      const obj4 = { selected: tmp7, disabled: undefined !== tmp10 && tmp10 };
      cResult[17] = undefined !== tmp10 && tmp10;
      cResult[18] = tmp7;
      cResult[19] = obj4;
      tmp21 = obj4;
    }
  }
  const fn = function x(arg0) {
    if (closure_0 != null) {
      tmp(arg0);
    }
    onSelect(closure_1);
  };
  cResult[9] = legacyCompat_onPress;
  cResult[10] = onSelect;
  cResult[11] = tmp11;
  cResult[12] = fn;
  tmp17 = fn;
}) : ((value) => {
  let accessibilityRole;
  let accessibilityState;
  let closure_129_1;
  let disabled;
  let label;
  let legacyCompat_selected;
  let subLabel;
  value = value.value;
  ({ label, subLabel, disabled } = value);
  if (disabled === undefined) {
    disabled = false;
  }
  ({ legacyCompat_selected, legacyCompat_onPress: closure_129_1 } = value);
  const accessibilityHint = value.accessibilityHint;
  const merged = Object.assign(value, Object.assign({ value: 0, label: 0, subLabel: 0, disabled: 0, accessibilityHint: 0, legacyCompat_selected: 0, legacyCompat_onPress: 0 }));
  const context = react.useContext(TableRadioGroup.TableRadioGroupContext);
  const onSelect = context.onSelect;
  if (legacyCompat_selected == null) {
    legacyCompat_selected = context.selectedValue === value;
  }
  const tmp2Result = native;
  const nodeText = tmp2Result.getNodeText(label);
  const tmp2Result3 = native;
  const nodeText1 = tmp2Result3.getNodeText(subLabel);
  const tmp2Result4 = react_native;
  const radioA11yNative = tmp2Result4.useRadioA11yNative({ selected: legacyCompat_selected, disabled });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const TableRow = TableRow2.TableRow;
  const merged1 = Object.assign(merged);
  let str = nodeText1;
  if (nodeText1 == null) {
    str = "";
  }
  return <TableRow arrow={false} label={label} subLabel={subLabel} disabled={disabled} accessibilityState={accessibilityState} accessible accessibilityRole={accessibilityRole} accessibilityLabel={"" + nodeText + ", " + str} accessibilityHint={accessibilityHint} onPress={function onPress(arg0) {
    if (closure_1_1 != null) {
      tmp(arg0);
    }
    onSelect(value);
  }} trailing={jsx(FormRadio.FormRadio, { selected: legacyCompat_selected })} />;
});
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRadioRow.native.tsx");

export const TableRadioRow = tmp2;