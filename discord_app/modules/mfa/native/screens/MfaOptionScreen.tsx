// === Module 15504: MfaOptionScreen ===

// Module 15504 (MfaOptionScreen)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 4886 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import useWideAuthViewDefault from "useWideAuthView" /* 6432 */;
import BackgroundImageDefault from "BackgroundImage" /* 6463 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6619 */;
import MfaScreenUtilsDefault from "MfaScreenUtils" /* 15505 */;
import BackButtonDefault from "BackButton" /* 15506 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
const ScrollView = react_native.ScrollView;
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((mfaMethod) => {
  let content;
  let error;
  let headerImage;
  let headerText;
  let input;
  let items1;
  let items2;
  let items3;
  let items4;
  let screenProps;
  let submit;
  let subtitle;
  let type;
  const obj = react2;
  const cResult = obj.c(34);
  ({ headerText, headerImage, subtitle, input, submit, screenProps, error, content } = mfaMethod);
  mfaMethod = mfaMethod.mfaMethod;
  const tmp5 = useWideAuthViewDefault();
  const obj2 = MfaScreenUtilsDefault;
  const screenStyles = obj2.useScreenStyles(tmp5);
  const first = screenProps.mfaChallenge.methods[0];
  if (first != null) {
    type = first.type;
  }
  if (cResult[0] === headerText) {
    let tmp11;
    let tmp13;
    let tmp16;
    if (cResult[1] === screenStyles.mfaContainerHeaderText) {
      tmp11 = cResult[2];
    }
    if (cResult[3] !== subtitle) {
      let tmp14 = null != subtitle;
      if (tmp14) {
        const obj3 = { variant: "heading-sm/normal", color: "text-default", children: subtitle };
        tmp14 = React3(Text_Text.Text, obj3);
      }
      cResult[3] = subtitle;
      cResult[4] = tmp14;
      tmp13 = tmp14;
    } else {
      tmp13 = cResult[4];
    }
    if (cResult[5] !== error) {
      let tmp17 = null != error;
      if (tmp17) {
        const obj4 = { variant: "text-sm/normal", color: "text-feedback-critical", children: error };
        tmp17 = React3(Text_Text.Text, obj4);
      }
      cResult[5] = error;
      cResult[6] = tmp17;
      tmp16 = tmp17;
    } else {
      tmp16 = cResult[6];
    }
    if (cResult[7] === screenStyles.mfaContainerHeader) {
      if (cResult[8] === (null != headerImage && headerImage)) {
        if (cResult[9] === tmp11) {
          if (cResult[10] === tmp13) {
            let tmp19;
            if (cResult[11] === tmp16) {
              tmp19 = cResult[12];
            }
            if (cResult[13] === input) {
              let tmp22;
              if (cResult[14] === tmp19) {
                tmp22 = cResult[15];
              }
              if (cResult[16] === screenProps) {
                let tmp26;
                if (cResult[17] === type === mfaMethod) {
                  tmp26 = cResult[18];
                }
                if (cResult[19] === screenStyles.submit) {
                  if (cResult[20] === submit) {
                    let tmp29;
                    if (cResult[21] === tmp26) {
                      tmp29 = cResult[22];
                    }
                    if (cResult[23] === content) {
                      if (cResult[24] === screenStyles.contentContainer) {
                        if (cResult[25] === !tmp5) {
                          if (cResult[26] === tmp29) {
                            if (cResult[27] === !tmp5) {
                              let tmp32;
                              let tmp36;
                              if (cResult[28] === tmp22) {
                                tmp32 = cResult[29];
                              }
                              const _Symbol = Symbol;
                              if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                                const tmp38 = React3(BackgroundImageDefault, { backgroundImageCover: false });
                                cResult[30] = tmp38;
                                tmp36 = tmp38;
                              } else {
                                tmp36 = cResult[30];
                              }
                              if (cResult[31] === tmp5) {
                                let tmp39;
                                if (cResult[32] === tmp32) {
                                  tmp39 = cResult[33];
                                }
                                return tmp39;
                              }
                              const items = [tmp36, ];
                              let tmp42 = tmp32;
                              if (tmp5) {
                                const obj5 = { keyboardShouldPersistTaps: "handled", children: tmp32 };
                                tmp42 = React3(ScrollView, obj5);
                              }
                              const obj6 = { children: items };
                              items[1] = tmp42;
                              const tmp40Result = hasOwnProperty(metroRequire, obj6);
                              cResult[31] = tmp5;
                              cResult[32] = tmp32;
                              cResult[33] = tmp40Result;
                              tmp39 = tmp40Result;
                            }
                          }
                        }
                      }
                    }
                    const rect = { bottom: !tmp5, top: !tmp5, style: screenStyles.contentContainer, children: items1 };
                    items1 = [tmp22, content, tmp29];
                    const tmp34 = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, rect);
                    cResult[23] = content;
                    cResult[24] = screenStyles.contentContainer;
                    cResult[25] = !tmp5;
                    cResult[26] = tmp29;
                    cResult[27] = !tmp5;
                    cResult[28] = tmp22;
                    cResult[29] = tmp34;
                    tmp32 = tmp34;
                  }
                }
                const obj7 = { style: screenStyles.submit, children: items2 };
                items2 = [submit, tmp26];
                const tmp31 = hasOwnProperty(Stack_Stack.Stack, obj7);
                cResult[19] = screenStyles.submit;
                cResult[20] = submit;
                cResult[21] = tmp26;
                cResult[22] = tmp31;
                tmp29 = tmp31;
              }
              let tmp27 = tmp25;
              if (tmp27) {
                const obj8 = { props: screenProps };
                tmp27 = React3(BackButtonDefault, obj8);
              }
              cResult[16] = screenProps;
              cResult[17] = type === mfaMethod;
              cResult[18] = tmp27;
              tmp26 = tmp27;
            }
            const obj9 = { children: items3 };
            items3 = [tmp19, input];
            const tmp24 = hasOwnProperty(Stack_Stack.Stack, obj9);
            cResult[13] = input;
            cResult[14] = tmp19;
            cResult[15] = tmp24;
            tmp22 = tmp24;
          }
        }
      }
    }
    const obj10 = { style: screenStyles.mfaContainerHeader, spacing: 4, children: items4 };
    items4 = [null != headerImage && headerImage, tmp11, tmp13, tmp16];
    const tmp21 = hasOwnProperty(Stack_Stack.Stack, obj10);
    cResult[7] = screenStyles.mfaContainerHeader;
    cResult[8] = null != headerImage && headerImage;
    cResult[9] = tmp11;
    cResult[10] = tmp13;
    cResult[11] = tmp16;
    cResult[12] = tmp21;
    tmp19 = tmp21;
  }
  const obj11 = { variant: "heading-xl/extrabold", style: screenStyles.mfaContainerHeaderText, children: headerText };
  const tmp12 = React3(Text_Text.Heading, obj11);
  cResult[0] = headerText;
  cResult[1] = screenStyles.mfaContainerHeaderText;
  cResult[2] = tmp12;
  tmp11 = tmp12;
}) : ((arg0) => {
  let content;
  let error;
  let headerImage;
  let headerText;
  let input;
  let items;
  let items1;
  let items2;
  let items3;
  let mfaMethod;
  let screenProps;
  let submit;
  let subtitle;
  ({ headerImage, subtitle, screenProps, error } = arg0);
  ({ headerText, input, submit, mfaMethod, content } = arg0);
  const tmp3 = useWideAuthViewDefault();
  const obj = MfaScreenUtilsDefault;
  const screenStyles = obj.useScreenStyles(tmp3);
  const first = screenProps.mfaChallenge.methods[0];
  let type;
  if (first != null) {
    type = first.type;
  }
  const rect = { bottom: !tmp3, top: !tmp3, style: screenStyles.contentContainer, children: items2 };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  const Stack = Stack_Stack.Stack;
  let tmp9 = null != headerImage;
  const obj2 = { style: screenStyles.mfaContainerHeader, spacing: 4, children: items };
  const Stack2 = Stack_Stack.Stack;
  if (tmp9) {
    tmp9 = headerImage;
  }
  items = [tmp9, , , ];
  const obj3 = { variant: "heading-xl/extrabold", style: screenStyles.mfaContainerHeaderText, children: headerText };
  items[1] = React3(Text_Text.Heading, obj3);
  let tmp10Result = null != subtitle;
  if (tmp10Result) {
    const obj4 = { variant: "heading-sm/normal", color: "text-default", children: subtitle };
    tmp10Result = React3(Text_Text.Text, obj4);
  }
  items[2] = tmp10Result;
  let tmp10Result4 = null != error;
  if (tmp10Result4) {
    const obj5 = { variant: "text-sm/normal", color: "text-feedback-critical", children: error };
    tmp10Result4 = React3(Text_Text.Text, obj5);
  }
  let tmp10Result5 = type === mfaMethod;
  const obj6 = { children: items1 };
  items[3] = tmp10Result4;
  items1 = [hasOwnProperty(Stack2, obj2), input];
  items2 = [hasOwnProperty(Stack, obj6), content, ];
  const obj7 = { style: screenStyles.submit, children: items3 };
  items3 = [submit, ];
  const Stack3 = Stack_Stack.Stack;
  if (tmp10Result5) {
    const obj8 = { props: screenProps };
    tmp10Result5 = React3(BackButtonDefault, obj8);
  }
  items3[1] = tmp10Result5;
  items2[2] = hasOwnProperty(Stack3, obj7);
  const tmp7Result = hasOwnProperty(SafeAreaPaddingView, rect);
  const children = [React3(BackgroundImageDefault, { backgroundImageCover: false }), ];
  let tmp10Result6 = tmp7Result;
  if (tmp3) {
    const obj9 = { keyboardShouldPersistTaps: "handled", children: tmp7Result };
    tmp10Result6 = React3(ScrollView, obj9);
  }
  children[1] = tmp10Result6;
  return hasOwnProperty(metroRequire, { children });
});
const result = size.fileFinishedImporting("modules/mfa/native/screens/MfaOptionScreen.tsx");

export default tmp4;