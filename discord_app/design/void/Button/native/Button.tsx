// discord_app/design/void/Button/native/Button.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import shared from "../../../shared.tsx";
import LegacyText_LegacyTextDefault from "../../LegacyText/native/LegacyText.tsx";
import StylesheetUtils from "../../../../utils/StylesheetUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function getTextStyles(disabled, styles) {
  let flag = disabled.disabled;
  ({ color, look, size } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  const items = [styles.text, , , ,];
  let obj = {
    [closure_1_13.BRAND]: styles.textBrand,
    [closure_1_13.RED]: styles.textRed,
    [closure_1_13.GREEN]: styles.textGreen,
    [closure_1_13.PRIMARY]: styles.textPrimary,
    [closure_1_13.TRANSPARENT]: styles.textTransparent,
    [closure_1_13.GREY]: styles.textGrey,
    [closure_1_13.LIGHTGREY]: styles.textLightgrey,
    [closure_1_13.WHITE]: styles.textWhite,
    [closure_1_13.LINK]: styles.textLink,
  };
  items[1] = obj[color];
  obj = {
    [closure_1_12.FILLED]: styles.textFilled,
    [closure_1_12.LINK]: styles.textLink,
    [closure_1_12.OUTLINED]: styles.textOutlined,
  };
  items[2] = obj[look];
  items[3] = flag ? styles.textDisabled : styles.textDefault;
  obj = {
    [closure_1_15.XSMALL]: styles.textXsmall,
    [closure_1_15.SMALL]: styles.textSmall,
    [closure_1_15.MEDIUM]: styles.textMedium,
    [closure_1_15.LARGE]: styles.textLarge,
  };
  items[4] = obj[size];
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
  const items = [button.button, , , , , ,];
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
class ButtonText {
  constructor(arg0) {
    ({ children, color, look, size, disabled, style } = global);
    tmp = closure_11();
    if (typeof children !== "function") {
      tmp2 = jsx;
      tmp3 = closure_1;
      tmp4 = closure_2;
      obj = { maxFontSizeMultiplier: 2, numberOfLines: 1, style: null, children: null };
      tmp6 = getTextStyles;
      obj = { color: null, look: null, size: null, disabled: null };
      obj.color = color;
      obj.look = look;
      obj.size = size;
      obj.disabled = disabled;
      num = 0;
      tmp5 = closure_1(closure_2[11]);
      items = [,];
      items[0] = getTextStyles(obj, tmp);
      items[1] = style;
      obj.style = items;
      obj.children = children;
      tmp7 = jsx(tmp5, obj);
    } else {
      tmp8 = jsx;
      tmp9 = Fragment;
      obj1 = { children: null };
      obj2 = { style: null };
      tmp10 = getTextStyles;
      obj3 = { color: null, look: null, size: null, disabled: null };
      obj3.color = color;
      obj3.look = look;
      obj3.size = size;
      obj3.disabled = disabled;
      num2 = 0;
      items1 = [,];
      items1[0] = getTextStyles(obj3, tmp);
      items1[1] = style;
      obj2.style = items1;
      obj1.children = children(obj2);
      tmp7 = jsx(Fragment, obj1);
    }
    return tmp7;
  }
}
class Button {
  constructor(arg0) {
    FILLED = global.look;
    if (FILLED === undefined) {
      tmp = darkenOnPress;
      FILLED = darkenOnPress.FILLED;
    }
    BRAND = global.color;
    if (BRAND === undefined) {
      tmp2 = foregroundRipple;
      BRAND = foregroundRipple.BRAND;
    }
    MEDIUM = global.size;
    if (MEDIUM === undefined) {
      tmp3 = closure_15;
      MEDIUM = closure_15.MEDIUM;
    }
    text = global.text;
    flag = global.shrink;
    if (flag === undefined) {
      flag = false;
    }
    c4 = flag;
    flag2 = global.disabled;
    if (flag2 === undefined) {
      flag2 = false;
    }
    c5 = flag2;
    flag3 = global.loading;
    if (flag3 === undefined) {
      flag3 = false;
    }
    c6 = flag3;
    WHITE = global.loadingColorDark;
    if (WHITE === undefined) {
      tmp4 = BRAND;
      tmp5 = MEDIUM;
      WHITE = BRAND(MEDIUM[6]).unsafe_rawColors.WHITE;
    }
    PRIMARY_500 = global.loadingColorLight;
    if (PRIMARY_500 === undefined) {
      tmp6 = BRAND;
      tmp7 = MEDIUM;
      PRIMARY_500 = BRAND(MEDIUM[6]).unsafe_rawColors.PRIMARY_500;
    }
    textStyle = global.textStyle;
    style = global.style;
    str = global.accessibilityRole;
    if (str === undefined) {
      str = "button";
    }
    ({ accessibilityLabel, accessibilityHint, accessibilityState } = global);
    ({ accessibilityActions, onAccessibilityAction, darkenOnPress } = global);
    ({
      renderIcon,
      renderRightIcon,
      renderShine,
      renderLinearGradient,
      onPress,
      onPressIn,
      onPressOut,
      onTouchStart,
      foregroundRipple,
    } = global);
    cornerRadius = global.cornerRadius;
    closure_15 = undefined;
    theme = undefined;
    ({ accessibilityValue, testID, onTouchEnd, onLongPress } = global);
    tmp8 = accessibilityState();
    closure_15 = tmp8;
    tmp9 = FILLED;
    tmp10 = MEDIUM;
    obj = FILLED(MEDIUM[12]);
    theme = obj.useThemeContext().theme;
    items = [, , , , , , , , ,];
    items[0] = BRAND;
    items[1] = flag2;
    items[2] = flag3;
    items[3] = FILLED;
    items[4] = MEDIUM;
    items[5] = text;
    items[6] = textStyle;
    items[7] = WHITE;
    items[8] = PRIMARY_500;
    items[9] = theme;
    items1 = [,];
    items1[0] = flag2;
    items1[1] = accessibilityState;
    memo = text.useMemo(() => {
      if (flag3) {
        let obj = { color: shared.isThemeDark(theme) ? WHITE : PRIMARY_500 };
        React6(React4, obj);
      } else {
        obj = { color: BRAND, look: FILLED, size: MEDIUM, disabled: flag2, style: textStyle, children: text };
        return React6(ButtonText, obj);
      }
    }, items);
    items2 = [, , , , , , ,];
    items2[0] = BRAND;
    items2[1] = darkenOnPress;
    items2[2] = MEDIUM;
    items2[3] = FILLED;
    items2[4] = flag2;
    items2[5] = flag;
    items2[6] = style;
    items2[7] = tmp8;
    memo1 = text.useMemo(() => {
      const obj = {};
      const merged = Object.assign(accessibilityState);
      obj.disabled = flag2;
      return obj;
    }, items1);
    items3 = [,];
    items3[0] = foregroundRipple;
    items3[1] = cornerRadius;
    callback = text.useCallback(
      (pressed) =>
        getButtonStyles(
          {
            color: BRAND,
            size: MEDIUM,
            disabled: flag2,
            look: FILLED,
            shrink: flag,
            pressed: pressed.pressed,
            darkenOnPress,
            style,
          },
          closure_15,
        ),
      items2,
    );
    memo2 = text.useMemo(() => {
      const obj = { foreground: foregroundRipple, cornerRadius: null };
      let num = cornerRadius;
      if (cornerRadius == null) {
        num = 3;
      }
      obj.cornerRadius = num;
      return getThemedRippleConfig(obj);
    }, items3);
    if (text.useContext(FILLED(MEDIUM[13]).RedesignCompatContext)) {
      tmp15 = darkenOnPress;
      if (FILLED !== darkenOnPress.LINK) {
        tmp24 = PRIMARY_500;
        obj = { style: null, children: null };
        obj.style = style;
        tmp25 = c6;
        obj1 = {
          text: null,
          variant: null,
          size: null,
          accessibilityLabel: null,
          accessibilityHint: null,
          accessibilityActions: null,
          onAccessibilityAction: null,
          onPress: null,
          onPressIn: null,
          onPressOut: null,
          onTouchStart: null,
          disabled: null,
          icon: null,
          iconPosition: null,
          grow: null,
        };
        obj1.text = text;
        tmp26 = foregroundRipple;
        str2 = "active";
        if (foregroundRipple.GREEN !== BRAND) {
          str2 = "destructive";
          if (tmp26.RED !== BRAND) {
            str3 = "secondary";
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
        obj1.variant = str2;
        tmp27 = closure_15;
        str4 = "lg";
        if (closure_15.LARGE !== MEDIUM) {
          str4 = "md";
          if (tmp27.MEDIUM !== MEDIUM) {
            if (tmp27.SMALL === MEDIUM) {
              str4 = "sm";
            }
          }
        }
        obj1.size = str4;
        obj1.accessibilityLabel = accessibilityLabel;
        obj1.accessibilityHint = accessibilityHint;
        obj1.accessibilityActions = accessibilityActions;
        obj1.onAccessibilityAction = onAccessibilityAction;
        obj1.onPress = onPress;
        obj1.onPressIn = onPressIn;
        obj1.onPressOut = onPressOut;
        obj1.onTouchStart = onTouchStart;
        if (!flag2) {
          flag2 = flag3;
        }
        obj1.disabled = flag2;
        tmp28 = null;
        renderIconResult = undefined;
        if (renderIcon != null) {
          renderIconResult = renderIcon();
        }
        if (renderIconResult == null) {
          renderRightIconResult = undefined;
          if (renderRightIcon != null) {
            renderRightIconResult = renderRightIcon();
          }
          renderIconResult = renderRightIconResult;
        }
        if (renderIconResult == null) {
          renderIconResult = null;
        }
        obj1.icon = renderIconResult;
        str5 = "start";
        if (null == renderIcon) {
          str6 = undefined;
          if (null != renderRightIcon) {
            str6 = "end";
          }
          str5 = str6;
        }
        obj1.iconPosition = str5;
        obj1.grow = !flag;
        obj.children = tmp24(tmp9(tmp10[14]).Button, obj1);
        tmp24Result = tmp24(tmp25, obj);
      }
      return tmp24Result;
    }
    obj2 = {
      accessibilityRole: str,
      accessibilityState: memo1,
      accessibilityLabel,
      accessibilityHint,
      accessibilityActions,
      onAccessibilityAction,
      accessibilityValue,
      onPress,
      onPressIn,
      onPressOut,
      onTouchStart,
      onTouchEnd,
      onLongPress,
      disabled: null,
      android_ripple: null,
      testID: null,
      style: null,
      children: null,
    };
    tmp18 = flag2;
    tmp16 = style;
    tmp17 = c5;
    if (!flag2) {
      tmp18 = flag3;
    }
    obj2.disabled = tmp18;
    obj2.android_ripple = memo2;
    obj2.testID = testID;
    obj2.style = callback;
    renderLinearGradientResult = undefined;
    if (renderLinearGradient != null) {
      renderLinearGradientResult = renderLinearGradient();
    }
    if (renderLinearGradientResult == null) {
      renderLinearGradientResult = null;
    }
    items4 = [, , , ,];
    items4[0] = renderLinearGradientResult;
    renderIconResult1 = undefined;
    if (renderIcon != null) {
      renderIconResult1 = renderIcon();
    }
    if (renderIconResult1 == null) {
      renderIconResult1 = null;
    }
    items4[1] = renderIconResult1;
    items4[2] = memo;
    renderRightIconResult1 = undefined;
    if (renderRightIcon != null) {
      renderRightIconResult1 = renderRightIcon();
    }
    if (renderRightIconResult1 == null) {
      renderRightIconResult1 = null;
    }
    items4[3] = renderRightIconResult1;
    renderShineResult = undefined;
    if (renderShine != null) {
      renderShineResult = renderShine();
    }
    if (renderShineResult == null) {
      renderShineResult = null;
    }
    items4[4] = renderShineResult;
    obj2.children = items4;
    tmp24Result = tmp16(tmp17, obj2);
    return;
  }
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const getThemedRippleConfig = fn(1182).getThemedRippleConfig;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = {
  button: {
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    borderRadius: 3,
  },
  buttonShrink: { flexGrow: 0, alignSelf: "flex-start", paddingHorizontal: 10 },
  buttonBrandDefault: null,
  buttonBrandDarkDefault: null,
  buttonRedDefault: null,
  buttonRedDarkDefault: null,
  buttonGreenDefault: null,
  buttonGreenDarkDefault: null,
  buttonGreyDarkDefault: null,
  buttonLightgreyDefault: null,
  buttonLightgreyDarkDefault: null,
  buttonBrandDisabled: null,
  buttonBrandDarkDisabled: null,
  buttonRedDisabled: null,
  buttonRedDarkDisabled: null,
  buttonGreenDisabled: null,
  buttonGreenDarkDisabled: null,
  buttonGreyDarkDisabled: null,
  buttonLightgreyDisabled: null,
  buttonLightgreyDarkDisabled: null,
  buttonTransparentDefault: null,
  buttonTransparentDarkDefault: null,
  buttonTransparentDisabled: null,
  buttonTransparentDarkDisabled: null,
  buttonWhiteDefault: null,
  buttonWhiteDisabled: null,
  buttonFilled: null,
  buttonLink: null,
  buttonLinkDefault: null,
  buttonOutlined: null,
  buttonXsmall: null,
  buttonSmall: null,
  buttonMedium: null,
  buttonLarge: null,
  text: null,
  textXsmall: null,
  textSmall: null,
  textMedium: null,
  textLarge: null,
  textDisabled: null,
  textDefault: null,
  textBrand: null,
  textRed: null,
  textGreen: null,
  textGrey: null,
  textLightgrey: null,
  textWhite: null,
  textFilled: null,
  textOutlined: null,
  faded: null,
  buttonWhiteDarkDefault: null,
  textLink: null,
  buttonPrimaryDefault: null,
  buttonPrimaryDarkDefault: null,
  buttonGreyDefault: null,
  textPrimary: null,
  textTransparent: null,
  buttonPrimaryDisabled: null,
  buttonPrimaryDarkDisabled: null,
  buttonGreyDisabled: null,
};
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles.buttonBrandDefault = createStyles;
createStyles.buttonBrandDarkDefault = { backgroundColor: nativeDefault.unsafe_rawColors.BRAND_600 };
let obj1 = { backgroundColor: nativeDefault.unsafe_rawColors.BRAND_600 };
createStyles.buttonRedDefault = { backgroundColor: nativeDefault.unsafe_rawColors.RED_400 };
let obj2 = { backgroundColor: nativeDefault.unsafe_rawColors.RED_400 };
createStyles.buttonRedDarkDefault = { backgroundColor: nativeDefault.unsafe_rawColors.RED_500 };
let obj3 = { backgroundColor: nativeDefault.unsafe_rawColors.RED_500 };
createStyles.buttonGreenDefault = { backgroundColor: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT };
const obj4 = { backgroundColor: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT };
createStyles.buttonGreenDarkDefault = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_500 };
const obj5 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_500 };
createStyles.buttonGreyDarkDefault = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500 };
const obj6 = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500 };
createStyles.buttonLightgreyDefault = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500 };
const obj7 = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500 };
createStyles.buttonLightgreyDarkDefault = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500 };
const obj9 = { backgroundColor: null };
let ColorUtils = fn(4409);
obj9.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BRAND_500, 0.5);
createStyles.buttonBrandDisabled = obj9;
const obj10 = { backgroundColor: null };
ColorUtils = fn(4409);
obj10.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BRAND_600, 0.5);
createStyles.buttonBrandDarkDisabled = obj10;
const obj11 = { backgroundColor: null };
ColorUtils = fn(4409);
obj11.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.RED_400, 0.5);
createStyles.buttonRedDisabled = obj11;
ColorUtils = { backgroundColor: null };
ColorUtils = fn(4409);
ColorUtils.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.RED_500, 0.5);
createStyles.buttonRedDarkDisabled = ColorUtils;
const obj13 = { backgroundColor: null };
ColorUtils = fn(4409);
obj13.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.GREEN_360, 0.5);
createStyles.buttonGreenDisabled = obj13;
ColorUtils = { backgroundColor: null };
ColorUtils = fn(4409);
ColorUtils.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.GREEN_500, 0.5);
createStyles.buttonGreenDarkDisabled = ColorUtils;
const obj15 = { backgroundColor: null };
ColorUtils = fn(4409);
obj15.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_500, 0.5);
createStyles.buttonGreyDarkDisabled = obj15;
ColorUtils = { backgroundColor: null };
ColorUtils = fn(4409);
ColorUtils.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_500, 0.5);
createStyles.buttonLightgreyDisabled = ColorUtils;
const obj17 = { backgroundColor: null };
ColorUtils = fn(4409);
obj17.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_500, 0.5);
createStyles.buttonLightgreyDarkDisabled = obj17;
createStyles.buttonTransparentDefault = { backgroundColor: "transparent" };
createStyles.buttonTransparentDarkDefault = { backgroundColor: "transparent" };
createStyles.buttonTransparentDisabled = { backgroundColor: "transparent" };
createStyles.buttonTransparentDarkDisabled = { backgroundColor: "transparent" };
ColorUtils = { backgroundColor: nativeDefault.colors.WHITE };
createStyles.buttonWhiteDefault = ColorUtils;
const obj19 = { backgroundColor: null };
ColorUtils = fn(4409);
obj19.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.5);
createStyles.buttonWhiteDisabled = obj19;
createStyles.buttonFilled = {};
createStyles.buttonLink = {};
createStyles.buttonLinkDefault = {};
ColorUtils = {
  backgroundColor: "transparent",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: fn(5441).BUTTON_OUTLINED_BORDER,
};
createStyles.buttonOutlined = ColorUtils;
createStyles.buttonXsmall = { minHeight: 24 };
createStyles.buttonSmall = { minHeight: 32 };
createStyles.buttonMedium = { minHeight: 40 };
createStyles.buttonLarge = { minHeight: 46 };
const obj8 = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500 };
createStyles.text = { color: nativeDefault.colors.WHITE, fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD, flexShrink: 1 };
createStyles.textXsmall = { fontSize: 12 };
createStyles.textSmall = { fontSize: 14 };
createStyles.textMedium = { fontSize: 14 };
createStyles.textLarge = { fontSize: 20 };
createStyles.textDisabled = { opacity: 0.6 };
createStyles.textDefault = { opacity: 1 };
ColorUtils = { color: nativeDefault.colors.WHITE };
createStyles.textBrand = ColorUtils;
const obj21 = { color: nativeDefault.colors.WHITE, fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD, flexShrink: 1 };
createStyles.textRed = { color: nativeDefault.colors.WHITE };
ColorUtils = { color: nativeDefault.colors.WHITE };
createStyles.textGreen = ColorUtils;
const obj23 = { color: nativeDefault.colors.WHITE };
createStyles.textGrey = { color: nativeDefault.colors.WHITE };
ColorUtils = { color: nativeDefault.colors.WHITE };
createStyles.textLightgrey = ColorUtils;
const obj25 = { color: nativeDefault.colors.WHITE };
createStyles.textWhite = { color: nativeDefault.colors.WHITE };
createStyles.textFilled = {};
ColorUtils = { color: fn(5441).DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
createStyles.textOutlined = ColorUtils;
createStyles.faded = { opacity: 0.5 };
const obj27 = { color: nativeDefault.colors.WHITE };
createStyles.buttonWhiteDarkDefault = { backgroundColor: nativeDefault.colors.WHITE };
const obj29 = { backgroundColor: nativeDefault.colors.WHITE };
createStyles.textLink = { color: nativeDefault.colors.TEXT_LINK };
ColorUtils = { backgroundColor: fn(5441).DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
createStyles.buttonPrimaryDefault = ColorUtils;
const obj30 = { color: nativeDefault.colors.TEXT_LINK };
createStyles.buttonPrimaryDarkDefault = { backgroundColor: fn(5441).DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
const obj32 = { backgroundColor: fn(5441).DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
createStyles.buttonGreyDefault = { backgroundColor: fn(5441).DARK_PRIMARY_500_LIGHT_PRIMARY_430 };
const obj33 = { backgroundColor: fn(5441).DARK_PRIMARY_500_LIGHT_PRIMARY_430 };
createStyles.textPrimary = { color: fn(5441).DARK_PRIMARY_500_LIGHT_PRIMARY_100 };
const obj34 = { color: fn(5441).DARK_PRIMARY_500_LIGHT_PRIMARY_100 };
createStyles.textTransparent = { color: fn(5441).DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
const obj35 = { color: fn(5441).DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
createStyles.buttonPrimaryDisabled = { backgroundColor: fn(5441).BUTTON_PRIMARY_DISABLED_BACKGROUND };
const obj36 = { backgroundColor: fn(5441).BUTTON_PRIMARY_DISABLED_BACKGROUND };
createStyles.buttonPrimaryDarkDisabled = { backgroundColor: fn(5441).BUTTON_PRIMARY_DISABLED_BACKGROUND };
const obj37 = { backgroundColor: fn(5441).BUTTON_PRIMARY_DISABLED_BACKGROUND };
createStyles.buttonGreyDisabled = { backgroundColor: fn(5441).BUTTON_GREY_DISABLED_BACKGROUND };
createStyles = createStyles.createStyles(createStyles);
const obj39 = { FILLED: "filled", LINK: "link", OUTLINED: "outlined" };
const obj40 = {
  BRAND: "brand",
  RED: "red",
  GREEN: "green",
  PRIMARY: "primary",
  TRANSPARENT: "transparent",
  GREY: "grey",
  LIGHTGREY: "lightgrey",
  WHITE: "white",
  LINK: "link",
};
const constants = { DEFAULT: "Default", DISABLED: "Disabled" };
let obj41 = { XSMALL: "xsmall", SMALL: "small", MEDIUM: "medium", LARGE: "large" };
Button.Looks = obj39;
Button.Colors = obj40;
Button.Sizes = obj41;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Button/native/Button.tsx");

export default Button;
export const BUTTON_CORNER_RADIUS = 3;
export const useButtonStyles = createStyles;
export const ButtonLooks = obj39;
export const ButtonColors = obj40;
export const ButtonSizes = obj41;
export { getButtonStyles };
export { ButtonText };
export const getRedesignVariant = function getRedesignVariant(color) {
  if (obj40.GREEN === color) {
    return "active";
  } else if (obj40.RED === color) {
    return "destructive";
  } else {
    if (obj40.GREY !== color) {
      if (obj40.LIGHTGREY !== color) {
        if (obj40.TRANSPARENT !== color) {
          if (obj40.WHITE === color) {
            return "primary-overlay";
          } else {
            return "primary";
          }
        }
      }
    }
    return "secondary";
  }
};
export const getRedesignSize = function getRedesignSize(arg0) {
  if (obj41.LARGE === arg0) {
    return "lg";
  } else if (obj41.MEDIUM === arg0) {
    return "md";
  } else {
    return "sm";
  }
};
