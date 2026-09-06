// === Module 16948: useMainViewTooltipActionSheetEligibilityMap ===

// Module 16948 (useMainViewTooltipActionSheetEligibilityMap)
import BadgeId from "BadgeId" /* 8184 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8197 */;
import MainViewTooltipActionSheetsDisabledExperimentDefault from "MainViewTooltipActionSheetsDisabledExperiment" /* 16949 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8192 */;
import GooglePlayPriceChangeStore from "GooglePlayPriceChangeStore" /* 16932 */;
import PromotionsStore from "PromotionsStore" /* 10665 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1221 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 1951 */;

const useGiftingPromotionAssetsReadyDefault = tmp4(16951);
require = fn;
const PlatformTypes = fn(1074).PlatformTypes;
const PremiumConstants = fn(1373);
({ PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID } = PremiumConstants);
const UserSettingsTypes = fn(1084).UserSettingsTypes;
const MainViewTooltipActionSheets = "MainViewTooltipActionSheets";
let items = [PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID];
const set = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/upsell_tooltip/native/useMainViewTooltipActionSheetEligibilityMap.tsx");

export const useMainViewTooltipActionSheetMap = function useMainViewTooltipActionSheetMap() {
  let obj = isEligibleToShowGiftingBadgeCoachmark(504);
  let items = [UserSettingsProtoStore];
  let stateFromStores = obj.useStateFromStores(items, () => UserSettingsProtoStore.hasLoaded(constants.PRELOADED_USER_SETTINGS));
  let obj1 = MainViewTooltipActionSheetsDisabledExperimentDefault;
  obj = { location: MainViewTooltipActionSheets };
  let obj3 = isEligibleToShowGiftingBadgeCoachmark(504);
  const items1 = [UserRequiredActionStore];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => UserRequiredActionStore.hasAction());
  if (stateFromStores) {
    stateFromStores = !obj1.getConfig(obj).disabled;
  }
  if (stateFromStores) {
    stateFromStores = !stateFromStores1;
  }
  if (stateFromStores) {
    let tmpResult = tmp(1608);
    stateFromStores = !tmpResult.isMetaQuest();
  }
  tmpResult = tmp(504);
  const items2 = [GooglePlayPriceChangeStore];
  [tmp8, tmp9] = _slicedToArray(tmpResult.useStateFromStoresArray(items2, () => {
    const items = [, ];
    ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = GooglePlayPriceChangeStore);
    return items;
  }), 2);
  const tmp7 = _slicedToArray(tmpResult.useStateFromStoresArray(items2, () => {
    const items = [, ];
    ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = GooglePlayPriceChangeStore);
    return items;
  }), 2);
  const premiumDiscountOffer = isEligibleToShowGiftingBadgeCoachmark(8060).usePremiumDiscountOffer();
  const tmpResult1 = isEligibleToShowGiftingBadgeCoachmark(8060);
  const premiumTrialOffer = isEligibleToShowGiftingBadgeCoachmark(7447).usePremiumTrialOffer();
  const PremiumTrialOfferActionSheetKillSwitchExperiment = tmp(16950).PremiumTrialOfferActionSheetKillSwitchExperiment;
  const tmpResult2 = isEligibleToShowGiftingBadgeCoachmark(7447);
  const promotionMarketingComponent = isEligibleToShowGiftingBadgeCoachmark(13352).usePromotionMarketingComponent(tmp(10742).MarketingComponentType.MOBILE_BOTTOM_SHEET);
  let oneofKind;
  if (promotionMarketingComponent != null) {
    oneofKind = promotionMarketingComponent.properties.properties.oneofKind;
  }
  let mobileBottomSheet = null;
  if ("mobileBottomSheet" === oneofKind) {
    mobileBottomSheet = promotionMarketingComponent.properties.properties.mobileBottomSheet;
  }
  const tmpResult3 = isEligibleToShowGiftingBadgeCoachmark(13352);
  const items3 = [PromotionsStore];
  const stateFromStores2 = isEligibleToShowGiftingBadgeCoachmark(504).useStateFromStores(items3, () => {
    const giftPromotion = PromotionsStore.getGiftPromotion();
    let id;
    if (giftPromotion != null) {
      id = giftPromotion.id;
    }
    return id;
  });
  const tmpResult4 = isEligibleToShowGiftingBadgeCoachmark(504);
  const items4 = [PromotionsStore];
  const stateFromStores3 = isEligibleToShowGiftingBadgeCoachmark(504).useStateFromStores(items4, () => {
    const marketingComponentByType = PromotionsStore.getMarketingComponentByType(isEligibleToShowGiftingBadgeCoachmark(10742).MarketingComponentType.GIFT_ICON_COACHMARK);
    let giftIconCoachmark = null;
    if (null != marketingComponentByType) {
      giftIconCoachmark = null;
      if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
        giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
      }
    }
    return giftIconCoachmark;
  });
  const tmpResult5 = isEligibleToShowGiftingBadgeCoachmark(504);
  const items5 = [PromotionsStore];
  const stateFromStores4 = isEligibleToShowGiftingBadgeCoachmark(504).useStateFromStores(items5, () => {
    const marketingComponentByType = PromotionsStore.getMarketingComponentByType(isEligibleToShowGiftingBadgeCoachmark(10742).MarketingComponentType.GIFT_REMINDER_COACHMARK);
    let prop = null;
    if (null != marketingComponentByType) {
      prop = null;
      if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
        prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
      }
    }
    return prop;
  });
  const GiftPromotionReminderExperiment = tmp(10741).GiftPromotionReminderExperiment;
  const tmpResult6 = isEligibleToShowGiftingBadgeCoachmark(504);
  isEligibleToShowGiftingBadgeCoachmark = isEligibleToShowGiftingBadgeCoachmark(13571).useIsEligibleToShowGiftingBadgeCoachmark({ platform: "native", location: tmp5 });
  const items6 = [isEligibleToShowGiftingBadgeCoachmark];
  const effect = noop.useEffect(() => {
    if (isEligibleToShowGiftingBadgeCoachmark) {
      const badge = BadgeDirectoryActionCreators.fetchBadge(BadgeId.BadgeId.GIFTING);
    }
  }, items6);
  const tmpResult7 = isEligibleToShowGiftingBadgeCoachmark(13571);
  const items7 = [BadgeDirectoryStore];
  let isDismissed = null != stateFromStores2;
  const stateFromStores5 = isEligibleToShowGiftingBadgeCoachmark(504).useStateFromStores(items7, () => null != badgeById.getBadgeById(isEligibleToShowGiftingBadgeCoachmark(8184).BadgeId.GIFTING));
  if (isDismissed) {
    isDismissed = tmp(4380).UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(1943).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, stateFromStores2).isDismissed;
    const tmpResult9 = tmp(4380);
  }
  let isDismissed2 = null != stateFromStores2;
  if (isDismissed2) {
    isDismissed2 = tmp(4380).UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(1943).DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores2).isDismissed;
    const tmpResult10 = tmp(4380);
  }
  let tmp22 = null;
  const tmpResult8 = isEligibleToShowGiftingBadgeCoachmark(504);
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
  const tmpResult11 = isEligibleToShowGiftingBadgeCoachmark(16946);
  const shouldShowRobloxConnectionCoachmark = isEligibleToShowGiftingBadgeCoachmark(16929).useShouldShowRobloxConnectionCoachmark();
  const tmpResult12 = isEligibleToShowGiftingBadgeCoachmark(16929);
  const items8 = [, ];
  ({ LEAGUE_OF_LEGENDS: arr9[0], RIOT_GAMES: arr9[1] } = PlatformTypes);
  const isEligibleForBogoPromotion = isEligibleToShowGiftingBadgeCoachmark(13467).useIsEligibleForBogoPromotion();
  const tmp27 = PlatformTypes;
  const tmpResult13 = isEligibleToShowGiftingBadgeCoachmark(13467);
  const shouldShowConnectionDeprecationBottomSheet = isEligibleToShowGiftingBadgeCoachmark(16940).useShouldShowConnectionDeprecationBottomSheet({ deprecatedPlatformTypes: items8 });
  const tmpResult14 = isEligibleToShowGiftingBadgeCoachmark(16940);
  obj = { deprecatedPlatformTypes: null };
  const items9 = [PlatformTypes.BATTLENET];
  obj.deprecatedPlatformTypes = items9;
  const shouldShowConnectionDeprecationBottomSheet1 = isEligibleToShowGiftingBadgeCoachmark(16940).useShouldShowConnectionDeprecationBottomSheet(obj);
  const tmpResult15 = isEligibleToShowGiftingBadgeCoachmark(16940);
  const isDisplayNameStylesFlywheelSettersEnabled = isEligibleToShowGiftingBadgeCoachmark(9177).useIsDisplayNameStylesFlywheelSettersEnabled(tmp5);
  isEligibleToShowGiftingBadgeCoachmark(11967);
  obj1 = {};
  if (stateFromStores) {
    const obj2 = { isEligible: tmp8, newSnowflakeId: null, actionSheetProperties: null };
    let priceChangeId;
    if (tmp9 != null) {
      priceChangeId = tmp9.priceChangeId;
    }
    obj2.newSnowflakeId = priceChangeId;
    obj2.actionSheetProperties = {};
    obj1[tmp(1943).DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET] = obj2;
    let tmp36 = null != premiumDiscountOffer;
    if (tmp36) {
      tmp36 = null == premiumDiscountOffer.expiresAt;
    }
    obj3 = { isEligible: tmp36, newSnowflakeId: null, actionSheetProperties: null };
    let id;
    if (premiumDiscountOffer != null) {
      id = premiumDiscountOffer.id;
    }
    obj3.newSnowflakeId = id;
    if (null != premiumDiscountOffer) {
      const obj4 = { userDiscountOffer: premiumDiscountOffer };
      let obj5 = obj4;
    } else {
      obj5 = {};
    }
    obj3.actionSheetProperties = obj5;
    obj1[tmp(1943).DismissibleContent.DISCOUNT_OFFER_ACTION_SHEET] = obj3;
    let hasItem = null != premiumTrialOffer;
    if (hasItem) {
      hasItem = null == premiumTrialOffer.expiresAt;
    }
    if (hasItem) {
      hasItem = !PremiumTrialOfferActionSheetKillSwitchExperiment.useConfig({ location: tmp5 }).enabled;
    }
    if (hasItem) {
      hasItem = set.has(premiumTrialOffer.trialId);
    }
    const obj6 = { isEligible: hasItem, newSnowflakeId: null, actionSheetProperties: null };
    let id1;
    if (premiumTrialOffer != null) {
      id1 = premiumTrialOffer.id;
    }
    obj6.newSnowflakeId = id1;
    if (null != premiumTrialOffer) {
      const obj7 = { userTrialOffer: premiumTrialOffer };
      let obj8 = obj7;
    } else {
      obj8 = {};
    }
    obj6.actionSheetProperties = obj8;
    obj1[tmp(1943).DismissibleContent.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET] = obj6;
    let dismissibleContent;
    if (mobileBottomSheet != null) {
      dismissibleContent = mobileBottomSheet.dismissibleContent;
    }
    const obj9 = { isEligible: dismissibleContent === tmp(1943).DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, newSnowflakeId: null, actionSheetProperties: null };
    let promotionId;
    if (promotionMarketingComponent != null) {
      promotionId = promotionMarketingComponent.promotionId;
    }
    obj9.newSnowflakeId = promotionId;
    const obj10 = { bottomSheetData: mobileBottomSheet, componentId: null, promotionId: null };
    let id2;
    if (promotionMarketingComponent != null) {
      id2 = promotionMarketingComponent.id;
    }
    obj10.componentId = id2;
    let promotionId1;
    if (promotionMarketingComponent != null) {
      promotionId1 = promotionMarketingComponent.promotionId;
    }
    obj10.promotionId = promotionId1;
    obj9.actionSheetProperties = obj10;
    obj1[tmp(1943).DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL] = obj9;
    let dismissibleContent1;
    if (mobileBottomSheet != null) {
      dismissibleContent1 = mobileBottomSheet.dismissibleContent;
    }
    const obj11 = { isEligible: dismissibleContent1 === tmp(1943).DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL, newSnowflakeId: null, actionSheetProperties: null };
    let promotionId2;
    if (promotionMarketingComponent != null) {
      promotionId2 = promotionMarketingComponent.promotionId;
    }
    obj11.newSnowflakeId = promotionId2;
    const obj12 = { bottomSheetData: mobileBottomSheet, componentId: null, promotionId: null };
    let id3;
    if (promotionMarketingComponent != null) {
      id3 = promotionMarketingComponent.id;
    }
    obj12.componentId = id3;
    let promotionId3;
    if (promotionMarketingComponent != null) {
      promotionId3 = promotionMarketingComponent.promotionId;
    }
    obj12.promotionId = promotionId3;
    obj11.actionSheetProperties = obj12;
    obj1[tmp(1943).DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL] = obj11;
    let tmp49 = tmp33;
    if (tmp33) {
      tmp49 = isGiftCoachmarkAssetReady;
    }
    const obj13 = { isEligible: tmp49, newSnowflakeId: stateFromStores2, actionSheetProperties: null };
    const obj14 = { coachmarkComponent: stateFromStores3 };
    obj13.actionSheetProperties = obj14;
    obj1[tmp(1943).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET] = obj13;
    let tmp50 = !tmp33;
    if (tmp33) {
      tmp50 = null == stateFromStores4;
    }
    let enabled = !tmp50;
    if (!tmp50) {
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
    const obj15 = { isEligible: enabled, newSnowflakeId: stateFromStores2, actionSheetProperties: null };
    const obj16 = { coachmarkComponent: stateFromStores4 };
    obj15.actionSheetProperties = obj16;
    obj1[tmp(1943).DismissibleContent.GIFTING_PROMOTION_REMINDER] = obj15;
    if (isEligibleToShowGiftingBadgeCoachmark) {
      isEligibleToShowGiftingBadgeCoachmark = stateFromStores5;
    }
    const obj17 = { isEligible: isEligibleToShowGiftingBadgeCoachmark, actionSheetProperties: {} };
    obj1[tmp(1943).DismissibleContent.NEW_GIFTING_BADGES_COACHMARK] = obj17;
    const obj18 = { isEligible: true, actionSheetProperties: {} };
    obj1[tmp(1943).DismissibleContent.CUSTOM_APP_ICONS_COACHMARK] = obj18;
    const obj19 = { isEligible: shouldShowRobloxConnectionCoachmark, actionSheetProperties: {} };
    obj1[tmp(1943).DismissibleContent.ROBLOX_CONNECTION_COACHMARK] = obj19;
    const obj20 = { isEligible: isEligibleForBogoPromotion, actionSheetProperties: {} };
    obj1[tmp(1943).DismissibleContent.MOBILE_BOGO_PROMOTION_ACTION_SHEET] = obj20;
    const obj21 = { isEligible: isDisplayNameStylesFlywheelSettersEnabled, actionSheetProperties: {} };
    obj1[tmp(1943).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_COACHMARK] = obj21;
    const obj22 = { isEligible: shouldShowConnectionDeprecationBottomSheet, actionSheetProperties: null };
    const obj23 = { platformTypes: items8 };
    obj22.actionSheetProperties = obj23;
    obj1[tmp(1943).DismissibleContent.RIOT_CONNECTION_DEPRECATION_DISABLE] = obj22;
    const obj24 = { isEligible: shouldShowConnectionDeprecationBottomSheet1, actionSheetProperties: null };
    const obj25 = { platformTypes: null };
    const items10 = [tmp27.BATTLENET];
    obj25.platformTypes = items10;
    obj24.actionSheetProperties = obj25;
    obj1[tmp(1943).DismissibleContent.BATTLENET_CONNECTION_DEPRECATION_DISABLE] = obj24;
    const obj26 = { isEligible: tmpResult11.useProfileFramesMarketing(tmp5).isAnnouncementEligible, actionSheetProperties: {} };
    obj1[tmp(1943).DismissibleContent.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT] = obj26;
    const obj27 = { isEligible: tmp32, actionSheetProperties: {} };
    obj1[tmp(1943).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_COACHMARK] = obj27;
    let tmp34 = obj1;
  } else {
    tmp34 = obj1;
  }
  return tmp34;
};