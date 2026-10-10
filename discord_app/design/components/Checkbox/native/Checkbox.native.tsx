// === Module 12901: Checkbox ===

// Module 12901 (Checkbox)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4832 */;
import Text_Text from "Text/Text" /* 5088 */;
import Stack_Stack from "Stack/Stack" /* 5377 */;
import FormCheckbox from "FormCheckbox" /* 6177 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

({ Pressable: c2, View: c3 } = get_ActivityIndicator);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_6 = createStyles.createStyles({ textContainer: { flex: 1 }, labelContainer: { minHeight: 24, justifyContent: "center" } });
const result = size.fileFinishedImporting("design/components/Checkbox/native/Checkbox.native.tsx");

export const Checkbox = ReactCompilerGating.isReactCompilerEnabled() ? (function Checkbox(onToggle) {
  const cResult = c.c(32);
  ({ label, description, required, checked } = onToggle);
  onToggle = onToggle.onToggle;
  const tmp4 = closure_6();
  if (cResult[0] !== checked) {
    const obj2 = { checked };
    cResult[0] = checked;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative(tmp5);
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  if (cResult[2] !== required) {
    let str = "";
    if (required) {
      const intl = util.intl;
      const _HermesInternal = HermesInternal;
      str = " (" + intl.string(util.t.EkokLy) + ")";
    }
    cResult[2] = required;
    cResult[3] = str;
    let tmp7 = str;
  } else {
    tmp7 = cResult[3];
  }
  let str4 = "";
  const sum = label + tmp7;
  if (null != description) {
    const _HermesInternal2 = HermesInternal;
    str4 = ", " + description;
  }
  const sum1 = sum + str4;
  if (cResult[4] === checked) {
    if (cResult[5] === onToggle) {
      let tmp12 = cResult[6];
    }
    if (cResult[7] !== checked) {
      const obj3 = { checked };
      const tmp15 = React4(FormCheckbox.FormCheckbox, obj3);
      cResult[7] = checked;
      cResult[8] = tmp15;
      let tmp13 = tmp15;
    } else {
      tmp13 = cResult[8];
    }
    if (cResult[9] !== required) {
      let tmp17 = required;
      if (required) {
        const obj4 = { variant: "text-md/bold", color: "text-feedback-critical", "aria-label": null, children: null };
        const intl2 = util.intl;
        obj4["aria-label"] = intl2.string(util.t.EkokLy);
        obj4.children = [" ", "*"];
        tmp17 = hasOwnProperty(Text_Text.Text, obj4);
      }
      cResult[9] = required;
      cResult[10] = tmp17;
      let tmp16 = tmp17;
    } else {
      tmp16 = cResult[10];
    }
    if (cResult[11] === label) {
      if (cResult[12] === tmp16) {
        let tmp19 = cResult[13];
      }
      if (cResult[14] === tmp4.labelContainer) {
        if (cResult[15] === tmp19) {
          let tmp22 = cResult[16];
        }
        if (cResult[17] !== description) {
          let tmp27 = null != description;
          if (tmp27) {
            const obj5 = { variant: "text-sm/normal", color: "text-subtle", children: description };
            tmp27 = React4(Text_Text.Text, obj5);
          }
          cResult[17] = description;
          cResult[18] = tmp27;
          let tmp26 = tmp27;
        } else {
          tmp26 = cResult[18];
        }
        if (cResult[19] === tmp4.textContainer) {
          if (cResult[20] === tmp22) {
            if (cResult[21] === tmp26) {
              let tmp29 = cResult[22];
            }
            if (cResult[23] === tmp29) {
              if (cResult[24] === tmp13) {
                let tmp33 = cResult[25];
              }
              if (cResult[26] === accessibilityRole) {
                if (cResult[27] === accessibilityState) {
                  if (cResult[28] === tmp33) {
                    if (cResult[29] === sum1) {
                      if (cResult[30] === tmp12) {
                        let tmp36 = cResult[31];
                      }
                      return tmp36;
                    }
                  }
                }
              }
              const obj6 = { accessibilityRole, accessibilityLabel: sum1, accessibilityState, onPress: tmp12, children: tmp33 };
              const tmp39 = React4(React2, obj6);
              cResult[26] = accessibilityRole;
              cResult[27] = accessibilityState;
              cResult[28] = tmp33;
              cResult[29] = sum1;
              cResult[30] = tmp12;
              cResult[31] = tmp39;
              tmp36 = tmp39;
            }
            const obj7 = { direction: "horizontal", children: null };
            const items = [tmp13, tmp29];
            obj7.children = items;
            const tmp35 = hasOwnProperty(Stack_Stack.Stack, obj7);
            cResult[23] = tmp29;
            cResult[24] = tmp13;
            cResult[25] = tmp35;
            tmp33 = tmp35;
          }
        }
        const obj8 = { style: tmp4.textContainer, children: null };
        const items1 = [tmp22, tmp26];
        obj8.children = items1;
        const tmp32 = hasOwnProperty(React3, obj8);
        cResult[19] = tmp4.textContainer;
        cResult[20] = tmp22;
        cResult[21] = tmp26;
        cResult[22] = tmp32;
        tmp29 = tmp32;
      }
      const obj9 = { style: tmp4.labelContainer, children: tmp19 };
      const tmp25 = React4(React3, obj9);
      cResult[14] = tmp4.labelContainer;
      cResult[15] = tmp19;
      cResult[16] = tmp25;
      tmp22 = tmp25;
    }
    const obj10 = { variant: "text-md/medium", children: null };
    const items2 = [label, tmp16];
    obj10.children = items2;
    const tmp21 = hasOwnProperty(Text_Text.Text, obj10);
    cResult[11] = label;
    cResult[12] = tmp16;
    cResult[13] = tmp21;
    tmp19 = tmp21;
  }
  class L {
    constructor() {
      return onToggle(!checked);
    }
  }
  cResult[4] = checked;
  cResult[5] = onToggle;
  cResult[6] = L;
  tmp12 = L;
  const tmpResult = useA11yRolesNative;
}) : (function Checkbox(onToggle) {
  ({ label, description, required, checked } = onToggle);
  onToggle = onToggle.onToggle;
  const tmp = closure_6();
  const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative({ checked });
  const obj2 = { accessibilityRole: checkboxA11yNative.accessibilityRole, accessibilityLabel: null, accessibilityState: null, onPress: null, children: null };
  let str = "";
  let str2 = "";
  if (required) {
    const intl = util.intl;
    const _HermesInternal = HermesInternal;
    str2 = " (" + intl.string(util.t.EkokLy) + ")";
  }
  const sum = label + str2;
  if (null != description) {
    const _HermesInternal2 = HermesInternal;
    str = ", " + description;
  }
  obj2.accessibilityLabel = sum + str;
  obj2.accessibilityState = checkboxA11yNative.accessibilityState;
  obj2.onPress = function onPress() {
    return onToggle(!checked);
  };
  const items = [React4(FormCheckbox.FormCheckbox, { checked }), ];
  const obj3 = { style: tmp.textContainer, children: null };
  const obj4 = { style: tmp.labelContainer, children: null };
  const items1 = [label, ];
  if (required) {
    const obj5 = { variant: "text-md/bold", color: "text-feedback-critical", "aria-label": null, children: null };
    const intl2 = util.intl;
    obj5["aria-label"] = intl2.string(util.t.EkokLy);
    obj5.children = [" ", "*"];
    required = hasOwnProperty(Text_Text.Text, obj5);
  }
  items1[1] = required;
  obj4.children = hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", children: items1 });
  const items2 = [React4(React3, obj4), ];
  let tmp5Result = null != description;
  if (tmp5Result) {
    const obj6 = { variant: "text-sm/normal", color: "text-subtle", children: description };
    tmp5Result = React4(Text_Text.Text, obj6);
  }
  const obj7 = { direction: "horizontal", children: null };
  items2[1] = tmp5Result;
  obj3.children = items2;
  items[1] = hasOwnProperty(React3, obj3);
  obj7.children = items;
  obj2.children = hasOwnProperty(Stack_Stack.Stack, obj7);
  return React4(React2, obj2);
});