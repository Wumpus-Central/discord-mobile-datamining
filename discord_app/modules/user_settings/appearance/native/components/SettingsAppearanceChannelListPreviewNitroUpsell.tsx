// === Module 15301: SettingsAppearanceChannelListPreviewNitroUpsell ===

// Module 15301 (SettingsAppearanceChannelListPreviewNitroUpsell)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 4974 */;
import springPresets from "springPresets" /* 4978 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9362 */;
import openPremiumModalDefault from "openPremiumModal" /* 9392 */;
import AnimatedEnterExitItemDefault from "AnimatedEnterExitItem" /* 9969 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;

require = fn;
function SettingsAppearanceChannelListPreviewNitroUpsellComponent(theme) {
  theme = theme.theme;
  let analyticsLocations;
  const tmp = closure_17();
  theme(4296);
  const fn = function l() {
    let num = 1;
    if (theme.theme === ThemeTypes.LIGHT) {
      num = 0.5;
    }
    const obj = {};
    const merged = Object.assign(StyleSheet.absoluteFillObject);
    obj.opacity = spring.withSpring(num, springPresets.springStandard);
    return obj;
  };
  let obj = { theme, ThemeTypes, StyleSheet, withSpring: theme(4974).withSpring, springStandard: theme(4978).springStandard };
  fn.__closure = obj;
  fn.__workletHash = 16911565077998;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  analyticsLocations = analyticsLocations(7162)(analyticsLocations(7182).CLIENT_THEMES_EDITOR).analyticsLocations;
  const items = [analyticsLocations];
  obj = { style: tmp.nitroUpsell, children: null };
  const callback = noop.useCallback(() => {
    let obj = { premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING, analyticsLocation: null, analyticsLocations: null };
    obj = { page: constants.USER_SETTINGS, section: constants2.SETTINGS_CLIENT_THEMES };
    obj.analyticsLocation = obj;
    obj.analyticsLocations = analyticsLocations;
    openPremiumModalDefault(obj);
  }, items);
  const items1 = [closure_10(LinearGradient, { style: animatedStyle, importantForAccessibility: "no-hide-descendants", colors }), ];
  const obj2 = { text: null, icon: null, variant: "active", onPress: null, size: "md" };
  const intl = theme(1114).intl;
  obj2.text = intl.string(theme(1114).t.pj0XBN);
  obj2.icon = closure_10(theme(1178).NitroWheel, { style: tmp.nitroWheelIcon });
  obj2.onPress = callback;
  items1[1] = closure_10(theme(4975).Button, obj2);
  obj.children = items1;
  return closure_11(View, obj);
}
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const View = get_ActivityIndicator.View;
const Constants = fn(1074);
({ AnalyticsPages: closure_7, AnalyticsSections: closure_8, ThemeTypes: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
const colors = ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"];
function animationEntering(value) {
  const obj = { opacity: spring.withSpring(value, springPresets.springStandard) };
  return obj;
}
let obj = { withSpring: fn(4974).withSpring, springStandard: fn(4978).springStandard };
animationEntering.__closure = obj;
animationEntering.__workletHash = 2168112734281;
animationEntering.__initData = { code: "function animationEntering_SettingsAppearanceChannelListPreviewNitroUpsellTsx1(visible){const{withSpring,springStandard}=this.__closure;return{opacity:withSpring(visible,springStandard)};}" };
const __initData = { code: "function SettingsAppearanceChannelListPreviewNitroUpsellTsx3(finished){const{cleanUp}=this.__closure;var _cleanUp;(_cleanUp=cleanUp)===null||_cleanUp===void 0||_cleanUp(finished);}" };
function animationExiting(value, cleanUp) {
  closure_0 = cleanUp;
  const obj = { opacity: null };
  const fn = function s(arg0) {
    if (closure_0 != null) {
      tmp(arg0);
    }
  };
  fn.__closure = { cleanUp };
  fn.__workletHash = 15025873527064;
  fn.__initData = __initData;
  obj.opacity = spring.withSpring(value, springPresets.springStandard, "respect-motion-settings", fn);
  return obj;
}
obj = { withSpring: fn(4974).withSpring, springStandard: fn(4978).springStandard };
animationExiting.__closure = obj;
animationExiting.__workletHash = 12271101023923;
animationExiting.__initData = { code: "function animationExiting_SettingsAppearanceChannelListPreviewNitroUpsellTsx2(visible,cleanUp){const{withSpring,springStandard}=this.__closure;return{opacity:withSpring(visible,springStandard,'respect-motion-settings',function(finished){cleanUp===null||cleanUp===void 0||cleanUp(finished);})};}" };
const createStyles = fn(4560);
const obj1 = { nitroUpsell: null, nitroWheelIcon: null };
let obj2 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.borderBottomStartRadius = nativeDefault.radii.xl;
obj2.borderBottomEndRadius = nativeDefault.radii.xl;
obj2.height = 2 * nativeDefault.space.PX_96;
obj2.padding = nativeDefault.space.PX_24;
obj2.justifyContent = "flex-end";
obj2.top = undefined;
obj2.overflow = "hidden";
obj1.nitroUpsell = obj2;
let size = { height: nativeDefault.space.PX_16, width: nativeDefault.space.PX_16 };
obj1.nitroWheelIcon = size;
let closure_17 = createStyles.createStyles(obj1);
const __initData2 = { code: "function SettingsAppearanceChannelListPreviewNitroUpsellTsx4(){const{theme,ThemeTypes,StyleSheet,withSpring,springStandard}=this.__closure;const opacity=theme.theme===ThemeTypes.LIGHT?0.5:1;return{...StyleSheet.absoluteFillObject,opacity:withSpring(opacity,springStandard)};}" };
size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceChannelListPreviewNitroUpsell.tsx");

export default noop.memo(function SettingsAppearanceChannelListPreviewNitroUpsell(visible) {
  let obj = initialize;
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const callback = noop.useCallback((arg0, style) => {
    let obj = { style, pointerEvents: "box-none", children: null };
    let tmpResult = null;
    if (null != arg0) {
      obj = {};
      const merged = Object.assign(arg0);
      tmpResult = closure_1_10(SettingsAppearanceChannelListPreviewNitroUpsellComponent, obj);
    }
    obj.children = tmpResult;
    return closure_1_10(ReanimatedRexport.View, obj);
  }, []);
  obj = { useReducedMotion: stateFromStores, item: null, entering: null, exiting: null, renderItem: null };
  let tmp5;
  if (visible.visible) {
    tmp5 = visible;
  }
  obj.item = tmp5;
  obj.entering = animationEntering;
  obj.exiting = animationExiting;
  obj.renderItem = callback;
  return closure_1_10(AnimatedEnterExitItemDefault, obj);
});