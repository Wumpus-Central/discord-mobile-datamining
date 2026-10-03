// === Module 6071: TableRadioRow ===

// Module 6071 (TableRadioRow)
import c from "c" /* 576 */;
import native from "native" /* 4582 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4594 */;
import TableRow from "TableRow" /* 5993 */;
import TableRadioGroup from "TableRadioGroup" /* 6072 */;
import FormRadio from "FormRadio" /* 6075 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["value", "label", "subLabel", "disabled", "accessibilityHint", "legacyCompat_selected", "legacyCompat_onPress"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRadioRow.native.tsx");

export const TableRadioRow = ReactCompilerGating.isReactCompilerEnabled() ? ((value) => {
  const cResult = c.c(33);
  if (cResult[0] !== value) {
    value = value.value;
    closure_1 = value;
    ({ label, subLabel, disabled, accessibilityHint, legacyCompat_selected, legacyCompat_onPress } = value);
    closure_0 = legacyCompat_onPress;
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
    let tmp9 = subLabel;
    let tmp8 = tmp14;
    let tmp7 = legacyCompat_selected;
    let tmp5 = label;
    let tmp4 = accessibilityHint;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    closure_0 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    closure_1 = cResult[8];
  }
  const context = noop.useContext(TableRadioGroup.TableRadioGroupContext);
  const onSelect = context.onSelect;
  if (tmp7 == null) {
    tmp7 = context.selectedValue === tmp11;
  }
  if (cResult[9] === legacyCompat_onPress) {
    if (cResult[10] === onSelect) {
      if (cResult[11] === tmp11) {
        let tmp17 = cResult[12];
      }
      if (cResult[13] !== tmp5) {
        const nodeText = native.getNodeText(tmp5);
        cResult[13] = tmp5;
        cResult[14] = nodeText;
        let tmp18 = nodeText;
        const tmpResult = native;
      } else {
        tmp18 = cResult[14];
      }
      if (cResult[15] !== tmp9) {
        const nodeText1 = native.getNodeText(tmp9);
        cResult[15] = tmp9;
        cResult[16] = nodeText1;
        let str = nodeText1;
        const tmpResult3 = native;
      } else {
        str = cResult[16];
      }
      if (cResult[17] === tmp15) {
        if (cResult[18] === tmp7) {
          let tmp21 = cResult[19];
        }
        const radioA11yNative = useA11yRolesNative.useRadioA11yNative(tmp21);
        ({ accessibilityRole, accessibilityState } = radioA11yNative);
        if (str == null) {
          str = "";
        }
        const _HermesInternal = HermesInternal;
        const combined = "" + tmp18 + ", " + str;
        if (cResult[20] !== tmp7) {
          const obj2 = { selected: tmp7 };
          const tmp27 = jsx(FormRadio.FormRadio, { selected: tmp7 });
          cResult[20] = tmp7;
          cResult[21] = tmp27;
          let tmp25 = tmp27;
        } else {
          tmp25 = cResult[21];
        }
        if (cResult[22] === tmp4) {
          if (cResult[23] === accessibilityRole) {
            if (cResult[24] === accessibilityState) {
              if (cResult[25] === tmp15) {
                if (cResult[26] === tmp17) {
                  if (cResult[27] === tmp5) {
                    if (cResult[28] === tmp8) {
                      if (cResult[29] === tmp9) {
                        if (cResult[30] === combined) {
                          if (cResult[31] === tmp25) {
                            let tmp28 = cResult[32];
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
        const obj3 = {};
        const merged = Object.assign(tmp8);
        obj3.arrow = false;
        obj3.label = tmp5;
        obj3.subLabel = tmp9;
        obj3.disabled = tmp15;
        obj3.accessibilityState = accessibilityState;
        obj3.accessible = true;
        obj3.accessibilityRole = accessibilityRole;
        obj3.accessibilityLabel = combined;
        obj3.accessibilityHint = tmp4;
        obj3.onPress = tmp17;
        obj3.trailing = tmp25;
        const tmp33 = jsx(TableRow.TableRow, {});
        cResult[22] = tmp4;
        cResult[23] = accessibilityRole;
        cResult[24] = accessibilityState;
        cResult[25] = tmp15;
        cResult[26] = tmp17;
        cResult[27] = tmp5;
        cResult[28] = tmp8;
        cResult[29] = tmp9;
        cResult[30] = combined;
        cResult[31] = tmp25;
        cResult[32] = tmp33;
        tmp28 = tmp33;
        const tmpResult4 = useA11yRolesNative;
      }
      const obj4 = { selected: tmp7, disabled: tmp15 };
      cResult[17] = tmp15;
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
  value = value.value;
  require = value;
  ({ label, subLabel, disabled } = value);
  if (disabled === undefined) {
    disabled = false;
  }
  ({ legacyCompat_selected, legacyCompat_onPress: dependencyMap } = value);
  const merged = Object.assign(value, Object.assign({ value: 0, label: 0, subLabel: 0, disabled: 0, accessibilityHint: 0, legacyCompat_selected: 0, legacyCompat_onPress: 0 }));
  const context = noop.useContext(TableRadioGroup.TableRadioGroupContext);
  const onSelect = context.onSelect;
  if (legacyCompat_selected == null) {
    legacyCompat_selected = context.selectedValue === value;
  }
  const nodeText = native.getNodeText(label);
  const tmp2Result = native;
  const nodeText1 = native.getNodeText(subLabel);
  const tmp2Result3 = native;
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected: legacyCompat_selected, disabled });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.arrow = false;
  obj.label = label;
  obj.subLabel = subLabel;
  obj.disabled = disabled;
  obj.accessibilityState = accessibilityState;
  obj.accessible = true;
  obj.accessibilityRole = accessibilityRole;
  let str = nodeText1;
  if (nodeText1 == null) {
    str = "";
  }
  obj.accessibilityLabel = "" + nodeText + ", " + str;
  obj.accessibilityHint = value.accessibilityHint;
  obj.onPress = function onPress(arg0) {
    if (dependencyMap != null) {
      tmp(arg0);
    }
    onSelect(value);
  };
  obj.trailing = jsx(FormRadio.FormRadio, { selected: legacyCompat_selected });
  return jsx(TableRow.TableRow, {});
});