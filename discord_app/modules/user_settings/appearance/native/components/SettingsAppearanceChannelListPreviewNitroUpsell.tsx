// discord_app/modules/user_settings/appearance/native/components/SettingsAppearanceChannelListPreviewNitroUpsell.tsx
import importAllResult from "AnimatedRenderItem";
import get_ActivityIndicator from "Button";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import ME from "ME";
import jsxProd from "jsxProd";
import LinearGradient from "LinearGradient";
import createCacheKey from "createCacheKey";
import importDefaultResult from "module_4054";

let c10;
let c9;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function SettingsAppearanceChannelListPreviewNitroUpsellComponent(theme) {
  theme = theme.theme;
  let analyticsLocations;
  const tmp = callback3();
  let obj = theme(4054);
  const fn = function l() {
    let num = 1;
    if (theme.theme === outer1_9.LIGHT) {
      num = 0.5;
    }
    const obj = {};
    const merged = Object.assign(outer1_4.absoluteFillObject);
    obj.opacity = theme(outer1_2[7]).withSpring(num, theme(outer1_2[8]).springStandard);
    return obj;
  };
  obj = { theme, ThemeTypes: closure_9, StyleSheet, withSpring: theme(4603).withSpring, springStandard: theme(4607).springStandard };
  fn.__closure = obj;
  fn.__workletHash = 16911565077998;
  fn.__initData = closure_18;
  const animatedStyle = obj.useAnimatedStyle(fn);
  analyticsLocations = analyticsLocations(5519)(analyticsLocations(5539).CLIENT_THEMES_EDITOR).analyticsLocations;
  const items = [analyticsLocations];
  obj = { style: tmp.nitroUpsell, children: null };
  const callback = importAllResult.useCallback(() => {
    let obj = { premiumFeatureCardOrder: null, analyticsLocation: null, analyticsLocations: null };
    obj[0] = theme(outer1_2[14]).PremiumFeatureCardOrder.TIER_2_LEADING;
    obj = { page: outer1_7.USER_SETTINGS, section: outer1_8.SETTINGS_CLIENT_THEMES };
    obj[1] = obj;
    obj[2] = analyticsLocations;
    analyticsLocations(outer1_2[13])(obj);
  }, items);
  const items1 = [callback(LinearGradient, { style: animatedStyle, importantForAccessibility: "no-hide-descendants", colors: closure_13 }), ];
  const obj2 = { text: null, icon: null, variant: "active", onPress: null, size: "md" };
  const intl = theme(1236).intl;
  obj2[0] = intl.string(theme(1236).t.pj0XBN);
  obj2[1] = callback(theme(1297).NitroWheel, { style: tmp.nitroWheelIcon });
  obj2[3] = callback;
  items1[1] = callback(theme(4604).Button, obj2);
  obj[1] = items1;
  return callback2(View, obj);
}
let c3 = importAllResult;
const StyleSheet = get_ActivityIndicator.StyleSheet;
const View = get_ActivityIndicator.View;
({ AnalyticsPages: error, AnalyticsSections: metroImportAll, ThemeTypes: c9 } = ME);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_13 = ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"];
function animationEntering(value) {
  const obj = { opacity: null };
  obj[0] = require(4603) /* CONFIG_NEVER_ANIMATE */.withSpring(value, require(4607) /* SUBTLE_SPRING */.springStandard);
  return obj;
}
let obj = { withSpring: require("CONFIG_NEVER_ANIMATE").withSpring, springStandard: require("SUBTLE_SPRING").springStandard };
animationEntering.__closure = obj;
animationEntering.__workletHash = 2168112734281;
animationEntering.__initData = { code: "function animationEntering_SettingsAppearanceChannelListPreviewNitroUpsellTsx1(visible){const{withSpring,springStandard}=this.__closure;return{opacity:withSpring(visible,springStandard)};}" };
let closure_15 = { code: "function SettingsAppearanceChannelListPreviewNitroUpsellTsx3(finished){const{cleanUp}=this.__closure;var _cleanUp;(_cleanUp=cleanUp)===null||_cleanUp===void 0||_cleanUp(finished);}" };
function animationExiting(value, cleanUp) {
  const _require = cleanUp;
  const obj = { opacity: null };
  const fn = function s(arg0) {
    if (closure_0 != null) {
      tmp(arg0);
    }
  };
  fn.__closure = { cleanUp };
  fn.__workletHash = 15025873527064;
  fn.__initData = closure_15;
  obj[0] = _require(4603).withSpring(value, _require(4607).springStandard, "respect-motion-settings", fn);
  return obj;
}
obj = { withSpring: require("CONFIG_NEVER_ANIMATE").withSpring, springStandard: require("SUBTLE_SPRING").springStandard };
animationExiting.__closure = obj;
animationExiting.__workletHash = 12271101023923;
animationExiting.__initData = { code: "function animationExiting_SettingsAppearanceChannelListPreviewNitroUpsellTsx2(visible,cleanUp){const{withSpring,springStandard}=this.__closure;return{opacity:withSpring(visible,springStandard,'respect-motion-settings',function(finished){cleanUp===null||cleanUp===void 0||cleanUp(finished);})};}" };
const obj1 = { nitroUpsell: null, nitroWheelIcon: null };
let obj2 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.borderBottomStartRadius = require("Themes").radii.xl;
obj2.borderBottomEndRadius = require("Themes").radii.xl;
obj2.height = 2 * require("Themes").space.PX_96;
obj2.padding = require("Themes").space.PX_24;
obj2.justifyContent = "flex-end";
obj2.top = undefined;
obj2.overflow = "hidden";
obj1[0] = obj2;
obj1[1] = { height: require("Themes").space.PX_16, width: require("Themes").space.PX_16 };
let closure_17 = createCacheKey.createStyles(obj1);
let closure_18 = { code: "function SettingsAppearanceChannelListPreviewNitroUpsellTsx4(){const{theme,ThemeTypes,StyleSheet,withSpring,springStandard}=this.__closure;const opacity=theme.theme===ThemeTypes.LIGHT?0.5:1;return{...StyleSheet.absoluteFillObject,opacity:withSpring(opacity,springStandard)};}" };
const obj3 = { height: require("Themes").space.PX_16, width: require("Themes").space.PX_16 };
const memoResult = importAllResult.memo(function SettingsAppearanceChannelListPreviewNitroUpsell(visible) {
  let obj = require(589) /* initialize */;
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const callback = importAllResult.useCallback((arg0, style) => {
    let obj = { style, pointerEvents: "box-none", children: null };
    let tmpResult = null;
    if (null != arg0) {
      obj = {};
      const merged = Object.assign(arg0);
      tmpResult = tmp(closure_19, obj);
    }
    obj[2] = tmpResult;
    return closure_10(callback(table[5]).View, obj);
  }, []);
  obj = { useReducedMotion: stateFromStores, item: null, entering: null, exiting: null, renderItem: null };
  let tmp5;
  if (visible.visible) {
    tmp5 = visible;
  }
  obj[1] = tmp5;
  obj[2] = animationEntering;
  obj[3] = animationExiting;
  obj[4] = callback;
  return closure_10(importDefault(8446), obj);
});
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceChannelListPreviewNitroUpsell.tsx");

export default memoResult;