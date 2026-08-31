// === Module 9112: EMOJI_PICKER_PREMIUM_UPSELL_HEIGHT ===

// Module 9112 (EMOJI_PICKER_PREMIUM_UPSELL_HEIGHT)
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

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
  const tmp = callback2();
  let guildId;
  let analyticsLocations2;
  analyticsLocations = analyticsLocations.analyticsLocations;
  guildId = analyticsLocations;
  const useTier0UpsellContent = analyticsLocations.useTier0UpsellContent;
  analyticsLocations2 = useTier0UpsellContent;
  const items = [analyticsLocations, useTier0UpsellContent];
  guildId = undefined;
  analyticsLocations2 = undefined;
  let useTier0UpsellContent2;
  guildId = analyticsLocations.guildId;
  analyticsLocations2 = analyticsLocations.analyticsLocations;
  useTier0UpsellContent2 = analyticsLocations.useTier0UpsellContent;
  let ref;
  const callback = ref.useCallback(() => {
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
  let obj = { style: tmp.premiumSearchUpsellContent, children: null };
  obj = { style: tmp.nitroIcon, source: analyticsLocations2(useTier0UpsellContent2[14]), disableColor: true, size: guildId(useTier0UpsellContent2[13]).Icon.Sizes.MEDIUM };
  const items2 = [callback(guildId(useTier0UpsellContent2[13]).Icon, obj), ];
  const intl = guildId(useTier0UpsellContent2[16]).intl;
  if (analyticsLocations.useTier0UpsellContent) {
    obj = { planName: null };
    obj[0] = tmp8(tmp9[9]).getTierDisplayNameByPlanId(PREMIUM_MONTH_TIER_0.PREMIUM_MONTH_TIER_0);
    let formatToPlainStringResult = intl.formatToPlainString(tmp8(tmp9[16]).t.kWBwlJ, obj);
    let tmp8Result = tmp8(tmp9[9]);
  } else {
    formatToPlainStringResult = intl.string(tmp8(tmp9[16]).t["5t3lw+"]);
  }
  items2[1] = callback(guildId(useTier0UpsellContent2[15]).Text, { lineClamp: 2, variant: "text-sm/medium", color: "interactive-text-active", children: formatToPlainStringResult });
  obj[1] = items2;
  obj1 = { style: tmp.premiumSearchUpsell, accessibilityRole: "button", onPress: callback, children: null };
  const items3 = [closure_13(View, obj), ];
  const intl2 = tmp8(tmp9[16]).intl;
  const string = intl2.string;
  const t = tmp8(tmp9[16]).t;
  if (analyticsLocations.useTier0UpsellContent) {
    let stringResult = string(t["9CM5v9"]);
  } else {
    stringResult = string(t.pj0XBN);
  }
  items3[1] = callback(guildId(useTier0UpsellContent2[15]).Text, { variant: "text-sm/medium", color: "text-link", children: stringResult });
  obj1[3] = items3;
  const tmp5Result = closure_13(View, obj);
  return callback(View, { style: tmp.container, collapsable: false, children: closure_13(guildId(useTier0UpsellContent2[17]).PressableOpacity, obj1) });
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