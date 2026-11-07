// === Module 17604: SettingsAppearanceChannelListPreviewNitroUpsell ===

// Module 17604 (SettingsAppearanceChannelListPreviewNitroUpsell)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import LinearGradientDefault from "LinearGradient" /* 5715 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7387 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7412 */;
import openPremiumModalDefault from "openPremiumModal" /* 10027 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 10028 */;
import AnimatedEnterExitItemDefault from "AnimatedEnterExitItem" /* 10082 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;
import module_1652 from "module_1652" /* 1652 */;

require = fn;
function SettingsAppearanceChannelListPreviewNitroUpsellComponent(theme) {
  let analyticsLocations;
  const tmp = closure_16();
  items = [closure_17, theme.theme, closure_9, c4, analyticsLocations(5761).withSpring, analyticsLocations(5762).springStandard];
  analyticsLocations = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items;
  class SettingsAppearanceChannelListPreviewNitroUpsellTsx4 {
    constructor() {
      num = 1;
      if (analyticsLocations.theme === closure_1.LIGHT) {
        num = 0.5;
      }
      obj = {};
      merged = Object.assign(closure_2.absoluteFillObject);
      obj.opacity = closure_3(num, closure_4);
      return obj;
    }
  }
  const items1 = [tmp5, tmp6, tmp7, tmp8, tmp9];
  SettingsAppearanceChannelListPreviewNitroUpsellTsx4.__closure = items1;
  SettingsAppearanceChannelListPreviewNitroUpsellTsx4.__workletHash = 15416580407479;
  SettingsAppearanceChannelListPreviewNitroUpsellTsx4.__initData = tmp4;
  const animatedStyle = analyticsLocations(1652).useAnimatedStyle(SettingsAppearanceChannelListPreviewNitroUpsellTsx4);
  let obj = analyticsLocations(1652);
  analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.CLIENT_THEMES_EDITOR).analyticsLocations;
  const items2 = [analyticsLocations];
  const obj2 = { style: tmp.nitroUpsell, children: null };
  const callback = noop.useCallback(() => {
    const obj = { premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING, analyticsLocation: { page: constants.USER_SETTINGS, section: constants2.SETTINGS_CLIENT_THEMES }, analyticsLocations };
    openPremiumModalDefault(obj);
  }, items2);
  const items3 = [closure_10(LinearGradient, { style: animatedStyle, importantForAccessibility: "no-hide-descendants", colors }), ];
  const obj4 = { text: null, icon: null, variant: "active", onPress: null, size: "md" };
  const intl = tmp2(1113).intl;
  obj4.text = intl.string(analyticsLocations(1113).t.pj0XBN);
  obj4.icon = closure_10(analyticsLocations(1187).NitroWheel, { style: tmp.nitroWheelIcon });
  obj4.onPress = callback;
  items3[1] = closure_10(analyticsLocations(5758).Button, obj4);
  obj2.children = items3;
  return closure_11(View, obj2);
}
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const View = get_ActivityIndicator.View;
const Constants = fn(1072);
({ AnalyticsPages: metroImportDefault, AnalyticsSections: closure_8, ThemeTypes: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const LinearGradient = module_1652.createAnimatedComponent(LinearGradientDefault);
const colors = ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"];
let items = [{ code: "(function animationEntering_SettingsAppearanceChannelListPreviewNitroUpsellTsx1(visible){let[withSpring,springStandard]=this.__closure;return{opacity:withSpring(visible,springStandard)};})" }, fn(5761).withSpring, fn(5762).springStandard];
let closure_129_0;
let closure_129_1;
[tmp5, tmp6, tmp7] = items;
function animationEntering(arg0) {
  return { opacity: require(arg0, importDefault) };
}
let items1 = [tmp6, tmp7];
animationEntering.__closure = items1;
animationEntering.__workletHash = 2802270631824;
animationEntering.__initData = tmp5;
let items2 = [{ code: "(function animationExiting_SettingsAppearanceChannelListPreviewNitroUpsellTsx3(visible,cleanUp){let[withSpring,springStandard,_worklet_1236385840160_init_data]=this.__closure;return{opacity:withSpring(visible,springStandard,'respect-motion-settings',function animationExiting_SettingsAppearanceChannelListPreviewNitroUpsellTsx3([_worklet_1236385840160_init_data,cleanUp]){const SettingsAppearanceChannelListPreviewNitroUpsellTsx2=function(finished){cleanUp===null||cleanUp===void 0||cleanUp(finished);};SettingsAppearanceChannelListPreviewNitroUpsellTsx2.__closure=[cleanUp];SettingsAppearanceChannelListPreviewNitroUpsellTsx2.__workletHash=1236385840160;SettingsAppearanceChannelListPreviewNitroUpsellTsx2.__initData=_worklet_1236385840160_init_data;return SettingsAppearanceChannelListPreviewNitroUpsellTsx2;}([_worklet_1236385840160_init_data,cleanUp]))};})" }, fn(5761).withSpring, fn(5762).springStandard, { code: "(function SettingsAppearanceChannelListPreviewNitroUpsellTsx2(finished){let[cleanUp]=this.__closure;var _cleanUp;(_cleanUp=cleanUp)===null||_cleanUp===void 0||_cleanUp(finished);})" }];
let closure_130_0;
let closure_130_1;
let closure_130_2;
[tmp8, tmp9, tmp10, tmp11] = items2;
function animationExiting(arg0, arg1) {
  items = [dependencyMap, arg1];
  [tmp2, tmp3] = items;
  const obj = { opacity: null };
  class SettingsAppearanceChannelListPreviewNitroUpsellTsx2 {
    constructor(arg0) {
      if (closure_0 != null) {
        tmp2 = arg0;
        tmpResult = tmp(arg0);
      }
      return;
    }
  }
  const items1 = [tmp3];
  SettingsAppearanceChannelListPreviewNitroUpsellTsx2.__closure = items1;
  SettingsAppearanceChannelListPreviewNitroUpsellTsx2.__workletHash = 1236385840160;
  SettingsAppearanceChannelListPreviewNitroUpsellTsx2.__initData = tmp2;
  obj.opacity = require(arg0, importDefault, "respect-motion-settings", SettingsAppearanceChannelListPreviewNitroUpsellTsx2);
  return obj;
}
let items3 = [tmp9, tmp10, tmp11];
animationExiting.__closure = items3;
animationExiting.__workletHash = 2573458161713;
animationExiting.__initData = tmp8;
const createStyles = fn(5140);
let obj = { nitroUpsell: null, nitroWheelIcon: null };
let obj2 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.borderBottomStartRadius = nativeDefault.radii.xl;
obj2.borderBottomEndRadius = nativeDefault.radii.xl;
obj2.height = 2 * nativeDefault.space.PX_96;
obj2.padding = nativeDefault.space.PX_24;
obj2.justifyContent = "flex-end";
obj2.top = undefined;
obj2.overflow = "hidden";
obj.nitroUpsell = obj2;
let size = { height: nativeDefault.space.PX_16, width: nativeDefault.space.PX_16 };
obj.nitroWheelIcon = size;
let closure_16 = createStyles.createStyles(obj);
let closure_17 = { code: "(function SettingsAppearanceChannelListPreviewNitroUpsellTsx4(){let[theme,ThemeTypes,StyleSheet,withSpring,springStandard]=this.__closure;const opacity=theme.theme===ThemeTypes.LIGHT?0.5:1;return{...StyleSheet.absoluteFillObject,opacity:withSpring(opacity,springStandard)};})" };
size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceChannelListPreviewNitroUpsell.tsx");

export default noop.memo(function SettingsAppearanceChannelListPreviewNitroUpsell(visible) {
  items = [AccessibilityStore];
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
    return closure_1_10(module_1652.View, obj);
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