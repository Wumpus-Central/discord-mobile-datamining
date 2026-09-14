// discord_app/modules/emoji_picker/native/components/EmojiPickerPremiumSearchUpsell.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import PremiumUtilsDefault from "../../../../utils/PremiumUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import PremiumFeaturesCards from "../../../user_settings/premium/native/PremiumFeaturesCards.tsx";
import openPremiumModalDefault from "../../../../components_native/premium/openPremiumModal.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticEvents: metroRequire, AnalyticsPages: closure_7, AnalyticsSections: closure_8 } = Constants);
const PremiumConstants = fn(1373);
({ PremiumSubscriptionSKUs: closure_9, PremiumUpsellTypes: c10, SubscriptionPlans: closure_11 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4636);
let obj = {
  container: { paddingTop: nativeDefault.space.PX_8 },
  premiumSearchUpsell: null,
  premiumSearchUpsellContent: null,
  nitroIcon: null,
};
let obj3 = { paddingTop: nativeDefault.space.PX_8 };
obj.premiumSearchUpsell = {
  height: 56,
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  alignContent: "center",
};
obj.premiumSearchUpsellContent = { flex: 0.8, flexDirection: "row" };
obj.nitroIcon = { marginRight: 8, alignSelf: "center" };
let closure_14 = createStyles.createStyles(obj);
let obj4 = {
  height: 56,
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  alignContent: "center",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerPremiumSearchUpsell.tsx");

export const EMOJI_PICKER_PREMIUM_UPSELL_HEIGHT = 56;
export const useEmojiPickerPremiumSearchUpsellViewed = function useEmojiPickerPremiumSearchUpsellViewed(guildId) {
  guildId = guildId.guildId;
  const analyticsLocations = guildId.analyticsLocations;
  const useTier0UpsellContent = guildId.useTier0UpsellContent;
  let ref;
  ref = ref.useRef(false);
  const items = [analyticsLocations, guildId, useTier0UpsellContent, ref];
  const effect = ref.useEffect(() => {
    if (!onPress.current) {
      tmp.current = true;
      let obj2 = { type: constants4.EMOJI_PICKER_SEARCH, location: null, location_stack: null, sku_id: null };
      if (null != analyticsLocations) {
        let DM_CHANNEL = constants2.GUILD_CHANNEL;
      } else {
        DM_CHANNEL = constants2.DM_CHANNEL;
      }
      const obj3 = { page: DM_CHANNEL, section: constants3.EMOJI_PICKER_POPOUT };
      obj2.location = obj3;
      obj2.location_stack = useTier0UpsellContent;
      obj2.sku_id = mobileEmojiPickerUpsellRestyleEnabled ? React7.TIER_0 : React7.TIER_2;
      obj2 = AnalyticsUtilsDefault.track(constants.PREMIUM_UPSELL_VIEWED, obj2);
    }
  }, items);
};
export const useEmojiPickerPremiumSearchUpsellClick = function useEmojiPickerPremiumSearchUpsellClick(
  analyticsLocations,
) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const useTier0UpsellContent = analyticsLocations.useTier0UpsellContent;
  let mobileEmojiPickerUpsellRestyleEnabled;
  mobileEmojiPickerUpsellRestyleEnabled = analyticsLocations(
    mobileEmojiPickerUpsellRestyleEnabled[9],
  ).useMobileEmojiPickerUpsellRestyleEnabled("native.EmojiPickerPremiumSearchUpsell");
  const obj = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[9]);
  const obj2 = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[10]);
  const tmp2 = useTier0UpsellContent(mobileEmojiPickerUpsellRestyleEnabled[13])(
    useTier0UpsellContent,
    obj2.usePremiumUpsellConfig(
      analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[11]).getUpsellType(
        analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[12]).EntitlementFeatureNames.EMOJIS_EVERYWHERE,
      ),
      analyticsLocations,
    ).onViewAllPerks,
    constants2.PREMIUM_UPSELL_EMOJI_EVERYWHERE,
  );
  const onPress = tmp2.onPress;
  const obj4 = { loading: tmp2.loading, onPress: null };
  const items = [analyticsLocations, useTier0UpsellContent, mobileEmojiPickerUpsellRestyleEnabled, onPress];
  obj4.onPress = onPress.useCallback(() => {
    const currentUser = UserStore.getCurrentUser();
    let result = null == currentUser;
    if (!result) {
      result = PremiumUtilsDefault.canUseEmojisEverywhere(currentUser);
    }
    if (!result) {
      if (mobileEmojiPickerUpsellRestyleEnabled) {
        onPress();
      } else {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const obj3 = { analyticsLocations, premiumFeatureCardOrder: null };
        const PremiumFeatureCardOrder = PremiumFeaturesCards.PremiumFeatureCardOrder;
        obj3.premiumFeatureCardOrder = useTier0UpsellContent
          ? PremiumFeatureCardOrder.TIER_0_LEADING
          : PremiumFeatureCardOrder.TIER_2_LEADING;
        openPremiumModalDefault(obj3);
      }
    }
  }, items);
  return obj4;
};
export const PremiumSearchUpsell = noop.memo((analyticsLocations) => {
  const tmp = closure_14();
  analyticsLocations = undefined;
  analyticsLocations = analyticsLocations.analyticsLocations;
  const useTier0UpsellContent = analyticsLocations.useTier0UpsellContent;
  let mobileEmojiPickerUpsellRestyleEnabled;
  mobileEmojiPickerUpsellRestyleEnabled = analyticsLocations(
    mobileEmojiPickerUpsellRestyleEnabled[9],
  ).useMobileEmojiPickerUpsellRestyleEnabled("native.EmojiPickerPremiumSearchUpsell");
  let obj = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[9]);
  let obj2 = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[10]);
  const tmp6 = useTier0UpsellContent(mobileEmojiPickerUpsellRestyleEnabled[13])(
    useTier0UpsellContent,
    obj2.usePremiumUpsellConfig(
      analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[11]).getUpsellType(
        analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[12]).EntitlementFeatureNames.EMOJIS_EVERYWHERE,
      ),
      analyticsLocations,
    ).onViewAllPerks,
    constants2.PREMIUM_UPSELL_EMOJI_EVERYWHERE,
  );
  const onPress = tmp6.onPress;
  const items = [analyticsLocations, useTier0UpsellContent, mobileEmojiPickerUpsellRestyleEnabled, onPress];
  const callback = onPress.useCallback(() => {
    const currentUser = UserStore.getCurrentUser();
    let result = null == currentUser;
    if (!result) {
      result = PremiumUtilsDefault.canUseEmojisEverywhere(currentUser);
    }
    if (!result) {
      if (mobileEmojiPickerUpsellRestyleEnabled) {
        onPress();
      } else {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const obj3 = { analyticsLocations, premiumFeatureCardOrder: null };
        const PremiumFeatureCardOrder = PremiumFeaturesCards.PremiumFeatureCardOrder;
        obj3.premiumFeatureCardOrder = useTier0UpsellContent
          ? PremiumFeatureCardOrder.TIER_0_LEADING
          : PremiumFeatureCardOrder.TIER_2_LEADING;
        openPremiumModalDefault(obj3);
      }
    }
  }, items);
  let obj3 = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[11]);
  const guildId = analyticsLocations.guildId;
  closure_129_0 = guildId;
  const analyticsLocations2 = analyticsLocations.analyticsLocations;
  closure_129_1 = analyticsLocations2;
  const useTier0UpsellContent2 = analyticsLocations.useTier0UpsellContent;
  closure_129_2 = useTier0UpsellContent2;
  const mobileEmojiPickerUpsellRestyleEnabled1 = analyticsLocations(
    mobileEmojiPickerUpsellRestyleEnabled[9],
  ).useMobileEmojiPickerUpsellRestyleEnabled("native.EmojiPickerPremiumSearchUpsell");
  const ref = onPress.useRef(false);
  closure_129_3 = ref;
  const items1 = [analyticsLocations2, guildId, useTier0UpsellContent2, ref];
  const effect = onPress.useEffect(() => {
    if (!onPress.current) {
      tmp.current = true;
      let obj2 = { type: constants4.EMOJI_PICKER_SEARCH, location: null, location_stack: null, sku_id: null };
      if (null != analyticsLocations) {
        let DM_CHANNEL = constants2.GUILD_CHANNEL;
      } else {
        DM_CHANNEL = constants2.DM_CHANNEL;
      }
      const obj3 = { page: DM_CHANNEL, section: constants3.EMOJI_PICKER_POPOUT };
      obj2.location = obj3;
      obj2.location_stack = useTier0UpsellContent;
      obj2.sku_id = mobileEmojiPickerUpsellRestyleEnabled ? React7.TIER_0 : React7.TIER_2;
      obj2 = AnalyticsUtilsDefault.track(constants.PREMIUM_UPSELL_VIEWED, obj2);
    }
  }, items1);
  const obj5 = { style: tmp.premiumSearchUpsellContent, children: null };
  if (mobileEmojiPickerUpsellRestyleEnabled1) {
    const obj6 = { size: "sm", color: tmp5(tmp3[7]).colors.INTERACTIVE_TEXT_ACTIVE, style: tmp.nitroIcon };
    let tmp13Result = closure_12(tmp2(tmp3[18]).NitroWheelIcon, obj6);
    let tmp15 = closure_12;
  } else {
    const obj7 = {
      style: tmp.nitroIcon,
      source: tmp5(tmp3[20]),
      disableColor: true,
      size: tmp2(tmp3[19]).Icon.Sizes.MEDIUM,
    };
    tmp13Result = closure_12(tmp2(tmp3[19]).Icon, obj7);
    tmp15 = closure_12;
  }
  const items2 = [tmp13Result];
  const intl = tmp2(tmp3[22]).intl;
  if (analyticsLocations.useTier0UpsellContent) {
    const obj8 = { planName: tmp2(tmp3[14]).getTierDisplayNameByPlanId(PREMIUM_MONTH_TIER_0.PREMIUM_MONTH_TIER_0) };
    let formatToPlainStringResult = intl.formatToPlainString(tmp2(tmp3[22]).t.kWBwlJ, obj8);
    const tmp2Result = tmp2(tmp3[14]);
  } else {
    formatToPlainStringResult = intl.string(tmp2(tmp3[22]).t["5t3lw+"]);
  }
  items2[1] = tmp15(analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[21]).Text, {
    lineClamp: 2,
    variant: "text-sm/medium",
    color: "interactive-text-active",
    children: formatToPlainStringResult,
  });
  obj5.children = items2;
  const obj4 = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[9]);
  const obj9 = {
    style: tmp.premiumSearchUpsell,
    accessibilityRole: "button",
    disabled: tmp6.loading,
    onPress: callback,
    children: null,
  };
  const items3 = [closure_13(View, obj5)];
  const intl2 = tmp2(tmp3[22]).intl;
  const string = intl2.string;
  const t = tmp2(tmp3[22]).t;
  if (analyticsLocations.useTier0UpsellContent) {
    let stringResult = string(t["9CM5v9"]);
  } else {
    stringResult = string(t.pj0XBN);
  }
  items3[1] = tmp15(analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[21]).Text, {
    variant: "text-sm/medium",
    color: "text-link",
    children: stringResult,
  });
  obj9.children = items3;
  const tmp11Result = closure_13(View, obj5);
  return tmp15(View, {
    style: tmp.container,
    collapsable: false,
    children: closure_13(analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[23]).PressableOpacity, obj9),
  });
});
