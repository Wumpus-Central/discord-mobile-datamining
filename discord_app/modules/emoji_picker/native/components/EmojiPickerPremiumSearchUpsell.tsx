// discord_app/modules/emoji_picker/native/components/EmojiPickerPremiumSearchUpsell.tsx
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import PremiumUtilsDefault from "../../../../utils/PremiumUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import PremiumFeaturesCards from "../../../user_settings/premium/native/PremiumFeaturesCards.tsx";
import openPremiumModalDefault from "../../../../components_native/premium/openPremiumModal.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, AnalyticsPages: metroRequire, AnalyticsSections: closure_7 } = Constants);
const PremiumConstants = fn(1374);
({ PremiumSubscriptionSKUs: closure_8, PremiumUpsellTypes: closure_9, SubscriptionPlans: c10 } = PremiumConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let closure_12 = createStyles.createStyles({ nitroIcon: { marginRight: 8, alignSelf: "center" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerPremiumSearchUpsell.tsx");

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
      obj2.sku_id = mobileEmojiPickerUpsellRestyleEnabled ? React6.TIER_0 : React6.TIER_2;
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
    mobileEmojiPickerUpsellRestyleEnabled[7],
  ).useMobileEmojiPickerUpsellRestyleEnabled("native.EmojiPickerPremiumSearchUpsell");
  const obj = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[7]);
  const obj2 = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[8]);
  const tmp2 = useTier0UpsellContent(mobileEmojiPickerUpsellRestyleEnabled[11])(
    useTier0UpsellContent,
    obj2.usePremiumUpsellConfig(
      analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[9]).getUpsellType(
        analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[10]).EntitlementFeatureNames.EMOJIS_EVERYWHERE,
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
  const tmp = closure_12();
  analyticsLocations = undefined;
  analyticsLocations = analyticsLocations.analyticsLocations;
  const useTier0UpsellContent = analyticsLocations.useTier0UpsellContent;
  let mobileEmojiPickerUpsellRestyleEnabled;
  mobileEmojiPickerUpsellRestyleEnabled = analyticsLocations(
    mobileEmojiPickerUpsellRestyleEnabled[7],
  ).useMobileEmojiPickerUpsellRestyleEnabled("native.EmojiPickerPremiumSearchUpsell");
  let obj = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[7]);
  let obj2 = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[8]);
  const tmp6 = useTier0UpsellContent(mobileEmojiPickerUpsellRestyleEnabled[11])(
    useTier0UpsellContent,
    obj2.usePremiumUpsellConfig(
      analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[9]).getUpsellType(
        analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[10]).EntitlementFeatureNames.EMOJIS_EVERYWHERE,
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
  let obj3 = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[9]);
  const guildId = analyticsLocations.guildId;
  closure_129_0 = guildId;
  const analyticsLocations2 = analyticsLocations.analyticsLocations;
  closure_129_1 = analyticsLocations2;
  const useTier0UpsellContent2 = analyticsLocations.useTier0UpsellContent;
  closure_129_2 = useTier0UpsellContent2;
  const mobileEmojiPickerUpsellRestyleEnabled1 = analyticsLocations(
    mobileEmojiPickerUpsellRestyleEnabled[7],
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
      obj2.sku_id = mobileEmojiPickerUpsellRestyleEnabled ? React6.TIER_0 : React6.TIER_2;
      obj2 = AnalyticsUtilsDefault.track(constants.PREMIUM_UPSELL_VIEWED, obj2);
    }
  }, items1);
  const obj4 = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[7]);
  const intl = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[17]).intl;
  if (analyticsLocations.useTier0UpsellContent) {
    const obj5 = { planName: tmp2(tmp3[12]).getTierDisplayNameByPlanId(PREMIUM_MONTH_TIER_0.PREMIUM_MONTH_TIER_0) };
    let formatToPlainStringResult = intl.formatToPlainString(tmp2(tmp3[17]).t.kWBwlJ, obj5);
    const tmp2Result = tmp2(tmp3[12]);
  } else {
    formatToPlainStringResult = intl.string(tmp2(tmp3[17]).t["5t3lw+"]);
  }
  const obj6 = { body: formatToPlainStringResult, ctaText: null, icon: null, loading: null, onPress: null };
  const intl2 = tmp2(tmp3[17]).intl;
  const string = intl2.string;
  const t = tmp2(tmp3[17]).t;
  if (analyticsLocations.useTier0UpsellContent) {
    let stringResult = string(t["9CM5v9"]);
  } else {
    stringResult = string(t.pj0XBN);
  }
  obj6.ctaText = stringResult;
  if (mobileEmojiPickerUpsellRestyleEnabled1) {
    const obj7 = { size: "sm", color: tmp5(tmp3[19]).colors.INTERACTIVE_TEXT_ACTIVE, style: tmp.nitroIcon };
    let tmp11Result = jsx(tmp2(tmp3[18]).NitroWheelIcon, {
      size: "sm",
      color: tmp5(tmp3[19]).colors.INTERACTIVE_TEXT_ACTIVE,
      style: tmp.nitroIcon,
    });
  } else {
    const obj8 = {
      style: tmp.nitroIcon,
      source: tmp5(tmp3[21]),
      disableColor: true,
      size: tmp2(tmp3[20]).Icon.Sizes.MEDIUM,
    };
    tmp11Result = jsx(tmp2(tmp3[20]).Icon, {
      style: tmp.nitroIcon,
      source: tmp5(tmp3[21]),
      disableColor: true,
      size: tmp2(tmp3[20]).Icon.Sizes.MEDIUM,
    });
  }
  obj6.icon = tmp11Result;
  obj6.loading = tmp6.loading;
  obj6.onPress = callback;
  return jsx(useTier0UpsellContent(mobileEmojiPickerUpsellRestyleEnabled[16]), {
    body: formatToPlainStringResult,
    ctaText: null,
    icon: null,
    loading: null,
    onPress: null,
  });
});
