// === Module 1191: Button/Button ===

// Module 1191 (Button/Button)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import FormConstants from "FormConstants" /* 1192 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import shared from "shared" /* 4735 */;
import LegacyTokens from "LegacyTokens" /* 5627 */;
import LegacyText_LegacyTextDefault from "LegacyText/LegacyText" /* 8941 */;
import StylesheetUtils from "StylesheetUtils" /* 13917 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ColorUtils_mod from "ColorUtils" /* 4733 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let ColorUtils;
let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj11;
let obj12;
let obj13;
let obj14;
let obj15;
let obj16;
let obj17;
let obj18;
let obj19;
let obj2;
let obj21;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
function getTextStyles(disabled, text) {
  let color;
  let look;
  let flag = disabled.disabled;
  ({ color, look, size } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  const items = [text.text, , , , ];
  const obj = { [closure_1_13.BRAND]: text.textBrand, [closure_1_13.RED]: text.textRed, [closure_1_13.GREEN]: text.textGreen, [closure_1_13.PRIMARY]: text.textPrimary, [closure_1_13.TRANSPARENT]: text.textTransparent, [closure_1_13.GREY]: text.textGrey, [closure_1_13.LIGHTGREY]: text.textLightgrey, [closure_1_13.WHITE]: text.textWhite, [closure_1_13.LINK]: text.textLink };
  items[1] = obj[color];
  const obj2 = { [closure_1_12.FILLED]: text.textFilled, [closure_1_12.LINK]: text.textLink, [closure_1_12.OUTLINED]: text.textOutlined };
  items[2] = obj2[look];
  items[3] = flag ? text.textDisabled : text.textDefault;
  const obj3 = { [closure_1_15.XSMALL]: text.textXsmall, [closure_1_15.SMALL]: text.textSmall, [closure_1_15.MEDIUM]: text.textMedium, [closure_1_15.LARGE]: text.textLarge };
  items[4] = obj3[size];
  return items;
}
function getButtonStyles(shrink, button) {
  let color;
  let disabled;
  let look;
  ({ color, disabled } = shrink);
  ({ size, look } = shrink);
  if (disabled === undefined) {
    disabled = false;
  }
  let flag = shrink.shrink;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = shrink.pressed;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = shrink.darkenOnPress;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let combined = color;
  const style = shrink.style;
  const tmp2 = disabled ? constants.DISABLED : constants.DEFAULT;
  if (flag2) {
    combined = color;
    const obj = PlatformUtils;
    if (!obj.isAndroid()) {
      const _HermesInternal = HermesInternal;
      combined = "" + color + "Dark";
    }
  }
  const items = [button.button, , , , , , ];
  let buttonShrink = null;
  if (flag) {
    buttonShrink = button.buttonShrink;
  }
  items[1] = buttonShrink;
  const obj2 = StylesheetUtils;
  items[2] = obj2.getClass(button, "button", combined, tmp2);
  const obj3 = StylesheetUtils;
  items[3] = obj3.getClass(button, "button", size);
  const obj4 = StylesheetUtils;
  items[4] = obj4.getClass(button, "button", look);
  let faded;
  if (!flag3) {
    const tmp8Result = PlatformUtils;
    if (!tmp8Result.isAndroid()) {
      if (flag2) {
        faded = button.faded;
      }
    }
  }
  items[5] = faded;
  items[6] = style;
  return items;
}
let react = react_mod;
({ ActivityIndicator: closure_4, Pressable: hasOwnProperty, View: metroRequire } = react_native);
const Fonts = Constants.Fonts;
let getThemedRippleConfig = FormConstants.getThemedRippleConfig;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { button: { flexDirection: "row", flexGrow: 1, justifyContent: "center", alignItems: "center", alignSelf: "stretch", borderRadius: 3 }, buttonShrink: { flexGrow: 0, alignSelf: "flex-start", paddingHorizontal: 10 }, buttonBrandDefault: obj2, buttonBrandDarkDefault: obj3, buttonRedDefault: obj4, buttonRedDarkDefault: obj5, buttonGreenDefault: obj6, buttonGreenDarkDefault: obj7, buttonGreyDarkDefault: obj8, buttonLightgreyDefault: obj9, buttonLightgreyDarkDefault: { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500 }, buttonBrandDisabled: obj11, buttonBrandDarkDisabled: obj12, buttonRedDisabled: obj13, buttonRedDarkDisabled: obj14, buttonGreenDisabled: obj15, buttonGreenDarkDisabled: obj16, buttonGreyDarkDisabled: obj17, buttonLightgreyDisabled: obj18, buttonLightgreyDarkDisabled: obj19, buttonTransparentDefault: { backgroundColor: "transparent" }, buttonTransparentDarkDefault: { backgroundColor: "transparent" }, buttonTransparentDisabled: { backgroundColor: "transparent" }, buttonTransparentDarkDisabled: { backgroundColor: "transparent" }, buttonWhiteDefault: { backgroundColor: nativeDefault.colors.WHITE }, buttonWhiteDisabled: obj21, buttonFilled: {}, buttonLink: {}, buttonLinkDefault: {}, buttonOutlined: { backgroundColor: "transparent", borderWidth: 1, borderStyle: "solid", borderColor: LegacyTokens.BUTTON_OUTLINED_BORDER }, buttonXsmall: { minHeight: 24 }, buttonSmall: { minHeight: 32 }, buttonMedium: { minHeight: 40 }, buttonLarge: { minHeight: 46 }, text: { color: nativeDefault.colors.WHITE, fontFamily: Fonts.PRIMARY_SEMIBOLD, flexShrink: 1 }, textXsmall: { fontSize: 12 }, textSmall: { fontSize: 14 }, textMedium: { fontSize: 14 }, textLarge: { fontSize: 20 }, textDisabled: { opacity: 0.6 }, textDefault: { opacity: 1 }, textBrand: { color: nativeDefault.colors.WHITE }, textRed: { color: nativeDefault.colors.WHITE }, textGreen: { color: nativeDefault.colors.WHITE }, textGrey: { color: nativeDefault.colors.WHITE }, textLightgrey: { color: nativeDefault.colors.WHITE }, textWhite: { color: nativeDefault.colors.WHITE }, textFilled: {}, textOutlined: { color: LegacyTokens.DARK_PRIMARY_100_LIGHT_PRIMARY_500 }, faded: { opacity: 0.5 }, buttonWhiteDarkDefault: { backgroundColor: nativeDefault.colors.WHITE }, textLink: { color: nativeDefault.colors.TEXT_LINK }, buttonPrimaryDefault: { backgroundColor: LegacyTokens.DARK_PRIMARY_100_LIGHT_PRIMARY_500 }, buttonPrimaryDarkDefault: { backgroundColor: LegacyTokens.DARK_PRIMARY_100_LIGHT_PRIMARY_500 }, buttonGreyDefault: { backgroundColor: LegacyTokens.DARK_PRIMARY_500_LIGHT_PRIMARY_430 }, textPrimary: { color: LegacyTokens.DARK_PRIMARY_500_LIGHT_PRIMARY_100 }, textTransparent: { color: LegacyTokens.DARK_PRIMARY_100_LIGHT_PRIMARY_500 }, buttonPrimaryDisabled: { backgroundColor: LegacyTokens.BUTTON_PRIMARY_DISABLED_BACKGROUND }, buttonPrimaryDarkDisabled: { backgroundColor: LegacyTokens.BUTTON_PRIMARY_DISABLED_BACKGROUND }, buttonGreyDisabled: { backgroundColor: LegacyTokens.BUTTON_GREY_DISABLED_BACKGROUND } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.unsafe_rawColors.BRAND_600 };
obj4 = { backgroundColor: nativeDefault.unsafe_rawColors.RED_400 };
obj5 = { backgroundColor: nativeDefault.unsafe_rawColors.RED_500 };
obj6 = { backgroundColor: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT };
obj7 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_500 };
obj8 = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500 };
obj9 = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500 };
obj11 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BRAND_500, 0.5) };
({ backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500 });
ColorUtils = ColorUtils_mod;
obj12 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BRAND_600, 0.5) };
ColorUtils = ColorUtils_mod;
obj13 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.RED_400, 0.5) };
ColorUtils = ColorUtils_mod;
obj14 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.RED_500, 0.5) };
ColorUtils = ColorUtils_mod;
obj15 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.GREEN_360, 0.5) };
ColorUtils = ColorUtils_mod;
obj16 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.GREEN_500, 0.5) };
ColorUtils = ColorUtils_mod;
obj17 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_500, 0.5) };
ColorUtils = ColorUtils_mod;
obj18 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_500, 0.5) };
ColorUtils = ColorUtils_mod;
obj19 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_500, 0.5) };
ColorUtils = ColorUtils_mod;
obj21 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.5) };
({ backgroundColor: nativeDefault.colors.WHITE });
ColorUtils = ColorUtils_mod;
({ backgroundColor: "transparent", borderWidth: 1, borderStyle: "solid", borderColor: LegacyTokens.BUTTON_OUTLINED_BORDER });
({ color: nativeDefault.colors.WHITE, fontFamily: Fonts.PRIMARY_SEMIBOLD, flexShrink: 1 });
({ color: nativeDefault.colors.WHITE });
({ color: nativeDefault.colors.WHITE });
({ color: nativeDefault.colors.WHITE });
({ color: nativeDefault.colors.WHITE });
({ color: nativeDefault.colors.WHITE });
({ color: nativeDefault.colors.WHITE });
({ color: LegacyTokens.DARK_PRIMARY_100_LIGHT_PRIMARY_500 });
({ backgroundColor: nativeDefault.colors.WHITE });
({ color: nativeDefault.colors.TEXT_LINK });
({ backgroundColor: LegacyTokens.DARK_PRIMARY_100_LIGHT_PRIMARY_500 });
({ backgroundColor: LegacyTokens.DARK_PRIMARY_100_LIGHT_PRIMARY_500 });
({ backgroundColor: LegacyTokens.DARK_PRIMARY_500_LIGHT_PRIMARY_430 });
({ color: LegacyTokens.DARK_PRIMARY_500_LIGHT_PRIMARY_100 });
({ color: LegacyTokens.DARK_PRIMARY_100_LIGHT_PRIMARY_500 });
({ backgroundColor: LegacyTokens.BUTTON_PRIMARY_DISABLED_BACKGROUND });
({ backgroundColor: LegacyTokens.BUTTON_PRIMARY_DISABLED_BACKGROUND });
({ backgroundColor: LegacyTokens.BUTTON_GREY_DISABLED_BACKGROUND });
const styles = createStyles(obj);
const obj41 = { FILLED: "filled", LINK: "link", OUTLINED: "outlined" };
const obj42 = { BRAND: "brand", RED: "red", GREEN: "green", PRIMARY: "primary", TRANSPARENT: "transparent", GREY: "grey", LIGHTGREY: "lightgrey", WHITE: "white", LINK: "link" };
let constants = { DEFAULT: "Default", DISABLED: "Disabled" };
const obj43 = { XSMALL: "xsmall", SMALL: "small", MEDIUM: "medium", LARGE: "large" };
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let color;
  let disabled;
  let items1;
  let look;
  let style;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(22);
  ({ children, color, look, size, disabled, style } = arg0);
  const tmp3 = styles();
  if (typeof children !== "function") {
    if (cResult[0] === color) {
      if (cResult[1] === disabled) {
        if (cResult[2] === look) {
          if (cResult[3] === size) {
            let tmp11;
            if (cResult[4] === tmp3) {
              tmp11 = cResult[5];
            }
            if (cResult[6] === style) {
              let tmp14;
              if (cResult[7] === tmp11) {
                tmp14 = cResult[8];
              }
              if (cResult[9] === children) {
                let tmp15;
                if (cResult[10] === tmp14) {
                  tmp15 = cResult[11];
                }
                tmp7 = tmp15;
              }
              const obj2 = { maxFontSizeMultiplier: 2, numberOfLines: 1, style: tmp14, children };
              const tmp18 = metroImportAll(LegacyText_LegacyTextDefault, obj2);
              cResult[9] = children;
              cResult[10] = tmp14;
              cResult[11] = tmp18;
              tmp15 = tmp18;
            }
            const items = [tmp11, style];
            cResult[6] = style;
            cResult[7] = tmp11;
            cResult[8] = items;
            tmp14 = items;
          }
        }
      }
    }
    const obj3 = { color, look, size, disabled };
    const tmp13 = getTextStyles(obj3, tmp3);
    cResult[0] = color;
    cResult[1] = disabled;
    cResult[2] = look;
    cResult[3] = size;
    cResult[4] = tmp3;
    cResult[5] = tmp13;
    tmp11 = tmp13;
  } else {
    if (cResult[12] === children) {
      if (cResult[13] === color) {
        if (cResult[14] === disabled) {
          if (cResult[15] === look) {
            if (cResult[16] === size) {
              if (cResult[17] === style) {
                let tmp4;
                if (cResult[18] === tmp3) {
                  tmp4 = cResult[19];
                }
                if (cResult[20] !== tmp4) {
                  const obj4 = { children: tmp4 };
                  const tmp10 = metroImportAll(React4, obj4);
                  cResult[20] = tmp4;
                  cResult[21] = tmp10;
                  tmp7 = tmp10;
                } else {
                  tmp7 = cResult[21];
                }
              }
            }
          }
        }
      }
    }
    const obj5 = { style: items1 };
    const obj6 = { color, look, size, disabled };
    items1 = [getTextStyles(obj6, tmp3), style];
    const childrenResult = children(obj5);
    cResult[12] = children;
    cResult[13] = color;
    cResult[14] = disabled;
    cResult[15] = look;
    cResult[16] = size;
    cResult[17] = style;
    cResult[18] = tmp3;
    cResult[19] = childrenResult;
    tmp4 = childrenResult;
  }
  return tmp7;
}) : ((arg0) => {
  let children;
  let color;
  let disabled;
  let items;
  let items1;
  let look;
  let obj4;
  let style;
  let tmp7;
  ({ children, color, look, size, disabled, style } = arg0);
  const tmp = styles();
  if (typeof children !== "function") {
    const obj = { maxFontSizeMultiplier: 2, numberOfLines: 1, style: items, children };
    items = [, ];
    const obj2 = { color, look, size, disabled };
    const tmp5 = LegacyText_LegacyTextDefault;
    items[0] = getTextStyles(obj2, tmp);
    items[1] = style;
    tmp7 = metroImportAll(tmp5, obj);
  } else {
    const obj3 = { children: children(obj4) };
    obj4 = { style: items1 };
    const obj5 = { color, look, size, disabled };
    items1 = [getTextStyles(obj5, tmp), style];
    tmp7 = metroImportAll(React4, obj3);
  }
  return tmp7;
});
let closure_18 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityActions;
  let accessibilityHint;
  let accessibilityLabel;
  let accessibilityRole;
  let accessibilityState;
  let accessibilityValue;
  let closure_7;
  let color;
  let cornerRadius;
  let darkenOnPress;
  let disabled;
  let foregroundRipple;
  let items;
  let loading;
  let loadingColorDark;
  let loadingColorLight;
  let look;
  let onAccessibilityAction;
  let onLongPress;
  let onPress;
  let onPressIn;
  let onPressOut;
  let onTouchEnd;
  let onTouchStart;
  let renderIcon;
  let renderLinearGradient;
  let renderRightIcon;
  let renderShine;
  let shrink;
  let style;
  let testID;
  let text;
  let textStyle;
  let tmp15;
  let tmp23;
  let obj = style(look[12]);
  const cResult = obj.c(83);
  ({ look, color, size, text, shrink, disabled, loading, loadingColorDark, loadingColorLight, textStyle, style } = arg0);
  ({ accessibilityRole, accessibilityLabel, accessibilityHint, accessibilityState, accessibilityActions, onAccessibilityAction, accessibilityValue, darkenOnPress } = arg0);
  ({ renderIcon, renderRightIcon, renderShine, renderLinearGradient, testID, onPress, onPressIn, onPressOut, onTouchStart, onTouchEnd, onLongPress, foregroundRipple, cornerRadius } = arg0);
  if (undefined === look) {
    look = obj41.FILLED;
  }
  if (undefined === color) {
    color = obj42.BRAND;
  }
  if (undefined === size) {
    size = obj43.MEDIUM;
  }
  shrink = tmp7;
  let tmp8 = undefined !== disabled && disabled;
  disabled = tmp8;
  if (undefined === loadingColorDark) {
    loadingColorDark = darkenOnPress(tmp2[6]).unsafe_rawColors.WHITE;
  }
  if (undefined === loadingColorLight) {
    loadingColorLight = darkenOnPress(tmp2[6]).unsafe_rawColors.PRIMARY_500;
  }
  let str = "button";
  if (undefined !== accessibilityRole) {
    str = accessibilityRole;
  }
  const tmp12 = styles();
  getThemedRippleConfig = tmp12;
  style(look[14]);
  if (undefined !== loading && loading) {
    let tmp19;
    const tmpResult2 = style(look[14]);
    if (tmpResult2.isThemeDark(tmp14)) {
      loadingColorLight = loadingColorDark;
    }
    if (cResult[0] !== loadingColorLight) {
      const obj2 = { color: loadingColorLight };
      const tmp22 = closure_8(size, obj2);
      cResult[0] = loadingColorLight;
      cResult[1] = tmp22;
      tmp19 = tmp22;
    } else {
      tmp19 = cResult[1];
    }
    tmp15 = tmp19;
  } else {
    if (cResult[2] === color) {
      if (cResult[3] === tmp8) {
        if (cResult[4] === look) {
          if (cResult[5] === size) {
            if (cResult[6] === text) {
              if (cResult[7] === textStyle) {
                tmp15 = cResult[8];
              }
            }
          }
        }
      }
    }
    const obj3 = { color, look, size, disabled: tmp8, style: textStyle, children: text };
    const tmp18 = closure_8(closure_18, obj3);
    cResult[2] = color;
    cResult[3] = tmp8;
    cResult[4] = look;
    cResult[5] = size;
    cResult[6] = text;
    cResult[7] = textStyle;
    cResult[8] = tmp18;
    tmp15 = tmp18;
  }
  if (cResult[9] !== tmp8) {
    const obj4 = { disabled: tmp8 };
    cResult[9] = tmp8;
    cResult[10] = obj4;
    tmp23 = obj4;
  } else {
    tmp23 = cResult[10];
  }
  if (cResult[11] === accessibilityState) {
    let tmp24;
    if (cResult[12] === tmp23) {
      tmp24 = cResult[13];
    }
    if (cResult[14] === color) {
      if (cResult[15] === darkenOnPress) {
        if (cResult[16] === tmp8) {
          if (cResult[17] === look) {
            if (cResult[18] === (undefined !== shrink && shrink)) {
              if (cResult[19] === size) {
                if (cResult[20] === style) {
                  let tmp27;
                  if (cResult[21] === tmp12) {
                    tmp27 = cResult[22];
                  }
                  if (cornerRadius == null) {
                    cornerRadius = 3;
                  }
                  if (cResult[23] === foregroundRipple) {
                    let tmp29;
                    let tmp35;
                    let tmp37;
                    let tmp39;
                    let tmp41;
                    if (cResult[24] === cornerRadius) {
                      tmp29 = cResult[25];
                    }
                    if (color.useContext(style(look[15]).RedesignCompatContext)) {
                      if (look !== obj41.LINK) {
                        let tmp47;
                        let tmp49;
                        if (cResult[26] !== color) {
                          let str2 = "active";
                          if (obj42.GREEN !== color) {
                            str2 = "destructive";
                            if (obj42.RED !== color) {
                              str2 = "secondary";
                              if (obj42.GREY !== color) {
                                str2 = "secondary";
                                if (obj42.LIGHTGREY !== color) {
                                  str2 = "secondary";
                                  if (obj42.TRANSPARENT !== color) {
                                    str2 = "primary";
                                    if (obj42.WHITE === color) {
                                      str2 = "primary-overlay";
                                    }
                                  }
                                }
                              }
                            }
                          }
                          cResult[26] = color;
                          cResult[27] = str2;
                          tmp47 = str2;
                        } else {
                          tmp47 = cResult[27];
                        }
                        if (cResult[28] !== size) {
                          let str4 = "lg";
                          if (obj43.LARGE !== size) {
                            str4 = "md";
                            if (obj43.MEDIUM !== size) {
                              if (obj43.SMALL === size) {
                                str4 = "sm";
                              }
                            }
                          }
                          cResult[28] = size;
                          cResult[29] = str4;
                          tmp49 = str4;
                        } else {
                          tmp49 = cResult[29];
                        }
                        if (!tmp8) {
                          tmp8 = tmp9;
                        }
                        if (cResult[30] === renderIcon) {
                          let tmp51;
                          if (cResult[31] === renderRightIcon) {
                            tmp51 = cResult[32];
                          }
                          let str5 = "start";
                          if (null == renderIcon) {
                            let str6;
                            if (null != renderRightIcon) {
                              str6 = "end";
                            }
                            str5 = str6;
                          }
                          if (cResult[33] === accessibilityActions) {
                            if (cResult[34] === accessibilityHint) {
                              if (cResult[35] === accessibilityLabel) {
                                if (cResult[36] === onAccessibilityAction) {
                                  if (cResult[37] === onPress) {
                                    if (cResult[38] === onPressIn) {
                                      if (cResult[39] === onPressOut) {
                                        if (cResult[40] === onTouchStart) {
                                          if (cResult[41] === text) {
                                            if (cResult[42] === tmp47) {
                                              if (cResult[43] === tmp49) {
                                                if (cResult[44] === tmp8) {
                                                  if (cResult[45] === tmp51) {
                                                    if (cResult[46] === str5) {
                                                      let tmp55;
                                                      if (cResult[47] === !(undefined !== shrink && shrink)) {
                                                        tmp55 = cResult[48];
                                                      }
                                                      if (cResult[49] === style) {
                                                        let tmp58;
                                                        if (cResult[50] === tmp55) {
                                                          tmp58 = cResult[51];
                                                        }
                                                        return tmp58;
                                                      }
                                                      const obj5 = { style, children: tmp55 };
                                                      const tmp61 = closure_8(disabled, obj5);
                                                      cResult[49] = style;
                                                      cResult[50] = tmp55;
                                                      cResult[51] = tmp61;
                                                      tmp58 = tmp61;
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
                                }
                              }
                            }
                          }
                          const obj6 = { text, variant: tmp47, size: tmp49, accessibilityLabel, accessibilityHint, accessibilityActions, onAccessibilityAction, onPress, onPressIn, onPressOut, onTouchStart, disabled: tmp8, icon: tmp51, iconPosition: str5, grow: !(undefined !== shrink && shrink) };
                          const tmp57 = closure_8(style(look[16]).Button, obj6);
                          cResult[33] = accessibilityActions;
                          cResult[34] = accessibilityHint;
                          cResult[35] = accessibilityLabel;
                          cResult[36] = onAccessibilityAction;
                          cResult[37] = onPress;
                          cResult[38] = onPressIn;
                          cResult[39] = onPressOut;
                          cResult[40] = onTouchStart;
                          cResult[41] = text;
                          cResult[42] = tmp47;
                          cResult[43] = tmp49;
                          cResult[44] = tmp8;
                          cResult[45] = tmp51;
                          cResult[46] = str5;
                          cResult[47] = !(undefined !== shrink && shrink);
                          cResult[48] = tmp57;
                          tmp55 = tmp57;
                        }
                        let renderIconResult;
                        if (renderIcon != null) {
                          renderIconResult = renderIcon();
                        }
                        if (renderIconResult == null) {
                          let renderRightIconResult;
                          if (renderRightIcon != null) {
                            renderRightIconResult = renderRightIcon();
                          }
                          renderIconResult = renderRightIconResult;
                        }
                        if (renderIconResult == null) {
                          renderIconResult = null;
                        }
                        cResult[30] = renderIcon;
                        cResult[31] = renderRightIcon;
                        cResult[32] = renderIconResult;
                        tmp51 = renderIconResult;
                      }
                    }
                    if (cResult[52] !== renderLinearGradient) {
                      let renderLinearGradientResult;
                      if (renderLinearGradient != null) {
                        renderLinearGradientResult = renderLinearGradient();
                      }
                      if (renderLinearGradientResult == null) {
                        renderLinearGradientResult = null;
                      }
                      cResult[52] = renderLinearGradient;
                      cResult[53] = renderLinearGradientResult;
                      tmp35 = renderLinearGradientResult;
                    } else {
                      tmp35 = cResult[53];
                    }
                    if (cResult[54] !== renderIcon) {
                      let renderIconResult1;
                      if (renderIcon != null) {
                        renderIconResult1 = renderIcon();
                      }
                      if (renderIconResult1 == null) {
                        renderIconResult1 = null;
                      }
                      cResult[54] = renderIcon;
                      cResult[55] = renderIconResult1;
                      tmp37 = renderIconResult1;
                    } else {
                      tmp37 = cResult[55];
                    }
                    if (cResult[56] !== renderRightIcon) {
                      let renderRightIconResult1;
                      if (renderRightIcon != null) {
                        renderRightIconResult1 = renderRightIcon();
                      }
                      if (renderRightIconResult1 == null) {
                        renderRightIconResult1 = null;
                      }
                      cResult[56] = renderRightIcon;
                      cResult[57] = renderRightIconResult1;
                      tmp39 = renderRightIconResult1;
                    } else {
                      tmp39 = cResult[57];
                    }
                    if (cResult[58] !== renderShine) {
                      let renderShineResult;
                      if (renderShine != null) {
                        renderShineResult = renderShine();
                      }
                      if (renderShineResult == null) {
                        renderShineResult = null;
                      }
                      cResult[58] = renderShine;
                      cResult[59] = renderShineResult;
                      tmp41 = renderShineResult;
                    } else {
                      tmp41 = cResult[59];
                    }
                    if (cResult[60] === accessibilityActions) {
                      if (cResult[61] === accessibilityHint) {
                        if (cResult[62] === accessibilityLabel) {
                          if (cResult[63] === str) {
                            if (cResult[64] === accessibilityValue) {
                              if (cResult[65] === tmp29) {
                                if (cResult[66] === tmp24) {
                                  if (cResult[67] === onAccessibilityAction) {
                                    if (cResult[68] === onLongPress) {
                                      if (cResult[69] === onPress) {
                                        if (cResult[70] === onPressIn) {
                                          if (cResult[71] === onPressOut) {
                                            if (cResult[72] === onTouchEnd) {
                                              if (cResult[73] === onTouchStart) {
                                                if (cResult[74] === tmp27) {
                                                  if (cResult[75] === tmp15) {
                                                    if (cResult[76] === (tmp8 || undefined !== loading && loading)) {
                                                      if (cResult[77] === tmp35) {
                                                        if (cResult[78] === tmp37) {
                                                          if (cResult[79] === tmp39) {
                                                            if (cResult[80] === tmp41) {
                                                              let tmp43;
                                                              if (cResult[81] === testID) {
                                                                tmp43 = cResult[82];
                                                              }
                                                              return tmp43;
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
                    }
                    const obj7 = { accessibilityRole: str, accessibilityState: tmp24, accessibilityLabel, accessibilityHint, accessibilityActions, onAccessibilityAction, accessibilityValue, onPress, onPressIn, onPressOut, onTouchStart, onTouchEnd, onLongPress, disabled: tmp8 || undefined !== loading && loading, android_ripple: tmp29, testID, style: tmp27, children: items };
                    items = [tmp35, tmp37, tmp15, tmp39, tmp41];
                    const tmp46 = closure_10(shrink, obj7);
                    cResult[60] = accessibilityActions;
                    cResult[61] = accessibilityHint;
                    cResult[62] = accessibilityLabel;
                    cResult[63] = str;
                    cResult[64] = accessibilityValue;
                    cResult[65] = tmp29;
                    cResult[66] = tmp24;
                    cResult[67] = onAccessibilityAction;
                    cResult[68] = onLongPress;
                    cResult[69] = onPress;
                    cResult[70] = onPressIn;
                    cResult[71] = onPressOut;
                    cResult[72] = onTouchEnd;
                    cResult[73] = onTouchStart;
                    cResult[74] = tmp27;
                    cResult[75] = tmp15;
                    cResult[76] = tmp8 || undefined !== loading && loading;
                    cResult[77] = tmp35;
                    cResult[78] = tmp37;
                    cResult[79] = tmp39;
                    cResult[80] = tmp41;
                    cResult[81] = testID;
                    cResult[82] = tmp46;
                    tmp43 = tmp46;
                  }
                  const obj8 = { foreground: foregroundRipple, cornerRadius };
                  const tmp31 = getThemedRippleConfig(obj8);
                  cResult[23] = foregroundRipple;
                  cResult[24] = cornerRadius;
                  cResult[25] = tmp31;
                  tmp29 = tmp31;
                }
              }
            }
          }
        }
      }
    }
    function _e(pressed) {
      const obj = { color, size, disabled, look, shrink, pressed: pressed.pressed, darkenOnPress, style };
      return getButtonStyles(obj, closure_7);
    }
    cResult[14] = color;
    cResult[15] = darkenOnPress;
    cResult[16] = tmp8;
    cResult[17] = look;
    cResult[18] = undefined !== shrink && shrink;
    cResult[19] = size;
    cResult[20] = style;
    cResult[21] = tmp12;
    cResult[22] = _e;
    tmp27 = _e;
  }
  const obj9 = {};
  const merged = Object.assign(accessibilityState);
  const merged1 = Object.assign(tmp23);
  cResult[11] = accessibilityState;
  cResult[12] = tmp23;
  cResult[13] = obj9;
  tmp24 = obj9;
}) : ((look) => {
  let Button;
  let accessibilityActions;
  let accessibilityHint;
  let accessibilityLabel;
  let accessibilityState;
  let accessibilityValue;
  let closure_15;
  let darkenOnPress;
  let foregroundRipple;
  let items4;
  let obj3;
  let onAccessibilityAction;
  let onLongPress;
  let onPress;
  let onPressIn;
  let onPressOut;
  let onTouchEnd;
  let onTouchStart;
  let renderIcon;
  let renderIconResult;
  let renderLinearGradient;
  let renderRightIcon;
  let renderShine;
  let str2;
  let str4;
  let str5;
  let testID;
  let tmp18;
  let FILLED = look.look;
  if (FILLED === undefined) {
    FILLED = darkenOnPress.FILLED;
  }
  let BRAND = look.color;
  if (BRAND === undefined) {
    BRAND = foregroundRipple.BRAND;
  }
  let MEDIUM = look.size;
  if (MEDIUM === undefined) {
    MEDIUM = constants.MEDIUM;
  }
  const text = look.text;
  react = text;
  let flag = look.shrink;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = look.disabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = look.loading;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let WHITE = look.loadingColorDark;
  if (WHITE === undefined) {
    WHITE = BRAND(MEDIUM[6]).unsafe_rawColors.WHITE;
  }
  let PRIMARY_500 = look.loadingColorLight;
  if (PRIMARY_500 === undefined) {
    PRIMARY_500 = BRAND(MEDIUM[6]).unsafe_rawColors.PRIMARY_500;
  }
  const textStyle = look.textStyle;
  const style = look.style;
  let str = look.accessibilityRole;
  if (str === undefined) {
    str = "button";
  }
  ({ accessibilityLabel, accessibilityHint, accessibilityState } = look);
  ({ accessibilityActions, onAccessibilityAction, darkenOnPress } = look);
  ({ renderIcon, renderRightIcon, renderShine, renderLinearGradient, onPress, onPressIn, onPressOut, onTouchStart, foregroundRipple } = look);
  const cornerRadius = look.cornerRadius;
  ({ accessibilityValue, testID, onTouchEnd, onLongPress } = look);
  const tmp8 = accessibilityState();
  constants = tmp8;
  let obj = FILLED(MEDIUM[14]);
  const theme = obj.useThemeContext().theme;
  const items = [BRAND, flag2, flag3, FILLED, MEDIUM, text, textStyle, WHITE, PRIMARY_500, theme];
  const items1 = [flag2, accessibilityState];
  const memo = react.useMemo(() => {
    let obj2;
    let tmpResult;
    if (flag3) {
      const obj3 = { color: obj2.isThemeDark(theme) ? WHITE : PRIMARY_500 };
      obj2 = shared;
      tmpResult = metroImportAll(React3, obj3);
    } else {
      const obj = { color: BRAND, look: FILLED, size: MEDIUM, disabled: flag2, style: textStyle, children: react };
      tmpResult = metroImportAll(closure_18, obj);
    }
    return tmpResult;
  }, items);
  const items2 = [BRAND, darkenOnPress, MEDIUM, FILLED, flag2, flag, style, tmp8];
  const memo1 = react.useMemo(() => {
    const obj = { disabled: flag2 };
    const merged = Object.assign(accessibilityState);
    return obj;
  }, items1);
  const items3 = [foregroundRipple, cornerRadius];
  const callback = react.useCallback((pressed) => {
    const obj = { color: BRAND, size: MEDIUM, disabled: flag2, look: FILLED, shrink: flag, pressed: pressed.pressed, darkenOnPress, style };
    return getButtonStyles(obj, closure_15);
  }, items2);
  const memo2 = react.useMemo(() => {
    let num;
    const obj = { foreground: foregroundRipple, cornerRadius: num };
    num = cornerRadius;
    if (cornerRadius == null) {
      num = 3;
    }
    return getThemedRippleConfig(obj);
  }, items3);
  const tmp10 = MEDIUM;
  const tmp9 = FILLED;
  if (react.useContext(FILLED(MEDIUM[15]).RedesignCompatContext)) {
    let tmp16Result;
    if (FILLED !== darkenOnPress.LINK) {
      let obj2 = { style, children: PRIMARY_500(Button, obj3) };
      obj3 = { text, variant: str2, size: str4, accessibilityLabel, accessibilityHint, accessibilityActions, onAccessibilityAction, onPress, onPressIn, onPressOut, onTouchStart, disabled: flag2, icon: renderIconResult, iconPosition: str5, grow: !flag };
      str2 = "active";
      Button = tmp9(tmp10[16]).Button;
      const tmp25 = flag3;
      if (foregroundRipple.GREEN !== BRAND) {
        str2 = "destructive";
        if (foregroundRipple.RED !== BRAND) {
          str2 = "secondary";
          if (foregroundRipple.GREY !== BRAND) {
            str2 = "secondary";
            if (foregroundRipple.LIGHTGREY !== BRAND) {
              str2 = "secondary";
              if (foregroundRipple.TRANSPARENT !== BRAND) {
                str2 = "primary";
                if (foregroundRipple.WHITE === BRAND) {
                  str2 = "primary-overlay";
                }
              }
            }
          }
        }
      }
      str4 = "lg";
      if (constants.LARGE !== MEDIUM) {
        str4 = "md";
        if (constants.MEDIUM !== MEDIUM) {
          if (constants.SMALL === MEDIUM) {
            str4 = "sm";
          }
        }
      }
      if (!flag2) {
        flag2 = flag3;
      }
      renderIconResult = undefined;
      if (renderIcon != null) {
        renderIconResult = renderIcon();
      }
      if (renderIconResult == null) {
        let renderRightIconResult;
        if (renderRightIcon != null) {
          renderRightIconResult = renderRightIcon();
        }
        renderIconResult = renderRightIconResult;
      }
      if (renderIconResult == null) {
        renderIconResult = null;
      }
      str5 = "start";
      if (null == renderIcon) {
        let str6;
        if (null != renderRightIcon) {
          str6 = "end";
        }
        str5 = str6;
      }
      tmp16Result = tmp24(tmp25, obj2);
    }
    return tmp16Result;
  }
  const obj4 = { accessibilityRole: str, accessibilityState: memo1, accessibilityLabel, accessibilityHint, accessibilityActions, onAccessibilityAction, accessibilityValue, onPress, onPressIn, onPressOut, onTouchStart, onTouchEnd, onLongPress, disabled: tmp18, android_ripple: memo2, testID, style: callback, children: items4 };
  tmp18 = flag2;
  const tmp16 = style;
  if (!flag2) {
    tmp18 = flag3;
  }
  let renderLinearGradientResult;
  if (renderLinearGradient != null) {
    renderLinearGradientResult = renderLinearGradient();
  }
  if (renderLinearGradientResult == null) {
    renderLinearGradientResult = null;
  }
  items4 = [renderLinearGradientResult, , , , ];
  let renderIconResult1;
  if (renderIcon != null) {
    renderIconResult1 = renderIcon();
  }
  if (renderIconResult1 == null) {
    renderIconResult1 = null;
  }
  items4[1] = renderIconResult1;
  items4[2] = memo;
  let renderRightIconResult1;
  if (renderRightIcon != null) {
    renderRightIconResult1 = renderRightIcon();
  }
  if (renderRightIconResult1 == null) {
    renderRightIconResult1 = null;
  }
  items4[3] = renderRightIconResult1;
  let renderShineResult;
  if (renderShine != null) {
    renderShineResult = renderShine();
  }
  if (renderShineResult == null) {
    renderShineResult = null;
  }
  items4[4] = renderShineResult;
  tmp16Result = tmp16(tmp17, obj4);
});
tmp7.Looks = obj41;
tmp7.Colors = obj42;
tmp7.Sizes = obj43;
function getRedesignVariant(color) {
  if (obj42.GREEN === color) {
    return "active";
  } else if (obj42.RED === color) {
    return "destructive";
  } else {
    if (obj42.GREY !== color) {
      if (obj42.LIGHTGREY !== color) {
        if (obj42.TRANSPARENT !== color) {
          if (obj42.WHITE === color) {
            return "primary-overlay";
          } else {
            return "primary";
          }
        }
      }
    }
    return "secondary";
  }
}
function getRedesignSize(arg0) {
  if (obj43.LARGE === arg0) {
    return "lg";
  } else if (obj43.MEDIUM === arg0) {
    return "md";
  } else {
    return "sm";
  }
}
let size = size_mod;
const result = size.fileFinishedImporting("design/void/Button/native/Button.tsx");

export default tmp7;
export const BUTTON_CORNER_RADIUS = 3;
export const useButtonStyles = styles;
export const ButtonLooks = obj41;
export const ButtonColors = obj42;
export const ButtonSizes = obj43;
export { getButtonStyles };
export const ButtonText = tmp6;
export { getRedesignVariant };
export { getRedesignSize };