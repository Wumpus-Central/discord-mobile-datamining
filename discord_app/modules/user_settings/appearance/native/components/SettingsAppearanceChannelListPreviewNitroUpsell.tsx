// === Module 15387: SettingsAppearanceChannelListPreviewNitroUpsell ===

// Module 15387 (SettingsAppearanceChannelListPreviewNitroUpsell)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 5055 */;
import springPresets from "springPresets" /* 5059 */;
import LinearGradientDefault from "LinearGradient" /* 5068 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9492 */;
import openPremiumModalDefault from "openPremiumModal" /* 9522 */;
import AnimatedEnterExitItemDefault from "AnimatedEnterExitItem" /* 10098 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4628 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4373 */;

require = fn;
function SettingsAppearanceChannelListPreviewNitroUpsellComponent(theme) {
  theme = theme.theme;
  let analyticsLocations;
  const tmp = closure_17();
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
  let obj = theme(4373);
  fn.__closure = { theme, ThemeTypes, StyleSheet, withSpring: theme(5055).withSpring, springStandard: theme(5059).springStandard };
  fn.__workletHash = 16911565077998;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj2 = { theme, ThemeTypes, StyleSheet, withSpring: theme(5055).withSpring, springStandard: theme(5059).springStandard };
  analyticsLocations = analyticsLocations(7265)(analyticsLocations(7285).CLIENT_THEMES_EDITOR).analyticsLocations;
  const items = [analyticsLocations];
  const obj3 = { style: tmp.nitroUpsell, children: null };
  const callback = noop.useCallback(() => {
    const obj = { premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING, analyticsLocation: { page: constants.USER_SETTINGS, section: constants2.SETTINGS_CLIENT_THEMES }, analyticsLocations };
    openPremiumModalDefault(obj);
  }, items);
  const items1 = [closure_10(LinearGradient, { style: animatedStyle, importantForAccessibility: "no-hide-descendants", colors }), ];
  const obj5 = { text: null, icon: null, variant: "active", onPress: null, size: "md" };
  const intl = theme(1114).intl;
  obj5.text = intl.string(theme(1114).t.pj0XBN);
  obj5.icon = closure_10(theme(1176).NitroWheel, { style: tmp.nitroWheelIcon });
  obj5.onPress = callback;
  items1[1] = closure_10(theme(5056).Button, obj5);
  obj3.children = items1;
  return closure_11(View, obj3);
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
animationEntering.__closure = { withSpring: fn(5055).withSpring, springStandard: fn(5059).springStandard };
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
let obj = { withSpring: fn(5055).withSpring, springStandard: fn(5059).springStandard };
animationExiting.__closure = { withSpring: fn(5055).withSpring, springStandard: fn(5059).springStandard };
animationExiting.__workletHash = 12271101023923;
animationExiting.__initData = { code: "function animationExiting_SettingsAppearanceChannelListPreviewNitroUpsellTsx2(visible,cleanUp){const{withSpring,springStandard}=this.__closure;return{opacity:withSpring(visible,springStandard,'respect-motion-settings',function(finished){cleanUp===null||cleanUp===void 0||cleanUp(finished);})};}" };
const createStyles = fn(4636);
let obj3 = { nitroUpsell: null, nitroWheelIcon: null };
const obj4 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.borderBottomStartRadius = nativeDefault.radii.xl;
obj4.borderBottomEndRadius = nativeDefault.radii.xl;
obj4.height = 2 * nativeDefault.space.PX_96;
obj4.padding = nativeDefault.space.PX_24;
obj4.justifyContent = "flex-end";
obj4.top = undefined;
obj4.overflow = "hidden";
obj3.nitroUpsell = obj4;
let size = { height: nativeDefault.space.PX_16, width: nativeDefault.space.PX_16 };
obj3.nitroWheelIcon = size;
let closure_17 = createStyles.createStyles(obj3);
const __initData2 = { code: "function SettingsAppearanceChannelListPreviewNitroUpsellTsx4(){const{theme,ThemeTypes,StyleSheet,withSpring,springStandard}=this.__closure;const opacity=theme.theme===ThemeTypes.LIGHT?0.5:1;return{...StyleSheet.absoluteFillObject,opacity:withSpring(opacity,springStandard)};}" };
let obj2 = { withSpring: fn(5055).withSpring, springStandard: fn(5059).springStandard };
size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceChannelListPreviewNitroUpsell.tsx");

export default noop.memo(function SettingsAppearanceChannelListPreviewNitroUpsell(visible) {
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const callback = noop.useCallback((arg0, style) => {
    const obj = { style, pointerEvents: "box-none", children: null };
    let tmpResult = null;
    if (null != arg0) {
      const obj2 = {};
      const merged = Object.assign(arg0);
      tmpResult = closure_1_10(SettingsAppearanceChannelListPreviewNitroUpsellComponent, obj2);
    }
    obj.children = tmpResult;
    return closure_1_10(ReanimatedRexport.View, obj);
  }, []);
  let obj2 = { useReducedMotion: stateFromStores, item: null, entering: null, exiting: null, renderItem: null };
  let tmp5;
  if (visible.visible) {
    tmp5 = visible;
  }
  obj2.item = tmp5;
  obj2.entering = animationEntering;
  obj2.exiting = animationExiting;
  obj2.renderItem = callback;
  return closure_1_10(AnimatedEnterExitItemDefault, obj2);
});