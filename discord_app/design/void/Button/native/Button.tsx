// === Module 1191: Button/Button ===

// Module 1191 (Button/Button)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import shared from "shared" /* 4729 */;
import LegacyText_LegacyTextDefault from "LegacyText/LegacyText" /* 8912 */;
import StylesheetUtils from "StylesheetUtils" /* 13897 */;
import noop from "module_19" /* 19 */;

require = fn;
function getTextStyles(disabled, text) {
  let flag = disabled.disabled;
  ({ color, look, size } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  const items = [text.text, { [closure_1_13.BRAND]: text.textBrand, [closure_1_13.RED]: text.textRed, [closure_1_13.GREEN]: text.textGreen, [closure_1_13.PRIMARY]: text.textPrimary, [closure_1_13.TRANSPARENT]: text.textTransparent, [closure_1_13.GREY]: text.textGrey, [closure_1_13.LIGHTGREY]: text.textLightgrey, [closure_1_13.WHITE]: text.textWhite, [closure_1_13.LINK]: text.textLink }[color], { [closure_1_12.FILLED]: text.textFilled, [closure_1_12.LINK]: text.textLink, [closure_1_12.OUTLINED]: text.textOutlined }[look], flag ? text.textDisabled : text.textDefault, { [closure_1_15.XSMALL]: text.textXsmall, [closure_1_15.SMALL]: text.textSmall, [closure_1_15.MEDIUM]: text.textMedium, [closure_1_15.LARGE]: text.textLarge }[size]];
  return items;
}
function getButtonStyles(shrink, button) {
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
  if (flag2) {
    combined = color;
    if (!obj.isAndroid()) {
      const _HermesInternal = HermesInternal;
      combined = "" + color + "Dark";
    }
    obj = PlatformUtils;
  }
  const items = [button.button, , , , , , ];
  let buttonShrink = null;
  if (flag) {
    buttonShrink = button.buttonShrink;
  }
  items[1] = buttonShrink;
  items[2] = StylesheetUtils.getClass(button, "button", combined, disabled ? constants.DISABLED : constants.DEFAULT);
  const tmp2 = disabled ? constants.DISABLED : constants.DEFAULT;
  items[3] = StylesheetUtils.getClass(button, "button", size);
  items[4] = StylesheetUtils.getClass(button, "button", look);
  let faded;
  if (!flag3) {
    if (!tmp8Result.isAndroid()) {
      if (flag2) {
        faded = button.faded;
      }
    }
    tmp8Result = PlatformUtils;
  }
  items[5] = faded;
  items[6] = shrink.style;
  return items;
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
let getThemedRippleConfig = fn(1192).getThemedRippleConfig;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { button: { flexDirection: "row", flexGrow: 1, justifyContent: "center", alignItems: "center", alignSelf: "stretch", borderRadius: 3 }, buttonShrink: { flexGrow: 0, alignSelf: "flex-start", paddingHorizontal: 10 }, buttonBrandDefault: { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND }, buttonBrandDarkDefault: null, buttonRedDefault: null, buttonRedDarkDefault: null, buttonGreenDefault: null, buttonGreenDarkDefault: null, buttonGreyDarkDefault: null, buttonLightgreyDefault: null, buttonLightgreyDarkDefault: null, buttonBrandDisabled: null, buttonBrandDarkDisabled: null, buttonRedDisabled: null, buttonRedDarkDisabled: null, buttonGreenDisabled: null, buttonGreenDarkDisabled: null, buttonGreyDarkDisabled: null, buttonLightgreyDisabled: null, buttonLightgreyDarkDisabled: null, buttonTransparentDefault: null, buttonTransparentDarkDefault: null, buttonTransparentDisabled: null, buttonTransparentDarkDisabled: null, buttonWhiteDefault: null, buttonWhiteDisabled: null, buttonFilled: null, buttonLink: null, buttonLinkDefault: null, buttonOutlined: null, buttonXsmall: null, buttonSmall: null, buttonMedium: null, buttonLarge: null, text: null, textXsmall: null, textSmall: null, textMedium: null, textLarge: null, textDisabled: null, textDefault: null, textBrand: null, textRed: null, textGreen: null, textGrey: null, textLightgrey: null, textWhite: null, textFilled: null, textOutlined: null, faded: null, buttonWhiteDarkDefault: null, textLink: null, buttonPrimaryDefault: null, buttonPrimaryDarkDefault: null, buttonGreyDefault: null, textPrimary: null, textTransparent: null, buttonPrimaryDisabled: null, buttonPrimaryDarkDisabled: null, buttonGreyDisabled: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.buttonBrandDarkDefault = { backgroundColor: nativeDefault.unsafe_rawColors.BRAND_600 };
let obj4 = { backgroundColor: nativeDefault.unsafe_rawColors.BRAND_600 };
obj2.buttonRedDefault = { backgroundColor: nativeDefault.unsafe_rawColors.RED_400 };
let obj5 = { backgroundColor: nativeDefault.unsafe_rawColors.RED_400 };
obj2.buttonRedDarkDefault = { backgroundColor: nativeDefault.unsafe_rawColors.RED_500 };
let obj6 = { backgroundColor: nativeDefault.unsafe_rawColors.RED_500 };
obj2.buttonGreenDefault = { backgroundColor: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT };
let obj7 = { backgroundColor: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT };
obj2.buttonGreenDarkDefault = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_500 };
let obj8 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_500 };
obj2.buttonGreyDarkDefault = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500 };
let obj9 = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500 };
obj2.buttonLightgreyDefault = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500 };
const obj10 = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500 };
obj2.buttonLightgreyDarkDefault = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500 };
const obj12 = { backgroundColor: null };
let ColorUtils = fn(4727);
obj12.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BRAND_500, 0.5);
obj2.buttonBrandDisabled = obj12;
const obj14 = { backgroundColor: null };
ColorUtils = fn(4727);
obj14.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BRAND_600, 0.5);
obj2.buttonBrandDarkDisabled = obj14;
const obj16 = { backgroundColor: null };
ColorUtils = fn(4727);
obj16.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.RED_400, 0.5);
obj2.buttonRedDisabled = obj16;
const obj18 = { backgroundColor: null };
ColorUtils = fn(4727);
obj18.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.RED_500, 0.5);
obj2.buttonRedDarkDisabled = obj18;
const obj20 = { backgroundColor: null };
ColorUtils = fn(4727);
obj20.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.GREEN_360, 0.5);
obj2.buttonGreenDisabled = obj20;
const obj22 = { backgroundColor: null };
ColorUtils = fn(4727);
obj22.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.GREEN_500, 0.5);
obj2.buttonGreenDarkDisabled = obj22;
const obj24 = { backgroundColor: null };
ColorUtils = fn(4727);
obj24.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_500, 0.5);
obj2.buttonGreyDarkDisabled = obj24;
const obj26 = { backgroundColor: null };
ColorUtils = fn(4727);
obj26.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_500, 0.5);
obj2.buttonLightgreyDisabled = obj26;
const obj28 = { backgroundColor: null };
ColorUtils = fn(4727);
obj28.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_500, 0.5);
obj2.buttonLightgreyDarkDisabled = obj28;
obj2.buttonTransparentDefault = { backgroundColor: "transparent" };
obj2.buttonTransparentDarkDefault = { backgroundColor: "transparent" };
obj2.buttonTransparentDisabled = { backgroundColor: "transparent" };
obj2.buttonTransparentDarkDisabled = { backgroundColor: "transparent" };
const obj11 = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500 };
obj2.buttonWhiteDefault = { backgroundColor: nativeDefault.colors.WHITE };
const obj31 = { backgroundColor: null };
ColorUtils = fn(4727);
obj31.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.5);
obj2.buttonWhiteDisabled = obj31;
obj2.buttonFilled = {};
obj2.buttonLink = {};
obj2.buttonLinkDefault = {};
const obj30 = { backgroundColor: nativeDefault.colors.WHITE };
obj2.buttonOutlined = { backgroundColor: "transparent", borderWidth: 1, borderStyle: "solid", borderColor: fn(5620).BUTTON_OUTLINED_BORDER };
obj2.buttonXsmall = { minHeight: 24 };
obj2.buttonSmall = { minHeight: 32 };
obj2.buttonMedium = { minHeight: 40 };
obj2.buttonLarge = { minHeight: 46 };
const obj33 = { backgroundColor: "transparent", borderWidth: 1, borderStyle: "solid", borderColor: fn(5620).BUTTON_OUTLINED_BORDER };
obj2.text = { color: nativeDefault.colors.WHITE, fontFamily: fn(1085).Fonts.PRIMARY_SEMIBOLD, flexShrink: 1 };
obj2.textXsmall = { fontSize: 12 };
obj2.textSmall = { fontSize: 14 };
obj2.textMedium = { fontSize: 14 };
obj2.textLarge = { fontSize: 20 };
obj2.textDisabled = { opacity: 0.6 };
obj2.textDefault = { opacity: 1 };
const obj34 = { color: nativeDefault.colors.WHITE, fontFamily: fn(1085).Fonts.PRIMARY_SEMIBOLD, flexShrink: 1 };
obj2.textBrand = { color: nativeDefault.colors.WHITE };
const obj35 = { color: nativeDefault.colors.WHITE };
obj2.textRed = { color: nativeDefault.colors.WHITE };
const obj36 = { color: nativeDefault.colors.WHITE };
obj2.textGreen = { color: nativeDefault.colors.WHITE };
const obj37 = { color: nativeDefault.colors.WHITE };
obj2.textGrey = { color: nativeDefault.colors.WHITE };
const obj38 = { color: nativeDefault.colors.WHITE };
obj2.textLightgrey = { color: nativeDefault.colors.WHITE };
const obj39 = { color: nativeDefault.colors.WHITE };
obj2.textWhite = { color: nativeDefault.colors.WHITE };
obj2.textFilled = {};
const obj40 = { color: nativeDefault.colors.WHITE };
obj2.textOutlined = { color: fn(5620).DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
obj2.faded = { opacity: 0.5 };
const obj41 = { color: fn(5620).DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
obj2.buttonWhiteDarkDefault = { backgroundColor: nativeDefault.colors.WHITE };
const obj42 = { backgroundColor: nativeDefault.colors.WHITE };
obj2.textLink = { color: nativeDefault.colors.TEXT_LINK };
const obj43 = { color: nativeDefault.colors.TEXT_LINK };
obj2.buttonPrimaryDefault = { backgroundColor: fn(5620).DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
const obj44 = { backgroundColor: fn(5620).DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
obj2.buttonPrimaryDarkDefault = { backgroundColor: fn(5620).DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
const obj45 = { backgroundColor: fn(5620).DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
obj2.buttonGreyDefault = { backgroundColor: fn(5620).DARK_PRIMARY_500_LIGHT_PRIMARY_430 };
const obj46 = { backgroundColor: fn(5620).DARK_PRIMARY_500_LIGHT_PRIMARY_430 };
obj2.textPrimary = { color: fn(5620).DARK_PRIMARY_500_LIGHT_PRIMARY_100 };
const obj47 = { color: fn(5620).DARK_PRIMARY_500_LIGHT_PRIMARY_100 };
obj2.textTransparent = { color: fn(5620).DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
const obj48 = { color: fn(5620).DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
obj2.buttonPrimaryDisabled = { backgroundColor: fn(5620).BUTTON_PRIMARY_DISABLED_BACKGROUND };
const obj49 = { backgroundColor: fn(5620).BUTTON_PRIMARY_DISABLED_BACKGROUND };
obj2.buttonPrimaryDarkDisabled = { backgroundColor: fn(5620).BUTTON_PRIMARY_DISABLED_BACKGROUND };
const obj50 = { backgroundColor: fn(5620).BUTTON_PRIMARY_DISABLED_BACKGROUND };
obj2.buttonGreyDisabled = { backgroundColor: fn(5620).BUTTON_GREY_DISABLED_BACKGROUND };
const styles = createStyles.createStyles(obj2);
const obj52 = { FILLED: "filled", LINK: "link", OUTLINED: "outlined" };
const obj53 = { BRAND: "brand", RED: "red", GREEN: "green", PRIMARY: "primary", TRANSPARENT: "transparent", GREY: "grey", LIGHTGREY: "lightgrey", WHITE: "white", LINK: "link" };
const constants = { DEFAULT: "Default", DISABLED: "Disabled" };
let obj54 = { XSMALL: "xsmall", SMALL: "small", MEDIUM: "medium", LARGE: "large" };
let ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp = dependencyMap;
  const cResult = c.c(22);
  ({ children, color, look, size, disabled, style } = arg0);
  const tmp3 = styles();
  if (typeof children !== "function") {
    if (cResult[0] === color) {
      if (cResult[1] === disabled) {
        if (cResult[2] === look) {
          if (cResult[3] === size) {
            if (cResult[4] === tmp3) {
              let tmp11 = cResult[5];
            }
            if (cResult[6] === style) {
              if (cResult[7] === tmp11) {
                let tmp14 = cResult[8];
              }
              if (cResult[9] === children) {
              }
              const obj2 = { maxFontSizeMultiplier: 2, numberOfLines: 1, style: tmp14, children };
              tmp = closure_1_8(LegacyText_LegacyTextDefault, obj2);
              cResult[9] = children;
              cResult[10] = tmp14;
              cResult[11] = tmp;
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
                if (cResult[18] === tmp3) {
                  let tmp4 = cResult[19];
                }
                if (cResult[20] !== tmp4) {
                  const obj4 = { children: tmp4 };
                  const tmp10 = closure_1_8(options, obj4);
                  cResult[20] = tmp4;
                  cResult[21] = tmp10;
                  let tmp7 = tmp10;
                } else {
                  tmp7 = cResult[21];
                }
                return tmp7;
              }
            }
          }
        }
      }
    }
    const obj5 = { style: null };
    const obj6 = { color, look, size, disabled };
    const items1 = [getTextStyles(obj6, tmp3), style];
    obj5.style = items1;
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
}) : ((arg0) => {
  ({ children, color, look, size, disabled, style } = arg0);
  const tmp = styles();
  if (typeof children !== "function") {
    const obj = { maxFontSizeMultiplier: 2, numberOfLines: 1, style: null, children: null };
    const obj2 = { color, look, size, disabled };
    const items = [getTextStyles(obj2, tmp), style];
    obj.style = items;
    obj.children = children;
    let tmp7 = closure_1_8(LegacyText_LegacyTextDefault, obj);
  } else {
    const obj3 = { children: null };
    const obj4 = { style: null };
    const obj5 = { color, look, size, disabled };
    const items1 = [getTextStyles(obj5, tmp), style];
    obj4.style = items1;
    obj3.children = children(obj4);
    tmp7 = closure_1_8(options, obj3);
  }
  return tmp7;
});
let closure_18 = tmp5;
ReactCompilerGating = fn(558);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = style(look[12]).c(83);
  ({ look, color, size, text, shrink, disabled, loading, loadingColorDark, loadingColorLight, textStyle, style } = arg0);
  ({ accessibilityRole, accessibilityLabel, accessibilityHint, accessibilityState, accessibilityActions, onAccessibilityAction, accessibilityValue, darkenOnPress } = arg0);
  ({ renderIcon, renderRightIcon, renderShine, renderLinearGradient, testID, onPress, onPressIn, onPressOut, onTouchStart, onTouchEnd, onLongPress, foregroundRipple, cornerRadius } = arg0);
  if (undefined === look) {
    look = obj52.FILLED;
  }
  if (undefined === color) {
    color = obj53.BRAND;
  }
  if (undefined === size) {
    size = obj54.MEDIUM;
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
    if (tmpResult2.isThemeDark(tmp14)) {
      loadingColorLight = loadingColorDark;
    }
    if (cResult[0] !== loadingColorLight) {
      const obj2 = { color: loadingColorLight };
      const tmp22 = closure_8(size, obj2);
      cResult[0] = loadingColorLight;
      cResult[1] = tmp22;
    }
    tmpResult2 = style(tmp2[14]);
  } else {
    if (cResult[2] === color) {
      if (cResult[3] === tmp8) {
        if (cResult[4] === look) {
          if (cResult[5] === size) {
            if (cResult[6] === text) {
              if (cResult[7] === textStyle) {
                let tmp15 = cResult[8];
              }
              if (cResult[9] !== tmp8) {
                const obj3 = { disabled: tmp8 };
                cResult[9] = tmp8;
                cResult[10] = obj3;
                let tmp24 = obj3;
              } else {
                tmp24 = cResult[10];
              }
              if (cResult[11] === accessibilityState) {
                if (cResult[12] === tmp24) {
                  let tmp25 = cResult[13];
                }
                if (cResult[14] === color) {
                  if (cResult[15] === darkenOnPress) {
                    if (cResult[16] === tmp8) {
                      if (cResult[17] === look) {
                        if (cResult[18] === tmp7) {
                          if (cResult[19] === size) {
                            if (cResult[20] === style) {
                              if (cResult[21] === tmp12) {
                                let tmp32 = cResult[22];
                              }
                              if (cornerRadius == null) {
                                cornerRadius = 3;
                              }
                              if (cResult[23] === foregroundRipple) {
                                if (cResult[24] === cornerRadius) {
                                  let tmp34 = cResult[25];
                                }
                                if (color.useContext(style(tmp2[15]).RedesignCompatContext)) {
                                  if (look !== obj52.LINK) {
                                    if (cResult[26] !== color) {
                                      let str2 = "active";
                                      if (obj53.GREEN !== color) {
                                        str2 = "destructive";
                                        if (obj53.RED !== color) {
                                          str2 = "secondary";
                                          if (obj53.GREY !== color) {
                                            str2 = "secondary";
                                            if (obj53.LIGHTGREY !== color) {
                                              str2 = "secondary";
                                              if (obj53.TRANSPARENT !== color) {
                                                str2 = "primary";
                                                if (obj53.WHITE === color) {
                                                  str2 = "primary-overlay";
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                      cResult[26] = color;
                                      cResult[27] = str2;
                                      let tmp52 = str2;
                                    } else {
                                      tmp52 = cResult[27];
                                    }
                                    if (cResult[28] !== size) {
                                      let str4 = "lg";
                                      if (obj54.LARGE !== size) {
                                        str4 = "md";
                                        if (obj54.MEDIUM !== size) {
                                          if (obj54.SMALL === size) {
                                            str4 = "sm";
                                          }
                                        }
                                      }
                                      cResult[28] = size;
                                      cResult[29] = str4;
                                      let tmp54 = str4;
                                    } else {
                                      tmp54 = cResult[29];
                                    }
                                    if (!tmp8) {
                                      tmp8 = tmp9;
                                    }
                                    if (cResult[30] === renderIcon) {
                                      if (cResult[31] === renderRightIcon) {
                                        let tmp56 = cResult[32];
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
                                                        if (cResult[42] === tmp52) {
                                                          if (cResult[43] === tmp54) {
                                                            if (cResult[44] === tmp8) {
                                                              if (cResult[45] === tmp56) {
                                                                if (cResult[46] === str5) {
                                                                  if (cResult[47] === tmp59) {
                                                                    let tmp60 = cResult[48];
                                                                  }
                                                                  if (cResult[49] === style) {
                                                                    if (cResult[50] === tmp60) {
                                                                      let tmp63 = cResult[51];
                                                                    }
                                                                    return tmp63;
                                                                  }
                                                                  const obj4 = { style, children: tmp60 };
                                                                  const tmp66 = closure_8(disabled, obj4);
                                                                  cResult[49] = style;
                                                                  cResult[50] = tmp60;
                                                                  cResult[51] = tmp66;
                                                                  tmp63 = tmp66;
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
                                      const obj5 = { text, variant: tmp52, size: tmp54, accessibilityLabel, accessibilityHint, accessibilityActions, onAccessibilityAction, onPress, onPressIn, onPressOut, onTouchStart, disabled: tmp8, icon: tmp56, iconPosition: str5, grow: !tmp7 };
                                      const tmp62 = closure_8(style(tmp2[16]).Button, obj5);
                                      cResult[33] = accessibilityActions;
                                      cResult[34] = accessibilityHint;
                                      cResult[35] = accessibilityLabel;
                                      cResult[36] = onAccessibilityAction;
                                      cResult[37] = onPress;
                                      cResult[38] = onPressIn;
                                      cResult[39] = onPressOut;
                                      cResult[40] = onTouchStart;
                                      cResult[41] = text;
                                      cResult[42] = tmp52;
                                      cResult[43] = tmp54;
                                      cResult[44] = tmp8;
                                      cResult[45] = tmp56;
                                      cResult[46] = str5;
                                      cResult[47] = !tmp7;
                                      cResult[48] = tmp62;
                                      tmp60 = tmp62;
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
                                    tmp56 = renderIconResult;
                                  }
                                }
                                let tmp39 = tmp8;
                                if (!tmp8) {
                                  tmp39 = tmp9;
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
                                  let tmp40 = renderLinearGradientResult;
                                } else {
                                  tmp40 = cResult[53];
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
                                  let tmp42 = renderIconResult1;
                                } else {
                                  tmp42 = cResult[55];
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
                                  let tmp44 = renderRightIconResult1;
                                } else {
                                  tmp44 = cResult[57];
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
                                  let tmp46 = renderShineResult;
                                } else {
                                  tmp46 = cResult[59];
                                }
                                if (cResult[60] === accessibilityActions) {
                                  if (cResult[61] === accessibilityHint) {
                                    if (cResult[62] === accessibilityLabel) {
                                      if (cResult[63] === str) {
                                        if (cResult[64] === accessibilityValue) {
                                          if (cResult[65] === tmp34) {
                                            if (cResult[66] === tmp25) {
                                              if (cResult[67] === onAccessibilityAction) {
                                                if (cResult[68] === onLongPress) {
                                                  if (cResult[69] === onPress) {
                                                    if (cResult[70] === onPressIn) {
                                                      if (cResult[71] === onPressOut) {
                                                        if (cResult[72] === onTouchEnd) {
                                                          if (cResult[73] === onTouchStart) {
                                                            if (cResult[74] === tmp32) {
                                                              if (cResult[75] === tmp15) {
                                                                if (cResult[76] === tmp39) {
                                                                  if (cResult[77] === tmp40) {
                                                                    if (cResult[78] === tmp42) {
                                                                      if (cResult[79] === tmp44) {
                                                                        if (cResult[80] === tmp46) {
                                                                          if (cResult[81] === testID) {
                                                                            let tmp48 = cResult[82];
                                                                          }
                                                                          return tmp48;
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
                                const obj6 = { accessibilityRole: str, accessibilityState: tmp25, accessibilityLabel, accessibilityHint, accessibilityActions, onAccessibilityAction, accessibilityValue, onPress, onPressIn, onPressOut, onTouchStart, onTouchEnd, onLongPress, disabled: tmp39, android_ripple: tmp34, testID, style: tmp32, children: null };
                                const items = [tmp40, tmp42, tmp15, tmp44, tmp46];
                                obj6.children = items;
                                const tmp51 = closure_10(shrink, obj6);
                                cResult[60] = accessibilityActions;
                                cResult[61] = accessibilityHint;
                                cResult[62] = accessibilityLabel;
                                cResult[63] = str;
                                cResult[64] = accessibilityValue;
                                cResult[65] = tmp34;
                                cResult[66] = tmp25;
                                cResult[67] = onAccessibilityAction;
                                cResult[68] = onLongPress;
                                cResult[69] = onPress;
                                cResult[70] = onPressIn;
                                cResult[71] = onPressOut;
                                cResult[72] = onTouchEnd;
                                cResult[73] = onTouchStart;
                                cResult[74] = tmp32;
                                cResult[75] = tmp15;
                                cResult[76] = tmp39;
                                cResult[77] = tmp40;
                                cResult[78] = tmp42;
                                cResult[79] = tmp44;
                                cResult[80] = tmp46;
                                cResult[81] = testID;
                                cResult[82] = tmp51;
                                tmp48 = tmp51;
                              }
                              const obj7 = { foreground: foregroundRipple, cornerRadius };
                              const tmp36 = getThemedRippleConfig(obj7);
                              cResult[23] = foregroundRipple;
                              cResult[24] = cornerRadius;
                              cResult[25] = tmp36;
                              tmp34 = tmp36;
                            }
                          }
                        }
                      }
                    }
                  }
                }
                function _e(pressed) {
                  return getButtonStyles({ color, size, disabled, look, shrink, pressed: pressed.pressed, darkenOnPress, style }, closure_7);
                }
                cResult[14] = color;
                cResult[15] = darkenOnPress;
                cResult[16] = tmp8;
                cResult[17] = look;
                cResult[18] = tmp7;
                cResult[19] = size;
                cResult[20] = style;
                cResult[21] = tmp12;
                cResult[22] = _e;
                tmp32 = _e;
              }
              const obj8 = {};
              const merged = Object.assign(accessibilityState);
              const merged1 = Object.assign(tmp24);
              cResult[11] = accessibilityState;
              cResult[12] = tmp24;
              cResult[13] = obj8;
              tmp25 = obj8;
            }
          }
        }
      }
    }
    const obj9 = { color, look, size, disabled: tmp8, style: textStyle, children: text };
    const tmp18 = closure_8(closure_18, obj9);
    cResult[2] = color;
    cResult[3] = tmp8;
    cResult[4] = look;
    cResult[5] = size;
    cResult[6] = text;
    cResult[7] = textStyle;
    cResult[8] = tmp18;
    tmp15 = tmp18;
  }
  const obj = style(look[12]);
}) : ((look) => {
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
    MEDIUM = obj54.MEDIUM;
  }
  const text = look.text;
  noop = text;
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
  obj54 = tmp8;
  const theme = FILLED(MEDIUM[14]).useThemeContext().theme;
  const items = [BRAND, flag2, flag3, FILLED, MEDIUM, text, textStyle, WHITE, PRIMARY_500, theme];
  const items1 = [flag2, accessibilityState];
  const memo = noop.useMemo(() => {
    if (flag3) {
      const obj3 = { color: shared.isThemeDark(theme) ? WHITE : PRIMARY_500 };
      closure_2_8(React4, obj3);
    } else {
      const obj = { color: BRAND, look: FILLED, size: MEDIUM, disabled: flag2, style: textStyle, children: text };
      return closure_2_8(closure_18, obj);
    }
  }, items);
  const items2 = [BRAND, darkenOnPress, MEDIUM, FILLED, flag2, flag, style, tmp8];
  const memo1 = noop.useMemo(() => {
    const obj = {};
    const merged = Object.assign(accessibilityState);
    obj.disabled = flag2;
    return obj;
  }, items1);
  const items3 = [foregroundRipple, cornerRadius];
  const callback = noop.useCallback((pressed) => getButtonStyles({ color: BRAND, size: MEDIUM, disabled: flag2, look: FILLED, shrink: flag, pressed: pressed.pressed, darkenOnPress, style }, closure_15), items2);
  const memo2 = noop.useMemo(() => {
    const obj = { foreground: foregroundRipple, cornerRadius: null };
    let num = cornerRadius;
    if (cornerRadius == null) {
      num = 3;
    }
    obj.cornerRadius = num;
    return getThemedRippleConfig(obj);
  }, items3);
  if (noop.useContext(FILLED(MEDIUM[15]).RedesignCompatContext)) {
    if (FILLED !== darkenOnPress.LINK) {
      let obj2 = { style, children: null };
      let obj3 = { text, variant: null, size: null, accessibilityLabel: null, accessibilityHint: null, accessibilityActions: null, onAccessibilityAction: null, onPress: null, onPressIn: null, onPressOut: null, onTouchStart: null, disabled: null, icon: null, iconPosition: null, grow: null };
      let str2 = "active";
      if (foregroundRipple.GREEN !== BRAND) {
        str2 = "destructive";
        if (tmp26.RED !== BRAND) {
          str2 = "secondary";
          if (tmp26.GREY !== BRAND) {
            str2 = "secondary";
            if (tmp26.LIGHTGREY !== BRAND) {
              str2 = "secondary";
              if (tmp26.TRANSPARENT !== BRAND) {
                str2 = "primary";
                if (tmp26.WHITE === BRAND) {
                  str2 = "primary-overlay";
                }
              }
            }
          }
        }
      }
      obj3.variant = str2;
      let str4 = "lg";
      if (obj54.LARGE !== MEDIUM) {
        str4 = "md";
        if (tmp27.MEDIUM !== MEDIUM) {
          if (tmp27.SMALL === MEDIUM) {
            str4 = "sm";
          }
        }
      }
      obj3.size = str4;
      obj3.accessibilityLabel = accessibilityLabel;
      obj3.accessibilityHint = accessibilityHint;
      obj3.accessibilityActions = accessibilityActions;
      obj3.onAccessibilityAction = onAccessibilityAction;
      obj3.onPress = onPress;
      obj3.onPressIn = onPressIn;
      obj3.onPressOut = onPressOut;
      obj3.onTouchStart = onTouchStart;
      if (!flag2) {
        flag2 = flag3;
      }
      obj3.disabled = flag2;
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
      obj3.icon = renderIconResult;
      let str5 = "start";
      if (null == renderIcon) {
        let str6;
        if (null != renderRightIcon) {
          str6 = "end";
        }
        str5 = str6;
      }
      obj3.iconPosition = str5;
      obj3.grow = !flag;
      obj2.children = PRIMARY_500(FILLED(MEDIUM[16]).Button, obj3);
      let tmp16Result = tmp24(flag3, obj2);
    }
    return tmp16Result;
  }
  const obj4 = { accessibilityRole: str, accessibilityState: memo1, accessibilityLabel, accessibilityHint, accessibilityActions, onAccessibilityAction, accessibilityValue, onPress, onPressIn, onPressOut, onTouchStart, onTouchEnd, onLongPress, disabled: null, android_ripple: null, testID: null, style: null, children: null };
  let tmp18 = flag2;
  if (!flag2) {
    tmp18 = flag3;
  }
  obj4.disabled = tmp18;
  obj4.android_ripple = memo2;
  obj4.testID = testID;
  obj4.style = callback;
  let renderLinearGradientResult;
  if (renderLinearGradient != null) {
    renderLinearGradientResult = renderLinearGradient();
  }
  if (renderLinearGradientResult == null) {
    renderLinearGradientResult = null;
  }
  const items4 = [renderLinearGradientResult, , , , ];
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
  obj4.children = items4;
  tmp16Result = style(flag2, obj4);
});
tmp6.Looks = obj52;
tmp6.Colors = obj53;
tmp6.Sizes = obj54;
function getRedesignVariant(color) {
  if (obj53.GREEN === color) {
    return "active";
  } else if (obj53.RED === color) {
    return "destructive";
  } else {
    if (obj53.GREY !== color) {
      if (obj53.LIGHTGREY !== color) {
        if (obj53.TRANSPARENT !== color) {
          if (obj53.WHITE === color) {
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
  if (obj54.LARGE === arg0) {
    return "lg";
  } else if (obj54.MEDIUM === arg0) {
    return "md";
  } else {
    return "sm";
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Button/native/Button.tsx");

export default tmp6;
export const BUTTON_CORNER_RADIUS = 3;
export const useButtonStyles = styles;
export const ButtonLooks = obj52;
export const ButtonColors = obj53;
export const ButtonSizes = obj54;
export { getButtonStyles };
export const ButtonText = tmp5;
export { getRedesignVariant };
export { getRedesignSize };