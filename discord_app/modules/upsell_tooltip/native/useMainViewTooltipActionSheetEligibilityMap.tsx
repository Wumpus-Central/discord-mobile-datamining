// === Module 16744: useMainViewTooltipActionSheetEligibilityMap ===

// Module 16744 (useMainViewTooltipActionSheetEligibilityMap)
import initialize from "initialize" /* 504 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1609 */;
import dismissible_content from "dismissible_content" /* 2028 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4651 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 6862 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 7498 */;
import DisplayNameStylesFlywheelExperiment from "DisplayNameStylesFlywheelExperiment" /* 9178 */;
import GiftPromotionReminderExperiment2 from "GiftPromotionReminderExperiment" /* 10190 */;
import MarketingComponentType from "MarketingComponentType" /* 10191 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10196 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 11435 */;
import usePromotionMarketingComponent from "usePromotionMarketingComponent" /* 12943 */;
import RobloxConnectionCoachmark from "RobloxConnectionCoachmark" /* 16719 */;
import ConnectionDeprecationBottomSheet from "ConnectionDeprecationBottomSheet" /* 16731 */;
import MainViewTooltipActionSheetsDisabledExperimentDefault from "MainViewTooltipActionSheetsDisabledExperiment" /* 16745 */;
import PremiumTrialOfferActionSheetKillSwitchExperiment2 from "PremiumTrialOfferActionSheetKillSwitchExperiment" /* 16746 */;
import useGiftingPromotionAssetsReadyDefault from "useGiftingPromotionAssetsReady" /* 16747 */;
import useNitroFileUploadMarketingEligible from "useNitroFileUploadMarketingEligible" /* 16750 */;
import _slicedToArray from "module_32" /* 32 */;
import GooglePlayPriceChangeStore from "GooglePlayPriceChangeStore" /* 16721 */;
import PromotionsStore from "PromotionsStore" /* 10117 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2036 */;

require = fn;
const PlatformTypes = fn(1074).PlatformTypes;
const PremiumConstants = fn(1374);
({ PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID } = PremiumConstants);
const UserSettingsTypes = fn(1084).UserSettingsTypes;
const MainViewTooltipActionSheets = "MainViewTooltipActionSheets";
let items = [PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID];
const set = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/upsell_tooltip/native/useMainViewTooltipActionSheetEligibilityMap.tsx");

export const useMainViewTooltipActionSheetMap = function useMainViewTooltipActionSheetMap() {
  let items = [UserSettingsProtoStore];
  let stateFromStores = initialize.useStateFromStores(items, () => UserSettingsProtoStore.hasLoaded(constants.PRELOADED_USER_SETTINGS));
  const obj2 = MainViewTooltipActionSheetsDisabledExperimentDefault;
  const obj3 = { location: MainViewTooltipActionSheets };
  const items1 = [UserRequiredActionStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => UserRequiredActionStore.hasAction());
  if (stateFromStores) {
    stateFromStores = !obj2.getConfig(obj3).disabled;
  }
  if (stateFromStores) {
    stateFromStores = !stateFromStores1;
  }
  if (stateFromStores) {
    stateFromStores = !MetaQuestUtils.isMetaQuest();
    const tmpResult = MetaQuestUtils;
  }
  const items2 = [GooglePlayPriceChangeStore];
  const tmpResult18 = initialize;
  [tmp8, tmp9] = initialize.useStateFromStoresArray(items2, () => {
    const items = [, ];
    ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = GooglePlayPriceChangeStore);
    return items;
  });
  const tmp7 = _slicedToArray(initialize.useStateFromStoresArray(items2, () => {
    const items = [, ];
    ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = GooglePlayPriceChangeStore);
    return items;
  }), 2);
  const premiumDiscountOffer = usePremiumDiscountOffer.usePremiumDiscountOffer();
  const tmpResult19 = usePremiumDiscountOffer;
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  const PremiumTrialOfferActionSheetKillSwitchExperiment = PremiumTrialOfferActionSheetKillSwitchExperiment2.PremiumTrialOfferActionSheetKillSwitchExperiment;
  const tmpResult20 = usePremiumTrialOffer;
  const promotionMarketingComponent = usePromotionMarketingComponent.usePromotionMarketingComponent(MarketingComponentType.MarketingComponentType.MOBILE_BOTTOM_SHEET);
  let oneofKind;
  if (promotionMarketingComponent != null) {
    oneofKind = promotionMarketingComponent.properties.properties.oneofKind;
  }
  let mobileBottomSheet = null;
  if ("mobileBottomSheet" === oneofKind) {
    mobileBottomSheet = promotionMarketingComponent.properties.properties.mobileBottomSheet;
  }
  const tmpResult21 = usePromotionMarketingComponent;
  const items3 = [PromotionsStore];
  const stateFromStores2 = initialize.useStateFromStores(items3, () => {
    const giftPromotion = PromotionsStore.getGiftPromotion();
    let id;
    if (giftPromotion != null) {
      id = giftPromotion.id;
    }
    return id;
  });
  const tmpResult22 = initialize;
  const items4 = [PromotionsStore];
  const stateFromStores3 = initialize.useStateFromStores(items4, () => {
    const marketingComponentByType = PromotionsStore.getMarketingComponentByType(MarketingComponentType.MarketingComponentType.GIFT_ICON_COACHMARK);
    let giftIconCoachmark = null;
    if (null != marketingComponentByType) {
      giftIconCoachmark = null;
      if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
        giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
      }
    }
    return giftIconCoachmark;
  });
  const tmpResult23 = initialize;
  const items5 = [PromotionsStore];
  const stateFromStores4 = initialize.useStateFromStores(items5, () => {
    const marketingComponentByType = PromotionsStore.getMarketingComponentByType(MarketingComponentType.MarketingComponentType.GIFT_REMINDER_COACHMARK);
    let prop = null;
    if (null != marketingComponentByType) {
      prop = null;
      if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
        prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
      }
    }
    return prop;
  });
  const GiftPromotionReminderExperiment = GiftPromotionReminderExperiment2.GiftPromotionReminderExperiment;
  const tmpResult24 = initialize;
  const giftingBadgeCoachmarkVariant = GiftingBadgesUtils.useGiftingBadgeCoachmarkVariant({ platform: "native", location: MainViewTooltipActionSheets });
  let isDismissed = null != stateFromStores2;
  if (isDismissed) {
    isDismissed = DismissibleContentUnsafeUtils.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(dismissible_content.DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, stateFromStores2).isDismissed;
    const tmpResult26 = DismissibleContentUnsafeUtils;
  }
  let isDismissed2 = null != stateFromStores2;
  if (isDismissed2) {
    isDismissed2 = DismissibleContentUnsafeUtils.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(dismissible_content.DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores2).isDismissed;
    const tmpResult27 = DismissibleContentUnsafeUtils;
  }
  let tmp20 = null;
  const tmpResult25 = GiftingBadgesUtils;
  if (!isDismissed) {
    tmp20 = stateFromStores3;
  }
  let tmp21 = null;
  if (!isDismissed2) {
    tmp21 = stateFromStores4;
  }
  const tmp4Result = useGiftingPromotionAssetsReadyDefault;
  ({ isGiftCoachmarkAssetReady, isGiftReminderAssetReady } = useGiftingPromotionAssetsReadyDefault(tmp20, tmp21));
  const tmp4ResultResult = useGiftingPromotionAssetsReadyDefault(tmp20, tmp21);
  const nitroFileUploadAnnouncementEligible = useNitroFileUploadMarketingEligible.useNitroFileUploadAnnouncementEligible(MainViewTooltipActionSheets);
  const tmpResult28 = useNitroFileUploadMarketingEligible;
  const nitroFileUploadUpsellEligible = useNitroFileUploadMarketingEligible.useNitroFileUploadUpsellEligible(MainViewTooltipActionSheets);
  const tmpResult29 = useNitroFileUploadMarketingEligible;
  const items6 = [, ];
  ({ LEAGUE_OF_LEGENDS: arr7[0], RIOT_GAMES: arr7[1] } = PlatformTypes);
  const shouldShowRobloxConnectionCoachmark = RobloxConnectionCoachmark.useShouldShowRobloxConnectionCoachmark();
  const tmpResult30 = RobloxConnectionCoachmark;
  const shouldShowConnectionDeprecationBottomSheet = ConnectionDeprecationBottomSheet.useShouldShowConnectionDeprecationBottomSheet({ deprecatedPlatformTypes: items6 });
  const tmpResult31 = ConnectionDeprecationBottomSheet;
  const obj5 = { deprecatedPlatformTypes: null };
  const items7 = [PlatformTypes.BATTLENET];
  obj5.deprecatedPlatformTypes = items7;
  const shouldShowConnectionDeprecationBottomSheet1 = ConnectionDeprecationBottomSheet.useShouldShowConnectionDeprecationBottomSheet(obj5);
  const tmpResult32 = ConnectionDeprecationBottomSheet;
  const isDisplayNameStylesFlywheelSettersEnabled = DisplayNameStylesFlywheelExperiment.useIsDisplayNameStylesFlywheelSettersEnabled(MainViewTooltipActionSheets);
  CustomTypingIndicatorExperiment;
  const obj6 = {};
  if (stateFromStores) {
    const obj7 = { isEligible: tmp8, newSnowflakeId: null, actionSheetProperties: null };
    let priceChangeId;
    if (tmp9 != null) {
      priceChangeId = tmp9.priceChangeId;
    }
    obj7.newSnowflakeId = priceChangeId;
    obj7.actionSheetProperties = {};
    obj6[dismissible_content.DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET] = obj7;
    let tmp35 = null != premiumDiscountOffer;
    if (tmp35) {
      tmp35 = null == premiumDiscountOffer.expiresAt;
    }
    const obj8 = { isEligible: tmp35, newSnowflakeId: null, actionSheetProperties: null };
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
    obj6[dismissible_content.DismissibleContent.DISCOUNT_OFFER_ACTION_SHEET] = obj8;
    let hasItem = null != premiumTrialOffer;
    if (hasItem) {
      hasItem = null == premiumTrialOffer.expiresAt;
    }
    if (hasItem) {
      hasItem = !PremiumTrialOfferActionSheetKillSwitchExperiment.useConfig({ location: MainViewTooltipActionSheets }).enabled;
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
    obj6[dismissible_content.DismissibleContent.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET] = obj11;
    let dismissibleContent;
    if (mobileBottomSheet != null) {
      dismissibleContent = mobileBottomSheet.dismissibleContent;
    }
    const obj14 = { isEligible: dismissibleContent === dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, newSnowflakeId: null, actionSheetProperties: null };
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
    obj6[dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL] = obj14;
    let dismissibleContent1;
    if (mobileBottomSheet != null) {
      dismissibleContent1 = mobileBottomSheet.dismissibleContent;
    }
    const obj16 = { isEligible: dismissibleContent1 === dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL, newSnowflakeId: null, actionSheetProperties: null };
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
    obj6[dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL] = obj16;
    let tmp48 = tmp32;
    if (tmp32) {
      tmp48 = isGiftCoachmarkAssetReady;
    }
    const obj18 = { isEligible: tmp48, newSnowflakeId: stateFromStores2, actionSheetProperties: null };
    const obj19 = { coachmarkComponent: stateFromStores3 };
    obj18.actionSheetProperties = obj19;
    obj6[dismissible_content.DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET] = obj18;
    let tmp49 = !tmp32;
    if (tmp32) {
      tmp49 = null == stateFromStores4;
    }
    let enabled = !tmp49;
    if (!tmp49) {
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
    obj6[dismissible_content.DismissibleContent.GIFTING_PROMOTION_REMINDER] = obj20;
    const obj22 = { isEligible: null != giftingBadgeCoachmarkVariant, actionSheetProperties: null };
    const obj23 = { variant: giftingBadgeCoachmarkVariant };
    obj22.actionSheetProperties = obj23;
    obj6[dismissible_content.DismissibleContent.NEW_GIFTING_BADGES_COACHMARK] = obj22;
    const obj24 = { isEligible: true, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.CUSTOM_APP_ICONS_COACHMARK] = obj24;
    const obj25 = { isEligible: shouldShowRobloxConnectionCoachmark, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.ROBLOX_CONNECTION_COACHMARK] = obj25;
    const obj26 = { isEligible: isDisplayNameStylesFlywheelSettersEnabled, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_COACHMARK] = obj26;
    const obj27 = { isEligible: shouldShowConnectionDeprecationBottomSheet, actionSheetProperties: null };
    const obj28 = { platformTypes: items6 };
    obj27.actionSheetProperties = obj28;
    obj6[dismissible_content.DismissibleContent.RIOT_CONNECTION_DEPRECATION_DISABLE] = obj27;
    const obj29 = { isEligible: shouldShowConnectionDeprecationBottomSheet1, actionSheetProperties: null };
    const obj30 = { platformTypes: null };
    const items8 = [PlatformTypes.BATTLENET];
    obj30.platformTypes = items8;
    obj29.actionSheetProperties = obj30;
    obj6[dismissible_content.DismissibleContent.BATTLENET_CONNECTION_DEPRECATION_DISABLE] = obj29;
    const obj31 = { isEligible: true, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT] = obj31;
    const obj32 = { isEligible: nitroFileUploadAnnouncementEligible, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_ANNOUNCEMENT] = obj32;
    const obj33 = { isEligible: nitroFileUploadUpsellEligible, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_UPSELL] = obj33;
    const obj34 = { isEligible: tmp31, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_COACHMARK] = obj34;
    let tmp33 = obj6;
  } else {
    tmp33 = obj6;
  }
  return tmp33;
};