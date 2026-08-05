// discord_app/design/void/Button/native/Button.tsx
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { getThemedRippleConfig } from "semanticColor";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import hexToRgba from "hexToRgba";
import hexToRgba from "hexToRgba";
import hexToRgba from "hexToRgba";
import hexToRgba from "hexToRgba";
import hexToRgba from "hexToRgba";
import hexToRgba from "hexToRgba";
import hexToRgba from "hexToRgba";
import hexToRgba from "hexToRgba";
import hexToRgba from "hexToRgba";
import hexToRgba from "hexToRgba";

let c10;
let c4;
let c5;
let c9;
let closure_6;
let metroImportAll;
const require = arg1;
function getTextStyles(disabled, text) {
  let color;
  let look;
  let size;
  let flag = disabled.disabled;
  ({ color, look, size } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  const items = [text.text, , , , ];
  let obj = { [closure_13.BRAND]: text.textBrand, [closure_13.RED]: text.textRed, [closure_13.GREEN]: text.textGreen, [closure_13.PRIMARY]: text.textPrimary, [closure_13.TRANSPARENT]: text.textTransparent, [closure_13.GREY]: text.textGrey, [closure_13.LIGHTGREY]: text.textLightgrey, [closure_13.WHITE]: text.textWhite, [closure_13.LINK]: text.textLink };
  items[1] = obj[color];
  obj = { [closure_12.FILLED]: text.textFilled, [closure_12.LINK]: text.textLink, [closure_12.OUTLINED]: text.textOutlined };
  items[2] = obj[look];
  items[3] = flag ? text.textDisabled : text.textDefault;
  obj = { [closure_15.XSMALL]: text.textXsmall, [closure_15.SMALL]: text.textSmall, [closure_15.MEDIUM]: text.textMedium, [closure_15.LARGE]: text.textLarge };
  items[4] = obj[size];
  return items;
}
function getButtonStyles(shrink, button) {
  let color;
  let disabled;
  let look;
  let size;
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
    obj = require("../../../../utils/PlatformUtils.tsx") /* set */;
  }
  const items = [button.button, , , , , , ];
  let buttonShrink = null;
  if (flag) {
    buttonShrink = button.buttonShrink;
  }
  items[1] = buttonShrink;
  items[2] = require("../../../../utils/StylesheetUtils.tsx") /* getClass */.getClass(button, "button", combined, disabled ? closure_14.DISABLED : closure_14.DEFAULT);
  const obj2 = require("../../../../utils/StylesheetUtils.tsx") /* getClass */;
  const tmp2 = disabled ? closure_14.DISABLED : closure_14.DEFAULT;
  const tmp8 = require;
  items[3] = require("../../../../utils/StylesheetUtils.tsx") /* getClass */.getClass(button, "button", size);
  const obj3 = require("../../../../utils/StylesheetUtils.tsx") /* getClass */;
  items[4] = require("../../../../utils/StylesheetUtils.tsx") /* getClass */.getClass(button, "button", look);
  let faded;
  if (!flag3) {
    if (!tmp8Result.isAndroid()) {
      if (flag2) {
        faded = button.faded;
      }
    }
    tmp8Result = tmp8(500);
  }
  items[5] = faded;
  items[6] = shrink.style;
  return items;
}
class ButtonText {
  constructor(arg0) {
    ({ children, color, look, size, disabled, style } = global);
    tmp = Object();
    if (typeof children !== "function") {
      tmp2 = jsx;
      tmp3 = closure_1;
      tmp4 = closure_2;
      obj = { maxFontSizeMultiplier: 2, numberOfLines: 1, style: null, children: null };
      tmp6 = getTextStyles;
      obj = { color: null, look: null, size: null, disabled: null };
      obj[0] = color;
      obj[1] = look;
      obj[2] = size;
      obj[3] = disabled;
      num = 0;
      tmp5 = require("module_7809");
      items = [, ];
      items[0] = getTextStyles(obj, tmp);
      items[1] = style;
      obj[2] = items;
      obj[3] = children;
      tmp7 = jsx(tmp5, obj);
    } else {
      tmp8 = jsx;
      tmp9 = Fragment;
      obj1 = { children: null };
      obj2 = { style: null };
      tmp10 = getTextStyles;
      obj3 = { color: null, look: null, size: null, disabled: null };
      obj3[0] = color;
      obj3[1] = look;
      obj3[2] = size;
      obj3[3] = disabled;
      num2 = 0;
      items1 = [, ];
      items1[0] = getTextStyles(obj3, tmp);
      items1[1] = style;
      obj2[0] = items1;
      obj1[0] = children(obj2);
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
    noop = text;
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
      WHITE = require("Themes").unsafe_rawColors.WHITE;
    }
    PRIMARY_500 = global.loadingColorLight;
    if (PRIMARY_500 === undefined) {
      tmp6 = BRAND;
      tmp7 = MEDIUM;
      PRIMARY_500 = require("Themes").unsafe_rawColors.PRIMARY_500;
    }
    textStyle = global.textStyle;
    style = global.style;
    str = global.accessibilityRole;
    if (str === undefined) {
      str = "button";
    }
    ({ accessibilityLabel, accessibilityHint, accessibilityState } = global);
    ({ accessibilityActions, onAccessibilityAction, darkenOnPress } = global);
    ({ renderIcon, renderRightIcon, renderShine, renderLinearGradient, onPress, onPressIn, onPressOut, onTouchStart, foregroundRipple } = global);
    cornerRadius = global.cornerRadius;
    closure_15 = undefined;
    theme = undefined;
    ({ accessibilityValue, testID, onTouchEnd, onLongPress } = global);
    tmp8 = accessibilityState();
    closure_15 = tmp8;
    tmp9 = FILLED;
    tmp10 = MEDIUM;
    obj = require("AccessibilityAnnouncer");
    theme = obj.useThemeContext().theme;
    items = [, , , , , , , , , ];
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
    items1 = [, ];
    items1[0] = flag2;
    items1[1] = accessibilityState;
    memo = noop.useMemo(() => {
      if (flag3) {
        let obj = { color: null };
        obj[0] = FILLED(MEDIUM[12]).isThemeDark(theme) ? WHITE : PRIMARY_500;
        tmp(flag, obj);
        const obj2 = FILLED(MEDIUM[12]);
        const tmp9 = flag;
      } else {
        obj = { color: null, look: null, size: null, disabled: null, style: null, children: null };
        obj[0] = BRAND;
        obj[1] = FILLED;
        obj[2] = MEDIUM;
        obj[3] = flag2;
        obj[4] = textStyle;
        obj[5] = noop;
        return tmp(outer1_18, obj);
      }
    }, items);
    items2 = [, , , , , , , ];
    items2[0] = BRAND;
    items2[1] = darkenOnPress;
    items2[2] = MEDIUM;
    items2[3] = FILLED;
    items2[4] = flag2;
    items2[5] = flag;
    items2[6] = style;
    items2[7] = tmp8;
    memo1 = noop.useMemo(() => {
      const obj = {};
      const merged = Object.assign(accessibilityState);
      obj.disabled = flag2;
      return obj;
    }, items1);
    items3 = [, ];
    items3[0] = foregroundRipple;
    items3[1] = cornerRadius;
    callback = noop.useCallback((pressed) => outer1_17({ color: BRAND, size: MEDIUM, disabled: flag2, look: FILLED, shrink: flag, pressed: pressed.pressed, darkenOnPress, style }, c15), items2);
    memo2 = noop.useMemo(() => {
      const obj = { foreground: foregroundRipple, cornerRadius: null };
      let num = cornerRadius;
      if (cornerRadius == null) {
        num = 3;
      }
      obj[1] = num;
      return WHITE(obj);
    }, items3);
    if (noop.useContext(require("context").RedesignCompatContext)) {
      tmp15 = darkenOnPress;
      if (FILLED !== darkenOnPress.LINK) {
        tmp24 = PRIMARY_500;
        obj = { style: null, children: null };
        obj[0] = style;
        tmp25 = c6;
        obj1 = { text: null, variant: null, size: null, accessibilityLabel: null, accessibilityHint: null, accessibilityActions: null, onAccessibilityAction: null, onPress: null, onPressIn: null, onPressOut: null, onTouchStart: null, disabled: null, icon: null, iconPosition: null, grow: null };
        obj1[0] = text;
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
        obj1[1] = str2;
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
        obj1[2] = str4;
        obj1[3] = accessibilityLabel;
        obj1[4] = accessibilityHint;
        obj1[5] = accessibilityActions;
        obj1[6] = onAccessibilityAction;
        obj1[7] = onPress;
        obj1[8] = onPressIn;
        obj1[9] = onPressOut;
        obj1[10] = onTouchStart;
        if (!flag2) {
          flag2 = flag3;
        }
        obj1[11] = flag2;
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
        obj1[12] = renderIconResult;
        str5 = "start";
        if (null == renderIcon) {
          str6 = undefined;
          if (null != renderRightIcon) {
            str6 = "end";
          }
          str5 = str6;
        }
        obj1[13] = str5;
        obj1[14] = !flag;
        obj[1] = tmp24(require("Button").Button, obj1);
        tmp24Result = tmp24(tmp25, obj);
      }
      return tmp24Result;
    }
    obj2 = { accessibilityRole: str, accessibilityState: memo1, accessibilityLabel, accessibilityHint, accessibilityActions, onAccessibilityAction, accessibilityValue, onPress, onPressIn, onPressOut, onTouchStart, onTouchEnd, onLongPress, disabled: null, android_ripple: null, testID: null, style: null, children: null };
    tmp18 = flag2;
    tmp16 = style;
    tmp17 = c5;
    if (!flag2) {
      tmp18 = flag3;
    }
    obj2[13] = tmp18;
    obj2[14] = memo2;
    obj2[15] = testID;
    obj2[16] = callback;
    renderLinearGradientResult = undefined;
    if (renderLinearGradient != null) {
      renderLinearGradientResult = renderLinearGradient();
    }
    if (renderLinearGradientResult == null) {
      renderLinearGradientResult = null;
    }
    items4 = [, , , , ];
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
    obj2[17] = items4;
    tmp24Result = tmp16(tmp17, obj2);
    return;
  }
}
({ ActivityIndicator: c4, Pressable: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = jsxProd);
createCacheKey = { button: { flexDirection: "row", flexGrow: 1, justifyContent: "center", alignItems: "center", alignSelf: "stretch", borderRadius: 3 }, buttonShrink: { flexGrow: 0, alignSelf: "flex-start", paddingHorizontal: 10 }, buttonBrandDefault: null, buttonBrandDarkDefault: null, buttonRedDefault: null, buttonRedDarkDefault: null, buttonGreenDefault: null, buttonGreenDarkDefault: null, buttonGreyDarkDefault: null, buttonLightgreyDefault: null, buttonLightgreyDarkDefault: null, buttonBrandDisabled: null, buttonBrandDarkDisabled: null, buttonRedDisabled: null, buttonRedDarkDisabled: null, buttonGreenDisabled: null, buttonGreenDarkDisabled: null, buttonGreyDarkDisabled: null, buttonLightgreyDisabled: null, buttonLightgreyDarkDisabled: null, buttonTransparentDefault: null, buttonTransparentDarkDefault: null, buttonTransparentDisabled: null, buttonTransparentDarkDisabled: null, buttonWhiteDefault: null, buttonWhiteDisabled: null, buttonFilled: null, buttonLink: null, buttonLinkDefault: null, buttonOutlined: null, buttonXsmall: null, buttonSmall: null, buttonMedium: null, buttonLarge: null, text: null, textXsmall: null, textSmall: null, textMedium: null, textLarge: null, textDisabled: null, textDefault: null, textBrand: null, textRed: null, textGreen: null, textGrey: null, textLightgrey: null, textWhite: null, textFilled: null, textOutlined: null, faded: null, buttonWhiteDarkDefault: null, textLink: null, buttonPrimaryDefault: null, buttonPrimaryDarkDefault: null, buttonGreyDefault: null, textPrimary: null, textTransparent: null, buttonPrimaryDisabled: null, buttonPrimaryDarkDisabled: null, buttonGreyDisabled: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { backgroundColor: require("Themes").unsafe_rawColors.BRAND_600 };
let obj1 = { backgroundColor: require("Themes").unsafe_rawColors.BRAND_600 };
createCacheKey[4] = { backgroundColor: require("Themes").unsafe_rawColors.RED_400 };
let obj2 = { backgroundColor: require("Themes").unsafe_rawColors.RED_400 };
createCacheKey[5] = { backgroundColor: require("Themes").unsafe_rawColors.RED_500 };
let obj3 = { backgroundColor: require("Themes").unsafe_rawColors.RED_500 };
createCacheKey[6] = { backgroundColor: require("Themes").colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT };
const obj4 = { backgroundColor: require("Themes").colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT };
createCacheKey[7] = { backgroundColor: require("Themes").unsafe_rawColors.GREEN_500 };
const obj5 = { backgroundColor: require("Themes").unsafe_rawColors.GREEN_500 };
createCacheKey[8] = { backgroundColor: require("Themes").unsafe_rawColors.PRIMARY_500 };
const obj6 = { backgroundColor: require("Themes").unsafe_rawColors.PRIMARY_500 };
createCacheKey[9] = { backgroundColor: require("Themes").unsafe_rawColors.PRIMARY_500 };
const obj7 = { backgroundColor: require("Themes").unsafe_rawColors.PRIMARY_500 };
createCacheKey[10] = { backgroundColor: require("Themes").unsafe_rawColors.PRIMARY_500 };
const obj9 = { backgroundColor: null };
obj9[0] = hexToRgba.hexWithOpacity(require("Themes").unsafe_rawColors.BRAND_500, 0.5);
createCacheKey[11] = obj9;
const obj10 = { backgroundColor: null };
obj10[0] = hexToRgba.hexWithOpacity(require("Themes").unsafe_rawColors.BRAND_600, 0.5);
createCacheKey[12] = obj10;
const obj11 = { backgroundColor: null };
obj11[0] = hexToRgba.hexWithOpacity(require("Themes").unsafe_rawColors.RED_400, 0.5);
createCacheKey[13] = obj11;
hexToRgba = { backgroundColor: null };
hexToRgba[0] = hexToRgba.hexWithOpacity(require("Themes").unsafe_rawColors.RED_500, 0.5);
createCacheKey[14] = hexToRgba;
const obj13 = { backgroundColor: null };
obj13[0] = hexToRgba.hexWithOpacity(require("Themes").unsafe_rawColors.GREEN_360, 0.5);
createCacheKey[15] = obj13;
hexToRgba = { backgroundColor: null };
hexToRgba[0] = hexToRgba.hexWithOpacity(require("Themes").unsafe_rawColors.GREEN_500, 0.5);
createCacheKey[16] = hexToRgba;
const obj15 = { backgroundColor: null };
obj15[0] = hexToRgba.hexWithOpacity(require("Themes").unsafe_rawColors.PRIMARY_500, 0.5);
createCacheKey[17] = obj15;
hexToRgba = { backgroundColor: null };
hexToRgba[0] = hexToRgba.hexWithOpacity(require("Themes").unsafe_rawColors.PRIMARY_500, 0.5);
createCacheKey[18] = hexToRgba;
const obj17 = { backgroundColor: null };
obj17[0] = hexToRgba.hexWithOpacity(require("Themes").unsafe_rawColors.PRIMARY_500, 0.5);
createCacheKey[19] = obj17;
createCacheKey[20] = { backgroundColor: "transparent" };
createCacheKey[21] = { backgroundColor: "transparent" };
createCacheKey[22] = { backgroundColor: "transparent" };
createCacheKey[23] = { backgroundColor: "transparent" };
hexToRgba = { backgroundColor: require("Themes").colors.WHITE };
createCacheKey[24] = hexToRgba;
const obj19 = { backgroundColor: null };
obj19[0] = hexToRgba.hexWithOpacity(require("Themes").unsafe_rawColors.WHITE, 0.5);
createCacheKey[25] = obj19;
createCacheKey[26] = {};
createCacheKey[27] = {};
createCacheKey[28] = {};
hexToRgba = { backgroundColor: "transparent", borderWidth: 1, borderStyle: "solid", borderColor: require("result").BUTTON_OUTLINED_BORDER };
createCacheKey[29] = hexToRgba;
createCacheKey[30] = { minHeight: 24 };
createCacheKey[31] = { minHeight: 32 };
createCacheKey[32] = { minHeight: 40 };
createCacheKey[33] = { minHeight: 46 };
const obj8 = { backgroundColor: require("Themes").unsafe_rawColors.PRIMARY_500 };
createCacheKey[34] = { color: require("Themes").colors.WHITE, fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, flexShrink: 1 };
createCacheKey[35] = { fontSize: 12 };
createCacheKey[36] = { fontSize: 14 };
createCacheKey[37] = { fontSize: 14 };
createCacheKey[38] = { fontSize: 20 };
createCacheKey[39] = { opacity: 0.6 };
createCacheKey[40] = { opacity: 1 };
hexToRgba = { color: require("Themes").colors.WHITE };
createCacheKey[41] = hexToRgba;
const obj21 = { color: require("Themes").colors.WHITE, fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, flexShrink: 1 };
createCacheKey[42] = { color: require("Themes").colors.WHITE };
hexToRgba = { color: require("Themes").colors.WHITE };
createCacheKey[43] = hexToRgba;
const obj23 = { color: require("Themes").colors.WHITE };
createCacheKey[44] = { color: require("Themes").colors.WHITE };
hexToRgba = { color: require("Themes").colors.WHITE };
createCacheKey[45] = hexToRgba;
const obj25 = { color: require("Themes").colors.WHITE };
createCacheKey[46] = { color: require("Themes").colors.WHITE };
createCacheKey[47] = {};
hexToRgba = { color: require("result").DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
createCacheKey[48] = hexToRgba;
createCacheKey[49] = { opacity: 0.5 };
const obj27 = { color: require("Themes").colors.WHITE };
createCacheKey[50] = { backgroundColor: require("Themes").colors.WHITE };
const obj29 = { backgroundColor: require("Themes").colors.WHITE };
createCacheKey[51] = { color: require("Themes").colors.TEXT_LINK };
hexToRgba = { backgroundColor: require("result").DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
createCacheKey[52] = hexToRgba;
const obj30 = { color: require("Themes").colors.TEXT_LINK };
createCacheKey[53] = { backgroundColor: require("result").DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
const obj32 = { backgroundColor: require("result").DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
createCacheKey[54] = { backgroundColor: require("result").DARK_PRIMARY_500_LIGHT_PRIMARY_430 };
const obj33 = { backgroundColor: require("result").DARK_PRIMARY_500_LIGHT_PRIMARY_430 };
createCacheKey[55] = { color: require("result").DARK_PRIMARY_500_LIGHT_PRIMARY_100 };
const obj34 = { color: require("result").DARK_PRIMARY_500_LIGHT_PRIMARY_100 };
createCacheKey[56] = { color: require("result").DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
const obj35 = { color: require("result").DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
createCacheKey[57] = { backgroundColor: require("result").BUTTON_PRIMARY_DISABLED_BACKGROUND };
const obj36 = { backgroundColor: require("result").BUTTON_PRIMARY_DISABLED_BACKGROUND };
createCacheKey[58] = { backgroundColor: require("result").BUTTON_PRIMARY_DISABLED_BACKGROUND };
const obj37 = { backgroundColor: require("result").BUTTON_PRIMARY_DISABLED_BACKGROUND };
createCacheKey[59] = { backgroundColor: require("result").BUTTON_GREY_DISABLED_BACKGROUND };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj39 = { FILLED: "filled", LINK: "link", OUTLINED: "outlined" };
const obj40 = { BRAND: "brand", RED: "red", GREEN: "green", PRIMARY: "primary", TRANSPARENT: "transparent", GREY: "grey", LIGHTGREY: "lightgrey", WHITE: "white", LINK: "link" };
let closure_14 = { DEFAULT: "Default", DISABLED: "Disabled" };
let obj41 = { XSMALL: "xsmall", SMALL: "small", MEDIUM: "medium", LARGE: "large" };
Button.Looks = obj39;
Button.Colors = obj40;
Button.Sizes = obj41;
const obj38 = { backgroundColor: require("result").BUTTON_GREY_DISABLED_BACKGROUND };
const result = require("ME").fileFinishedImporting("design/void/Button/native/Button.tsx");

export default Button;
export const BUTTON_CORNER_RADIUS = 3;
export const useButtonStyles = createCacheKey;
export const ButtonLooks = obj39;
export const ButtonColors = obj40;
export const ButtonSizes = obj41;
export { getButtonStyles };
export { ButtonText };
export const getRedesignVariant = function getRedesignVariant(color) {
  if (obj40.GREEN === color) {
    return "active";
  } else if (tmp.RED === color) {
    return "destructive";
  } else {
    if (tmp.GREY !== color) {
      if (tmp.LIGHTGREY !== color) {
        if (tmp.TRANSPARENT !== color) {
          if (tmp.WHITE === color) {
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
  } else if (tmp.MEDIUM === arg0) {
    return "md";
  } else {
    return "sm";
  }
};