// discord_app/modules/upsell_tooltip/native/useMainViewTooltipActionSheetEligibilityMap.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import DurationsDefault from "../../../utils/Durations.tsx";
import MetaQuestUtils from "../../device/MetaQuestUtils.android.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import useGetOrFetchApplications from "../../applications/useGetOrFetchApplications.tsx";
import useAuthorizedAppsToken from "../../application_account_linking/hooks/useAuthorizedAppsToken.tsx";
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
import bloonsTDBattlesUpsellExperiment2 from "../../application_account_linking/experiments/bloonsTDBattlesUpsellExperiment.tsx";
import MainViewTooltipActionSheetsDisabledExperimentDefault from "../experiments/MainViewTooltipActionSheetsDisabledExperiment.tsx";
import RecurringReferralReminderExperiment2 from "../../premium/experiments/RecurringReferralReminderExperiment.tsx";
import PremiumTrialOfferActionSheetKillSwitchExperiment2 from "../../premium/experiments/PremiumTrialOfferActionSheetKillSwitchExperiment.tsx";
import useGiftingPromotionAssetsReadyDefault from "../../premium/gifting/native/hooks/useGiftingPromotionAssetsReady.tsx";
import useNitroFileUploadMarketingEligible from "../../premium/file_upload/useNitroFileUploadMarketingEligible.tsx";
import useLaunchAccountLinkingCampaignDefault from "../../application_account_linking/native/useLaunchAccountLinkingCampaign.tsx";
import useHexagonCampaignExpirySheetEligibility from "../../hexagon_campaign/native/useHexagonCampaignExpirySheetEligibility.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import ApexExperimentStore from "../../experiments/apex/ApexExperimentStore.tsx";
import ReferralTrialStore from "../../premium/ReferralTrialStore.tsx";
import GooglePlayPriceChangeStore from "../../premium/native/google_play_price_changes/GooglePlayPriceChangeStore.tsx";
import PromotionsStore from "../../premium/promotions/PromotionsStore.tsx";
import UserSettingsProtoStore from "../../user_settings/UserSettingsProtoStore.tsx";
import UserRequiredActionStore from "../../../stores/UserRequiredActionStore.tsx";

require = fn;
let closure_10 = fn(7920).ApplicationAccountLinkingConstants;
const PremiumConstants = fn(1390);
({
  PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID,
  PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID,
  PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID,
  PREMIUM_TIER_2_REACTIVATION_TRIAL_ID,
} = PremiumConstants);
const UserSettingsTypes = fn(1082).UserSettingsTypes;
const MainViewTooltipActionSheets = "MainViewTooltipActionSheets";
let cooldownConfig = { cooldownDurationMs: DurationsDefault.Millis.DAY };
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
  cooldownConfig = initialize;
  items = [UserSettingsProtoStore];
  let stateFromStores = cooldownConfig.useStateFromStores(items, () =>
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
  const tmpResult23 = initialize;
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
  const tmpResult24 = usePremiumDiscountOffer;
  const items3 = [ApexExperimentStore];
  let stateFromStores2 = initialize.useStateFromStores(items3, () => {
    const RecurringReferralReminderExperiment =
      RecurringReferralReminderExperiment2.RecurringReferralReminderExperiment;
    return RecurringReferralReminderExperiment.getConfig({ location: _location }, { autoTrackExposure: false })
      .bottomSheetEnabled;
  });
  const tmpResult25 = initialize;
  const isEligibleSenderForReferralProgram =
    useIsEligibleSenderForReferralProgram.useIsEligibleSenderForReferralProgram(!stateFromStores2);
  const tmpResult26 = useIsEligibleSenderForReferralProgram;
  const items4 = [ReferralTrialStore];
  const tmpResult27 = initialize;
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
  const tmpResult28 = usePremiumTrialOffer;
  const promotionMarketingSurface = usePromotionMarketingSurface.usePromotionMarketingSurface(
    MarketingSurfaceType.MarketingSurfaceType.MOBILE_BOTTOM_SHEET,
  );
  if (promotionMarketingSurface != null) {
    let surface = promotionMarketingSurface.surface;
  }
  let mobileBottomSheetCopy = null;
  if (null != promotionMarketingSurface) {
    mobileBottomSheetCopy = MobileBottomSheetCopy.getMobileBottomSheetCopy(promotionMarketingSurface);
    const tmpResult30 = MobileBottomSheetCopy;
  }
  const tmpResult29 = usePromotionMarketingSurface;
  const items5 = [PromotionsStore];
  const stateFromStores3 = initialize.useStateFromStores(items5, () => {
    const giftPromotion = PromotionsStore.getGiftPromotion();
    let id;
    if (giftPromotion != null) {
      id = giftPromotion.id;
    }
    return id;
  });
  const tmpResult31 = initialize;
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
  const tmpResult32 = initialize;
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
  const tmpResult33 = initialize;
  const giftingBadgeCoachmarkVariant = GiftingBadgesUtils.useGiftingBadgeCoachmarkVariant({
    location: MainViewTooltipActionSheets,
  });
  let isDismissed = null != stateFromStores3;
  if (isDismissed) {
    isDismissed = DismissibleContentUnsafeUtils.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(
      dismissible_content.DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET,
      stateFromStores3,
    ).isDismissed;
    const tmpResult35 = DismissibleContentUnsafeUtils;
  }
  let isDismissed2 = null != stateFromStores3;
  if (isDismissed2) {
    isDismissed2 = DismissibleContentUnsafeUtils.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(
      dismissible_content.DismissibleContent.GIFTING_PROMOTION_REMINDER,
      stateFromStores3,
    ).isDismissed;
    const tmpResult36 = DismissibleContentUnsafeUtils;
  }
  let tmp24 = null;
  const tmpResult34 = GiftingBadgesUtils;
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
  const tmpResult37 = useNitroFileUploadMarketingEligible;
  const nitroFileUploadUpsellEligible =
    useNitroFileUploadMarketingEligible.useNitroFileUploadUpsellEligible(MainViewTooltipActionSheets);
  const tmpResult38 = useNitroFileUploadMarketingEligible;
  const shouldShowRobloxConnectionCoachmark = RobloxConnectionCoachmark.useShouldShowRobloxConnectionCoachmark();
  const tmp30 = useLaunchAccountLinkingCampaignDefault(stateFromStores);
  const tmpResult39 = RobloxConnectionCoachmark;
  let canSet = CustomTypingIndicatorExperiment.useCustomTypingIndicatorConfig(MainViewTooltipActionSheets).canSet;
  const tmpResult40 = CustomTypingIndicatorExperiment;
  const enabled2 =
    CustomTypingIndicatorNewPresetsExperiment.useCustomTypingIndicatorNewPresetsConfig(
      MainViewTooltipActionSheets,
    ).enabled;
  const tmpResult41 = CustomTypingIndicatorNewPresetsExperiment;
  const hexagonCampaignExpirySheetEligibility =
    useHexagonCampaignExpirySheetEligibility.useHexagonCampaignExpirySheetEligibility(MainViewTooltipActionSheets);
  ({ isExpiringSoonEligible, isExpiredEligible } = hexagonCampaignExpirySheetEligibility);
  const bloonsTDBattlesUpsellExperiment = bloonsTDBattlesUpsellExperiment2.bloonsTDBattlesUpsellExperiment;
  const enabled3 = bloonsTDBattlesUpsellExperiment.getConfig(
    { location: MainViewTooltipActionSheets },
    { autoTrackExposure: false },
  ).enabled;
  const tmpResult42 = useHexagonCampaignExpirySheetEligibility;
  const authorizedAppsToken = useAuthorizedAppsToken.useAuthorizedAppsToken(
    closure_10.BLOONS_TD_BATTLES_2_APPLICATION_ID,
    { disableFetch: !enabled3 },
  );
  ({ fetched, token } = authorizedAppsToken);
  useGetOrFetchApplications;
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
    let tmp38 = null != premiumDiscountOffer;
    if (tmp38) {
      tmp38 = null == premiumDiscountOffer.expiresAt;
    }
    const obj8 = { isEligible: tmp38, newSnowflakeId: null, actionSheetProperties: null };
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
    obj6[dismissible_content.DismissibleContent.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET] = obj11;
    let tmp43 = null != mobileBottomSheetCopy;
    if (tmp43) {
      let dismissibleContent;
      if (surface != null) {
        dismissibleContent = surface.dismissibleContent;
      }
      tmp43 =
        dismissibleContent === dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
    }
    const obj14 = { isEligible: tmp43, newSnowflakeId: null, actionSheetProperties: null };
    let promotionId;
    if (promotionMarketingSurface != null) {
      promotionId = promotionMarketingSurface.promotionId;
    }
    obj14.newSnowflakeId = promotionId;
    const obj15 = {
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
    obj15.componentId = id2;
    let componentType;
    if (promotionMarketingSurface != null) {
      componentType = promotionMarketingSurface.componentType;
    }
    obj15.componentType = componentType;
    let promotionId1;
    if (promotionMarketingSurface != null) {
      promotionId1 = promotionMarketingSurface.promotionId;
    }
    obj15.promotionId = promotionId1;
    obj14.actionSheetProperties = obj15;
    obj6[dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL] = obj14;
    let tmp49 = null != mobileBottomSheetCopy;
    if (tmp49) {
      let dismissibleContent1;
      if (surface != null) {
        dismissibleContent1 = surface.dismissibleContent;
      }
      tmp49 = dismissibleContent1 === dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL;
    }
    const obj16 = { isEligible: tmp49, newSnowflakeId: null, actionSheetProperties: null };
    let promotionId2;
    if (promotionMarketingSurface != null) {
      promotionId2 = promotionMarketingSurface.promotionId;
    }
    obj16.newSnowflakeId = promotionId2;
    const obj17 = {
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
    obj17.componentId = id3;
    let componentType1;
    if (promotionMarketingSurface != null) {
      componentType1 = promotionMarketingSurface.componentType;
    }
    obj17.componentType = componentType1;
    let promotionId3;
    if (promotionMarketingSurface != null) {
      promotionId3 = promotionMarketingSurface.promotionId;
    }
    obj17.promotionId = promotionId3;
    obj16.actionSheetProperties = obj17;
    obj6[dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL] = obj16;
    let tmp55 = tmp35;
    if (tmp35) {
      tmp55 = isGiftCoachmarkAssetReady;
    }
    const obj18 = { isEligible: tmp55, newSnowflakeId: stateFromStores3, actionSheetProperties: null };
    const obj19 = { coachmarkComponent: stateFromStores4 };
    obj18.actionSheetProperties = obj19;
    obj6[dismissible_content.DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET] = obj18;
    let tmp56 = !tmp35;
    if (tmp35) {
      tmp56 = null == stateFromStores5;
    }
    let tmp57 = !tmp56;
    if (!tmp56) {
      let tmp58 = null != stateFromStores3;
      if (tmp58) {
        let tmp59 = isDismissed;
        if (tmp59) {
          if (enabled) {
            enabled = null != stateFromStores5;
          }
          if (enabled) {
            enabled = isGiftReminderAssetReady;
          }
          tmp59 = enabled;
        }
        tmp58 = tmp59;
      }
      tmp57 = tmp58;
    }
    const obj20 = { isEligible: tmp57, newSnowflakeId: stateFromStores3, actionSheetProperties: null };
    const obj21 = { coachmarkComponent: stateFromStores5 };
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
    const obj26 = { isEligible: true, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_COACHMARK] = obj26;
    const obj27 = { isEligible: true, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT] = obj27;
    const obj28 = { isEligible: nitroFileUploadAnnouncementEligible, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_ANNOUNCEMENT] = obj28;
    const obj29 = { isEligible: nitroFileUploadUpsellEligible, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_UPSELL] = obj29;
    const obj30 = { isEligible: canSet, actionSheetProperties: null };
    const obj31 = { dismissNewPresetsSheet: enabled2 };
    obj30.actionSheetProperties = obj31;
    obj6[dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_COACHMARK] = obj30;
    if (canSet) {
      canSet = enabled2;
    }
    const obj32 = { isEligible: canSet, actionSheetProperties: { variant: "new_presets" } };
    obj6[dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_PRESETS_ACTION_SHEET] = obj32;
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
    const obj33 = { isEligible: stateFromStores2, newSnowflakeId: tmp15, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.MOBILE_REFERRAL_PROGRAM_BOTTOM_SHEET_ENTRYPOINT] = obj33;
    let tmp60 = enabled3;
    if (tmp60) {
      let tmp61 = null != tmp34;
      if (tmp61) {
        let tmp62 = !fetched;
        if (fetched) {
          tmp62 = null != token;
        }
        tmp61 = !tmp62;
      }
      tmp60 = tmp61;
    }
    const obj34 = { isEligible: tmp60, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.BLOONS_TD_BATTLES_ACCOUNT_LINK_UPSELL] = obj34;
    const obj35 = { isEligible: isExpiredEligible, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.HEXAGON_CAMPAIGN_PERKS_EXPIRED_PROMO_SHEET] = obj35;
    const obj36 = { isEligible: isExpiringSoonEligible, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.HEXAGON_CAMPAIGN_PERKS_EXPIRING_PROMO_SHEET] = obj36;
    const obj37 = { isEligible: null != tmp30, cooldownConfig, actionSheetProperties: null };
    let str;
    if (tmp30 != null) {
      str = tmp30.campaignId;
    }
    if (str == null) {
      str = "";
    }
    const obj38 = { campaignId: str, applicationId: null, orbCount: null, endAtUnixS: null };
    let str2;
    if (tmp30 != null) {
      str2 = tmp30.applicationId;
    }
    if (str2 == null) {
      str2 = "";
    }
    obj38.applicationId = str2;
    let num2;
    if (tmp30 != null) {
      num2 = tmp30.orbCount;
    }
    if (num2 == null) {
      num2 = 0;
    }
    obj38.orbCount = num2;
    let num3;
    if (tmp30 != null) {
      num3 = tmp30.endAtUnixS;
    }
    if (num3 == null) {
      num3 = 0;
    }
    obj38.endAtUnixS = num3;
    obj37.actionSheetProperties = obj38;
    obj6[dismissible_content.DismissibleContent.LAUNCH_ACCOUNT_LINKING_CAMPAIGN_ACTION_SHEET] = obj37;
    let tmp36 = obj6;
  } else {
    tmp36 = obj6;
  }
  return tmp36;
}
