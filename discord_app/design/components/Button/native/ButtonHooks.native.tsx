// discord_app/design/components/Button/native/ButtonHooks.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../tokens/native/useToken.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import shared from "../../../shared.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import Icon from "../../../void/Icon/native/Icon.tsx";
import springPresets from "../../../animation/reanimated/spring/springPresets.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let c4 = "rgba(0,0,0,0.001)";
let createStyles = fn(4560);
const backgroundInactive = createStyles.experimental_createToken(() => "#161CBB");
createStyles = fn(4560);
const backgroundPressed = createStyles.experimental_createToken(() => "#1318A0");
createStyles = {
  primary: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT,
  "experimental_welcome-secondary": nativeDefault.unsafe_rawColors.WHITE,
  secondary: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT,
  tertiary: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT,
  destructive: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT,
  "critical-primary": nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT,
  "critical-secondary": nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_TEXT_DEFAULT,
  active: nativeDefault.colors.CONTROL_CONNECTED_TEXT_DEFAULT,
  "primary-overlay": nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT,
  "secondary-overlay": nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT,
  "experimental_premium-primary": nativeDefault.colors.WHITE,
  "experimental_premium-basic": nativeDefault.colors.WHITE,
  "experimental_premium-secondary": nativeDefault.colors.TEXT_BRAND,
  "icon-only": nativeDefault.colors.CONTROL_ICON_ONLY_ICON_DEFAULT,
  expressive: nativeDefault.colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT,
};
createStyles = fn(4560);
const styleProperties = createStyles.createStyleProperties((arg0) => {
  switch (arg0) {
    case "primary":
      let obj = {
        backgroundInactive: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT,
        backgroundPressed: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE,
        borderInactive: nativeDefault.colors.CONTROL_PRIMARY_BORDER_DEFAULT,
        borderPressed: nativeDefault.colors.CONTROL_PRIMARY_BORDER_ACTIVE,
      };
      return obj;
    case "secondary":
      obj = {
        backgroundInactive: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT,
        backgroundPressed: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE,
        borderInactive: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT,
        borderPressed: nativeDefault.colors.CONTROL_SECONDARY_BORDER_ACTIVE,
      };
      return obj;
    case "tertiary":
      const obj1 = {
        backgroundInactive: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND,
        backgroundPressed: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_PRESSED_BACKGROUND,
        borderInactive: rgba0000001,
        borderPressed: rgba0000001,
      };
      return obj1;
    case "critical-primary":
      let obj2 = { backgroundInactive: null, backgroundPressed: null, borderInactive: null, borderPressed: null };
      let tmp26 = nativeDefault;
      obj2.backgroundInactive = tmp26.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT;
      let tmp27 = nativeDefault;
      obj2.backgroundPressed = tmp27.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_ACTIVE;
      let tmp28 = nativeDefault;
      obj2.borderInactive = tmp28.colors.CONTROL_CRITICAL_PRIMARY_BORDER_DEFAULT;
      let tmp29 = nativeDefault;
      obj2.borderPressed = tmp29.colors.CONTROL_CRITICAL_PRIMARY_BORDER_ACTIVE;
      return obj2;
    case "destructive":
      obj2 = { backgroundInactive: null, backgroundPressed: null, borderInactive: null, borderPressed: null };
      tmp26 = nativeDefault;
      obj2.backgroundInactive = tmp26.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT;
      tmp27 = nativeDefault;
      obj2.backgroundPressed = tmp27.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_ACTIVE;
      tmp28 = nativeDefault;
      obj2.borderInactive = tmp28.colors.CONTROL_CRITICAL_PRIMARY_BORDER_DEFAULT;
      tmp29 = nativeDefault;
      obj2.borderPressed = tmp29.colors.CONTROL_CRITICAL_PRIMARY_BORDER_ACTIVE;
      return obj2;
    case "critical-secondary":
      const obj3 = {
        backgroundInactive: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_BACKGROUND_DEFAULT,
        backgroundPressed: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_BACKGROUND_ACTIVE,
        borderInactive: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_BORDER_DEFAULT,
        borderPressed: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_BORDER_ACTIVE,
      };
      return obj3;
    case "active":
      const obj4 = {
        backgroundInactive: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT,
        backgroundPressed: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_ACTIVE,
        borderInactive: nativeDefault.colors.CONTROL_CONNECTED_BORDER_DEFAULT,
        borderPressed: nativeDefault.colors.CONTROL_CONNECTED_BORDER_ACTIVE,
      };
      return obj4;
    case "experimental_premium-secondary":
      let obj5 = { backgroundInactive: null, backgroundPressed: null, borderInactive: null, borderPressed: null };
      let tmp17 = nativeDefault;
      obj5.backgroundInactive = tmp17.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT;
      let tmp18 = nativeDefault;
      obj5.backgroundPressed = tmp18.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_ACTIVE;
      obj5.borderInactive = rgba0000001;
      obj5.borderPressed = rgba0000001;
      return obj5;
    case "primary-overlay":
      obj5 = { backgroundInactive: null, backgroundPressed: null, borderInactive: null, borderPressed: null };
      tmp17 = nativeDefault;
      obj5.backgroundInactive = tmp17.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT;
      tmp18 = nativeDefault;
      obj5.backgroundPressed = tmp18.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_ACTIVE;
      obj5.borderInactive = rgba0000001;
      obj5.borderPressed = rgba0000001;
      return obj5;
    case "secondary-overlay":
      const obj6 = {
        backgroundInactive: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
        backgroundPressed: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE,
        borderInactive: rgba0000001,
        borderPressed: rgba0000001,
      };
      return obj6;
    case "experimental_welcome-secondary":
      const obj7 = { backgroundInactive, backgroundPressed, borderInactive: rgba0000001, borderPressed: rgba0000001 };
      return obj7;
    case "experimental_premium-primary":
      let obj8 = {
        backgroundInactive: rgba0000001,
        backgroundPressed: null,
        borderInactive: null,
        borderPressed: null,
      };
      let tmp8 = nativeDefault;
      obj8.backgroundPressed = tmp8.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PRESSED_BACKGROUND;
      obj8.borderInactive = rgba0000001;
      obj8.borderPressed = rgba0000001;
      return obj8;
    case "experimental_premium-basic":
      obj8 = { backgroundInactive: rgba0000001, backgroundPressed: null, borderInactive: null, borderPressed: null };
      tmp8 = nativeDefault;
      obj8.backgroundPressed = tmp8.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PRESSED_BACKGROUND;
      obj8.borderInactive = rgba0000001;
      obj8.borderPressed = rgba0000001;
      return obj8;
    case "icon-only":
      const obj9 = {
        backgroundInactive: rgba0000001,
        backgroundPressed: nativeDefault.colors.CONTROL_ICON_ONLY_BACKGROUND_ACTIVE,
        borderInactive: rgba0000001,
        borderPressed: rgba0000001,
      };
      return obj9;
    case "expressive":
      obj = {
        backgroundInactive: rgba0000001,
        backgroundPressed: rgba0000001,
        borderInactive: rgba0000001,
        borderPressed: rgba0000001,
      };
      return obj;
    default:
  }
});
const __initData = {
  code: "function ButtonHooksNativeTsx1(){const{themedStyles,colors,interpolateColor,pressed}=this.__closure;var _themedStyles$backgro,_themedStyles,_themedStyles$borderC,_themedStyles2;const backgroundColor=(_themedStyles$backgro=(_themedStyles=themedStyles)===null||_themedStyles===void 0?void 0:_themedStyles.backgroundColor)!==null&&_themedStyles$backgro!==void 0?_themedStyles$backgro:[colors.backgroundInactive,colors.backgroundPressed];const borderColor=(_themedStyles$borderC=(_themedStyles2=themedStyles)===null||_themedStyles2===void 0?void 0:_themedStyles2.borderColor)!==null&&_themedStyles$borderC!==void 0?_themedStyles$borderC:[colors.borderInactive,colors.borderPressed];return{backgroundColor:interpolateColor(pressed.get(),[0,1],backgroundColor),borderColor:interpolateColor(pressed.get(),[0,1],borderColor)};}",
};
const __initData2 = {
  code: "function ButtonHooksNativeTsx2(){const{width,scaleAmountInPx,withSpring,interpolate,pressed,ON_PRESS_SPRING}=this.__closure;const scale=width.get()>0?(width.get()-scaleAmountInPx)/width.get():1;return{transform:[{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING,'animate-always')}]};}",
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
      const contrastingColor = native.getContrastingColor(tmp, obj);
      const darkenColorResult = native.darkenColor(contrastingColor, 0.5);
      obj = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj.backgroundColor = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj.borderColor = items1;
      obj.color = WHITE;
      return obj;
    } else if ("secondary" === tmp45) {
      const tmp20 = closure_2;
      const isThemeLightResult = shared.isThemeLight(closure_2);
      const setColorOpacity2 = native.setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result];
      const isThemeLightResult1 = shared.isThemeLight(tmp20);
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
    } else if ("tertiary" === tmp45) {
      obj = shared;
      const isThemeLightResult2 = obj.isThemeLight(closure_2);
      const setColorOpacity = native.setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(tmp, 0.4);
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
  return useToken.useToken(createStyles[variant]);
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
      const contrastingColor = native.getContrastingColor(tmp, obj);
      const darkenColorResult = native.darkenColor(contrastingColor, 0.5);
      obj = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj.backgroundColor = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj.borderColor = items1;
      obj.color = WHITE;
      return obj;
    } else if ("secondary" === tmp45) {
      const tmp20 = closure_2;
      const isThemeLightResult = shared.isThemeLight(closure_2);
      const setColorOpacity2 = native.setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result];
      const isThemeLightResult1 = shared.isThemeLight(tmp20);
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
    } else if ("tertiary" === tmp45) {
      obj = shared;
      const isThemeLightResult2 = obj.isThemeLight(closure_2);
      const setColorOpacity = native.setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(tmp, 0.4);
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
  const token = require("useToken").useToken(createStyles[active]);
  if (memo != null) {
    color = memo.color;
  }
  if (color == null) {
    color = token;
  }
  return { color };
};
export const useIconTintStyles = function useIconTintStyles(variant) {
  _require = variant;
  const themeContext = require("native").useThemeContext();
  const primaryColor = themeContext.primaryColor;
  theme = themeContext.theme;
  const items = [theme, primaryColor, variant];
  const memo = noop.useMemo(() => {
    if (null == memo) {
      return null;
    } else if ("primary" === closure_0) {
      const WHITE = nativeDefault.unsafe_rawColors.WHITE;
      let obj = { base: WHITE, contrastRatio: native.WCAGContrastRatios.HighContrastText };
      const contrastingColor = native.getContrastingColor(tmp, obj);
      const darkenColorResult = native.darkenColor(contrastingColor, 0.5);
      obj = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj.backgroundColor = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj.borderColor = items1;
      obj.color = WHITE;
      return obj;
    } else if ("secondary" === tmp45) {
      const tmp20 = closure_2;
      const isThemeLightResult = shared.isThemeLight(closure_2);
      const setColorOpacity2 = native.setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result];
      const isThemeLightResult1 = shared.isThemeLight(tmp20);
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
    } else if ("tertiary" === tmp45) {
      obj = shared;
      const isThemeLightResult2 = obj.isThemeLight(closure_2);
      const setColorOpacity = native.setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(tmp, 0.4);
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
  let tintColor;
  const token = require("useToken").useToken(createStyles[variant]);
  if (memo != null) {
    tintColor = memo.color;
  }
  if (tintColor == null) {
    tintColor = token;
  }
  return { tintColor };
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
      const contrastingColor = native.getContrastingColor(tmp, obj);
      const darkenColorResult = native.darkenColor(contrastingColor, 0.5);
      obj = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj.backgroundColor = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj.borderColor = items1;
      obj.color = WHITE;
      return obj;
    } else if ("secondary" === tmp45) {
      const tmp20 = closure_2;
      const isThemeLightResult = shared.isThemeLight(closure_2);
      const setColorOpacity2 = native.setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result];
      const isThemeLightResult1 = shared.isThemeLight(tmp20);
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
    } else if ("tertiary" === tmp45) {
      obj = shared;
      const isThemeLightResult2 = obj.isThemeLight(closure_2);
      const setColorOpacity = native.setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(tmp, 0.4);
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
  const fn = function s() {
    let backgroundColor;
    if (memo != null) {
      backgroundColor = tmp.backgroundColor;
    }
    if (backgroundColor == null) {
      const items = [,];
      ({ backgroundInactive: arr[0], backgroundPressed: arr[1] } = closure_2);
      backgroundColor = items;
    }
    let borderColor;
    if (memo != null) {
      borderColor = tmp.borderColor;
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
  fn.__workletHash = 2383933325137;
  fn.__initData = __initData;
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
  fn.__workletHash = 17256006845494;
  fn.__initData = __initData2;
  return obj.useAnimatedStyle(fn);
};
export const useButtonPressAnimationProps = function useButtonPressAnimationProps(
  sharedValue,
  scaleAmountInPx,
  onLayout,
  onPressIn,
  onPressOut,
) {
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
  fn.__workletHash = 17256006845494;
  fn.__initData = __initData2;
  obj.style = tmpResult.useAnimatedStyle(fn);
  return obj;
};
export const useIconSizeStyles = (arg0) => {
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER = arg2;
  if (arg2 === undefined) {
    BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER = require("ButtonConstants").BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
  }
  const fontScale = require("useFontScale").useFontScale();
  const items = [arg0, flag, BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER, fontScale];
  return fontScale.useMemo(() => {
    Icon;
    if ("sm" === closure_0) {
      let tmpResult = tmp(4977);
      let iconSize = tmpResult.getIconSize(tmp(4980).SMALL_BUTTON_ICON_SIZE);
    } else {
      iconSize = tmp4;
      if ("lg" === tmp5) {
        tmpResult = tmp(4977);
        iconSize = tmpResult.getIconSize(tmp(4980).LARGE_BUTTON_ICON_SIZE);
      }
    }
    let width = iconSize;
    if (flag) {
      width = iconSize;
      if (fontScale > 1) {
        const tmpResult1 = tmp(4980);
        const tmp13 = tmp(4556).TextStyleSheet[tmpResult1.getButtonDefaultTextVariant(tmpResult1, tmp5)];
        const tmp9 = tmp(1115).isAndroid() ? tmp13.fontSize : tmp13.lineHeight;
        width = iconSize;
        if (null != iconSize) {
          width = iconSize;
          if (null != tmp9) {
            const _Math = Math;
            const _Math2 = Math;
            width = Math.max(iconSize, tmp9 * Math.min(tmp8, BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER));
          }
        }
        const tmpResult2 = tmp(1115);
      }
    }
    return { width, height: width };
  }, items);
};
