// discord_app/modules/premium/roadblocks/native/views/PremiumFeatureUpsell.tsx
import LinearGradient from "LinearGradient";
import get_ActivityIndicator from "registerAsset";
import GuildFeatures from "GuildFeatures";
import ME from "ME";
import { Gradients } from "items";
import jsxProd from "CONFIG_NEVER_ANIMATE";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import { CONFIG_NEVER_ANIMATE } from "../../../../../design/animation/reanimated/spring/spring.tsx";
import { SUBTLE_SPRING } from "../../../../../design/animation/reanimated/spring/springPresets.tsx";

let c10;
let c4;
let c5;
let c9;
let closure_12;
let closure_6;
let error;
let map1;
let metroImportAll;
const require = arg1;
function PremiumFeatureUpsellPill(featureName) {
  featureName = featureName.featureName;
  let flag = featureName.showShadow;
  if (flag === undefined) {
    flag = true;
  }
  let useTier0UpsellContent;
  let dependencyMap;
  let loading;
  let obj = featureName(8432);
  let obj1 = featureName(8746);
  const premiumUpsellConfig = obj.usePremiumUpsellConfig(obj1.getUpsellType(featureName));
  useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  const tmp4 = callback(useTier0UpsellContent);
  dependencyMap = tmp4;
  const tmp6 = useTier0UpsellContent ? closure_7.TIER_0 : closure_7.TIER_2;
  const fn = () => useTier0UpsellContent(_undefined[13])(featureName);
  let tmpResult = tmp(4007);
  const premiumTypeDisplayName = tmpResult.getPremiumTypeDisplayName(tmp6);
  if (featureName(8443).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
    const intl4 = tmp(1236).intl;
    obj = { nitroTierName: null, onClick: null };
    obj[0] = premiumTypeDisplayName;
    obj[1] = fn;
    let formatResult = intl4.format(tmp(1236).t["tw/SSq"], obj);
  } else if (tmp(8443).EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
    const intl3 = tmp(1236).intl;
    obj = { nitroTierName: null, onClick: null };
    obj[0] = premiumTypeDisplayName;
    obj[1] = fn;
    formatResult = intl3.format(tmp(1236).t.gMVjeS, obj);
  } else if (tmp(8443).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
    const intl2 = tmp(1236).intl;
    obj1 = { maxFileSize: null, nitroTierName: null, onClick: null };
    tmpResult = tmp(4007);
    obj1[0] = tmpResult.getMaxFileSizeForPremiumType(tmp6);
    obj1[1] = premiumTypeDisplayName;
    obj1[2] = fn;
    formatResult = intl2.format(tmp(1236).t.zzyLEK, obj1);
  } else if (tmp(8443).EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
    const intl = tmp(1236).intl;
    const obj2 = { nitroTierName: null, onClick: null };
    obj2[0] = premiumTypeDisplayName;
    obj2[1] = fn;
    formatResult = intl.format(tmp(1236).t.lyxfbj, obj2);
  } else if (tmp(8443).EntitlementFeatureNames.APP_ICONS === featureName) {
    const intl6 = tmp(1236).intl;
    const obj3 = { onClick: null };
    obj3[0] = fn;
    formatResult = intl6.format(tmp(1236).t.x2dQxN, obj3);
  }
  const tmp10 = useTier0UpsellContent(8791)(useTier0UpsellContent, premiumUpsellConfig.onViewAllPerks, constants.PREMIUM_UPSELL_FILE_UPLOAD);
  loading = tmp10.loading;
  const items = [tmp4.container, , ];
  if (flag) {
    flag = tmp4.containerShadow;
  }
  const obj4 = { style: items, children: null };
  items[1] = flag;
  items[2] = featureName.style;
  const obj5 = { style: tmp4.labelContainer, children: null };
  const obj6 = { source: null, style: null, disableColor: true };
  obj6[0] = useTier0UpsellContent(useTier0UpsellContent ? 8792 : 8793);
  obj6[1] = tmp4.nitroWheel;
  const items1 = [closure_12(featureName(1297).Icon, obj6), closure_12(featureName(4338).Text, { style: tmp4.text, variant: "text-sm/medium", children: formatResult })];
  obj5[1] = items1;
  const items2 = [closure_13(closure_5, obj5), ];
  const obj8 = { disabled: loading, shrink: true, style: tmp4.button, size: null, onPress: null, text: null, color: null, renderIcon: null, renderLinearGradient: null };
  obj8[3] = featureName(1297).ButtonSizes.XSMALL;
  obj8[4] = tmp10.onPress;
  const intl5 = tmp(1236).intl;
  const string = intl5.string;
  const t = tmp(1236).t;
  if (useTier0UpsellContent) {
    let stringResult = string(t.cM8bbx);
  } else {
    stringResult = string(t["8x0jKT"]);
  }
  obj8[5] = stringResult;
  obj8[6] = featureName(1297).ButtonColors.GREEN;
  obj8[7] = function renderIcon() {
    const style = [_undefined.nitroWheelButton, ];
    let nitroWheelDisabled = loading;
    if (loading) {
      nitroWheelDisabled = _undefined.nitroWheelDisabled;
    }
    style[1] = nitroWheelDisabled;
    return outer1_12(featureName(_undefined[15]).NitroWheel, { style });
  };
  obj8[8] = function renderLinearGradient() {
    const obj = { style: _undefined.gradient, start: null, end: null, colors: null };
    obj[1] = featureName(_undefined[20]).HorizontalGradient.START;
    obj[2] = featureName(_undefined[20]).HorizontalGradient.END;
    obj[3] = useTier0UpsellContent ? outer1_11.PREMIUM_TIER_0 : outer1_11.PREMIUM_TIER_2_TRI_COLOR;
    return outer1_12(useTier0UpsellContent(_undefined[19]), obj);
  };
  items2[1] = closure_12(featureName(1297).ShinyButton, obj8);
  obj4[1] = items2;
  return closure_13(closure_5, obj4);
}
({ StyleSheet: c4, View: c5 } = get_ActivityIndicator);
({ PremiumSubscriptionSKUs: closure_6, PremiumTypes: error, PremiumUpsellTypes: metroImportAll } = GuildFeatures);
({ AnalyticEvents: c9, AnalyticsPages: c10 } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = createCacheKey.createStyles((arg0) => {
  let obj = { container: null, containerShadow: null, nitroWheel: null, labelContainer: null, text: null, nitroWheelButton: null, nitroWheelDisabled: null, button: null, gradient: null };
  obj = { flexDirection: "row", backgroundColor: Themes.colors.BACKGROUND_SURFACE_HIGH, borderRadius: Themes.radii.round, padding: Themes.space.PX_12, justifyContent: "space-between" };
  obj[0] = obj;
  obj = {};
  const merged = Object.assign(Themes.shadows.SHADOW_HIGH);
  const unsafe_rawColors = Themes.unsafe_rawColors;
  obj.shadowColor = arg0 ? unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2 : unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2;
  obj.shadowOpacity = 0.6;
  obj[1] = obj;
  obj[2] = { width: 20, height: 20, marginEnd: Themes.space.PX_4 };
  const obj1 = { width: 20, height: 20, marginEnd: Themes.space.PX_4 };
  obj[3] = { flexDirection: "row", flexShrink: 1, alignItems: "center", marginEnd: Themes.space.PX_4 };
  obj[4] = { flexShrink: 1, flexWrap: "wrap" };
  obj[5] = { marginStart: -2, width: 20, height: 20 };
  obj[6] = { opacity: 0.6 };
  const obj2 = { flexDirection: "row", flexShrink: 1, alignItems: "center", marginEnd: Themes.space.PX_4 };
  obj[7] = { alignSelf: "center", borderRadius: Themes.radii.round };
  const merged1 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj[8] = {};
  return obj;
});
let closure_16 = { code: "function PremiumFeatureUpsellTsx2(finished){const{cleanUp}=this.__closure;var _cleanUp;(_cleanUp=cleanUp)===null||_cleanUp===void 0||_cleanUp(finished);}" };
function animationEnterExit(value, cleanUp) {
  const _require = cleanUp;
  const obj = { opacity: null };
  const fn = function l(arg0) {
    if (closure_0 != null) {
      tmp(arg0);
    }
  };
  fn.__closure = { cleanUp };
  fn.__workletHash = 7812030105128;
  fn.__initData = closure_16;
  obj[0] = _CONFIG_NEVER_ANIMATE.withSpring(value, _SUBTLE_SPRING.springStandard, "respect-motion-settings", fn);
  return obj;
}
createCacheKey = { withSpring: require("CONFIG_NEVER_ANIMATE").withSpring, springStandard: require("SUBTLE_SPRING").springStandard };
animationEnterExit.__closure = createCacheKey;
animationEnterExit.__workletHash = 15470414797897;
animationEnterExit.__initData = { code: "function animationEnterExit_PremiumFeatureUpsellTsx1(visible,cleanUp){const{withSpring,springStandard}=this.__closure;return{opacity:withSpring(visible,springStandard,'respect-motion-settings',function(finished){cleanUp===null||cleanUp===void 0||cleanUp(finished);})};}" };
const result = require("GuildFeatures").fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumFeatureUpsell.tsx");

export default function PremiumFeatureUpsell(shouldShow) {
  let merged = Object.assign(shouldShow, Object.create(null));
  let ref;
  let analyticsLocations;
  let _location;
  let c4;
  ref = _location.useRef(false);
  analyticsLocations = ref(analyticsLocations[23])().analyticsLocations;
  let obj = merged(analyticsLocations[24]);
  _location = obj.useAnalyticsContext().location;
  const tmp3 = ref(analyticsLocations[25])(shouldShow.shouldShow);
  c4 = tmp3;
  const items = [ref, _location, analyticsLocations, tmp3, merged.featureName];
  const callback = _location.useCallback((arg0, style) => {
    let obj = { style, children: null };
    obj = {};
    const merged = Object.assign(arg0);
    obj[1] = callback(closure_15, obj);
    return callback(ref(analyticsLocations[26]).View, obj);
  }, []);
  const effect = _location.useEffect(() => {
    const current = ref.current;
    let tmp2 = !current;
    if (!current) {
      tmp2 = c4;
    }
    if (tmp2) {
      let castPremiumSubscriptionAsSkuId = analyticsLocations;
      let obj = ref(analyticsLocations[27]);
      const featureName = merged.featureName;
      let tmp6 = merged;
      if (merged(analyticsLocations[6]).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
        let APP_ICON_INLINE_UPSELL = outer1_8.SOUNDBOARD_EVERYWHERE_INLINE_UPSELL;
      } else if (tmp6(castPremiumSubscriptionAsSkuId[6]).EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
        APP_ICON_INLINE_UPSELL = outer1_8.EMOJI_EVERYWHERE_INLINE_UPSELL;
      } else {
        if (tmp6(castPremiumSubscriptionAsSkuId[6]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
          APP_ICON_INLINE_UPSELL = outer1_8.LARGER_FILE_UPLOAD_INLINE_UPSELL;
        } else if (tmp6(castPremiumSubscriptionAsSkuId[6]).EntitlementFeatureNames.APP_ICONS !== featureName) {
          if (tmp6(castPremiumSubscriptionAsSkuId[6]).EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
            APP_ICON_INLINE_UPSELL = outer1_8.STREAM_QUALITY_UPSELL;
          }
        }
        APP_ICON_INLINE_UPSELL = outer1_8.APP_ICON_INLINE_UPSELL;
      }
      obj = { type: null, location: null, location_stack: null, sku_id: null };
      obj[0] = APP_ICON_INLINE_UPSELL;
      obj[1] = _location;
      obj[2] = analyticsLocations;
      tmp6 = tmp6(castPremiumSubscriptionAsSkuId[7]);
      castPremiumSubscriptionAsSkuId = tmp6.castPremiumSubscriptionAsSkuId;
      obj[3] = castPremiumSubscriptionAsSkuId(outer1_6.TIER_2);
      obj.track(outer1_9.PREMIUM_UPSELL_VIEWED, obj);
      ref.current = true;
    }
  }, items);
  let tmp8;
  if (tmp3) {
    tmp8 = merged;
  }
  obj = { useReducedMotion: false, item: tmp8, entering: animationEnterExit, exiting: animationEnterExit, renderItem: callback };
  return closure_12(ref(analyticsLocations[28]), obj);
};