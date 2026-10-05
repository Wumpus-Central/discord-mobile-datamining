// discord_app/design/components/Input/native/Input.native.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../utils/native.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import getRequiredFieldA11yName2 from "getRequiredFieldA11yName.native.tsx";
import ErrorText from "../../ErrorText/native/ErrorText.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { inputRow: obj2, labelWrapper: obj3, label: obj4, description: obj5, error: obj6 };
obj2 = {
  flexDirection: "row",
  gap: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_4,
  marginBottom: nativeDefault.space.PX_4,
};
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center" };
obj4 = { marginBottom: nativeDefault.space.PX_4 };
obj5 = { marginTop: nativeDefault.space.PX_4 };
obj6 = { marginTop: nativeDefault.space.PX_4, width: "auto" };
let closure_5 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let containerStyle;
      let description;
      let errorMessage;
      let items;
      let items1;
      let items2;
      let label;
      let labelId;
      let labelTrailing;
      let required;
      const obj = react2;
      const cResult = obj.c(26);
      const tmp4 = closure_5();
      ({ label, labelTrailing, labelId, description, errorMessage, children, containerStyle, required } = arg0);
      if (cResult[0] === label) {
        let tmp5;
        if (cResult[1] === required) {
          tmp5 = cResult[2];
        }
        if (cResult[3] === label) {
          if (cResult[4] === labelId) {
            if (cResult[5] === labelTrailing) {
              if (cResult[6] === required) {
                if (cResult[7] === tmp5) {
                  if (cResult[8] === tmp4.label) {
                    let tmp8;
                    if (cResult[9] === tmp4.labelWrapper) {
                      tmp8 = cResult[10];
                    }
                    if (cResult[11] === children) {
                      let tmp17;
                      if (cResult[12] === tmp4.inputRow) {
                        tmp17 = cResult[13];
                      }
                      if (cResult[14] === description) {
                        let tmp21;
                        if (cResult[15] === tmp4.description) {
                          tmp21 = cResult[16];
                        }
                        if (cResult[17] === errorMessage) {
                          let tmp24;
                          if (cResult[18] === tmp4.error) {
                            tmp24 = cResult[19];
                          }
                          if (cResult[20] === containerStyle) {
                            if (cResult[21] === tmp8) {
                              if (cResult[22] === tmp17) {
                                if (cResult[23] === tmp21) {
                                  let tmp27;
                                  if (cResult[24] === tmp24) {
                                    tmp27 = cResult[25];
                                  }
                                  return tmp27;
                                }
                              }
                            }
                          }
                          const obj2 = { style: containerStyle, children: items };
                          items = [tmp8, tmp17, tmp21, tmp24];
                          const tmp30 = React3(View, obj2);
                          cResult[20] = containerStyle;
                          cResult[21] = tmp8;
                          cResult[22] = tmp17;
                          cResult[23] = tmp21;
                          cResult[24] = tmp24;
                          cResult[25] = tmp30;
                          tmp27 = tmp30;
                        }
                        let tmp25 = null;
                        if (null != errorMessage) {
                          const obj3 = { style: tmp4.error, children: errorMessage };
                          tmp25 = _false(ErrorText.ErrorText, obj3);
                        }
                        cResult[17] = errorMessage;
                        cResult[18] = tmp4.error;
                        cResult[19] = tmp25;
                        tmp24 = tmp25;
                      }
                      let tmp22 = null;
                      if (null != description) {
                        const obj4 = {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          style: tmp4.description,
                          children: description,
                        };
                        tmp22 = _false(Text_Text.Text, obj4);
                      }
                      cResult[14] = description;
                      cResult[15] = tmp4.description;
                      cResult[16] = tmp22;
                      tmp21 = tmp22;
                    }
                    const obj5 = { style: tmp4.inputRow, children };
                    const tmp20 = _false(View, obj5);
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
        let tmp10 = null;
        if (null != label) {
          let tmp11Result2;
          if (null != labelTrailing) {
            const obj6 = { style: tmp4.labelWrapper, children: items1 };
            const obj7 = {
              variant: "text-sm/semibold",
              color: "text-subtle",
              nativeID: labelId,
              accessibilityLabel: tmp5,
              children: label,
            };
            items1 = [_false(Text_Text.Text, obj7), labelTrailing];
            tmp11Result2 = React3(View, obj6);
          } else {
            const obj8 = {
              variant: "text-sm/semibold",
              color: "text-subtle",
              style: tmp4.label,
              nativeID: labelId,
              accessibilityLabel: tmp5,
              children: items2,
            };
            items2 = [label];
            let tmp11Result = null;
            const Text = Text_Text.Text;
            if (required) {
              const obj9 = {
                variant: "text-sm/bold",
                color: "text-feedback-critical",
                "aria-hidden": true,
                children: [" ", "*"],
              };
              tmp11Result = React3(Text_Text.Text, obj9);
            }
            items2[1] = tmp11Result;
            tmp11Result2 = React3(Text, obj8);
          }
          tmp10 = tmp11Result2;
        }
        cResult[3] = label;
        cResult[4] = labelId;
        cResult[5] = labelTrailing;
        cResult[6] = required;
        cResult[7] = tmp5;
        cResult[8] = tmp4.label;
        cResult[9] = tmp4.labelWrapper;
        cResult[10] = tmp10;
        tmp8 = tmp10;
      }
      const getRequiredFieldA11yName = getRequiredFieldA11yName2.getRequiredFieldA11yName;
      getRequiredFieldA11yName2;
      const tmpResult2 = native;
      const requiredFieldA11yName = getRequiredFieldA11yName(tmpResult2.getNodeText(label), required);
      cResult[0] = label;
      cResult[1] = required;
      cResult[2] = requiredFieldA11yName;
      tmp5 = requiredFieldA11yName;
    }
  : (arg0) => {
      let children;
      let containerStyle;
      let description;
      let errorMessage;
      let items;
      let items1;
      let items2;
      let label;
      let labelId;
      let labelTrailing;
      let required;
      const tmp = closure_5();
      ({ label, labelTrailing, labelId, description, errorMessage, required } = arg0);
      ({ children, containerStyle } = arg0);
      const getRequiredFieldA11yName = getRequiredFieldA11yName2.getRequiredFieldA11yName;
      getRequiredFieldA11yName2;
      const obj = native;
      const requiredFieldA11yName = getRequiredFieldA11yName(obj.getNodeText(label), required);
      let tmp8 = null;
      const obj2 = { style: containerStyle, children: items2 };
      if (null != label) {
        let tmp6Result;
        if (null != labelTrailing) {
          const obj3 = { style: tmp.labelWrapper, children: items };
          const obj4 = {
            variant: "text-sm/semibold",
            color: "text-subtle",
            nativeID: labelId,
            accessibilityLabel: requiredFieldA11yName,
            children: label,
          };
          items = [_false(Text_Text.Text, obj4), labelTrailing];
          tmp6Result = React3(View, obj3);
        } else {
          const obj5 = {
            variant: "text-sm/semibold",
            color: "text-subtle",
            style: tmp.label,
            nativeID: labelId,
            accessibilityLabel: requiredFieldA11yName,
            children: items1,
          };
          items1 = [label];
          let tmp6Result2 = null;
          const Text = Text_Text.Text;
          if (required) {
            const obj6 = {
              variant: "text-sm/bold",
              color: "text-feedback-critical",
              "aria-hidden": true,
              children: [" ", "*"],
            };
            tmp6Result2 = React3(Text_Text.Text, obj6);
          }
          items1[1] = tmp6Result2;
          tmp6Result = React3(Text, obj5);
        }
        tmp8 = tmp6Result;
      }
      items2 = [tmp8, , ,];
      const obj7 = { style: tmp.inputRow, children };
      items2[1] = _false(View, obj7);
      let tmp12Result = null;
      if (null != description) {
        const obj8 = { variant: "text-xs/medium", color: "text-muted", style: tmp.description, children: description };
        tmp12Result = _false(Text_Text.Text, obj8);
      }
      items2[2] = tmp12Result;
      let tmp12Result2 = null;
      if (null != errorMessage) {
        const obj9 = { style: tmp.error, children: errorMessage };
        tmp12Result2 = _false(ErrorText.ErrorText, obj9);
      }
      items2[3] = tmp12Result2;
      return React3(View, obj2);
    };
const result = size.fileFinishedImporting("design/components/Input/native/Input.native.tsx");

export const Input = tmp5;
