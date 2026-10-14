// discord_app/modules/upsell_tooltip/native/useMainViewTooltipActionSheetEligibilityMap.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import MetaQuestUtils from "../../device/MetaQuestUtils.android.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import usePremiumTrialOffer from "../../premium/hooks/usePremiumTrialOffer.android.tsx";
import useIsEligibleSenderForReferralProgram from "../../premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx";
import usePremiumDiscountOffer from "../../premium/hooks/usePremiumDiscountOffer.android.tsx";
import GiftPromotionReminderExperiment2 from "../../premium/gifting/experiments/GiftPromotionReminderExperiment.tsx";
import MarketingComponentType from "../../../../discord_common/js/shared/shared-constants/MarketingComponentType.tsx";
import GiftingBadgesUtils from "../../premium/gifting/GiftingBadgesUtils.tsx";
import CustomTypingIndicatorExperiment from "../../custom_typing_indicator/CustomTypingIndicatorExperiment.tsx";
import usePromotionMarketingComponent from "../../premium/hooks/usePromotionMarketingComponent.tsx";
import DisplayNameStylesFlywheelExperiment from "../../display_name_styles/DisplayNameStylesFlywheelExperiment.tsx";
import RobloxConnectionCoachmark from "../../local_app_detection/native/RobloxConnectionCoachmark.tsx";
import ConnectionDeprecationBottomSheet from "../../application_account_linking/native/ConnectionDeprecationBottomSheet.tsx";
import MainViewTooltipActionSheetsDisabledExperimentDefault from "../experiments/MainViewTooltipActionSheetsDisabledExperiment.tsx";
import RecurringReferralReminderExperiment2 from "../../premium/experiments/RecurringReferralReminderExperiment.tsx";
import PremiumTrialOfferActionSheetKillSwitchExperiment2 from "../../premium/experiments/PremiumTrialOfferActionSheetKillSwitchExperiment.tsx";
import useGiftingPromotionAssetsReadyDefault from "../../premium/gifting/native/hooks/useGiftingPromotionAssetsReady.tsx";
import useNitroFileUploadMarketingEligible from "../../premium/file_upload/useNitroFileUploadMarketingEligible.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import ReferralTrialStore from "../../premium/ReferralTrialStore.tsx";
import GooglePlayPriceChangeStore from "../../premium/native/google_play_price_changes/GooglePlayPriceChangeStore.tsx";
import PromotionsStore from "../../premium/promotions/PromotionsStore.tsx";
import UserSettingsProtoStore from "../../user_settings/UserSettingsProtoStore.tsx";
import UserRequiredActionStore from "../../../stores/UserRequiredActionStore.tsx";

const require = globalThis.__r;

require = fn;
let PlatformTypes = fn(1085).PlatformTypes;
const PremiumConstants = fn(1392);
({
  PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID,
  PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID,
  PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID,
  PREMIUM_TIER_2_REACTIVATION_TRIAL_ID,
} = PremiumConstants);
const UserSettingsTypes = fn(1095).UserSettingsTypes;
const MainViewTooltipActionSheets = "MainViewTooltipActionSheets";
let items = [
  PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID,
  PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID,
  PREMIUM_TIER_2_REACTIVATION_TRIAL_ID,
  PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID,
];
const set = new Set(items);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/upsell_tooltip/native/useMainViewTooltipActionSheetEligibilityMap.tsx",
);

export const useMainViewTooltipActionSheetMap = ReactCompilerGating.isReactCompilerEnabled()
  ? function useMainViewTooltipActionSheetMap() {
      const cResult = first(premiumDiscountOffer[10]).c(148);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [stateFromStores4];
        class S {
          constructor() {
            return closure_7.hasLoaded(isGiftCoachmarkAssetReady.PRELOADED_USER_SETTINGS);
          }
        }
        cResult[0] = items;
        cResult[1] = S;
        tmp4 = items;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const obj = first(premiumDiscountOffer[10]);
      const stateFromStores = first(premiumDiscountOffer[11]).useStateFromStores(tmp4, S);
      let tmp8 = importDefault;
      const tmpResult = first(premiumDiscountOffer[11]);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [enabled2];
        class S {
          constructor() {
            return closure_7.hasLoaded(isGiftCoachmarkAssetReady.PRELOADED_USER_SETTINGS);
          }
        }
        cResult[2] = items1;
        cResult[3] = tmp13;
        let tmp11 = tmp13;
        let tmp10 = items1;
      } else {
        tmp10 = cResult[2];
        tmp11 = cResult[3];
      }
      const obj2 = { location: isGiftReminderAssetReady };
      const obj3 = require("MainViewTooltipActionSheetsDisabledExperiment");
      let tmp15 = stateFromStores;
      const stateFromStores1 = first(premiumDiscountOffer[11]).useStateFromStores(tmp10, tmp11);
      if (stateFromStores) {
        tmp15 = !obj3.getConfig(obj2).disabled;
      }
      if (tmp15) {
        tmp15 = !stateFromStores1;
      }
      if (tmp15) {
        tmp15 = !tmp(tmp2[13]).isMetaQuest();
        const tmpResult23 = tmp(tmp2[13]);
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [mobileBottomSheet];
        class S {
          constructor() {
            return closure_7.hasLoaded(isGiftCoachmarkAssetReady.PRELOADED_USER_SETTINGS);
          }
        }
        cResult[4] = items2;
        cResult[5] = tmp19;
        let tmp17 = tmp19;
        let tmp16 = items2;
      } else {
        tmp16 = cResult[4];
        tmp17 = cResult[5];
      }
      const tmpResult22 = first(premiumDiscountOffer[11]);
      const tmp21 = premiumTrialOffer(first(premiumDiscountOffer[11]).useStateFromStoresArray(tmp16, tmp17), 2);
      first = tmp21[0];
      importDefault = tmp23;
      const tmp20 = premiumTrialOffer;
      const tmpResult24 = first(premiumDiscountOffer[11]);
      premiumDiscountOffer = first(premiumDiscountOffer[14]).usePremiumDiscountOffer();
      const tmpResult25 = first(premiumDiscountOffer[14]);
      const isEligibleSenderForReferralProgram = first(
        premiumDiscountOffer[15],
      ).useIsEligibleSenderForReferralProgram();
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [enabled];
        class P {
          constructor() {
            items = [,];
            items[0] = enabled.getReferralsRemaining({ bypassFetch: true });
            items[1] = enabled.getReminderStateId();
            return items;
          }
        }
        cResult[6] = items3;
        cResult[7] = P;
        let tmp27 = P;
        let tmp26 = items3;
      } else {
        tmp26 = cResult[6];
        tmp27 = cResult[7];
      }
      const tmpResult26 = first(premiumDiscountOffer[15]);
      const tmpResult27 = first(premiumDiscountOffer[11]);
      [tmp30, tmp31] = tmp20(first(premiumDiscountOffer[11]).useStateFromStoresArray(tmp26, tmp27), 2);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { location: tmp9 };
        class P {
          constructor() {
            items = [,];
            items[0] = enabled.getReferralsRemaining({ bypassFetch: true });
            items[1] = enabled.getReminderStateId();
            return items;
          }
        }
        let tmp32 = obj4;
      } else {
        tmp32 = cResult[8];
      }
      const RecurringReferralReminderExperiment = tmp(tmp2[16]).RecurringReferralReminderExperiment;
      let tmp33 =
        RecurringReferralReminderExperiment.useConfig(tmp32).bottomSheetEnabled && isEligibleSenderForReferralProgram;
      if (tmp33) {
        tmp33 = null != tmp30;
      }
      if (tmp33) {
        tmp33 = tmp30 > 0;
      }
      if (tmp33) {
        tmp33 = null != tmp31;
      }
      const tmp20Result = tmp20(first(premiumDiscountOffer[11]).useStateFromStoresArray(tmp26, tmp27), 2);
      premiumTrialOffer = first(premiumDiscountOffer[17]).usePremiumTrialOffer();
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { location: tmp9 };
        class P {
          constructor() {
            items = [,];
            items[0] = enabled.getReferralsRemaining({ bypassFetch: true });
            items[1] = enabled.getReminderStateId();
            return items;
          }
        }
        let tmp37 = obj5;
      } else {
        tmp37 = cResult[9];
      }
      const PremiumTrialOfferActionSheetKillSwitchExperiment = tmp(
        tmp2[18],
      ).PremiumTrialOfferActionSheetKillSwitchExperiment;
      enabled = PremiumTrialOfferActionSheetKillSwitchExperiment.useConfig(tmp37).enabled;
      const tmpResult28 = first(premiumDiscountOffer[17]);
      const promotionMarketingComponent = first(premiumDiscountOffer[19]).usePromotionMarketingComponent(
        tmp(tmp2[20]).MarketingComponentType.MOBILE_BOTTOM_SHEET,
      );
      let oneofKind;
      if (promotionMarketingComponent != null) {
        oneofKind = promotionMarketingComponent.properties.properties.oneofKind;
      }
      mobileBottomSheet = null;
      if ("mobileBottomSheet" === oneofKind) {
        mobileBottomSheet = promotionMarketingComponent.properties.properties.mobileBottomSheet;
      }
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const items4 = [stateFromStores2];
        class W {
          constructor() {
            giftPromotion = closure_6.getGiftPromotion();
            id = undefined;
            if (giftPromotion != null) {
              id = giftPromotion.id;
            }
            return id;
          }
        }
        cResult[10] = items4;
        cResult[11] = W;
        let tmp42 = W;
        let tmp41 = items4;
      } else {
        tmp41 = cResult[10];
        tmp42 = cResult[11];
      }
      const tmpResult29 = first(premiumDiscountOffer[19]);
      stateFromStores2 = first(premiumDiscountOffer[11]).useStateFromStores(tmp41, tmp42);
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const items5 = [stateFromStores2];
        class W {
          constructor() {
            giftPromotion = closure_6.getGiftPromotion();
            id = undefined;
            if (giftPromotion != null) {
              id = giftPromotion.id;
            }
            return id;
          }
        }
        cResult[12] = items5;
        cResult[13] = tmp48;
        let tmp46 = tmp48;
        let tmp45 = items5;
      } else {
        tmp45 = cResult[12];
        tmp46 = cResult[13];
      }
      const tmpResult30 = first(premiumDiscountOffer[11]);
      const stateFromStores3 = first(premiumDiscountOffer[11]).useStateFromStores(tmp45, tmp46);
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const items6 = [stateFromStores2];
        class W {
          constructor() {
            giftPromotion = closure_6.getGiftPromotion();
            id = undefined;
            if (giftPromotion != null) {
              id = giftPromotion.id;
            }
            return id;
          }
        }
        cResult[14] = items6;
        cResult[15] = tmp53;
        let tmp51 = tmp53;
        let tmp50 = items6;
      } else {
        tmp50 = cResult[14];
        tmp51 = cResult[15];
      }
      const tmpResult31 = first(premiumDiscountOffer[11]);
      stateFromStores4 = first(premiumDiscountOffer[11]).useStateFromStores(tmp50, tmp51);
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { location: tmp9 };
        class W {
          constructor() {
            giftPromotion = closure_6.getGiftPromotion();
            id = undefined;
            if (giftPromotion != null) {
              id = giftPromotion.id;
            }
            return id;
          }
        }
        let tmp55 = obj6;
      } else {
        tmp55 = cResult[16];
      }
      const GiftPromotionReminderExperiment = tmp(tmp2[21]).GiftPromotionReminderExperiment;
      enabled2 = GiftPromotionReminderExperiment.useConfig(tmp55).enabled;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = { platform: "native", location: tmp9 };
        class W {
          constructor() {
            giftPromotion = closure_6.getGiftPromotion();
            id = undefined;
            if (giftPromotion != null) {
              id = giftPromotion.id;
            }
            return id;
          }
        }
        let tmp56 = obj7;
      } else {
        tmp56 = cResult[17];
      }
      const tmpResult32 = first(premiumDiscountOffer[11]);
      const giftingBadgeCoachmarkVariant = first(premiumDiscountOffer[22]).useGiftingBadgeCoachmarkVariant(tmp56);
      if (cResult[18] !== stateFromStores2) {
        let isDismissed = null != stateFromStores2;
        if (isDismissed) {
          isDismissed = tmp(tmp2[23]).UNSAFE_isSnowflakeBoundDismissibleContentDismissed(
            tmp(tmp2[24]).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET,
            stateFromStores2,
          ).isDismissed;
          const tmpResult34 = tmp(tmp2[23]);
        }
        class W {
          constructor() {
            giftPromotion = closure_6.getGiftPromotion();
            id = undefined;
            if (giftPromotion != null) {
              id = giftPromotion.id;
            }
            return id;
          }
        }
        cResult[19] = isDismissed;
        let tmp58 = isDismissed;
      } else {
        tmp58 = cResult[19];
      }
      PlatformTypes = tmp58;
      let isDismissed2 = null != stateFromStores2;
      if (isDismissed2) {
        isDismissed2 = tmp(tmp2[23]).UNSAFE_isSnowflakeBoundDismissibleContentDismissed(
          tmp(tmp2[24]).DismissibleContent.GIFTING_PROMOTION_REMINDER,
          stateFromStores2,
        ).isDismissed;
        const tmpResult35 = tmp(tmp2[23]);
      }
      let tmp60 = null;
      const tmpResult33 = first(premiumDiscountOffer[22]);
      if (!tmp58) {
        tmp60 = stateFromStores3;
      }
      let tmp61 = null;
      if (!isDismissed2) {
        tmp61 = stateFromStores4;
      }
      const tmp8ResultResult = tmp8(premiumDiscountOffer[25])(tmp60, tmp61);
      const isGiftCoachmarkAssetReady = tmp8ResultResult.isGiftCoachmarkAssetReady;
      isGiftReminderAssetReady = tmp8ResultResult.isGiftReminderAssetReady;
      const tmp8Result = tmp8(premiumDiscountOffer[25]);
      const nitroFileUploadAnnouncementEligible = first(
        premiumDiscountOffer[26],
      ).useNitroFileUploadAnnouncementEligible(tmp9);
      const tmpResult36 = first(premiumDiscountOffer[26]);
      const nitroFileUploadUpsellEligible = first(premiumDiscountOffer[26]).useNitroFileUploadUpsellEligible(tmp9);
      const tmpResult37 = first(premiumDiscountOffer[26]);
      const shouldShowRobloxConnectionCoachmark = first(
        premiumDiscountOffer[27],
      ).useShouldShowRobloxConnectionCoachmark();
      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
        const items7 = [PlatformTypes.LEAGUE_OF_LEGENDS];
        class W {
          constructor() {
            giftPromotion = closure_6.getGiftPromotion();
            id = undefined;
            if (giftPromotion != null) {
              id = giftPromotion.id;
            }
            return id;
          }
        }
        cResult[20] = items7;
        let tmp66 = items7;
      } else {
        tmp66 = cResult[20];
      }
      if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
        const obj8 = { deprecatedPlatformTypes: tmp66 };
        class W {
          constructor() {
            giftPromotion = closure_6.getGiftPromotion();
            id = undefined;
            if (giftPromotion != null) {
              id = giftPromotion.id;
            }
            return id;
          }
        }
        let tmp68 = obj8;
      } else {
        tmp68 = cResult[21];
      }
      const tmpResult38 = first(premiumDiscountOffer[27]);
      const shouldShowConnectionDeprecationBottomSheet = first(
        premiumDiscountOffer[28],
      ).useShouldShowConnectionDeprecationBottomSheet(tmp68);
      if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
        const obj9 = { deprecatedPlatformTypes: null };
        const items8 = [];
        class W {
          constructor() {
            giftPromotion = closure_6.getGiftPromotion();
            id = undefined;
            if (giftPromotion != null) {
              id = giftPromotion.id;
            }
            return id;
          }
        }
        obj9.deprecatedPlatformTypes = items8;
        cResult[22] = obj9;
        let tmp70 = obj9;
      } else {
        tmp70 = cResult[22];
      }
      const tmpResult39 = first(premiumDiscountOffer[28]);
      const shouldShowConnectionDeprecationBottomSheet1 = first(
        premiumDiscountOffer[28],
      ).useShouldShowConnectionDeprecationBottomSheet(tmp70);
      const tmpResult40 = first(premiumDiscountOffer[28]);
      const isDisplayNameStylesFlywheelSettersEnabled = first(
        premiumDiscountOffer[29],
      ).useIsDisplayNameStylesFlywheelSettersEnabled(tmp9);
      const tmpResult41 = first(premiumDiscountOffer[29]);
      const canSet = first(premiumDiscountOffer[30]).useCustomTypingIndicatorConfig(tmp9).canSet;
      if (cResult[23] === tmp21[1]) {
        if (cResult[24] === first) {
          let tmp74 = cResult[25];
        }
        if (cResult[26] !== premiumDiscountOffer) {
          function isDiscountOfferEligible() {
            return null != premiumDiscountOffer && null == premiumDiscountOffer.expiresAt;
          }
          cResult[26] = premiumDiscountOffer;
          class W {
            constructor() {
              giftPromotion = closure_6.getGiftPromotion();
              id = undefined;
              if (giftPromotion != null) {
                id = giftPromotion.id;
              }
              return id;
            }
          }
          cResult[27] = isDiscountOfferEligible;
          let tmp75 = isDiscountOfferEligible;
        } else {
          tmp75 = cResult[27];
        }
        if (cResult[28] === enabled) {
          if (cResult[29] === premiumTrialOffer) {
            let tmp76 = cResult[30];
          }
          class W {
            constructor() {
              giftPromotion = closure_6.getGiftPromotion();
              id = undefined;
              if (giftPromotion != null) {
                id = giftPromotion.id;
              }
              return id;
            }
          }
          if (cResult[31] !== undefined) {
            let dismissibleContent;
            if (mobileBottomSheet != null) {
              dismissibleContent = mobileBottomSheet.dismissibleContent;
            }
            function isPremiumMarketingMomentAnnouncementEligible() {
              let dismissibleContent;
              if (mobileBottomSheet != null) {
                dismissibleContent = mobileBottomSheet.dismissibleContent;
              }
              return (
                dismissibleContent ===
                dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL
              );
            }
            class W {
              constructor() {
                giftPromotion = closure_6.getGiftPromotion();
                id = undefined;
                if (giftPromotion != null) {
                  id = giftPromotion.id;
                }
                return id;
              }
            }
            cResult[31] = dismissibleContent;
            cResult[32] = isPremiumMarketingMomentAnnouncementEligible;
            let tmp79 = isPremiumMarketingMomentAnnouncementEligible;
          } else {
            tmp79 = cResult[32];
          }
          let dismissibleContent1;
          if (mobileBottomSheet != null) {
            dismissibleContent1 = mobileBottomSheet.dismissibleContent;
          }
          if (cResult[33] !== dismissibleContent1) {
            let dismissibleContent2;
            if (mobileBottomSheet != null) {
              dismissibleContent2 = mobileBottomSheet.dismissibleContent;
            }
            function isPremiumMarketingMomentReminderEligible() {
              let dismissibleContent;
              if (mobileBottomSheet != null) {
                dismissibleContent = mobileBottomSheet.dismissibleContent;
              }
              return (
                dismissibleContent === dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
              );
            }
            class W {
              constructor() {
                giftPromotion = closure_6.getGiftPromotion();
                id = undefined;
                if (giftPromotion != null) {
                  id = giftPromotion.id;
                }
                return id;
              }
            }
            cResult[33] = dismissibleContent2;
            cResult[34] = isPremiumMarketingMomentReminderEligible;
            let tmp82 = isPremiumMarketingMomentReminderEligible;
          } else {
            tmp82 = cResult[34];
          }
          closure_12 = tmp84;
          closure_13 = tmp85;
          if ((cResult[35] === null) != stateFromStores3) {
            if (cResult[36] === isGiftCoachmarkAssetReady) {
              let tmp86 = cResult[37];
            }
            if (cResult[38] === stateFromStores2) {
              if (cResult[39] === enabled2) {
                if (cResult[40] === stateFromStores4) {
                  if (cResult[41] === tmp84) {
                    if (cResult[42] === tmp85) {
                      if (cResult[43] === tmp58) {
                        if (tmp15) {
                          if (cResult[47] !== tmp74) {
                            const tmp74Result = tmp74();
                            cResult[47] = tmp74;
                            class W {
                              constructor() {
                                giftPromotion = closure_6.getGiftPromotion();
                                id = undefined;
                                if (giftPromotion != null) {
                                  id = giftPromotion.id;
                                }
                                return id;
                              }
                            }
                            cResult[48] = tmp74Result;
                            let tmp89 = tmp74Result;
                          } else {
                            tmp89 = cResult[48];
                          }
                          let priceChangeId;
                          if (tmp23 != null) {
                            priceChangeId = tmp23.priceChangeId;
                          }
                          class W {
                            constructor() {
                              giftPromotion = closure_6.getGiftPromotion();
                              id = undefined;
                              if (giftPromotion != null) {
                                id = giftPromotion.id;
                              }
                              return id;
                            }
                          }
                          if (cResult[49] === Symbol.for("react.memo_cache_sentinel")) {
                            cResult[49] = {};
                            class W {
                              constructor() {
                                giftPromotion = closure_6.getGiftPromotion();
                                id = undefined;
                                if (giftPromotion != null) {
                                  id = giftPromotion.id;
                                }
                                return id;
                              }
                            }
                            const obj10 = {};
                          } else {
                            const tmp92 = cResult[49];
                          }
                          if (cResult[50] === tmp89) {
                            const tmp75Result = tmp75();
                            class W {
                              constructor() {
                                giftPromotion = closure_6.getGiftPromotion();
                                id = undefined;
                                if (giftPromotion != null) {
                                  id = giftPromotion.id;
                                }
                                return id;
                              }
                            }
                            if (cResult[53] !== premiumDiscountOffer) {
                              if (null != premiumDiscountOffer) {
                                const obj11 = { userDiscountOffer: premiumDiscountOffer };
                                let obj12 = obj11;
                              } else {
                                obj12 = {};
                              }
                              cResult[53] = premiumDiscountOffer;
                              class W {
                                constructor() {
                                  giftPromotion = closure_6.getGiftPromotion();
                                  id = undefined;
                                  if (giftPromotion != null) {
                                    id = giftPromotion.id;
                                  }
                                  return id;
                                }
                              }
                              cResult[54] = obj12;
                            } else {
                              if (cResult[55] === tmp75Result) {
                                if (cResult[56] === tmp95) {
                                  if (cResult[59] !== tmp76) {
                                    const tmp76Result = tmp76();
                                    cResult[59] = tmp76;
                                    class W {
                                      constructor() {
                                        giftPromotion = closure_6.getGiftPromotion();
                                        id = undefined;
                                        if (giftPromotion != null) {
                                          id = giftPromotion.id;
                                        }
                                        return id;
                                      }
                                    }
                                    cResult[60] = tmp76Result;
                                    let tmp99 = tmp76Result;
                                  } else {
                                    tmp99 = cResult[60];
                                  }
                                  class W {
                                    constructor() {
                                      giftPromotion = closure_6.getGiftPromotion();
                                      id = undefined;
                                      if (giftPromotion != null) {
                                        id = giftPromotion.id;
                                      }
                                      return id;
                                    }
                                  }
                                  if (cResult[61] !== premiumTrialOffer) {
                                    if (null != premiumTrialOffer) {
                                      const obj13 = { userTrialOffer: premiumTrialOffer };
                                      let obj14 = obj13;
                                    } else {
                                      obj14 = {};
                                    }
                                    cResult[61] = premiumTrialOffer;
                                    class W {
                                      constructor() {
                                        giftPromotion = closure_6.getGiftPromotion();
                                        id = undefined;
                                        if (giftPromotion != null) {
                                          id = giftPromotion.id;
                                        }
                                        return id;
                                      }
                                    }
                                    cResult[62] = obj14;
                                  } else {
                                    if (cResult[63] === tmp99) {
                                      if (cResult[64] === tmp101) {
                                        const tmp79Result = tmp79();
                                        class W {
                                          constructor() {
                                            giftPromotion = closure_6.getGiftPromotion();
                                            id = undefined;
                                            if (giftPromotion != null) {
                                              id = giftPromotion.id;
                                            }
                                            return id;
                                          }
                                        }
                                        let id;
                                        if (promotionMarketingComponent != null) {
                                          id = promotionMarketingComponent.id;
                                        }
                                        let promotionId;
                                        if (promotionMarketingComponent != null) {
                                          promotionId = promotionMarketingComponent.promotionId;
                                        }
                                        if (cResult[67] === mobileBottomSheet) {
                                          if (cResult[68] === id) {
                                            if (cResult[69] === promotionId) {
                                              let tmp109 = cResult[70];
                                            }
                                            if (cResult[71] === tmp79Result) {
                                              if (cResult[72] === tmp106) {
                                                const tmp82Result = tmp82();
                                                class W {
                                                  constructor() {
                                                    giftPromotion = closure_6.getGiftPromotion();
                                                    id = undefined;
                                                    if (giftPromotion != null) {
                                                      id = giftPromotion.id;
                                                    }
                                                    return id;
                                                  }
                                                }
                                                let id1;
                                                if (promotionMarketingComponent != null) {
                                                  id1 = promotionMarketingComponent.id;
                                                }
                                                let promotionId1;
                                                if (promotionMarketingComponent != null) {
                                                  promotionId1 = promotionMarketingComponent.promotionId;
                                                }
                                                if (cResult[75] === mobileBottomSheet) {
                                                  if (cResult[76] === id1) {
                                                    if (cResult[77] === promotionId1) {
                                                      let tmp115 = cResult[78];
                                                    }
                                                    if (cResult[79] === tmp82Result) {
                                                      if (cResult[80] === tmp112) {
                                                        if (cResult[83] !== tmp86) {
                                                          const tmp86Result = tmp86();
                                                          cResult[83] = tmp86;
                                                          class W {
                                                            constructor() {
                                                              giftPromotion = closure_6.getGiftPromotion();
                                                              id = undefined;
                                                              if (giftPromotion != null) {
                                                                id = giftPromotion.id;
                                                              }
                                                              return id;
                                                            }
                                                          }
                                                          cResult[84] = tmp86Result;
                                                          let tmp117 = tmp86Result;
                                                        } else {
                                                          tmp117 = cResult[84];
                                                        }
                                                        if (cResult[85] !== stateFromStores3) {
                                                          const obj15 = { coachmarkComponent: stateFromStores3 };
                                                          class W {
                                                            constructor() {
                                                              giftPromotion = closure_6.getGiftPromotion();
                                                              id = undefined;
                                                              if (giftPromotion != null) {
                                                                id = giftPromotion.id;
                                                              }
                                                              return id;
                                                            }
                                                          }
                                                          cResult[86] = obj15;
                                                          let tmp119 = obj15;
                                                        } else {
                                                          tmp119 = cResult[86];
                                                        }
                                                        class W {
                                                          constructor() {
                                                            giftPromotion = closure_6.getGiftPromotion();
                                                            id = undefined;
                                                            if (giftPromotion != null) {
                                                              id = giftPromotion.id;
                                                            }
                                                            return id;
                                                          }
                                                        }
                                                        const obj16 = {
                                                          isEligible: tmp117,
                                                          newSnowflakeId: stateFromStores2,
                                                          actionSheetProperties: tmp119,
                                                        };
                                                        cResult[87] = stateFromStores2;
                                                        cResult[88] = tmp117;
                                                        cResult[89] = tmp119;
                                                        cResult[90] = obj16;
                                                      }
                                                    }
                                                    const obj17 = {
                                                      isEligible: null,
                                                      newSnowflakeId: null,
                                                      actionSheetProperties: null,
                                                    };
                                                    class W {
                                                      constructor() {
                                                        giftPromotion = closure_6.getGiftPromotion();
                                                        id = undefined;
                                                        if (giftPromotion != null) {
                                                          id = giftPromotion.id;
                                                        }
                                                        return id;
                                                      }
                                                    }
                                                    obj17.newSnowflakeId = tmp112;
                                                    obj17.actionSheetProperties = tmp115;
                                                    cResult[79] = tmp82Result;
                                                    cResult[80] = tmp112;
                                                    cResult[81] = tmp115;
                                                    cResult[82] = obj17;
                                                  }
                                                }
                                                const obj18 = {
                                                  bottomSheetData: mobileBottomSheet,
                                                  componentId: id1,
                                                  promotionId: promotionId1,
                                                };
                                                cResult[75] = mobileBottomSheet;
                                                cResult[76] = id1;
                                                cResult[77] = promotionId1;
                                                cResult[78] = obj18;
                                                tmp115 = obj18;
                                              }
                                            }
                                            const obj19 = {
                                              isEligible: null,
                                              newSnowflakeId: null,
                                              actionSheetProperties: null,
                                            };
                                            class W {
                                              constructor() {
                                                giftPromotion = closure_6.getGiftPromotion();
                                                id = undefined;
                                                if (giftPromotion != null) {
                                                  id = giftPromotion.id;
                                                }
                                                return id;
                                              }
                                            }
                                            obj19.newSnowflakeId = tmp106;
                                            obj19.actionSheetProperties = tmp109;
                                            cResult[71] = tmp79Result;
                                            cResult[72] = tmp106;
                                            cResult[73] = tmp109;
                                            cResult[74] = obj19;
                                          }
                                        }
                                        const obj20 = {
                                          bottomSheetData: mobileBottomSheet,
                                          componentId: id,
                                          promotionId,
                                        };
                                        cResult[67] = mobileBottomSheet;
                                        cResult[68] = id;
                                        cResult[69] = promotionId;
                                        cResult[70] = obj20;
                                        tmp109 = obj20;
                                      }
                                    }
                                    const obj21 = {
                                      isEligible: null,
                                      newSnowflakeId: null,
                                      actionSheetProperties: null,
                                    };
                                    class W {
                                      constructor() {
                                        giftPromotion = closure_6.getGiftPromotion();
                                        id = undefined;
                                        if (giftPromotion != null) {
                                          id = giftPromotion.id;
                                        }
                                        return id;
                                      }
                                    }
                                    obj21.newSnowflakeId = tmp101;
                                    obj21.actionSheetProperties = cResult[62];
                                    cResult[63] = tmp99;
                                    cResult[64] = tmp101;
                                    cResult[65] = cResult[62];
                                    cResult[66] = obj21;
                                  }
                                }
                              }
                              const obj22 = { isEligible: null, newSnowflakeId: null, actionSheetProperties: null };
                              class W {
                                constructor() {
                                  giftPromotion = closure_6.getGiftPromotion();
                                  id = undefined;
                                  if (giftPromotion != null) {
                                    id = giftPromotion.id;
                                  }
                                  return id;
                                }
                              }
                              obj22.newSnowflakeId = tmp95;
                              obj22.actionSheetProperties = cResult[54];
                              cResult[55] = tmp75Result;
                              cResult[56] = tmp95;
                              cResult[57] = cResult[54];
                              cResult[58] = obj22;
                            }
                          }
                          const obj23 = {
                            isEligible: tmp89,
                            newSnowflakeId: priceChangeId,
                            actionSheetProperties: tmp92,
                          };
                          cResult[50] = tmp89;
                          cResult[51] = priceChangeId;
                          cResult[52] = obj23;
                        } else {
                          const _Symbol = Symbol;
                          if (cResult[46] === Symbol.for("react.memo_cache_sentinel")) {
                            cResult[46] = {};
                            class W {
                              constructor() {
                                giftPromotion = closure_6.getGiftPromotion();
                                id = undefined;
                                if (giftPromotion != null) {
                                  id = giftPromotion.id;
                                }
                                return id;
                              }
                            }
                            const obj24 = {};
                          }
                          class W {
                            constructor() {
                              giftPromotion = closure_6.getGiftPromotion();
                              id = undefined;
                              if (giftPromotion != null) {
                                id = giftPromotion.id;
                              }
                              return id;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            function isGiftingPromotionReminderEligible() {
              let tmp = !closure_12;
              if (closure_12) {
                tmp = !closure_13;
              }
              let tmp3 = !tmp;
              if (!tmp) {
                let tmp6 = null != stateFromStores2;
                if (tmp6) {
                  let tmp8 = closure_9;
                  if (tmp8) {
                    let tmp9 = enabled2;
                    if (enabled2) {
                      tmp9 = null != stateFromStores4;
                    }
                    if (tmp9) {
                      tmp9 = isGiftReminderAssetReady;
                    }
                    tmp8 = tmp9;
                  }
                  tmp6 = tmp8;
                }
                tmp3 = tmp6;
              }
              return tmp3;
            }
            class W {
              constructor() {
                giftPromotion = closure_6.getGiftPromotion();
                id = undefined;
                if (giftPromotion != null) {
                  id = giftPromotion.id;
                }
                return id;
              }
            }
            cResult[38] = stateFromStores2;
            cResult[39] = enabled2;
            cResult[40] = stateFromStores4;
            cResult[41] = tmp84;
            cResult[42] = tmp85;
            cResult[43] = tmp58;
            cResult[44] = isGiftReminderAssetReady;
            cResult[45] = isGiftingPromotionReminderEligible;
          }
          function isGiftingPromotionFirstTimeEligible() {
            let tmp = closure_12;
            if (closure_12) {
              tmp = isGiftCoachmarkAssetReady;
            }
            return tmp;
          }
          cResult[35] = null != stateFromStores3;
          cResult[36] = isGiftCoachmarkAssetReady;
          cResult[37] = isGiftingPromotionFirstTimeEligible;
          tmp86 = isGiftingPromotionFirstTimeEligible;
        }
        class W {
          constructor() {
            giftPromotion = closure_6.getGiftPromotion();
            id = undefined;
            if (giftPromotion != null) {
              id = giftPromotion.id;
            }
            return id;
          }
        }
        cResult[28] = enabled;
        cResult[29] = premiumTrialOffer;
        cResult[30] = tmp77;
        tmp76 = tmp77;
      }
      function isGooglePlayPriceChangeEligible() {
        let tmp = first;
        if (first) {
          tmp = null != closure_1;
        }
        return tmp;
      }
      cResult[23] = tmp21[1];
      cResult[24] = first;
      cResult[25] = isGooglePlayPriceChangeEligible;
      tmp74 = isGooglePlayPriceChangeEligible;
      const tmpResult42 = first(premiumDiscountOffer[30]);
    }
  : function useMainViewTooltipActionSheetMap() {
      let items = [UserSettingsProtoStore];
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
        const items = [,];
        ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = GooglePlayPriceChangeStore);
        return items;
      });
      const tmp7 = _slicedToArray(
        initialize.useStateFromStoresArray(items2, () => {
          const items = [,];
          ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = GooglePlayPriceChangeStore);
          return items;
        }),
        2,
      );
      const premiumDiscountOffer = usePremiumDiscountOffer.usePremiumDiscountOffer();
      const tmpResult21 = usePremiumDiscountOffer;
      const isEligibleSenderForReferralProgram =
        useIsEligibleSenderForReferralProgram.useIsEligibleSenderForReferralProgram();
      const tmpResult22 = useIsEligibleSenderForReferralProgram;
      const items3 = [ReferralTrialStore];
      const tmpResult23 = initialize;
      [tmp13, tmp14] = initialize.useStateFromStoresArray(items3, () => {
        const items = [
          ReferralTrialStore.getReferralsRemaining({ bypassFetch: true }),
          ReferralTrialStore.getReminderStateId(),
        ];
        return items;
      });
      const RecurringReferralReminderExperiment =
        RecurringReferralReminderExperiment2.RecurringReferralReminderExperiment;
      let bottomSheetEnabled = RecurringReferralReminderExperiment.useConfig({
        location: MainViewTooltipActionSheets,
      }).bottomSheetEnabled;
      const tmp12 = _slicedToArray(
        initialize.useStateFromStoresArray(items3, () => {
          const items = [
            ReferralTrialStore.getReferralsRemaining({ bypassFetch: true }),
            ReferralTrialStore.getReminderStateId(),
          ];
          return items;
        }),
        2,
      );
      const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
      const PremiumTrialOfferActionSheetKillSwitchExperiment =
        PremiumTrialOfferActionSheetKillSwitchExperiment2.PremiumTrialOfferActionSheetKillSwitchExperiment;
      const tmpResult24 = usePremiumTrialOffer;
      const promotionMarketingComponent = usePromotionMarketingComponent.usePromotionMarketingComponent(
        MarketingComponentType.MarketingComponentType.MOBILE_BOTTOM_SHEET,
      );
      let oneofKind;
      if (promotionMarketingComponent != null) {
        oneofKind = promotionMarketingComponent.properties.properties.oneofKind;
      }
      let mobileBottomSheet = null;
      if ("mobileBottomSheet" === oneofKind) {
        mobileBottomSheet = promotionMarketingComponent.properties.properties.mobileBottomSheet;
      }
      const tmpResult25 = usePromotionMarketingComponent;
      const items4 = [PromotionsStore];
      const stateFromStores2 = initialize.useStateFromStores(items4, () => {
        const giftPromotion = PromotionsStore.getGiftPromotion();
        let id;
        if (giftPromotion != null) {
          id = giftPromotion.id;
        }
        return id;
      });
      const tmpResult26 = initialize;
      const items5 = [PromotionsStore];
      const stateFromStores3 = initialize.useStateFromStores(items5, () => {
        const marketingComponentByType = PromotionsStore.getMarketingComponentByType(
          MarketingComponentType.MarketingComponentType.GIFT_ICON_COACHMARK,
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
      const tmpResult27 = initialize;
      const items6 = [PromotionsStore];
      const stateFromStores4 = initialize.useStateFromStores(items6, () => {
        const marketingComponentByType = PromotionsStore.getMarketingComponentByType(
          MarketingComponentType.MarketingComponentType.GIFT_REMINDER_COACHMARK,
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
      const GiftPromotionReminderExperiment = GiftPromotionReminderExperiment2.GiftPromotionReminderExperiment;
      let enabled = GiftPromotionReminderExperiment.useConfig({ location: MainViewTooltipActionSheets }).enabled;
      const tmpResult28 = initialize;
      const giftingBadgeCoachmarkVariant = GiftingBadgesUtils.useGiftingBadgeCoachmarkVariant({
        platform: "native",
        location: MainViewTooltipActionSheets,
      });
      let isDismissed = null != stateFromStores2;
      if (isDismissed) {
        isDismissed = DismissibleContentUnsafeUtils.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(
          dismissible_content.DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET,
          stateFromStores2,
        ).isDismissed;
        const tmpResult30 = DismissibleContentUnsafeUtils;
      }
      let isDismissed2 = null != stateFromStores2;
      if (isDismissed2) {
        isDismissed2 = DismissibleContentUnsafeUtils.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(
          dismissible_content.DismissibleContent.GIFTING_PROMOTION_REMINDER,
          stateFromStores2,
        ).isDismissed;
        const tmpResult31 = DismissibleContentUnsafeUtils;
      }
      let tmp24 = null;
      const tmpResult29 = GiftingBadgesUtils;
      if (!isDismissed) {
        tmp24 = stateFromStores3;
      }
      let tmp25 = null;
      if (!isDismissed2) {
        tmp25 = stateFromStores4;
      }
      const tmp4Result = useGiftingPromotionAssetsReadyDefault;
      ({ isGiftCoachmarkAssetReady, isGiftReminderAssetReady } = useGiftingPromotionAssetsReadyDefault(tmp24, tmp25));
      const tmp4ResultResult = useGiftingPromotionAssetsReadyDefault(tmp24, tmp25);
      const nitroFileUploadAnnouncementEligible =
        useNitroFileUploadMarketingEligible.useNitroFileUploadAnnouncementEligible(MainViewTooltipActionSheets);
      const tmpResult32 = useNitroFileUploadMarketingEligible;
      const nitroFileUploadUpsellEligible =
        useNitroFileUploadMarketingEligible.useNitroFileUploadUpsellEligible(MainViewTooltipActionSheets);
      const tmpResult33 = useNitroFileUploadMarketingEligible;
      const items7 = [,];
      ({ LEAGUE_OF_LEGENDS: arr8[0], RIOT_GAMES: arr8[1] } = PlatformTypes);
      const shouldShowRobloxConnectionCoachmark = RobloxConnectionCoachmark.useShouldShowRobloxConnectionCoachmark();
      const tmpResult34 = RobloxConnectionCoachmark;
      const shouldShowConnectionDeprecationBottomSheet =
        ConnectionDeprecationBottomSheet.useShouldShowConnectionDeprecationBottomSheet({
          deprecatedPlatformTypes: items7,
        });
      const tmpResult35 = ConnectionDeprecationBottomSheet;
      const obj5 = { deprecatedPlatformTypes: null };
      const items8 = [PlatformTypes.BATTLENET];
      obj5.deprecatedPlatformTypes = items8;
      const shouldShowConnectionDeprecationBottomSheet1 =
        ConnectionDeprecationBottomSheet.useShouldShowConnectionDeprecationBottomSheet(obj5);
      const tmpResult36 = ConnectionDeprecationBottomSheet;
      const isDisplayNameStylesFlywheelSettersEnabled =
        DisplayNameStylesFlywheelExperiment.useIsDisplayNameStylesFlywheelSettersEnabled(MainViewTooltipActionSheets);
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
        let tmp39 = null != premiumDiscountOffer;
        if (tmp39) {
          tmp39 = null == premiumDiscountOffer.expiresAt;
        }
        const obj8 = { isEligible: tmp39, newSnowflakeId: null, actionSheetProperties: null };
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
          hasItem = !PremiumTrialOfferActionSheetKillSwitchExperiment.useConfig({
            location: MainViewTooltipActionSheets,
          }).enabled;
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
        const obj14 = {
          isEligible:
            dismissibleContent === dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL,
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
        obj6[dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL] = obj14;
        let dismissibleContent1;
        if (mobileBottomSheet != null) {
          dismissibleContent1 = mobileBottomSheet.dismissibleContent;
        }
        const obj16 = {
          isEligible:
            dismissibleContent1 === dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL,
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
        obj6[dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL] = obj16;
        let tmp52 = tmp36;
        if (tmp36) {
          tmp52 = isGiftCoachmarkAssetReady;
        }
        const obj18 = { isEligible: tmp52, newSnowflakeId: stateFromStores2, actionSheetProperties: null };
        const obj19 = { coachmarkComponent: stateFromStores3 };
        obj18.actionSheetProperties = obj19;
        obj6[dismissible_content.DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET] = obj18;
        let tmp53 = !tmp36;
        if (tmp36) {
          tmp53 = null == stateFromStores4;
        }
        let tmp54 = !tmp53;
        if (!tmp53) {
          let tmp55 = null != stateFromStores2;
          if (tmp55) {
            let tmp56 = isDismissed;
            if (tmp56) {
              if (enabled) {
                enabled = null != stateFromStores4;
              }
              if (enabled) {
                enabled = isGiftReminderAssetReady;
              }
              tmp56 = enabled;
            }
            tmp55 = tmp56;
          }
          tmp54 = tmp55;
        }
        const obj20 = { isEligible: tmp54, newSnowflakeId: stateFromStores2, actionSheetProperties: null };
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
        const obj28 = { platformTypes: items7 };
        obj27.actionSheetProperties = obj28;
        obj6[dismissible_content.DismissibleContent.RIOT_CONNECTION_DEPRECATION_DISABLE] = obj27;
        const obj29 = { isEligible: shouldShowConnectionDeprecationBottomSheet1, actionSheetProperties: null };
        const obj30 = { platformTypes: null };
        const items9 = [PlatformTypes.BATTLENET];
        obj30.platformTypes = items9;
        obj29.actionSheetProperties = obj30;
        obj6[dismissible_content.DismissibleContent.BATTLENET_CONNECTION_DEPRECATION_DISABLE] = obj29;
        const obj31 = { isEligible: true, actionSheetProperties: {} };
        obj6[dismissible_content.DismissibleContent.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT] = obj31;
        const obj32 = { isEligible: nitroFileUploadAnnouncementEligible, actionSheetProperties: {} };
        obj6[dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_ANNOUNCEMENT] = obj32;
        const obj33 = { isEligible: nitroFileUploadUpsellEligible, actionSheetProperties: {} };
        obj6[dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_UPSELL] = obj33;
        const obj34 = { isEligible: tmp35, actionSheetProperties: {} };
        obj6[dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_COACHMARK] = obj34;
        if (bottomSheetEnabled) {
          bottomSheetEnabled = isEligibleSenderForReferralProgram;
        }
        if (bottomSheetEnabled) {
          bottomSheetEnabled = null != tmp13;
        }
        if (bottomSheetEnabled) {
          bottomSheetEnabled = tmp13 > 0;
        }
        if (bottomSheetEnabled) {
          bottomSheetEnabled = null != tmp14;
        }
        const obj35 = { isEligible: bottomSheetEnabled, newSnowflakeId: tmp14, actionSheetProperties: {} };
        obj6[dismissible_content.DismissibleContent.MOBILE_REFERRAL_PROGRAM_BOTTOM_SHEET_ENTRYPOINT] = obj35;
        let tmp37 = obj6;
      } else {
        tmp37 = obj6;
      }
      return tmp37;
    };
