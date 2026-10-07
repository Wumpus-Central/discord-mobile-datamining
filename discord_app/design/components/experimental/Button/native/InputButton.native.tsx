// discord_app/design/components/experimental/Button/native/InputButton.native.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import BaseTextButton from "../../../Button/native/BaseTextButton.native.tsx";
import ButtonConstants from "../../../Button/native/ButtonConstants.native.tsx";
import InputFieldContainer from "../../../Input/native/InputFieldContainer.native.tsx";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = [
  "size",
  "round",
  "text",
  "value",
  "icon",
  "iconPosition",
  "accessibilityLabel",
  "accessibilityValue",
  "maxFontSizeMultiplier",
];
let closure_3 = [
  "size",
  "round",
  "text",
  "value",
  "icon",
  "iconPosition",
  "accessibilityLabel",
  "accessibilityValue",
  "maxFontSizeMultiplier",
];
const Text = fn(17).Text;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj = {
  buttonText: { flexGrow: 1, flexShrink: 1, width: "100%" },
  buttonTextPlaceholder: { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT },
  buttonTextValue: null,
};
let obj3 = { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
obj.buttonTextValue = { color: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT };
let closure_7 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj4 = { color: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/experimental/Button/native/InputButton.native.tsx");

export const InputButton = noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        const cResult = c.c(48);
        if (cResult[0] !== arg0) {
          ({
            size,
            round,
            text,
            value,
            icon,
            iconPosition,
            accessibilityLabel,
            accessibilityValue,
            maxFontSizeMultiplier,
          } = arg0);
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
          let tmp11 = value;
          let str = text;
          let BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER = maxFontSizeMultiplier;
          let tmp10 = iconPosition;
          let tmp9 = round;
          let tmp8 = size;
          let tmp7 = icon;
          let tmp6 = tmp14;
          let tmp5 = accessibilityValue;
          let tmp4 = accessibilityLabel;
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
            if (cResult[13] === tmp16) {
              let tmp17 = cResult[14];
            }
            const inputStyles = InputFieldContainer.useInputStyles(tmp17);
            const tmp20 = closure_7();
            if (cResult[15] === tmp7) {
              if (cResult[16] === str3) {
                if (cResult[17] === inputStyles.leadingIcon) {
                  if (cResult[18] === inputStyles.trailingIcon) {
                    if (cResult[20] === inputStyles.padding) {
                      if (cResult[21] === inputStyles.radius) {
                        let tmp25 = cResult[22];
                      }
                      if (cResult[23] === tmp4) {
                        if (cResult[24] === str) {
                          let tmp26 = cResult[25];
                        }
                        if (cResult[26] === tmp5) {
                          if (cResult[27] === tmp11) {
                            let tmp30 = cResult[28];
                          }
                          const tmp34 = null != tmp11 ? tmp20.buttonTextValue : tmp20.buttonTextPlaceholder;
                          if (cResult[29] === inputStyles.text) {
                            if (cResult[30] === tmp20.buttonText) {
                              if (cResult[31] === tmp34) {
                                if (cResult[32] === tmp21) {
                                  let tmp35 = cResult[33];
                                }
                                if (tmp11 == null) {
                                  tmp11 = str;
                                }
                                if (cResult[34] === BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER) {
                                  if (cResult[35] === tmp35) {
                                    if (cResult[36] === tmp11) {
                                      let tmp36 = cResult[37];
                                    }
                                    if (cResult[38] === tmp6) {
                                      if (cResult[39] === tmp7) {
                                        if (cResult[40] === str3) {
                                          if (cResult[41] === ref) {
                                            if (cResult[42] === str2) {
                                              if (cResult[43] === tmp36) {
                                                if (cResult[44] === tmp25) {
                                                  if (cResult[45] === tmp26) {
                                                    if (cResult[46] === tmp30) {
                                                      let tmp41 = cResult[47];
                                                    }
                                                    return tmp41;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                    const obj2 = {};
                                    const merged = Object.assign(tmp6);
                                    obj2.ref = ref;
                                    obj2.size = str2;
                                    obj2.variant = "tertiary";
                                    obj2.icon = tmp7;
                                    obj2.iconPosition = str3;
                                    obj2.pillStyle = tmp25;
                                    obj2.accessibilityLabel = tmp26;
                                    obj2.accessibilityValue = tmp30;
                                    obj2.textElement = tmp36;
                                    const tmp46 = jsx(BaseTextButton.BaseTextButton, {});
                                    cResult[38] = tmp6;
                                    cResult[39] = tmp7;
                                    cResult[40] = str3;
                                    cResult[41] = ref;
                                    cResult[42] = str2;
                                    cResult[43] = tmp36;
                                    cResult[44] = tmp25;
                                    cResult[45] = tmp26;
                                    cResult[46] = tmp30;
                                    cResult[47] = tmp46;
                                    tmp41 = tmp46;
                                  }
                                }
                                const obj3 = {
                                  style: tmp35,
                                  numberOfLines: 1,
                                  maxFontSizeMultiplier: BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER,
                                  children: tmp11,
                                };
                                const tmp39 = (
                                  <Text
                                    style={tmp35}
                                    numberOfLines={1}
                                    maxFontSizeMultiplier={BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER}
                                  >
                                    {tmp11}
                                  </Text>
                                );
                                cResult[34] = BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
                                cResult[35] = tmp35;
                                cResult[36] = tmp11;
                                cResult[37] = tmp39;
                                tmp36 = tmp39;
                              }
                            }
                          }
                          const items = [inputStyles.text, tmp20.buttonText, tmp34, tmp21];
                          cResult[29] = inputStyles.text;
                          cResult[30] = tmp20.buttonText;
                          cResult[31] = tmp34;
                          cResult[32] = tmp21;
                          cResult[33] = items;
                          tmp35 = items;
                        }
                        let tmp32 = tmp5;
                        if (tmp5 == null) {
                          const obj4 = { text: tmp11 };
                          tmp32 = obj4;
                        }
                        cResult[26] = tmp5;
                        cResult[27] = tmp11;
                        cResult[28] = tmp32;
                        tmp30 = tmp32;
                      }
                      let tmp28 = tmp4;
                      if (tmp4 == null) {
                        let str1;
                        if (str != null) {
                          str1 = str.toString();
                        }
                        tmp28 = str1;
                      }
                      cResult[23] = tmp4;
                      cResult[24] = str;
                      cResult[25] = tmp28;
                      tmp26 = tmp28;
                    }
                    const items1 = [,];
                    ({ padding: arr[0], radius: arr[1] } = inputStyles);
                    cResult[20] = inputStyles.padding;
                    cResult[21] = inputStyles.radius;
                    cResult[22] = items1;
                    tmp25 = items1;
                  }
                }
              }
            }
            if (null == tmp7) {
              const obj5 = {};
              cResult[15] = tmp7;
              cResult[16] = str3;
              cResult[17] = inputStyles.leadingIcon;
              cResult[18] = inputStyles.trailingIcon;
              cResult[19] = obj5;
            }
            if (tmp16) {
              const obj6 = { paddingStart: inputStyles.leadingIcon.paddingEnd };
            } else {
              const obj7 = { paddingEnd: inputStyles.trailingIcon.paddingStart };
            }
            const tmpResult = InputFieldContainer;
          }
        }
        const obj8 = { size: str2, round: undefined !== tmp9 && tmp9, hasLeadingIcon: "start" === str3 };
        cResult[11] = undefined !== tmp9 && tmp9;
        cResult[12] = str2;
        cResult[13] = "start" === str3;
        cResult[14] = obj8;
        tmp17 = obj8;
      }
    : (size, ref) => {
        size = size.size;
        let str = "lg";
        if (undefined !== size) {
          str = size;
        }
        const round = size.round;
        ({ text, value, icon, iconPosition } = size);
        let str2 = "start";
        if (undefined !== iconPosition) {
          str2 = iconPosition;
        }
        ({ accessibilityLabel, accessibilityValue, maxFontSizeMultiplier } = size);
        if (undefined === maxFontSizeMultiplier) {
          maxFontSizeMultiplier = ButtonConstants.BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
        }
        const tmp4 = _objectWithoutProperties(size, closure_3);
        const obj2 = { size: str, round: undefined !== round && round, hasLeadingIcon: "start" === str2 };
        const inputStyles = InputFieldContainer.useInputStyles(obj2);
        const tmp9 = closure_7();
        if (null != icon) {
          if (tmp7) {
            const obj3 = { paddingStart: inputStyles.leadingIcon.paddingEnd };
          } else {
            const obj4 = { paddingEnd: inputStyles.trailingIcon.paddingStart };
          }
        } else {
          const obj6 = {};
          const merged = Object.assign(tmp4);
          obj6.ref = ref;
          obj6.size = str;
          obj6.variant = "tertiary";
          obj6.icon = icon;
          obj6.iconPosition = str2;
          const items = [,];
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
          const items1 = [inputStyles.text, tmp9.buttonText, ,];
          const obj8 = { style: null, numberOfLines: 1, maxFontSizeMultiplier: null, children: null };
          items1[2] = null != value ? tmp9.buttonTextValue : tmp9.buttonTextPlaceholder;
          items1[3] = {};
          obj8.style = items1;
          obj8.maxFontSizeMultiplier = maxFontSizeMultiplier;
          if (value == null) {
            value = text;
          }
          obj8.children = value;
          obj6.textElement = (
            <Text style={null} numberOfLines={1} maxFontSizeMultiplier={null}>
              {null}
            </Text>
          );
          return jsx(BaseTextButton.BaseTextButton, {});
        }
        const tmp = undefined !== round && round;
      },
);
