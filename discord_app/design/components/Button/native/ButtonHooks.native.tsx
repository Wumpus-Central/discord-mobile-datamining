// discord_app/design/components/Button/native/ButtonHooks.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import useToken from "../../../tokens/native/useToken.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import shared from "../../../shared.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import Icon from "../../../void/Icon/native/Icon.tsx";
import springPresets from "../../../animation/reanimated/spring/springPresets.tsx";
import ButtonConstants from "ButtonConstants.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function getButtonColorTokens(variant) {
  switch (variant) {
    case "primary":
      let obj = {
        foregroundInactive: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT,
        foregroundPressed: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT,
        backgroundInactive: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT,
        backgroundPressed: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE,
        borderInactive: nativeDefault.colors.CONTROL_PRIMARY_BORDER_DEFAULT,
        borderPressed: nativeDefault.colors.CONTROL_PRIMARY_BORDER_ACTIVE,
      };
      return obj;
    case "secondary":
      obj = {
        foregroundInactive: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT,
        foregroundPressed: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT,
        backgroundInactive: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT,
        backgroundPressed: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE,
        borderInactive: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT,
        borderPressed: nativeDefault.colors.CONTROL_SECONDARY_BORDER_ACTIVE,
      };
      return obj;
    case "toggle-off":
      const obj1 = {
        foregroundInactive: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT,
        foregroundPressed: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT,
        backgroundInactive: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT,
        backgroundPressed: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE,
        borderInactive: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT,
        borderPressed: nativeDefault.colors.TOGGLEBUTTON_BORDER_SELECTED,
      };
      return obj1;
    case "toggle-on":
      const obj2 = {
        foregroundInactive: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT,
        foregroundPressed: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT,
        backgroundInactive: nativeDefault.colors.TOGGLEBUTTON_BACKGROUND_SELECTED,
        backgroundPressed: nativeDefault.colors.TOGGLEBUTTON_BACKGROUND_SELECTED_ACTIVE,
        borderInactive: nativeDefault.colors.TOGGLEBUTTON_BORDER_SELECTED,
        borderPressed: nativeDefault.colors.TOGGLEBUTTON_BORDER_SELECTED,
      };
      return obj2;
    case "toggle-icon-default-off":
      const obj3 = {
        foregroundInactive: nativeDefault.colors.TOGGLEBUTTON_ICON_DEFAULT,
        foregroundPressed: nativeDefault.colors.TOGGLEBUTTON_ICON_ACTIVE,
        backgroundInactive: rgba0000001,
        backgroundPressed: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE,
        borderInactive: rgba0000001,
        borderPressed: nativeDefault.colors.TOGGLEBUTTON_BORDER_ACTIVE,
      };
      return obj3;
    case "toggle-icon-default-on":
      const obj4 = {
        foregroundInactive: nativeDefault.colors.TOGGLEBUTTON_ICON_SELECTED,
        foregroundPressed: nativeDefault.colors.TOGGLEBUTTON_ICON_ACTIVE,
        backgroundInactive: nativeDefault.colors.TOGGLEBUTTON_BACKGROUND_SELECTED,
        backgroundPressed: nativeDefault.colors.TOGGLEBUTTON_BACKGROUND_SELECTED_HOVER,
        borderInactive: nativeDefault.colors.TOGGLEBUTTON_BORDER_SELECTED,
        borderPressed: nativeDefault.colors.TOGGLEBUTTON_BORDER_ACTIVE,
      };
      return obj4;
    case "toggle-icon-critical-off":
      const obj5 = {
        foregroundInactive: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_ICON_DEFAULT,
        foregroundPressed: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_ICON_ACTIVE,
        backgroundInactive: rgba0000001,
        backgroundPressed: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE,
        borderInactive: rgba0000001,
        borderPressed: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_BORDER_ACTIVE,
      };
      return obj5;
    case "toggle-icon-critical-on":
      const obj6 = {
        foregroundInactive: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_ICON_SELECTED,
        foregroundPressed: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_ICON_ACTIVE,
        backgroundInactive: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_BACKGROUND_SELECTED,
        backgroundPressed: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_BACKGROUND_SELECTED_HOVER,
        borderInactive: rgba0000001,
        borderPressed: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_BORDER_ACTIVE,
      };
      return obj6;
    case "toggle-icon-only-off":
      const obj7 = {
        foregroundInactive: nativeDefault.colors.TOGGLEBUTTON_ICON_ONLY_ICON_DEFAULT,
        foregroundPressed: nativeDefault.colors.TOGGLEBUTTON_ICON_ONLY_ICON_ACTIVE,
        backgroundInactive: rgba0000001,
        backgroundPressed: nativeDefault.colors.CONTROL_ICON_ONLY_BACKGROUND_ACTIVE,
        borderInactive: rgba0000001,
        borderPressed: nativeDefault.colors.CONTROL_ICON_ONLY_BORDER_ACTIVE,
      };
      return obj7;
    case "toggle-icon-only-on":
      const obj8 = {
        foregroundInactive: nativeDefault.colors.TOGGLEBUTTON_ICON_ONLY_ICON_SELECTED,
        foregroundPressed: nativeDefault.colors.TOGGLEBUTTON_ICON_ONLY_ICON_ACTIVE,
        backgroundInactive: rgba0000001,
        backgroundPressed: nativeDefault.colors.CONTROL_ICON_ONLY_BACKGROUND_ACTIVE,
        borderInactive: rgba0000001,
        borderPressed: nativeDefault.colors.CONTROL_ICON_ONLY_BORDER_ACTIVE,
      };
      return obj8;
    case "tertiary":
      const obj9 = {
        foregroundInactive: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT,
        foregroundPressed: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT,
        backgroundInactive: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND,
        backgroundPressed: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_PRESSED_BACKGROUND,
        borderInactive: rgba0000001,
        borderPressed: rgba0000001,
      };
      return obj9;
    case "critical-primary":
      let obj10 = {
        foregroundInactive: null,
        foregroundPressed: null,
        backgroundInactive: null,
        backgroundPressed: null,
        borderInactive: null,
        borderPressed: null,
      };
      let tmp33 = nativeDefault;
      obj10.foregroundInactive = tmp33.colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT;
      let tmp34 = nativeDefault;
      obj10.foregroundPressed = tmp34.colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT;
      let tmp35 = nativeDefault;
      obj10.backgroundInactive = tmp35.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT;
      let tmp36 = nativeDefault;
      obj10.backgroundPressed = tmp36.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_ACTIVE;
      let tmp37 = nativeDefault;
      obj10.borderInactive = tmp37.colors.CONTROL_CRITICAL_PRIMARY_BORDER_DEFAULT;
      let tmp38 = nativeDefault;
      obj10.borderPressed = tmp38.colors.CONTROL_CRITICAL_PRIMARY_BORDER_ACTIVE;
      return obj10;
    case "destructive":
      obj10 = {
        foregroundInactive: null,
        foregroundPressed: null,
        backgroundInactive: null,
        backgroundPressed: null,
        borderInactive: null,
        borderPressed: null,
      };
      tmp33 = nativeDefault;
      obj10.foregroundInactive = tmp33.colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT;
      tmp34 = nativeDefault;
      obj10.foregroundPressed = tmp34.colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT;
      tmp35 = nativeDefault;
      obj10.backgroundInactive = tmp35.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT;
      tmp36 = nativeDefault;
      obj10.backgroundPressed = tmp36.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_ACTIVE;
      tmp37 = nativeDefault;
      obj10.borderInactive = tmp37.colors.CONTROL_CRITICAL_PRIMARY_BORDER_DEFAULT;
      tmp38 = nativeDefault;
      obj10.borderPressed = tmp38.colors.CONTROL_CRITICAL_PRIMARY_BORDER_ACTIVE;
      return obj10;
    case "critical-secondary":
      const obj11 = {
        foregroundInactive: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_TEXT_DEFAULT,
        foregroundPressed: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_TEXT_DEFAULT,
        backgroundInactive: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_BACKGROUND_DEFAULT,
        backgroundPressed: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_BACKGROUND_ACTIVE,
        borderInactive: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_BORDER_DEFAULT,
        borderPressed: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_BORDER_ACTIVE,
      };
      return obj11;
    case "active":
      const obj12 = {
        foregroundInactive: nativeDefault.colors.CONTROL_CONNECTED_TEXT_DEFAULT,
        foregroundPressed: nativeDefault.colors.CONTROL_CONNECTED_TEXT_DEFAULT,
        backgroundInactive: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT,
        backgroundPressed: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_ACTIVE,
        borderInactive: nativeDefault.colors.CONTROL_CONNECTED_BORDER_DEFAULT,
        borderPressed: nativeDefault.colors.CONTROL_CONNECTED_BORDER_ACTIVE,
      };
      return obj12;
    case "experimental_premium-secondary":
      const obj13 = {
        foregroundInactive: nativeDefault.colors.TEXT_BRAND,
        foregroundPressed: nativeDefault.colors.TEXT_BRAND,
        backgroundInactive: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT,
        backgroundPressed: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_ACTIVE,
        borderInactive: rgba0000001,
        borderPressed: rgba0000001,
      };
      return obj13;
    case "primary-overlay":
      const obj14 = {
        foregroundInactive: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT,
        foregroundPressed: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT,
        backgroundInactive: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT,
        backgroundPressed: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_ACTIVE,
        borderInactive: rgba0000001,
        borderPressed: rgba0000001,
      };
      return obj14;
    case "secondary-overlay":
      const obj15 = {
        foregroundInactive: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT,
        foregroundPressed: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT,
        backgroundInactive: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
        backgroundPressed: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE,
        borderInactive: rgba0000001,
        borderPressed: rgba0000001,
      };
      return obj15;
    case "experimental_welcome-secondary":
      const obj16 = {
        foregroundInactive: nativeDefault.unsafe_rawColors.WHITE,
        foregroundPressed: nativeDefault.unsafe_rawColors.WHITE,
        backgroundInactive,
        backgroundPressed,
        borderInactive: rgba0000001,
        borderPressed: rgba0000001,
      };
      return obj16;
    case "experimental_premium-primary":
      let obj17 = {
        foregroundInactive: null,
        foregroundPressed: null,
        backgroundInactive: null,
        backgroundPressed: null,
        borderInactive: null,
        borderPressed: null,
      };
      let tmp9 = nativeDefault;
      obj17.foregroundInactive = tmp9.colors.WHITE;
      let tmp10 = nativeDefault;
      obj17.foregroundPressed = tmp10.colors.WHITE;
      obj17.backgroundInactive = rgba0000001;
      let tmp12 = nativeDefault;
      obj17.backgroundPressed = tmp12.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PRESSED_BACKGROUND;
      obj17.borderInactive = rgba0000001;
      obj17.borderPressed = rgba0000001;
      return obj17;
    case "experimental_premium-basic":
      obj17 = {
        foregroundInactive: null,
        foregroundPressed: null,
        backgroundInactive: null,
        backgroundPressed: null,
        borderInactive: null,
        borderPressed: null,
      };
      tmp9 = nativeDefault;
      obj17.foregroundInactive = tmp9.colors.WHITE;
      tmp10 = nativeDefault;
      obj17.foregroundPressed = tmp10.colors.WHITE;
      obj17.backgroundInactive = rgba0000001;
      tmp12 = nativeDefault;
      obj17.backgroundPressed = tmp12.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PRESSED_BACKGROUND;
      obj17.borderInactive = rgba0000001;
      obj17.borderPressed = rgba0000001;
      return obj17;
    case "icon-only":
      const obj18 = {
        foregroundInactive: nativeDefault.colors.CONTROL_ICON_ONLY_ICON_DEFAULT,
        foregroundPressed: nativeDefault.colors.CONTROL_ICON_ONLY_ICON_DEFAULT,
        backgroundInactive: rgba0000001,
        backgroundPressed: nativeDefault.colors.CONTROL_ICON_ONLY_BACKGROUND_ACTIVE,
        borderInactive: rgba0000001,
        borderPressed: rgba0000001,
      };
      return obj18;
    case "expressive":
      obj = {
        foregroundInactive: nativeDefault.colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT,
        foregroundPressed: nativeDefault.colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT,
        backgroundInactive: rgba0000001,
        backgroundPressed: rgba0000001,
        borderInactive: rgba0000001,
        borderPressed: rgba0000001,
      };
      return obj;
    default:
  }
}
let c4 = "rgba(0,0,0,0.001)";
let createStyles = fn(4636);
const backgroundInactive = createStyles.experimental_createToken(() => "#161CBB");
createStyles = fn(4636);
const backgroundPressed = createStyles.experimental_createToken(() => "#1318A0");
createStyles = fn(4636);
const styleProperties = createStyles.createStyleProperties(getButtonColorTokens);
const __initData = {
  code: "function ButtonHooksNativeTsx1(){const{interpolateColor,pressed,inactiveColor,pressedColor}=this.__closure;return{tintColor:interpolateColor(pressed.get(),[0,1],[inactiveColor,pressedColor])};}",
};
const __initData2 = {
  code: "function ButtonHooksNativeTsx2(){const{themedStyles,colors,interpolateColor,pressed}=this.__closure;var _themedStyles$backgro,_themedStyles,_themedStyles$borderC,_themedStyles2;const backgroundColor=(_themedStyles$backgro=(_themedStyles=themedStyles)===null||_themedStyles===void 0?void 0:_themedStyles.backgroundColor)!==null&&_themedStyles$backgro!==void 0?_themedStyles$backgro:[colors.backgroundInactive,colors.backgroundPressed];const borderColor=(_themedStyles$borderC=(_themedStyles2=themedStyles)===null||_themedStyles2===void 0?void 0:_themedStyles2.borderColor)!==null&&_themedStyles$borderC!==void 0?_themedStyles$borderC:[colors.borderInactive,colors.borderPressed];return{backgroundColor:interpolateColor(pressed.get(),[0,1],backgroundColor),borderColor:interpolateColor(pressed.get(),[0,1],borderColor)};}",
};
const __initData3 = {
  code: "function ButtonHooksNativeTsx3(){const{width,scaleAmountInPx,withSpring,interpolate,pressed,ON_PRESS_SPRING}=this.__closure;const scale=width.get()>0?(width.get()-scaleAmountInPx)/width.get():1;return{transform:[{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING,'animate-always')}]};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Button/native/ButtonHooks.native.tsx");

export const SAFE_TRANSPARENT_COLOR = "rgba(0,0,0,0.001)";
export const useProfileThemedButtonStyles = function useProfileThemedButtonStyles(arg0) {
  _require = arg0;
  const themeContext = require("native").useThemeContext();
  const primaryColor = themeContext.primaryColor;
  theme = themeContext.theme;
  const items = [theme, primaryColor, arg0];
  return noop.useMemo(() => {
    if (null == memo) {
      return null;
    } else if ("primary" === closure_0) {
      const WHITE = nativeDefault.unsafe_rawColors.WHITE;
      let obj = { base: WHITE, contrastRatio: native.WCAGContrastRatios.HighContrastText };
      const contrastingColor = native.getContrastingColor(memo, obj);
      const darkenColorResult = native.darkenColor(contrastingColor, 0.5);
      obj = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj.backgroundColor = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj.borderColor = items1;
      obj.color = WHITE;
      return obj;
    } else if ("secondary" === closure_0) {
      const isThemeLightResult = shared.isThemeLight(closure_2);
      const setColorOpacity2 = native.setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result];
      const isThemeLightResult1 = shared.isThemeLight(closure_2);
      const setColorOpacity3 = native.setColorOpacity;
      if (isThemeLightResult1) {
        let setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      let obj1 = { backgroundColor: null, borderColor: null, color: "Array" };
      items2[1] = setColorOpacity3Result;
      obj1.backgroundColor = items2;
      const items3 = [c4, c4];
      obj1.borderColor = items3;
      return obj1;
    } else if ("tertiary" === closure_0) {
      obj = shared;
      const isThemeLightResult2 = obj.isThemeLight(closure_2);
      const setColorOpacity = native.setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(memo, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult];
      obj1 = shared;
      let obj2 = native;
      if (isThemeLightResult3) {
        let darkenColorResult1 = obj2.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj2.setColorOpacity("white", 0.2);
      }
      obj2 = { backgroundColor: null, borderColor: null, color: "Array" };
      items4[1] = darkenColorResult1;
      obj2.backgroundColor = items4;
      const items5 = [c4, c4];
      obj2.borderColor = items5;
      return obj2;
    } else {
      return null;
    }
  }, items);
};
export const useForegroundColor = function useForegroundColor(variant) {
  return useToken.useToken(getButtonColorTokens(variant).foregroundInactive);
};
export const useButtonColorStyles = styleProperties;
export const useButtonTextColorStyles = function useButtonTextColorStyles(active) {
  _require = active;
  const themeContext = require("native").useThemeContext();
  const primaryColor = themeContext.primaryColor;
  theme = themeContext.theme;
  const items = [theme, primaryColor, active];
  const memo = noop.useMemo(() => {
    if (null == memo) {
      return null;
    } else if ("primary" === closure_0) {
      const WHITE = nativeDefault.unsafe_rawColors.WHITE;
      let obj = { base: WHITE, contrastRatio: native.WCAGContrastRatios.HighContrastText };
      const contrastingColor = native.getContrastingColor(memo, obj);
      const darkenColorResult = native.darkenColor(contrastingColor, 0.5);
      obj = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj.backgroundColor = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj.borderColor = items1;
      obj.color = WHITE;
      return obj;
    } else if ("secondary" === closure_0) {
      const isThemeLightResult = shared.isThemeLight(closure_2);
      const setColorOpacity2 = native.setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result];
      const isThemeLightResult1 = shared.isThemeLight(closure_2);
      const setColorOpacity3 = native.setColorOpacity;
      if (isThemeLightResult1) {
        let setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      let obj1 = { backgroundColor: null, borderColor: null, color: "Array" };
      items2[1] = setColorOpacity3Result;
      obj1.backgroundColor = items2;
      const items3 = [c4, c4];
      obj1.borderColor = items3;
      return obj1;
    } else if ("tertiary" === closure_0) {
      obj = shared;
      const isThemeLightResult2 = obj.isThemeLight(closure_2);
      const setColorOpacity = native.setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(memo, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult];
      obj1 = shared;
      let obj2 = native;
      if (isThemeLightResult3) {
        let darkenColorResult1 = obj2.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj2.setColorOpacity("white", 0.2);
      }
      obj2 = { backgroundColor: null, borderColor: null, color: "Array" };
      items4[1] = darkenColorResult1;
      obj2.backgroundColor = items4;
      const items5 = [c4, c4];
      obj2.borderColor = items5;
      return obj2;
    } else {
      return null;
    }
  }, items);
  const obj = require("native");
  let color;
  const token = require("useToken").useToken(getButtonColorTokens(active).foregroundInactive);
  if (memo != null) {
    color = memo.color;
  }
  if (color == null) {
    color = token;
  }
  return { color };
};
export const useIconTintStyles = function useIconTintStyles(variant, sharedValue) {
  _require = sharedValue;
  closure_129_0 = variant;
  let obj = require("native");
  const themeContext = obj.useThemeContext();
  const primaryColor = themeContext.primaryColor;
  closure_129_1 = primaryColor;
  const theme = themeContext.theme;
  closure_129_2 = theme;
  let items = [theme, primaryColor, variant];
  const memo = noop.useMemo(() => {
    if (null == memo) {
      return null;
    } else if ("primary" === closure_0) {
      const WHITE = nativeDefault.unsafe_rawColors.WHITE;
      let obj = { base: WHITE, contrastRatio: native.WCAGContrastRatios.HighContrastText };
      const contrastingColor = native.getContrastingColor(memo, obj);
      const darkenColorResult = native.darkenColor(contrastingColor, 0.5);
      obj = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj.backgroundColor = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj.borderColor = items1;
      obj.color = WHITE;
      return obj;
    } else if ("secondary" === closure_0) {
      const isThemeLightResult = shared.isThemeLight(closure_2);
      const setColorOpacity2 = native.setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result];
      const isThemeLightResult1 = shared.isThemeLight(closure_2);
      const setColorOpacity3 = native.setColorOpacity;
      if (isThemeLightResult1) {
        let setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      let obj1 = { backgroundColor: null, borderColor: null, color: "Array" };
      items2[1] = setColorOpacity3Result;
      obj1.backgroundColor = items2;
      const items3 = [c4, c4];
      obj1.borderColor = items3;
      return obj1;
    } else if ("tertiary" === closure_0) {
      obj = shared;
      const isThemeLightResult2 = obj.isThemeLight(closure_2);
      const setColorOpacity = native.setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(memo, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult];
      obj1 = shared;
      let obj2 = native;
      if (isThemeLightResult3) {
        let darkenColorResult1 = obj2.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj2.setColorOpacity("white", 0.2);
      }
      obj2 = { backgroundColor: null, borderColor: null, color: "Array" };
      items4[1] = darkenColorResult1;
      obj2.backgroundColor = items4;
      const items5 = [c4, c4];
      obj2.borderColor = items5;
      return obj2;
    } else {
      return null;
    }
  }, items);
  let color;
  const token = require("useToken").useToken(getButtonColorTokens(variant).foregroundInactive);
  if (memo != null) {
    color = memo.color;
  }
  if (color == null) {
    color = token;
  }
  let tmpResult = tmp(tmp2[5]);
  token1 = tmpResult.useToken(getButtonColorTokens(variant).foregroundPressed);
  tmpResult = tmp(tmp2[6]);
  const fn = function t() {
    const obj = { tintColor: null };
    const items = [color, token1];
    obj.tintColor = ReanimatedRexport.interpolateColor(sharedValue.get(), [0, 1], items);
    return obj;
  };
  obj = {
    interpolateColor: tmp(tmp2[6]).interpolateColor,
    pressed: sharedValue,
    inactiveColor: color,
    pressedColor: token1,
  };
  fn.__closure = obj;
  fn.__workletHash = 10122935395765;
  fn.__initData = __initData;
  return tmpResult.useAnimatedStyle(fn);
};
export const useGradientPillStyles = function useGradientPillStyles(variant) {
  return { borderColor: styleProperties(variant).borderInactive };
};
export const useButtonPillStyles = function useButtonPillStyles(variant, pressed) {
  _require = pressed;
  closure_129_0 = variant;
  let obj = require("native");
  const themeContext = obj.useThemeContext();
  const primaryColor = themeContext.primaryColor;
  closure_129_1 = primaryColor;
  const theme = themeContext.theme;
  closure_129_2 = theme;
  let items = [theme, primaryColor, variant];
  const memo = noop.useMemo(() => {
    if (null == memo) {
      return null;
    } else if ("primary" === closure_0) {
      const WHITE = nativeDefault.unsafe_rawColors.WHITE;
      let obj = { base: WHITE, contrastRatio: native.WCAGContrastRatios.HighContrastText };
      const contrastingColor = native.getContrastingColor(memo, obj);
      const darkenColorResult = native.darkenColor(contrastingColor, 0.5);
      obj = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj.backgroundColor = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj.borderColor = items1;
      obj.color = WHITE;
      return obj;
    } else if ("secondary" === closure_0) {
      const isThemeLightResult = shared.isThemeLight(closure_2);
      const setColorOpacity2 = native.setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result];
      const isThemeLightResult1 = shared.isThemeLight(closure_2);
      const setColorOpacity3 = native.setColorOpacity;
      if (isThemeLightResult1) {
        let setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      let obj1 = { backgroundColor: null, borderColor: null, color: "Array" };
      items2[1] = setColorOpacity3Result;
      obj1.backgroundColor = items2;
      const items3 = [c4, c4];
      obj1.borderColor = items3;
      return obj1;
    } else if ("tertiary" === closure_0) {
      obj = shared;
      const isThemeLightResult2 = obj.isThemeLight(closure_2);
      const setColorOpacity = native.setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(memo, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult];
      obj1 = shared;
      let obj2 = native;
      if (isThemeLightResult3) {
        let darkenColorResult1 = obj2.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj2.setColorOpacity("white", 0.2);
      }
      obj2 = { backgroundColor: null, borderColor: null, color: "Array" };
      items4[1] = darkenColorResult1;
      obj2.backgroundColor = items4;
      const items5 = [c4, c4];
      obj2.borderColor = items5;
      return obj2;
    } else {
      return null;
    }
  }, items);
  const tmp3 = styleProperties(variant);
  dependencyMap = tmp3;
  const fn = function t() {
    let backgroundColor;
    if (memo != null) {
      backgroundColor = memo.backgroundColor;
    }
    if (backgroundColor == null) {
      const items = [,];
      ({ backgroundInactive: arr[0], backgroundPressed: arr[1] } = closure_2);
      backgroundColor = items;
    }
    let borderColor;
    if (memo != null) {
      borderColor = memo.borderColor;
    }
    if (borderColor == null) {
      const items1 = [,];
      ({ borderInactive: arr2[0], borderPressed: arr2[1] } = closure_2);
      borderColor = items1;
    }
    const obj = {
      backgroundColor: ReanimatedRexport.interpolateColor(pressed.get(), [0, 1], backgroundColor),
      borderColor: null,
    };
    obj.borderColor = ReanimatedRexport.interpolateColor(pressed.get(), [0, 1], borderColor);
    return obj;
  };
  obj = { themedStyles: memo, colors: tmp3, interpolateColor: require("ReanimatedRexport").interpolateColor, pressed };
  fn.__closure = obj;
  fn.__workletHash = 6773022706866;
  fn.__initData = __initData2;
  return require("ReanimatedRexport").useAnimatedStyle(fn);
};
export const useButtonScaleStyles = function useButtonScaleStyles(pressed, width, scaleAmountInPx) {
  _require = pressed;
  closure_1 = width;
  dependencyMap = scaleAmountInPx;
  require("ReanimatedRexport");
  const fn = function n() {
    let obj = sharedValue1;
    num = 1;
    if (sharedValue1.get() > 0) {
      const diff = obj.get() - num;
      num = diff / obj.get();
    }
    obj = { transform: null };
    obj = { scale: null };
    const obj4 = spring;
    const items = [1, num];
    obj.scale = obj4.withSpring(
      ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], items),
      springPresets.ON_PRESS_SPRING,
      "animate-always",
    );
    const items1 = [obj];
    obj.transform = items1;
    return obj;
  };
  const obj = {
    width,
    scaleAmountInPx,
    withSpring: require("spring").withSpring,
    interpolate: require("ReanimatedRexport").interpolate,
    pressed,
    ON_PRESS_SPRING: require("springPresets").ON_PRESS_SPRING,
  };
  fn.__closure = obj;
  fn.__workletHash = 11512187496215;
  fn.__initData = __initData3;
  return obj.useAnimatedStyle(fn);
};
export const useButtonPressAnimationProps = function useButtonPressAnimationProps(sharedValue) {
  let num = scaleAmountInPx;
  if (scaleAmountInPx === undefined) {
    num = 8;
  }
  num = onPressOut;
  sharedValue = undefined;
  let obj = sharedValue(num[6]);
  sharedValue = obj.useSharedValue(0);
  let tmpResult = tmp(tmp2[6]);
  const sharedValue1 = tmpResult.useSharedValue(0);
  obj = { onPressIn: null, onPressOut: null, onLayout: null, style: null };
  let items = [sharedValue, onPressIn];
  obj.onPressIn = sharedValue.useCallback((arg0) => {
    const result = sharedValue.set(1);
    if (sharedValue1 != null) {
      tmp2(arg0);
    }
  }, items);
  let items1 = [sharedValue, onPressOut];
  obj.onPressOut = sharedValue.useCallback((arg0) => {
    const result = sharedValue.set(0);
    if (num != null) {
      tmp2(arg0);
    }
  }, items1);
  const items2 = [sharedValue1, onLayout];
  obj.onLayout = sharedValue.useCallback((nativeEvent) => {
    const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
    if (sharedValue != null) {
      tmp2(nativeEvent);
    }
  }, items2);
  tmpResult = tmp(tmp2[6]);
  const fn = function n() {
    let obj = sharedValue1;
    num = 1;
    if (sharedValue1.get() > 0) {
      const diff = obj.get() - num;
      num = diff / obj.get();
    }
    obj = { transform: null };
    obj = { scale: null };
    const obj4 = spring;
    const items = [1, num];
    obj.scale = obj4.withSpring(
      ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], items),
      springPresets.ON_PRESS_SPRING,
      "animate-always",
    );
    const items1 = [obj];
    obj.transform = items1;
    return obj;
  };
  obj = {
    width: sharedValue1,
    scaleAmountInPx: num,
    withSpring: tmp(tmp2[7]).withSpring,
    interpolate: tmp(tmp2[6]).interpolate,
    pressed: sharedValue,
    ON_PRESS_SPRING: tmp(tmp2[8]).ON_PRESS_SPRING,
  };
  fn.__closure = obj;
  fn.__workletHash = 11512187496215;
  fn.__initData = __initData3;
  obj.style = tmpResult.useAnimatedStyle(fn);
  return obj;
};
export const useIconSizeStyles = (DEFAULT_BUTTON_SIZE, arg1) => {
  _require = DEFAULT_BUTTON_SIZE;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER = maxFontSizeMultiplier;
  if (maxFontSizeMultiplier === undefined) {
    BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER = require("ButtonConstants").BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
  }
  const fontScale = require("useFontScale").useFontScale();
  const items = [DEFAULT_BUTTON_SIZE, flag, BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER, fontScale];
  return fontScale.useMemo(() => {
    Icon;
    if ("sm" === closure_0) {
      let tmpResult = Icon;
      let iconSize = tmpResult.getIconSize(ButtonConstants.SMALL_BUTTON_ICON_SIZE);
    } else {
      iconSize = tmp4;
      if ("lg" === closure_0) {
        tmpResult = Icon;
        iconSize = tmpResult.getIconSize(ButtonConstants.LARGE_BUTTON_ICON_SIZE);
      }
    }
    let width = iconSize;
    if (flag) {
      width = iconSize;
      if (fontScale > 1) {
        const tmpResult1 = ButtonConstants;
        const tmp13 = Text_Text.TextStyleSheet[tmpResult1.getButtonDefaultTextVariant(tmpResult1, closure_0)];
        const tmp9 = PlatformUtils.isAndroid() ? tmp13.fontSize : tmp13.lineHeight;
        width = iconSize;
        if (null != iconSize) {
          width = iconSize;
          if (null != tmp9) {
            const _Math = Math;
            const _Math2 = Math;
            width = Math.max(iconSize, tmp9 * Math.min(tmp8, BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER));
          }
        }
        const tmpResult2 = PlatformUtils;
      }
    }
    return { width, height: width };
  }, items);
};
