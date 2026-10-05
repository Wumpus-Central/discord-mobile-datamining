// === Module 5601: ButtonHooks ===

// Module 5601 (ButtonHooks)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import useToken from "useToken" /* 4580 */;
import native from "native" /* 4589 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import shared from "shared" /* 4729 */;
import Text_Text from "Text/Text" /* 4886 */;
import Icon from "Icon" /* 5596 */;
import spring from "spring" /* 5597 */;
import springPresets from "springPresets" /* 5598 */;
import ButtonConstants from "ButtonConstants" /* 5600 */;
import useFontScale from "useFontScale" /* 5602 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function getButtonColorTokens(arg0) {
  switch (arg0) {
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
      const obj6 = { foregroundInactive: nativeDefault.colors.TOGGLEBUTTON_ICON_DEFAULT, foregroundPressed: nativeDefault.colors.TOGGLEBUTTON_ICON_ACTIVE, backgroundInactive: borderPressed, backgroundPressed: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE, borderInactive: borderPressed, borderPressed: nativeDefault.colors.TOGGLEBUTTON_BORDER_ACTIVE };
      return obj6;
    case "toggle-icon-default-on":
      const obj7 = { foregroundInactive: nativeDefault.colors.TOGGLEBUTTON_ICON_SELECTED, foregroundPressed: nativeDefault.colors.TOGGLEBUTTON_ICON_ACTIVE, backgroundInactive: nativeDefault.colors.TOGGLEBUTTON_BACKGROUND_SELECTED, backgroundPressed: nativeDefault.colors.TOGGLEBUTTON_BACKGROUND_SELECTED_HOVER, borderInactive: nativeDefault.colors.TOGGLEBUTTON_BORDER_SELECTED, borderPressed: nativeDefault.colors.TOGGLEBUTTON_BORDER_ACTIVE };
      return obj7;
    case "toggle-icon-critical-off":
      const obj8 = { foregroundInactive: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_ICON_DEFAULT, foregroundPressed: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_ICON_ACTIVE, backgroundInactive: borderPressed, backgroundPressed: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE, borderInactive: borderPressed, borderPressed: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_BORDER_ACTIVE };
      return obj8;
    case "toggle-icon-critical-on":
      const obj9 = { foregroundInactive: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_ICON_SELECTED, foregroundPressed: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_ICON_ACTIVE, backgroundInactive: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_BACKGROUND_SELECTED, backgroundPressed: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_BACKGROUND_SELECTED_HOVER, borderInactive: borderPressed, borderPressed: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_BORDER_ACTIVE };
      return obj9;
    case "toggle-icon-only-off":
      const obj10 = { foregroundInactive: nativeDefault.colors.TOGGLEBUTTON_ICON_ONLY_ICON_DEFAULT, foregroundPressed: nativeDefault.colors.TOGGLEBUTTON_ICON_ONLY_ICON_ACTIVE, backgroundInactive: borderPressed, backgroundPressed: nativeDefault.colors.CONTROL_ICON_ONLY_BACKGROUND_ACTIVE, borderInactive: borderPressed, borderPressed: nativeDefault.colors.CONTROL_ICON_ONLY_BORDER_ACTIVE };
      return obj10;
    case "toggle-icon-only-on":
      const obj11 = { foregroundInactive: nativeDefault.colors.TOGGLEBUTTON_ICON_ONLY_ICON_SELECTED, foregroundPressed: nativeDefault.colors.TOGGLEBUTTON_ICON_ONLY_ICON_ACTIVE, backgroundInactive: borderPressed, backgroundPressed: nativeDefault.colors.CONTROL_ICON_ONLY_BACKGROUND_ACTIVE, borderInactive: borderPressed, borderPressed: nativeDefault.colors.CONTROL_ICON_ONLY_BORDER_ACTIVE };
      return obj11;
    case "tertiary":
      const obj12 = { foregroundInactive: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT, foregroundPressed: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT, backgroundInactive: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, backgroundPressed: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_PRESSED_BACKGROUND, borderInactive: borderPressed, borderPressed };
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
      const obj16 = { foregroundInactive: nativeDefault.colors.TEXT_BRAND, foregroundPressed: nativeDefault.colors.TEXT_BRAND, backgroundInactive: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_ACTIVE, borderInactive: borderPressed, borderPressed };
      return obj16;
    case "primary-overlay":
      const obj17 = { foregroundInactive: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT, backgroundInactive: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_ACTIVE, borderInactive: borderPressed, borderPressed };
      return obj17;
    case "secondary-overlay":
      const obj18 = { foregroundInactive: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, backgroundInactive: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE, borderInactive: borderPressed, borderPressed };
      return obj18;
    case "experimental_welcome-secondary":
      const obj19 = { foregroundInactive: nativeDefault.unsafe_rawColors.WHITE, foregroundPressed: nativeDefault.unsafe_rawColors.WHITE, backgroundInactive, backgroundPressed, borderInactive: borderPressed, borderPressed };
      return obj19;
    case "experimental_premium-primary":
      let obj20 = { foregroundInactive: null, foregroundPressed: null, backgroundInactive: null, backgroundPressed: null, borderInactive: null, borderPressed: null };
      let tmp9 = nativeDefault;
      obj20.foregroundInactive = tmp9.colors.WHITE;
      let tmp10 = nativeDefault;
      obj20.foregroundPressed = tmp10.colors.WHITE;
      obj20.backgroundInactive = borderPressed;
      let tmp12 = nativeDefault;
      obj20.backgroundPressed = tmp12.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PRESSED_BACKGROUND;
      obj20.borderInactive = borderPressed;
      obj20.borderPressed = borderPressed;
      return obj20;
    case "experimental_premium-basic":
      obj20 = { foregroundInactive: null, foregroundPressed: null, backgroundInactive: null, backgroundPressed: null, borderInactive: null, borderPressed: null };
      tmp9 = nativeDefault;
      obj20.foregroundInactive = tmp9.colors.WHITE;
      tmp10 = nativeDefault;
      obj20.foregroundPressed = tmp10.colors.WHITE;
      obj20.backgroundInactive = borderPressed;
      tmp12 = nativeDefault;
      obj20.backgroundPressed = tmp12.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PRESSED_BACKGROUND;
      obj20.borderInactive = borderPressed;
      obj20.borderPressed = borderPressed;
      return obj20;
    case "icon-only":
      const obj21 = { foregroundInactive: nativeDefault.colors.CONTROL_ICON_ONLY_ICON_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_ICON_ONLY_ICON_DEFAULT, backgroundInactive: borderPressed, backgroundPressed: nativeDefault.colors.CONTROL_ICON_ONLY_BACKGROUND_ACTIVE, borderInactive: borderPressed, borderPressed };
      return obj21;
    case "expressive":
      const obj = { foregroundInactive: nativeDefault.colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT, backgroundInactive: borderPressed, backgroundPressed: borderPressed, borderInactive: borderPressed, borderPressed };
      return obj;
    default:
  }
}
let c4 = "rgba(0,0,0,0.001)";
let createStyles = fn(4890);
const backgroundInactive = createStyles.experimental_createToken(() => "#161CBB");
createStyles = fn(4890);
const backgroundPressed = createStyles.experimental_createToken(() => "#1318A0");
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(26);
  const themeContext = native.useThemeContext();
  ({ primaryColor, theme } = themeContext);
  let tmp5 = null;
  if (null != primaryColor) {
    if ("primary" === arg0) {
      const WHITE = nativeDefault.unsafe_rawColors.WHITE;
      if (cResult[0] !== primaryColor) {
        const obj3 = { base: WHITE, contrastRatio: native.WCAGContrastRatios.HighContrastText };
        const contrastingColor = native.getContrastingColor(primaryColor, obj3);
        const tmpResult = native;
        const darkenColorResult = native.darkenColor(contrastingColor, 0.5);
        cResult[0] = primaryColor;
        cResult[1] = contrastingColor;
        cResult[2] = darkenColorResult;
        let tmp38 = darkenColorResult;
        let tmp37 = contrastingColor;
        const tmpResult10 = native;
      } else {
        tmp37 = cResult[1];
        tmp38 = cResult[2];
      }
      if (cResult[3] === tmp37) {
      }
      const obj4 = { backgroundColor: null, borderColor: null, color: null };
      const items = [tmp37, tmp38];
      obj4.backgroundColor = items;
      const items1 = [tmp37, tmp38];
      obj4.borderColor = items1;
      obj4.color = WHITE;
      cResult[3] = tmp37;
      cResult[4] = tmp38;
      cResult[5] = obj4;
    } else if ("secondary" === arg0) {
      if (cResult[6] !== theme) {
        const tmpResult11 = shared;
        const isThemeLightResult = shared.isThemeLight(theme);
        const setColorOpacity2 = native.setColorOpacity;
        if (isThemeLightResult) {
          let setColorOpacity2Result = setColorOpacity2("white", 0.72);
        } else {
          setColorOpacity2Result = setColorOpacity2("white", 0.24);
        }
        cResult[6] = theme;
        cResult[7] = setColorOpacity2Result;
        const tmpResult12 = native;
      } else if (cResult[8] !== theme) {
        const tmpResult13 = shared;
        const isThemeLightResult1 = shared.isThemeLight(theme);
        const setColorOpacity3 = native.setColorOpacity;
        if (isThemeLightResult1) {
          let setColorOpacity3Result = setColorOpacity3("white", 0.62);
        } else {
          setColorOpacity3Result = setColorOpacity3("white", 0.34);
        }
        cResult[8] = theme;
        cResult[9] = setColorOpacity3Result;
        const tmpResult14 = native;
      } else {
        if (cResult[10] === tmp21) {
          if (cResult[11] === tmp26) {
            let tmp31 = cResult[12];
          }
          const _Symbol2 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const items2 = [c4, c4];
            cResult[13] = items2;
            let tmp33 = items2;
          } else {
            tmp33 = cResult[13];
          }
          if (cResult[14] !== tmp31) {
            const obj5 = { backgroundColor: tmp31, borderColor: tmp33, color: "r" };
            cResult[14] = tmp31;
            cResult[15] = obj5;
            let tmp35 = obj5;
          } else {
            tmp35 = cResult[15];
          }
          tmp5 = tmp35;
        }
        const items3 = [tmp21, cResult[9]];
        cResult[10] = tmp21;
        cResult[11] = cResult[9];
        cResult[12] = items3;
        tmp31 = items3;
      }
    } else {
      tmp5 = null;
      if ("tertiary" === arg0) {
        if (cResult[16] === primaryColor) {
          if (cResult[17] === theme) {
            if (cResult[20] === cResult[19]) {
              if (cResult[21] === tmp7) {
                let tmp16 = cResult[22];
              }
              const _Symbol = Symbol;
              if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                const items4 = [c4, c4];
                cResult[23] = items4;
                let tmp18 = items4;
              } else {
                tmp18 = cResult[23];
              }
              if (cResult[24] !== tmp16) {
                const obj6 = { backgroundColor: tmp16, borderColor: tmp18, color: "r" };
                cResult[24] = tmp16;
                cResult[25] = obj6;
                let tmp20 = obj6;
              } else {
                tmp20 = cResult[25];
              }
              tmp5 = tmp20;
            }
            const items5 = [cResult[19], cResult[18]];
            cResult[20] = cResult[19];
            cResult[21] = cResult[18];
            cResult[22] = items5;
            tmp16 = items5;
          }
        }
        const tmpResult15 = shared;
        const isThemeLightResult2 = shared.isThemeLight(theme);
        const setColorOpacity = native.setColorOpacity;
        if (isThemeLightResult2) {
          let setColorOpacityResult = setColorOpacity(primaryColor, 0.4);
        } else {
          setColorOpacityResult = setColorOpacity("white", 0.1);
        }
        const tmpResult16 = native;
        const tmpResult17 = shared;
        const tmpResult18 = native;
        if (isThemeLightResult3) {
          let darkenColorResult1 = tmpResult18.darkenColor(setColorOpacityResult, 0.3);
        } else {
          darkenColorResult1 = tmpResult18.setColorOpacity("white", 0.2);
        }
        cResult[16] = primaryColor;
        cResult[17] = theme;
        cResult[18] = darkenColorResult1;
        cResult[19] = setColorOpacityResult;
        isThemeLightResult3 = shared.isThemeLight(theme);
      }
    }
  }
  return tmp5;
}) : ((arg0) => {
  _require = arg0;
  const themeContext = require("native").useThemeContext();
  const primaryColor = themeContext.primaryColor;
  theme = themeContext.theme;
  let items = [theme, primaryColor, arg0];
  return noop.useMemo(() => {
    if (null == primaryColor) {
      return null;
    } else if ("primary" === closure_0) {
      const WHITE = nativeDefault.unsafe_rawColors.WHITE;
      const obj4 = { base: WHITE, contrastRatio: native.WCAGContrastRatios.HighContrastText };
      const contrastingColor = native.getContrastingColor(primaryColor, obj4);
      const darkenColorResult = native.darkenColor(contrastingColor, 0.5);
      const obj7 = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj7.backgroundColor = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj7.borderColor = items1;
      obj7.color = WHITE;
      return obj7;
    } else if ("secondary" === closure_0) {
      const isThemeLightResult = shared.isThemeLight(theme);
      const setColorOpacity2 = native.setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const isThemeLightResult1 = shared.isThemeLight(theme);
      const setColorOpacity3 = native.setColorOpacity;
      if (isThemeLightResult1) {
        let setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      const obj9 = { backgroundColor: null, borderColor: null, color: "r" };
      items2[1] = setColorOpacity3Result;
      obj9.backgroundColor = items2;
      const items3 = [c4, c4];
      obj9.borderColor = items3;
      return obj9;
    } else if ("tertiary" === closure_0) {
      const isThemeLightResult2 = shared.isThemeLight(theme);
      const setColorOpacity = native.setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(primaryColor, 0.4);
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
      const obj11 = { backgroundColor: null, borderColor: null, color: "r" };
      items4[1] = darkenColorResult1;
      obj11.backgroundColor = items4;
      const items5 = [c4, c4];
      obj11.borderColor = items5;
      return obj11;
    } else {
      return null;
    }
  }, items);
});
let closure_7 = tmp2;
fn(558);
createStyles = fn(4890);
const styleProperties = createStyles.createStyleProperties(getButtonColorTokens);
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(4);
  const tmp4 = closure_7(arg0);
  if (cResult[0] !== arg0) {
    const tmp7 = getButtonColorTokens(arg0);
    cResult[0] = arg0;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  let color;
  const token = useToken.useToken(tmp5.foregroundInactive);
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
    let tmp10 = obj2;
  } else {
    tmp10 = cResult[3];
  }
  return tmp10;
}) : ((arg0) => {
  const tmp = closure_7(arg0);
  let color;
  const token = useToken.useToken(getButtonColorTokens(arg0).foregroundInactive);
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
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(2);
  if (cResult[0] !== arg0) {
    const tmp6 = getButtonColorTokens(arg0);
    cResult[0] = arg0;
    cResult[1] = tmp6;
    let tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  return useToken.useToken(tmp4.foregroundInactive);
}) : ((arg0) => useToken.useToken(getButtonColorTokens(arg0).foregroundInactive));
ReactCompilerGating = fn(558);
const __initData3 = { code: "function ButtonHooksNativeTsx3(){const{themedStyles,colors,interpolateColor,pressed}=this.__closure;var _themedStyles$backgro,_themedStyles,_themedStyles$borderC,_themedStyles2;const backgroundColor=(_themedStyles$backgro=(_themedStyles=themedStyles)===null||_themedStyles===void 0?void 0:_themedStyles.backgroundColor)!==null&&_themedStyles$backgro!==void 0?_themedStyles$backgro:[colors.backgroundInactive,colors.backgroundPressed];const borderColor=(_themedStyles$borderC=(_themedStyles2=themedStyles)===null||_themedStyles2===void 0?void 0:_themedStyles2.borderColor)!==null&&_themedStyles$borderC!==void 0?_themedStyles$borderC:[colors.borderInactive,colors.borderPressed];return{backgroundColor:interpolateColor(pressed.get(),[0,1],backgroundColor),borderColor:interpolateColor(pressed.get(),[0,1],borderColor)};}" };
const __initData4 = { code: "function ButtonHooksNativeTsx4(){const{themedStyles,colors,interpolateColor,pressed}=this.__closure;var _themedStyles$backgro,_themedStyles,_themedStyles$borderC,_themedStyles2;const backgroundColor=(_themedStyles$backgro=(_themedStyles=themedStyles)===null||_themedStyles===void 0?void 0:_themedStyles.backgroundColor)!==null&&_themedStyles$backgro!==void 0?_themedStyles$backgro:[colors.backgroundInactive,colors.backgroundPressed];const borderColor=(_themedStyles$borderC=(_themedStyles2=themedStyles)===null||_themedStyles2===void 0?void 0:_themedStyles2.borderColor)!==null&&_themedStyles$borderC!==void 0?_themedStyles$borderC:[colors.borderInactive,colors.borderPressed];return{backgroundColor:interpolateColor(pressed.get(),[0,1],backgroundColor),borderColor:interpolateColor(pressed.get(),[0,1],borderColor)};}" };
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, pressed) => {
  _require = pressed;
  const cResult = require("c").c(2);
  const color = closure_10(arg0).color;
  if (cResult[0] !== arg0) {
    const tmp6 = getButtonColorTokens(arg0);
    cResult[0] = arg0;
    cResult[1] = tmp6;
    let tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  let obj = require("c");
  token = require("useToken").useToken(tmp4.foregroundPressed);
  const tmpResult = require("useToken");
  const fn = function c() {
    const obj = { tintColor: null };
    const items = [color, token];
    obj.tintColor = ReanimatedRexport.interpolateColor(pressed.get(), [0, 1], items);
    return obj;
  };
  const tmpResult2 = require("ReanimatedRexport");
  fn.__closure = { interpolateColor: require("ReanimatedRexport").interpolateColor, pressed, inactiveColor: color, pressedColor: token };
  fn.__workletHash = 10122935395765;
  fn.__initData = __initData;
  return tmpResult2.useAnimatedStyle(fn);
}) : ((arg0, pressed) => {
  _require = pressed;
  const color = closure_10(arg0).color;
  token = require("useToken").useToken(getButtonColorTokens(arg0).foregroundPressed);
  let obj = require("useToken");
  const fn = function s() {
    const obj = { tintColor: null };
    const items = [color, token];
    obj.tintColor = ReanimatedRexport.interpolateColor(pressed.get(), [0, 1], items);
    return obj;
  };
  const obj2 = require("ReanimatedRexport");
  fn.__closure = { interpolateColor: require("ReanimatedRexport").interpolateColor, pressed, inactiveColor: color, pressedColor: token };
  fn.__workletHash = 6418554467478;
  fn.__initData = __initData2;
  return obj2.useAnimatedStyle(fn);
});
ReactCompilerGating = fn(558);
const __initData5 = { code: "function ButtonHooksNativeTsx5(){const{width,scaleAmountInPx,withSpring,interpolate,pressed,ON_PRESS_SPRING}=this.__closure;const scale=width.get()>0?(width.get()-scaleAmountInPx)/width.get():1;return{transform:[{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING,\"animate-always\")}]};}" };
const __initData6 = { code: "function ButtonHooksNativeTsx6(){const{width,scaleAmountInPx,withSpring,interpolate,pressed,ON_PRESS_SPRING}=this.__closure;const scale=width.get()>0?(width.get()-scaleAmountInPx)/width.get():1;return{transform:[{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING,'animate-always')}]};}" };
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(2);
  const borderInactive = styleProperties(arg0).borderInactive;
  if (cResult[0] !== borderInactive) {
    const obj2 = { borderColor: borderInactive };
    cResult[0] = borderInactive;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((arg0) => ({ borderColor: styleProperties(arg0).borderInactive }));
ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((pressed, width, scaleAmountInPx) => {
  _require = pressed;
  dependencyMap = scaleAmountInPx;
  const fn = function n() {
    let num = 1;
    if (width.get() > 0) {
      const diff = width.get() - closure_2;
      num = diff / width.get();
    }
    const obj2 = { transform: null };
    const obj3 = { scale: null };
    const obj4 = spring;
    const items = [1, num];
    obj3.scale = obj4.withSpring(ReanimatedRexport.interpolate(pressed.get(), [0, 1], items), springPresets.ON_PRESS_SPRING, "animate-always");
    const items1 = [obj3];
    obj2.transform = items1;
    return obj2;
  };
  const obj = require("ReanimatedRexport");
  fn.__closure = { width, scaleAmountInPx, withSpring: require("spring").withSpring, interpolate: require("ReanimatedRexport").interpolate, pressed, ON_PRESS_SPRING: require("springPresets").ON_PRESS_SPRING };
  fn.__workletHash = 11326712012657;
  fn.__initData = __initData5;
  return obj.useAnimatedStyle(fn);
}) : ((pressed, width, scaleAmountInPx) => {
  _require = pressed;
  dependencyMap = scaleAmountInPx;
  const fn = function n() {
    let num = 1;
    if (width.get() > 0) {
      const diff = width.get() - closure_2;
      num = diff / width.get();
    }
    const obj2 = { transform: null };
    const obj3 = { scale: null };
    const obj4 = spring;
    const items = [1, num];
    obj3.scale = obj4.withSpring(ReanimatedRexport.interpolate(pressed.get(), [0, 1], items), springPresets.ON_PRESS_SPRING, "animate-always");
    const items1 = [obj3];
    obj2.transform = items1;
    return obj2;
  };
  const obj = require("ReanimatedRexport");
  fn.__closure = { width, scaleAmountInPx, withSpring: require("spring").withSpring, interpolate: require("ReanimatedRexport").interpolate, pressed, ON_PRESS_SPRING: require("springPresets").ON_PRESS_SPRING };
  fn.__workletHash = 2291337405362;
  fn.__initData = __initData6;
  return obj.useAnimatedStyle(fn);
});
let closure_17 = tmp9;
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, pressed) => {
  _require = pressed;
  const tmp = closure_7(arg0);
  const styles = tmp;
  const tmp2 = styleProperties(arg0);
  dependencyMap = tmp2;
  const fn = function s() {
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
    const obj = { backgroundColor: ReanimatedRexport.interpolateColor(pressed.get(), [0, 1], backgroundColor), borderColor: null };
    obj.borderColor = ReanimatedRexport.interpolateColor(pressed.get(), [0, 1], borderColor);
    return obj;
  };
  let obj = require("ReanimatedRexport");
  fn.__closure = { themedStyles: tmp, colors: tmp2, interpolateColor: require("ReanimatedRexport").interpolateColor, pressed };
  fn.__workletHash = 1024908390291;
  fn.__initData = __initData3;
  return obj.useAnimatedStyle(fn);
}) : ((arg0, pressed) => {
  _require = pressed;
  const tmp = closure_7(arg0);
  const styles = tmp;
  const tmp2 = styleProperties(arg0);
  dependencyMap = tmp2;
  const fn = function s() {
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
    const obj = { backgroundColor: ReanimatedRexport.interpolateColor(pressed.get(), [0, 1], backgroundColor), borderColor: null };
    obj.borderColor = ReanimatedRexport.interpolateColor(pressed.get(), [0, 1], borderColor);
    return obj;
  };
  let obj = require("ReanimatedRexport");
  fn.__closure = { themedStyles: tmp, colors: tmp2, interpolateColor: require("ReanimatedRexport").interpolateColor, pressed };
  fn.__workletHash = 6076692594676;
  fn.__initData = __initData4;
  return obj.useAnimatedStyle(fn);
});
ReactCompilerGating = fn(558);
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2, arg3, arg4) => {
  closure_0 = arg2;
  closure_1 = arg3;
  closure_2 = arg4;
  const cResult = c.c(14);
  let sharedValue = ReanimatedRexport.useSharedValue(0);
  if (null != arg0) {
    sharedValue = arg0;
  }
  const tmpResult = ReanimatedRexport;
  const sharedValue1 = ReanimatedRexport.useSharedValue(0);
  if (cResult[0] === sharedValue) {
    if (cResult[1] === arg3) {
      let tmp7 = cResult[2];
    }
    if (cResult[3] === sharedValue) {
      if (cResult[4] === arg4) {
        let tmp8 = cResult[5];
      }
      if (cResult[6] === arg2) {
        if (cResult[7] === sharedValue1) {
          let tmp9 = cResult[8];
        }
        class I {
          constructor(arg0) {
            result = closure_4.set(arg0.nativeEvent.layout.width);
            if (closure_0 != null) {
              tmp2Result = tmp2(arg0);
            }
            return;
          }
        }
        if (cResult[9] === tmp9) {
          if (cResult[10] === tmp7) {
            if (cResult[11] === tmp8) {
              if (cResult[12] === tmp11) {
                let tmp12 = cResult[13];
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
        constructor(arg0) {
          result = closure_4.set(arg0.nativeEvent.layout.width);
          if (closure_0 != null) {
            tmp2Result = tmp2(arg0);
          }
          return;
        }
      }
      cResult[6] = arg2;
      cResult[7] = sharedValue1;
      cResult[8] = I;
      tmp9 = I;
    }
    class E {
      constructor(arg0) {
        result = closure_3.set(0);
        if (closure_2 != null) {
          tmp3 = arg0;
          tmp2Result = tmp2(arg0);
        }
        return;
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
  const tmpResult2 = ReanimatedRexport;
}) : ((arg0) => {
  let num = arg1;
  if (arg1 === undefined) {
    num = 8;
  }
  closure_0 = arg2;
  closure_1 = arg3;
  closure_2 = arg4;
  let sharedValue1;
  let sharedValue = ReanimatedRexport.useSharedValue(0);
  if (null != arg0) {
    sharedValue = arg0;
  }
  sharedValue1 = ReanimatedRexport.useSharedValue(0);
  const obj2 = { onPressIn: null, onPressOut: null, onLayout: null, style: closure_17(sharedValue, sharedValue1, num) };
  const items = [sharedValue, arg3];
  obj2.onPressIn = noop.useCallback((arg0) => {
    const result = sharedValue.set(1);
    if (closure_1 != null) {
      tmp2(arg0);
    }
  }, items);
  const items1 = [sharedValue, arg4];
  obj2.onPressOut = noop.useCallback((arg0) => {
    const result = sharedValue.set(0);
    if (closure_2 != null) {
      tmp2(arg0);
    }
  }, items1);
  const items2 = [sharedValue1, arg2];
  obj2.onLayout = noop.useCallback((nativeEvent) => {
    const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
    if (closure_0 != null) {
      tmp2(nativeEvent);
    }
  }, items2);
  return obj2;
});
let size = fn(2);
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
export const useIconSizeStyles = ReactCompilerGating.isReactCompilerEnabled() ? ((size, arg1, arg2) => {
  const cResult = c.c(5);
  let BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER = arg2;
  if (undefined === arg2) {
    BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER = ButtonConstants.BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
  }
  const tmp4 = undefined !== arg1 && arg1;
  const fontScale = useFontScale.useFontScale();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const iconSize = Icon.getIconSize(ButtonConstants.MEDIUM_BUTTON_ICON_SIZE);
    cResult[0] = iconSize;
    let first = iconSize;
    const tmpResult6 = Icon;
  } else {
    first = cResult[0];
  }
  if ("sm" === size) {
    const _Symbol = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const iconSize1 = Icon.getIconSize(ButtonConstants.SMALL_BUTTON_ICON_SIZE);
      cResult[1] = iconSize1;
      const tmpResult7 = Icon;
    }
  } else {
    if ("lg" === size) {
      const _Symbol2 = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const iconSize2 = Icon.getIconSize(ButtonConstants.LARGE_BUTTON_ICON_SIZE);
        cResult[2] = iconSize2;
        let tmp8 = iconSize2;
        const tmpResult8 = Icon;
      } else {
        tmp8 = cResult[2];
      }
      first = tmp8;
    }
    let bound = first;
    if (tmp4) {
      bound = first;
      if (fontScale > 1) {
        const tmpResult9 = ButtonConstants;
        const tmp17 = Text_Text.TextStyleSheet[tmpResult9.getButtonDefaultTextVariant(tmpResult9, size)];
        const tmp14 = PlatformUtils.isAndroid() ? tmp17.fontSize : tmp17.lineHeight;
        bound = first;
        if (null != first) {
          bound = first;
          if (null != tmp14) {
            const _Math = Math;
            const _Math2 = Math;
            bound = Math.max(first, tmp14 * Math.min(fontScale, BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER));
          }
        }
        const tmpResult10 = PlatformUtils;
      }
    }
    if (cResult[3] !== bound) {
      size = { width: bound, height: bound };
      cResult[3] = bound;
      cResult[4] = size;
      let tmp16 = size;
    } else {
      tmp16 = cResult[4];
    }
    return tmp16;
  }
  const tmpResult = useFontScale;
}) : ((arg0) => {
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
});