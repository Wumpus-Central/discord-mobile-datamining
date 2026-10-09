// === Module 6291: Input ===

// Module 6291 (Input)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 4781 */;
import Text_Text from "Text/Text" /* 5087 */;
import getRequiredFieldA11yName from "getRequiredFieldA11yName" /* 6292 */;
import ErrorText from "ErrorText" /* 6293 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { inputRow: { flexDirection: "row", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_4 }, labelWrapper: null, label: null, description: null, error: null };
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_4 };
obj2.labelWrapper = { marginBottom: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center" };
let obj4 = { marginBottom: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center" };
obj2.label = { marginBottom: nativeDefault.space.PX_4 };
let obj5 = { marginBottom: nativeDefault.space.PX_4 };
obj2.description = { marginTop: nativeDefault.space.PX_4 };
let obj6 = { marginTop: nativeDefault.space.PX_4 };
obj2.error = { marginTop: nativeDefault.space.PX_4, width: "auto" };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj7 = { marginTop: nativeDefault.space.PX_4, width: "auto" };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Input/native/Input.native.tsx");

export const Input = ReactCompilerGating.isReactCompilerEnabled() ? (function Input(arg0) {
  const cResult = c.c(26);
  const tmp4 = closure_5();
  ({ label, labelTrailing, labelId, description, errorMessage, children, containerStyle, required } = arg0);
  if (cResult[0] === label) {
    if (cResult[1] === required) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === label) {
      if (cResult[4] === labelId) {
        if (cResult[5] === labelTrailing) {
          if (cResult[6] === required) {
            if (cResult[7] === tmp5) {
              if (cResult[8] === tmp4.label) {
                if (cResult[9] === tmp4.labelWrapper) {
                  let tmp7 = cResult[10];
                }
                if (cResult[11] === children) {
                  if (cResult[12] === tmp4.inputRow) {
                    let tmp17 = cResult[13];
                  }
                  if (cResult[14] === description) {
                    if (cResult[15] === tmp4.description) {
                      let tmp21 = cResult[16];
                    }
                    if (cResult[17] === errorMessage) {
                      if (cResult[18] === tmp4.error) {
                        let tmp24 = cResult[19];
                      }
                      if (cResult[20] === containerStyle) {
                        if (cResult[21] === tmp7) {
                          if (cResult[22] === tmp17) {
                            if (cResult[23] === tmp21) {
                              if (cResult[24] === tmp24) {
                                let tmp27 = cResult[25];
                              }
                              return tmp27;
                            }
                          }
                        }
                      }
                      const obj2 = { style: containerStyle, children: null };
                      const items = [tmp7, tmp17, tmp21, tmp24];
                      obj2.children = items;
                      const tmp30 = React4(View, obj2);
                      cResult[20] = containerStyle;
                      cResult[21] = tmp7;
                      cResult[22] = tmp17;
                      cResult[23] = tmp21;
                      cResult[24] = tmp24;
                      cResult[25] = tmp30;
                      tmp27 = tmp30;
                    }
                    let tmp25 = null;
                    if (null != errorMessage) {
                      const obj3 = { style: tmp4.error, children: errorMessage };
                      tmp25 = React3(ErrorText.ErrorText, obj3);
                    }
                    cResult[17] = errorMessage;
                    cResult[18] = tmp4.error;
                    cResult[19] = tmp25;
                    tmp24 = tmp25;
                  }
                  let tmp22 = null;
                  if (null != description) {
                    const obj4 = { variant: "text-xs/medium", color: "text-muted", style: tmp4.description, children: description };
                    tmp22 = React3(Text_Text.Text, obj4);
                  }
                  cResult[14] = description;
                  cResult[15] = tmp4.description;
                  cResult[16] = tmp22;
                  tmp21 = tmp22;
                }
                const obj5 = { style: tmp4.inputRow, children };
                const tmp20 = React3(View, obj5);
                cResult[11] = children;
                cResult[12] = tmp4.inputRow;
                cResult[13] = tmp20;
                tmp17 = tmp20;
              }
            }
          }
        }
      }
    }
    if (null == label) {
      cResult[3] = label;
      cResult[4] = labelId;
      cResult[5] = labelTrailing;
      cResult[6] = required;
      cResult[7] = tmp5;
      cResult[8] = tmp4.label;
      cResult[9] = tmp4.labelWrapper;
      cResult[10] = null;
      tmp7 = null;
    } else if (null != labelTrailing) {
      const obj6 = { style: tmp4.labelWrapper, children: null };
      const obj7 = { variant: "text-sm/semibold", color: "text-subtle", nativeID: labelId, accessibilityLabel: tmp5, children: label };
      const items1 = [React3(Text_Text.Text, obj7), labelTrailing];
      obj6.children = items1;
      let tmp10Result2 = React4(View, obj6);
    } else {
      const obj8 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp4.label, nativeID: labelId, accessibilityLabel: tmp5, children: null };
      const items2 = [label, ];
      let tmp10Result = null;
      if (required) {
        const obj9 = { variant: "text-sm/bold", color: "text-feedback-critical", "aria-hidden": true, children: [" ", "*"] };
        tmp10Result = React4(Text_Text.Text, obj9);
      }
      items2[1] = tmp10Result;
      obj8.children = items2;
      tmp10Result2 = React4(Text_Text.Text, obj8);
    }
  }
  const tmpResult = getRequiredFieldA11yName;
  const requiredFieldA11yName = tmpResult.getRequiredFieldA11yName(native.getNodeText(label), required);
  cResult[0] = label;
  cResult[1] = required;
  cResult[2] = requiredFieldA11yName;
  tmp5 = requiredFieldA11yName;
  const tmpResult2 = native;
}) : (function Input(arg0) {
  const tmp = closure_5();
  ({ label, labelTrailing, labelId, description, errorMessage, required } = arg0);
  ({ children, containerStyle } = arg0);
  const obj = getRequiredFieldA11yName;
  const requiredFieldA11yName = obj.getRequiredFieldA11yName(native.getNodeText(label), required);
  const obj3 = { style: containerStyle, children: null };
  if (null == label) {
    const items = [null, , , ];
    const obj4 = { style: tmp.inputRow, children };
    items[1] = React3(View, obj4);
    let tmp11Result = null;
    if (null != description) {
      const obj5 = { variant: "text-xs/medium", color: "text-muted", style: tmp.description, children: description };
      tmp11Result = React3(Text_Text.Text, obj5);
    }
    items[2] = tmp11Result;
    let tmp11Result2 = null;
    if (null != errorMessage) {
      const obj6 = { style: tmp.error, children: errorMessage };
      tmp11Result2 = React3(ErrorText.ErrorText, obj6);
    }
    items[3] = tmp11Result2;
    obj3.children = items;
    return React4(View, obj3);
  } else if (null != labelTrailing) {
    const obj7 = { style: tmp.labelWrapper, children: null };
    const obj8 = { variant: "text-sm/semibold", color: "text-subtle", nativeID: labelId, accessibilityLabel: requiredFieldA11yName, children: label };
    const items1 = [React3(Text_Text.Text, obj8), labelTrailing];
    obj7.children = items1;
    let tmp5Result = React4(View, obj7);
  } else {
    const obj9 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.label, nativeID: labelId, accessibilityLabel: requiredFieldA11yName, children: null };
    const items2 = [label, ];
    let tmp5Result2 = null;
    if (required) {
      const obj10 = { variant: "text-sm/bold", color: "text-feedback-critical", "aria-hidden": true, children: [" ", "*"] };
      tmp5Result2 = React4(Text_Text.Text, obj10);
    }
    items2[1] = tmp5Result2;
    obj9.children = items2;
    tmp5Result = React4(Text_Text.Text, obj9);
  }
});