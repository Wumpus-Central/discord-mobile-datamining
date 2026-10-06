// === Module 5608: ButtonHooks ===

// Module 5608 (ButtonHooks)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import useToken from "useToken" /* 4586 */;
import native from "native" /* 4595 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import shared from "shared" /* 4735 */;
import Text_Text from "Text/Text" /* 4892 */;
import Icon from "Icon" /* 5603 */;
import spring from "spring" /* 5604 */;
import springPresets from "springPresets" /* 5605 */;
import ButtonConstants from "ButtonConstants" /* 5607 */;
import useFontScale from "useFontScale" /* 5609 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

function getButtonColorTokens(arg0) {
  let obj13;
  let obj20;
  let tmp10;
  let tmp12;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp9;
  switch (arg0) {
    case "primary":
    {
      const obj2 = { foregroundInactive: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT, backgroundInactive: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE, borderInactive: nativeDefault.colors.CONTROL_PRIMARY_BORDER_DEFAULT, borderPressed: nativeDefault.colors.CONTROL_PRIMARY_BORDER_ACTIVE };
      return obj2;
    }
    case "secondary":
    {
      const obj3 = { foregroundInactive: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, backgroundInactive: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE, borderInactive: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT, borderPressed: nativeDefault.colors.CONTROL_SECONDARY_BORDER_ACTIVE };
      return obj3;
    }
    case "toggle-off":
    {
      const obj4 = { foregroundInactive: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, backgroundInactive: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE, borderInactive: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT, borderPressed: nativeDefault.colors.TOGGLEBUTTON_BORDER_SELECTED };
      return obj4;
    }
    case "toggle-on":
    {
      const obj5 = { foregroundInactive: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, backgroundInactive: nativeDefault.colors.TOGGLEBUTTON_BACKGROUND_SELECTED, backgroundPressed: nativeDefault.colors.TOGGLEBUTTON_BACKGROUND_SELECTED_ACTIVE, borderInactive: nativeDefault.colors.TOGGLEBUTTON_BORDER_SELECTED, borderPressed: nativeDefault.colors.TOGGLEBUTTON_BORDER_SELECTED };
      return obj5;
    }
    case "toggle-icon-default-off":
    {
      const obj6 = { foregroundInactive: nativeDefault.colors.TOGGLEBUTTON_ICON_DEFAULT, foregroundPressed: nativeDefault.colors.TOGGLEBUTTON_ICON_ACTIVE, backgroundInactive: borderPressed, backgroundPressed: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE, borderInactive: borderPressed, borderPressed: nativeDefault.colors.TOGGLEBUTTON_BORDER_ACTIVE };
      return obj6;
    }
    case "toggle-icon-default-on":
    {
      const obj7 = { foregroundInactive: nativeDefault.colors.TOGGLEBUTTON_ICON_SELECTED, foregroundPressed: nativeDefault.colors.TOGGLEBUTTON_ICON_ACTIVE, backgroundInactive: nativeDefault.colors.TOGGLEBUTTON_BACKGROUND_SELECTED, backgroundPressed: nativeDefault.colors.TOGGLEBUTTON_BACKGROUND_SELECTED_HOVER, borderInactive: nativeDefault.colors.TOGGLEBUTTON_BORDER_SELECTED, borderPressed: nativeDefault.colors.TOGGLEBUTTON_BORDER_ACTIVE };
      return obj7;
    }
    case "toggle-icon-critical-off":
    {
      const obj8 = { foregroundInactive: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_ICON_DEFAULT, foregroundPressed: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_ICON_ACTIVE, backgroundInactive: borderPressed, backgroundPressed: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE, borderInactive: borderPressed, borderPressed: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_BORDER_ACTIVE };
      return obj8;
    }
    case "toggle-icon-critical-on":
    {
      const obj9 = { foregroundInactive: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_ICON_SELECTED, foregroundPressed: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_ICON_ACTIVE, backgroundInactive: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_BACKGROUND_SELECTED, backgroundPressed: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_BACKGROUND_SELECTED_HOVER, borderInactive: borderPressed, borderPressed: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_BORDER_ACTIVE };
      return obj9;
    }
    case "toggle-icon-only-off":
    {
      const obj10 = { foregroundInactive: nativeDefault.colors.TOGGLEBUTTON_ICON_ONLY_ICON_DEFAULT, foregroundPressed: nativeDefault.colors.TOGGLEBUTTON_ICON_ONLY_ICON_ACTIVE, backgroundInactive: borderPressed, backgroundPressed: nativeDefault.colors.CONTROL_ICON_ONLY_BACKGROUND_ACTIVE, borderInactive: borderPressed, borderPressed: nativeDefault.colors.CONTROL_ICON_ONLY_BORDER_ACTIVE };
      return obj10;
    }
    case "toggle-icon-only-on":
    {
      const obj11 = { foregroundInactive: nativeDefault.colors.TOGGLEBUTTON_ICON_ONLY_ICON_SELECTED, foregroundPressed: nativeDefault.colors.TOGGLEBUTTON_ICON_ONLY_ICON_ACTIVE, backgroundInactive: borderPressed, backgroundPressed: nativeDefault.colors.CONTROL_ICON_ONLY_BACKGROUND_ACTIVE, borderInactive: borderPressed, borderPressed: nativeDefault.colors.CONTROL_ICON_ONLY_BORDER_ACTIVE };
      return obj11;
    }
    case "tertiary":
    {
      const obj12 = { foregroundInactive: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT, foregroundPressed: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT, backgroundInactive: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, backgroundPressed: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_PRESSED_BACKGROUND, borderInactive: borderPressed, borderPressed };
      return obj12;
    }
    case "critical-primary":
    {
      obj13 = { foregroundInactive: tmp33.colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT, foregroundPressed: tmp34.colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT, backgroundInactive: tmp35.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, backgroundPressed: tmp36.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_ACTIVE, borderInactive: tmp37.colors.CONTROL_CRITICAL_PRIMARY_BORDER_DEFAULT, borderPressed: tmp38.colors.CONTROL_CRITICAL_PRIMARY_BORDER_ACTIVE };
      tmp33 = nativeDefault;
      tmp34 = nativeDefault;
      tmp35 = nativeDefault;
      tmp36 = nativeDefault;
      tmp37 = nativeDefault;
      tmp38 = nativeDefault;
      return obj13;
    }
    case "destructive":
    {
      obj13 = { foregroundInactive: tmp33.colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT, foregroundPressed: tmp34.colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT, backgroundInactive: tmp35.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, backgroundPressed: tmp36.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_ACTIVE, borderInactive: tmp37.colors.CONTROL_CRITICAL_PRIMARY_BORDER_DEFAULT, borderPressed: tmp38.colors.CONTROL_CRITICAL_PRIMARY_BORDER_ACTIVE };
      tmp33 = nativeDefault;
      tmp34 = nativeDefault;
      tmp35 = nativeDefault;
      tmp36 = nativeDefault;
      tmp37 = nativeDefault;
      tmp38 = nativeDefault;
      return obj13;
    }
    case "critical-secondary":
    {
      const obj14 = { foregroundInactive: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_TEXT_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_TEXT_DEFAULT, backgroundInactive: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_BACKGROUND_ACTIVE, borderInactive: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_BORDER_DEFAULT, borderPressed: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_BORDER_ACTIVE };
      return obj14;
    }
    case "active":
    {
      const obj15 = { foregroundInactive: nativeDefault.colors.CONTROL_CONNECTED_TEXT_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_CONNECTED_TEXT_DEFAULT, backgroundInactive: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_ACTIVE, borderInactive: nativeDefault.colors.CONTROL_CONNECTED_BORDER_DEFAULT, borderPressed: nativeDefault.colors.CONTROL_CONNECTED_BORDER_ACTIVE };
      return obj15;
    }
    case "experimental_premium-secondary":
    {
      const obj16 = { foregroundInactive: nativeDefault.colors.TEXT_BRAND, foregroundPressed: nativeDefault.colors.TEXT_BRAND, backgroundInactive: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_ACTIVE, borderInactive: borderPressed, borderPressed };
      return obj16;
    }
    case "primary-overlay":
    {
      const obj17 = { foregroundInactive: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT, backgroundInactive: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_ACTIVE, borderInactive: borderPressed, borderPressed };
      return obj17;
    }
    case "secondary-overlay":
    {
      const obj18 = { foregroundInactive: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, backgroundInactive: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE, borderInactive: borderPressed, borderPressed };
      return obj18;
    }
    case "experimental_welcome-secondary":
    {
      const obj19 = { foregroundInactive: nativeDefault.unsafe_rawColors.WHITE, foregroundPressed: nativeDefault.unsafe_rawColors.WHITE, backgroundInactive, backgroundPressed, borderInactive: borderPressed, borderPressed };
      return obj19;
    }
    case "experimental_premium-primary":
    {
      obj20 = { foregroundInactive: tmp9.colors.WHITE, foregroundPressed: tmp10.colors.WHITE, backgroundInactive: borderPressed, backgroundPressed: tmp12.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PRESSED_BACKGROUND, borderInactive: borderPressed, borderPressed };
      tmp9 = nativeDefault;
      tmp10 = nativeDefault;
      tmp12 = nativeDefault;
      return obj20;
    }
    case "experimental_premium-basic":
    {
      obj20 = { foregroundInactive: tmp9.colors.WHITE, foregroundPressed: tmp10.colors.WHITE, backgroundInactive: borderPressed, backgroundPressed: tmp12.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PRESSED_BACKGROUND, borderInactive: borderPressed, borderPressed };
      tmp9 = nativeDefault;
      tmp10 = nativeDefault;
      tmp12 = nativeDefault;
      return obj20;
    }
    case "icon-only":
    {
      const obj21 = { foregroundInactive: nativeDefault.colors.CONTROL_ICON_ONLY_ICON_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_ICON_ONLY_ICON_DEFAULT, backgroundInactive: borderPressed, backgroundPressed: nativeDefault.colors.CONTROL_ICON_ONLY_BACKGROUND_ACTIVE, borderInactive: borderPressed, borderPressed };
      return obj21;
    }
    case "expressive":
    {
      const obj = { foregroundInactive: nativeDefault.colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT, backgroundInactive: borderPressed, backgroundPressed: borderPressed, borderInactive: borderPressed, borderPressed };
      return obj;
    }
    default:
    {
      break;
    }
  }
}
let c4 = "rgba(0,0,0,0.001)";
let createStyles = createStyles_mod;
const backgroundInactive = createStyles.experimental_createToken(() => "#161CBB");
createStyles = createStyles_mod;
const backgroundPressed = createStyles.experimental_createToken(() => "#1318A0");
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let items1;
  let primaryColor;
  let theme;
  const obj = react2;
  const cResult = obj.c(26);
  const obj2 = native;
  const themeContext = obj2.useThemeContext();
  ({ primaryColor, theme } = themeContext);
  let tmp5 = null;
  if (null != primaryColor) {
    if ("primary" === arg0) {
      let tmp34;
      let tmp33;
      const WHITE = nativeDefault.unsafe_rawColors.WHITE;
      if (cResult[0] !== primaryColor) {
        const obj3 = { base: WHITE, contrastRatio: native.WCAGContrastRatios.HighContrastText };
        const getContrastingColor = native.getContrastingColor;
        native;
        const contrastingColor = getContrastingColor(primaryColor, obj3);
        const tmpResult10 = native;
        const darkenColorResult = tmpResult10.darkenColor(contrastingColor, 0.5);
        cResult[0] = primaryColor;
        cResult[1] = contrastingColor;
        cResult[2] = darkenColorResult;
        tmp34 = darkenColorResult;
        tmp33 = contrastingColor;
      } else {
        tmp33 = cResult[1];
        tmp34 = cResult[2];
      }
      if (cResult[3] === tmp33) {
        let tmp38;
        if (cResult[4] === tmp34) {
          tmp38 = cResult[5];
        }
        tmp5 = tmp38;
      }
      const obj4 = { backgroundColor: items, borderColor: items1, color: WHITE };
      items = [tmp33, tmp34];
      items1 = [tmp33, tmp34];
      cResult[3] = tmp33;
      cResult[4] = tmp34;
      cResult[5] = obj4;
      tmp38 = obj4;
    } else if ("secondary" === arg0) {
      let tmp19;
      let tmp23;
      if (cResult[6] !== theme) {
        let setColorOpacity2Result;
        const tmpResult11 = shared;
        const isThemeLightResult = tmpResult11.isThemeLight(theme);
        const setColorOpacity2 = native.setColorOpacity;
        native;
        if (isThemeLightResult) {
          setColorOpacity2Result = setColorOpacity2("white", 0.72);
        } else {
          setColorOpacity2Result = setColorOpacity2("white", 0.24);
        }
        cResult[6] = theme;
        cResult[7] = setColorOpacity2Result;
        tmp19 = setColorOpacity2Result;
      } else {
        tmp19 = cResult[7];
      }
      if (cResult[8] !== theme) {
        let setColorOpacity3Result;
        const tmpResult13 = shared;
        const isThemeLightResult1 = tmpResult13.isThemeLight(theme);
        const setColorOpacity3 = native.setColorOpacity;
        native;
        if (isThemeLightResult1) {
          setColorOpacity3Result = setColorOpacity3("white", 0.62);
        } else {
          setColorOpacity3Result = setColorOpacity3("white", 0.34);
        }
        cResult[8] = theme;
        cResult[9] = setColorOpacity3Result;
        tmp23 = setColorOpacity3Result;
      } else {
        tmp23 = cResult[9];
      }
      if (cResult[10] === tmp19) {
        let tmp27;
        let tmp29;
        let tmp31;
        if (cResult[11] === tmp23) {
          tmp27 = cResult[12];
        }
        const _Symbol2 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [c4, c4];
          cResult[13] = items2;
          tmp29 = items2;
        } else {
          tmp29 = cResult[13];
        }
        if (cResult[14] !== tmp27) {
          const obj5 = { backgroundColor: tmp27, borderColor: tmp29, color: "Array" };
          cResult[14] = tmp27;
          cResult[15] = obj5;
          tmp31 = obj5;
        } else {
          tmp31 = cResult[15];
        }
        tmp5 = tmp31;
      }
      const items3 = [tmp19, tmp23];
      cResult[10] = tmp19;
      cResult[11] = tmp23;
      cResult[12] = items3;
      tmp27 = items3;
    } else {
      tmp5 = null;
      if ("tertiary" === arg0) {
        let setColorOpacityResult;
        let darkenColorResult1;
        if (cResult[16] === primaryColor) {
          let tmp7;
          let tmp8;
          if (cResult[17] === theme) {
            tmp7 = cResult[18];
            tmp8 = cResult[19];
          }
          if (cResult[20] === tmp8) {
            let tmp14;
            let tmp16;
            let tmp18;
            if (cResult[21] === tmp7) {
              tmp14 = cResult[22];
            }
            const _Symbol = Symbol;
            if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
              const items4 = [c4, c4];
              cResult[23] = items4;
              tmp16 = items4;
            } else {
              tmp16 = cResult[23];
            }
            if (cResult[24] !== tmp14) {
              const obj6 = { backgroundColor: tmp14, borderColor: tmp16, color: "Array" };
              cResult[24] = tmp14;
              cResult[25] = obj6;
              tmp18 = obj6;
            } else {
              tmp18 = cResult[25];
            }
            tmp5 = tmp18;
          }
          const items5 = [tmp8, tmp7];
          cResult[20] = tmp8;
          cResult[21] = tmp7;
          cResult[22] = items5;
          tmp14 = items5;
        }
        const tmpResult15 = shared;
        const isThemeLightResult2 = tmpResult15.isThemeLight(theme);
        const setColorOpacity = native.setColorOpacity;
        native;
        if (isThemeLightResult2) {
          setColorOpacityResult = setColorOpacity(primaryColor, 0.4);
        } else {
          setColorOpacityResult = setColorOpacity("white", 0.1);
        }
        const tmpResult17 = shared;
        const isThemeLightResult3 = tmpResult17.isThemeLight(theme);
        const tmpResult18 = native;
        if (isThemeLightResult3) {
          darkenColorResult1 = tmpResult18.darkenColor(setColorOpacityResult, 0.3);
        } else {
          darkenColorResult1 = tmpResult18.setColorOpacity("white", 0.2);
        }
        cResult[16] = primaryColor;
        cResult[17] = theme;
        cResult[18] = darkenColorResult1;
        cResult[19] = setColorOpacityResult;
        tmp7 = darkenColorResult1;
        tmp8 = setColorOpacityResult;
      }
    }
  }
  return tmp5;
}) : ((arg0) => {
  let closure_0;
  let theme;
  _require = arg0;
  let obj = require("native");
  const themeContext = obj.useThemeContext();
  const primaryColor = themeContext.primaryColor;
  theme = themeContext.theme;
  let items = [theme, primaryColor, arg0];
  return react.useMemo(() => {
    let items;
    let items1;
    let items3;
    let items5;
    if (null == primaryColor) {
      return null;
    } else if ("primary" === closure_0) {
      const WHITE = nativeDefault.unsafe_rawColors.WHITE;
      const obj4 = { base: WHITE, contrastRatio: native.WCAGContrastRatios.HighContrastText };
      const getContrastingColor = native.getContrastingColor;
      native;
      const contrastingColor = getContrastingColor(primaryColor, obj4);
      const obj9 = native;
      const darkenColorResult = obj9.darkenColor(contrastingColor, 0.5);
      const obj7 = { backgroundColor: items, borderColor: items1, color: WHITE };
      items = [contrastingColor, darkenColorResult];
      items1 = [contrastingColor, darkenColorResult];
      return obj7;
    } else if ("secondary" === closure_0) {
      let setColorOpacity2Result;
      let setColorOpacity3Result;
      const obj5 = shared;
      const isThemeLightResult = obj5.isThemeLight(theme);
      const setColorOpacity2 = native.setColorOpacity;
      native;
      if (isThemeLightResult) {
        setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const obj6 = shared;
      const isThemeLightResult1 = obj6.isThemeLight(theme);
      const setColorOpacity3 = native.setColorOpacity;
      native;
      if (isThemeLightResult1) {
        setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      const obj8 = { backgroundColor: items2, borderColor: items3, color: "Array" };
      items2[1] = setColorOpacity3Result;
      items3 = [c4, c4];
      return obj8;
    } else if ("tertiary" === closure_0) {
      let setColorOpacityResult;
      let darkenColorResult1;
      const obj = shared;
      const isThemeLightResult2 = obj.isThemeLight(theme);
      const setColorOpacity = native.setColorOpacity;
      native;
      if (isThemeLightResult2) {
        setColorOpacityResult = setColorOpacity(primaryColor, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      const obj2 = shared;
      const isThemeLightResult3 = obj2.isThemeLight(theme);
      const obj3 = native;
      if (isThemeLightResult3) {
        darkenColorResult1 = obj3.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj3.setColorOpacity("white", 0.2);
      }
      const obj10 = { backgroundColor: items4, borderColor: items5, color: "Array" };
      items4[1] = darkenColorResult1;
      items5 = [c4, c4];
      return obj10;
    } else {
      return null;
    }
  }, items);
});
let closure_7 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const tmp6 = getButtonColorTokens(arg0);
    cResult[0] = arg0;
    cResult[1] = tmp6;
    tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = useToken;
  return tmpResult.useToken(tmp4.foregroundInactive);
}) : ((arg0) => {
  const obj = useToken;
  return obj.useToken(getButtonColorTokens(arg0).foregroundInactive);
});
createStyles = createStyles_mod;
const styleProperties = createStyles.createStyleProperties(getButtonColorTokens);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp10;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(4);
  const tmp4 = closure_7(arg0);
  if (cResult[0] !== arg0) {
    const tmp7 = getButtonColorTokens(arg0);
    cResult[0] = arg0;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  let color;
  const tmpResult = useToken;
  const token = tmpResult.useToken(tmp5.foregroundInactive);
  if (tmp4 != null) {
    color = tmp4.color;
  }
  if (color == null) {
    color = token;
  }
  if (cResult[2] !== color) {
    const obj2 = { color };
    cResult[2] = color;
    cResult[3] = obj2;
    tmp10 = obj2;
  } else {
    tmp10 = cResult[3];
  }
  return tmp10;
}) : ((arg0) => {
  const tmp = closure_7(arg0);
  let color;
  const obj = useToken;
  const token = obj.useToken(getButtonColorTokens(arg0).foregroundInactive);
  if (tmp != null) {
    color = tmp.color;
  }
  if (color == null) {
    color = token;
  }
  return { color };
});
let closure_10 = tmp5;
const __initData = { code: "function ButtonHooksNativeTsx1(){const{interpolateColor,pressed,inactiveColor,pressedColor}=this.__closure;return{tintColor:interpolateColor(pressed.get(),[0,1],[inactiveColor,pressedColor])};}" };
const __initData2 = { code: "function ButtonHooksNativeTsx2(){const{interpolateColor,pressed,inactiveColor,pressedColor}=this.__closure;return{tintColor:interpolateColor(pressed.get(),[0,1],[inactiveColor,pressedColor])};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, pressed) => {
  let tmp4;
  let token;
  _require = pressed;
  let obj = require("react");
  const cResult = obj.c(2);
  const color = closure_10(arg0).color;
  if (cResult[0] !== arg0) {
    const tmp6 = getButtonColorTokens(arg0);
    cResult[0] = arg0;
    cResult[1] = tmp6;
    tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = require("useToken");
  token = tmpResult.useToken(tmp4.foregroundPressed);
  const fn = function c() {
    let items;
    let obj2;
    const obj = { tintColor: obj2.interpolateColor(pressed.get(), [0, 1], items) };
    items = [color, token];
    obj2 = ReanimatedRexport;
    return obj;
  };
  const tmpResult2 = require("ReanimatedRexport");
  let obj2 = { interpolateColor: tmp(tmp2[8]).interpolateColor, pressed, inactiveColor: color, pressedColor: token };
  fn.__closure = obj2;
  fn.__workletHash = 10122935395765;
  fn.__initData = __initData;
  return tmpResult2.useAnimatedStyle(fn);
}) : ((arg0, pressed) => {
  let token;
  _require = pressed;
  const color = closure_10(arg0).color;
  let obj = require("useToken");
  token = obj.useToken(getButtonColorTokens(arg0).foregroundPressed);
  let obj2 = require("ReanimatedRexport");
  const fn = function s() {
    let items;
    let obj2;
    const obj = { tintColor: obj2.interpolateColor(pressed.get(), [0, 1], items) };
    items = [color, token];
    obj2 = ReanimatedRexport;
    return obj;
  };
  fn.__closure = { interpolateColor: require("ReanimatedRexport").interpolateColor, pressed, inactiveColor: color, pressedColor: token };
  fn.__workletHash = 6418554467478;
  fn.__initData = __initData2;
  ({ interpolateColor: require("ReanimatedRexport").interpolateColor, pressed, inactiveColor: color, pressedColor: token });
  return obj2.useAnimatedStyle(fn);
});
ReactCompilerGating = ReactCompilerGating_mod;
const __initData3 = { code: "function ButtonHooksNativeTsx3(){const{themedStyles,colors,interpolateColor,pressed}=this.__closure;var _themedStyles$backgro,_themedStyles,_themedStyles$borderC,_themedStyles2;const backgroundColor=(_themedStyles$backgro=(_themedStyles=themedStyles)===null||_themedStyles===void 0?void 0:_themedStyles.backgroundColor)!==null&&_themedStyles$backgro!==void 0?_themedStyles$backgro:[colors.backgroundInactive,colors.backgroundPressed];const borderColor=(_themedStyles$borderC=(_themedStyles2=themedStyles)===null||_themedStyles2===void 0?void 0:_themedStyles2.borderColor)!==null&&_themedStyles$borderC!==void 0?_themedStyles$borderC:[colors.borderInactive,colors.borderPressed];return{backgroundColor:interpolateColor(pressed.get(),[0,1],backgroundColor),borderColor:interpolateColor(pressed.get(),[0,1],borderColor)};}" };
const __initData4 = { code: "function ButtonHooksNativeTsx4(){const{themedStyles,colors,interpolateColor,pressed}=this.__closure;var _themedStyles$backgro,_themedStyles,_themedStyles$borderC,_themedStyles2;const backgroundColor=(_themedStyles$backgro=(_themedStyles=themedStyles)===null||_themedStyles===void 0?void 0:_themedStyles.backgroundColor)!==null&&_themedStyles$backgro!==void 0?_themedStyles$backgro:[colors.backgroundInactive,colors.backgroundPressed];const borderColor=(_themedStyles$borderC=(_themedStyles2=themedStyles)===null||_themedStyles2===void 0?void 0:_themedStyles2.borderColor)!==null&&_themedStyles$borderC!==void 0?_themedStyles$borderC:[colors.borderInactive,colors.borderPressed];return{backgroundColor:interpolateColor(pressed.get(),[0,1],backgroundColor),borderColor:interpolateColor(pressed.get(),[0,1],borderColor)};}" };
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp2;
  const obj = react2;
  const cResult = obj.c(2);
  const borderInactive = styleProperties(arg0).borderInactive;
  if (cResult[0] !== borderInactive) {
    const obj2 = { borderColor: borderInactive };
    cResult[0] = borderInactive;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((arg0) => {
  const obj = { borderColor: styleProperties(arg0).borderInactive };
  return obj;
});
ReactCompilerGating = ReactCompilerGating_mod;
const __initData5 = { code: "function ButtonHooksNativeTsx5(){const{width,scaleAmountInPx,withSpring,interpolate,pressed,ON_PRESS_SPRING}=this.__closure;const scale=width.get()>0?(width.get()-scaleAmountInPx)/width.get():1;return{transform:[{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING,\"animate-always\")}]};}" };
const __initData6 = { code: "function ButtonHooksNativeTsx6(){const{width,scaleAmountInPx,withSpring,interpolate,pressed,ON_PRESS_SPRING}=this.__closure;const scale=width.get()>0?(width.get()-scaleAmountInPx)/width.get():1;return{transform:[{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING,'animate-always')}]};}" };
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, pressed) => {
  let closure_2;
  _require = pressed;
  const tmp = closure_7(arg0);
  const styles = tmp;
  const tmp2 = styleProperties(arg0);
  dependencyMap = tmp2;
  let obj = require("ReanimatedRexport");
  const fn = function s() {
    let obj2;
    let obj3;
    let backgroundColor;
    if (styles != null) {
      backgroundColor = styles.backgroundColor;
    }
    if (backgroundColor == null) {
      const items = [, ];
      ({ backgroundInactive: arr[0], backgroundPressed: arr[1] } = closure_2);
      backgroundColor = items;
    }
    let borderColor;
    if (styles != null) {
      borderColor = styles.borderColor;
    }
    if (borderColor == null) {
      const items1 = [, ];
      ({ borderInactive: arr2[0], borderPressed: arr2[1] } = closure_2);
      borderColor = items1;
    }
    const obj = { backgroundColor: obj2.interpolateColor(pressed.get(), [0, 1], backgroundColor), borderColor: obj3.interpolateColor(pressed.get(), [0, 1], borderColor) };
    obj2 = ReanimatedRexport;
    obj3 = ReanimatedRexport;
    return obj;
  };
  let obj2 = { themedStyles: tmp, colors: tmp2, interpolateColor: require("ReanimatedRexport").interpolateColor, pressed };
  fn.__closure = obj2;
  fn.__workletHash = 1024908390291;
  fn.__initData = __initData3;
  return obj.useAnimatedStyle(fn);
}) : ((arg0, pressed) => {
  let closure_2;
  _require = pressed;
  const tmp = closure_7(arg0);
  const styles = tmp;
  const tmp2 = styleProperties(arg0);
  dependencyMap = tmp2;
  let obj = require("ReanimatedRexport");
  const fn = function s() {
    let obj2;
    let obj3;
    let backgroundColor;
    if (styles != null) {
      backgroundColor = styles.backgroundColor;
    }
    if (backgroundColor == null) {
      const items = [, ];
      ({ backgroundInactive: arr[0], backgroundPressed: arr[1] } = closure_2);
      backgroundColor = items;
    }
    let borderColor;
    if (styles != null) {
      borderColor = styles.borderColor;
    }
    if (borderColor == null) {
      const items1 = [, ];
      ({ borderInactive: arr2[0], borderPressed: arr2[1] } = closure_2);
      borderColor = items1;
    }
    const obj = { backgroundColor: obj2.interpolateColor(pressed.get(), [0, 1], backgroundColor), borderColor: obj3.interpolateColor(pressed.get(), [0, 1], borderColor) };
    obj2 = ReanimatedRexport;
    obj3 = ReanimatedRexport;
    return obj;
  };
  let obj2 = { themedStyles: tmp, colors: tmp2, interpolateColor: require("ReanimatedRexport").interpolateColor, pressed };
  fn.__closure = obj2;
  fn.__workletHash = 6076692594676;
  fn.__initData = __initData4;
  return obj.useAnimatedStyle(fn);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((pressed, width, scaleAmountInPx) => {
  _require = pressed;
  dependencyMap = scaleAmountInPx;
  const fn = function n() {
    let interpolateResult;
    let items1;
    let withSpring;
    let num = 1;
    if (width.get() > 0) {
      const diff = width.get() - scaleAmountInPx;
      num = diff / width.get();
    }
    const obj2 = { transform: items1 };
    const obj3 = { scale: withSpring(interpolateResult, springPresets.ON_PRESS_SPRING, "animate-always") };
    withSpring = spring.withSpring;
    spring;
    const items = [1, num];
    const obj4 = ReanimatedRexport;
    items1 = [obj3];
    interpolateResult = obj4.interpolate(pressed.get(), [0, 1], items);
    return obj2;
  };
  const obj = require("ReanimatedRexport");
  let obj2 = { width, scaleAmountInPx, withSpring: require("spring").withSpring, interpolate: require("ReanimatedRexport").interpolate, pressed, ON_PRESS_SPRING: require("springPresets").ON_PRESS_SPRING };
  fn.__closure = obj2;
  fn.__workletHash = 11326712012657;
  fn.__initData = __initData5;
  return obj.useAnimatedStyle(fn);
}) : ((pressed, width, scaleAmountInPx) => {
  _require = pressed;
  dependencyMap = scaleAmountInPx;
  const fn = function n() {
    let interpolateResult;
    let items1;
    let withSpring;
    let num = 1;
    if (width.get() > 0) {
      const diff = width.get() - scaleAmountInPx;
      num = diff / width.get();
    }
    const obj2 = { transform: items1 };
    const obj3 = { scale: withSpring(interpolateResult, springPresets.ON_PRESS_SPRING, "animate-always") };
    withSpring = spring.withSpring;
    spring;
    const items = [1, num];
    const obj4 = ReanimatedRexport;
    items1 = [obj3];
    interpolateResult = obj4.interpolate(pressed.get(), [0, 1], items);
    return obj2;
  };
  const obj = require("ReanimatedRexport");
  let obj2 = { width, scaleAmountInPx, withSpring: require("spring").withSpring, interpolate: require("ReanimatedRexport").interpolate, pressed, ON_PRESS_SPRING: require("springPresets").ON_PRESS_SPRING };
  fn.__closure = obj2;
  fn.__workletHash = 2291337405362;
  fn.__initData = __initData6;
  return obj.useAnimatedStyle(fn);
});
let closure_17 = tmp9;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2, arg3, arg4) => {
  let closure_0 = arg2;
  let closure_1 = arg3;
  let closure_2 = arg4;
  const obj = react2;
  const cResult = obj.c(14);
  const tmpResult = ReanimatedRexport;
  let sharedValue = tmpResult.useSharedValue(0);
  if (null != arg0) {
    sharedValue = arg0;
  }
  const tmpResult2 = ReanimatedRexport;
  const sharedValue1 = tmpResult2.useSharedValue(0);
  if (cResult[0] === sharedValue) {
    let tmp7;
    if (cResult[1] === arg3) {
      tmp7 = cResult[2];
    }
    if (cResult[3] === sharedValue) {
      let tmp8;
      if (cResult[4] === arg4) {
        tmp8 = cResult[5];
      }
      if (cResult[6] === arg2) {
        let tmp9;
        if (cResult[7] === sharedValue1) {
          tmp9 = cResult[8];
        }
        class I {
          constructor(nativeEvent) {
            const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
            if (closure_0 != null) {
              tmp2(nativeEvent);
            }
          }
        }
        if (cResult[9] === tmp9) {
          if (cResult[10] === tmp7) {
            if (cResult[11] === tmp8) {
              let tmp12;
              if (cResult[12] === tmp11) {
                tmp12 = cResult[13];
              }
              return tmp12;
            }
          }
        }
        const obj2 = { onPressIn: tmp7, onPressOut: tmp8, onLayout: tmp9, style: tmp11 };
        cResult[9] = tmp9;
        cResult[10] = tmp7;
        cResult[11] = tmp8;
        cResult[12] = tmp11;
        cResult[13] = obj2;
        tmp12 = obj2;
      }
      class I {
        constructor(nativeEvent) {
          const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
          if (closure_0 != null) {
            tmp2(nativeEvent);
          }
        }
      }
      cResult[6] = arg2;
      cResult[7] = sharedValue1;
      cResult[8] = I;
      tmp9 = I;
    }
    class E {
      constructor(arg0) {
        const result = sharedValue.set(0);
        if (closure_2 != null) {
          tmp2(arg0);
        }
      }
    }
    cResult[3] = sharedValue;
    cResult[4] = arg4;
    cResult[5] = E;
    tmp8 = E;
  }
  const fn = function c(arg0) {
    const result = sharedValue.set(1);
    if (closure_1 != null) {
      tmp2(arg0);
    }
  };
  cResult[0] = sharedValue;
  cResult[1] = arg3;
  cResult[2] = fn;
  tmp7 = fn;
}) : ((arg0) => {
  let items;
  let items1;
  let items2;
  let num = arg1;
  if (arg1 === undefined) {
    num = 8;
  }
  let closure_0 = arg2;
  let closure_1 = arg3;
  let closure_2 = arg4;
  let sharedValue1;
  const obj = ReanimatedRexport;
  let sharedValue = obj.useSharedValue(0);
  if (null != arg0) {
    sharedValue = arg0;
  }
  const tmpResult = ReanimatedRexport;
  sharedValue1 = tmpResult.useSharedValue(0);
  const obj2 = {
    onPressIn: react.useCallback((arg0) => {
      const result = sharedValue.set(1);
      if (closure_1 != null) {
        tmp2(arg0);
      }
    }, items),
    onPressOut: react.useCallback((arg0) => {
      const result = sharedValue.set(0);
      if (closure_2 != null) {
        tmp2(arg0);
      }
    }, items1),
    onLayout: react.useCallback((nativeEvent) => {
      const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
      if (closure_0 != null) {
        tmp2(nativeEvent);
      }
    }, items2),
    style: closure_17(sharedValue, sharedValue1, num)
  };
  items = [sharedValue, arg3];
  items1 = [sharedValue, arg4];
  items2 = [sharedValue1, arg2];
  return obj2;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? ((size, arg1, arg2) => {
  let first;
  let tmp15;
  const obj = react2;
  const cResult = obj.c(5);
  let BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER = arg2;
  const tmp4 = undefined !== arg1 && arg1;
  if (undefined === arg2) {
    BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER = ButtonConstants.BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
  }
  const tmpResult = useFontScale;
  const fontScale = tmpResult.useFontScale();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult6 = Icon;
    const iconSize = tmpResult6.getIconSize(ButtonConstants.MEDIUM_BUTTON_ICON_SIZE);
    cResult[0] = iconSize;
    first = iconSize;
  } else {
    first = cResult[0];
  }
  if ("sm" === size) {
    let tmp10;
    const _Symbol = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const tmpResult7 = Icon;
      const iconSize1 = tmpResult7.getIconSize(ButtonConstants.SMALL_BUTTON_ICON_SIZE);
      cResult[1] = iconSize1;
      tmp10 = iconSize1;
    } else {
      tmp10 = cResult[1];
    }
    first = tmp10;
  } else if ("lg" === size) {
    let tmp8;
    const _Symbol2 = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const tmpResult8 = Icon;
      const iconSize2 = tmpResult8.getIconSize(ButtonConstants.LARGE_BUTTON_ICON_SIZE);
      cResult[2] = iconSize2;
      tmp8 = iconSize2;
    } else {
      tmp8 = cResult[2];
    }
    first = tmp8;
  }
  let bound = first;
  if (tmp4) {
    bound = first;
    if (fontScale > 1) {
      const TextStyleSheet = Text_Text.TextStyleSheet;
      const tmpResult9 = ButtonConstants;
      const tmp16 = TextStyleSheet[tmpResult9.getButtonDefaultTextVariant(tmpResult9, size)];
      const tmpResult10 = PlatformUtils;
      const tmp13 = tmpResult10.isAndroid() ? tmp16.fontSize : tmp16.lineHeight;
      bound = first;
      if (null != first) {
        bound = first;
        if (null != tmp13) {
          const _Math = Math;
          const _Math2 = Math;
          bound = Math.max(first, tmp13 * Math.min(fontScale, BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER));
        }
      }
    }
  }
  if (cResult[3] !== bound) {
    size = { width: bound, height: bound };
    cResult[3] = bound;
    cResult[4] = size;
    tmp15 = size;
  } else {
    tmp15 = cResult[4];
  }
  return tmp15;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER = arg2;
  if (arg2 === undefined) {
    BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER = require("ButtonConstants").BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
  }
  const obj = require("useFontScale");
  const fontScale = obj.useFontScale();
  const items = [arg0, flag, BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER, fontScale];
  return fontScale.useMemo(() => {
    let iconSize;
    Icon;
    if ("sm" === closure_0) {
      const tmpResult = Icon;
      iconSize = tmpResult.getIconSize(ButtonConstants.SMALL_BUTTON_ICON_SIZE);
    } else {
      iconSize = tmp4;
      if ("lg" === closure_0) {
        const tmpResult4 = Icon;
        iconSize = tmpResult4.getIconSize(ButtonConstants.LARGE_BUTTON_ICON_SIZE);
      }
    }
    let width = iconSize;
    if (flag) {
      width = iconSize;
      if (fontScale > 1) {
        const TextStyleSheet = Text_Text.TextStyleSheet;
        const tmpResult5 = ButtonConstants;
        const tmp13 = TextStyleSheet[tmpResult5.getButtonDefaultTextVariant(tmpResult5, closure_0)];
        const tmpResult6 = PlatformUtils;
        const tmp9 = tmpResult6.isAndroid() ? tmp13.fontSize : tmp13.lineHeight;
        width = iconSize;
        if (null != iconSize) {
          width = iconSize;
          if (null != tmp9) {
            const _Math = Math;
            const _Math2 = Math;
            width = Math.max(iconSize, tmp9 * Math.min(tmp8, BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER));
          }
        }
      }
    }
    return { width, height: width };
  }, items);
});
let size = size_mod;
let result = size.fileFinishedImporting("design/components/Button/native/ButtonHooks.native.tsx");

export const SAFE_TRANSPARENT_COLOR = "rgba(0,0,0,0.001)";
export const useProfileThemedButtonStyles = tmp2;
export const useForegroundColor = tmp3;
export const useButtonColorStyles = styleProperties;
export const useButtonTextColorStyles = tmp5;
export const useIconTintStyles = tmp6;
export const useGradientPillStyles = tmp7;
export const useButtonPillStyles = tmp8;
export const useButtonScaleStyles = tmp9;
export const useButtonPressAnimationProps = tmp10;
export const useIconSizeStyles = tmp11;