// discord_app/design/components/Button/native/ButtonHooks.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import shared from "../../../shared.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import useToken from "../../../tokens/native/useToken.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import Icon from "../../../void/Icon/native/Icon.tsx";
import spring_spring from "../../../animation/reanimated/spring/spring.tsx";
import springPresets from "../../../animation/reanimated/spring/springPresets.tsx";
import ButtonConstants from "ButtonConstants.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
function useButtonScaleStyles(sharedValue, sharedValue1, scaleAmountInPx) {
  items = [closure_11, sharedValue1, scaleAmountInPx, spring_spring.withSpring, _mod1652.interpolate, sharedValue, springPresets.ON_PRESS_SPRING];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7] = items;
  class ButtonHooksNativeTsx3 {
    constructor() {
      obj = closure_0;
      num = 1;
      if (closure_0.get() > 0) {
        tmp = closure_1;
        diff = obj.get() - closure_1;
        num = diff / obj.get();
      }
      obj1 = { transform: null };
      obj4 = { scale: null };
      items = [1];
      items[1] = num;
      obj4.scale = closure_2(closure_3(closure_4.get(), [0, 1], items), closure_5, "animate-always");
      items1 = [];
      items1[0] = obj4;
      obj1.transform = items1;
      return obj1;
    }
  }
  let items1 = [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7];
  ButtonHooksNativeTsx3.__closure = items1;
  ButtonHooksNativeTsx3.__workletHash = 6973813995182;
  ButtonHooksNativeTsx3.__initData = tmp;
  return _mod1652.useAnimatedStyle(ButtonHooksNativeTsx3);
}
let c4 = "rgba(0,0,0,0.001)";
let createStyles = fn(5143);
const backgroundInactive = createStyles.experimental_createToken(() => "#161CBB");
createStyles = fn(5143);
const backgroundPressed = createStyles.experimental_createToken(() => "#1318A0");
createStyles = fn(5143);
const styleProperties = createStyles.createStyleProperties(getButtonColorTokens);
let closure_9 = { code: "(function ButtonHooksNativeTsx1(){let[interpolateColor,pressed,inactiveColor,pressedColor]=this.__closure;return{tintColor:interpolateColor(pressed.get(),[0,1],[inactiveColor,pressedColor])};})" };
let closure_10 = { code: "(function ButtonHooksNativeTsx2(){let[themedStyles,colors,interpolateColor,pressed]=this.__closure;var _themedStyles$backgro,_themedStyles,_themedStyles$borderC,_themedStyles2;const backgroundColor=(_themedStyles$backgro=(_themedStyles=themedStyles)===null||_themedStyles===void 0?void 0:_themedStyles.backgroundColor)!==null&&_themedStyles$backgro!==void 0?_themedStyles$backgro:[colors.backgroundInactive,colors.backgroundPressed];const borderColor=(_themedStyles$borderC=(_themedStyles2=themedStyles)===null||_themedStyles2===void 0?void 0:_themedStyles2.borderColor)!==null&&_themedStyles$borderC!==void 0?_themedStyles$borderC:[colors.borderInactive,colors.borderPressed];return{backgroundColor:interpolateColor(pressed.get(),[0,1],backgroundColor),borderColor:interpolateColor(pressed.get(),[0,1],borderColor)};})" };
let closure_11 = { code: "(function ButtonHooksNativeTsx3(){let[width,scaleAmountInPx,withSpring,interpolate,pressed,ON_PRESS_SPRING]=this.__closure;const scale=width.get()>0?(width.get()-scaleAmountInPx)/width.get():1;return{transform:[{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING,'animate-always')}]};})" };
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Button/native/ButtonHooks.native.tsx");

export const SAFE_TRANSPARENT_COLOR = "rgba(0,0,0,0.001)";
export function useProfileThemedButtonStyles(arg0) {
  _require = arg0;
  const themeContext = require("native").useThemeContext();
  const primaryColor = themeContext.primaryColor;
  theme = themeContext.theme;
  items = [theme, primaryColor, arg0];
  return noop.useMemo(() => {
    if (null == c1) {
      return null;
    } else if ("primary" === c0) {
      const WHITE = nativeDefault.unsafe_rawColors.WHITE;
      const obj4 = { base: WHITE, contrastRatio: native.WCAGContrastRatios.HighContrastText };
      const contrastingColor = native.getContrastingColor(c1, obj4);
      const darkenColorResult = native.darkenColor(contrastingColor, 0.5);
      const obj7 = { backgroundColor: null, borderColor: null, color: null };
      items = [contrastingColor, darkenColorResult];
      obj7.backgroundColor = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj7.borderColor = items1;
      obj7.color = WHITE;
      return obj7;
    } else if ("secondary" === c0) {
      const isThemeLightResult = shared.isThemeLight(c2);
      const setColorOpacity2 = native.setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const isThemeLightResult1 = shared.isThemeLight(c2);
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
    } else if ("tertiary" === c0) {
      const isThemeLightResult2 = shared.isThemeLight(c2);
      const setColorOpacity = native.setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(c1, 0.4);
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
}
export function useForegroundColor(variant) {
  return useToken.useToken(getButtonColorTokens(variant).foregroundInactive);
}
export const useButtonColorStyles = styleProperties;
export function useButtonTextColorStyles(primary) {
  _require = primary;
  const themeContext = require("native").useThemeContext();
  const primaryColor = themeContext.primaryColor;
  theme = themeContext.theme;
  items = [theme, primaryColor, primary];
  const memo = noop.useMemo(() => {
    if (null == c1) {
      return null;
    } else if ("primary" === c0) {
      const WHITE = nativeDefault.unsafe_rawColors.WHITE;
      const obj4 = { base: WHITE, contrastRatio: native.WCAGContrastRatios.HighContrastText };
      const contrastingColor = native.getContrastingColor(c1, obj4);
      const darkenColorResult = native.darkenColor(contrastingColor, 0.5);
      const obj7 = { backgroundColor: null, borderColor: null, color: null };
      items = [contrastingColor, darkenColorResult];
      obj7.backgroundColor = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj7.borderColor = items1;
      obj7.color = WHITE;
      return obj7;
    } else if ("secondary" === c0) {
      const isThemeLightResult = shared.isThemeLight(c2);
      const setColorOpacity2 = native.setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const isThemeLightResult1 = shared.isThemeLight(c2);
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
    } else if ("tertiary" === c0) {
      const isThemeLightResult2 = shared.isThemeLight(c2);
      const setColorOpacity = native.setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(c1, 0.4);
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
  const token = require("useToken").useToken(getButtonColorTokens(primary).foregroundInactive);
  if (memo != null) {
    color = memo.color;
  }
  if (color == null) {
    color = token;
  }
  return { color };
}
export function useIconTintStyles(variant, sharedValue) {
  _require = variant;
  const themeContext = require("native").useThemeContext();
  const primaryColor = themeContext.primaryColor;
  c1 = primaryColor;
  const theme = themeContext.theme;
  dependencyMap = theme;
  items = [theme, primaryColor, variant];
  const memo = noop.useMemo(() => {
    if (null == c1) {
      return null;
    } else if ("primary" === c0) {
      const WHITE = nativeDefault.unsafe_rawColors.WHITE;
      const obj4 = { base: WHITE, contrastRatio: native.WCAGContrastRatios.HighContrastText };
      const contrastingColor = native.getContrastingColor(c1, obj4);
      const darkenColorResult = native.darkenColor(contrastingColor, 0.5);
      const obj7 = { backgroundColor: null, borderColor: null, color: null };
      items = [contrastingColor, darkenColorResult];
      obj7.backgroundColor = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj7.borderColor = items1;
      obj7.color = WHITE;
      return obj7;
    } else if ("secondary" === c0) {
      const isThemeLightResult = shared.isThemeLight(c2);
      const setColorOpacity2 = native.setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const isThemeLightResult1 = shared.isThemeLight(c2);
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
    } else if ("tertiary" === c0) {
      const isThemeLightResult2 = shared.isThemeLight(c2);
      const setColorOpacity = native.setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(c1, 0.4);
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
  const token1 = require("useToken").useToken(getButtonColorTokens(variant).foregroundPressed);
  const tmpResult = require("useToken");
  const items1 = [closure_9, require("../../../../../_runtime/metro/01652__.js").interpolateColor, sharedValue, color, token1];
  _require = undefined;
  c1 = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp9, tmp10, tmp11, tmp12, tmp13] = items1;
  class ButtonHooksNativeTsx1 {
    constructor() {
      obj = { tintColor: null };
      items = [, ];
      items[0] = closure_2;
      items[1] = closure_3;
      obj.tintColor = closure_0(closure_1.get(), [0, 1], items);
      return obj;
    }
  }
  const items2 = [tmp10, tmp11, tmp12, tmp13];
  ButtonHooksNativeTsx1.__closure = items2;
  ButtonHooksNativeTsx1.__workletHash = 12606114421900;
  ButtonHooksNativeTsx1.__initData = tmp9;
  return require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(ButtonHooksNativeTsx1);
}
export function useGradientPillStyles(variant) {
  return { borderColor: styleProperties(variant).borderInactive };
}
export function useButtonPillStyles(variant, pressed) {
  _require = variant;
  const themeContext = require("native").useThemeContext();
  const primaryColor = themeContext.primaryColor;
  const theme = themeContext.theme;
  items = [theme, primaryColor, variant];
  const memo = noop.useMemo(() => {
    if (null == c1) {
      return null;
    } else if ("primary" === c0) {
      const WHITE = nativeDefault.unsafe_rawColors.WHITE;
      const obj4 = { base: WHITE, contrastRatio: native.WCAGContrastRatios.HighContrastText };
      const contrastingColor = native.getContrastingColor(c1, obj4);
      const darkenColorResult = native.darkenColor(contrastingColor, 0.5);
      const obj7 = { backgroundColor: null, borderColor: null, color: null };
      items = [contrastingColor, darkenColorResult];
      obj7.backgroundColor = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj7.borderColor = items1;
      obj7.color = WHITE;
      return obj7;
    } else if ("secondary" === c0) {
      const isThemeLightResult = shared.isThemeLight(c2);
      const setColorOpacity2 = native.setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const isThemeLightResult1 = shared.isThemeLight(c2);
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
    } else if ("tertiary" === c0) {
      const isThemeLightResult2 = shared.isThemeLight(c2);
      const setColorOpacity = native.setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(c1, 0.4);
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
  const tmp3 = styleProperties(variant);
  let items1 = [closure_10, memo, tmp3, require("../../../../../_runtime/metro/01652__.js").interpolateColor, pressed];
  _require = undefined;
  c1 = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp4, tmp5, tmp6, tmp7, tmp8] = items1;
  class ButtonHooksNativeTsx2 {
    constructor() {
      tmp = closure_0;
      backgroundColor = undefined;
      if (closure_0 != null) {
        backgroundColor = tmp.backgroundColor;
      }
      if (backgroundColor == null) {
        tmp3 = closure_1;
        items = [, ];
        ({ backgroundInactive: arr[0], backgroundPressed: arr[1] } = closure_1);
        backgroundColor = items;
      }
      borderColor = undefined;
      if (tmp != null) {
        borderColor = tmp.borderColor;
      }
      if (borderColor == null) {
        tmp5 = closure_1;
        items1 = [, ];
        ({ borderInactive: arr2[0], borderPressed: arr2[1] } = closure_1);
        borderColor = items1;
      }
      obj = { backgroundColor: closure_2(closure_3.get(), [0, 1], backgroundColor), borderColor: closure_2(closure_3.get(), [0, 1], borderColor) };
      return obj;
    }
  }
  let items2 = [tmp5, tmp6, tmp7, tmp8];
  ButtonHooksNativeTsx2.__closure = items2;
  ButtonHooksNativeTsx2.__workletHash = 15509392859051;
  ButtonHooksNativeTsx2.__initData = tmp4;
  return require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(ButtonHooksNativeTsx2);
}
export { useButtonScaleStyles };
export function useButtonPressAnimationProps(sharedValue) {
  let num = scaleAmountInPx;
  if (scaleAmountInPx === undefined) {
    num = 8;
  }
  closure_0 = onLayout;
  closure_1 = onPressIn;
  closure_2 = onPressOut;
  sharedValue = _mod1652.useSharedValue(0);
  const sharedValue1 = _mod1652.useSharedValue(0);
  const obj2 = { onPressIn: null, onPressOut: null, onLayout: null, style: useButtonScaleStyles(sharedValue, sharedValue1, num) };
  items = [sharedValue, onPressIn];
  obj2.onPressIn = noop.useCallback((arg0) => {
    const result = sharedValue.set(1);
    if (closure_1 != null) {
      tmp2(arg0);
    }
  }, items);
  const items1 = [sharedValue, onPressOut];
  obj2.onPressOut = noop.useCallback((arg0) => {
    const result = sharedValue.set(0);
    if (closure_2 != null) {
      tmp2(arg0);
    }
  }, items1);
  const items2 = [sharedValue1, onLayout];
  obj2.onLayout = noop.useCallback((nativeEvent) => {
    const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
    if (closure_0 != null) {
      tmp2(nativeEvent);
    }
  }, items2);
  return obj2;
}
export (DEFAULT_BUTTON_SIZE, arg1) => {
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
  items = [DEFAULT_BUTTON_SIZE, flag, BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER, fontScale];
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
}