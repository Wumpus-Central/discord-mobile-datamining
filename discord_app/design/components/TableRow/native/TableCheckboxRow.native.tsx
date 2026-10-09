// === Module 6183: TableCheckboxRow ===

// Module 6183 (TableCheckboxRow)
import c from "c" /* 576 */;
import native from "native" /* 4781 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4793 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import FormCheckbox from "FormCheckbox" /* 6184 */;
import TableRow from "TableRow" /* 6186 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["checked", "label", "subLabel", "disabled", "onPress", "accessibilityHint"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("design/components/TableRow/native/TableCheckboxRow.native.tsx");

export const TableCheckboxRow = ReactCompilerGating.isReactCompilerEnabled() ? (function TableCheckboxRow(checked) {
  const cResult = c.c(35);
  if (cResult[0] !== checked) {
    checked = checked.checked;
    closure_0 = checked;
    ({ label, subLabel, disabled, onPress } = checked);
    dependencyMap = onPress;
    const accessibilityHint = checked.accessibilityHint;
    const tmp13 = _objectWithoutProperties(checked, closure_2);
    cResult[0] = checked;
    cResult[1] = accessibilityHint;
    class T {
      constructor() {
        result = closure_2.set(0);
        tmp2 = closure_1(!closure_0);
        return;
      }
    }
    cResult[2] = checked;
    cResult[3] = label;
    cResult[4] = onPress;
    cResult[5] = tmp13;
    cResult[6] = subLabel;
    cResult[7] = disabled;
    let tmp9 = subLabel;
    let tmp8 = tmp13;
    let tmp6 = label;
    let tmp4 = accessibilityHint;
  } else {
    tmp4 = cResult[1];
    closure_0 = cResult[2];
    tmp6 = cResult[3];
    dependencyMap = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
  }
  const sharedValue = ReanimatedRexport.useSharedValue(0);
  if (cResult[8] !== sharedValue) {
    const fn = function x() {
      const result = sharedValue.set(1);
    };
    cResult[8] = sharedValue;
    cResult[9] = fn;
    let tmp16 = fn;
  } else {
    tmp16 = cResult[9];
  }
  if (cResult[10] === tmp5) {
    if (cResult[11] === onPress) {
      if (cResult[12] === sharedValue) {
        let tmp17 = cResult[13];
      }
      if (cResult[14] !== tmp6) {
        const nodeText = native.getNodeText(tmp6);
        cResult[14] = tmp6;
        cResult[15] = nodeText;
        let tmp18 = nodeText;
        const tmpResult4 = native;
      } else {
        tmp18 = cResult[15];
      }
      if (cResult[16] !== tmp9) {
        const nodeText1 = native.getNodeText(tmp9);
        cResult[16] = tmp9;
        cResult[17] = nodeText1;
        let str = nodeText1;
        const tmpResult5 = native;
      } else {
        str = cResult[17];
      }
      if (cResult[18] === tmp5) {
        if (cResult[19] === tmp14) {
          let tmp21 = cResult[20];
        }
        const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative(tmp21);
        ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
        if (str == null) {
          str = "";
        }
        const _HermesInternal = HermesInternal;
        const combined = "" + tmp18 + ", " + str;
        if (cResult[21] !== tmp5) {
          const obj2 = { checked: tmp5 };
          const tmp28 = jsx(FormCheckbox.FormCheckbox, { checked: tmp5 });
          cResult[21] = tmp5;
          cResult[22] = tmp28;
          let tmp26 = tmp28;
        } else {
          tmp26 = cResult[22];
        }
        if (cResult[23] === tmp4) {
          if (cResult[24] === accessibilityRole) {
            if (cResult[25] === accessibilityState) {
              if (cResult[26] === tmp14) {
                if (cResult[27] === tmp16) {
                  if (cResult[28] === tmp17) {
                    if (cResult[29] === tmp6) {
                      if (cResult[30] === tmp8) {
                        if (cResult[31] === tmp9) {
                          if (cResult[32] === combined) {
                            if (cResult[33] === tmp26) {
                              let tmp29 = cResult[34];
                            }
                            return tmp29;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        class T {
          constructor() {
            result = closure_2.set(0);
            tmp2 = closure_1(!closure_0);
            return;
          }
        }
        const merged = Object.assign(tmp8);
        tmp31.arrow = false;
        tmp31.label = tmp6;
        tmp31.subLabel = tmp9;
        tmp31.disabled = tmp14;
        tmp31.accessibilityState = accessibilityState;
        tmp31.accessible = true;
        tmp31.accessibilityRole = accessibilityRole;
        tmp31.accessibilityLabel = combined;
        tmp31.accessibilityHint = tmp4;
        tmp31.onPressIn = tmp16;
        tmp31.onPress = tmp17;
        tmp31.trailing = tmp26;
        const tmp35 = jsx(TableRow.TableRow, tmp31);
        cResult[23] = tmp4;
        cResult[24] = accessibilityRole;
        cResult[25] = accessibilityState;
        cResult[26] = tmp14;
        cResult[27] = tmp16;
        cResult[28] = tmp17;
        cResult[29] = tmp6;
        cResult[30] = tmp8;
        cResult[31] = tmp9;
        cResult[32] = combined;
        cResult[33] = tmp26;
        cResult[34] = tmp35;
        tmp29 = tmp35;
        const tmpResult6 = useA11yRolesNative;
      }
      const obj3 = { checked: tmp5, disabled: tmp14 };
      cResult[18] = tmp5;
      cResult[19] = tmp14;
      cResult[20] = obj3;
      tmp21 = obj3;
    }
  }
  class T {
    constructor() {
      result = closure_2.set(0);
      tmp2 = closure_1(!closure_0);
      return;
    }
  }
  cResult[10] = tmp5;
  cResult[11] = onPress;
  cResult[12] = sharedValue;
  cResult[13] = T;
  tmp17 = T;
  const tmpResult = ReanimatedRexport;
}) : (function TableCheckboxRow(checked) {
  checked = checked.checked;
  ({ label, subLabel, disabled } = checked);
  if (disabled === undefined) {
    disabled = false;
  }
  const onPress = checked.onPress;
  const merged = Object.assign(checked, Object.assign({ checked: 0, label: 0, subLabel: 0, disabled: 0, onPress: 0, accessibilityHint: 0 }));
  const sharedValue = ReanimatedRexport.useSharedValue(0);
  const items = [sharedValue];
  const items1 = [onPress, sharedValue, checked];
  const callback = noop.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  const callback1 = noop.useCallback(() => {
    const result = sharedValue.set(0);
    onPress(!checked);
  }, items1);
  const nodeText = native.getNodeText(label);
  const nodeText1 = native.getNodeText(subLabel);
  const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative({ checked, disabled });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const obj5 = {};
  const merged1 = Object.assign(merged);
  obj5.arrow = false;
  obj5.label = label;
  obj5.subLabel = subLabel;
  obj5.disabled = disabled;
  obj5.accessibilityState = accessibilityState;
  obj5.accessible = true;
  obj5.accessibilityRole = accessibilityRole;
  let str = nodeText1;
  if (nodeText1 == null) {
    str = "";
  }
  obj5.accessibilityLabel = "" + nodeText + ", " + str;
  obj5.accessibilityHint = checked.accessibilityHint;
  obj5.onPressIn = callback;
  obj5.onPress = callback1;
  obj5.trailing = jsx(FormCheckbox.FormCheckbox, { checked });
  return jsx(TableRow.TableRow, {});
});