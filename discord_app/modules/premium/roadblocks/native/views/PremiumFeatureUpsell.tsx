// discord_app/modules/premium/roadblocks/native/views/PremiumFeatureUpsell.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../../../ConstantsIOS.tsx";
import native from "../../../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import spring from "../../../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../../design/animation/reanimated/spring/springPresets.tsx";
import LinearGradientDefault from "../../../../../../_runtime/05198_LinearGradient.js";
import openPremiumUpsellActionSheetDefault from "../utils/openPremiumUpsellActionSheet.tsx";
import EntitlementFeatureNames from "../../../../../../discord_common/js/shared/shared-constants/EntitlementFeatureNames.tsx";
import NitroWheelIcon from "../../../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function PremiumFeatureUpsellPill(featureName) {
  featureName = featureName.featureName;
  let flag = featureName.showShadow;
  if (flag === undefined) {
    flag = true;
  }
  let loading;
  let obj = featureName(9426);
  const premiumUpsellConfig = obj.usePremiumUpsellConfig(featureName(10222).getUpsellType(featureName));
  const useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  const tmp4 = closure_13(useTier0UpsellContent);
  dependencyMap = tmp4;
  let obj2 = featureName(10222);
  let mobileEmojiPickerUpsellRestyleEnabledForFeature = featureName(
    8098,
  ).getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumFeatureUpsell");
  if (!mobileEmojiPickerUpsellRestyleEnabledForFeature) {
    mobileEmojiPickerUpsellRestyleEnabledForFeature = tmp(9434).getMobileStickerPickerUpsellRestyleEnabledForFeature(
      featureName,
      "native.PremiumFeatureUpsell",
    );
    let tmpResult = tmp(9434);
  }
  const tmp7 = useTier0UpsellContent ? closure_7.TIER_0 : closure_7.TIER_2;
  const fn = () => openPremiumUpsellActionSheetDefault(featureName);
  const obj3 = featureName(8098);
  const premiumTypeDisplayName = featureName(4414).getPremiumTypeDisplayName(tmp7);
  if (featureName(8094).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
    const intl5 = tmp(1115).intl;
    const obj4 = { nitroTierName: premiumTypeDisplayName, onClick: fn };
    let formatResult = intl5.format(tmp(1115).t["tw/SSq"], obj4);
  } else if (tmp(8094).EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
    const intl4 = tmp(1115).intl;
    const obj5 = { nitroTierName: premiumTypeDisplayName, onClick: fn };
    formatResult = intl4.format(tmp(1115).t.gMVjeS, obj5);
  } else if (tmp(8094).EntitlementFeatureNames.STICKERS_EVERYWHERE === featureName) {
    const intl3 = tmp(1115).intl;
    const obj6 = { nitroTierName: premiumTypeDisplayName, onClick: fn };
    formatResult = intl3.format(tmp(1115).t.eontIh, obj6);
  } else if (tmp(8094).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
    const intl2 = tmp(1115).intl;
    const obj7 = {
      maxFileSize: tmp(4414).getMaxFileSizeForPremiumType(tmp7),
      nitroTierName: premiumTypeDisplayName,
      onClick: fn,
    };
    formatResult = intl2.format(tmp(1115).t.zzyLEK, obj7);
    const tmpResult5 = tmp(4414);
  } else if (tmp(8094).EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
    const intl = tmp(1115).intl;
    const obj8 = { nitroTierName: premiumTypeDisplayName, onClick: fn };
    formatResult = intl.format(tmp(1115).t.lyxfbj, obj8);
  } else if (tmp(8094).EntitlementFeatureNames.APP_ICONS === featureName) {
    const intl7 = tmp(1115).intl;
    const obj9 = { onClick: fn };
    formatResult = intl7.format(tmp(1115).t.x2dQxN, obj9);
  }
  const tmp10 = useTier0UpsellContent;
  const tmpResult4 = featureName(4414);
  const tmp11 = useTier0UpsellContent(10223);
  const tmp11Result = tmp11(
    useTier0UpsellContent,
    premiumUpsellConfig.onViewAllPerks,
    featureName(10222).getAnalyticsPage(featureName),
  );
  loading = tmp11Result.loading;
  let items = [tmp4.container, ,];
  if (flag) {
    flag = tmp4.containerShadow;
  }
  const obj10 = { style: items, children: null };
  items[1] = flag;
  items[2] = featureName.style;
  const obj11 = { style: tmp4.labelContainer, children: null };
  if (mobileEmojiPickerUpsellRestyleEnabledForFeature) {
    let items1 = [tmp15];
    const obj12 = { style: tmp4.text, variant: "text-sm/medium", children: formatResult };
    items1[1] = closure_11(tmp(4752).Text, obj12);
    obj11.children = items1;
    const items2 = [closure_12(closure_5, obj11)];
    const obj13 = {
      disabled: loading,
      shrink: true,
      style: tmp4.button,
      size: tmp(1177).ButtonSizes.XSMALL,
      onPress: tmp11Result.onPress,
      text: null,
      color: null,
      renderIcon: null,
      renderLinearGradient: null,
    };
    const intl6 = tmp(1115).intl;
    const string = intl6.string;
    const t = tmp(1115).t;
    if (useTier0UpsellContent) {
      let stringResult = string(t.cM8bbx);
    } else {
      stringResult = string(t["8x0jKT"]);
    }
    obj13.text = stringResult;
    obj13.color = tmp(1177).ButtonColors.GREEN;
    obj13.renderIcon = function renderIcon() {
      if (mobileEmojiPickerUpsellRestyleEnabledForFeature) {
        const obj2 = { size: "xxs", color: nativeDefault.colors.WHITE, style: null };
        const items = [closure_2.nitroWheelIcon];
        let nitroWheelDisabled2 = loading;
        if (loading) {
          nitroWheelDisabled2 = closure_2.nitroWheelDisabled;
        }
        items[1] = nitroWheelDisabled2;
        obj2.style = items;
        let tmpResult = closure_2_11(NitroWheelIcon.NitroWheelIcon, obj2);
      } else {
        const items1 = [closure_2.nitroWheelButton];
        let nitroWheelDisabled = loading;
        if (loading) {
          nitroWheelDisabled = closure_2.nitroWheelDisabled;
        }
        const obj = { style: null };
        items1[1] = nitroWheelDisabled;
        obj.style = items1;
        tmpResult = closure_2_11(native.NitroWheel, obj);
      }
      return tmpResult;
    };
    obj13.renderLinearGradient = function renderLinearGradient() {
      const obj = {
        style: closure_2.gradient,
        start: ConstantsIOS.HorizontalGradient.START,
        end: ConstantsIOS.HorizontalGradient.END,
        colors: useTier0UpsellContent ? Gradients.PREMIUM_TIER_0 : Gradients.PREMIUM_TIER_2_TRI_COLOR,
      };
      return closure_2_11(LinearGradientDefault, obj);
    };
    items2[1] = closure_11(tmp(1177).ShinyButton, obj13);
    obj10.children = items2;
    return closure_12(closure_5, obj10);
  } else {
    const obj14 = { source: tmp10(useTier0UpsellContent ? 10224 : 10220), style: tmp4.nitroWheel, disableColor: true };
    closure_11(tmp(1177).Icon, obj14);
  }
  const tmpResult6 = featureName(10222);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const PremiumConstants = fn(1374);
({ PremiumSubscriptionSKUs: metroRequire, PremiumTypes: closure_7, PremiumUpsellTypes: closure_8 } = PremiumConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const Gradients = fn(7672).Gradients;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4756);
let closure_13 = createStyles.createStyles((arg0) => {
  const obj = {
    container: {
      flexDirection: "row",
      backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
      borderRadius: nativeDefault.radii.round,
      padding: nativeDefault.space.PX_12,
      justifyContent: "space-between",
    },
    containerShadow: null,
    nitroWheel: null,
    labelContainer: null,
    text: null,
    nitroWheelButton: null,
    nitroWheelIcon: null,
    nitroWheelDisabled: null,
    button: null,
    gradient: null,
  };
  const obj3 = {};
  const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  obj3.shadowColor = arg0
    ? unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2
    : unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2;
  obj3.shadowOpacity = 0.6;
  obj.containerShadow = obj3;
  const size = { width: 20, height: 20, marginEnd: nativeDefault.space.PX_4 };
  obj.nitroWheel = size;
  const obj2 = {
    flexDirection: "row",
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderRadius: nativeDefault.radii.round,
    padding: nativeDefault.space.PX_12,
    justifyContent: "space-between",
  };
  obj.labelContainer = {
    flexDirection: "row",
    flexShrink: 1,
    alignItems: "center",
    marginEnd: nativeDefault.space.PX_4,
  };
  obj.text = { flexShrink: 1, flexWrap: "wrap" };
  obj.nitroWheelButton = { marginStart: -2, width: 20, height: 20 };
  obj.nitroWheelIcon = { marginEnd: 4 };
  obj.nitroWheelDisabled = { opacity: 0.6 };
  const obj4 = { flexDirection: "row", flexShrink: 1, alignItems: "center", marginEnd: nativeDefault.space.PX_4 };
  obj.button = { alignSelf: "center", borderRadius: nativeDefault.radii.round };
  const merged1 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.gradient = {};
  return obj;
});
const __initData = {
  code: "function PremiumFeatureUpsellTsx2(finished){const{cleanUp}=this.__closure;var _cleanUp;(_cleanUp=cleanUp)===null||_cleanUp===void 0||_cleanUp(finished);}",
};
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
animationEnterExit.__closure = { withSpring: fn(5185).withSpring, springStandard: fn(5189).springStandard };
animationEnterExit.__workletHash = 15470414797897;
animationEnterExit.__initData = {
  code: "function animationEnterExit_PremiumFeatureUpsellTsx1(visible,cleanUp){const{withSpring,springStandard}=this.__closure;return{opacity:withSpring(visible,springStandard,'respect-motion-settings',function(finished){cleanUp===null||cleanUp===void 0||cleanUp(finished);})};}",
};
let size = fn(2);
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumFeatureUpsell.tsx");

export default function PremiumFeatureUpsell(shouldShow) {
  let merged = Object.assign(shouldShow, Object.assign({ shouldShow: 0 }));
  let analyticsLocations;
  let _location;
  const ref = _location.useRef(false);
  analyticsLocations = ref(analyticsLocations[26])().analyticsLocations;
  _location = merged(analyticsLocations[27]).useAnalyticsContext().location;
  const tmp3 = ref(analyticsLocations[28])(shouldShow.shouldShow);
  closure_4 = tmp3;
  const items = [ref, _location, analyticsLocations, tmp3, merged.featureName];
  const callback = _location.useCallback((arg0, style) => {
    const obj = { style, children: null };
    merged = Object.assign(arg0);
    obj.children = closure_1_11(PremiumFeatureUpsellPill, {});
    return closure_1_11(ref(analyticsLocations[29]).View, obj);
  }, []);
  const effect = _location.useEffect(() => {
    const current = ref.current;
    let tmp2 = !current;
    if (!current) {
      tmp2 = closure_4;
    }
    if (tmp2) {
      let castPremiumSubscriptionAsSkuId = dependencyMap;
      const featureName = merged.featureName;
      let tmp6 = require;
      if (EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
        let APP_ICON_INLINE_UPSELL = constants.SOUNDBOARD_EVERYWHERE_INLINE_UPSELL;
      } else if (tmp6(8094).EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
        APP_ICON_INLINE_UPSELL = constants.EMOJI_EVERYWHERE_INLINE_UPSELL;
      } else if (tmp6(8094).EntitlementFeatureNames.STICKERS_EVERYWHERE === featureName) {
        APP_ICON_INLINE_UPSELL = constants.STICKERS_EVERYWHERE_INLINE_UPSELL;
      } else {
        if (tmp6(8094).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
          APP_ICON_INLINE_UPSELL = constants.LARGER_FILE_UPLOAD_INLINE_UPSELL;
        } else if (tmp6(8094).EntitlementFeatureNames.APP_ICONS !== featureName) {
          if (tmp6(8094).EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
            APP_ICON_INLINE_UPSELL = constants.STREAM_QUALITY_UPSELL;
          }
        }
        APP_ICON_INLINE_UPSELL = constants.APP_ICON_INLINE_UPSELL;
      }
      const obj2 = {
        type: APP_ICON_INLINE_UPSELL,
        location: _location,
        location_stack: analyticsLocations,
        sku_id: null,
      };
      tmp6 = tmp6(4414);
      castPremiumSubscriptionAsSkuId = tmp6.castPremiumSubscriptionAsSkuId;
      obj2.sku_id = castPremiumSubscriptionAsSkuId(TIER_2.TIER_2);
      AnalyticsUtilsDefault.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj2);
      ref.current = true;
    }
  }, items);
  let tmp8;
  let obj = merged(analyticsLocations[27]);
  if (tmp3) {
    tmp8 = merged;
  }
  return closure_11(ref(analyticsLocations[31]), {
    useReducedMotion: false,
    item: tmp8,
    entering: animationEnterExit,
    exiting: animationEnterExit,
    renderItem: callback,
  });
}
