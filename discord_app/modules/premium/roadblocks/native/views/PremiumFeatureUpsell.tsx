// === Module 9964: PremiumFeatureUpsell ===

// Module 9964 (PremiumFeatureUpsell)
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import spring from "spring" /* 4974 */;
import springPresets from "springPresets" /* 4978 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7850 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7853 */;
import noop from "module_19" /* 19 */;

require = fn;
function PremiumFeatureUpsellPill(featureName) {
  featureName = featureName.featureName;
  let flag = featureName.showShadow;
  if (flag === undefined) {
    flag = true;
  }
  let loading;
  let obj = featureName(9313);
  let obj1 = featureName(9965);
  const premiumUpsellConfig = obj.usePremiumUpsellConfig(obj1.getUpsellType(featureName));
  const useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  const tmp4 = closure_14(useTier0UpsellContent);
  dependencyMap = tmp4;
  let obj2 = featureName(9966);
  const mobileEmojiPickerUpsellRestyleEnabledForFeature = obj2.getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumFeatureUpsell");
  const tmp7 = useTier0UpsellContent ? closure_7.TIER_0 : closure_7.TIER_2;
  const fn = () => openPremiumUpsellActionSheetDefault(featureName);
  let tmpResult = tmp(4218);
  const premiumTypeDisplayName = tmpResult.getPremiumTypeDisplayName(tmp7);
  if (featureName(7853).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
    const intl4 = tmp(1114).intl;
    obj = { nitroTierName: premiumTypeDisplayName, onClick: fn };
    let formatResult = intl4.format(tmp(1114).t["tw/SSq"], obj);
  } else if (tmp(7853).EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
    const intl3 = tmp(1114).intl;
    obj = { nitroTierName: premiumTypeDisplayName, onClick: fn };
    formatResult = intl3.format(tmp(1114).t.gMVjeS, obj);
  } else if (tmp(7853).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
    const intl2 = tmp(1114).intl;
    obj1 = { maxFileSize: null, nitroTierName: null, onClick: null };
    tmpResult = tmp(4218);
    obj1.maxFileSize = tmpResult.getMaxFileSizeForPremiumType(tmp7);
    obj1.nitroTierName = premiumTypeDisplayName;
    obj1.onClick = fn;
    formatResult = intl2.format(tmp(1114).t.zzyLEK, obj1);
  } else if (tmp(7853).EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
    const intl = tmp(1114).intl;
    obj2 = { nitroTierName: premiumTypeDisplayName, onClick: fn };
    formatResult = intl.format(tmp(1114).t.lyxfbj, obj2);
  } else if (tmp(7853).EntitlementFeatureNames.APP_ICONS === featureName) {
    const intl6 = tmp(1114).intl;
    const obj3 = { onClick: fn };
    formatResult = intl6.format(tmp(1114).t.x2dQxN, obj3);
  }
  const tmp11 = useTier0UpsellContent(9967)(useTier0UpsellContent, premiumUpsellConfig.onViewAllPerks, constants3.PREMIUM_UPSELL_FILE_UPLOAD);
  loading = tmp11.loading;
  let items = [tmp4.container, , ];
  if (flag) {
    flag = tmp4.containerShadow;
  }
  const obj4 = { style: items, children: null };
  items[1] = flag;
  items[2] = featureName.style;
  const obj5 = { style: tmp4.labelContainer, children: null };
  if (mobileEmojiPickerUpsellRestyleEnabledForFeature) {
    let items1 = [tmp14, ];
    const obj6 = { style: tmp4.text, variant: "text-sm/medium", children: formatResult };
    items1[1] = closure_12(tmp(4556).Text, obj6);
    obj5.children = items1;
    const items2 = [tmp12(tmp13, obj5), ];
    const obj7 = { disabled: loading, shrink: true, style: tmp4.button, size: tmp(1178).ButtonSizes.XSMALL, onPress: tmp11.onPress, text: null, color: null, renderIcon: null, renderLinearGradient: null };
    const intl5 = tmp(1114).intl;
    const string = intl5.string;
    const t = tmp(1114).t;
    if (useTier0UpsellContent) {
      let stringResult = string(t.cM8bbx);
    } else {
      stringResult = string(t["8x0jKT"]);
    }
    obj7.text = stringResult;
    obj7.color = tmp(1178).ButtonColors.GREEN;
    obj7.renderIcon = function renderIcon() {
      if (mobileEmojiPickerUpsellRestyleEnabledForFeature) {
        let obj = { size: "xxs", color: nativeDefault.colors.WHITE, style: null };
        const items = [closure_2.nitroWheelIcon, ];
        let nitroWheelDisabled2 = loading;
        if (loading) {
          nitroWheelDisabled2 = closure_2.nitroWheelDisabled;
        }
        items[1] = nitroWheelDisabled2;
        obj.style = items;
        let tmpResult = tmp(tmp2(8662).NitroWheelIcon, obj);
      } else {
        const items1 = [closure_2.nitroWheelButton, ];
        let nitroWheelDisabled = loading;
        if (loading) {
          nitroWheelDisabled = closure_2.nitroWheelDisabled;
        }
        obj = { style: null };
        items1[1] = nitroWheelDisabled;
        obj.style = items1;
        tmpResult = tmp(tmp2(1178).NitroWheel, obj);
      }
      return tmpResult;
    };
    obj7.renderLinearGradient = function renderLinearGradient() {
      const obj = { style: closure_2.gradient, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: useTier0UpsellContent ? Gradients.PREMIUM_TIER_0 : Gradients.PREMIUM_TIER_2_TRI_COLOR };
      return closure_2_12(LinearGradientDefault, obj);
    };
    items2[1] = closure_12(tmp(1178).ShinyButton, obj7);
    obj4.children = items2;
    return tmp12(tmp13, obj4);
  } else {
    const obj8 = { source: useTier0UpsellContent(useTier0UpsellContent ? 9968 : 9963), style: tmp4.nitroWheel, disableColor: true };
    closure_12(tmp(1178).Icon, obj8);
  }
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const PremiumConstants = fn(1373);
({ PremiumSubscriptionSKUs: metroRequire, PremiumTypes: closure_7, PremiumUpsellTypes: closure_8 } = PremiumConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_9, AnalyticsPages: c10 } = Constants);
const Gradients = fn(7432).Gradients;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let createStyles = fn(4560);
let closure_14 = createStyles.createStyles((arg0) => {
  let obj = { container: null, containerShadow: null, nitroWheel: null, labelContainer: null, text: null, nitroWheelButton: null, nitroWheelIcon: null, nitroWheelDisabled: null, button: null, gradient: null };
  obj = { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round, padding: nativeDefault.space.PX_12, justifyContent: "space-between" };
  obj.container = obj;
  obj = {};
  const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  obj.shadowColor = arg0 ? unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2 : unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2;
  obj.shadowOpacity = 0.6;
  obj.containerShadow = obj;
  const size = { width: 20, height: 20, marginEnd: tmp(576).space.PX_4 };
  obj.nitroWheel = size;
  obj.labelContainer = { flexDirection: "row", flexShrink: 1, alignItems: "center", marginEnd: nativeDefault.space.PX_4 };
  obj.text = { flexShrink: 1, flexWrap: "wrap" };
  obj.nitroWheelButton = { marginStart: -2, width: 20, height: 20 };
  obj.nitroWheelIcon = { marginEnd: 4 };
  obj.nitroWheelDisabled = { opacity: 0.6 };
  const obj1 = { flexDirection: "row", flexShrink: 1, alignItems: "center", marginEnd: nativeDefault.space.PX_4 };
  obj.button = { alignSelf: "center", borderRadius: nativeDefault.radii.round };
  const merged1 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.gradient = {};
  return obj;
});
const __initData = { code: "function PremiumFeatureUpsellTsx2(finished){const{cleanUp}=this.__closure;var _cleanUp;(_cleanUp=cleanUp)===null||_cleanUp===void 0||_cleanUp(finished);}" };
function animationEnterExit(value, cleanUp) {
  closure_0 = cleanUp;
  const obj = { opacity: null };
  const fn = function l(arg0) {
    if (closure_0 != null) {
      tmp(arg0);
    }
  };
  fn.__closure = { cleanUp };
  fn.__workletHash = 7812030105128;
  fn.__initData = __initData;
  obj.opacity = spring.withSpring(value, springPresets.springStandard, "respect-motion-settings", fn);
  return obj;
}
createStyles = { withSpring: fn(4974).withSpring, springStandard: fn(4978).springStandard };
animationEnterExit.__closure = createStyles;
animationEnterExit.__workletHash = 15470414797897;
animationEnterExit.__initData = { code: "function animationEnterExit_PremiumFeatureUpsellTsx1(visible,cleanUp){const{withSpring,springStandard}=this.__closure;return{opacity:withSpring(visible,springStandard,'respect-motion-settings',function(finished){cleanUp===null||cleanUp===void 0||cleanUp(finished);})};}" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumFeatureUpsell.tsx");

export default function PremiumFeatureUpsell(shouldShow) {
  let merged = Object.assign(shouldShow, Object.assign({ shouldShow: 0 }));
  let analyticsLocations;
  let _location;
  const ref = _location.useRef(false);
  analyticsLocations = ref(analyticsLocations[25])().analyticsLocations;
  let obj = merged(analyticsLocations[26]);
  _location = obj.useAnalyticsContext().location;
  const tmp3 = ref(analyticsLocations[27])(shouldShow.shouldShow);
  closure_4 = tmp3;
  const items = [ref, _location, analyticsLocations, tmp3, merged.featureName];
  const callback = _location.useCallback((arg0, style) => {
    let obj = { style, children: null };
    obj = {};
    merged = Object.assign(arg0);
    obj.children = closure_1_12(PremiumFeatureUpsellPill, obj);
    return closure_1_12(ref(analyticsLocations[28]).View, obj);
  }, []);
  const effect = _location.useEffect(() => {
    const current = ref.current;
    let tmp2 = !current;
    if (!current) {
      tmp2 = closure_4;
    }
    if (tmp2) {
      let castPremiumSubscriptionAsSkuId = dependencyMap;
      let obj = AnalyticsUtilsDefault;
      const featureName = merged.featureName;
      let tmp6 = require;
      if (EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
        let APP_ICON_INLINE_UPSELL = constants.SOUNDBOARD_EVERYWHERE_INLINE_UPSELL;
      } else if (tmp6(7853).EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
        APP_ICON_INLINE_UPSELL = constants.EMOJI_EVERYWHERE_INLINE_UPSELL;
      } else {
        if (tmp6(7853).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
          APP_ICON_INLINE_UPSELL = constants.LARGER_FILE_UPLOAD_INLINE_UPSELL;
        } else if (tmp6(7853).EntitlementFeatureNames.APP_ICONS !== featureName) {
          if (tmp6(7853).EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
            APP_ICON_INLINE_UPSELL = constants.STREAM_QUALITY_UPSELL;
          }
        }
        APP_ICON_INLINE_UPSELL = constants.APP_ICON_INLINE_UPSELL;
      }
      obj = { type: APP_ICON_INLINE_UPSELL, location: _location, location_stack: analyticsLocations, sku_id: null };
      tmp6 = tmp6(4218);
      castPremiumSubscriptionAsSkuId = tmp6.castPremiumSubscriptionAsSkuId;
      obj.sku_id = castPremiumSubscriptionAsSkuId(TIER_2.TIER_2);
      obj.track(constants2.PREMIUM_UPSELL_VIEWED, obj);
      ref.current = true;
    }
  }, items);
  let tmp8;
  if (tmp3) {
    tmp8 = merged;
  }
  obj = { useReducedMotion: false, item: tmp8, entering: animationEnterExit, exiting: animationEnterExit, renderItem: callback };
  return closure_12(ref(analyticsLocations[30]), obj);
};