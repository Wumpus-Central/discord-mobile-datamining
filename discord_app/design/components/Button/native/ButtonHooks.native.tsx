// discord_app/design/components/Button/native/ButtonHooks.native.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import map from "../../../tokens/native/useToken.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import createCacheKey from "../../Styles/native/createStyles.tsx";
import { ManaContext } from "../../../../../discord_common/js/packages/design/native.tsx";
import { ReanimatedRexport } from "../../../../modules/reanimated/ReanimatedRexport.tsx";

require = arg1;
let c4 = "rgba(0,0,0,0.001)";
let closure_5 = createCacheKey.experimental_createToken(() => "#161CBB");
let closure_6 = createCacheKey.experimental_createToken(() => "#1318A0");
createCacheKey = { primary: ThemesDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT, "experimental_welcome-secondary": ThemesDefault.unsafe_rawColors.WHITE, secondary: ThemesDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, tertiary: ThemesDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT, destructive: ThemesDefault.colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT, "critical-primary": ThemesDefault.colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT, "critical-secondary": ThemesDefault.colors.CONTROL_CRITICAL_SECONDARY_TEXT_DEFAULT, active: ThemesDefault.colors.CONTROL_CONNECTED_TEXT_DEFAULT, "primary-overlay": ThemesDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT, "secondary-overlay": ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, "experimental_premium-primary": ThemesDefault.colors.WHITE, "experimental_premium-basic": ThemesDefault.colors.WHITE, "experimental_premium-secondary": ThemesDefault.colors.TEXT_BRAND, "icon-only": ThemesDefault.colors.CONTROL_ICON_ONLY_ICON_DEFAULT, expressive: ThemesDefault.colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT };
const styleProperties = createCacheKey.createStyleProperties((arg0) => {

});
let closure_9 = { code: "function ButtonHooksNativeTsx1(){const{themedStyles,colors,interpolateColor,pressed}=this.__closure;var _themedStyles$backgro,_themedStyles,_themedStyles$borderC,_themedStyles2;const backgroundColor=(_themedStyles$backgro=(_themedStyles=themedStyles)===null||_themedStyles===void 0?void 0:_themedStyles.backgroundColor)!==null&&_themedStyles$backgro!==void 0?_themedStyles$backgro:[colors.backgroundInactive,colors.backgroundPressed];const borderColor=(_themedStyles$borderC=(_themedStyles2=themedStyles)===null||_themedStyles2===void 0?void 0:_themedStyles2.borderColor)!==null&&_themedStyles$borderC!==void 0?_themedStyles$borderC:[colors.borderInactive,colors.borderPressed];return{backgroundColor:interpolateColor(pressed.get(),[0,1],backgroundColor),borderColor:interpolateColor(pressed.get(),[0,1],borderColor)};}" };
let closure_10 = { code: "function ButtonHooksNativeTsx2(){const{width,scaleAmountInPx,withSpring,interpolate,pressed,ON_PRESS_SPRING}=this.__closure;const scale=width.get()>0?(width.get()-scaleAmountInPx)/width.get():1;return{transform:[{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING,'animate-always')}]};}" };
let result = require("set").fileFinishedImporting("design/components/Button/native/ButtonHooks.native.tsx");

export const SAFE_TRANSPARENT_COLOR = "rgba(0,0,0,0.001)";
export const useProfileThemedButtonStyles = function useProfileThemedButtonStyles(arg0) {
  const _require = arg0;
  const themeContext = _require(theme[2]).useThemeContext();
  const primaryColor = themeContext.primaryColor;
  theme = themeContext.theme;
  const items = [theme, primaryColor, arg0];
  return React.useMemo(() => {
    if (null == memo) {
      return null;
    } else if ("primary" === variant) {
      const WHITE = memo(712).unsafe_rawColors.WHITE;
      let obj = { base: null, contrastRatio: null };
      obj[0] = WHITE;
      obj[1] = variant(4172).WCAGContrastRatios.HighContrastText;
      const contrastingColor = variant(4172).getContrastingColor(tmp, obj);
      const obj8 = variant(4172);
      const darkenColorResult = variant(4172).darkenColor(contrastingColor, 0.5);
      obj = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj[0] = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj[1] = items1;
      obj[2] = WHITE;
      return obj;
    } else if ("secondary" === tmp45) {
      const obj5 = variant(1363);
      const tmp20 = dependencyMap;
      const isThemeLightResult = variant(1363).isThemeLight(dependencyMap);
      const setColorOpacity2 = variant(4172).setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const tmp24 = variant(4172);
      const obj6 = variant(1363);
      const isThemeLightResult1 = variant(1363).isThemeLight(tmp20);
      const setColorOpacity3 = variant(4172).setColorOpacity;
      if (isThemeLightResult1) {
        let setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      obj1 = { backgroundColor: null, borderColor: null, color: "Array" };
      items2[1] = setColorOpacity3Result;
      obj1[0] = items2;
      const items3 = [closure_1_4, closure_1_4];
      obj1[1] = items3;
      return obj1;
    } else if ("tertiary" === tmp45) {
      obj = variant(1363);
      const isThemeLightResult2 = obj.isThemeLight(dependencyMap);
      const tmp4 = dependencyMap;
      const setColorOpacity = variant(4172).setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(tmp, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      obj1 = variant(1363);
      const tmp8 = variant(4172);
      let obj2 = variant(4172);
      if (isThemeLightResult3) {
        let darkenColorResult1 = obj2.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj2.setColorOpacity("white", 0.2);
      }
      obj2 = { backgroundColor: null, borderColor: null, color: "Array" };
      items4[1] = darkenColorResult1;
      obj2[0] = items4;
      const items5 = [closure_1_4, closure_1_4];
      obj2[1] = items5;
      return obj2;
    } else {
      return null;
    }
  }, items);
};
export const useForegroundColor = function useForegroundColor(variant) {
  return map.useToken(createCacheKey[variant]);
};
export const useButtonColorStyles = styleProperties;
export const useButtonTextColorStyles = function useButtonTextColorStyles(style) {
  const _require = style;
  const themeContext = _require(theme[2]).useThemeContext();
  const primaryColor = themeContext.primaryColor;
  theme = themeContext.theme;
  const items = [theme, primaryColor, style];
  const memo = React.useMemo(() => {
    if (null == memo) {
      return null;
    } else if ("primary" === variant) {
      const WHITE = memo(712).unsafe_rawColors.WHITE;
      let obj = { base: null, contrastRatio: null };
      obj[0] = WHITE;
      obj[1] = variant(4172).WCAGContrastRatios.HighContrastText;
      const contrastingColor = variant(4172).getContrastingColor(tmp, obj);
      const obj8 = variant(4172);
      const darkenColorResult = variant(4172).darkenColor(contrastingColor, 0.5);
      obj = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj[0] = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj[1] = items1;
      obj[2] = WHITE;
      return obj;
    } else if ("secondary" === tmp45) {
      const obj5 = variant(1363);
      const tmp20 = dependencyMap;
      const isThemeLightResult = variant(1363).isThemeLight(dependencyMap);
      const setColorOpacity2 = variant(4172).setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const tmp24 = variant(4172);
      const obj6 = variant(1363);
      const isThemeLightResult1 = variant(1363).isThemeLight(tmp20);
      const setColorOpacity3 = variant(4172).setColorOpacity;
      if (isThemeLightResult1) {
        let setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      obj1 = { backgroundColor: null, borderColor: null, color: "Array" };
      items2[1] = setColorOpacity3Result;
      obj1[0] = items2;
      const items3 = [closure_1_4, closure_1_4];
      obj1[1] = items3;
      return obj1;
    } else if ("tertiary" === tmp45) {
      obj = variant(1363);
      const isThemeLightResult2 = obj.isThemeLight(dependencyMap);
      const tmp4 = dependencyMap;
      const setColorOpacity = variant(4172).setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(tmp, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      obj1 = variant(1363);
      const tmp8 = variant(4172);
      let obj2 = variant(4172);
      if (isThemeLightResult3) {
        let darkenColorResult1 = obj2.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj2.setColorOpacity("white", 0.2);
      }
      obj2 = { backgroundColor: null, borderColor: null, color: "Array" };
      items4[1] = darkenColorResult1;
      obj2[0] = items4;
      const items5 = [closure_1_4, closure_1_4];
      obj2[1] = items5;
      return obj2;
    } else {
      return null;
    }
  }, items);
  const obj = _require(theme[2]);
  let color;
  const token = _require(theme[5]).useToken(createCacheKey[style]);
  if (memo != null) {
    color = memo.color;
  }
  if (color == null) {
    color = token;
  }
  return { color };
};
export const useIconTintStyles = function useIconTintStyles(arg0) {
  const _require = arg0;
  const themeContext = _require(theme[2]).useThemeContext();
  const primaryColor = themeContext.primaryColor;
  theme = themeContext.theme;
  const items = [theme, primaryColor, arg0];
  const memo = React.useMemo(() => {
    if (null == memo) {
      return null;
    } else if ("primary" === variant) {
      const WHITE = memo(712).unsafe_rawColors.WHITE;
      let obj = { base: null, contrastRatio: null };
      obj[0] = WHITE;
      obj[1] = variant(4172).WCAGContrastRatios.HighContrastText;
      const contrastingColor = variant(4172).getContrastingColor(tmp, obj);
      const obj8 = variant(4172);
      const darkenColorResult = variant(4172).darkenColor(contrastingColor, 0.5);
      obj = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj[0] = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj[1] = items1;
      obj[2] = WHITE;
      return obj;
    } else if ("secondary" === tmp45) {
      const obj5 = variant(1363);
      const tmp20 = dependencyMap;
      const isThemeLightResult = variant(1363).isThemeLight(dependencyMap);
      const setColorOpacity2 = variant(4172).setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const tmp24 = variant(4172);
      const obj6 = variant(1363);
      const isThemeLightResult1 = variant(1363).isThemeLight(tmp20);
      const setColorOpacity3 = variant(4172).setColorOpacity;
      if (isThemeLightResult1) {
        let setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      obj1 = { backgroundColor: null, borderColor: null, color: "Array" };
      items2[1] = setColorOpacity3Result;
      obj1[0] = items2;
      const items3 = [closure_1_4, closure_1_4];
      obj1[1] = items3;
      return obj1;
    } else if ("tertiary" === tmp45) {
      obj = variant(1363);
      const isThemeLightResult2 = obj.isThemeLight(dependencyMap);
      const tmp4 = dependencyMap;
      const setColorOpacity = variant(4172).setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(tmp, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      obj1 = variant(1363);
      const tmp8 = variant(4172);
      let obj2 = variant(4172);
      if (isThemeLightResult3) {
        let darkenColorResult1 = obj2.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj2.setColorOpacity("white", 0.2);
      }
      obj2 = { backgroundColor: null, borderColor: null, color: "Array" };
      items4[1] = darkenColorResult1;
      obj2[0] = items4;
      const items5 = [closure_1_4, closure_1_4];
      obj2[1] = items5;
      return obj2;
    } else {
      return null;
    }
  }, items);
  const obj = _require(theme[2]);
  let tintColor;
  const token = _require(theme[5]).useToken(createCacheKey[arg0]);
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
  const _require = variant;
  let obj = ManaContext;
  const themeContext = obj.useThemeContext();
  const primaryColor = themeContext.primaryColor;
  let memo = primaryColor;
  const theme = themeContext.theme;
  dependencyMap = theme;
  let items = [theme, primaryColor, variant];
  memo = React.useMemo(() => {
    if (null == memo) {
      return null;
    } else if ("primary" === variant) {
      const WHITE = memo(712).unsafe_rawColors.WHITE;
      let obj = { base: null, contrastRatio: null };
      obj[0] = WHITE;
      obj[1] = variant(4172).WCAGContrastRatios.HighContrastText;
      const contrastingColor = variant(4172).getContrastingColor(tmp, obj);
      const obj8 = variant(4172);
      const darkenColorResult = variant(4172).darkenColor(contrastingColor, 0.5);
      obj = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj[0] = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj[1] = items1;
      obj[2] = WHITE;
      return obj;
    } else if ("secondary" === tmp45) {
      const obj5 = variant(1363);
      const tmp20 = dependencyMap;
      const isThemeLightResult = variant(1363).isThemeLight(dependencyMap);
      const setColorOpacity2 = variant(4172).setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const tmp24 = variant(4172);
      const obj6 = variant(1363);
      const isThemeLightResult1 = variant(1363).isThemeLight(tmp20);
      const setColorOpacity3 = variant(4172).setColorOpacity;
      if (isThemeLightResult1) {
        let setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      obj1 = { backgroundColor: null, borderColor: null, color: "Array" };
      items2[1] = setColorOpacity3Result;
      obj1[0] = items2;
      const items3 = [closure_1_4, closure_1_4];
      obj1[1] = items3;
      return obj1;
    } else if ("tertiary" === tmp45) {
      obj = variant(1363);
      const isThemeLightResult2 = obj.isThemeLight(dependencyMap);
      const tmp4 = dependencyMap;
      const setColorOpacity = variant(4172).setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(tmp, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      obj1 = variant(1363);
      const tmp8 = variant(4172);
      let obj2 = variant(4172);
      if (isThemeLightResult3) {
        let darkenColorResult1 = obj2.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj2.setColorOpacity("white", 0.2);
      }
      obj2 = { backgroundColor: null, borderColor: null, color: "Array" };
      items4[1] = darkenColorResult1;
      obj2[0] = items4;
      const items5 = [closure_1_4, closure_1_4];
      obj2[1] = items5;
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
      const items = [, ];
      ({ backgroundInactive: arr[0], backgroundPressed: arr[1] } = dependencyMap);
      backgroundColor = items;
    }
    let borderColor;
    if (memo != null) {
      borderColor = tmp.borderColor;
    }
    if (borderColor == null) {
      const items1 = [, ];
      ({ borderInactive: arr2[0], borderPressed: arr2[1] } = dependencyMap);
      borderColor = items1;
    }
    const obj = { backgroundColor: variant(4184).interpolateColor(variant.get(), [0, 1], backgroundColor), borderColor: null };
    const obj2 = variant(4184);
    obj[1] = variant(4184).interpolateColor(variant.get(), [0, 1], borderColor);
    return obj;
  };
  obj = { themedStyles: memo, colors: tmp3, interpolateColor: require("../../../../modules/reanimated/ReanimatedRexport.tsx").interpolateColor, pressed };
  fn.__closure = obj;
  fn.__workletHash = 2383933325137;
  fn.__initData = closure_9;
  return require("../../../../modules/reanimated/ReanimatedRexport.tsx").useAnimatedStyle(fn);
};
export const useButtonScaleStyles = function useButtonScaleStyles(pressed, width, scaleAmountInPx) {
  const _require = pressed;
  closure_1 = width;
  dependencyMap = scaleAmountInPx;
  let obj = ReanimatedRexport;
  const fn = function n() {
    let obj = sharedValue1;
    num = 1;
    if (sharedValue1.get() > 0) {
      const diff = obj.get() - num;
      num = diff / obj.get();
    }
    obj = { transform: null };
    obj = { scale: null };
    const obj4 = sharedValue(num[7]);
    const items = [1, num];
    const obj5 = sharedValue(num[6]);
    obj[0] = obj4.withSpring(sharedValue(num[6]).interpolate(sharedValue.get(), [0, 1], items), sharedValue(num[8]).ON_PRESS_SPRING, "animate-always");
    const items1 = [obj];
    obj[0] = items1;
    return obj;
  };
  obj = { width, scaleAmountInPx, withSpring: require("../../../animation/reanimated/spring/spring.tsx").withSpring, interpolate: require("../../../../modules/reanimated/ReanimatedRexport.tsx").interpolate, pressed, ON_PRESS_SPRING: require("../../../animation/reanimated/spring/springPresets.tsx").ON_PRESS_SPRING };
  fn.__closure = obj;
  fn.__workletHash = 17256006845494;
  fn.__initData = closure_10;
  return obj.useAnimatedStyle(fn);
};
export const useButtonPressAnimationProps = function useButtonPressAnimationProps(sharedValue, scaleAmountInPx, onLayout, onPressIn, onPressOut) {
  let num = scaleAmountInPx;
  if (scaleAmountInPx === undefined) {
    num = 8;
  }
  sharedValue = onLayout;
  let sharedValue1 = onPressIn;
  num = onPressOut;
  sharedValue = undefined;
  sharedValue1 = undefined;
  let obj = sharedValue(4184);
  sharedValue = obj.useSharedValue(0);
  let tmpResult = tmp(4184);
  sharedValue1 = tmpResult.useSharedValue(0);
  obj = {
    onPressIn: sharedValue.useCallback((arg0) => {
      const result = sharedValue.set(1);
      if (sharedValue1 != null) {
        tmp2(arg0);
      }
    }, items),
    onPressOut: sharedValue.useCallback((arg0) => {
      const result = sharedValue.set(0);
      if (num != null) {
        tmp2(arg0);
      }
    }, items1),
    onLayout: sharedValue.useCallback((nativeEvent) => {
      const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
      if (sharedValue != null) {
        tmp2(nativeEvent);
      }
    }, items2),
    style: null
  };
  items = [sharedValue, onPressIn];
  items1 = [sharedValue, onPressOut];
  items2 = [sharedValue1, onLayout];
  tmpResult = tmp(4184);
  const fn = function n() {
    let obj = sharedValue1;
    num = 1;
    if (sharedValue1.get() > 0) {
      const diff = obj.get() - num;
      num = diff / obj.get();
    }
    obj = { transform: null };
    obj = { scale: null };
    const obj4 = sharedValue(num[7]);
    const items = [1, num];
    const obj5 = sharedValue(num[6]);
    obj[0] = obj4.withSpring(sharedValue(num[6]).interpolate(sharedValue.get(), [0, 1], items), sharedValue(num[8]).ON_PRESS_SPRING, "animate-always");
    const items1 = [obj];
    obj[0] = items1;
    return obj;
  };
  obj = { width: sharedValue1, scaleAmountInPx: num, withSpring: tmp(4878).withSpring, interpolate: tmp(4184).interpolate, pressed: sharedValue, ON_PRESS_SPRING: tmp(4882).ON_PRESS_SPRING };
  fn.__closure = obj;
  fn.__workletHash = 17256006845494;
  fn.__initData = closure_10;
  obj[3] = tmpResult.useAnimatedStyle(fn);
  return obj;
};
export const useIconSizeStyles = (arg0) => {
  const _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER = arg2;
  if (arg2 === undefined) {
    BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER = _require(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[9]).BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
  }
  let fontScale;
  fontScale = _require(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[10]).useFontScale();
  const items = [arg0, flag, BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER, fontScale];
  return fontScale.useMemo(() => {
    callback(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[11]);
    if ("sm" === callback) {
      let tmpResult = tmp(tmp2[11]);
      let iconSize = tmpResult.getIconSize(tmp(tmp2[9]).SMALL_BUTTON_ICON_SIZE);
    } else {
      iconSize = tmp4;
      if ("lg" === tmp5) {
        tmpResult = tmp(tmp2[11]);
        iconSize = tmpResult.getIconSize(tmp(tmp2[9]).LARGE_BUTTON_ICON_SIZE);
      }
    }
    let width = iconSize;
    if (flag) {
      width = iconSize;
      if (fontScale > 1) {
        const tmpResult1 = tmp(tmp2[9]);
        const tmp13 = tmp(tmp2[12]).TextStyleSheet[tmpResult1.getButtonDefaultTextVariant(tmpResult1, tmp5)];
        const tmp9 = tmp(tmp2[13]).isAndroid() ? tmp13.fontSize : tmp13.lineHeight;
        width = iconSize;
        if (null != iconSize) {
          width = iconSize;
          if (null != tmp9) {
            const _Math = Math;
            const _Math2 = Math;
            width = Math.max(iconSize, tmp9 * Math.min(tmp8, BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER));
          }
        }
        const tmpResult2 = tmp(tmp2[13]);
      }
    }
    return { width, height: width };
  }, items);
};