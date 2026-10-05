// === Module 8571: InputButton ===

// Module 8571 (InputButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import BaseTextButton2 from "BaseTextButton" /* 5595 */;
import ButtonConstants from "ButtonConstants" /* 5600 */;
import InputFieldContainer from "InputFieldContainer" /* 6105 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let obj2;
let obj3;
let closure_2 = ["size", "round", "text", "value", "icon", "iconPosition", "accessibilityLabel", "accessibilityValue", "maxFontSizeMultiplier"];
let closure_3 = ["size", "round", "text", "value", "icon", "iconPosition", "accessibilityLabel", "accessibilityValue", "maxFontSizeMultiplier"];
const Text = react_native.Text;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { buttonText: { flexGrow: 1, flexShrink: 1, width: "100%" }, buttonTextPlaceholder: obj2, buttonTextValue: obj3 };
obj2 = { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT };
let closure_7 = createStyles(obj);
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  let BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
  let accessibilityLabel;
  let accessibilityValue;
  let icon;
  let iconPosition;
  let maxFontSizeMultiplier;
  let round;
  let str;
  let text;
  let tmp10;
  let tmp11;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let value;
  const obj = react2;
  const cResult = obj.c(48);
  if (cResult[0] !== arg0) {
    ({ size, round, text, value, icon, iconPosition, accessibilityLabel, accessibilityValue, maxFontSizeMultiplier } = arg0);
    const tmp14 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = accessibilityLabel;
    cResult[2] = accessibilityValue;
    cResult[3] = tmp14;
    cResult[4] = icon;
    cResult[5] = size;
    cResult[6] = round;
    cResult[7] = iconPosition;
    cResult[8] = maxFontSizeMultiplier;
    cResult[9] = text;
    cResult[10] = value;
    tmp11 = value;
    str = text;
    BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER = maxFontSizeMultiplier;
    tmp10 = iconPosition;
    tmp9 = round;
    tmp8 = size;
    tmp7 = icon;
    tmp6 = tmp14;
    tmp5 = accessibilityValue;
    tmp4 = accessibilityLabel;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
    BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER = cResult[8];
    str = cResult[9];
    tmp11 = cResult[10];
  }
  let str2 = "lg";
  if (undefined !== tmp8) {
    str2 = tmp8;
  }
  let str3 = "start";
  if (undefined !== tmp10) {
    str3 = tmp10;
  }
  if (undefined === BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER) {
    BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER = ButtonConstants.BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
  }
  if (cResult[11] === (undefined !== tmp9 && tmp9)) {
    if (cResult[12] === str2) {
      let tmp17;
      let obj7;
      if (cResult[13] === "start" === str3) {
        tmp17 = cResult[14];
      }
      const tmpResult = InputFieldContainer;
      const inputStyles = tmpResult.useInputStyles(tmp17);
      const tmp20 = closure_7();
      if (cResult[15] === tmp7) {
        if (cResult[16] === str3) {
          if (cResult[17] === inputStyles.leadingIcon) {
            let tmp21;
            if (cResult[18] === inputStyles.trailingIcon) {
              tmp21 = cResult[19];
            }
            if (cResult[20] === inputStyles.padding) {
              let tmp23;
              if (cResult[21] === inputStyles.radius) {
                tmp23 = cResult[22];
              }
              if (cResult[23] === tmp4) {
                let tmp24;
                if (cResult[24] === str) {
                  tmp24 = cResult[25];
                }
                if (cResult[26] === tmp5) {
                  let tmp28;
                  if (cResult[27] === tmp11) {
                    tmp28 = cResult[28];
                  }
                  const tmp32 = null != tmp11 ? tmp20.buttonTextValue : tmp20.buttonTextPlaceholder;
                  if (cResult[29] === inputStyles.text) {
                    if (cResult[30] === tmp20.buttonText) {
                      if (cResult[31] === tmp32) {
                        let tmp33;
                        if (cResult[32] === tmp21) {
                          tmp33 = cResult[33];
                        }
                        if (tmp11 == null) {
                          tmp11 = str;
                        }
                        if (cResult[34] === BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER) {
                          if (cResult[35] === tmp33) {
                            let tmp34;
                            if (cResult[36] === tmp11) {
                              tmp34 = cResult[37];
                            }
                            if (cResult[38] === tmp6) {
                              if (cResult[39] === tmp7) {
                                if (cResult[40] === str3) {
                                  if (cResult[41] === ref) {
                                    if (cResult[42] === str2) {
                                      if (cResult[43] === tmp34) {
                                        if (cResult[44] === tmp23) {
                                          if (cResult[45] === tmp24) {
                                            let tmp39;
                                            if (cResult[46] === tmp28) {
                                              tmp39 = cResult[47];
                                            }
                                            return tmp39;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            const BaseTextButton = BaseTextButton2.BaseTextButton;
                            const merged = Object.assign(tmp6);
                            const tmp44 = <BaseTextButton ref={ref} size={str2} variant="tertiary" icon={tmp7} iconPosition={str3} pillStyle={tmp23} accessibilityLabel={tmp24} accessibilityValue={tmp28} textElement={tmp34} />;
                            cResult[38] = tmp6;
                            cResult[39] = tmp7;
                            cResult[40] = str3;
                            cResult[41] = ref;
                            cResult[42] = str2;
                            cResult[43] = tmp34;
                            cResult[44] = tmp23;
                            cResult[45] = tmp24;
                            cResult[46] = tmp28;
                            cResult[47] = tmp44;
                            tmp39 = tmp44;
                          }
                        }
                        const tmp37 = <Text style={tmp33} numberOfLines={1} maxFontSizeMultiplier={BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER}>{tmp11}</Text>;
                        cResult[34] = BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
                        cResult[35] = tmp33;
                        cResult[36] = tmp11;
                        cResult[37] = tmp37;
                        tmp34 = tmp37;
                      }
                    }
                  }
                  const items = [inputStyles.text, tmp20.buttonText, tmp32, tmp21];
                  cResult[29] = inputStyles.text;
                  cResult[30] = tmp20.buttonText;
                  cResult[31] = tmp32;
                  cResult[32] = tmp21;
                  cResult[33] = items;
                  tmp33 = items;
                }
                let tmp30 = tmp5;
                if (tmp5 == null) {
                  tmp30 = { text: tmp11 };
                  const obj4 = { text: tmp11 };
                }
                cResult[26] = tmp5;
                cResult[27] = tmp11;
                cResult[28] = tmp30;
                tmp28 = tmp30;
              }
              let tmp26 = tmp4;
              if (tmp4 == null) {
                let str1;
                if (str != null) {
                  str1 = str.toString();
                }
                tmp26 = str1;
              }
              cResult[23] = tmp4;
              cResult[24] = str;
              cResult[25] = tmp26;
              tmp24 = tmp26;
            }
            const items1 = [, ];
            ({ padding: arr[0], radius: arr[1] } = inputStyles);
            cResult[20] = inputStyles.padding;
            cResult[21] = inputStyles.radius;
            cResult[22] = items1;
            tmp23 = items1;
          }
        }
      }
      if (null != tmp7) {
        let obj6;
        if ("start" === str3) {
          obj6 = { paddingStart: inputStyles.leadingIcon.paddingEnd };
          const obj5 = { paddingStart: inputStyles.leadingIcon.paddingEnd };
        } else {
          obj6 = { paddingEnd: inputStyles.trailingIcon.paddingStart };
        }
        obj7 = obj6;
      } else {
        obj7 = {};
      }
      cResult[15] = tmp7;
      cResult[16] = str3;
      cResult[17] = inputStyles.leadingIcon;
      cResult[18] = inputStyles.trailingIcon;
      cResult[19] = obj7;
      tmp21 = obj7;
    }
  }
  const obj8 = { size: str2, round: undefined !== tmp9 && tmp9, hasLeadingIcon: "start" === str3 };
  cResult[11] = undefined !== tmp9 && tmp9;
  cResult[12] = str2;
  cResult[13] = "start" === str3;
  cResult[14] = obj8;
  tmp17 = obj8;
}) : ((size, ref) => {
  let accessibilityLabel;
  let accessibilityValue;
  let icon;
  let iconPosition;
  let maxFontSizeMultiplier;
  let obj5;
  let text;
  let value;
  size = size.size;
  let str = "lg";
  if (undefined !== size) {
    str = size;
  }
  const round = size.round;
  const tmp = undefined !== round && round;
  ({ text, value, icon, iconPosition } = size);
  let str2 = "start";
  if (undefined !== iconPosition) {
    str2 = iconPosition;
  }
  ({ accessibilityLabel, accessibilityValue, maxFontSizeMultiplier } = size);
  if (undefined === maxFontSizeMultiplier) {
    maxFontSizeMultiplier = ButtonConstants.BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
  }
  const obj2 = { size: str, round: tmp, hasLeadingIcon: "start" === str2 };
  const tmp4 = _objectWithoutProperties(size, closure_3);
  const obj = InputFieldContainer;
  const inputStyles = obj.useInputStyles(obj2);
  const tmp9 = closure_7();
  if (null != icon) {
    let obj4;
    if ("start" === str2) {
      obj4 = { paddingStart: inputStyles.leadingIcon.paddingEnd };
      const obj3 = { paddingStart: inputStyles.leadingIcon.paddingEnd };
    } else {
      obj4 = { paddingEnd: inputStyles.trailingIcon.paddingStart };
    }
    obj5 = obj4;
  } else {
    obj5 = {};
  }
  const BaseTextButton = BaseTextButton2.BaseTextButton;
  const merged = Object.assign(tmp4);
  const items = [, ];
  ({ padding: arr[0], radius: arr[1] } = inputStyles);
  if (accessibilityLabel == null) {
    let str1;
    if (text != null) {
      str1 = text.toString();
    }
    accessibilityLabel = str1;
  }
  if (accessibilityValue == null) {
    accessibilityValue = { text: value };
    const obj7 = { text: value };
  }
  const items1 = [inputStyles.text, tmp9.buttonText, , ];
  items1[2] = null != value ? tmp9.buttonTextValue : tmp9.buttonTextPlaceholder;
  items1[3] = obj5;
  if (value == null) {
    value = text;
  }
  return <BaseTextButton ref={ref} size={str} variant="tertiary" icon={icon} iconPosition={str2} pillStyle={items} accessibilityLabel={accessibilityLabel} accessibilityValue={accessibilityValue} textElement={<Text style={items1} numberOfLines={1} maxFontSizeMultiplier={maxFontSizeMultiplier}>{value}</Text>} />;
}));
let size = size_mod;
const result = size.fileFinishedImporting("design/components/experimental/Button/native/InputButton.native.tsx");

export const InputButton = forwardRefResult;