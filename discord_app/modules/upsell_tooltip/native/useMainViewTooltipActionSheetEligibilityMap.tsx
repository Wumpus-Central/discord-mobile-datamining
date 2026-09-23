// discord_app/modules/upsell_tooltip/native/useMainViewTooltipActionSheetEligibilityMap.tsx
import BadgeId from "../../../../discord_common/js/shared/shared-constants/BadgeId.tsx";
import BadgeDirectoryActionCreators from "../../badges/BadgeDirectoryActionCreators.tsx";
import MainViewTooltipActionSheetsDisabledExperimentDefault from "../experiments/MainViewTooltipActionSheetsDisabledExperiment.tsx";
import useGiftingPromotionAssetsReadyDefault from "../../premium/gifting/native/hooks/useGiftingPromotionAssetsReady.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import BadgeDirectoryStore from "../../badges/BadgeDirectoryStore.tsx";
import GooglePlayPriceChangeStore from "../../premium/native/google_play_price_changes/GooglePlayPriceChangeStore.tsx";
import PromotionsStore from "../../premium/promotions/PromotionsStore.tsx";
import UserSettingsProtoStore from "../../user_settings/UserSettingsProtoStore.tsx";
import UserRequiredActionStore from "../../../stores/UserRequiredActionStore.tsx";

require = fn;
const PlatformTypes = fn(1074).PlatformTypes;
const PremiumConstants = fn(1374);
({
  PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID,
  PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID,
  PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID,
  PREMIUM_TIER_2_REACTIVATION_TRIAL_ID,
} = PremiumConstants);
const UserSettingsTypes = fn(1084).UserSettingsTypes;
const MainViewTooltipActionSheets = "MainViewTooltipActionSheets";
let items = [
  PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID,
  PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID,
  PREMIUM_TIER_2_REACTIVATION_TRIAL_ID,
  PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID,
];
const set = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/upsell_tooltip/native/useMainViewTooltipActionSheetEligibilityMap.tsx",
);

export const useMainViewTooltipActionSheetMap = function useMainViewTooltipActionSheetMap() {
  let items = [UserSettingsProtoStore];
  let stateFromStores = isEligibleToShowGiftingBadgeCoachmark(504).useStateFromStores(items, () =>
    UserSettingsProtoStore.hasLoaded(constants.PRELOADED_USER_SETTINGS),
  );
  let obj = isEligibleToShowGiftingBadgeCoachmark(504);
  const obj2 = MainViewTooltipActionSheetsDisabledExperimentDefault;
  const obj3 = { location: MainViewTooltipActionSheets };
  const items1 = [UserRequiredActionStore];
  const stateFromStores1 = isEligibleToShowGiftingBadgeCoachmark(504).useStateFromStores(items1, () =>
    UserRequiredActionStore.hasAction(),
  );
  if (stateFromStores) {
    stateFromStores = !obj2.getConfig(obj3).disabled;
  }
  if (stateFromStores) {
    stateFromStores = !stateFromStores1;
  }
  if (stateFromStores) {
    stateFromStores = !tmp(1609).isMetaQuest();
    const tmpResult = tmp(1609);
  }
  const obj4 = isEligibleToShowGiftingBadgeCoachmark(504);
  const items2 = [GooglePlayPriceChangeStore];
  const tmpResult19 = isEligibleToShowGiftingBadgeCoachmark(504);
  [tmp8, tmp9] = isEligibleToShowGiftingBadgeCoachmark(504).useStateFromStoresArray(items2, () => {
    const items = [,];
    ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = GooglePlayPriceChangeStore);
    return items;
  });
  const tmp7 = _slicedToArray(
    isEligibleToShowGiftingBadgeCoachmark(504).useStateFromStoresArray(items2, () => {
      const items = [,];
      ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = GooglePlayPriceChangeStore);
      return items;
    }),
    2,
  );
  const premiumDiscountOffer = isEligibleToShowGiftingBadgeCoachmark(8405).usePremiumDiscountOffer();
  const tmpResult20 = isEligibleToShowGiftingBadgeCoachmark(8405);
  const premiumTrialOffer = isEligibleToShowGiftingBadgeCoachmark(7775).usePremiumTrialOffer();
  const PremiumTrialOfferActionSheetKillSwitchExperiment = tmp(17499).PremiumTrialOfferActionSheetKillSwitchExperiment;
  const tmpResult21 = isEligibleToShowGiftingBadgeCoachmark(7775);
  const promotionMarketingComponent = isEligibleToShowGiftingBadgeCoachmark(13780).usePromotionMarketingComponent(
    tmp(11081).MarketingComponentType.MOBILE_BOTTOM_SHEET,
  );
  let oneofKind;
  if (promotionMarketingComponent != null) {
    oneofKind = promotionMarketingComponent.properties.properties.oneofKind;
  }
  let mobileBottomSheet = null;
  if ("mobileBottomSheet" === oneofKind) {
    mobileBottomSheet = promotionMarketingComponent.properties.properties.mobileBottomSheet;
  }
  const tmpResult22 = isEligibleToShowGiftingBadgeCoachmark(13780);
  const items3 = [PromotionsStore];
  const stateFromStores2 = isEligibleToShowGiftingBadgeCoachmark(504).useStateFromStores(items3, () => {
    const giftPromotion = PromotionsStore.getGiftPromotion();
    let id;
    if (giftPromotion != null) {
      id = giftPromotion.id;
    }
    return id;
  });
  const tmpResult23 = isEligibleToShowGiftingBadgeCoachmark(504);
  const items4 = [PromotionsStore];
  const stateFromStores3 = isEligibleToShowGiftingBadgeCoachmark(504).useStateFromStores(items4, () => {
    const marketingComponentByType = PromotionsStore.getMarketingComponentByType(
      isEligibleToShowGiftingBadgeCoachmark(11081).MarketingComponentType.GIFT_ICON_COACHMARK,
    );
    let giftIconCoachmark = null;
    if (null != marketingComponentByType) {
      giftIconCoachmark = null;
      if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
        giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
      }
    }
    return giftIconCoachmark;
  });
  const tmpResult24 = isEligibleToShowGiftingBadgeCoachmark(504);
  const items5 = [PromotionsStore];
  const stateFromStores4 = isEligibleToShowGiftingBadgeCoachmark(504).useStateFromStores(items5, () => {
    const marketingComponentByType = PromotionsStore.getMarketingComponentByType(
      isEligibleToShowGiftingBadgeCoachmark(11081).MarketingComponentType.GIFT_REMINDER_COACHMARK,
    );
    let prop = null;
    if (null != marketingComponentByType) {
      prop = null;
      if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
        prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
      }
    }
    return prop;
  });
  const GiftPromotionReminderExperiment = tmp(11080).GiftPromotionReminderExperiment;
  const tmpResult25 = isEligibleToShowGiftingBadgeCoachmark(504);
  isEligibleToShowGiftingBadgeCoachmark = isEligibleToShowGiftingBadgeCoachmark(
    11086,
  ).useIsEligibleToShowGiftingBadgeCoachmark({ platform: "native", location: MainViewTooltipActionSheets });
  const items6 = [isEligibleToShowGiftingBadgeCoachmark];
  const effect = noop.useEffect(() => {
    if (isEligibleToShowGiftingBadgeCoachmark) {
      const badge = BadgeDirectoryActionCreators.fetchBadge(BadgeId.BadgeId.GIFTING);
    }
  }, items6);
  const tmpResult26 = isEligibleToShowGiftingBadgeCoachmark(11086);
  const items7 = [BadgeDirectoryStore];
  let isDismissed = null != stateFromStores2;
  const stateFromStores5 = isEligibleToShowGiftingBadgeCoachmark(504).useStateFromStores(
    items7,
    () => null != badgeById.getBadgeById(isEligibleToShowGiftingBadgeCoachmark(8528).BadgeId.GIFTING),
  );
  if (isDismissed) {
    isDismissed = tmp(4647).UNSAFE_isSnowflakeBoundDismissibleContentDismissed(
      tmp(2028).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET,
      stateFromStores2,
    ).isDismissed;
    const tmpResult28 = tmp(4647);
  }
  let isDismissed2 = null != stateFromStores2;
  if (isDismissed2) {
    isDismissed2 = tmp(4647).UNSAFE_isSnowflakeBoundDismissibleContentDismissed(
      tmp(2028).DismissibleContent.GIFTING_PROMOTION_REMINDER,
      stateFromStores2,
    ).isDismissed;
    const tmpResult29 = tmp(4647);
  }
  let tmp22 = null;
  const tmpResult27 = isEligibleToShowGiftingBadgeCoachmark(504);
  if (!isDismissed) {
    tmp22 = stateFromStores3;
  }
  let tmp23 = null;
  if (!isDismissed2) {
    tmp23 = stateFromStores4;
  }
  const tmp4Result = useGiftingPromotionAssetsReadyDefault;
  ({ isGiftCoachmarkAssetReady, isGiftReminderAssetReady } = useGiftingPromotionAssetsReadyDefault(tmp22, tmp23));
  const tmp4ResultResult = useGiftingPromotionAssetsReadyDefault(tmp22, tmp23);
  const nitroFileUploadAnnouncementEligible =
    isEligibleToShowGiftingBadgeCoachmark(17503).useNitroFileUploadAnnouncementEligible(MainViewTooltipActionSheets);
  const tmpResult30 = isEligibleToShowGiftingBadgeCoachmark(17503);
  const nitroFileUploadUpsellEligible =
    isEligibleToShowGiftingBadgeCoachmark(17503).useNitroFileUploadUpsellEligible(MainViewTooltipActionSheets);
  const tmpResult31 = isEligibleToShowGiftingBadgeCoachmark(17503);
  const items8 = [,];
  ({ LEAGUE_OF_LEGENDS: arr9[0], RIOT_GAMES: arr9[1] } = PlatformTypes);
  const shouldShowRobloxConnectionCoachmark =
    isEligibleToShowGiftingBadgeCoachmark(17478).useShouldShowRobloxConnectionCoachmark();
  const tmpResult32 = isEligibleToShowGiftingBadgeCoachmark(17478);
  const shouldShowConnectionDeprecationBottomSheet = isEligibleToShowGiftingBadgeCoachmark(
    17488,
  ).useShouldShowConnectionDeprecationBottomSheet({ deprecatedPlatformTypes: items8 });
  const tmpResult33 = isEligibleToShowGiftingBadgeCoachmark(17488);
  const obj5 = { deprecatedPlatformTypes: null };
  const items9 = [PlatformTypes.BATTLENET];
  obj5.deprecatedPlatformTypes = items9;
  const shouldShowConnectionDeprecationBottomSheet1 =
    isEligibleToShowGiftingBadgeCoachmark(17488).useShouldShowConnectionDeprecationBottomSheet(obj5);
  const tmpResult34 = isEligibleToShowGiftingBadgeCoachmark(17488);
  const isDisplayNameStylesFlywheelSettersEnabled =
    isEligibleToShowGiftingBadgeCoachmark(10076).useIsDisplayNameStylesFlywheelSettersEnabled(
      MainViewTooltipActionSheets,
    );
  isEligibleToShowGiftingBadgeCoachmark(12300);
  const obj6 = {};
  if (stateFromStores) {
    const obj7 = { isEligible: tmp8, newSnowflakeId: null, actionSheetProperties: null };
    let priceChangeId;
    if (tmp9 != null) {
      priceChangeId = tmp9.priceChangeId;
    }
    obj7.newSnowflakeId = priceChangeId;
    obj7.actionSheetProperties = {};
    obj6[tmp(2028).DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET] = obj7;
    let tmp37 = null != premiumDiscountOffer;
    if (tmp37) {
      tmp37 = null == premiumDiscountOffer.expiresAt;
    }
    const obj8 = { isEligible: tmp37, newSnowflakeId: null, actionSheetProperties: null };
    let id;
    if (premiumDiscountOffer != null) {
      id = premiumDiscountOffer.id;
    }
    obj8.newSnowflakeId = id;
    if (null != premiumDiscountOffer) {
      const obj9 = { userDiscountOffer: premiumDiscountOffer };
      let obj10 = obj9;
    } else {
      obj10 = {};
    }
    obj8.actionSheetProperties = obj10;
    obj6[tmp(2028).DismissibleContent.DISCOUNT_OFFER_ACTION_SHEET] = obj8;
    let hasItem = null != premiumTrialOffer;
    if (hasItem) {
      hasItem = null == premiumTrialOffer.expiresAt;
    }
    if (hasItem) {
      hasItem = !PremiumTrialOfferActionSheetKillSwitchExperiment.useConfig({ location: MainViewTooltipActionSheets })
        .enabled;
    }
    if (hasItem) {
      hasItem = set.has(premiumTrialOffer.trialId);
    }
    const obj11 = { isEligible: hasItem, newSnowflakeId: null, actionSheetProperties: null };
    let id1;
    if (premiumTrialOffer != null) {
      id1 = premiumTrialOffer.id;
    }
    obj11.newSnowflakeId = id1;
    if (null != premiumTrialOffer) {
      const obj12 = { userTrialOffer: premiumTrialOffer };
      let obj13 = obj12;
    } else {
      obj13 = {};
    }
    obj11.actionSheetProperties = obj13;
    obj6[tmp(2028).DismissibleContent.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET] = obj11;
    let dismissibleContent;
    if (mobileBottomSheet != null) {
      dismissibleContent = mobileBottomSheet.dismissibleContent;
    }
    const obj14 = {
      isEligible: dismissibleContent === tmp(2028).DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL,
      newSnowflakeId: null,
      actionSheetProperties: null,
    };
    let promotionId;
    if (promotionMarketingComponent != null) {
      promotionId = promotionMarketingComponent.promotionId;
    }
    obj14.newSnowflakeId = promotionId;
    const obj15 = { bottomSheetData: mobileBottomSheet, componentId: null, promotionId: null };
    let id2;
    if (promotionMarketingComponent != null) {
      id2 = promotionMarketingComponent.id;
    }
    obj15.componentId = id2;
    let promotionId1;
    if (promotionMarketingComponent != null) {
      promotionId1 = promotionMarketingComponent.promotionId;
    }
    obj15.promotionId = promotionId1;
    obj14.actionSheetProperties = obj15;
    obj6[tmp(2028).DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL] = obj14;
    let dismissibleContent1;
    if (mobileBottomSheet != null) {
      dismissibleContent1 = mobileBottomSheet.dismissibleContent;
    }
    const obj16 = {
      isEligible: dismissibleContent1 === tmp(2028).DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL,
      newSnowflakeId: null,
      actionSheetProperties: null,
    };
    let promotionId2;
    if (promotionMarketingComponent != null) {
      promotionId2 = promotionMarketingComponent.promotionId;
    }
    obj16.newSnowflakeId = promotionId2;
    const obj17 = { bottomSheetData: mobileBottomSheet, componentId: null, promotionId: null };
    let id3;
    if (promotionMarketingComponent != null) {
      id3 = promotionMarketingComponent.id;
    }
    obj17.componentId = id3;
    let promotionId3;
    if (promotionMarketingComponent != null) {
      promotionId3 = promotionMarketingComponent.promotionId;
    }
    obj17.promotionId = promotionId3;
    obj16.actionSheetProperties = obj17;
    obj6[tmp(2028).DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL] = obj16;
    let tmp50 = tmp34;
    if (tmp34) {
      tmp50 = isGiftCoachmarkAssetReady;
    }
    const obj18 = { isEligible: tmp50, newSnowflakeId: stateFromStores2, actionSheetProperties: null };
    const obj19 = { coachmarkComponent: stateFromStores3 };
    obj18.actionSheetProperties = obj19;
    obj6[tmp(2028).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET] = obj18;
    let tmp51 = !tmp34;
    if (tmp34) {
      tmp51 = null == stateFromStores4;
    }
    let enabled = !tmp51;
    if (!tmp51) {
      enabled = null != stateFromStores2;
    }
    if (enabled) {
      enabled = isDismissed;
    }
    if (enabled) {
      enabled = GiftPromotionReminderExperiment.useConfig({ location: MainViewTooltipActionSheets }).enabled;
    }
    if (enabled) {
      enabled = null != stateFromStores4;
    }
    if (enabled) {
      enabled = isGiftReminderAssetReady;
    }
    const obj20 = { isEligible: enabled, newSnowflakeId: stateFromStores2, actionSheetProperties: null };
    const obj21 = { coachmarkComponent: stateFromStores4 };
    obj20.actionSheetProperties = obj21;
    obj6[tmp(2028).DismissibleContent.GIFTING_PROMOTION_REMINDER] = obj20;
    if (isEligibleToShowGiftingBadgeCoachmark) {
      isEligibleToShowGiftingBadgeCoachmark = stateFromStores5;
    }
    const obj22 = { isEligible: isEligibleToShowGiftingBadgeCoachmark, actionSheetProperties: {} };
    obj6[tmp(2028).DismissibleContent.NEW_GIFTING_BADGES_COACHMARK] = obj22;
    const obj23 = { isEligible: true, actionSheetProperties: {} };
    obj6[tmp(2028).DismissibleContent.CUSTOM_APP_ICONS_COACHMARK] = obj23;
    const obj24 = { isEligible: shouldShowRobloxConnectionCoachmark, actionSheetProperties: {} };
    obj6[tmp(2028).DismissibleContent.ROBLOX_CONNECTION_COACHMARK] = obj24;
    const obj25 = { isEligible: isDisplayNameStylesFlywheelSettersEnabled, actionSheetProperties: {} };
    obj6[tmp(2028).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_COACHMARK] = obj25;
    const obj26 = { isEligible: shouldShowConnectionDeprecationBottomSheet, actionSheetProperties: null };
    const obj27 = { platformTypes: items8 };
    obj26.actionSheetProperties = obj27;
    obj6[tmp(2028).DismissibleContent.RIOT_CONNECTION_DEPRECATION_DISABLE] = obj26;
    const obj28 = { isEligible: shouldShowConnectionDeprecationBottomSheet1, actionSheetProperties: null };
    const obj29 = { platformTypes: null };
    const items10 = [PlatformTypes.BATTLENET];
    obj29.platformTypes = items10;
    obj28.actionSheetProperties = obj29;
    obj6[tmp(2028).DismissibleContent.BATTLENET_CONNECTION_DEPRECATION_DISABLE] = obj28;
    const obj30 = { isEligible: true, actionSheetProperties: {} };
    obj6[tmp(2028).DismissibleContent.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT] = obj30;
    const obj31 = { isEligible: nitroFileUploadAnnouncementEligible, actionSheetProperties: {} };
    obj6[tmp(2028).DismissibleContent.NITRO_FILE_UPLOAD_1GB_ANNOUNCEMENT] = obj31;
    const obj32 = { isEligible: nitroFileUploadUpsellEligible, actionSheetProperties: {} };
    obj6[tmp(2028).DismissibleContent.NITRO_FILE_UPLOAD_1GB_UPSELL] = obj32;
    const obj33 = { isEligible: tmp33, actionSheetProperties: {} };
    obj6[tmp(2028).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_COACHMARK] = obj33;
    let tmp35 = obj6;
  } else {
    tmp35 = obj6;
  }
  return tmp35;
};
