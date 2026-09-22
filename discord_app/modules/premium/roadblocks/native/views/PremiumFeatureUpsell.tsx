// discord_app/modules/premium/roadblocks/native/views/PremiumFeatureUpsell.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../../../ConstantsIOS.tsx";
import native from "../../../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import PremiumUtils from "../../../../../utils/PremiumUtils.tsx";
import spring from "../../../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../../design/animation/reanimated/spring/springPresets.tsx";
import LinearGradientDefault from "../../../../../../_runtime/05199_LinearGradient.js";
import openPremiumUpsellActionSheetDefault from "../utils/openPremiumUpsellActionSheet.tsx";
import EntitlementFeatureNames from "../../../../../../discord_common/js/shared/shared-constants/EntitlementFeatureNames.tsx";
import NitroWheelIcon from "../../../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import RTCConnectionStore from "../../../../../stores/RTCConnectionStore.tsx";

require = fn;
function PremiumFeatureUpsellPill(featureName) {
  featureName = featureName.featureName;
  let flag = featureName.showShadow;
  if (flag === undefined) {
    flag = true;
  }
  let loading;
  let obj = featureName(9433);
  const premiumUpsellConfig = obj.usePremiumUpsellConfig(featureName(10229).getUpsellType(featureName));
  const useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  const tmp4 = closure_14(useTier0UpsellContent);
  dependencyMap = tmp4;
  let obj2 = featureName(10229);
  let mobileEmojiPickerUpsellRestyleEnabledForFeature = featureName(
    8103,
  ).getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumFeatureUpsell");
  if (!mobileEmojiPickerUpsellRestyleEnabledForFeature) {
    mobileEmojiPickerUpsellRestyleEnabledForFeature = tmp(9441).getMobileStickerPickerUpsellRestyleEnabledForFeature(
      featureName,
      "native.PremiumFeatureUpsell",
    );
    let tmpResult = tmp(9441);
  }
  const tmp7 = useTier0UpsellContent ? closure_8.TIER_0 : closure_8.TIER_2;
  const fn = () => openPremiumUpsellActionSheetDefault(featureName);
  const obj3 = featureName(8103);
  const premiumTypeDisplayName = featureName(4415).getPremiumTypeDisplayName(tmp7);
  if (featureName(8099).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
    const intl5 = tmp(1115).intl;
    const obj4 = { nitroTierName: premiumTypeDisplayName, onClick: fn };
    let formatResult = intl5.format(tmp(1115).t["tw/SSq"], obj4);
  } else if (tmp(8099).EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
    const intl4 = tmp(1115).intl;
    const obj5 = { nitroTierName: premiumTypeDisplayName, onClick: fn };
    formatResult = intl4.format(tmp(1115).t.gMVjeS, obj5);
  } else if (tmp(8099).EntitlementFeatureNames.STICKERS_EVERYWHERE === featureName) {
    const intl3 = tmp(1115).intl;
    const obj6 = { nitroTierName: premiumTypeDisplayName, onClick: fn };
    formatResult = intl3.format(tmp(1115).t.eontIh, obj6);
  } else if (tmp(8099).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
    const intl2 = tmp(1115).intl;
    const obj7 = {
      maxFileSize: tmp(4415).getMaxFileSizeForPremiumType(tmp7),
      nitroTierName: premiumTypeDisplayName,
      onClick: fn,
    };
    formatResult = intl2.format(tmp(1115).t.zzyLEK, obj7);
    const tmpResult5 = tmp(4415);
  } else if (tmp(8099).EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
    const intl = tmp(1115).intl;
    const obj8 = { nitroTierName: premiumTypeDisplayName, onClick: fn };
    formatResult = intl.format(tmp(1115).t.lyxfbj, obj8);
  } else if (tmp(8099).EntitlementFeatureNames.APP_ICONS === featureName) {
    const intl7 = tmp(1115).intl;
    const obj9 = { onClick: fn };
    formatResult = intl7.format(tmp(1115).t.x2dQxN, obj9);
  }
  const tmp10 = useTier0UpsellContent;
  const tmpResult4 = featureName(4415);
  const tmp11 = useTier0UpsellContent(10230);
  const tmp11Result = tmp11(
    useTier0UpsellContent,
    premiumUpsellConfig.onViewAllPerks,
    featureName(10229).getAnalyticsPage(featureName),
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
    items1[1] = closure_12(tmp(4753).Text, obj12);
    obj11.children = items1;
    const items2 = [closure_13(closure_5, obj11)];
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
        let tmpResult = closure_2_12(NitroWheelIcon.NitroWheelIcon, obj2);
      } else {
        const items1 = [closure_2.nitroWheelButton];
        let nitroWheelDisabled = loading;
        if (loading) {
          nitroWheelDisabled = closure_2.nitroWheelDisabled;
        }
        const obj = { style: null };
        items1[1] = nitroWheelDisabled;
        obj.style = items1;
        tmpResult = closure_2_12(native.NitroWheel, obj);
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
      return closure_2_12(LinearGradientDefault, obj);
    };
    items2[1] = closure_12(tmp(1177).ShinyButton, obj13);
    obj10.children = items2;
    return closure_13(closure_5, obj10);
  } else {
    const obj14 = { source: tmp10(useTier0UpsellContent ? 10231 : 10227), style: tmp4.nitroWheel, disableColor: true };
    closure_12(tmp(1177).Icon, obj14);
  }
  const tmpResult6 = featureName(10229);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const PremiumConstants = fn(1374);
({ PremiumSubscriptionSKUs: closure_7, PremiumTypes: closure_8, PremiumUpsellTypes: closure_9 } = PremiumConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const Gradients = fn(7677).Gradients;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4757);
let closure_14 = createStyles.createStyles((arg0) => {
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
animationEnterExit.__closure = { withSpring: fn(5186).withSpring, springStandard: fn(5190).springStandard };
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
  analyticsLocations = ref(analyticsLocations[27])().analyticsLocations;
  _location = merged(analyticsLocations[28]).useAnalyticsContext().location;
  const tmp3 = ref(analyticsLocations[29])(shouldShow.shouldShow);
  closure_4 = tmp3;
  const items = [ref, _location, analyticsLocations, tmp3, merged.featureName];
  const callback = _location.useCallback((arg0, style) => {
    const obj = { style, children: null };
    merged = Object.assign(arg0);
    obj.children = closure_1_12(PremiumFeatureUpsellPill, {});
    return closure_1_12(ref(analyticsLocations[30]).View, obj);
  }, []);
  const effect = _location.useEffect(() => {
    const current = ref.current;
    let tmp2 = !current;
    if (!current) {
      tmp2 = closure_4;
    }
    if (tmp2) {
      const featureName = merged.featureName;
      if (EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
        let STREAM_QUALITY_UPSELL = constants.SOUNDBOARD_EVERYWHERE_INLINE_UPSELL;
      } else if (EntitlementFeatureNames.EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
        STREAM_QUALITY_UPSELL = constants.EMOJI_EVERYWHERE_INLINE_UPSELL;
      } else if (EntitlementFeatureNames.EntitlementFeatureNames.STICKERS_EVERYWHERE === featureName) {
        STREAM_QUALITY_UPSELL = constants.STICKERS_EVERYWHERE_INLINE_UPSELL;
      } else if (EntitlementFeatureNames.EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
        STREAM_QUALITY_UPSELL = constants.LARGER_FILE_UPLOAD_INLINE_UPSELL;
      } else if (EntitlementFeatureNames.EntitlementFeatureNames.APP_ICONS === featureName) {
        STREAM_QUALITY_UPSELL = constants.APP_ICON_INLINE_UPSELL;
      } else if (EntitlementFeatureNames.EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
        STREAM_QUALITY_UPSELL = constants.STREAM_QUALITY_UPSELL;
      }
      const obj2 = {
        type: STREAM_QUALITY_UPSELL,
        location: _location,
        location_stack: analyticsLocations,
        sku_id: null,
        voice_guild_id: null,
      };
      const obj = AnalyticsUtilsDefault;
      obj2.sku_id = PremiumUtils.castPremiumSubscriptionAsSkuId(TIER_2.TIER_2);
      let guildId = RTCConnectionStore.getGuildId();
      if (guildId == null) {
        guildId = null;
      }
      obj2.voice_guild_id = guildId;
      obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj2);
      ref.current = true;
      const tmp7Result = PremiumUtils;
    }
  }, items);
  let tmp8;
  let obj = merged(analyticsLocations[28]);
  if (tmp3) {
    tmp8 = merged;
  }
  return closure_12(ref(analyticsLocations[32]), {
    useReducedMotion: false,
    item: tmp8,
    entering: animationEnterExit,
    exiting: animationEnterExit,
    renderItem: callback,
  });
}
