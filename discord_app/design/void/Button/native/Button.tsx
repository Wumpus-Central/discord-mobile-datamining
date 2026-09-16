// discord_app/design/void/Button/native/Button.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import shared from "../../../shared.tsx";
import LegacyText_LegacyTextDefault from "../../LegacyText/native/LegacyText.tsx";
import StylesheetUtils from "../../../../utils/StylesheetUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function getTextStyles(disabled, text) {
  let flag = disabled.disabled;
  ({ color, look, size } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  const items = [
    text.text,
    {
      [closure_1_13.BRAND]: text.textBrand,
      [closure_1_13.RED]: text.textRed,
      [closure_1_13.GREEN]: text.textGreen,
      [closure_1_13.PRIMARY]: text.textPrimary,
      [closure_1_13.TRANSPARENT]: text.textTransparent,
      [closure_1_13.GREY]: text.textGrey,
      [closure_1_13.LIGHTGREY]: text.textLightgrey,
      [closure_1_13.WHITE]: text.textWhite,
      [closure_1_13.LINK]: text.textLink,
    }[color],
    {
      [closure_1_12.FILLED]: text.textFilled,
      [closure_1_12.LINK]: text.textLink,
      [closure_1_12.OUTLINED]: text.textOutlined,
    }[look],
    flag ? text.textDisabled : text.textDefault,
    {
      [closure_1_15.XSMALL]: text.textXsmall,
      [closure_1_15.SMALL]: text.textSmall,
      [closure_1_15.MEDIUM]: text.textMedium,
      [closure_1_15.LARGE]: text.textLarge,
    }[size],
  ];
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
      obj1 = { color: null, look: null, size: null, disabled: null };
      obj1.color = color;
      obj1.look = look;
      obj1.size = size;
      obj1.disabled = disabled;
      num = 0;
      tmp5 = closure_1(closure_2[11]);
      items = [,];
      items[0] = getTextStyles(obj1, tmp);
      items[1] = style;
      obj.style = items;
      obj.children = children;
      tmp7 = jsx(tmp5, obj);
    } else {
      tmp8 = jsx;
      tmp9 = Fragment;
      obj6 = { children: null };
      obj7 = { style: null };
      tmp10 = getTextStyles;
      obj8 = { color: null, look: null, size: null, disabled: null };
      obj8.color = color;
      obj8.look = look;
      obj8.size = size;
      obj8.disabled = disabled;
      num2 = 0;
      items1 = [,];
      items1[0] = getTextStyles(obj8, tmp);
      items1[1] = style;
      obj7.style = items1;
      obj6.children = children(obj7);
      tmp7 = jsx(Fragment, obj6);
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
        const obj3 = { color: shared.isThemeDark(theme) ? WHITE : PRIMARY_500 };
        React6(React4, obj3);
      } else {
        const obj = { color: BRAND, look: FILLED, size: MEDIUM, disabled: flag2, style: textStyle, children: text };
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
        obj1 = { style: null, children: null };
        obj1.style = style;
        tmp25 = c6;
        obj5 = {
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
        obj5.text = text;
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
        obj5.variant = str2;
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
        obj5.size = str4;
        obj5.accessibilityLabel = accessibilityLabel;
        obj5.accessibilityHint = accessibilityHint;
        obj5.accessibilityActions = accessibilityActions;
        obj5.onAccessibilityAction = onAccessibilityAction;
        obj5.onPress = onPress;
        obj5.onPressIn = onPressIn;
        obj5.onPressOut = onPressOut;
        obj5.onTouchStart = onTouchStart;
        if (!flag2) {
          flag2 = flag3;
        }
        obj5.disabled = flag2;
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
        obj5.icon = renderIconResult;
        str5 = "start";
        if (null == renderIcon) {
          str6 = undefined;
          if (null != renderRightIcon) {
            str6 = "end";
          }
          str5 = str6;
        }
        obj5.iconPosition = str5;
        obj5.grow = !flag;
        obj1.children = tmp24(tmp9(tmp10[14]).Button, obj5);
        tmp24Result = tmp24(tmp25, obj1);
      }
      return tmp24Result;
    }
    obj6 = {
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
    obj6.disabled = tmp18;
    obj6.android_ripple = memo2;
    obj6.testID = testID;
    obj6.style = callback;
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
    obj6.children = items4;
    tmp24Result = tmp16(tmp17, obj6);
    return;
  }
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const getThemedRippleConfig = fn(1181).getThemedRippleConfig;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4638);
let obj2 = {
  button: {
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    borderRadius: 3,
  },
  buttonShrink: { flexGrow: 0, alignSelf: "flex-start", paddingHorizontal: 10 },
  buttonBrandDefault: { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND },
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
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.buttonBrandDarkDefault = { backgroundColor: nativeDefault.unsafe_rawColors.BRAND_600 };
let obj4 = { backgroundColor: nativeDefault.unsafe_rawColors.BRAND_600 };
obj2.buttonRedDefault = { backgroundColor: nativeDefault.unsafe_rawColors.RED_400 };
let obj5 = { backgroundColor: nativeDefault.unsafe_rawColors.RED_400 };
obj2.buttonRedDarkDefault = { backgroundColor: nativeDefault.unsafe_rawColors.RED_500 };
const obj6 = { backgroundColor: nativeDefault.unsafe_rawColors.RED_500 };
obj2.buttonGreenDefault = { backgroundColor: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT };
const obj7 = { backgroundColor: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT };
obj2.buttonGreenDarkDefault = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_500 };
const obj8 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_500 };
obj2.buttonGreyDarkDefault = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500 };
const obj9 = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500 };
obj2.buttonLightgreyDefault = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500 };
const obj10 = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500 };
obj2.buttonLightgreyDarkDefault = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500 };
const obj12 = { backgroundColor: null };
let ColorUtils = fn(4487);
obj12.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BRAND_500, 0.5);
obj2.buttonBrandDisabled = obj12;
const obj14 = { backgroundColor: null };
ColorUtils = fn(4487);
obj14.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BRAND_600, 0.5);
obj2.buttonBrandDarkDisabled = obj14;
const obj16 = { backgroundColor: null };
ColorUtils = fn(4487);
obj16.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.RED_400, 0.5);
obj2.buttonRedDisabled = obj16;
const obj18 = { backgroundColor: null };
ColorUtils = fn(4487);
obj18.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.RED_500, 0.5);
obj2.buttonRedDarkDisabled = obj18;
const obj20 = { backgroundColor: null };
ColorUtils = fn(4487);
obj20.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.GREEN_360, 0.5);
obj2.buttonGreenDisabled = obj20;
const obj22 = { backgroundColor: null };
ColorUtils = fn(4487);
obj22.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.GREEN_500, 0.5);
obj2.buttonGreenDarkDisabled = obj22;
const obj24 = { backgroundColor: null };
ColorUtils = fn(4487);
obj24.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_500, 0.5);
obj2.buttonGreyDarkDisabled = obj24;
const obj26 = { backgroundColor: null };
ColorUtils = fn(4487);
obj26.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_500, 0.5);
obj2.buttonLightgreyDisabled = obj26;
const obj28 = { backgroundColor: null };
ColorUtils = fn(4487);
obj28.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_500, 0.5);
obj2.buttonLightgreyDarkDisabled = obj28;
obj2.buttonTransparentDefault = { backgroundColor: "transparent" };
obj2.buttonTransparentDarkDefault = { backgroundColor: "transparent" };
obj2.buttonTransparentDisabled = { backgroundColor: "transparent" };
obj2.buttonTransparentDarkDisabled = { backgroundColor: "transparent" };
const obj11 = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500 };
obj2.buttonWhiteDefault = { backgroundColor: nativeDefault.colors.WHITE };
const obj31 = { backgroundColor: null };
ColorUtils = fn(4487);
obj31.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.5);
obj2.buttonWhiteDisabled = obj31;
obj2.buttonFilled = {};
obj2.buttonLink = {};
obj2.buttonLinkDefault = {};
const obj30 = { backgroundColor: nativeDefault.colors.WHITE };
obj2.buttonOutlined = {
  backgroundColor: "transparent",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: fn(5527).BUTTON_OUTLINED_BORDER,
};
obj2.buttonXsmall = { minHeight: 24 };
obj2.buttonSmall = { minHeight: 32 };
obj2.buttonMedium = { minHeight: 40 };
obj2.buttonLarge = { minHeight: 46 };
const obj33 = {
  backgroundColor: "transparent",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: fn(5527).BUTTON_OUTLINED_BORDER,
};
obj2.text = { color: nativeDefault.colors.WHITE, fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD, flexShrink: 1 };
obj2.textXsmall = { fontSize: 12 };
obj2.textSmall = { fontSize: 14 };
obj2.textMedium = { fontSize: 14 };
obj2.textLarge = { fontSize: 20 };
obj2.textDisabled = { opacity: 0.6 };
obj2.textDefault = { opacity: 1 };
const obj34 = { color: nativeDefault.colors.WHITE, fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD, flexShrink: 1 };
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
obj2.textOutlined = { color: fn(5527).DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
obj2.faded = { opacity: 0.5 };
const obj41 = { color: fn(5527).DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
obj2.buttonWhiteDarkDefault = { backgroundColor: nativeDefault.colors.WHITE };
const obj42 = { backgroundColor: nativeDefault.colors.WHITE };
obj2.textLink = { color: nativeDefault.colors.TEXT_LINK };
const obj43 = { color: nativeDefault.colors.TEXT_LINK };
obj2.buttonPrimaryDefault = { backgroundColor: fn(5527).DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
const obj44 = { backgroundColor: fn(5527).DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
obj2.buttonPrimaryDarkDefault = { backgroundColor: fn(5527).DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
const obj45 = { backgroundColor: fn(5527).DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
obj2.buttonGreyDefault = { backgroundColor: fn(5527).DARK_PRIMARY_500_LIGHT_PRIMARY_430 };
const obj46 = { backgroundColor: fn(5527).DARK_PRIMARY_500_LIGHT_PRIMARY_430 };
obj2.textPrimary = { color: fn(5527).DARK_PRIMARY_500_LIGHT_PRIMARY_100 };
const obj47 = { color: fn(5527).DARK_PRIMARY_500_LIGHT_PRIMARY_100 };
obj2.textTransparent = { color: fn(5527).DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
const obj48 = { color: fn(5527).DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
obj2.buttonPrimaryDisabled = { backgroundColor: fn(5527).BUTTON_PRIMARY_DISABLED_BACKGROUND };
const obj49 = { backgroundColor: fn(5527).BUTTON_PRIMARY_DISABLED_BACKGROUND };
obj2.buttonPrimaryDarkDisabled = { backgroundColor: fn(5527).BUTTON_PRIMARY_DISABLED_BACKGROUND };
const obj50 = { backgroundColor: fn(5527).BUTTON_PRIMARY_DISABLED_BACKGROUND };
obj2.buttonGreyDisabled = { backgroundColor: fn(5527).BUTTON_GREY_DISABLED_BACKGROUND };
const styles = createStyles.createStyles(obj2);
const obj52 = { FILLED: "filled", LINK: "link", OUTLINED: "outlined" };
const obj53 = {
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
let obj54 = { XSMALL: "xsmall", SMALL: "small", MEDIUM: "medium", LARGE: "large" };
Button.Looks = obj52;
Button.Colors = obj53;
Button.Sizes = obj54;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Button/native/Button.tsx");

export default Button;
export const BUTTON_CORNER_RADIUS = 3;
export const useButtonStyles = styles;
export const ButtonLooks = obj52;
export const ButtonColors = obj53;
export const ButtonSizes = obj54;
export { getButtonStyles };
export { ButtonText };
export const getRedesignVariant = function getRedesignVariant(color) {
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
};
export const getRedesignSize = function getRedesignSize(arg0) {
  if (obj54.LARGE === arg0) {
    return "lg";
  } else if (obj54.MEDIUM === arg0) {
    return "md";
  } else {
    return "sm";
  }
};
