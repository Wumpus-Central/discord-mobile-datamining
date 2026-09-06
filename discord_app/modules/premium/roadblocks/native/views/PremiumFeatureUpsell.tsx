// === Module 9964: PremiumFeatureUpsellPill ===

// Module 9964 (PremiumFeatureUpsellPill)
import ThemesDefault from "Themes" /* 576 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import GuildFeatures from "GuildFeatures" /* 1373 */;
import ME from "ME" /* 1074 */;
import { Gradients } from "items" /* 7432 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
function PremiumFeatureUpsellPill(featureName) {
  featureName = featureName.featureName;
  let flag = featureName.showShadow;
  if (flag === undefined) {
    flag = true;
  }
  let useTier0UpsellContent;
  dependencyMap = undefined;
  let mobileEmojiPickerUpsellRestyleEnabledForFeature;
  let loading;
  let obj = featureName(9313);
  obj1 = featureName(9965);
  const premiumUpsellConfig = obj.usePremiumUpsellConfig(obj1.getUpsellType(featureName));
  useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  const tmp4 = callback2(useTier0UpsellContent);
  dependencyMap = tmp4;
  let obj2 = featureName(9966);
  mobileEmojiPickerUpsellRestyleEnabledForFeature = obj2.getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumFeatureUpsell");
  const tmp7 = useTier0UpsellContent ? closure_7.TIER_0 : closure_7.TIER_2;
  const fn = () => useTier0UpsellContent(closure_2[14])(featureName);
  let tmpResult = tmp(4218);
  const premiumTypeDisplayName = tmpResult.getPremiumTypeDisplayName(tmp7);
  if (featureName(7853).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
    const intl4 = tmp(1114).intl;
    obj = { nitroTierName: null, onClick: null };
    obj[0] = premiumTypeDisplayName;
    obj[1] = fn;
    let formatResult = intl4.format(tmp(1114).t["tw/SSq"], obj);
  } else if (tmp(7853).EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
    const intl3 = tmp(1114).intl;
    obj = { nitroTierName: null, onClick: null };
    obj[0] = premiumTypeDisplayName;
    obj[1] = fn;
    formatResult = intl3.format(tmp(1114).t.gMVjeS, obj);
  } else if (tmp(7853).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
    const intl2 = tmp(1114).intl;
    obj1 = { maxFileSize: null, nitroTierName: null, onClick: null };
    tmpResult = tmp(4218);
    obj1[0] = tmpResult.getMaxFileSizeForPremiumType(tmp7);
    obj1[1] = premiumTypeDisplayName;
    obj1[2] = fn;
    formatResult = intl2.format(tmp(1114).t.zzyLEK, obj1);
  } else if (tmp(7853).EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
    const intl = tmp(1114).intl;
    obj2 = { nitroTierName: null, onClick: null };
    obj2[0] = premiumTypeDisplayName;
    obj2[1] = fn;
    formatResult = intl.format(tmp(1114).t.lyxfbj, obj2);
  } else if (tmp(7853).EntitlementFeatureNames.APP_ICONS === featureName) {
    const intl6 = tmp(1114).intl;
    const obj3 = { onClick: null };
    obj3[0] = fn;
    formatResult = intl6.format(tmp(1114).t.x2dQxN, obj3);
  }
  const tmp11 = useTier0UpsellContent(9967)(useTier0UpsellContent, premiumUpsellConfig.onViewAllPerks, constants.PREMIUM_UPSELL_FILE_UPLOAD);
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
    const obj6 = { style: null, variant: "text-sm/medium", children: null };
    obj6[0] = tmp4.text;
    obj6[2] = formatResult;
    items1[1] = callback(tmp(4556).Text, obj6);
    obj5[1] = items1;
    const items2 = [tmp12(tmp13, obj5), ];
    const obj7 = { disabled: null, shrink: true, style: null, size: null, onPress: null, text: null, color: null, renderIcon: null, renderLinearGradient: null };
    obj7[0] = loading;
    obj7[2] = tmp4.button;
    obj7[3] = tmp(1178).ButtonSizes.XSMALL;
    obj7[4] = tmp11.onPress;
    const intl5 = tmp(1114).intl;
    const string = intl5.string;
    const t = tmp(1114).t;
    if (useTier0UpsellContent) {
      let stringResult = string(t.cM8bbx);
    } else {
      stringResult = string(t["8x0jKT"]);
    }
    obj7[5] = stringResult;
    obj7[6] = tmp(1178).ButtonColors.GREEN;
    obj7[7] = function renderIcon() {
      if (mobileEmojiPickerUpsellRestyleEnabledForFeature) {
        let obj = { size: "xxs", color: null, style: null };
        obj[1] = useTier0UpsellContent(closure_2[10]).colors.WHITE;
        const items = [closure_2.nitroWheelIcon, ];
        let nitroWheelDisabled2 = loading;
        if (loading) {
          nitroWheelDisabled2 = closure_2.nitroWheelDisabled;
        }
        items[1] = nitroWheelDisabled2;
        obj[2] = items;
        let tmpResult = tmp(tmp2(tmp3[20]).NitroWheelIcon, obj);
      } else {
        const items1 = [closure_2.nitroWheelButton, ];
        let nitroWheelDisabled = loading;
        if (loading) {
          nitroWheelDisabled = closure_2.nitroWheelDisabled;
        }
        obj = { style: null };
        items1[1] = nitroWheelDisabled;
        obj[0] = items1;
        tmpResult = tmp(tmp2(tmp3[16]).NitroWheel, obj);
      }
      return tmpResult;
    };
    obj7[8] = function renderLinearGradient() {
      const obj = { style: closure_2.gradient, start: featureName(closure_2[22]).HorizontalGradient.START, end: featureName(closure_2[22]).HorizontalGradient.END, colors: useTier0UpsellContent ? closure_1_11.PREMIUM_TIER_0 : closure_1_11.PREMIUM_TIER_2_TRI_COLOR };
      return closure_1_12(useTier0UpsellContent(closure_2[21]), obj);
    };
    items2[1] = callback(tmp(1178).ShinyButton, obj7);
    obj4[1] = items2;
    return tmp12(tmp13, obj4);
  } else {
    const obj8 = { source: null, style: null, disableColor: true };
    obj8[0] = useTier0UpsellContent(useTier0UpsellContent ? 9968 : 9963);
    obj8[1] = tmp4.nitroWheel;
    callback(tmp(1178).Icon, obj8);
    const tmp15 = callback;
  }
}
({ StyleSheet: c4, View: c5 } = get_ActivityIndicator);
({ PremiumSubscriptionSKUs: closure_6, PremiumTypes: error, PremiumUpsellTypes: closure_8 } = GuildFeatures);
({ AnalyticEvents: c9, AnalyticsPages: c10 } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = createCacheKey.createStyles((arg0) => {
  let obj = { container: null, containerShadow: null, nitroWheel: null, labelContainer: null, text: null, nitroWheelButton: null, nitroWheelIcon: null, nitroWheelDisabled: null, button: null, gradient: null };
  obj = { flexDirection: "row", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.round, padding: ThemesDefault.space.PX_12, justifyContent: "space-between" };
  obj[0] = obj;
  obj = {};
  const merged = Object.assign(ThemesDefault.shadows.SHADOW_HIGH);
  const unsafe_rawColors = ThemesDefault.unsafe_rawColors;
  obj.shadowColor = arg0 ? unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2 : unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2;
  obj.shadowOpacity = 0.6;
  obj[1] = obj;
  obj[2] = { width: 20, height: 20, marginEnd: ThemesDefault.space.PX_4 };
  obj1 = { width: 20, height: 20, marginEnd: ThemesDefault.space.PX_4 };
  obj[3] = { flexDirection: "row", flexShrink: 1, alignItems: "center", marginEnd: ThemesDefault.space.PX_4 };
  obj[4] = { flexShrink: 1, flexWrap: "wrap" };
  obj[5] = { marginStart: -2, width: 20, height: 20 };
  obj[6] = { marginEnd: 4 };
  obj[7] = { opacity: 0.6 };
  const obj2 = { flexDirection: "row", flexShrink: 1, alignItems: "center", marginEnd: ThemesDefault.space.PX_4 };
  obj[8] = { alignSelf: "center", borderRadius: ThemesDefault.radii.round };
  const merged1 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj[9] = {};
  return obj;
});
let closure_16 = { code: "function PremiumFeatureUpsellTsx2(finished){const{cleanUp}=this.__closure;var _cleanUp;(_cleanUp=cleanUp)===null||_cleanUp===void 0||_cleanUp(finished);}" };
function animationEnterExit(value, cleanUp) {
  const _require = cleanUp;
  const obj = { opacity: _require(4974).withSpring(value, _require(4978).springStandard, "respect-motion-settings", fn) };
  fn = function l(arg0) {
    if (closure_0 != null) {
      tmp(arg0);
    }
  };
  fn.__closure = { cleanUp };
  fn.__workletHash = 7812030105128;
  fn.__initData = closure_16;
  return obj;
}
createCacheKey = { withSpring: require("CONFIG_NEVER_ANIMATE").withSpring, springStandard: require("SUBTLE_SPRING").springStandard };
animationEnterExit.__closure = createCacheKey;
animationEnterExit.__workletHash = 15470414797897;
animationEnterExit.__initData = { code: "function animationEnterExit_PremiumFeatureUpsellTsx1(visible,cleanUp){const{withSpring,springStandard}=this.__closure;return{opacity:withSpring(visible,springStandard,'respect-motion-settings',function(finished){cleanUp===null||cleanUp===void 0||cleanUp(finished);})};}" };
const result = require("set").fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumFeatureUpsell.tsx");

export default function PremiumFeatureUpsell(shouldShow) {
  let merged = Object.assign(shouldShow, Object.create(null));
  let ref;
  let analyticsLocations;
  let _location;
  closure_4 = undefined;
  ref = _location.useRef(false);
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
    obj[1] = callback(closure_15, obj);
    return callback(ref(analyticsLocations[28]).View, obj);
  }, []);
  const effect = _location.useEffect(() => {
    const current = ref.current;
    let tmp2 = !current;
    if (!current) {
      tmp2 = closure_4;
    }
    if (tmp2) {
      let castPremiumSubscriptionAsSkuId = analyticsLocations;
      let obj = ref(analyticsLocations[29]);
      const featureName = merged.featureName;
      let tmp6 = merged;
      if (merged(analyticsLocations[6]).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
        let APP_ICON_INLINE_UPSELL = closure_1_8.SOUNDBOARD_EVERYWHERE_INLINE_UPSELL;
      } else if (tmp6(castPremiumSubscriptionAsSkuId[6]).EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
        APP_ICON_INLINE_UPSELL = closure_1_8.EMOJI_EVERYWHERE_INLINE_UPSELL;
      } else {
        if (tmp6(castPremiumSubscriptionAsSkuId[6]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
          APP_ICON_INLINE_UPSELL = closure_1_8.LARGER_FILE_UPLOAD_INLINE_UPSELL;
        } else if (tmp6(castPremiumSubscriptionAsSkuId[6]).EntitlementFeatureNames.APP_ICONS !== featureName) {
          if (tmp6(castPremiumSubscriptionAsSkuId[6]).EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
            APP_ICON_INLINE_UPSELL = closure_1_8.STREAM_QUALITY_UPSELL;
          }
        }
        APP_ICON_INLINE_UPSELL = closure_1_8.APP_ICON_INLINE_UPSELL;
      }
      obj = { type: null, location: null, location_stack: null, sku_id: null };
      obj[0] = APP_ICON_INLINE_UPSELL;
      obj[1] = _location;
      obj[2] = analyticsLocations;
      tmp6 = tmp6(castPremiumSubscriptionAsSkuId[7]);
      castPremiumSubscriptionAsSkuId = tmp6.castPremiumSubscriptionAsSkuId;
      obj[3] = castPremiumSubscriptionAsSkuId(closure_1_6.TIER_2);
      obj.track(closure_1_9.PREMIUM_UPSELL_VIEWED, obj);
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