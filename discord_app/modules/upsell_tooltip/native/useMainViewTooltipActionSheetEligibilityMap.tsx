// discord_app/modules/upsell_tooltip/native/useMainViewTooltipActionSheetEligibilityMap.tsx
import _slicedToArray from "_slicedToArray";
import getGiftingBadgeProgressPercent from "getGiftingBadgeProgressPercent";
import map from "map";
import onInitializeSync from "onInitializeSync";
import createEmptyPromotionsByType from "createEmptyPromotionsByType";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import handleRequiredAction from "handleRequiredAction";
import { PlatformTypes } from "ME";
import GuildFeatures from "GuildFeatures";
import { UserSettingsTypes } from "MAX_FAVORITES";
import set from "map";
import { apexExperiment } from "../experiments/MainViewTooltipActionSheetsDisabledExperiment.tsx";

let PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID;
let PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID;
let PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID;
let PREMIUM_TIER_2_REACTIVATION_TRIAL_ID;
const require = arg1;
({ PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID } = GuildFeatures);
const MainViewTooltipActionSheets = "MainViewTooltipActionSheets";
let items = [PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID];
let set = new Set(items);
const result = set.fileFinishedImporting("modules/upsell_tooltip/native/useMainViewTooltipActionSheetEligibilityMap.tsx");

export const useMainViewTooltipActionSheetMap = function useMainViewTooltipActionSheetMap() {
  let isGiftCoachmarkAssetReady;
  let isGiftReminderAssetReady;
  let tmp8;
  let tmp9;
  let obj = isEligibleToShowGiftingBadgeCoachmark(589);
  let items = [handleConnectionClosedOrResumed];
  let stateFromStores = obj.useStateFromStores(items, () => handleConnectionClosedOrResumed.hasLoaded(constants.PRELOADED_USER_SETTINGS));
  let obj1 = apexExperiment;
  obj = { location: MainViewTooltipActionSheets };
  let obj3 = isEligibleToShowGiftingBadgeCoachmark(589);
  const items1 = [handleRequiredAction];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => handleRequiredAction.hasAction());
  if (stateFromStores) {
    stateFromStores = !obj1.getConfig(obj).disabled;
  }
  if (stateFromStores) {
    stateFromStores = !stateFromStores1;
  }
  if (stateFromStores) {
    let tmpResult = tmp(1605);
    stateFromStores = !tmpResult.isMetaQuest();
  }
  tmpResult = tmp(589);
  const items2 = [onInitializeSync];
  [tmp8, tmp9] = callback(tmpResult.useStateFromStoresArray(items2, () => {
    const items = [, ];
    ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = onInitializeSync);
    return items;
  }), 2);
  const tmp4 = importDefault;
  const tmp7 = callback(tmpResult.useStateFromStoresArray(items2, () => {
    const items = [, ];
    ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = onInitializeSync);
    return items;
  }), 2);
  const premiumDiscountOffer = isEligibleToShowGiftingBadgeCoachmark(7281).usePremiumDiscountOffer();
  const tmpResult1 = isEligibleToShowGiftingBadgeCoachmark(7281);
  const premiumTrialOffer = isEligibleToShowGiftingBadgeCoachmark(6851).usePremiumTrialOffer();
  const PremiumTrialOfferActionSheetKillSwitchExperiment = tmp(15941).PremiumTrialOfferActionSheetKillSwitchExperiment;
  const tmpResult2 = isEligibleToShowGiftingBadgeCoachmark(6851);
  const promotionMarketingComponent = isEligibleToShowGiftingBadgeCoachmark(7583).usePromotionMarketingComponent(tmp(7587).MarketingComponentType.MOBILE_BOTTOM_SHEET);
  let oneofKind;
  if (promotionMarketingComponent != null) {
    oneofKind = promotionMarketingComponent.properties.properties.oneofKind;
  }
  let mobileBottomSheet = null;
  if ("mobileBottomSheet" === oneofKind) {
    mobileBottomSheet = promotionMarketingComponent.properties.properties.mobileBottomSheet;
  }
  const tmpResult3 = isEligibleToShowGiftingBadgeCoachmark(7583);
  const items3 = [createEmptyPromotionsByType];
  const stateFromStores2 = isEligibleToShowGiftingBadgeCoachmark(589).useStateFromStores(items3, () => {
    const giftPromotion = store.getGiftPromotion();
    let id;
    if (giftPromotion != null) {
      id = giftPromotion.id;
    }
    return id;
  });
  const tmpResult4 = isEligibleToShowGiftingBadgeCoachmark(589);
  const items4 = [createEmptyPromotionsByType];
  const stateFromStores3 = isEligibleToShowGiftingBadgeCoachmark(589).useStateFromStores(items4, () => {
    const marketingComponentByType = store.getMarketingComponentByType(isEligibleToShowGiftingBadgeCoachmark(7587).MarketingComponentType.GIFT_ICON_COACHMARK);
    let giftIconCoachmark = null;
    if (null != marketingComponentByType) {
      giftIconCoachmark = null;
      if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
        giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
      }
    }
    return giftIconCoachmark;
  });
  const tmpResult5 = isEligibleToShowGiftingBadgeCoachmark(589);
  const items5 = [createEmptyPromotionsByType];
  const stateFromStores4 = isEligibleToShowGiftingBadgeCoachmark(589).useStateFromStores(items5, () => {
    const marketingComponentByType = store.getMarketingComponentByType(isEligibleToShowGiftingBadgeCoachmark(7587).MarketingComponentType.GIFT_REMINDER_COACHMARK);
    let prop = null;
    if (null != marketingComponentByType) {
      prop = null;
      if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
        prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
      }
    }
    return prop;
  });
  const GiftPromotionReminderExperiment = tmp(9550).GiftPromotionReminderExperiment;
  const tmpResult6 = isEligibleToShowGiftingBadgeCoachmark(589);
  isEligibleToShowGiftingBadgeCoachmark = isEligibleToShowGiftingBadgeCoachmark(12773).useIsEligibleToShowGiftingBadgeCoachmark({ platform: "native", location: tmp5 });
  const items6 = [isEligibleToShowGiftingBadgeCoachmark];
  const effect = React.useEffect(() => {
    if (isEligibleToShowGiftingBadgeCoachmark) {
      const badge = isEligibleToShowGiftingBadgeCoachmark(outer1_2[20]).fetchBadge(isEligibleToShowGiftingBadgeCoachmark(outer1_2[21]).BadgeId.GIFTING);
      const obj = isEligibleToShowGiftingBadgeCoachmark(outer1_2[20]);
    }
  }, items6);
  const tmpResult7 = isEligibleToShowGiftingBadgeCoachmark(12773);
  const items7 = [map];
  let isDismissed = null != stateFromStores2;
  const stateFromStores5 = isEligibleToShowGiftingBadgeCoachmark(589).useStateFromStores(items7, () => null != badgeById.getBadgeById(isEligibleToShowGiftingBadgeCoachmark(8726).BadgeId.GIFTING));
  if (isDismissed) {
    isDismissed = tmp(4117).UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(1358).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, stateFromStores2).isDismissed;
    const tmpResult9 = tmp(4117);
  }
  let isDismissed2 = null != stateFromStores2;
  if (isDismissed2) {
    isDismissed2 = tmp(4117).UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(1358).DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores2).isDismissed;
    const tmpResult10 = tmp(4117);
  }
  let tmp22 = null;
  const tmpResult8 = isEligibleToShowGiftingBadgeCoachmark(589);
  if (!isDismissed) {
    tmp22 = stateFromStores3;
  }
  let tmp23 = null;
  if (!isDismissed2) {
    tmp23 = stateFromStores4;
  }
  const tmp4Result = tmp4(15942);
  ({ isGiftCoachmarkAssetReady, isGiftReminderAssetReady } = tmp4(15942)(tmp22, tmp23));
  const tmp4ResultResult = tmp4(15942)(tmp22, tmp23);
  const tmpResult11 = isEligibleToShowGiftingBadgeCoachmark(15936);
  const shouldShowRobloxConnectionCoachmark = isEligibleToShowGiftingBadgeCoachmark(15919).useShouldShowRobloxConnectionCoachmark();
  const tmpResult12 = isEligibleToShowGiftingBadgeCoachmark(15919);
  const items8 = [, ];
  ({ LEAGUE_OF_LEGENDS: arr9[0], RIOT_GAMES: arr9[1] } = PlatformTypes);
  const isEligibleForBogoPromotion = isEligibleToShowGiftingBadgeCoachmark(12667).useIsEligibleForBogoPromotion();
  const tmp27 = PlatformTypes;
  const tmpResult13 = isEligibleToShowGiftingBadgeCoachmark(12667);
  const shouldShowConnectionDeprecationBottomSheet = isEligibleToShowGiftingBadgeCoachmark(15930).useShouldShowConnectionDeprecationBottomSheet({ deprecatedPlatformTypes: items8 });
  const tmpResult14 = isEligibleToShowGiftingBadgeCoachmark(15930);
  const items9 = [PlatformTypes.BATTLENET];
  const shouldShowConnectionDeprecationBottomSheet1 = isEligibleToShowGiftingBadgeCoachmark(15930).useShouldShowConnectionDeprecationBottomSheet({ deprecatedPlatformTypes: items9 });
  isEligibleToShowGiftingBadgeCoachmark(9177);
  obj = {};
  if (stateFromStores) {
    obj1 = { isEligible: null, newSnowflakeId: null, actionSheetProperties: null };
    obj1[0] = tmp8;
    let priceChangeId;
    if (tmp9 != null) {
      priceChangeId = tmp9.priceChangeId;
    }
    obj1[1] = priceChangeId;
    obj1[2] = {};
    obj[tmp(1358).DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET] = obj1;
    let tmp35 = null != premiumDiscountOffer;
    if (tmp35) {
      tmp35 = null == premiumDiscountOffer.expiresAt;
    }
    const obj2 = { isEligible: null, newSnowflakeId: null, actionSheetProperties: null };
    obj2[0] = tmp35;
    let id;
    if (premiumDiscountOffer != null) {
      id = premiumDiscountOffer.id;
    }
    obj2[1] = id;
    if (null != premiumDiscountOffer) {
      obj3 = { userDiscountOffer: null };
      obj3[0] = premiumDiscountOffer;
      let obj4 = obj3;
    } else {
      obj4 = {};
    }
    obj2[2] = obj4;
    obj[tmp(1358).DismissibleContent.DISCOUNT_OFFER_ACTION_SHEET] = obj2;
    let hasItem = null != premiumTrialOffer;
    if (hasItem) {
      hasItem = null == premiumTrialOffer.expires_at;
    }
    if (hasItem) {
      hasItem = !PremiumTrialOfferActionSheetKillSwitchExperiment.useConfig({ location: tmp5 }).enabled;
    }
    if (hasItem) {
      hasItem = set.has(premiumTrialOffer.trial_id);
    }
    const obj5 = { isEligible: null, newSnowflakeId: null, actionSheetProperties: null };
    obj5[0] = hasItem;
    let id1;
    if (premiumTrialOffer != null) {
      id1 = premiumTrialOffer.id;
    }
    obj5[1] = id1;
    if (null != premiumTrialOffer) {
      const obj6 = { userTrialOffer: null };
      obj6[0] = premiumTrialOffer;
      let obj7 = obj6;
    } else {
      obj7 = {};
    }
    obj5[2] = obj7;
    obj[tmp(1358).DismissibleContent.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET] = obj5;
    let dismissibleContent;
    if (mobileBottomSheet != null) {
      dismissibleContent = mobileBottomSheet.dismissibleContent;
    }
    const obj8 = { isEligible: null, newSnowflakeId: null, actionSheetProperties: null };
    obj8[0] = dismissibleContent === tmp(1358).DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
    let promotionId;
    if (promotionMarketingComponent != null) {
      promotionId = promotionMarketingComponent.promotionId;
    }
    obj8[1] = promotionId;
    const obj9 = { bottomSheetData: null, componentId: null, promotionId: null };
    obj9[0] = mobileBottomSheet;
    let id2;
    if (promotionMarketingComponent != null) {
      id2 = promotionMarketingComponent.id;
    }
    obj9[1] = id2;
    let promotionId1;
    if (promotionMarketingComponent != null) {
      promotionId1 = promotionMarketingComponent.promotionId;
    }
    obj9[2] = promotionId1;
    obj8[2] = obj9;
    obj[tmp(1358).DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL] = obj8;
    let dismissibleContent1;
    if (mobileBottomSheet != null) {
      dismissibleContent1 = mobileBottomSheet.dismissibleContent;
    }
    const obj10 = { isEligible: null, newSnowflakeId: null, actionSheetProperties: null };
    obj10[0] = dismissibleContent1 === tmp(1358).DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL;
    let promotionId2;
    if (promotionMarketingComponent != null) {
      promotionId2 = promotionMarketingComponent.promotionId;
    }
    obj10[1] = promotionId2;
    const obj11 = { bottomSheetData: null, componentId: null };
    obj11[0] = mobileBottomSheet;
    let id3;
    if (promotionMarketingComponent != null) {
      id3 = promotionMarketingComponent.id;
    }
    obj11[1] = id3;
    obj10[2] = obj11;
    obj[tmp(1358).DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL] = obj10;
    let tmp47 = tmp32;
    if (tmp32) {
      tmp47 = isGiftCoachmarkAssetReady;
    }
    const obj12 = { isEligible: null, newSnowflakeId: null, actionSheetProperties: null };
    obj12[0] = tmp47;
    obj12[1] = stateFromStores2;
    const obj13 = { coachmarkComponent: null };
    obj13[0] = stateFromStores3;
    obj12[2] = obj13;
    obj[tmp(1358).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET] = obj12;
    let tmp48 = !tmp32;
    if (tmp32) {
      tmp48 = null == stateFromStores4;
    }
    let enabled = !tmp48;
    if (!tmp48) {
      enabled = null != stateFromStores2;
    }
    if (enabled) {
      enabled = isDismissed;
    }
    if (enabled) {
      enabled = GiftPromotionReminderExperiment.useConfig({ location: tmp5 }).enabled;
    }
    if (enabled) {
      enabled = null != stateFromStores4;
    }
    if (enabled) {
      enabled = isGiftReminderAssetReady;
    }
    const obj14 = { isEligible: null, newSnowflakeId: null, actionSheetProperties: null };
    obj14[0] = enabled;
    obj14[1] = stateFromStores2;
    const obj15 = { coachmarkComponent: null };
    obj15[0] = stateFromStores4;
    obj14[2] = obj15;
    obj[tmp(1358).DismissibleContent.GIFTING_PROMOTION_REMINDER] = obj14;
    if (isEligibleToShowGiftingBadgeCoachmark) {
      isEligibleToShowGiftingBadgeCoachmark = stateFromStores5;
    }
    const obj16 = { isEligible: null, actionSheetProperties: null };
    obj16[0] = isEligibleToShowGiftingBadgeCoachmark;
    obj16[1] = {};
    obj[tmp(1358).DismissibleContent.NEW_GIFTING_BADGES_COACHMARK] = obj16;
    const obj17 = { isEligible: true, actionSheetProperties: null };
    obj17[1] = {};
    obj[tmp(1358).DismissibleContent.CUSTOM_APP_ICONS_COACHMARK] = obj17;
    const obj18 = { isEligible: null, actionSheetProperties: null };
    obj18[0] = shouldShowRobloxConnectionCoachmark;
    obj18[1] = {};
    obj[tmp(1358).DismissibleContent.ROBLOX_CONNECTION_COACHMARK] = obj18;
    const obj19 = { isEligible: null, actionSheetProperties: null };
    obj19[0] = isEligibleForBogoPromotion;
    obj19[1] = {};
    obj[tmp(1358).DismissibleContent.MOBILE_BOGO_PROMOTION_ACTION_SHEET] = obj19;
    const obj20 = { isEligible: null, actionSheetProperties: null };
    obj20[0] = tmp31;
    obj20[1] = {};
    obj[tmp(1358).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_COACHMARK] = obj20;
    const obj21 = { isEligible: null, actionSheetProperties: null };
    obj21[0] = shouldShowConnectionDeprecationBottomSheet;
    const obj22 = { platformTypes: null };
    obj22[0] = items8;
    obj21[1] = obj22;
    obj[tmp(1358).DismissibleContent.RIOT_CONNECTION_DEPRECATION_DISABLE] = obj21;
    const obj23 = { isEligible: null, actionSheetProperties: null };
    obj23[0] = shouldShowConnectionDeprecationBottomSheet1;
    const obj24 = { platformTypes: null };
    const items10 = [tmp27.BATTLENET];
    obj24[0] = items10;
    obj23[1] = obj24;
    obj[tmp(1358).DismissibleContent.BATTLENET_CONNECTION_DEPRECATION_DISABLE] = obj23;
    const obj25 = { isEligible: null, actionSheetProperties: null };
    obj25[0] = tmpResult11.useProfileFramesMarketing(tmp5).isAnnouncementEligible;
    obj25[1] = {};
    obj[tmp(1358).DismissibleContent.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT] = obj25;
    let tmp33 = obj;
  } else {
    tmp33 = obj;
  }
  return tmp33;
};