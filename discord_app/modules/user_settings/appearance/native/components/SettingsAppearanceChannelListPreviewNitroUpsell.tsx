// discord_app/modules/user_settings/appearance/native/components/SettingsAppearanceChannelListPreviewNitroUpsell.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../../design/animation/reanimated/spring/springPresets.tsx";
import LinearGradientDefault from "../../../../../../_runtime/05605_LinearGradient.js";
import PremiumFeaturesCards from "../../../premium/native/PremiumFeaturesCards.tsx";
import openPremiumModalDefault from "../../../../../components_native/premium/openPremiumModal.tsx";
import AnimatedEnterExitItemDefault from "../../../../../design/components/AnimatedEnterExitItem/native/AnimatedEnterExitItem.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";

require = fn;
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const View = get_ActivityIndicator.View;
const Constants = fn(1085);
({ AnalyticsPages: closure_7, AnalyticsSections: closure_8, ThemeTypes: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
const colors = ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"];
function animationEntering(value) {
  const obj = { opacity: spring.withSpring(value, springPresets.springStandard) };
  return obj;
}
animationEntering.__closure = { withSpring: fn(5597).withSpring, springStandard: fn(5598).springStandard };
animationEntering.__workletHash = 2168112734281;
animationEntering.__initData = {
  code: "function animationEntering_SettingsAppearanceChannelListPreviewNitroUpsellTsx1(visible){const{withSpring,springStandard}=this.__closure;return{opacity:withSpring(visible,springStandard)};}",
};
const __initData = {
  code: "function SettingsAppearanceChannelListPreviewNitroUpsellTsx3(finished){const{cleanUp}=this.__closure;var _cleanUp;(_cleanUp=cleanUp)===null||_cleanUp===void 0||_cleanUp(finished);}",
};
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
let obj = { withSpring: fn(5597).withSpring, springStandard: fn(5598).springStandard };
animationExiting.__closure = { withSpring: fn(5597).withSpring, springStandard: fn(5598).springStandard };
animationExiting.__workletHash = 12271101023923;
animationExiting.__initData = {
  code: "function animationExiting_SettingsAppearanceChannelListPreviewNitroUpsellTsx2(visible,cleanUp){const{withSpring,springStandard}=this.__closure;return{opacity:withSpring(visible,springStandard,'respect-motion-settings',function(finished){cleanUp===null||cleanUp===void 0||cleanUp(finished);})};}",
};
const createStyles = fn(4890);
let obj3 = { nitroUpsell: null, nitroWheelIcon: null };
let obj4 = {};
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
const __initData2 = {
  code: "function SettingsAppearanceChannelListPreviewNitroUpsellTsx4(){const{theme,ThemeTypes,StyleSheet,withSpring,springStandard}=this.__closure;const opacity=theme.theme===ThemeTypes.LIGHT?0.5:1;return{...StyleSheet.absoluteFillObject,opacity:withSpring(opacity,springStandard)};}",
};
const __initData3 = {
  code: "function SettingsAppearanceChannelListPreviewNitroUpsellTsx5(){const{theme,ThemeTypes,StyleSheet,withSpring,springStandard}=this.__closure;const opacity=theme.theme===ThemeTypes.LIGHT?0.5:1;return{...StyleSheet.absoluteFillObject,opacity:withSpring(opacity,springStandard)};}",
};
let ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (theme) => {
      const cResult = theme(576).c(14);
      theme = theme.theme;
      const tmp4 = closure_17();
      let obj = theme(576);
      const fn = function n() {
        let num = 1;
        if (theme.theme === ThemeTypes.LIGHT) {
          num = 0.5;
        }
        const obj = {};
        const merged = Object.assign(StyleSheet.absoluteFillObject);
        obj.opacity = spring.withSpring(num, springPresets.springStandard);
        return obj;
      };
      const obj2 = theme(4612);
      fn.__closure = {
        theme,
        ThemeTypes,
        StyleSheet,
        withSpring: theme(5597).withSpring,
        springStandard: theme(5598).springStandard,
      };
      fn.__workletHash = 16911565077998;
      fn.__initData = __initData2;
      const animatedStyle = obj2.useAnimatedStyle(fn);
      const obj3 = {
        theme,
        ThemeTypes,
        StyleSheet,
        withSpring: theme(5597).withSpring,
        springStandard: theme(5598).springStandard,
      };
      analyticsLocations = analyticsLocations(6657)(analyticsLocations(6681).CLIENT_THEMES_EDITOR).analyticsLocations;
      if (cResult[0] !== analyticsLocations) {
        const fn2 = function l() {
          const obj = {
            premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING,
            analyticsLocation: { page: constants.USER_SETTINGS, section: constants2.SETTINGS_CLIENT_THEMES },
            analyticsLocations,
          };
          openPremiumModalDefault(obj);
        };
        cResult[0] = analyticsLocations;
        cResult[1] = fn2;
        let tmp7 = fn2;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] !== animatedStyle) {
        const obj4 = { style: animatedStyle, importantForAccessibility: "no-hide-descendants", colors };
        const tmp12 = closure_10(LinearGradient, obj4);
        cResult[2] = animatedStyle;
        cResult[3] = tmp12;
        let tmp8 = tmp12;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.pj0XBN);
        cResult[4] = stringResult;
        let tmp13 = stringResult;
      } else {
        tmp13 = cResult[4];
      }
      if (cResult[5] !== tmp4.nitroWheelIcon) {
        const obj5 = { style: tmp4.nitroWheelIcon };
        const tmp17 = closure_10(tmp(1188).NitroWheel, obj5);
        cResult[5] = tmp4.nitroWheelIcon;
        cResult[6] = tmp17;
        let tmp15 = tmp17;
      } else {
        tmp15 = cResult[6];
      }
      if (cResult[7] === tmp7) {
        if (cResult[8] === tmp15) {
          let tmp18 = cResult[9];
        }
        if (cResult[10] === tmp4.nitroUpsell) {
          if (cResult[11] === tmp8) {
            if (cResult[12] === tmp18) {
              let tmp20 = cResult[13];
            }
            return tmp20;
          }
        }
        const obj6 = { style: tmp4.nitroUpsell, children: null };
        const items = [tmp8, tmp18];
        obj6.children = items;
        const tmp23 = closure_11(View, obj6);
        cResult[10] = tmp4.nitroUpsell;
        cResult[11] = tmp8;
        cResult[12] = tmp18;
        cResult[13] = tmp23;
        tmp20 = tmp23;
      }
      const tmp19 = closure_10(theme(5594).Button, {
        text: tmp13,
        icon: tmp15,
        variant: "active",
        onPress: tmp7,
        size: "md",
      });
      cResult[7] = tmp7;
      cResult[8] = tmp15;
      cResult[9] = tmp19;
      tmp18 = tmp19;
      const tmp6 = analyticsLocations(6657);
    }
  : (theme) => {
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
      let obj = theme(4612);
      fn.__closure = {
        theme,
        ThemeTypes,
        StyleSheet,
        withSpring: theme(5597).withSpring,
        springStandard: theme(5598).springStandard,
      };
      fn.__workletHash = 14565202241551;
      fn.__initData = __initData3;
      const animatedStyle = obj.useAnimatedStyle(fn);
      const obj2 = {
        theme,
        ThemeTypes,
        StyleSheet,
        withSpring: theme(5597).withSpring,
        springStandard: theme(5598).springStandard,
      };
      analyticsLocations = analyticsLocations(6657)(analyticsLocations(6681).CLIENT_THEMES_EDITOR).analyticsLocations;
      const items = [analyticsLocations];
      const obj3 = { style: tmp.nitroUpsell, children: null };
      const callback = noop.useCallback(() => {
        const obj = {
          premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING,
          analyticsLocation: { page: constants.USER_SETTINGS, section: constants2.SETTINGS_CLIENT_THEMES },
          analyticsLocations,
        };
        openPremiumModalDefault(obj);
      }, items);
      const items1 = [
        closure_10(LinearGradient, { style: animatedStyle, importantForAccessibility: "no-hide-descendants", colors }),
      ];
      const obj5 = { text: null, icon: null, variant: "active", onPress: null, size: "md" };
      const intl = theme(1126).intl;
      obj5.text = intl.string(theme(1126).t.pj0XBN);
      obj5.icon = closure_10(theme(1188).NitroWheel, { style: tmp.nitroWheelIcon });
      obj5.onPress = callback;
      items1[1] = closure_10(theme(5594).Button, obj5);
      obj3.children = items1;
      return closure_11(View, obj3);
    };
ReactCompilerGating = fn(558);
let obj2 = { withSpring: fn(5597).withSpring, springStandard: fn(5598).springStandard };
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/appearance/native/components/SettingsAppearanceChannelListPreviewNitroUpsell.tsx",
);

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (visible) => {
        const cResult = c.c(6);
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
        const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function c(arg0, style) {
            const obj = { style, pointerEvents: "box-none", children: null };
            let tmpResult = null;
            if (null != arg0) {
              const obj2 = {};
              const merged = Object.assign(arg0);
              tmpResult = closure_1_10(closure_1_20, obj2);
            }
            obj.children = tmpResult;
            return closure_1_10(ReanimatedRexport.View, obj);
          };
          cResult[2] = fn2;
          let tmp8 = fn2;
        } else {
          tmp8 = cResult[2];
        }
        let tmp9;
        if (visible.visible) {
          tmp9 = visible;
        }
        if (cResult[3] === tmp9) {
          if (cResult[4] === stateFromStores) {
            let tmp10 = cResult[5];
          }
          return tmp10;
        }
        const tmp11 = v65535(AnimatedEnterExitItemDefault, {
          useReducedMotion: stateFromStores,
          item: tmp9,
          entering: animationEntering,
          exiting: animationExiting,
          renderItem: tmp8,
        });
        cResult[3] = tmp9;
        cResult[4] = stateFromStores;
        cResult[5] = tmp11;
        tmp10 = tmp11;
        let obj2 = {
          useReducedMotion: stateFromStores,
          item: tmp9,
          entering: animationEntering,
          exiting: animationExiting,
          renderItem: tmp8,
        };
        let tmpResult = initialize;
      }
    : (visible) => {
        const items = [AccessibilityStore];
        const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
        const callback = noop.useCallback((arg0, style) => {
          const obj = { style, pointerEvents: "box-none", children: null };
          let tmpResult = null;
          if (null != arg0) {
            const obj2 = {};
            const merged = Object.assign(arg0);
            tmpResult = closure_1_10(closure_1_20, obj2);
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
        return v65535(AnimatedEnterExitItemDefault, obj2);
      },
);
