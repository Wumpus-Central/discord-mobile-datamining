// === Module 9164: EMOJI_PICKER_PREMIUM_UPSELL_HEIGHT ===

// Module 9164 (EMOJI_PICKER_PREMIUM_UPSELL_HEIGHT)
import ThemesDefault from "Themes" /* 709 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "mergeGuildAvatar" /* 1921 */;
import ME from "ME" /* 673 */;
import GuildFeatures from "GuildFeatures" /* 1923 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
let c3 = importAllResult;
({ AnalyticEvents: closure_6, AnalyticsPages: error, AnalyticsSections: closure_8 } = ME);
({ PremiumSubscriptionSKUs: c9, PremiumUpsellTypes: c10, SubscriptionPlans: unpackModuleId } = GuildFeatures);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let obj = { container: null, premiumSearchUpsell: null, premiumSearchUpsellContent: null, nitroIcon: null };
obj = { paddingTop: ThemesDefault.space.PX_8 };
obj[0] = obj;
createCacheKey = { height: 56, padding: ThemesDefault.space.PX_8, borderRadius: ThemesDefault.radii.xs, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center" };
obj[1] = createCacheKey;
obj[2] = { flex: 0.8, flexDirection: "row" };
obj[3] = { marginRight: 8, alignSelf: "center" };
let closure_14 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((analyticsLocations) => {
  const tmp = callback();
  let guildId;
  let analyticsLocations2;
  analyticsLocations = analyticsLocations.analyticsLocations;
  guildId = analyticsLocations;
  const useTier0UpsellContent = analyticsLocations.useTier0UpsellContent;
  analyticsLocations2 = useTier0UpsellContent;
  const items = [analyticsLocations, useTier0UpsellContent];
  callback = ref.useCallback(() => {
    const currentUser = closure_1_5.getCurrentUser();
    let result = null == currentUser;
    if (!result) {
      let tmp8Result = analyticsLocations2(useTier0UpsellContent2[9]);
      result = tmp8Result.canUseEmojisEverywhere(currentUser);
    }
    if (!result) {
      analyticsLocations2(useTier0UpsellContent2[10]).hideActionSheet();
      tmp8Result = { analyticsLocations: null, premiumFeatureCardOrder: null };
      tmp8Result[0] = guildId;
      const obj2 = analyticsLocations2(useTier0UpsellContent2[10]);
      const PremiumFeatureCardOrder = guildId(useTier0UpsellContent2[12]).PremiumFeatureCardOrder;
      tmp8Result[1] = analyticsLocations2 ? PremiumFeatureCardOrder.TIER_0_LEADING : PremiumFeatureCardOrder.TIER_2_LEADING;
      tmp8Result = analyticsLocations2(useTier0UpsellContent2[11])(tmp8Result);
      const tmp8 = analyticsLocations2(useTier0UpsellContent2[11]);
    }
  }, items);
  let obj = guildId(useTier0UpsellContent2[13]);
  guildId = undefined;
  analyticsLocations2 = undefined;
  useTier0UpsellContent2 = undefined;
  guildId = analyticsLocations.guildId;
  analyticsLocations2 = analyticsLocations.analyticsLocations;
  useTier0UpsellContent2 = analyticsLocations.useTier0UpsellContent;
  ref = undefined;
  const mobileEmojiPickerUpsellRestyleEnabled = obj.useMobileEmojiPickerUpsellRestyleEnabled("native.EmojiPickerPremiumSearchUpsell");
  ref = ref.useRef(false);
  const items1 = [analyticsLocations2, guildId, useTier0UpsellContent2, ref];
  const effect = ref.useEffect(() => {
    if (!ref.current) {
      tmp.current = true;
      let trackResult = analyticsLocations2(useTier0UpsellContent2[8]);
      trackResult = { type: null, location: null, location_stack: null, sku_id: null };
      trackResult[0] = closure_1_10.EMOJI_PICKER_SEARCH;
      if (null != guildId) {
        let DM_CHANNEL = closure_1_7.GUILD_CHANNEL;
      } else {
        DM_CHANNEL = closure_1_7.DM_CHANNEL;
      }
      const obj = { page: null, section: null };
      obj[0] = DM_CHANNEL;
      obj[1] = closure_1_8.EMOJI_PICKER_POPOUT;
      trackResult[1] = obj;
      trackResult[2] = analyticsLocations2;
      trackResult[3] = useTier0UpsellContent2 ? closure_1_9.TIER_0 : closure_1_9.TIER_2;
      trackResult = trackResult.track(closure_1_6.PREMIUM_UPSELL_VIEWED, trackResult);
    }
  }, items1);
  obj = { style: tmp.premiumSearchUpsellContent, children: null };
  if (mobileEmojiPickerUpsellRestyleEnabled) {
    obj = { size: "sm", color: null, style: null };
    obj[1] = analyticsLocations2(tmp4[7]).colors.INTERACTIVE_TEXT_ACTIVE;
    obj[2] = tmp.nitroIcon;
    let tmp10Result = tmp10(tmp3(tmp4[14]).NitroWheelIcon, obj);
    let tmp13 = tmp10;
  } else {
    obj1 = { style: null, source: null, disableColor: true, size: null };
    obj1[0] = tmp.nitroIcon;
    obj1[1] = analyticsLocations2(tmp4[16]);
    obj1[3] = tmp3(tmp4[15]).Icon.Sizes.MEDIUM;
    tmp10Result = tmp10(tmp3(tmp4[15]).Icon, obj1);
    tmp13 = tmp10;
  }
  const items2 = [tmp10Result, ];
  const intl = tmp3(tmp4[18]).intl;
  if (analyticsLocations.useTier0UpsellContent) {
    let obj2 = { planName: null };
    obj2[0] = tmp3(tmp4[9]).getTierDisplayNameByPlanId(PREMIUM_MONTH_TIER_0.PREMIUM_MONTH_TIER_0);
    let formatToPlainStringResult = intl.formatToPlainString(tmp3(tmp4[18]).t.kWBwlJ, obj2);
    const tmp3Result = tmp3(tmp4[9]);
  } else {
    formatToPlainStringResult = intl.string(tmp3(tmp4[18]).t["5t3lw+"]);
  }
  items2[1] = tmp13(guildId(useTier0UpsellContent2[17]).Text, { lineClamp: 2, variant: "text-sm/medium", color: "interactive-text-active", children: formatToPlainStringResult });
  obj[1] = items2;
  const obj3 = { style: tmp.premiumSearchUpsell, accessibilityRole: "button", onPress: callback, children: null };
  const items3 = [closure_13(View, obj), ];
  const intl2 = tmp3(tmp4[18]).intl;
  const string = intl2.string;
  const t = tmp3(tmp4[18]).t;
  if (analyticsLocations.useTier0UpsellContent) {
    let stringResult = string(t["9CM5v9"]);
  } else {
    stringResult = string(t.pj0XBN);
  }
  items3[1] = tmp13(guildId(useTier0UpsellContent2[17]).Text, { variant: "text-sm/medium", color: "text-link", children: stringResult });
  obj3[3] = items3;
  let tmp8Result = closure_13(View, obj);
  return tmp13(View, { style: tmp.container, collapsable: false, children: closure_13(guildId(useTier0UpsellContent2[19]).PressableOpacity, obj3) });
});
let result = require("set").fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerPremiumSearchUpsell.tsx");

export const EMOJI_PICKER_PREMIUM_UPSELL_HEIGHT = 56;
export const useEmojiPickerPremiumSearchUpsellViewed = function useEmojiPickerPremiumSearchUpsellViewed(guildId) {
  guildId = guildId.guildId;
  const analyticsLocations = guildId.analyticsLocations;
  const useTier0UpsellContent = guildId.useTier0UpsellContent;
  let ref;
  ref = ref.useRef(false);
  const items = [analyticsLocations, guildId, useTier0UpsellContent, ref];
  const effect = ref.useEffect(() => {
    if (!ref.current) {
      tmp.current = true;
      let trackResult = analyticsLocations2(useTier0UpsellContent2[8]);
      trackResult = { type: null, location: null, location_stack: null, sku_id: null };
      trackResult[0] = closure_1_10.EMOJI_PICKER_SEARCH;
      if (null != guildId) {
        let DM_CHANNEL = closure_1_7.GUILD_CHANNEL;
      } else {
        DM_CHANNEL = closure_1_7.DM_CHANNEL;
      }
      const obj = { page: null, section: null };
      obj[0] = DM_CHANNEL;
      obj[1] = closure_1_8.EMOJI_PICKER_POPOUT;
      trackResult[1] = obj;
      trackResult[2] = analyticsLocations2;
      trackResult[3] = useTier0UpsellContent2 ? closure_1_9.TIER_0 : closure_1_9.TIER_2;
      trackResult = trackResult.track(closure_1_6.PREMIUM_UPSELL_VIEWED, trackResult);
    }
  }, items);
};
export const useEmojiPickerPremiumSearchUpsellClick = function useEmojiPickerPremiumSearchUpsellClick(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const useTier0UpsellContent = analyticsLocations.useTier0UpsellContent;
  const items = [analyticsLocations, useTier0UpsellContent];
  return importAllResult.useCallback(() => {
    const currentUser = closure_1_5.getCurrentUser();
    let result = null == currentUser;
    if (!result) {
      let tmp8Result = analyticsLocations2(useTier0UpsellContent2[9]);
      result = tmp8Result.canUseEmojisEverywhere(currentUser);
    }
    if (!result) {
      analyticsLocations2(useTier0UpsellContent2[10]).hideActionSheet();
      tmp8Result = { analyticsLocations: null, premiumFeatureCardOrder: null };
      tmp8Result[0] = guildId;
      const obj2 = analyticsLocations2(useTier0UpsellContent2[10]);
      const PremiumFeatureCardOrder = guildId(useTier0UpsellContent2[12]).PremiumFeatureCardOrder;
      tmp8Result[1] = analyticsLocations2 ? PremiumFeatureCardOrder.TIER_0_LEADING : PremiumFeatureCardOrder.TIER_2_LEADING;
      tmp8Result = analyticsLocations2(useTier0UpsellContent2[11])(tmp8Result);
      const tmp8 = analyticsLocations2(useTier0UpsellContent2[11]);
    }
  }, items);
};
export const PremiumSearchUpsell = memoResult;