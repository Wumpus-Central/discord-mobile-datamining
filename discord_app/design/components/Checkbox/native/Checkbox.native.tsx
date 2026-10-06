// === Module 8981: Checkbox ===

// Module 8981 (Checkbox)
import react from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import react_native from "react-native" /* 4600 */;
import Text_Text from "Text/Text" /* 4892 */;
import Stack_Stack from "Stack/Stack" /* 5600 */;
import FormCheckbox from "FormCheckbox" /* 5998 */;
import react_native2 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let onToggle;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
({ Pressable: c2, View: c3 } = react_native2);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ textContainer: { flex: 1 }, labelContainer: { minHeight: 24, justifyContent: "center" } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((onToggle) => {
  let accessibilityRole;
  let accessibilityState;
  let checked;
  let description;
  let intl2;
  let items;
  let items1;
  let items2;
  let label;
  let required;
  let tmp5;
  let tmp7;
  const obj = react;
  const cResult = obj.c(32);
  ({ label, description, required, checked } = onToggle);
  onToggle = onToggle.onToggle;
  const tmp4 = closure_6();
  if (cResult[0] !== checked) {
    const obj2 = { checked };
    cResult[0] = checked;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult = react_native;
  const checkboxA11yNative = tmpResult.useCheckboxA11yNative(tmp5);
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  if (cResult[2] !== required) {
    let str = "";
    if (required) {
      const intl = intl3.intl;
      const _HermesInternal = HermesInternal;
      str = " (" + intl.string(intl3.t.EkokLy) + ")";
    }
    cResult[2] = required;
    cResult[3] = str;
    tmp7 = str;
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
    let tmp12;
    let tmp13;
    let tmp16;
    if (cResult[5] === onToggle) {
      tmp12 = cResult[6];
    }
    if (cResult[7] !== checked) {
      const obj3 = { checked };
      const tmp15 = React3(FormCheckbox.FormCheckbox, obj3);
      cResult[7] = checked;
      cResult[8] = tmp15;
      tmp13 = tmp15;
    } else {
      tmp13 = cResult[8];
    }
    if (cResult[9] !== required) {
      let tmp17 = required;
      if (tmp17) {
        const obj4 = { variant: "text-md/bold", color: "text-feedback-critical", "aria-label": intl2.string(intl3.t.EkokLy), children: [" ", "*"] };
        const Text = Text_Text.Text;
        intl2 = intl3.intl;
        tmp17 = hasOwnProperty(Text, obj4);
      }
      cResult[9] = required;
      cResult[10] = tmp17;
      tmp16 = tmp17;
    } else {
      tmp16 = cResult[10];
    }
    if (cResult[11] === label) {
      let tmp19;
      if (cResult[12] === tmp16) {
        tmp19 = cResult[13];
      }
      if (cResult[14] === tmp4.labelContainer) {
        let tmp22;
        let tmp26;
        if (cResult[15] === tmp19) {
          tmp22 = cResult[16];
        }
        if (cResult[17] !== description) {
          let tmp27 = null != description;
          if (tmp27) {
            const obj5 = { variant: "text-sm/normal", color: "text-subtle", children: description };
            tmp27 = React3(Text_Text.Text, obj5);
          }
          cResult[17] = description;
          cResult[18] = tmp27;
          tmp26 = tmp27;
        } else {
          tmp26 = cResult[18];
        }
        if (cResult[19] === tmp4.textContainer) {
          if (cResult[20] === tmp22) {
            let tmp29;
            if (cResult[21] === tmp26) {
              tmp29 = cResult[22];
            }
            if (cResult[23] === tmp29) {
              let tmp33;
              if (cResult[24] === tmp13) {
                tmp33 = cResult[25];
              }
              if (cResult[26] === accessibilityRole) {
                if (cResult[27] === accessibilityState) {
                  if (cResult[28] === tmp33) {
                    if (cResult[29] === sum1) {
                      let tmp36;
                      if (cResult[30] === tmp12) {
                        tmp36 = cResult[31];
                      }
                      return tmp36;
                    }
                  }
                }
              }
              const obj6 = { accessibilityRole, accessibilityLabel: sum1, accessibilityState, onPress: tmp12, children: tmp33 };
              const tmp39 = React3(React2, obj6);
              cResult[26] = accessibilityRole;
              cResult[27] = accessibilityState;
              cResult[28] = tmp33;
              cResult[29] = sum1;
              cResult[30] = tmp12;
              cResult[31] = tmp39;
              tmp36 = tmp39;
            }
            const obj7 = { direction: "horizontal", children: items };
            items = [tmp13, tmp29];
            const tmp35 = hasOwnProperty(Stack_Stack.Stack, obj7);
            cResult[23] = tmp29;
            cResult[24] = tmp13;
            cResult[25] = tmp35;
            tmp33 = tmp35;
          }
        }
        const obj8 = { style: tmp4.textContainer, children: items1 };
        items1 = [tmp22, tmp26];
        const tmp32 = hasOwnProperty(_false, obj8);
        cResult[19] = tmp4.textContainer;
        cResult[20] = tmp22;
        cResult[21] = tmp26;
        cResult[22] = tmp32;
        tmp29 = tmp32;
      }
      const obj9 = { style: tmp4.labelContainer, children: tmp19 };
      const tmp25 = React3(_false, obj9);
      cResult[14] = tmp4.labelContainer;
      cResult[15] = tmp19;
      cResult[16] = tmp25;
      tmp22 = tmp25;
    }
    const obj10 = { variant: "text-md/medium", children: items2 };
    items2 = [label, tmp16];
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
}) : ((onToggle) => {
  let Stack;
  let Text;
  let accessibilityState;
  let checked;
  let description;
  let intl2;
  let items1;
  let items2;
  let label;
  let obj7;
  let required;
  let str;
  let sum;
  ({ label, description, required, checked } = onToggle);
  onToggle = onToggle.onToggle;
  const tmp = closure_6();
  const obj = react_native;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked });
  const obj2 = {
    accessibilityRole: checkboxA11yNative.accessibilityRole,
    accessibilityLabel: sum + str,
    accessibilityState,
    onPress() {
      return onToggle(!checked);
    },
    children: hasOwnProperty(Stack, obj7)
  };
  str = "";
  let str2 = "";
  accessibilityState = checkboxA11yNative.accessibilityState;
  if (required) {
    const intl = intl3.intl;
    const _HermesInternal = HermesInternal;
    str2 = " (" + intl.string(intl3.t.EkokLy) + ")";
  }
  sum = label + str2;
  if (null != description) {
    const _HermesInternal2 = HermesInternal;
    str = ", " + description;
  }
  Stack = Stack_Stack.Stack;
  const items = [React3(FormCheckbox.FormCheckbox, { checked }), ];
  const obj3 = { style: tmp.textContainer, children: items2 };
  const obj4 = { style: tmp.labelContainer, children: hasOwnProperty(Text, { variant: "text-md/medium", children: items1 }) };
  items1 = [label, ];
  Text = Text_Text.Text;
  if (required) {
    const obj5 = { variant: "text-md/bold", color: "text-feedback-critical", "aria-label": intl2.string(intl3.t.EkokLy), children: [" ", "*"] };
    const Text2 = Text_Text.Text;
    intl2 = intl3.intl;
    required = hasOwnProperty(Text2, obj5);
  }
  items1[1] = required;
  items2 = [React3(_false, obj4), ];
  let tmp5Result = null != description;
  if (tmp5Result) {
    const obj6 = { variant: "text-sm/normal", color: "text-subtle", children: description };
    tmp5Result = React3(Text_Text.Text, obj6);
  }
  obj7 = { direction: "horizontal", children: items };
  items2[1] = tmp5Result;
  items[1] = hasOwnProperty(_false, obj3);
  return React3(React2, obj2);
});
const result = size.fileFinishedImporting("design/components/Checkbox/native/Checkbox.native.tsx");

export const Checkbox = tmp4;