// === Module 15136: SettingsAppearanceChannelListPreviewNitroUpsell ===

// Module 15136 (SettingsAppearanceChannelListPreviewNitroUpsell)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import spring from "spring" /* 5604 */;
import springPresets from "springPresets" /* 5605 */;
import LinearGradientDefault from "LinearGradient" /* 5612 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 8896 */;
import openPremiumModalDefault from "openPremiumModal" /* 8943 */;
import AnimatedEnterExitItemDefault from "AnimatedEnterExitItem" /* 9660 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj4;
let size;
let unpackModuleId;
const StyleSheet = react_native.StyleSheet;
let View = react_native.View;
({ AnalyticsPages: metroImportDefault, AnalyticsSections: metroImportAll, ThemeTypes: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
const colors = ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"];
function animationEntering(targetHeight) {
  let obj2;
  const obj = { opacity: obj2.withSpring(targetHeight, springPresets.springStandard) };
  obj2 = spring;
  return obj;
}
let obj = { withSpring: spring.withSpring, springStandard: springPresets.springStandard };
animationEntering.__closure = obj;
animationEntering.__workletHash = 2168112734281;
animationEntering.__initData = { code: "function animationEntering_SettingsAppearanceChannelListPreviewNitroUpsellTsx1(visible){const{withSpring,springStandard}=this.__closure;return{opacity:withSpring(visible,springStandard)};}" };
const __initData = { code: "function SettingsAppearanceChannelListPreviewNitroUpsellTsx3(finished){const{cleanUp}=this.__closure;var _cleanUp;(_cleanUp=cleanUp)===null||_cleanUp===void 0||_cleanUp(finished);}" };
function animationExiting(targetHeight, cleanUp) {
  let fn;
  let obj2;
  let closure_0 = cleanUp;
  const obj = { opacity: obj2.withSpring(targetHeight, springPresets.springStandard, "respect-motion-settings", fn) };
  fn = function s(arg0) {
    if (closure_0 != null) {
      tmp(arg0);
    }
  };
  fn.__closure = { cleanUp };
  fn.__workletHash = 15025873527064;
  fn.__initData = __initData;
  obj2 = spring;
  return obj;
}
let obj2 = { withSpring: spring.withSpring, springStandard: springPresets.springStandard };
animationExiting.__closure = obj2;
animationExiting.__workletHash = 12271101023923;
animationExiting.__initData = { code: "function animationExiting_SettingsAppearanceChannelListPreviewNitroUpsellTsx2(visible,cleanUp){const{withSpring,springStandard}=this.__closure;return{opacity:withSpring(visible,springStandard,'respect-motion-settings',function(finished){cleanUp===null||cleanUp===void 0||cleanUp(finished);})};}" };
let createStyles = createStyles_mod;
let obj3 = { nitroUpsell: obj4, nitroWheelIcon: size };
obj4 = { borderBottomStartRadius: nativeDefault.radii.xl, borderBottomEndRadius: nativeDefault.radii.xl, height: 2 * nativeDefault.space.PX_96, padding: nativeDefault.space.PX_24, justifyContent: "flex-end", top: undefined, overflow: "hidden" };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
size = { height: nativeDefault.space.PX_16, width: nativeDefault.space.PX_16 };
let closure_17 = createStyles(obj3);
const __initData2 = { code: "function SettingsAppearanceChannelListPreviewNitroUpsellTsx4(){const{theme,ThemeTypes,StyleSheet,withSpring,springStandard}=this.__closure;const opacity=theme.theme===ThemeTypes.LIGHT?0.5:1;return{...StyleSheet.absoluteFillObject,opacity:withSpring(opacity,springStandard)};}" };
const __initData3 = { code: "function SettingsAppearanceChannelListPreviewNitroUpsellTsx5(){const{theme,ThemeTypes,StyleSheet,withSpring,springStandard}=this.__closure;const opacity=theme.theme===ThemeTypes.LIGHT?0.5:1;return{...StyleSheet.absoluteFillObject,opacity:withSpring(opacity,springStandard)};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((theme) => {
  let analyticsLocations;
  let items;
  let tmp13;
  let tmp15;
  let tmp7;
  let tmp8;
  let tmp = theme;
  let obj = theme(576);
  const cResult = obj.c(14);
  theme = theme.theme;
  const tmp4 = closure_17();
  let obj2 = theme(4618);
  const fn = function n() {
    let obj2;
    let num = 1;
    if (theme.theme === constants.LIGHT) {
      num = 0.5;
    }
    const obj = { opacity: obj2.withSpring(num, springPresets.springStandard) };
    const merged = Object.assign(StyleSheet.absoluteFillObject);
    obj2 = spring;
    return obj;
  };
  fn.__closure = { theme, ThemeTypes, StyleSheet, withSpring: theme(5604).withSpring, springStandard: theme(5605).springStandard };
  fn.__workletHash = 16911565077998;
  fn.__initData = __initData2;
  ({ theme, ThemeTypes, StyleSheet, withSpring: theme(5604).withSpring, springStandard: theme(5605).springStandard });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const tmp6 = analyticsLocations(6664);
  analyticsLocations = tmp6(analyticsLocations(6688).CLIENT_THEMES_EDITOR).analyticsLocations;
  if (cResult[0] !== analyticsLocations) {
    const fn2 = function l() {
      let obj2;
      const obj = { premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING, analyticsLocation: obj2, analyticsLocations };
      obj2 = { page: metroImportDefault.USER_SETTINGS, section: metroImportAll.SETTINGS_CLIENT_THEMES };
      const tmp = openPremiumModalDefault;
      tmp(obj);
    };
    let num = 0;
    cResult[0] = analyticsLocations;
    cResult[1] = fn2;
    tmp7 = fn2;
  } else {
    tmp7 = cResult[1];
  }
  const nitroUpsell = tmp4.nitroUpsell;
  if (cResult[2] !== animatedStyle) {
    const obj4 = { style: animatedStyle, importantForAccessibility: "no-hide-descendants", colors };
    const tmp12 = closure_10(LinearGradient, obj4);
    cResult[2] = animatedStyle;
    cResult[3] = tmp12;
    tmp8 = tmp12;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.pj0XBN);
    cResult[4] = stringResult;
    tmp13 = stringResult;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] !== tmp4.nitroWheelIcon) {
    const obj5 = { style: tmp4.nitroWheelIcon };
    const tmp17 = closure_10(tmp(1188).NitroWheel, obj5);
    cResult[5] = tmp4.nitroWheelIcon;
    cResult[6] = tmp17;
    tmp15 = tmp17;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] === tmp7) {
    let tmp18;
    if (cResult[8] === tmp15) {
      tmp18 = cResult[9];
    }
    if (cResult[10] === tmp4.nitroUpsell) {
      if (cResult[11] === tmp8) {
        let tmp20;
        if (cResult[12] === tmp18) {
          tmp20 = cResult[13];
        }
        return tmp20;
      }
    }
    const obj6 = { style: nitroUpsell, children: items };
    items = [tmp8, tmp18];
    const tmp23 = closure_11(View, obj6);
    cResult[10] = tmp4.nitroUpsell;
    cResult[11] = tmp8;
    cResult[12] = tmp18;
    cResult[13] = tmp23;
    tmp20 = tmp23;
  }
  const tmp19 = closure_10(tmp(5601).Button, { text: tmp13, icon: tmp15, variant: "active", onPress: tmp7, size: "md" });
  cResult[7] = tmp7;
  cResult[8] = tmp15;
  cResult[9] = tmp19;
  tmp18 = tmp19;
}) : ((theme) => {
  let intl;
  let items1;
  let obj6;
  theme = theme.theme;
  let analyticsLocations;
  let tmp = closure_17();
  let obj = theme(4618);
  const fn = function l() {
    let obj2;
    let num = 1;
    if (theme.theme === constants.LIGHT) {
      num = 0.5;
    }
    const obj = { opacity: obj2.withSpring(num, springPresets.springStandard) };
    const merged = Object.assign(StyleSheet.absoluteFillObject);
    obj2 = spring;
    return obj;
  };
  let obj2 = { theme, ThemeTypes, StyleSheet, withSpring: theme(5604).withSpring, springStandard: theme(5605).springStandard };
  fn.__closure = obj2;
  fn.__workletHash = 14565202241551;
  fn.__initData = __initData3;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const tmp3 = analyticsLocations(6664);
  analyticsLocations = tmp3(analyticsLocations(6688).CLIENT_THEMES_EDITOR).analyticsLocations;
  const items = [analyticsLocations];
  const obj3 = { style: tmp.nitroUpsell, children: items1 };
  const obj4 = { style: animatedStyle, importantForAccessibility: "no-hide-descendants", colors };
  const callback = react.useCallback(() => {
    let obj2;
    const obj = { premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING, analyticsLocation: obj2, analyticsLocations };
    obj2 = { page: metroImportDefault.USER_SETTINGS, section: metroImportAll.SETTINGS_CLIENT_THEMES };
    const tmp = openPremiumModalDefault;
    tmp(obj);
  }, items);
  items1 = [closure_10(LinearGradient, obj4), ];
  const obj5 = { text: intl.string(theme(1126).t.pj0XBN), icon: closure_10(theme(1188).NitroWheel, obj6), variant: "active", onPress: callback, size: "md" };
  const Button = theme(5601).Button;
  intl = theme(1126).intl;
  obj6 = { style: tmp.nitroWheelIcon };
  items1[1] = closure_10(Button, obj5);
  return closure_11(View, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((visible) => {
  let tmp4;
  let tmp5;
  let tmp8;
  let useReducedMotion;
  let obj = react2;
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function s() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function c(arg0, style) {
      let tmpResult;
      const obj = { style, pointerEvents: "box-none", children: tmpResult };
      tmpResult = null;
      View = ReanimatedRexport.View;
      if (null != arg0) {
        const obj2 = {};
        const merged = Object.assign(arg0);
        tmpResult = closure_1_10(closure_1_20, obj2);
      }
      return closure_1_10(View, obj);
    };
    cResult[2] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[2];
  }
  let tmp9;
  if (visible.visible) {
    tmp9 = visible;
  }
  if (cResult[3] === tmp9) {
    let tmp10;
    if (cResult[4] === stateFromStores) {
      tmp10 = cResult[5];
    }
    return tmp10;
  }
  let obj2 = { useReducedMotion: stateFromStores, item: tmp9, entering: animationEntering, exiting: animationExiting, renderItem: tmp8 };
  const tmp11 = authStore(AnimatedEnterExitItemDefault, obj2);
  cResult[3] = tmp9;
  cResult[4] = stateFromStores;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : ((visible) => {
  let tmp5;
  let useReducedMotion;
  let obj = get_initialized;
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const callback = react.useCallback((arg0, style) => {
    let tmpResult;
    const obj = { style, pointerEvents: "box-none", children: tmpResult };
    tmpResult = null;
    View = ReanimatedRexport.View;
    if (null != arg0) {
      const obj2 = {};
      const merged = Object.assign(arg0);
      tmpResult = closure_1_10(closure_1_20, obj2);
    }
    return closure_1_10(View, obj);
  }, []);
  let obj2 = { useReducedMotion: stateFromStores, item: tmp5, entering: animationEntering, exiting: animationExiting, renderItem: callback };
  tmp5 = undefined;
  const tmp4 = AnimatedEnterExitItemDefault;
  if (visible.visible) {
    tmp5 = visible;
  }
  return authStore(tmp4, obj2);
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceChannelListPreviewNitroUpsell.tsx");

export default memoResult;