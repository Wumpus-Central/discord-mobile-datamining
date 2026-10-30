// discord_app/modules/emoji_picker/native/components/EmojiPickerPremiumSearchUpsell.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import PremiumUtilsDefault from "../../../../utils/PremiumUtils.tsx";
import usePremiumFeatureUpsellGetNitroDefault from "../../../premium/roadblocks/native/hooks/usePremiumFeatureUpsellGetNitro.tsx";
import PremiumExpressionPickerSearchUpsellDefault from "../../../premium/roadblocks/native/views/PremiumExpressionPickerSearchUpsell.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const require = fn;
const Constants = fn(1072);
({ AnalyticEvents: hasOwnProperty, AnalyticsPages: metroRequire, AnalyticsSections: closure_7 } = Constants);
const PremiumConstants = fn(1386);
({ PremiumSubscriptionSKUs: closure_8, PremiumUpsellTypes: closure_9, SubscriptionPlans: c10 } = PremiumConstants);
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let closure_12 = createStyles.createStyles({ nitroIcon: { marginRight: 8, alignSelf: "center" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerPremiumSearchUpsell.tsx");

export function useEmojiPickerPremiumSearchUpsellViewed(guildId) {
  guildId = guildId.guildId;
  const analyticsLocations = guildId.analyticsLocations;
  const useTier0UpsellContent = guildId.useTier0UpsellContent;
  let ref;
  ref = ref.useRef(false);
  const items = [analyticsLocations, guildId, useTier0UpsellContent, ref];
  const effect = ref.useEffect(() => {
    if (!ref.current) {
      tmp.current = true;
      let obj2 = { type: constants4.EMOJI_PICKER_SEARCH, location: null, location_stack: null, sku_id: null };
      if (null != onPress) {
        let DM_CHANNEL = constants2.GUILD_CHANNEL;
      } else {
        DM_CHANNEL = constants2.DM_CHANNEL;
      }
      const obj3 = { page: DM_CHANNEL, section: constants3.EMOJI_PICKER_POPOUT };
      obj2.location = obj3;
      obj2.location_stack = location_stack;
      obj2.sku_id = dependencyMap ? React6.TIER_0 : React6.TIER_2;
      obj2 = AnalyticsUtilsDefault.track(constants.PREMIUM_UPSELL_VIEWED, obj2);
    }
  }, items);
}
export function useEmojiPickerPremiumSearchUpsellClick(arg0) {
  let onPress;
  ({ analyticsLocations, useTier0UpsellContent } = arg0);
  const obj = onPress(9764);
  const tmp = usePremiumFeatureUpsellGetNitroDefault(
    useTier0UpsellContent,
    obj.usePremiumUpsellConfig(
      onPress(9775).getUpsellType(onPress(5068).EntitlementFeatureNames.EMOJIS_EVERYWHERE),
      analyticsLocations,
    ).onViewAllPerks,
    constants2.PREMIUM_UPSELL_EMOJI_EVERYWHERE,
  );
  onPress = tmp.onPress;
  const obj3 = { loading: tmp.loading, onPress: null };
  const items = [onPress];
  obj3.onPress = noop.useCallback(() => {
    const currentUser = UserStore.getCurrentUser();
    let result = null == currentUser;
    if (!result) {
      result = PremiumUtilsDefault.canUseEmojisEverywhere(currentUser);
    }
    if (!result) {
      onPress();
    }
  }, items);
  return obj3;
}
export const PremiumSearchUpsell = noop.memo(function EmojiPickerListPremiumSearchUpsell(guildId) {
  let onPress;
  ({ analyticsLocations, useTier0UpsellContent } = guildId);
  const tmp = closure_12();
  let obj = onPress(9764);
  const tmp5 = usePremiumFeatureUpsellGetNitroDefault(
    useTier0UpsellContent,
    obj.usePremiumUpsellConfig(
      onPress(9775).getUpsellType(onPress(5068).EntitlementFeatureNames.EMOJIS_EVERYWHERE),
      analyticsLocations,
    ).onViewAllPerks,
    constants2.PREMIUM_UPSELL_EMOJI_EVERYWHERE,
  );
  onPress = tmp5.onPress;
  const items = [onPress];
  guildId = guildId.guildId;
  closure_129_0 = guildId;
  const analyticsLocations2 = guildId.analyticsLocations;
  closure_129_1 = analyticsLocations2;
  const useTier0UpsellContent2 = guildId.useTier0UpsellContent;
  closure_129_2 = useTier0UpsellContent2;
  const callback = noop.useCallback(() => {
    const currentUser = UserStore.getCurrentUser();
    let result = null == currentUser;
    if (!result) {
      result = PremiumUtilsDefault.canUseEmojisEverywhere(currentUser);
    }
    if (!result) {
      onPress();
    }
  }, items);
  const ref = noop.useRef(false);
  closure_129_3 = ref;
  const items1 = [analyticsLocations2, guildId, useTier0UpsellContent2, ref];
  const effect = noop.useEffect(() => {
    if (!ref.current) {
      tmp.current = true;
      let obj2 = { type: constants4.EMOJI_PICKER_SEARCH, location: null, location_stack: null, sku_id: null };
      if (null != onPress) {
        let DM_CHANNEL = constants2.GUILD_CHANNEL;
      } else {
        DM_CHANNEL = constants2.DM_CHANNEL;
      }
      const obj3 = { page: DM_CHANNEL, section: constants3.EMOJI_PICKER_POPOUT };
      obj2.location = obj3;
      obj2.location_stack = location_stack;
      obj2.sku_id = dependencyMap ? React6.TIER_0 : React6.TIER_2;
      obj2 = AnalyticsUtilsDefault.track(constants.PREMIUM_UPSELL_VIEWED, obj2);
    }
  }, items1);
  let obj2 = onPress(9775);
  const intl = onPress(1114).intl;
  if (guildId.useTier0UpsellContent) {
    let obj3 = { planName: tmp2(2048).getTierDisplayNameByPlanId(PREMIUM_MONTH_TIER_0.PREMIUM_MONTH_TIER_0) };
    let formatToPlainStringResult = intl.formatToPlainString(tmp2(1114).t.kWBwlJ, obj3);
    const tmp2Result = tmp2(2048);
  } else {
    formatToPlainStringResult = intl.string(tmp2(1114).t["5t3lw+"]);
  }
  const obj4 = { body: formatToPlainStringResult, ctaText: null, icon: null, loading: null, onPress: null };
  const intl2 = tmp2(1114).intl;
  const string = intl2.string;
  const t = tmp2(1114).t;
  if (guildId.useTier0UpsellContent) {
    let stringResult = string(t["9CM5v9"]);
  } else {
    stringResult = string(t.pj0XBN);
  }
  obj4.ctaText = stringResult;
  obj4.icon = jsx(onPress(9506).NitroWheelIcon, {
    size: "sm",
    color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
    style: tmp.nitroIcon,
  });
  obj4.loading = tmp5.loading;
  obj4.onPress = callback;
  return <tmp10 body={formatToPlainStringResult} ctaText={null} icon={null} loading={null} onPress={null} />;
});
