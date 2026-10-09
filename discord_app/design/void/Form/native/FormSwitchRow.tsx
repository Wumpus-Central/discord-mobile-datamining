// === Module 8575: FormSwitchRow ===

// Module 8575 (FormSwitchRow)
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import RedesignCompat from "RedesignCompat" /* 6268 */;
import FormRowDefault from "FormRow" /* 6824 */;
import FormLabelDefault from "FormLabel" /* 6826 */;
import TableSwitchRow from "TableSwitchRow" /* 6889 */;
import Form_FormSwitchDefault from "Form/FormSwitch" /* 8573 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["onValueChange", "value", "disabled", "label", "subLabel", "accessibilityHint", "trailing", "numberOfLines", "switchProps"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5091);
let closure_10 = createStyles.createStyles({ trailing: { flex: 1, flexDirection: "row", width: "100%", alignItems: "center" } });
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function FormSwitchRow(onValueChange) {
  const cResult = c.c(48);
  if (cResult[0] !== onValueChange) {
    onValueChange = onValueChange.onValueChange;
    closure_0 = onValueChange;
    value = onValueChange.value;
    closure_1 = value;
    ({ disabled, label, subLabel, accessibilityHint, trailing, numberOfLines, switchProps } = onValueChange);
    const tmp16 = _objectWithoutProperties(onValueChange, closure_3);
    cResult[0] = onValueChange;
    cResult[1] = accessibilityHint;
    cResult[2] = label;
    cResult[3] = numberOfLines;
    cResult[4] = onValueChange;
    cResult[5] = tmp16;
    cResult[6] = subLabel;
    cResult[7] = disabled;
    cResult[8] = switchProps;
    cResult[9] = trailing;
    cResult[10] = value;
    let tmp12 = trailing;
    let tmp11 = switchProps;
    let tmp9 = subLabel;
    let tmp8 = tmp16;
    let tmp6 = numberOfLines;
    let tmp5 = label;
    let tmp4 = accessibilityHint;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    closure_0 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp11 = cResult[8];
    tmp12 = cResult[9];
    closure_1 = cResult[10];
  }
  if (cResult[11] !== tmp11) {
    let obj2 = tmp11;
    if (undefined === tmp11) {
      obj2 = {};
    }
    cResult[11] = tmp11;
    cResult[12] = obj2;
    let tmp18 = obj2;
  } else {
    tmp18 = cResult[12];
  }
  const tmp19 = closure_10();
  PlatformUtils;
  if (cResult[13] === tmp7) {
    [checked, closure_3] = noop.useState(tmp13);
    if (cResult[16] !== tmp13) {
      const fn = function _() {
        closure_3(closure_1);
      };
      const items = [tmp13];
      cResult[16] = tmp13;
      cResult[17] = fn;
      cResult[18] = items;
      let tmp27 = items;
      let tmp26 = fn;
    } else {
      tmp26 = cResult[17];
      tmp27 = cResult[18];
    }
    const effect = noop.useEffect(tmp26, tmp27);
    if (cResult[19] === checked) {
      if (cResult[20] === tmp7) {
        let tmp29 = cResult[21];
      }
      let tmp30;
      if (typeof tmp5 === "string") {
        tmp30 = tmp5;
      }
      let sum = tmp30;
      if (tmp32) {
        const _HermesInternal = HermesInternal;
        sum = tmp30 + " " + tmp9;
      }
      if (cResult[22] === tmp5) {
        if (cResult[23] === tmp6) {
          let tmp35 = cResult[24];
        }
        if (cResult[25] === tmp19.trailing) {
          if (cResult[26] === tmp35) {
            if (cResult[27] === tmp39) {
              let tmp40 = cResult[28];
            }
            if (cResult[29] === checked) {
              if (cResult[30] === tmp17) {
                let tmp45 = cResult[31];
              }
              if (cResult[32] === tmp17) {
                if (cResult[33] === tmp7) {
                  if (cResult[34] === tmp18) {
                    if (cResult[35] === tmp13) {
                      let tmp46 = cResult[36];
                    }
                    if (cResult[37] === tmp4) {
                      if (cResult[38] === sum) {
                        if (cResult[39] === tmp17) {
                          if (cResult[40] === tmp29) {
                            if (cResult[41] === tmp8) {
                              if (cResult[42] === tmp9) {
                                if (cResult[43] === tmp40) {
                                  if (cResult[44] === tmp44) {
                                    if (cResult[45] === tmp45) {
                                      if (cResult[46] === tmp46) {
                                        let tmp54 = cResult[47];
                                      }
                                      return tmp54;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    const obj4 = {};
                    const merged = Object.assign(tmp8);
                    obj4.label = tmp40;
                    obj4.subLabel = tmp9;
                    obj4.disabled = tmp17;
                    obj4.onPress = tmp44;
                    obj4.accessible = true;
                    obj4.onAccessibilityTap = tmp29;
                    obj4.accessibilityRole = "switch";
                    obj4.accessibilityLabel = sum;
                    obj4.accessibilityState = tmp45;
                    obj4.accessibilityHint = tmp4;
                    obj4.trailing = tmp46;
                    const tmp61 = closure_1_8(FormRowDefault, obj4);
                    cResult[37] = tmp4;
                    cResult[38] = sum;
                    cResult[39] = tmp17;
                    cResult[40] = tmp29;
                    cResult[41] = tmp8;
                    cResult[42] = tmp9;
                    cResult[43] = tmp40;
                    cResult[44] = tmp44;
                    cResult[45] = tmp45;
                    cResult[46] = tmp46;
                    cResult[47] = tmp61;
                    tmp54 = tmp61;
                  }
                }
              }
              const obj5 = { disabled: tmp17, value: tmp13, onValueChange: tmp7 };
              const merged1 = Object.assign(tmp18);
              const tmp53 = closure_1_8(Form_FormSwitchDefault, obj5);
              cResult[32] = tmp17;
              cResult[33] = tmp7;
              cResult[34] = tmp18;
              cResult[35] = tmp13;
              cResult[36] = tmp53;
              tmp46 = tmp53;
            }
            const obj6 = { disabled: tmp17, checked };
            cResult[29] = checked;
            cResult[30] = tmp17;
            cResult[31] = obj6;
            tmp45 = obj6;
          }
        }
        const obj7 = { style: tmp19.trailing, children: null };
        const items1 = [tmp35, null != tmp12 && tmp12];
        obj7.children = items1;
        const tmp43 = options(View, obj7);
        cResult[25] = tmp19.trailing;
        cResult[26] = tmp35;
        cResult[27] = null != tmp12 && tmp12;
        cResult[28] = tmp43;
        tmp40 = tmp43;
      }
      const obj8 = { numberOfLines: tmp6, text: tmp5 };
      const tmp38 = closure_1_8(FormLabelDefault, obj8);
      cResult[22] = tmp5;
      cResult[23] = tmp6;
      cResult[24] = tmp38;
      tmp35 = tmp38;
      tmp32 = null != tmp30 && typeof tmp9 === "string";
    }
    function onAccessibilityTap() {
      closure_3(!first);
      const timerId = setTimeout(() => {
        if (closure_1_0 != null) {
          tmp(!checked);
        }
      });
    }
    cResult[19] = checked;
    cResult[20] = tmp7;
    cResult[21] = onAccessibilityTap;
    tmp29 = onAccessibilityTap;
  }
  function handleOnPress() {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = null != closure_1;
    }
    if (tmp2) {
      closure_0(!closure_1);
    }
  }
  cResult[13] = tmp7;
  cResult[14] = tmp13;
  cResult[15] = handleOnPress;
}) : (function FormSwitchRow(onValueChange) {
  onValueChange = onValueChange.onValueChange;
  value = onValueChange.value;
  importDefault = value;
  let flag = onValueChange.disabled;
  if (flag === undefined) {
    flag = false;
  }
  ({ label, subLabel, trailing, switchProps, accessibilityHint, numberOfLines } = onValueChange);
  if (switchProps === undefined) {
    switchProps = {};
  }
  const merged = Object.assign(onValueChange, Object.assign({ onValueChange: 0, value: 0, disabled: 0, label: 0, subLabel: 0, accessibilityHint: 0, trailing: 0, numberOfLines: 0, switchProps: 0 }));
  checked = undefined;
  closure_3 = undefined;
  let tmp2 = closure_10();
  [checked, closure_3] = noop.useState(value);
  const items = [value];
  const effect = noop.useEffect(() => {
    closure_3(value);
  }, items);
  let tmp8;
  if (typeof label === "string") {
    tmp8 = label;
  }
  let sum = tmp8;
  if (tmp9) {
    const _HermesInternal = HermesInternal;
    sum = tmp8 + " " + subLabel;
  }
  const obj2 = {};
  const isAndroidResult = PlatformUtils.isAndroid();
  tmp9 = null != tmp8 && typeof subLabel === "string";
  const merged1 = Object.assign(merged);
  const obj3 = { style: tmp2.trailing, children: null };
  const items1 = [closure_1_8(FormLabelDefault, { numberOfLines, text: label }), null != trailing && trailing];
  obj3.children = items1;
  obj2.label = options(View, obj3);
  obj2.subLabel = subLabel;
  obj2.disabled = flag;
  let handleOnPress;
  if (isAndroidResult) {
    handleOnPress = function handleOnPress() {
      let tmp2 = null != onValueChange;
      if (tmp2) {
        tmp2 = null != value;
      }
      if (tmp2) {
        onValueChange(!value);
      }
    };
  }
  obj2.onPress = handleOnPress;
  obj2.accessible = true;
  obj2.onAccessibilityTap = function onAccessibilityTap() {
    closure_3(!first);
    const timerId = setTimeout(() => {
      if (onValueChange != null) {
        tmp(!checked);
      }
    });
  };
  obj2.accessibilityRole = "switch";
  obj2.accessibilityLabel = sum;
  obj2.accessibilityState = { disabled: flag, checked };
  obj2.accessibilityHint = accessibilityHint;
  const obj4 = { disabled: flag, value, onValueChange };
  const tmp14 = FormRowDefault;
  const merged2 = Object.assign(switchProps);
  obj2.trailing = closure_1_8(Form_FormSwitchDefault, obj4);
  return closure_1_8(tmp14, obj2);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormSwitchRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FormSwitchRowContainer(arg0) {
  let DEPRECATED_style = arg0;
  const cResult = c.c(7);
  if (noop.useContext(RedesignCompat.RedesignCompatContext)) {
    if (cResult[0] !== DEPRECATED_style) {
      const obj2 = { value: null, onValueChange: null };
      ({ value: obj3.value, onValueChange: obj3.onValueChange } = DEPRECATED_style);
      const merged = Object.assign(DEPRECATED_style);
      const tmp16 = closure_1_8(TableSwitchRow.TableSwitchRow, obj2);
      cResult[0] = DEPRECATED_style;
      cResult[1] = tmp16;
      let tmp11 = tmp16;
    } else {
      tmp11 = cResult[1];
    }
    if (cResult[2] === DEPRECATED_style.DEPRECATED_style) {
    }
    const obj4 = { style: DEPRECATED_style.DEPRECATED_style, children: tmp11 };
    const tmp20 = closure_1_8(View, obj4);
    DEPRECATED_style = DEPRECATED_style.DEPRECATED_style;
    cResult[2] = DEPRECATED_style;
    cResult[3] = tmp11;
    cResult[4] = tmp20;
  } else {
    if (cResult[5] !== DEPRECATED_style) {
      const obj7 = {};
      const merged1 = Object.assign(DEPRECATED_style);
      const tmp10 = closure_1_8(closure_11, obj7);
      cResult[5] = DEPRECATED_style;
      cResult[6] = tmp10;
      let tmp4 = tmp10;
    } else {
      tmp4 = cResult[6];
    }
    return tmp4;
  }
}) : (function FormSwitchRowContainer(DEPRECATED_style) {
  if (noop.useContext(RedesignCompat.RedesignCompatContext)) {
    const obj2 = { style: DEPRECATED_style.DEPRECATED_style, children: null };
    const obj5 = { value: null, onValueChange: null };
    ({ value: obj3.value, onValueChange: obj3.onValueChange } = DEPRECATED_style);
    const merged = Object.assign(DEPRECATED_style);
    obj2.children = closure_1_8(TableSwitchRow.TableSwitchRow, obj5);
    let tmp3Result = closure_1_8(View, obj2);
  } else {
    const obj = {};
    const merged1 = Object.assign(DEPRECATED_style);
    tmp3Result = closure_1_8(closure_11, obj);
  }
  return tmp3Result;
});