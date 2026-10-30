// === Module 18998: useMainViewTooltipActionSheetEligibilityMap ===

// Module 18998 (useMainViewTooltipActionSheetEligibilityMap)
import initialize from "initialize" /* 504 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1623 */;
import dismissible_content from "dismissible_content" /* 4842 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5039 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7620 */;
import useIsEligibleSenderForReferralProgram from "useIsEligibleSenderForReferralProgram" /* 8516 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 8520 */;
import GiftPromotionReminderExperiment2 from "GiftPromotionReminderExperiment" /* 10588 */;
import MarketingComponentType from "MarketingComponentType" /* 10589 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10596 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 13681 */;
import usePromotionMarketingComponent from "usePromotionMarketingComponent" /* 15264 */;
import RobloxConnectionCoachmark from "RobloxConnectionCoachmark" /* 18970 */;
import MainViewTooltipActionSheetsDisabledExperimentDefault from "MainViewTooltipActionSheetsDisabledExperiment" /* 18999 */;
import RecurringReferralReminderExperiment2 from "RecurringReferralReminderExperiment" /* 19000 */;
import PremiumTrialOfferActionSheetKillSwitchExperiment2 from "PremiumTrialOfferActionSheetKillSwitchExperiment" /* 19001 */;
import useGiftingPromotionAssetsReadyDefault from "useGiftingPromotionAssetsReady" /* 19002 */;
import useNitroFileUploadMarketingEligible from "useNitroFileUploadMarketingEligible" /* 19003 */;
import _slicedToArray from "module_32" /* 32 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1247 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7625 */;
import GooglePlayPriceChangeStore from "GooglePlayPriceChangeStore" /* 18972 */;
import PromotionsStore from "PromotionsStore" /* 9606 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1232 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 4852 */;

require = fn;
const PremiumConstants = fn(1386);
({ PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID } = PremiumConstants);
const UserSettingsTypes = fn(1082).UserSettingsTypes;
const MainViewTooltipActionSheets = "MainViewTooltipActionSheets";
let items = [PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID];
const set = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/upsell_tooltip/native/useMainViewTooltipActionSheetEligibilityMap.tsx");

export function useMainViewTooltipActionSheetMap() {
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
  const items3 = [ApexExperimentStore];
  let stateFromStores2 = initialize.useStateFromStores(items3, () => {
    const RecurringReferralReminderExperiment = RecurringReferralReminderExperiment2.RecurringReferralReminderExperiment;
    return RecurringReferralReminderExperiment.getConfig({ location: _location }, { autoTrackExposure: false }).bottomSheetEnabled;
  });
  const tmpResult20 = initialize;
  const isEligibleSenderForReferralProgram = useIsEligibleSenderForReferralProgram.useIsEligibleSenderForReferralProgram(!stateFromStores2);
  const tmpResult21 = useIsEligibleSenderForReferralProgram;
  const items4 = [ReferralTrialStore];
  const tmpResult22 = initialize;
  [tmp14, tmp15] = initialize.useStateFromStoresArray(items4, () => {
    const items = [ReferralTrialStore.getReferralsRemaining({ bypassFetch: true }), ReferralTrialStore.getRecurringReminderStateId()];
    return items;
  });
  const tmp13 = _slicedToArray(initialize.useStateFromStoresArray(items4, () => {
    const items = [ReferralTrialStore.getReferralsRemaining({ bypassFetch: true }), ReferralTrialStore.getRecurringReminderStateId()];
    return items;
  }), 2);
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  const PremiumTrialOfferActionSheetKillSwitchExperiment = PremiumTrialOfferActionSheetKillSwitchExperiment2.PremiumTrialOfferActionSheetKillSwitchExperiment;
  const tmpResult23 = usePremiumTrialOffer;
  const promotionMarketingComponent = usePromotionMarketingComponent.usePromotionMarketingComponent(MarketingComponentType.MarketingComponentType.MOBILE_BOTTOM_SHEET);
  let oneofKind;
  if (promotionMarketingComponent != null) {
    oneofKind = promotionMarketingComponent.properties.properties.oneofKind;
  }
  let mobileBottomSheet = null;
  if ("mobileBottomSheet" === oneofKind) {
    mobileBottomSheet = promotionMarketingComponent.properties.properties.mobileBottomSheet;
  }
  const tmpResult24 = usePromotionMarketingComponent;
  const items5 = [PromotionsStore];
  const stateFromStores3 = initialize.useStateFromStores(items5, () => {
    const giftPromotion = PromotionsStore.getGiftPromotion();
    let id;
    if (giftPromotion != null) {
      id = giftPromotion.id;
    }
    return id;
  });
  const tmpResult25 = initialize;
  const items6 = [PromotionsStore];
  const stateFromStores4 = initialize.useStateFromStores(items6, () => {
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
  const tmpResult26 = initialize;
  const items7 = [PromotionsStore];
  const stateFromStores5 = initialize.useStateFromStores(items7, () => {
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
  let enabled = GiftPromotionReminderExperiment.useConfig({ location: MainViewTooltipActionSheets }).enabled;
  const tmpResult27 = initialize;
  const giftingBadgeCoachmarkVariant = GiftingBadgesUtils.useGiftingBadgeCoachmarkVariant({ platform: "native", location: MainViewTooltipActionSheets });
  let isDismissed = null != stateFromStores3;
  if (isDismissed) {
    isDismissed = DismissibleContentUnsafeUtils.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(dismissible_content.DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, stateFromStores3).isDismissed;
    const tmpResult29 = DismissibleContentUnsafeUtils;
  }
  let isDismissed2 = null != stateFromStores3;
  if (isDismissed2) {
    isDismissed2 = DismissibleContentUnsafeUtils.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(dismissible_content.DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores3).isDismissed;
    const tmpResult30 = DismissibleContentUnsafeUtils;
  }
  let tmp25 = null;
  const tmpResult28 = GiftingBadgesUtils;
  if (!isDismissed) {
    tmp25 = stateFromStores4;
  }
  let tmp26 = null;
  if (!isDismissed2) {
    tmp26 = stateFromStores5;
  }
  const tmp4Result = useGiftingPromotionAssetsReadyDefault;
  ({ isGiftCoachmarkAssetReady, isGiftReminderAssetReady } = useGiftingPromotionAssetsReadyDefault(tmp25, tmp26));
  const tmp4ResultResult = useGiftingPromotionAssetsReadyDefault(tmp25, tmp26);
  const nitroFileUploadAnnouncementEligible = useNitroFileUploadMarketingEligible.useNitroFileUploadAnnouncementEligible(MainViewTooltipActionSheets);
  const tmpResult31 = useNitroFileUploadMarketingEligible;
  const nitroFileUploadUpsellEligible = useNitroFileUploadMarketingEligible.useNitroFileUploadUpsellEligible(MainViewTooltipActionSheets);
  const tmpResult32 = useNitroFileUploadMarketingEligible;
  const shouldShowRobloxConnectionCoachmark = RobloxConnectionCoachmark.useShouldShowRobloxConnectionCoachmark();
  CustomTypingIndicatorExperiment;
  const obj5 = {};
  if (stateFromStores) {
    const obj6 = { isEligible: tmp8, newSnowflakeId: null, actionSheetProperties: null };
    let priceChangeId;
    if (tmp9 != null) {
      priceChangeId = tmp9.priceChangeId;
    }
    obj6.newSnowflakeId = priceChangeId;
    obj6.actionSheetProperties = {};
    obj5[dismissible_content.DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET] = obj6;
    let tmp36 = null != premiumDiscountOffer;
    if (tmp36) {
      tmp36 = null == premiumDiscountOffer.expiresAt;
    }
    const obj7 = { isEligible: tmp36, newSnowflakeId: null, actionSheetProperties: null };
    let id;
    if (premiumDiscountOffer != null) {
      id = premiumDiscountOffer.id;
    }
    obj7.newSnowflakeId = id;
    if (null != premiumDiscountOffer) {
      const obj8 = { userDiscountOffer: premiumDiscountOffer };
      let obj9 = obj8;
    } else {
      obj9 = {};
    }
    obj7.actionSheetProperties = obj9;
    obj5[dismissible_content.DismissibleContent.DISCOUNT_OFFER_ACTION_SHEET] = obj7;
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
    const obj10 = { isEligible: hasItem, newSnowflakeId: null, actionSheetProperties: null };
    let id1;
    if (premiumTrialOffer != null) {
      id1 = premiumTrialOffer.id;
    }
    obj10.newSnowflakeId = id1;
    if (null != premiumTrialOffer) {
      const obj11 = { userTrialOffer: premiumTrialOffer };
      let obj12 = obj11;
    } else {
      obj12 = {};
    }
    obj10.actionSheetProperties = obj12;
    obj5[dismissible_content.DismissibleContent.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET] = obj10;
    let dismissibleContent;
    if (mobileBottomSheet != null) {
      dismissibleContent = mobileBottomSheet.dismissibleContent;
    }
    const obj13 = { isEligible: dismissibleContent === dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, newSnowflakeId: null, actionSheetProperties: null };
    let promotionId;
    if (promotionMarketingComponent != null) {
      promotionId = promotionMarketingComponent.promotionId;
    }
    obj13.newSnowflakeId = promotionId;
    const obj14 = { bottomSheetData: mobileBottomSheet, componentId: null, promotionId: null };
    let id2;
    if (promotionMarketingComponent != null) {
      id2 = promotionMarketingComponent.id;
    }
    obj14.componentId = id2;
    let promotionId1;
    if (promotionMarketingComponent != null) {
      promotionId1 = promotionMarketingComponent.promotionId;
    }
    obj14.promotionId = promotionId1;
    obj13.actionSheetProperties = obj14;
    obj5[dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL] = obj13;
    let dismissibleContent1;
    if (mobileBottomSheet != null) {
      dismissibleContent1 = mobileBottomSheet.dismissibleContent;
    }
    const obj15 = { isEligible: dismissibleContent1 === dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL, newSnowflakeId: null, actionSheetProperties: null };
    let promotionId2;
    if (promotionMarketingComponent != null) {
      promotionId2 = promotionMarketingComponent.promotionId;
    }
    obj15.newSnowflakeId = promotionId2;
    const obj16 = { bottomSheetData: mobileBottomSheet, componentId: null, promotionId: null };
    let id3;
    if (promotionMarketingComponent != null) {
      id3 = promotionMarketingComponent.id;
    }
    obj16.componentId = id3;
    let promotionId3;
    if (promotionMarketingComponent != null) {
      promotionId3 = promotionMarketingComponent.promotionId;
    }
    obj16.promotionId = promotionId3;
    obj15.actionSheetProperties = obj16;
    obj5[dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL] = obj15;
    let tmp49 = tmp33;
    if (tmp33) {
      tmp49 = isGiftCoachmarkAssetReady;
    }
    const obj17 = { isEligible: tmp49, newSnowflakeId: stateFromStores3, actionSheetProperties: null };
    const obj18 = { coachmarkComponent: stateFromStores4 };
    obj17.actionSheetProperties = obj18;
    obj5[dismissible_content.DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET] = obj17;
    let tmp50 = !tmp33;
    if (tmp33) {
      tmp50 = null == stateFromStores5;
    }
    let tmp51 = !tmp50;
    if (!tmp50) {
      let tmp52 = null != stateFromStores3;
      if (tmp52) {
        let tmp53 = isDismissed;
        if (tmp53) {
          if (enabled) {
            enabled = null != stateFromStores5;
          }
          if (enabled) {
            enabled = isGiftReminderAssetReady;
          }
          tmp53 = enabled;
        }
        tmp52 = tmp53;
      }
      tmp51 = tmp52;
    }
    const obj19 = { isEligible: tmp51, newSnowflakeId: stateFromStores3, actionSheetProperties: null };
    const obj20 = { coachmarkComponent: stateFromStores5 };
    obj19.actionSheetProperties = obj20;
    obj5[dismissible_content.DismissibleContent.GIFTING_PROMOTION_REMINDER] = obj19;
    const obj21 = { isEligible: null != giftingBadgeCoachmarkVariant, actionSheetProperties: null };
    const obj22 = { variant: giftingBadgeCoachmarkVariant };
    obj21.actionSheetProperties = obj22;
    obj5[dismissible_content.DismissibleContent.NEW_GIFTING_BADGES_COACHMARK] = obj21;
    const obj23 = { isEligible: true, actionSheetProperties: {} };
    obj5[dismissible_content.DismissibleContent.CUSTOM_APP_ICONS_COACHMARK] = obj23;
    const obj24 = { isEligible: shouldShowRobloxConnectionCoachmark, actionSheetProperties: {} };
    obj5[dismissible_content.DismissibleContent.ROBLOX_CONNECTION_COACHMARK] = obj24;
    const obj25 = { isEligible: true, actionSheetProperties: {} };
    obj5[dismissible_content.DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_COACHMARK] = obj25;
    const obj26 = { isEligible: true, actionSheetProperties: {} };
    obj5[dismissible_content.DismissibleContent.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT] = obj26;
    const obj27 = { isEligible: nitroFileUploadAnnouncementEligible, actionSheetProperties: {} };
    obj5[dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_ANNOUNCEMENT] = obj27;
    const obj28 = { isEligible: nitroFileUploadUpsellEligible, actionSheetProperties: {} };
    obj5[dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_UPSELL] = obj28;
    const obj29 = { isEligible: tmp32, actionSheetProperties: {} };
    obj5[dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_COACHMARK] = obj29;
    if (stateFromStores2) {
      stateFromStores2 = isEligibleSenderForReferralProgram;
    }
    if (stateFromStores2) {
      stateFromStores2 = null != tmp14;
    }
    if (stateFromStores2) {
      stateFromStores2 = tmp14 > 0;
    }
    if (stateFromStores2) {
      stateFromStores2 = null != tmp15;
    }
    const obj30 = { isEligible: stateFromStores2, newSnowflakeId: tmp15, actionSheetProperties: {} };
    obj5[dismissible_content.DismissibleContent.MOBILE_REFERRAL_PROGRAM_BOTTOM_SHEET_ENTRYPOINT] = obj30;
    let tmp34 = obj5;
  } else {
    tmp34 = obj5;
  }
  return tmp34;
}