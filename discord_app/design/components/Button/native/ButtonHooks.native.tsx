// === Module 5193: ButtonHooks ===

// Module 5193 (ButtonHooks)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import useToken from "useToken" /* 4458 */;
import native from "native" /* 4467 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4493 */;
import shared from "shared" /* 4608 */;
import Text_Text from "Text/Text" /* 4753 */;
import spring from "spring" /* 5186 */;
import Icon from "Icon" /* 5189 */;
import springPresets from "springPresets" /* 5190 */;
import ButtonConstants from "ButtonConstants" /* 5192 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function getButtonColorTokens(variant) {
  switch (variant) {
    case "primary":
      const obj2 = { foregroundInactive: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT, backgroundInactive: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE, borderInactive: nativeDefault.colors.CONTROL_PRIMARY_BORDER_DEFAULT, borderPressed: nativeDefault.colors.CONTROL_PRIMARY_BORDER_ACTIVE };
      return obj2;
    case "secondary":
      const obj3 = { foregroundInactive: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, backgroundInactive: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE, borderInactive: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT, borderPressed: nativeDefault.colors.CONTROL_SECONDARY_BORDER_ACTIVE };
      return obj3;
    case "toggle-off":
      const obj4 = { foregroundInactive: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, backgroundInactive: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE, borderInactive: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT, borderPressed: nativeDefault.colors.TOGGLEBUTTON_BORDER_SELECTED };
      return obj4;
    case "toggle-on":
      const obj5 = { foregroundInactive: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, backgroundInactive: nativeDefault.colors.TOGGLEBUTTON_BACKGROUND_SELECTED, backgroundPressed: nativeDefault.colors.TOGGLEBUTTON_BACKGROUND_SELECTED_ACTIVE, borderInactive: nativeDefault.colors.TOGGLEBUTTON_BORDER_SELECTED, borderPressed: nativeDefault.colors.TOGGLEBUTTON_BORDER_SELECTED };
      return obj5;
    case "toggle-icon-default-off":
      const obj6 = { foregroundInactive: nativeDefault.colors.TOGGLEBUTTON_ICON_DEFAULT, foregroundPressed: nativeDefault.colors.TOGGLEBUTTON_ICON_ACTIVE, backgroundInactive: rgba0000001, backgroundPressed: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE, borderInactive: rgba0000001, borderPressed: nativeDefault.colors.TOGGLEBUTTON_BORDER_ACTIVE };
      return obj6;
    case "toggle-icon-default-on":
      const obj7 = { foregroundInactive: nativeDefault.colors.TOGGLEBUTTON_ICON_SELECTED, foregroundPressed: nativeDefault.colors.TOGGLEBUTTON_ICON_ACTIVE, backgroundInactive: nativeDefault.colors.TOGGLEBUTTON_BACKGROUND_SELECTED, backgroundPressed: nativeDefault.colors.TOGGLEBUTTON_BACKGROUND_SELECTED_HOVER, borderInactive: nativeDefault.colors.TOGGLEBUTTON_BORDER_SELECTED, borderPressed: nativeDefault.colors.TOGGLEBUTTON_BORDER_ACTIVE };
      return obj7;
    case "toggle-icon-critical-off":
      const obj8 = { foregroundInactive: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_ICON_DEFAULT, foregroundPressed: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_ICON_ACTIVE, backgroundInactive: rgba0000001, backgroundPressed: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE, borderInactive: rgba0000001, borderPressed: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_BORDER_ACTIVE };
      return obj8;
    case "toggle-icon-critical-on":
      const obj9 = { foregroundInactive: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_ICON_SELECTED, foregroundPressed: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_ICON_ACTIVE, backgroundInactive: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_BACKGROUND_SELECTED, backgroundPressed: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_BACKGROUND_SELECTED_HOVER, borderInactive: rgba0000001, borderPressed: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_BORDER_ACTIVE };
      return obj9;
    case "toggle-icon-only-off":
      const obj10 = { foregroundInactive: nativeDefault.colors.TOGGLEBUTTON_ICON_ONLY_ICON_DEFAULT, foregroundPressed: nativeDefault.colors.TOGGLEBUTTON_ICON_ONLY_ICON_ACTIVE, backgroundInactive: rgba0000001, backgroundPressed: nativeDefault.colors.CONTROL_ICON_ONLY_BACKGROUND_ACTIVE, borderInactive: rgba0000001, borderPressed: nativeDefault.colors.CONTROL_ICON_ONLY_BORDER_ACTIVE };
      return obj10;
    case "toggle-icon-only-on":
      const obj11 = { foregroundInactive: nativeDefault.colors.TOGGLEBUTTON_ICON_ONLY_ICON_SELECTED, foregroundPressed: nativeDefault.colors.TOGGLEBUTTON_ICON_ONLY_ICON_ACTIVE, backgroundInactive: rgba0000001, backgroundPressed: nativeDefault.colors.CONTROL_ICON_ONLY_BACKGROUND_ACTIVE, borderInactive: rgba0000001, borderPressed: nativeDefault.colors.CONTROL_ICON_ONLY_BORDER_ACTIVE };
      return obj11;
    case "tertiary":
      const obj12 = { foregroundInactive: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT, foregroundPressed: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT, backgroundInactive: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, backgroundPressed: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_PRESSED_BACKGROUND, borderInactive: rgba0000001, borderPressed: rgba0000001 };
      return obj12;
    case "critical-primary":
      let obj13 = { foregroundInactive: null, foregroundPressed: null, backgroundInactive: null, backgroundPressed: null, borderInactive: null, borderPressed: null };
      let tmp33 = nativeDefault;
      obj13.foregroundInactive = tmp33.colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT;
      let tmp34 = nativeDefault;
      obj13.foregroundPressed = tmp34.colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT;
      let tmp35 = nativeDefault;
      obj13.backgroundInactive = tmp35.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT;
      let tmp36 = nativeDefault;
      obj13.backgroundPressed = tmp36.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_ACTIVE;
      let tmp37 = nativeDefault;
      obj13.borderInactive = tmp37.colors.CONTROL_CRITICAL_PRIMARY_BORDER_DEFAULT;
      let tmp38 = nativeDefault;
      obj13.borderPressed = tmp38.colors.CONTROL_CRITICAL_PRIMARY_BORDER_ACTIVE;
      return obj13;
    case "destructive":
      obj13 = { foregroundInactive: null, foregroundPressed: null, backgroundInactive: null, backgroundPressed: null, borderInactive: null, borderPressed: null };
      tmp33 = nativeDefault;
      obj13.foregroundInactive = tmp33.colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT;
      tmp34 = nativeDefault;
      obj13.foregroundPressed = tmp34.colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT;
      tmp35 = nativeDefault;
      obj13.backgroundInactive = tmp35.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT;
      tmp36 = nativeDefault;
      obj13.backgroundPressed = tmp36.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_ACTIVE;
      tmp37 = nativeDefault;
      obj13.borderInactive = tmp37.colors.CONTROL_CRITICAL_PRIMARY_BORDER_DEFAULT;
      tmp38 = nativeDefault;
      obj13.borderPressed = tmp38.colors.CONTROL_CRITICAL_PRIMARY_BORDER_ACTIVE;
      return obj13;
    case "critical-secondary":
      const obj14 = { foregroundInactive: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_TEXT_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_TEXT_DEFAULT, backgroundInactive: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_BACKGROUND_ACTIVE, borderInactive: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_BORDER_DEFAULT, borderPressed: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_BORDER_ACTIVE };
      return obj14;
    case "active":
      const obj15 = { foregroundInactive: nativeDefault.colors.CONTROL_CONNECTED_TEXT_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_CONNECTED_TEXT_DEFAULT, backgroundInactive: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_ACTIVE, borderInactive: nativeDefault.colors.CONTROL_CONNECTED_BORDER_DEFAULT, borderPressed: nativeDefault.colors.CONTROL_CONNECTED_BORDER_ACTIVE };
      return obj15;
    case "experimental_premium-secondary":
      const obj16 = { foregroundInactive: nativeDefault.colors.TEXT_BRAND, foregroundPressed: nativeDefault.colors.TEXT_BRAND, backgroundInactive: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_ACTIVE, borderInactive: rgba0000001, borderPressed: rgba0000001 };
      return obj16;
    case "primary-overlay":
      const obj17 = { foregroundInactive: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT, backgroundInactive: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_ACTIVE, borderInactive: rgba0000001, borderPressed: rgba0000001 };
      return obj17;
    case "secondary-overlay":
      const obj18 = { foregroundInactive: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, backgroundInactive: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE, borderInactive: rgba0000001, borderPressed: rgba0000001 };
      return obj18;
    case "experimental_welcome-secondary":
      const obj19 = { foregroundInactive: nativeDefault.unsafe_rawColors.WHITE, foregroundPressed: nativeDefault.unsafe_rawColors.WHITE, backgroundInactive, backgroundPressed, borderInactive: rgba0000001, borderPressed: rgba0000001 };
      return obj19;
    case "experimental_premium-primary":
      let obj20 = { foregroundInactive: null, foregroundPressed: null, backgroundInactive: null, backgroundPressed: null, borderInactive: null, borderPressed: null };
      let tmp9 = nativeDefault;
      obj20.foregroundInactive = tmp9.colors.WHITE;
      let tmp10 = nativeDefault;
      obj20.foregroundPressed = tmp10.colors.WHITE;
      obj20.backgroundInactive = rgba0000001;
      let tmp12 = nativeDefault;
      obj20.backgroundPressed = tmp12.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PRESSED_BACKGROUND;
      obj20.borderInactive = rgba0000001;
      obj20.borderPressed = rgba0000001;
      return obj20;
    case "experimental_premium-basic":
      obj20 = { foregroundInactive: null, foregroundPressed: null, backgroundInactive: null, backgroundPressed: null, borderInactive: null, borderPressed: null };
      tmp9 = nativeDefault;
      obj20.foregroundInactive = tmp9.colors.WHITE;
      tmp10 = nativeDefault;
      obj20.foregroundPressed = tmp10.colors.WHITE;
      obj20.backgroundInactive = rgba0000001;
      tmp12 = nativeDefault;
      obj20.backgroundPressed = tmp12.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PRESSED_BACKGROUND;
      obj20.borderInactive = rgba0000001;
      obj20.borderPressed = rgba0000001;
      return obj20;
    case "icon-only":
      const obj21 = { foregroundInactive: nativeDefault.colors.CONTROL_ICON_ONLY_ICON_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_ICON_ONLY_ICON_DEFAULT, backgroundInactive: rgba0000001, backgroundPressed: nativeDefault.colors.CONTROL_ICON_ONLY_BACKGROUND_ACTIVE, borderInactive: rgba0000001, borderPressed: rgba0000001 };
      return obj21;
    case "expressive":
      const obj = { foregroundInactive: nativeDefault.colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT, backgroundInactive: rgba0000001, backgroundPressed: rgba0000001, borderInactive: rgba0000001, borderPressed: rgba0000001 };
      return obj;
    default:
  }
}
let c4 = "rgba(0,0,0,0.001)";
let createStyles = fn(4757);
const backgroundInactive = createStyles.experimental_createToken(() => "#161CBB");
createStyles = fn(4757);
const backgroundPressed = createStyles.experimental_createToken(() => "#1318A0");
createStyles = fn(4757);
const styleProperties = createStyles.createStyleProperties(getButtonColorTokens);
const __initData = { code: "function ButtonHooksNativeTsx1(){const{interpolateColor,pressed,inactiveColor,pressedColor}=this.__closure;return{tintColor:interpolateColor(pressed.get(),[0,1],[inactiveColor,pressedColor])};}" };
const __initData2 = { code: "function ButtonHooksNativeTsx2(){const{themedStyles,colors,interpolateColor,pressed}=this.__closure;var _themedStyles$backgro,_themedStyles,_themedStyles$borderC,_themedStyles2;const backgroundColor=(_themedStyles$backgro=(_themedStyles=themedStyles)===null||_themedStyles===void 0?void 0:_themedStyles.backgroundColor)!==null&&_themedStyles$backgro!==void 0?_themedStyles$backgro:[colors.backgroundInactive,colors.backgroundPressed];const borderColor=(_themedStyles$borderC=(_themedStyles2=themedStyles)===null||_themedStyles2===void 0?void 0:_themedStyles2.borderColor)!==null&&_themedStyles$borderC!==void 0?_themedStyles$borderC:[colors.borderInactive,colors.borderPressed];return{backgroundColor:interpolateColor(pressed.get(),[0,1],backgroundColor),borderColor:interpolateColor(pressed.get(),[0,1],borderColor)};}" };
const __initData3 = { code: "function ButtonHooksNativeTsx3(){const{width,scaleAmountInPx,withSpring,interpolate,pressed,ON_PRESS_SPRING}=this.__closure;const scale=width.get()>0?(width.get()-scaleAmountInPx)/width.get():1;return{transform:[{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING,'animate-always')}]};}" };
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
      const obj4 = { base: WHITE, contrastRatio: native.WCAGContrastRatios.HighContrastText };
      const contrastingColor = native.getContrastingColor(memo, obj4);
      const darkenColorResult = native.darkenColor(contrastingColor, 0.5);
      const obj7 = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj7.backgroundColor = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj7.borderColor = items1;
      obj7.color = WHITE;
      return obj7;
    } else if ("secondary" === closure_0) {
      const isThemeLightResult = shared.isThemeLight(closure_2);
      const setColorOpacity2 = native.setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const isThemeLightResult1 = shared.isThemeLight(closure_2);
      const setColorOpacity3 = native.setColorOpacity;
      if (isThemeLightResult1) {
        let setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      const obj9 = { backgroundColor: null, borderColor: null, color: "Array" };
      items2[1] = setColorOpacity3Result;
      obj9.backgroundColor = items2;
      const items3 = [c4, c4];
      obj9.borderColor = items3;
      return obj9;
    } else if ("tertiary" === closure_0) {
      const isThemeLightResult2 = shared.isThemeLight(closure_2);
      const setColorOpacity = native.setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(memo, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      const obj3 = native;
      if (isThemeLightResult3) {
        let darkenColorResult1 = obj3.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj3.setColorOpacity("white", 0.2);
      }
      const obj11 = { backgroundColor: null, borderColor: null, color: "Array" };
      items4[1] = darkenColorResult1;
      obj11.backgroundColor = items4;
      const items5 = [c4, c4];
      obj11.borderColor = items5;
      return obj11;
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
      const obj4 = { base: WHITE, contrastRatio: native.WCAGContrastRatios.HighContrastText };
      const contrastingColor = native.getContrastingColor(memo, obj4);
      const darkenColorResult = native.darkenColor(contrastingColor, 0.5);
      const obj7 = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj7.backgroundColor = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj7.borderColor = items1;
      obj7.color = WHITE;
      return obj7;
    } else if ("secondary" === closure_0) {
      const isThemeLightResult = shared.isThemeLight(closure_2);
      const setColorOpacity2 = native.setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const isThemeLightResult1 = shared.isThemeLight(closure_2);
      const setColorOpacity3 = native.setColorOpacity;
      if (isThemeLightResult1) {
        let setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      const obj9 = { backgroundColor: null, borderColor: null, color: "Array" };
      items2[1] = setColorOpacity3Result;
      obj9.backgroundColor = items2;
      const items3 = [c4, c4];
      obj9.borderColor = items3;
      return obj9;
    } else if ("tertiary" === closure_0) {
      const isThemeLightResult2 = shared.isThemeLight(closure_2);
      const setColorOpacity = native.setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(memo, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      const obj3 = native;
      if (isThemeLightResult3) {
        let darkenColorResult1 = obj3.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj3.setColorOpacity("white", 0.2);
      }
      const obj11 = { backgroundColor: null, borderColor: null, color: "Array" };
      items4[1] = darkenColorResult1;
      obj11.backgroundColor = items4;
      const items5 = [c4, c4];
      obj11.borderColor = items5;
      return obj11;
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
  const themeContext = require("native").useThemeContext();
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
      const obj4 = { base: WHITE, contrastRatio: native.WCAGContrastRatios.HighContrastText };
      const contrastingColor = native.getContrastingColor(memo, obj4);
      const darkenColorResult = native.darkenColor(contrastingColor, 0.5);
      const obj7 = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj7.backgroundColor = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj7.borderColor = items1;
      obj7.color = WHITE;
      return obj7;
    } else if ("secondary" === closure_0) {
      const isThemeLightResult = shared.isThemeLight(closure_2);
      const setColorOpacity2 = native.setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const isThemeLightResult1 = shared.isThemeLight(closure_2);
      const setColorOpacity3 = native.setColorOpacity;
      if (isThemeLightResult1) {
        let setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      const obj9 = { backgroundColor: null, borderColor: null, color: "Array" };
      items2[1] = setColorOpacity3Result;
      obj9.backgroundColor = items2;
      const items3 = [c4, c4];
      obj9.borderColor = items3;
      return obj9;
    } else if ("tertiary" === closure_0) {
      const isThemeLightResult2 = shared.isThemeLight(closure_2);
      const setColorOpacity = native.setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(memo, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      const obj3 = native;
      if (isThemeLightResult3) {
        let darkenColorResult1 = obj3.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj3.setColorOpacity("white", 0.2);
      }
      const obj11 = { backgroundColor: null, borderColor: null, color: "Array" };
      items4[1] = darkenColorResult1;
      obj11.backgroundColor = items4;
      const items5 = [c4, c4];
      obj11.borderColor = items5;
      return obj11;
    } else {
      return null;
    }
  }, items);
  let obj = require("native");
  let color;
  const token = require("useToken").useToken(getButtonColorTokens(variant).foregroundInactive);
  if (memo != null) {
    color = memo.color;
  }
  if (color == null) {
    color = token;
  }
  const obj2 = require("useToken");
  token1 = require("useToken").useToken(getButtonColorTokens(variant).foregroundPressed);
  const tmpResult = require("useToken");
  const fn = function t() {
    const obj = { tintColor: null };
    const items = [color, token1];
    obj.tintColor = ReanimatedRexport.interpolateColor(sharedValue.get(), [0, 1], items);
    return obj;
  };
  const tmpResult2 = require("ReanimatedRexport");
  fn.__closure = { interpolateColor: require("ReanimatedRexport").interpolateColor, pressed: sharedValue, inactiveColor: color, pressedColor: token1 };
  fn.__workletHash = 10122935395765;
  fn.__initData = __initData;
  return tmpResult2.useAnimatedStyle(fn);
};
export const useGradientPillStyles = function useGradientPillStyles(variant) {
  return { borderColor: styleProperties(variant).borderInactive };
};
export const useButtonPillStyles = function useButtonPillStyles(variant, pressed) {
  _require = pressed;
  closure_129_0 = variant;
  const themeContext = require("native").useThemeContext();
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
      const obj4 = { base: WHITE, contrastRatio: native.WCAGContrastRatios.HighContrastText };
      const contrastingColor = native.getContrastingColor(memo, obj4);
      const darkenColorResult = native.darkenColor(contrastingColor, 0.5);
      const obj7 = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj7.backgroundColor = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj7.borderColor = items1;
      obj7.color = WHITE;
      return obj7;
    } else if ("secondary" === closure_0) {
      const isThemeLightResult = shared.isThemeLight(closure_2);
      const setColorOpacity2 = native.setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const isThemeLightResult1 = shared.isThemeLight(closure_2);
      const setColorOpacity3 = native.setColorOpacity;
      if (isThemeLightResult1) {
        let setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      const obj9 = { backgroundColor: null, borderColor: null, color: "Array" };
      items2[1] = setColorOpacity3Result;
      obj9.backgroundColor = items2;
      const items3 = [c4, c4];
      obj9.borderColor = items3;
      return obj9;
    } else if ("tertiary" === closure_0) {
      const isThemeLightResult2 = shared.isThemeLight(closure_2);
      const setColorOpacity = native.setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(memo, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      const obj3 = native;
      if (isThemeLightResult3) {
        let darkenColorResult1 = obj3.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj3.setColorOpacity("white", 0.2);
      }
      const obj11 = { backgroundColor: null, borderColor: null, color: "Array" };
      items4[1] = darkenColorResult1;
      obj11.backgroundColor = items4;
      const items5 = [c4, c4];
      obj11.borderColor = items5;
      return obj11;
    } else {
      return null;
    }
  }, items);
  const tmp3 = styleProperties(variant);
  dependencyMap = tmp3;
  let obj = require("native");
  const fn = function t() {
    let backgroundColor;
    if (memo != null) {
      backgroundColor = memo.backgroundColor;
    }
    if (backgroundColor == null) {
      const items = [, ];
      ({ backgroundInactive: arr[0], backgroundPressed: arr[1] } = closure_2);
      backgroundColor = items;
    }
    let borderColor;
    if (memo != null) {
      borderColor = memo.borderColor;
    }
    if (borderColor == null) {
      const items1 = [, ];
      ({ borderInactive: arr2[0], borderPressed: arr2[1] } = closure_2);
      borderColor = items1;
    }
    const obj = { backgroundColor: ReanimatedRexport.interpolateColor(pressed.get(), [0, 1], backgroundColor), borderColor: null };
    obj.borderColor = ReanimatedRexport.interpolateColor(pressed.get(), [0, 1], borderColor);
    return obj;
  };
  let obj2 = require("ReanimatedRexport");
  fn.__closure = { themedStyles: memo, colors: tmp3, interpolateColor: require("ReanimatedRexport").interpolateColor, pressed };
  fn.__workletHash = 6773022706866;
  fn.__initData = __initData2;
  return obj2.useAnimatedStyle(fn);
};
export const useButtonScaleStyles = function useButtonScaleStyles(pressed, width, scaleAmountInPx) {
  _require = pressed;
  closure_1 = width;
  dependencyMap = scaleAmountInPx;
  const fn = function n() {
    num = 1;
    if (sharedValue1.get() > 0) {
      const diff = sharedValue1.get() - num;
      num = diff / sharedValue1.get();
    }
    const obj2 = { transform: null };
    const obj3 = { scale: null };
    const obj4 = spring;
    const items = [1, num];
    obj3.scale = obj4.withSpring(ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], items), springPresets.ON_PRESS_SPRING, "animate-always");
    const items1 = [obj3];
    obj2.transform = items1;
    return obj2;
  };
  const obj = require("ReanimatedRexport");
  fn.__closure = { width, scaleAmountInPx, withSpring: require("spring").withSpring, interpolate: require("ReanimatedRexport").interpolate, pressed, ON_PRESS_SPRING: require("springPresets").ON_PRESS_SPRING };
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
  sharedValue = sharedValue(num[6]).useSharedValue(0);
  const obj = sharedValue(num[6]);
  const sharedValue1 = sharedValue(num[6]).useSharedValue(0);
  let obj2 = { onPressIn: null, onPressOut: null, onLayout: null, style: null };
  let items = [sharedValue, onPressIn];
  obj2.onPressIn = sharedValue.useCallback((arg0) => {
    const result = sharedValue.set(1);
    if (sharedValue1 != null) {
      tmp2(arg0);
    }
  }, items);
  let items1 = [sharedValue, onPressOut];
  obj2.onPressOut = sharedValue.useCallback((arg0) => {
    const result = sharedValue.set(0);
    if (num != null) {
      tmp2(arg0);
    }
  }, items1);
  const items2 = [sharedValue1, onLayout];
  obj2.onLayout = sharedValue.useCallback((nativeEvent) => {
    const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
    if (sharedValue != null) {
      tmp2(nativeEvent);
    }
  }, items2);
  const tmpResult = sharedValue(num[6]);
  const fn = function n() {
    num = 1;
    if (sharedValue1.get() > 0) {
      const diff = sharedValue1.get() - num;
      num = diff / sharedValue1.get();
    }
    const obj2 = { transform: null };
    const obj3 = { scale: null };
    const obj4 = spring;
    const items = [1, num];
    obj3.scale = obj4.withSpring(ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], items), springPresets.ON_PRESS_SPRING, "animate-always");
    const items1 = [obj3];
    obj2.transform = items1;
    return obj2;
  };
  const tmpResult2 = sharedValue(num[6]);
  fn.__closure = { width: sharedValue1, scaleAmountInPx: num, withSpring: sharedValue(num[7]).withSpring, interpolate: sharedValue(num[6]).interpolate, pressed: sharedValue, ON_PRESS_SPRING: sharedValue(num[8]).ON_PRESS_SPRING };
  fn.__workletHash = 11512187496215;
  fn.__initData = __initData3;
  obj2.style = tmpResult2.useAnimatedStyle(fn);
  return obj2;
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
      let iconSize = Icon.getIconSize(ButtonConstants.SMALL_BUTTON_ICON_SIZE);
      const tmpResult = Icon;
    } else {
      iconSize = tmp4;
      if ("lg" === closure_0) {
        iconSize = Icon.getIconSize(ButtonConstants.LARGE_BUTTON_ICON_SIZE);
        const tmpResult4 = Icon;
      }
    }
    let width = iconSize;
    if (flag) {
      width = iconSize;
      if (fontScale > 1) {
        const tmpResult5 = ButtonConstants;
        const tmp13 = Text_Text.TextStyleSheet[tmpResult5.getButtonDefaultTextVariant(tmpResult5, closure_0)];
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
        const tmpResult6 = PlatformUtils;
      }
    }
    return { width, height: width };
  }, items);
};