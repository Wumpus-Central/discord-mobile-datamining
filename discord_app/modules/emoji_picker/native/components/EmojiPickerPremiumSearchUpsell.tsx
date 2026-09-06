// discord_app/modules/emoji_picker/native/components/EmojiPickerPremiumSearchUpsell.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../../stores/UserStore.tsx";
import ME from "../../../../Constants.tsx";
import GuildFeatures from "../../../premium/PremiumConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let c3 = importAllResult;
({ AnalyticEvents: closure_6, AnalyticsPages: error, AnalyticsSections: closure_8 } = ME);
({ PremiumSubscriptionSKUs: c9, PremiumUpsellTypes: c10, SubscriptionPlans: unpackModuleId } = GuildFeatures);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let obj = { container: null, premiumSearchUpsell: null, premiumSearchUpsellContent: null, nitroIcon: null };
obj = { paddingTop: ThemesDefault.space.PX_8 };
obj[0] = obj;
createCacheKey = {
  height: 56,
  padding: ThemesDefault.space.PX_8,
  borderRadius: ThemesDefault.radii.xs,
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  alignContent: "center",
};
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
  let useTier0UpsellContent2;
  let ref;
  let obj = guildId(useTier0UpsellContent2[9]);
  const mobileEmojiPickerUpsellRestyleEnabled = obj.useMobileEmojiPickerUpsellRestyleEnabled(
    "native.EmojiPickerPremiumSearchUpsell",
  );
  useTier0UpsellContent2 = mobileEmojiPickerUpsellRestyleEnabled;
  obj1 = guildId(useTier0UpsellContent2[10]);
  let obj2 = guildId(useTier0UpsellContent2[11]);
  const tmp6 = analyticsLocations2(useTier0UpsellContent2[13])(
    useTier0UpsellContent,
    obj1.usePremiumUpsellConfig(
      obj2.getUpsellType(guildId(useTier0UpsellContent2[12]).EntitlementFeatureNames.EMOJIS_EVERYWHERE),
      analyticsLocations,
    ).onViewAllPerks,
    constants.PREMIUM_UPSELL_EMOJI_EVERYWHERE,
  );
  const onPress = tmp6.onPress;
  ref = onPress;
  const items = [analyticsLocations, useTier0UpsellContent, mobileEmojiPickerUpsellRestyleEnabled, onPress];
  callback = ref.useCallback(() => {
    const currentUser = closure_1_5.getCurrentUser();
    let result = null == currentUser;
    if (!result) {
      let obj = analyticsLocations2(useTier0UpsellContent2[14]);
      result = obj.canUseEmojisEverywhere(currentUser);
    }
    if (!result) {
      if (useTier0UpsellContent2) {
        ref();
      } else {
        analyticsLocations2(useTier0UpsellContent2[15]).hideActionSheet();
        obj = { analyticsLocations: null, premiumFeatureCardOrder: null };
        obj[0] = guildId;
        const obj2 = analyticsLocations2(useTier0UpsellContent2[15]);
        const PremiumFeatureCardOrder = guildId(useTier0UpsellContent2[17]).PremiumFeatureCardOrder;
        obj[1] = analyticsLocations2 ? PremiumFeatureCardOrder.TIER_0_LEADING : PremiumFeatureCardOrder.TIER_2_LEADING;
        analyticsLocations2(useTier0UpsellContent2[16])(obj);
        const tmp9 = analyticsLocations2(useTier0UpsellContent2[16]);
      }
    }
  }, items);
  let obj3 = guildId(useTier0UpsellContent2[9]);
  guildId = undefined;
  analyticsLocations2 = undefined;
  useTier0UpsellContent2 = undefined;
  guildId = analyticsLocations.guildId;
  analyticsLocations2 = analyticsLocations.analyticsLocations;
  useTier0UpsellContent2 = analyticsLocations.useTier0UpsellContent;
  ref = undefined;
  const mobileEmojiPickerUpsellRestyleEnabled1 = obj3.useMobileEmojiPickerUpsellRestyleEnabled(
    "native.EmojiPickerPremiumSearchUpsell",
  );
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
  if (mobileEmojiPickerUpsellRestyleEnabled1) {
    obj = { size: "sm", color: null, style: null };
    obj[1] = tmp5(tmp3[7]).colors.INTERACTIVE_TEXT_ACTIVE;
    obj[2] = tmp.nitroIcon;
    let tmp13Result = tmp13(tmp2(tmp3[18]).NitroWheelIcon, obj);
    let tmp15 = tmp13;
  } else {
    obj1 = { style: null, source: null, disableColor: true, size: null };
    obj1[0] = tmp.nitroIcon;
    obj1[1] = tmp5(tmp3[20]);
    obj1[3] = tmp2(tmp3[19]).Icon.Sizes.MEDIUM;
    tmp13Result = tmp13(tmp2(tmp3[19]).Icon, obj1);
    tmp15 = tmp13;
  }
  const items2 = [tmp13Result];
  const intl = tmp2(tmp3[22]).intl;
  if (analyticsLocations.useTier0UpsellContent) {
    obj2 = { planName: null };
    obj2[0] = tmp2(tmp3[14]).getTierDisplayNameByPlanId(PREMIUM_MONTH_TIER_0.PREMIUM_MONTH_TIER_0);
    let formatToPlainStringResult = intl.formatToPlainString(tmp2(tmp3[22]).t.kWBwlJ, obj2);
    const tmp2Result = tmp2(tmp3[14]);
  } else {
    formatToPlainStringResult = intl.string(tmp2(tmp3[22]).t["5t3lw+"]);
  }
  items2[1] = tmp15(guildId(useTier0UpsellContent2[21]).Text, {
    lineClamp: 2,
    variant: "text-sm/medium",
    color: "interactive-text-active",
    children: formatToPlainStringResult,
  });
  obj[1] = items2;
  obj3 = {
    style: tmp.premiumSearchUpsell,
    accessibilityRole: "button",
    disabled: tmp6.loading,
    onPress: callback,
    children: null,
  };
  const items3 = [closure_13(View, obj)];
  const intl2 = tmp2(tmp3[22]).intl;
  const string = intl2.string;
  const t = tmp2(tmp3[22]).t;
  if (analyticsLocations.useTier0UpsellContent) {
    let stringResult = string(t["9CM5v9"]);
  } else {
    stringResult = string(t.pj0XBN);
  }
  items3[1] = tmp15(guildId(useTier0UpsellContent2[21]).Text, {
    variant: "text-sm/medium",
    color: "text-link",
    children: stringResult,
  });
  obj3[4] = items3;
  const tmp11Result = closure_13(View, obj);
  return tmp15(View, {
    style: tmp.container,
    collapsable: false,
    children: closure_13(guildId(useTier0UpsellContent2[23]).PressableOpacity, obj3),
  });
});
let result = require("set").fileFinishedImporting(
  "modules/emoji_picker/native/components/EmojiPickerPremiumSearchUpsell.tsx",
);

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
export const useEmojiPickerPremiumSearchUpsellClick = function useEmojiPickerPremiumSearchUpsellClick(
  analyticsLocations,
) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const useTier0UpsellContent = analyticsLocations.useTier0UpsellContent;
  let mobileEmojiPickerUpsellRestyleEnabled;
  let onPress;
  let obj = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[9]);
  mobileEmojiPickerUpsellRestyleEnabled = obj.useMobileEmojiPickerUpsellRestyleEnabled(
    "native.EmojiPickerPremiumSearchUpsell",
  );
  const obj2 = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[10]);
  const tmp2 = useTier0UpsellContent(mobileEmojiPickerUpsellRestyleEnabled[13])(
    useTier0UpsellContent,
    obj2.usePremiumUpsellConfig(
      analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[11]).getUpsellType(
        analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[12]).EntitlementFeatureNames.EMOJIS_EVERYWHERE,
      ),
      analyticsLocations,
    ).onViewAllPerks,
    constants.PREMIUM_UPSELL_EMOJI_EVERYWHERE,
  );
  onPress = tmp2.onPress;
  obj = {
    loading: tmp2.loading,
    onPress: onPress.useCallback(() => {
      const currentUser = closure_1_5.getCurrentUser();
      let result = null == currentUser;
      if (!result) {
        let obj = analyticsLocations2(useTier0UpsellContent2[14]);
        result = obj.canUseEmojisEverywhere(currentUser);
      }
      if (!result) {
        if (useTier0UpsellContent2) {
          ref();
        } else {
          analyticsLocations2(useTier0UpsellContent2[15]).hideActionSheet();
          obj = { analyticsLocations: null, premiumFeatureCardOrder: null };
          obj[0] = guildId;
          const obj2 = analyticsLocations2(useTier0UpsellContent2[15]);
          const PremiumFeatureCardOrder = guildId(useTier0UpsellContent2[17]).PremiumFeatureCardOrder;
          obj[1] = analyticsLocations2
            ? PremiumFeatureCardOrder.TIER_0_LEADING
            : PremiumFeatureCardOrder.TIER_2_LEADING;
          analyticsLocations2(useTier0UpsellContent2[16])(obj);
          const tmp9 = analyticsLocations2(useTier0UpsellContent2[16]);
        }
      }
    }, items),
  };
  items = [analyticsLocations, useTier0UpsellContent, mobileEmojiPickerUpsellRestyleEnabled, onPress];
  return obj;
};
export const PremiumSearchUpsell = memoResult;
