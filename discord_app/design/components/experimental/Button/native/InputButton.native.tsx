// === Module 8545: InputButton ===

// Module 8545 (InputButton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import BaseTextButton2 from "BaseTextButton" /* 5380 */;
import ButtonConstants from "ButtonConstants" /* 5384 */;
import InputFieldContainer from "InputFieldContainer" /* 6300 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["ref"];
let closure_3 = ["size", "round", "text", "value", "icon", "iconPosition", "accessibilityLabel", "accessibilityValue", "maxFontSizeMultiplier"];
let closure_4 = ["size", "round", "text", "value", "icon", "iconPosition", "accessibilityLabel", "accessibilityValue", "maxFontSizeMultiplier"];
const Text = fn(17).Text;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { buttonText: { flexGrow: 1, flexShrink: 1, width: "100%" }, buttonTextPlaceholder: { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT }, buttonTextValue: null };
let obj3 = { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
obj2.buttonTextValue = { color: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { color: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/experimental/Button/native/InputButton.native.tsx");

export const InputButton = ReactCompilerGating.isReactCompilerEnabled() ? (function InputButton(ref) {
  const cResult = c.c(26);
  const tmp4 = _objectWithoutProperties(ref.ref, closure_2);
  ({ size, round, text, value, icon, iconPosition, accessibilityLabel, accessibilityValue, maxFontSizeMultiplier } = tmp4);
  const tmp5 = _objectWithoutProperties(tmp4, closure_3);
  let str = "lg";
  if (undefined !== size) {
    str = size;
  }
  let str2 = "start";
  if (undefined !== iconPosition) {
    str2 = iconPosition;
  }
  if (undefined === maxFontSizeMultiplier) {
    maxFontSizeMultiplier = ButtonConstants.BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
  }
  const tmp6 = undefined !== round && round;
  const obj2 = { size: str, round: tmp6, hasLeadingIcon: "start" === str2 };
  const inputStyles = InputFieldContainer.useInputStyles(obj2);
  const tmp9 = closure_8();
  if (null != icon) {
    if (tmp7) {
      const obj3 = { paddingStart: inputStyles.leadingIcon.paddingEnd };
    } else {
      const obj4 = { paddingEnd: inputStyles.trailingIcon.paddingStart };
    }
  } else {
    const obj5 = {};
    const BaseTextButton = BaseTextButton2.BaseTextButton;
    if (cResult[0] === inputStyles.padding) {
      if (cResult[1] === inputStyles.radius) {
        let tmp11 = cResult[2];
      }
      if (accessibilityLabel == null) {
        let str1;
        if (text != null) {
          str1 = text.toString();
        }
        accessibilityLabel = str1;
      }
      if (cResult[3] === accessibilityValue) {
        if (cResult[4] === value) {
          let tmp13 = cResult[5];
        }
        const tmp15 = null != value ? tmp9.buttonTextValue : tmp9.buttonTextPlaceholder;
        if (cResult[6] === inputStyles.text) {
          if (cResult[7] === tmp9.buttonText) {
            if (cResult[8] === tmp15) {
              if (cResult[9] === obj5) {
                let tmp16 = cResult[10];
              }
              if (value == null) {
                value = text;
              }
              if (cResult[11] === maxFontSizeMultiplier) {
                if (cResult[12] === tmp16) {
                  if (cResult[13] === value) {
                    let tmp17 = cResult[14];
                  }
                  if (cResult[15] === BaseTextButton) {
                    if (cResult[16] === tmp5) {
                      if (cResult[17] === icon) {
                        if (cResult[18] === str2) {
                          if (cResult[19] === ref) {
                            if (cResult[20] === str) {
                              if (cResult[21] === tmp17) {
                                if (cResult[22] === tmp11) {
                                  if (cResult[23] === accessibilityLabel) {
                                    if (cResult[24] === tmp13) {
                                      let tmp21 = cResult[25];
                                    }
                                    return tmp21;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj6 = {};
                  const merged = Object.assign(tmp5);
                  obj6.ref = ref;
                  obj6.size = str;
                  obj6.variant = "tertiary";
                  obj6.icon = icon;
                  obj6.iconPosition = str2;
                  obj6.pillStyle = tmp11;
                  obj6.accessibilityLabel = accessibilityLabel;
                  obj6.accessibilityValue = tmp13;
                  obj6.textElement = tmp17;
                  const tmp26 = <BaseTextButton />;
                  cResult[15] = BaseTextButton;
                  cResult[16] = tmp5;
                  cResult[17] = icon;
                  cResult[18] = str2;
                  cResult[19] = ref;
                  cResult[20] = str;
                  cResult[21] = tmp17;
                  cResult[22] = tmp11;
                  cResult[23] = accessibilityLabel;
                  cResult[24] = tmp13;
                  cResult[25] = tmp26;
                  tmp21 = tmp26;
                }
              }
              const obj7 = { style: tmp16, numberOfLines: 1, maxFontSizeMultiplier, children: value };
              const tmp20 = <Text style={tmp16} numberOfLines={1} maxFontSizeMultiplier={maxFontSizeMultiplier}>{value}</Text>;
              cResult[11] = maxFontSizeMultiplier;
              cResult[12] = tmp16;
              cResult[13] = value;
              cResult[14] = tmp20;
              tmp17 = tmp20;
            }
          }
        }
        const items = [inputStyles.text, tmp9.buttonText, tmp15, obj5];
        cResult[6] = inputStyles.text;
        cResult[7] = tmp9.buttonText;
        cResult[8] = tmp15;
        cResult[9] = obj5;
        cResult[10] = items;
        tmp16 = items;
      }
      let tmp14 = accessibilityValue;
      if (accessibilityValue == null) {
        const obj8 = { text: value };
        tmp14 = obj8;
      }
      cResult[3] = accessibilityValue;
      cResult[4] = value;
      cResult[5] = tmp14;
      tmp13 = tmp14;
    }
    const items1 = [, ];
    ({ padding: arr[0], radius: arr[1] } = inputStyles);
    cResult[0] = inputStyles.padding;
    cResult[1] = inputStyles.radius;
    cResult[2] = items1;
    tmp11 = items1;
  }
  const tmpResult = InputFieldContainer;
}) : (function InputButton(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const size = merged.size;
  let str = "lg";
  if (undefined !== size) {
    str = size;
  }
  const round = merged.round;
  ({ text, value, icon, iconPosition } = merged);
  let str2 = "start";
  if (undefined !== iconPosition) {
    str2 = iconPosition;
  }
  ({ accessibilityLabel, accessibilityValue, maxFontSizeMultiplier } = merged);
  if (undefined === maxFontSizeMultiplier) {
    maxFontSizeMultiplier = ButtonConstants.BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
  }
  const tmp5 = _objectWithoutProperties(merged, closure_4);
  const obj2 = { size: str, round: undefined !== round && round, hasLeadingIcon: "start" === str2 };
  const inputStyles = InputFieldContainer.useInputStyles(obj2);
  const tmp10 = closure_8();
  if (null != icon) {
    if (tmp8) {
      const obj3 = { paddingStart: inputStyles.leadingIcon.paddingEnd };
    } else {
      const obj4 = { paddingEnd: inputStyles.trailingIcon.paddingStart };
    }
  } else {
    const obj6 = {};
    const merged1 = Object.assign(tmp5);
    obj6.ref = ref.ref;
    obj6.size = str;
    obj6.variant = "tertiary";
    obj6.icon = icon;
    obj6.iconPosition = str2;
    const items = [, ];
    ({ padding: arr[0], radius: arr[1] } = inputStyles);
    obj6.pillStyle = items;
    if (accessibilityLabel == null) {
      let str1;
      if (text != null) {
        str1 = text.toString();
      }
      accessibilityLabel = str1;
    }
    obj6.accessibilityLabel = accessibilityLabel;
    if (accessibilityValue == null) {
      const obj7 = { text: value };
      accessibilityValue = obj7;
    }
    obj6.accessibilityValue = accessibilityValue;
    const items1 = [inputStyles.text, tmp10.buttonText, , ];
    const obj8 = { style: null, numberOfLines: 1, maxFontSizeMultiplier: null, children: null };
    items1[2] = null != value ? tmp10.buttonTextValue : tmp10.buttonTextPlaceholder;
    items1[3] = {};
    obj8.style = items1;
    obj8.maxFontSizeMultiplier = maxFontSizeMultiplier;
    if (value == null) {
      value = text;
    }
    obj8.children = value;
    obj6.textElement = <Text style={null} numberOfLines={1} maxFontSizeMultiplier={null}>{null}</Text>;
    return jsx(BaseTextButton2.BaseTextButton, {});
  }
  const tmp2 = undefined !== round && round;
});