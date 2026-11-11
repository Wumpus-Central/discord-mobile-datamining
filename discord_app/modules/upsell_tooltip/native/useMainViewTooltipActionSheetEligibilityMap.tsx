// discord_app/modules/upsell_tooltip/native/useMainViewTooltipActionSheetEligibilityMap.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import MetaQuestUtils from "../../device/MetaQuestUtils.android.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import useIsEligibleSenderForReferralProgram from "../../premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx";
import usePremiumTrialOffer from "../../premium/hooks/usePremiumTrialOffer.android.tsx";
import usePremiumDiscountOffer from "../../premium/hooks/usePremiumDiscountOffer.android.tsx";
import MarketingSurfaceType from "../../../../discord_common/js/shared/shared-constants/MarketingSurfaceType.tsx";
import usePromotionMarketingSurface from "../../premium/hooks/usePromotionMarketingSurface.tsx";
import GiftPromotionReminderExperiment2 from "../../premium/gifting/experiments/GiftPromotionReminderExperiment.tsx";
import GiftingBadgesUtils from "../../premium/gifting/GiftingBadgesUtils.tsx";
import CustomTypingIndicatorExperiment from "../../custom_typing_indicator/CustomTypingIndicatorExperiment.tsx";
import CustomTypingIndicatorNewPresetsExperiment from "../../custom_typing_indicator/CustomTypingIndicatorNewPresetsExperiment.tsx";
import MobileBottomSheetCopy from "../../premium/promotions/MobileBottomSheetCopy.tsx";
import RobloxConnectionCoachmark from "../../local_app_detection/native/RobloxConnectionCoachmark.tsx";
import MainViewTooltipActionSheetsDisabledExperimentDefault from "../experiments/MainViewTooltipActionSheetsDisabledExperiment.tsx";
import RecurringReferralReminderExperiment2 from "../../premium/experiments/RecurringReferralReminderExperiment.tsx";
import PremiumTrialOfferActionSheetKillSwitchExperiment2 from "../../premium/experiments/PremiumTrialOfferActionSheetKillSwitchExperiment.tsx";
import useGiftingPromotionAssetsReadyDefault from "../../premium/gifting/native/hooks/useGiftingPromotionAssetsReady.tsx";
import useNitroFileUploadMarketingEligible from "../../premium/file_upload/useNitroFileUploadMarketingEligible.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import ApexExperimentStore from "../../experiments/apex/ApexExperimentStore.tsx";
import ReferralTrialStore from "../../premium/ReferralTrialStore.tsx";
import GooglePlayPriceChangeStore from "../../premium/native/google_play_price_changes/GooglePlayPriceChangeStore.tsx";
import PromotionsStore from "../../premium/promotions/PromotionsStore.tsx";
import UserSettingsProtoStore from "../../user_settings/UserSettingsProtoStore.tsx";
import UserRequiredActionStore from "../../../stores/UserRequiredActionStore.tsx";

require = fn;
const PremiumConstants = fn(1387);
({
  PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID,
  PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID,
  PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID,
  PREMIUM_TIER_2_REACTIVATION_TRIAL_ID,
} = PremiumConstants);
const UserSettingsTypes = fn(1082).UserSettingsTypes;
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

export function useMainViewTooltipActionSheetMap() {
  items = [UserSettingsProtoStore];
  let stateFromStores = initialize.useStateFromStores(items, () =>
    UserSettingsProtoStore.hasLoaded(constants.PRELOADED_USER_SETTINGS),
  );
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
  const tmpResult20 = initialize;
  [tmp8, tmp9] = initialize.useStateFromStoresArray(items2, () => {
    items = [,];
    ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = GooglePlayPriceChangeStore);
    return items;
  });
  const tmp7 = _slicedToArray(
    initialize.useStateFromStoresArray(items2, () => {
      items = [,];
      ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = GooglePlayPriceChangeStore);
      return items;
    }),
    2,
  );
  const premiumDiscountOffer = usePremiumDiscountOffer.usePremiumDiscountOffer();
  const tmpResult21 = usePremiumDiscountOffer;
  const items3 = [ApexExperimentStore];
  let stateFromStores2 = initialize.useStateFromStores(items3, () => {
    const RecurringReferralReminderExperiment =
      RecurringReferralReminderExperiment2.RecurringReferralReminderExperiment;
    return RecurringReferralReminderExperiment.getConfig({ location: _location }, { autoTrackExposure: false })
      .bottomSheetEnabled;
  });
  const tmpResult22 = initialize;
  const isEligibleSenderForReferralProgram =
    useIsEligibleSenderForReferralProgram.useIsEligibleSenderForReferralProgram(!stateFromStores2);
  const tmpResult23 = useIsEligibleSenderForReferralProgram;
  const items4 = [ReferralTrialStore];
  const tmpResult24 = initialize;
  [tmp14, tmp15] = initialize.useStateFromStoresArray(items4, () => {
    items = [
      ReferralTrialStore.getReferralsRemaining({ bypassFetch: true }),
      ReferralTrialStore.getRecurringReminderStateId(),
    ];
    return items;
  });
  const tmp13 = _slicedToArray(
    initialize.useStateFromStoresArray(items4, () => {
      items = [
        ReferralTrialStore.getReferralsRemaining({ bypassFetch: true }),
        ReferralTrialStore.getRecurringReminderStateId(),
      ];
      return items;
    }),
    2,
  );
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  const PremiumTrialOfferActionSheetKillSwitchExperiment =
    PremiumTrialOfferActionSheetKillSwitchExperiment2.PremiumTrialOfferActionSheetKillSwitchExperiment;
  const tmpResult25 = usePremiumTrialOffer;
  const promotionMarketingSurface = usePromotionMarketingSurface.usePromotionMarketingSurface(
    MarketingSurfaceType.MarketingSurfaceType.MOBILE_BOTTOM_SHEET,
  );
  if (promotionMarketingSurface != null) {
    let surface = promotionMarketingSurface.surface;
  }
  let mobileBottomSheetCopy = null;
  if (null != promotionMarketingSurface) {
    mobileBottomSheetCopy = MobileBottomSheetCopy.getMobileBottomSheetCopy(promotionMarketingSurface);
    const tmpResult27 = MobileBottomSheetCopy;
  }
  const tmpResult26 = usePromotionMarketingSurface;
  const items5 = [PromotionsStore];
  const stateFromStores3 = initialize.useStateFromStores(items5, () => {
    const giftPromotion = PromotionsStore.getGiftPromotion();
    let id;
    if (giftPromotion != null) {
      id = giftPromotion.id;
    }
    return id;
  });
  const tmpResult28 = initialize;
  const items6 = [PromotionsStore];
  const stateFromStores4 = initialize.useStateFromStores(items6, () => {
    const marketingComponentBySurface = PromotionsStore.getMarketingComponentBySurface(
      MarketingSurfaceType.MarketingSurfaceType.GIFT_ICON_COACHMARK,
    );
    let surface = null;
    if (null != marketingComponentBySurface) {
      surface = marketingComponentBySurface.surface;
    }
    return surface;
  });
  const tmpResult29 = initialize;
  const items7 = [PromotionsStore];
  const stateFromStores5 = initialize.useStateFromStores(items7, () => {
    const marketingComponentBySurface = PromotionsStore.getMarketingComponentBySurface(
      MarketingSurfaceType.MarketingSurfaceType.GIFT_REMINDER_COACHMARK,
    );
    let surface = null;
    if (null != marketingComponentBySurface) {
      surface = marketingComponentBySurface.surface;
    }
    return surface;
  });
  const GiftPromotionReminderExperiment = GiftPromotionReminderExperiment2.GiftPromotionReminderExperiment;
  let enabled = GiftPromotionReminderExperiment.useConfig({ location: MainViewTooltipActionSheets }).enabled;
  const tmpResult30 = initialize;
  const giftingBadgeCoachmarkVariant = GiftingBadgesUtils.useGiftingBadgeCoachmarkVariant({
    location: MainViewTooltipActionSheets,
  });
  let isDismissed = null != stateFromStores3;
  if (isDismissed) {
    isDismissed = DismissibleContentUnsafeUtils.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(
      dismissible_content.DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET,
      stateFromStores3,
    ).isDismissed;
    const tmpResult32 = DismissibleContentUnsafeUtils;
  }
  let isDismissed2 = null != stateFromStores3;
  if (isDismissed2) {
    isDismissed2 = DismissibleContentUnsafeUtils.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(
      dismissible_content.DismissibleContent.GIFTING_PROMOTION_REMINDER,
      stateFromStores3,
    ).isDismissed;
    const tmpResult33 = DismissibleContentUnsafeUtils;
  }
  let tmp24 = null;
  const tmpResult31 = GiftingBadgesUtils;
  if (!isDismissed) {
    tmp24 = stateFromStores4;
  }
  let tmp25 = null;
  if (!isDismissed2) {
    tmp25 = stateFromStores5;
  }
  const tmp4Result = useGiftingPromotionAssetsReadyDefault;
  ({ isGiftCoachmarkAssetReady, isGiftReminderAssetReady } = useGiftingPromotionAssetsReadyDefault(tmp24, tmp25));
  const tmp4ResultResult = useGiftingPromotionAssetsReadyDefault(tmp24, tmp25);
  const nitroFileUploadAnnouncementEligible =
    useNitroFileUploadMarketingEligible.useNitroFileUploadAnnouncementEligible(MainViewTooltipActionSheets);
  const tmpResult34 = useNitroFileUploadMarketingEligible;
  const nitroFileUploadUpsellEligible =
    useNitroFileUploadMarketingEligible.useNitroFileUploadUpsellEligible(MainViewTooltipActionSheets);
  const tmpResult35 = useNitroFileUploadMarketingEligible;
  const shouldShowRobloxConnectionCoachmark = RobloxConnectionCoachmark.useShouldShowRobloxConnectionCoachmark();
  const tmpResult36 = RobloxConnectionCoachmark;
  let canSet = CustomTypingIndicatorExperiment.useCustomTypingIndicatorConfig(MainViewTooltipActionSheets).canSet;
  const tmpResult37 = CustomTypingIndicatorExperiment;
  const enabled2 =
    CustomTypingIndicatorNewPresetsExperiment.useCustomTypingIndicatorNewPresetsConfig(
      MainViewTooltipActionSheets,
    ).enabled;
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
    let tmp33 = null != premiumDiscountOffer;
    if (tmp33) {
      tmp33 = null == premiumDiscountOffer.expiresAt;
    }
    const obj7 = { isEligible: tmp33, newSnowflakeId: null, actionSheetProperties: null };
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
      hasItem = !PremiumTrialOfferActionSheetKillSwitchExperiment.useConfig({ location: MainViewTooltipActionSheets })
        .enabled;
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
    let tmp38 = null != mobileBottomSheetCopy;
    if (tmp38) {
      let dismissibleContent;
      if (surface != null) {
        dismissibleContent = surface.dismissibleContent;
      }
      tmp38 =
        dismissibleContent === dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
    }
    const obj13 = { isEligible: tmp38, newSnowflakeId: null, actionSheetProperties: null };
    let promotionId;
    if (promotionMarketingSurface != null) {
      promotionId = promotionMarketingSurface.promotionId;
    }
    obj13.newSnowflakeId = promotionId;
    const obj14 = {
      bottomSheetData: surface,
      copy: mobileBottomSheetCopy,
      componentId: null,
      componentType: null,
      promotionId: null,
    };
    let id2;
    if (promotionMarketingSurface != null) {
      id2 = promotionMarketingSurface.id;
    }
    obj14.componentId = id2;
    let componentType;
    if (promotionMarketingSurface != null) {
      componentType = promotionMarketingSurface.componentType;
    }
    obj14.componentType = componentType;
    let promotionId1;
    if (promotionMarketingSurface != null) {
      promotionId1 = promotionMarketingSurface.promotionId;
    }
    obj14.promotionId = promotionId1;
    obj13.actionSheetProperties = obj14;
    obj5[dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL] = obj13;
    let tmp44 = null != mobileBottomSheetCopy;
    if (tmp44) {
      let dismissibleContent1;
      if (surface != null) {
        dismissibleContent1 = surface.dismissibleContent;
      }
      tmp44 = dismissibleContent1 === dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL;
    }
    const obj15 = { isEligible: tmp44, newSnowflakeId: null, actionSheetProperties: null };
    let promotionId2;
    if (promotionMarketingSurface != null) {
      promotionId2 = promotionMarketingSurface.promotionId;
    }
    obj15.newSnowflakeId = promotionId2;
    const obj16 = {
      bottomSheetData: surface,
      copy: mobileBottomSheetCopy,
      componentId: null,
      componentType: null,
      promotionId: null,
    };
    let id3;
    if (promotionMarketingSurface != null) {
      id3 = promotionMarketingSurface.id;
    }
    obj16.componentId = id3;
    let componentType1;
    if (promotionMarketingSurface != null) {
      componentType1 = promotionMarketingSurface.componentType;
    }
    obj16.componentType = componentType1;
    let promotionId3;
    if (promotionMarketingSurface != null) {
      promotionId3 = promotionMarketingSurface.promotionId;
    }
    obj16.promotionId = promotionId3;
    obj15.actionSheetProperties = obj16;
    obj5[dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL] = obj15;
    let tmp50 = tmp30;
    if (tmp30) {
      tmp50 = isGiftCoachmarkAssetReady;
    }
    const obj17 = { isEligible: tmp50, newSnowflakeId: stateFromStores3, actionSheetProperties: null };
    const obj18 = { coachmarkComponent: stateFromStores4 };
    obj17.actionSheetProperties = obj18;
    obj5[dismissible_content.DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET] = obj17;
    let tmp51 = !tmp30;
    if (tmp30) {
      tmp51 = null == stateFromStores5;
    }
    let tmp52 = !tmp51;
    if (!tmp51) {
      let tmp53 = null != stateFromStores3;
      if (tmp53) {
        let tmp54 = isDismissed;
        if (tmp54) {
          if (enabled) {
            enabled = null != stateFromStores5;
          }
          if (enabled) {
            enabled = isGiftReminderAssetReady;
          }
          tmp54 = enabled;
        }
        tmp53 = tmp54;
      }
      tmp52 = tmp53;
    }
    const obj19 = { isEligible: tmp52, newSnowflakeId: stateFromStores3, actionSheetProperties: null };
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
    const obj29 = { isEligible: canSet, actionSheetProperties: null };
    const obj30 = { dismissNewPresetsSheet: enabled2 };
    obj29.actionSheetProperties = obj30;
    obj5[dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_COACHMARK] = obj29;
    if (canSet) {
      canSet = enabled2;
    }
    const obj31 = { isEligible: canSet, actionSheetProperties: { variant: "new_presets" } };
    obj5[dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_PRESETS_ACTION_SHEET] = obj31;
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
    const obj32 = { isEligible: stateFromStores2, newSnowflakeId: tmp15, actionSheetProperties: {} };
    obj5[dismissible_content.DismissibleContent.MOBILE_REFERRAL_PROGRAM_BOTTOM_SHEET_ENTRYPOINT] = obj32;
    let tmp31 = obj5;
  } else {
    tmp31 = obj5;
  }
  return tmp31;
}
