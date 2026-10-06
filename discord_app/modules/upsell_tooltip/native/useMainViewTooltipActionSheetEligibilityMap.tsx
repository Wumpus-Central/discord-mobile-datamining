// discord_app/modules/upsell_tooltip/native/useMainViewTooltipActionSheetEligibilityMap.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import Constants from "../../../Constants.tsx";
import UserSettingsConstants from "../../user_settings/UserSettingsConstants.tsx";
import MetaQuestUtils from "../../device/MetaQuestUtils.android.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import usePremiumTrialOffer from "../../premium/hooks/usePremiumTrialOffer.android.tsx";
import usePremiumDiscountOffer from "../../premium/hooks/usePremiumDiscountOffer.android.tsx";
import DisplayNameStylesFlywheelExperiment from "../../display_name_styles/DisplayNameStylesFlywheelExperiment.tsx";
import GiftPromotionReminderExperiment2 from "../../premium/gifting/experiments/GiftPromotionReminderExperiment.tsx";
import MarketingComponentType from "../../../../discord_common/js/shared/shared-constants/MarketingComponentType.tsx";
import GiftingBadgesUtils from "../../premium/gifting/GiftingBadgesUtils.tsx";
import CustomTypingIndicatorExperiment from "../../custom_typing_indicator/CustomTypingIndicatorExperiment.tsx";
import usePromotionMarketingComponent from "../../premium/hooks/usePromotionMarketingComponent.tsx";
import RobloxConnectionCoachmark from "../../local_app_detection/native/RobloxConnectionCoachmark.tsx";
import ConnectionDeprecationBottomSheet from "../../application_account_linking/native/ConnectionDeprecationBottomSheet.tsx";
import MainViewTooltipActionSheetsDisabledExperimentDefault from "../experiments/MainViewTooltipActionSheetsDisabledExperiment.tsx";
import PremiumTrialOfferActionSheetKillSwitchExperiment2 from "../../premium/experiments/PremiumTrialOfferActionSheetKillSwitchExperiment.tsx";
import useGiftingPromotionAssetsReadyDefault from "../../premium/gifting/native/hooks/useGiftingPromotionAssetsReady.tsx";
import useNitroFileUploadMarketingEligible from "../../premium/file_upload/useNitroFileUploadMarketingEligible.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import GooglePlayPriceChangeStore from "../../premium/native/google_play_price_changes/GooglePlayPriceChangeStore.tsx";
import PromotionsStore from "../../premium/promotions/PromotionsStore.tsx";
import UserSettingsProtoStore from "../../user_settings/UserSettingsProtoStore.tsx";
import UserRequiredActionStore from "../../../stores/UserRequiredActionStore.tsx";
import PremiumConstants from "../../premium/PremiumConstants.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let closure_12, importDefault;

let PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID;
let PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID;
let PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID;
let PREMIUM_TIER_2_REACTIVATION_TRIAL_ID;
const PlatformTypes = Constants.PlatformTypes;
({
  PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID,
  PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID,
  PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID,
  PREMIUM_TIER_2_REACTIVATION_TRIAL_ID,
} = PremiumConstants);
let UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
const MainViewTooltipActionSheets = "MainViewTooltipActionSheets";
let items = [
  PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID,
  PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID,
  PREMIUM_TIER_2_REACTIVATION_TRIAL_ID,
  PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID,
];
const set = new Set(items);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_1;
      let enabled;
      let first;
      let isGiftCoachmarkAssetReady;
      let items7;
      let premiumDiscountOffer;
      let premiumTrialOffer;
      let stateFromStores2;
      let stateFromStores4;
      let tmp10;
      let tmp11;
      let tmp15;
      let tmp16;
      let tmp24;
      let tmp28;
      let tmp29;
      let tmp32;
      let tmp33;
      let tmp37;
      let tmp38;
      let tmp4;
      let tmp41;
      let tmp42;
      let tmp44;
      let tmp5;
      let tmp52;
      let tmp54;
      let tmp56;
      let tmp = first;
      const obj = first(premiumDiscountOffer[9]);
      const cResult = obj.c(140);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let tmp6 = stateFromStores2;
        let items = [stateFromStores2];
        class S {
          constructor() {
            return stateFromStores2.hasLoaded(constants.PRELOADED_USER_SETTINGS);
          }
        }
        cResult[0] = items;
        cResult[1] = S;
        tmp4 = items;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = tmp(premiumDiscountOffer[10]);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, S);
      let tmp8 = importDefault;
      let tmp9 = isGiftCoachmarkAssetReady;
      const obj2 = { location: isGiftCoachmarkAssetReady };
      const obj3 = require("MainViewTooltipActionSheetsDisabledExperiment");
      const disabled = obj3.getConfig(obj2).disabled;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [stateFromStores4];
        class C {
          constructor() {
            return stateFromStores4.hasAction();
          }
        }
        cResult[2] = items1;
        cResult[3] = C;
        tmp11 = C;
        tmp10 = items1;
      } else {
        tmp10 = cResult[2];
        tmp11 = cResult[3];
      }
      let tmp14 = stateFromStores;
      const tmpResult20 = tmp(premiumDiscountOffer[10]);
      const stateFromStores1 = tmpResult20.useStateFromStores(tmp10, tmp11);
      if (stateFromStores) {
        tmp14 = !disabled;
      }
      if (tmp14) {
        tmp14 = !stateFromStores1;
      }
      if (tmp14) {
        const tmpResult21 = tmp(premiumDiscountOffer[12]);
        tmp14 = !tmpResult21.isMetaQuest();
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [enabled];
        class C {
          constructor() {
            return stateFromStores4.hasAction();
          }
        }
        cResult[4] = items2;
        cResult[5] = tmp18;
        tmp16 = tmp18;
        tmp15 = items2;
      } else {
        tmp15 = cResult[4];
        tmp16 = cResult[5];
      }
      const tmpResult22 = tmp(premiumDiscountOffer[10]);
      const tmp19 = premiumTrialOffer(tmpResult22.useStateFromStoresArray(tmp15, tmp16), 2);
      first = tmp19[0];
      importDefault = tmp21;
      const tmpResult23 = tmp(premiumDiscountOffer[13]);
      premiumDiscountOffer = tmpResult23.usePremiumDiscountOffer();
      const tmpResult24 = tmp(premiumDiscountOffer[14]);
      premiumTrialOffer = tmpResult24.usePremiumTrialOffer();
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { location: tmp9 };
        class C {
          constructor() {
            return stateFromStores4.hasAction();
          }
        }
        tmp24 = obj4;
      } else {
        tmp24 = cResult[6];
      }
      const PremiumTrialOfferActionSheetKillSwitchExperiment = tmp(
        tmp2[15],
      ).PremiumTrialOfferActionSheetKillSwitchExperiment;
      enabled = PremiumTrialOfferActionSheetKillSwitchExperiment.useConfig(tmp24).enabled;
      const tmpResult25 = tmp(premiumDiscountOffer[16]);
      const promotionMarketingComponent = tmpResult25.usePromotionMarketingComponent(
        tmp(tmp2[17]).MarketingComponentType.MOBILE_BOTTOM_SHEET,
      );
      let oneofKind;
      if (promotionMarketingComponent != null) {
        oneofKind = promotionMarketingComponent.properties.properties.oneofKind;
      }
      let mobileBottomSheet = null;
      if ("mobileBottomSheet" === oneofKind) {
        mobileBottomSheet = promotionMarketingComponent.properties.properties.mobileBottomSheet;
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [mobileBottomSheet];
        class U {
          constructor() {
            const giftPromotion = mobileBottomSheet.getGiftPromotion();
            let id;
            if (giftPromotion != null) {
              id = giftPromotion.id;
            }
            return id;
          }
        }
        cResult[7] = items3;
        cResult[8] = U;
        tmp29 = U;
        tmp28 = items3;
      } else {
        tmp28 = cResult[7];
        tmp29 = cResult[8];
      }
      const tmpResult26 = tmp(premiumDiscountOffer[10]);
      stateFromStores2 = tmpResult26.useStateFromStores(tmp28, tmp29);
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const items4 = [mobileBottomSheet];
        class U {
          constructor() {
            const giftPromotion = mobileBottomSheet.getGiftPromotion();
            let id;
            if (giftPromotion != null) {
              id = giftPromotion.id;
            }
            return id;
          }
        }
        cResult[9] = tmp35;
        cResult[10] = items4;
        tmp33 = items4;
        tmp32 = tmp35;
      } else {
        tmp32 = cResult[9];
        tmp33 = cResult[10];
      }
      const tmpResult27 = tmp(premiumDiscountOffer[10]);
      const stateFromStores3 = tmpResult27.useStateFromStores(tmp33, tmp32);
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const items5 = [mobileBottomSheet];
        class Y {
          constructor() {
            const marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(
              first(premiumDiscountOffer[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK,
            );
            let prop = null;
            if (null != marketingComponentByType) {
              prop = null;
              if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
              }
            }
            return prop;
          }
        }
        cResult[11] = items5;
        cResult[12] = Y;
        tmp38 = Y;
        tmp37 = items5;
      } else {
        tmp37 = cResult[11];
        tmp38 = cResult[12];
      }
      const tmpResult28 = tmp(premiumDiscountOffer[10]);
      stateFromStores4 = tmpResult28.useStateFromStores(tmp37, tmp38);
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { location: tmp9 };
        class Y {
          constructor() {
            const marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(
              first(premiumDiscountOffer[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK,
            );
            let prop = null;
            if (null != marketingComponentByType) {
              prop = null;
              if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
              }
            }
            return prop;
          }
        }
        tmp41 = obj5;
      } else {
        tmp41 = cResult[13];
      }
      const GiftPromotionReminderExperiment = tmp(tmp2[18]).GiftPromotionReminderExperiment;
      const enabled2 = GiftPromotionReminderExperiment.useConfig(tmp41).enabled;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { platform: "native", location: tmp9 };
        class Y {
          constructor() {
            const marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(
              first(premiumDiscountOffer[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK,
            );
            let prop = null;
            if (null != marketingComponentByType) {
              prop = null;
              if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
              }
            }
            return prop;
          }
        }
        tmp42 = obj6;
      } else {
        tmp42 = cResult[14];
      }
      const tmpResult29 = tmp(premiumDiscountOffer[19]);
      const giftingBadgeCoachmarkVariant = tmpResult29.useGiftingBadgeCoachmarkVariant(tmp42);
      if (cResult[15] !== stateFromStores2) {
        let isDismissed = null != stateFromStores2;
        if (isDismissed) {
          const tmpResult30 = tmp(premiumDiscountOffer[20]);
          isDismissed = tmpResult30.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(
            tmp(tmp2[21]).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET,
            stateFromStores2,
          ).isDismissed;
        }
        class Y {
          constructor() {
            const marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(
              first(premiumDiscountOffer[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK,
            );
            let prop = null;
            if (null != marketingComponentByType) {
              prop = null;
              if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
              }
            }
            return prop;
          }
        }
        cResult[16] = isDismissed;
        tmp44 = isDismissed;
      } else {
        tmp44 = cResult[16];
      }
      UserSettingsTypes = tmp44;
      let isDismissed2 = null != stateFromStores2;
      if (isDismissed2) {
        const tmpResult31 = tmp(premiumDiscountOffer[20]);
        isDismissed2 = tmpResult31.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(
          tmp(tmp2[21]).DismissibleContent.GIFTING_PROMOTION_REMINDER,
          stateFromStores2,
        ).isDismissed;
      }
      let tmp46 = null;
      const tmp8Result = tmp8(premiumDiscountOffer[22]);
      if (!tmp44) {
        tmp46 = stateFromStores3;
      }
      let tmp47 = null;
      if (!isDismissed2) {
        tmp47 = stateFromStores4;
      }
      const tmp8ResultResult = tmp8Result(tmp46, tmp47);
      isGiftCoachmarkAssetReady = tmp8ResultResult.isGiftCoachmarkAssetReady;
      const isGiftReminderAssetReady = tmp8ResultResult.isGiftReminderAssetReady;
      const tmpResult32 = tmp(premiumDiscountOffer[23]);
      const nitroFileUploadAnnouncementEligible = tmpResult32.useNitroFileUploadAnnouncementEligible(tmp9);
      const tmpResult33 = tmp(premiumDiscountOffer[23]);
      const nitroFileUploadUpsellEligible = tmpResult33.useNitroFileUploadUpsellEligible(tmp9);
      const tmpResult34 = tmp(premiumDiscountOffer[24]);
      const shouldShowRobloxConnectionCoachmark = tmpResult34.useShouldShowRobloxConnectionCoachmark();
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const items6 = [enabled2.LEAGUE_OF_LEGENDS];
        class Y {
          constructor() {
            const marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(
              first(premiumDiscountOffer[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK,
            );
            let prop = null;
            if (null != marketingComponentByType) {
              prop = null;
              if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
              }
            }
            return prop;
          }
        }
        cResult[17] = items6;
        tmp52 = items6;
      } else {
        tmp52 = cResult[17];
      }
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = { deprecatedPlatformTypes: tmp52 };
        class Y {
          constructor() {
            const marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(
              first(premiumDiscountOffer[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK,
            );
            let prop = null;
            if (null != marketingComponentByType) {
              prop = null;
              if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
              }
            }
            return prop;
          }
        }
        tmp54 = obj7;
      } else {
        tmp54 = cResult[18];
      }
      const tmpResult35 = tmp(premiumDiscountOffer[25]);
      const shouldShowConnectionDeprecationBottomSheet =
        tmpResult35.useShouldShowConnectionDeprecationBottomSheet(tmp54);
      if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
        const obj8 = { deprecatedPlatformTypes: items7 };
        items7 = [];
        class Y {
          constructor() {
            const marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(
              first(premiumDiscountOffer[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK,
            );
            let prop = null;
            if (null != marketingComponentByType) {
              prop = null;
              if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
              }
            }
            return prop;
          }
        }
        cResult[19] = obj8;
        tmp56 = obj8;
      } else {
        tmp56 = cResult[19];
      }
      const tmpResult36 = tmp(premiumDiscountOffer[25]);
      const shouldShowConnectionDeprecationBottomSheet1 =
        tmpResult36.useShouldShowConnectionDeprecationBottomSheet(tmp56);
      const tmpResult37 = tmp(premiumDiscountOffer[26]);
      const isDisplayNameStylesFlywheelSettersEnabled = tmpResult37.useIsDisplayNameStylesFlywheelSettersEnabled(tmp9);
      const tmpResult38 = tmp(premiumDiscountOffer[27]);
      const canSet = tmpResult38.useCustomTypingIndicatorConfig(tmp9).canSet;
      if (cResult[20] === tmp19[1]) {
        let tmp60;
        let tmp61;
        if (cResult[21] === first) {
          tmp60 = cResult[22];
        }
        if (cResult[23] !== premiumDiscountOffer) {
          function ce() {
            return null != premiumDiscountOffer && null == premiumDiscountOffer.expiresAt;
          }
          cResult[23] = premiumDiscountOffer;
          class Y {
            constructor() {
              const marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(
                first(premiumDiscountOffer[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK,
              );
              let prop = null;
              if (null != marketingComponentByType) {
                prop = null;
                if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                  prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
                }
              }
              return prop;
            }
          }
          cResult[24] = ce;
          tmp61 = ce;
        } else {
          tmp61 = cResult[24];
        }
        if (cResult[25] === enabled) {
          let tmp62;
          let tmp66;
          let tmp70;
          if (cResult[26] === premiumTrialOffer) {
            tmp62 = cResult[27];
          }
          const tmp64 = cResult[28];
          class Y {
            constructor() {
              const marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(
                first(premiumDiscountOffer[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK,
              );
              let prop = null;
              if (null != marketingComponentByType) {
                prop = null;
                if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                  prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
                }
              }
              return prop;
            }
          }
          if (tmp64 !== undefined) {
            let dismissibleContent;
            if (mobileBottomSheet != null) {
              dismissibleContent = mobileBottomSheet.dismissibleContent;
            }
            class Oe {
              constructor() {
                let dismissibleContent;
                if (mobileBottomSheet != null) {
                  dismissibleContent = mobileBottomSheet.dismissibleContent;
                }
                return (
                  dismissibleContent ===
                  dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL
                );
              }
            }
            class Y {
              constructor() {
                const marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(
                  first(premiumDiscountOffer[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK,
                );
                let prop = null;
                if (null != marketingComponentByType) {
                  prop = null;
                  if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                    prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
                  }
                }
                return prop;
              }
            }
            cResult[28] = dismissibleContent;
            cResult[29] = Oe;
            tmp66 = Oe;
          } else {
            tmp66 = cResult[29];
          }
          let dismissibleContent1;
          const tmp68 = cResult[30];
          if (mobileBottomSheet != null) {
            dismissibleContent1 = mobileBottomSheet.dismissibleContent;
          }
          if (tmp68 !== dismissibleContent1) {
            let dismissibleContent2;
            if (mobileBottomSheet != null) {
              dismissibleContent2 = mobileBottomSheet.dismissibleContent;
            }
            class Oe {
              constructor() {
                let dismissibleContent;
                if (mobileBottomSheet != null) {
                  dismissibleContent = mobileBottomSheet.dismissibleContent;
                }
                return (
                  dismissibleContent ===
                  dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL
                );
              }
            }
            class Y {
              constructor() {
                const marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(
                  first(premiumDiscountOffer[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK,
                );
                let prop = null;
                if (null != marketingComponentByType) {
                  prop = null;
                  if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                    prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
                  }
                }
                return prop;
              }
            }
            cResult[30] = dismissibleContent2;
            cResult[31] = tmp72;
            tmp70 = tmp72;
          } else {
            tmp70 = cResult[31];
          }
          closure_12 = tmp73;
          let closure_13 = tmp74;
          if ((cResult[32] === null) != stateFromStores3) {
            let tmp75;
            if (cResult[33] === isGiftCoachmarkAssetReady) {
              tmp75 = cResult[34];
            }
            if (cResult[35] === stateFromStores2) {
              if (cResult[36] === enabled2) {
                if (cResult[37] === stateFromStores4) {
                  if ((cResult[38] === null) != stateFromStores3) {
                    if ((cResult[39] === null) != stateFromStores4) {
                      if (cResult[40] === tmp44) {
                        if (tmp14) {
                          let tmp78;
                          let tmp81;
                          if (cResult[44] !== tmp60) {
                            const tmp60Result = tmp60();
                            class Ae {
                              constructor() {
                                let tmp = !closure_12;
                                if (closure_12) {
                                  tmp = !closure_13;
                                }
                                let tmp3 = !tmp;
                                if (tmp3) {
                                  let tmp6 = null != stateFromStores2;
                                  if (tmp6) {
                                    let tmp8 = constants;
                                    if (tmp8) {
                                      tmp8 = enabled2 && null != stateFromStores4 && isGiftReminderAssetReady;
                                      const tmp9 = enabled2 && null != stateFromStores4 && isGiftReminderAssetReady;
                                    }
                                    tmp6 = tmp8;
                                  }
                                  tmp3 = tmp6;
                                }
                                return tmp3;
                              }
                            }
                            class Y {
                              constructor() {
                                const marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(
                                  first(premiumDiscountOffer[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK,
                                );
                                let prop = null;
                                if (null != marketingComponentByType) {
                                  prop = null;
                                  if (
                                    "giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind
                                  ) {
                                    prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
                                  }
                                }
                                return prop;
                              }
                            }
                            cResult[45] = tmp60Result;
                            tmp78 = tmp60Result;
                          } else {
                            tmp78 = cResult[45];
                          }
                          class Ae {
                            constructor() {
                              let tmp = !closure_12;
                              if (closure_12) {
                                tmp = !closure_13;
                              }
                              let tmp3 = !tmp;
                              if (tmp3) {
                                let tmp6 = null != stateFromStores2;
                                if (tmp6) {
                                  let tmp8 = constants;
                                  if (tmp8) {
                                    tmp8 = enabled2 && null != stateFromStores4 && isGiftReminderAssetReady;
                                    const tmp9 = enabled2 && null != stateFromStores4 && isGiftReminderAssetReady;
                                  }
                                  tmp6 = tmp8;
                                }
                                tmp3 = tmp6;
                              }
                              return tmp3;
                            }
                          }
                          class Y {
                            constructor() {
                              const marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(
                                first(premiumDiscountOffer[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK,
                              );
                              let prop = null;
                              if (null != marketingComponentByType) {
                                prop = null;
                                if (
                                  "giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind
                                ) {
                                  prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
                                }
                              }
                              return prop;
                            }
                          }
                          if (cResult[46] === Symbol.for("react.memo_cache_sentinel")) {
                            class Ae {
                              constructor() {
                                let tmp = !closure_12;
                                if (closure_12) {
                                  tmp = !closure_13;
                                }
                                let tmp3 = !tmp;
                                if (tmp3) {
                                  let tmp6 = null != stateFromStores2;
                                  if (tmp6) {
                                    let tmp8 = constants;
                                    if (tmp8) {
                                      tmp8 = enabled2 && null != stateFromStores4 && isGiftReminderAssetReady;
                                      const tmp9 = enabled2 && null != stateFromStores4 && isGiftReminderAssetReady;
                                    }
                                    tmp6 = tmp8;
                                  }
                                  tmp3 = tmp6;
                                }
                                return tmp3;
                              }
                            }
                            class Y {
                              constructor() {
                                const marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(
                                  first(premiumDiscountOffer[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK,
                                );
                                let prop = null;
                                if (null != marketingComponentByType) {
                                  prop = null;
                                  if (
                                    "giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind
                                  ) {
                                    prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
                                  }
                                }
                                return prop;
                              }
                            }
                          } else {
                            tmp81 = cResult[46];
                          }
                          if (cResult[47] === tmp78) {
                            let tmp85;
                            const tmp61Result = tmp61();
                            class Ae {
                              constructor() {
                                let tmp = !closure_12;
                                if (closure_12) {
                                  tmp = !closure_13;
                                }
                                let tmp3 = !tmp;
                                if (tmp3) {
                                  let tmp6 = null != stateFromStores2;
                                  if (tmp6) {
                                    let tmp8 = constants;
                                    if (tmp8) {
                                      tmp8 = enabled2 && null != stateFromStores4 && isGiftReminderAssetReady;
                                      const tmp9 = enabled2 && null != stateFromStores4 && isGiftReminderAssetReady;
                                    }
                                    tmp6 = tmp8;
                                  }
                                  tmp3 = tmp6;
                                }
                                return tmp3;
                              }
                            }
                            class Y {
                              constructor() {
                                const marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(
                                  first(premiumDiscountOffer[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK,
                                );
                                let prop = null;
                                if (null != marketingComponentByType) {
                                  prop = null;
                                  if (
                                    "giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind
                                  ) {
                                    prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
                                  }
                                }
                                return prop;
                              }
                            }
                            if (cResult[50] !== premiumDiscountOffer) {
                              let obj11;
                              if (null != premiumDiscountOffer) {
                                class Ae {
                                  constructor() {
                                    let tmp = !closure_12;
                                    if (closure_12) {
                                      tmp = !closure_13;
                                    }
                                    let tmp3 = !tmp;
                                    if (tmp3) {
                                      let tmp6 = null != stateFromStores2;
                                      if (tmp6) {
                                        let tmp8 = constants;
                                        if (tmp8) {
                                          tmp8 = enabled2 && null != stateFromStores4 && isGiftReminderAssetReady;
                                          const tmp9 = enabled2 && null != stateFromStores4 && isGiftReminderAssetReady;
                                        }
                                        tmp6 = tmp8;
                                      }
                                      tmp3 = tmp6;
                                    }
                                    return tmp3;
                                  }
                                }
                              } else {
                                obj11 = {};
                              }
                              class Ae {
                                constructor() {
                                  let tmp = !closure_12;
                                  if (closure_12) {
                                    tmp = !closure_13;
                                  }
                                  let tmp3 = !tmp;
                                  if (tmp3) {
                                    let tmp6 = null != stateFromStores2;
                                    if (tmp6) {
                                      let tmp8 = constants;
                                      if (tmp8) {
                                        tmp8 = enabled2 && null != stateFromStores4 && isGiftReminderAssetReady;
                                        const tmp9 = enabled2 && null != stateFromStores4 && isGiftReminderAssetReady;
                                      }
                                      tmp6 = tmp8;
                                    }
                                    tmp3 = tmp6;
                                  }
                                  return tmp3;
                                }
                              }
                              class Y {
                                constructor() {
                                  const marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(
                                    first(premiumDiscountOffer[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK,
                                  );
                                  let prop = null;
                                  if (null != marketingComponentByType) {
                                    prop = null;
                                    if (
                                      "giftReminderCoachmark" ===
                                      marketingComponentByType.properties.properties.oneofKind
                                    ) {
                                      prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
                                    }
                                  }
                                  return prop;
                                }
                              }
                              cResult[51] = obj11;
                              tmp85 = obj11;
                            } else {
                              tmp85 = cResult[51];
                            }
                            if (cResult[52] === tmp61Result) {
                              if (cResult[53] === tmp84) {
                                let tmp87;
                                let tmp90;
                                if (cResult[56] !== tmp62) {
                                  const tmp62Result = tmp62();
                                  class Ae {
                                    constructor() {
                                      let tmp = !closure_12;
                                      if (closure_12) {
                                        tmp = !closure_13;
                                      }
                                      let tmp3 = !tmp;
                                      if (tmp3) {
                                        let tmp6 = null != stateFromStores2;
                                        if (tmp6) {
                                          let tmp8 = constants;
                                          if (tmp8) {
                                            tmp8 = enabled2 && null != stateFromStores4 && isGiftReminderAssetReady;
                                            const tmp9 =
                                              enabled2 && null != stateFromStores4 && isGiftReminderAssetReady;
                                          }
                                          tmp6 = tmp8;
                                        }
                                        tmp3 = tmp6;
                                      }
                                      return tmp3;
                                    }
                                  }
                                  class Y {
                                    constructor() {
                                      const marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(
                                        first(premiumDiscountOffer[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK,
                                      );
                                      let prop = null;
                                      if (null != marketingComponentByType) {
                                        prop = null;
                                        if (
                                          "giftReminderCoachmark" ===
                                          marketingComponentByType.properties.properties.oneofKind
                                        ) {
                                          prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
                                        }
                                      }
                                      return prop;
                                    }
                                  }
                                  cResult[57] = tmp62Result;
                                  tmp87 = tmp62Result;
                                } else {
                                  tmp87 = cResult[57];
                                }
                                class Ae {
                                  constructor() {
                                    let tmp = !closure_12;
                                    if (closure_12) {
                                      tmp = !closure_13;
                                    }
                                    let tmp3 = !tmp;
                                    if (tmp3) {
                                      let tmp6 = null != stateFromStores2;
                                      if (tmp6) {
                                        let tmp8 = constants;
                                        if (tmp8) {
                                          tmp8 = enabled2 && null != stateFromStores4 && isGiftReminderAssetReady;
                                          const tmp9 = enabled2 && null != stateFromStores4 && isGiftReminderAssetReady;
                                        }
                                        tmp6 = tmp8;
                                      }
                                      tmp3 = tmp6;
                                    }
                                    return tmp3;
                                  }
                                }
                                class Y {
                                  constructor() {
                                    const marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(
                                      first(premiumDiscountOffer[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK,
                                    );
                                    let prop = null;
                                    if (null != marketingComponentByType) {
                                      prop = null;
                                      if (
                                        "giftReminderCoachmark" ===
                                        marketingComponentByType.properties.properties.oneofKind
                                      ) {
                                        prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
                                      }
                                    }
                                    return prop;
                                  }
                                }
                                if (cResult[58] !== premiumTrialOffer) {
                                  let obj13;
                                  if (null != premiumTrialOffer) {
                                    class Ae {
                                      constructor() {
                                        let tmp = !closure_12;
                                        if (closure_12) {
                                          tmp = !closure_13;
                                        }
                                        let tmp3 = !tmp;
                                        if (tmp3) {
                                          let tmp6 = null != stateFromStores2;
                                          if (tmp6) {
                                            let tmp8 = constants;
                                            if (tmp8) {
                                              tmp8 = enabled2 && null != stateFromStores4 && isGiftReminderAssetReady;
                                              const tmp9 =
                                                enabled2 && null != stateFromStores4 && isGiftReminderAssetReady;
                                            }
                                            tmp6 = tmp8;
                                          }
                                          tmp3 = tmp6;
                                        }
                                        return tmp3;
                                      }
                                    }
                                  } else {
                                    obj13 = {};
                                  }
                                  class Ae {
                                    constructor() {
                                      let tmp = !closure_12;
                                      if (closure_12) {
                                        tmp = !closure_13;
                                      }
                                      let tmp3 = !tmp;
                                      if (tmp3) {
                                        let tmp6 = null != stateFromStores2;
                                        if (tmp6) {
                                          let tmp8 = constants;
                                          if (tmp8) {
                                            tmp8 = enabled2 && null != stateFromStores4 && isGiftReminderAssetReady;
                                            const tmp9 =
                                              enabled2 && null != stateFromStores4 && isGiftReminderAssetReady;
                                          }
                                          tmp6 = tmp8;
                                        }
                                        tmp3 = tmp6;
                                      }
                                      return tmp3;
                                    }
                                  }
                                  class Y {
                                    constructor() {
                                      const marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(
                                        first(premiumDiscountOffer[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK,
                                      );
                                      let prop = null;
                                      if (null != marketingComponentByType) {
                                        prop = null;
                                        if (
                                          "giftReminderCoachmark" ===
                                          marketingComponentByType.properties.properties.oneofKind
                                        ) {
                                          prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
                                        }
                                      }
                                      return prop;
                                    }
                                  }
                                  cResult[59] = obj13;
                                  tmp90 = obj13;
                                } else {
                                  tmp90 = cResult[59];
                                }
                                if (cResult[60] === tmp87) {
                                  if (cResult[61] === tmp89) {
                                    const tmp66Result = tmp66();
                                    class Ae {
                                      constructor() {
                                        let tmp = !closure_12;
                                        if (closure_12) {
                                          tmp = !closure_13;
                                        }
                                        let tmp3 = !tmp;
                                        if (tmp3) {
                                          let tmp6 = null != stateFromStores2;
                                          if (tmp6) {
                                            let tmp8 = constants;
                                            if (tmp8) {
                                              tmp8 = enabled2 && null != stateFromStores4 && isGiftReminderAssetReady;
                                              const tmp9 =
                                                enabled2 && null != stateFromStores4 && isGiftReminderAssetReady;
                                            }
                                            tmp6 = tmp8;
                                          }
                                          tmp3 = tmp6;
                                        }
                                        return tmp3;
                                      }
                                    }
                                    class Y {
                                      constructor() {
                                        const marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(
                                          first(premiumDiscountOffer[17]).MarketingComponentType
                                            .GIFT_REMINDER_COACHMARK,
                                        );
                                        let prop = null;
                                        if (null != marketingComponentByType) {
                                          prop = null;
                                          if (
                                            "giftReminderCoachmark" ===
                                            marketingComponentByType.properties.properties.oneofKind
                                          ) {
                                            prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
                                          }
                                        }
                                        return prop;
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
                                    if (cResult[64] === mobileBottomSheet) {
                                      if (cResult[65] === id) {
                                        let tmp96;
                                        if (cResult[66] === promotionId) {
                                          tmp96 = cResult[67];
                                        }
                                        if (cResult[68] === tmp66Result) {
                                          if (cResult[69] === tmp93) {
                                            const tmp70Result = tmp70();
                                            class Ae {
                                              constructor() {
                                                let tmp = !closure_12;
                                                if (closure_12) {
                                                  tmp = !closure_13;
                                                }
                                                let tmp3 = !tmp;
                                                if (tmp3) {
                                                  let tmp6 = null != stateFromStores2;
                                                  if (tmp6) {
                                                    let tmp8 = constants;
                                                    if (tmp8) {
                                                      tmp8 =
                                                        enabled2 &&
                                                        null != stateFromStores4 &&
                                                        isGiftReminderAssetReady;
                                                      const tmp9 =
                                                        enabled2 &&
                                                        null != stateFromStores4 &&
                                                        isGiftReminderAssetReady;
                                                    }
                                                    tmp6 = tmp8;
                                                  }
                                                  tmp3 = tmp6;
                                                }
                                                return tmp3;
                                              }
                                            }
                                            class Y {
                                              constructor() {
                                                const marketingComponentByType =
                                                  mobileBottomSheet.getMarketingComponentByType(
                                                    first(premiumDiscountOffer[17]).MarketingComponentType
                                                      .GIFT_REMINDER_COACHMARK,
                                                  );
                                                let prop = null;
                                                if (null != marketingComponentByType) {
                                                  prop = null;
                                                  if (
                                                    "giftReminderCoachmark" ===
                                                    marketingComponentByType.properties.properties.oneofKind
                                                  ) {
                                                    prop =
                                                      marketingComponentByType.properties.properties
                                                        .giftReminderCoachmark;
                                                  }
                                                }
                                                return prop;
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
                                            if (cResult[72] === mobileBottomSheet) {
                                              if (cResult[73] === id1) {
                                                let tmp103;
                                                if (cResult[74] === promotionId1) {
                                                  tmp103 = cResult[75];
                                                }
                                                if (cResult[76] === tmp70Result) {
                                                  if (cResult[77] === tmp100) {
                                                    let tmp106;
                                                    if (cResult[80] !== tmp75) {
                                                      const tmp75Result = tmp75();
                                                      class Ae {
                                                        constructor() {
                                                          let tmp = !closure_12;
                                                          if (closure_12) {
                                                            tmp = !closure_13;
                                                          }
                                                          let tmp3 = !tmp;
                                                          if (tmp3) {
                                                            let tmp6 = null != stateFromStores2;
                                                            if (tmp6) {
                                                              let tmp8 = constants;
                                                              if (tmp8) {
                                                                tmp8 =
                                                                  enabled2 &&
                                                                  null != stateFromStores4 &&
                                                                  isGiftReminderAssetReady;
                                                                const tmp9 =
                                                                  enabled2 &&
                                                                  null != stateFromStores4 &&
                                                                  isGiftReminderAssetReady;
                                                              }
                                                              tmp6 = tmp8;
                                                            }
                                                            tmp3 = tmp6;
                                                          }
                                                          return tmp3;
                                                        }
                                                      }
                                                      class Y {
                                                        constructor() {
                                                          const marketingComponentByType =
                                                            mobileBottomSheet.getMarketingComponentByType(
                                                              first(premiumDiscountOffer[17]).MarketingComponentType
                                                                .GIFT_REMINDER_COACHMARK,
                                                            );
                                                          let prop = null;
                                                          if (null != marketingComponentByType) {
                                                            prop = null;
                                                            if (
                                                              "giftReminderCoachmark" ===
                                                              marketingComponentByType.properties.properties.oneofKind
                                                            ) {
                                                              prop =
                                                                marketingComponentByType.properties.properties
                                                                  .giftReminderCoachmark;
                                                            }
                                                          }
                                                          return prop;
                                                        }
                                                      }
                                                      cResult[81] = tmp75Result;
                                                      tmp106 = tmp75Result;
                                                    } else {
                                                      tmp106 = cResult[81];
                                                    }
                                                    class Ae {
                                                      constructor() {
                                                        let tmp = !closure_12;
                                                        if (closure_12) {
                                                          tmp = !closure_13;
                                                        }
                                                        let tmp3 = !tmp;
                                                        if (tmp3) {
                                                          let tmp6 = null != stateFromStores2;
                                                          if (tmp6) {
                                                            let tmp8 = constants;
                                                            if (tmp8) {
                                                              tmp8 =
                                                                enabled2 &&
                                                                null != stateFromStores4 &&
                                                                isGiftReminderAssetReady;
                                                              const tmp9 =
                                                                enabled2 &&
                                                                null != stateFromStores4 &&
                                                                isGiftReminderAssetReady;
                                                            }
                                                            tmp6 = tmp8;
                                                          }
                                                          tmp3 = tmp6;
                                                        }
                                                        return tmp3;
                                                      }
                                                    }
                                                    class Y {
                                                      constructor() {
                                                        const marketingComponentByType =
                                                          mobileBottomSheet.getMarketingComponentByType(
                                                            first(premiumDiscountOffer[17]).MarketingComponentType
                                                              .GIFT_REMINDER_COACHMARK,
                                                          );
                                                        let prop = null;
                                                        if (null != marketingComponentByType) {
                                                          prop = null;
                                                          if (
                                                            "giftReminderCoachmark" ===
                                                            marketingComponentByType.properties.properties.oneofKind
                                                          ) {
                                                            prop =
                                                              marketingComponentByType.properties.properties
                                                                .giftReminderCoachmark;
                                                          }
                                                        }
                                                        return prop;
                                                      }
                                                    }
                                                    const obj14 = {
                                                      isEligible: tmp106,
                                                      newSnowflakeId: stateFromStores2,
                                                      actionSheetProperties: tmp108,
                                                    };
                                                    cResult[84] = stateFromStores2;
                                                    cResult[85] = tmp106;
                                                    cResult[86] = tmp108;
                                                    cResult[87] = obj14;
                                                  }
                                                }
                                                class Ae {
                                                  constructor() {
                                                    let tmp = !closure_12;
                                                    if (closure_12) {
                                                      tmp = !closure_13;
                                                    }
                                                    let tmp3 = !tmp;
                                                    if (tmp3) {
                                                      let tmp6 = null != stateFromStores2;
                                                      if (tmp6) {
                                                        let tmp8 = constants;
                                                        if (tmp8) {
                                                          tmp8 =
                                                            enabled2 &&
                                                            null != stateFromStores4 &&
                                                            isGiftReminderAssetReady;
                                                          const tmp9 =
                                                            enabled2 &&
                                                            null != stateFromStores4 &&
                                                            isGiftReminderAssetReady;
                                                        }
                                                        tmp6 = tmp8;
                                                      }
                                                      tmp3 = tmp6;
                                                    }
                                                    return tmp3;
                                                  }
                                                }
                                                class Y {
                                                  constructor() {
                                                    const marketingComponentByType =
                                                      mobileBottomSheet.getMarketingComponentByType(
                                                        first(premiumDiscountOffer[17]).MarketingComponentType
                                                          .GIFT_REMINDER_COACHMARK,
                                                      );
                                                    let prop = null;
                                                    if (null != marketingComponentByType) {
                                                      prop = null;
                                                      if (
                                                        "giftReminderCoachmark" ===
                                                        marketingComponentByType.properties.properties.oneofKind
                                                      ) {
                                                        prop =
                                                          marketingComponentByType.properties.properties
                                                            .giftReminderCoachmark;
                                                      }
                                                    }
                                                    return prop;
                                                  }
                                                }
                                                tmp105[1] = tmp100;
                                                tmp105[2] = tmp103;
                                                cResult[76] = tmp70Result;
                                                cResult[77] = tmp100;
                                                cResult[78] = tmp103;
                                                cResult[79] = tmp105;
                                              }
                                            }
                                            const obj15 = {
                                              bottomSheetData: mobileBottomSheet,
                                              componentId: id1,
                                              promotionId: promotionId1,
                                            };
                                            cResult[72] = mobileBottomSheet;
                                            cResult[73] = id1;
                                            cResult[74] = promotionId1;
                                            cResult[75] = obj15;
                                            tmp103 = obj15;
                                          }
                                        }
                                        class Ae {
                                          constructor() {
                                            let tmp = !closure_12;
                                            if (closure_12) {
                                              tmp = !closure_13;
                                            }
                                            let tmp3 = !tmp;
                                            if (tmp3) {
                                              let tmp6 = null != stateFromStores2;
                                              if (tmp6) {
                                                let tmp8 = constants;
                                                if (tmp8) {
                                                  tmp8 =
                                                    enabled2 && null != stateFromStores4 && isGiftReminderAssetReady;
                                                  const tmp9 =
                                                    enabled2 && null != stateFromStores4 && isGiftReminderAssetReady;
                                                }
                                                tmp6 = tmp8;
                                              }
                                              tmp3 = tmp6;
                                            }
                                            return tmp3;
                                          }
                                        }
                                        class Y {
                                          constructor() {
                                            const marketingComponentByType =
                                              mobileBottomSheet.getMarketingComponentByType(
                                                first(premiumDiscountOffer[17]).MarketingComponentType
                                                  .GIFT_REMINDER_COACHMARK,
                                              );
                                            let prop = null;
                                            if (null != marketingComponentByType) {
                                              prop = null;
                                              if (
                                                "giftReminderCoachmark" ===
                                                marketingComponentByType.properties.properties.oneofKind
                                              ) {
                                                prop =
                                                  marketingComponentByType.properties.properties.giftReminderCoachmark;
                                              }
                                            }
                                            return prop;
                                          }
                                        }
                                        tmp98[1] = tmp93;
                                        tmp98[2] = tmp96;
                                        cResult[68] = tmp66Result;
                                        cResult[69] = tmp93;
                                        cResult[70] = tmp96;
                                        cResult[71] = tmp98;
                                      }
                                    }
                                    const obj16 = { bottomSheetData: mobileBottomSheet, componentId: id, promotionId };
                                    cResult[64] = mobileBottomSheet;
                                    cResult[65] = id;
                                    cResult[66] = promotionId;
                                    cResult[67] = obj16;
                                    tmp96 = obj16;
                                  }
                                }
                                const obj17 = {
                                  isEligible: tmp87,
                                  newSnowflakeId: tmp89,
                                  actionSheetProperties: tmp90,
                                };
                                cResult[60] = tmp87;
                                cResult[61] = tmp89;
                                cResult[62] = tmp90;
                                cResult[63] = obj17;
                              }
                            }
                            const obj18 = {
                              isEligible: tmp61Result,
                              newSnowflakeId: tmp84,
                              actionSheetProperties: tmp85,
                            };
                            cResult[52] = tmp61Result;
                            cResult[53] = tmp84;
                            cResult[54] = tmp85;
                            cResult[55] = obj18;
                          }
                          const obj19 = { isEligible: tmp78, newSnowflakeId: undefined, actionSheetProperties: tmp81 };
                          cResult[47] = tmp78;
                          cResult[48] = undefined;
                          cResult[49] = obj19;
                        } else {
                          const _Symbol = Symbol;
                          class Ae {
                            constructor() {
                              let tmp = !closure_12;
                              if (closure_12) {
                                tmp = !closure_13;
                              }
                              let tmp3 = !tmp;
                              if (tmp3) {
                                let tmp6 = null != stateFromStores2;
                                if (tmp6) {
                                  let tmp8 = constants;
                                  if (tmp8) {
                                    tmp8 = enabled2 && null != stateFromStores4 && isGiftReminderAssetReady;
                                    const tmp9 = enabled2 && null != stateFromStores4 && isGiftReminderAssetReady;
                                  }
                                  tmp6 = tmp8;
                                }
                                tmp3 = tmp6;
                              }
                              return tmp3;
                            }
                          }
                          class Y {
                            constructor() {
                              const marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(
                                first(premiumDiscountOffer[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK,
                              );
                              let prop = null;
                              if (null != marketingComponentByType) {
                                prop = null;
                                if (
                                  "giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind
                                ) {
                                  prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
                                }
                              }
                              return prop;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            class Ae {
              constructor() {
                let tmp = !closure_12;
                if (closure_12) {
                  tmp = !closure_13;
                }
                let tmp3 = !tmp;
                if (tmp3) {
                  let tmp6 = null != stateFromStores2;
                  if (tmp6) {
                    let tmp8 = constants;
                    if (tmp8) {
                      tmp8 = enabled2 && null != stateFromStores4 && isGiftReminderAssetReady;
                      const tmp9 = enabled2 && null != stateFromStores4 && isGiftReminderAssetReady;
                    }
                    tmp6 = tmp8;
                  }
                  tmp3 = tmp6;
                }
                return tmp3;
              }
            }
            class Y {
              constructor() {
                const marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(
                  first(premiumDiscountOffer[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK,
                );
                let prop = null;
                if (null != marketingComponentByType) {
                  prop = null;
                  if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                    prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
                  }
                }
                return prop;
              }
            }
            cResult[35] = stateFromStores2;
            cResult[36] = enabled2;
            cResult[37] = stateFromStores4;
            cResult[38] = null != stateFromStores3;
            cResult[39] = null != stateFromStores4;
            cResult[40] = tmp44;
            cResult[41] = isGiftReminderAssetReady;
            cResult[42] = Ae;
          }
          function be() {
            return closure_12 && isGiftCoachmarkAssetReady;
          }
          cResult[32] = null != stateFromStores3;
          cResult[33] = isGiftCoachmarkAssetReady;
          cResult[34] = be;
          tmp75 = be;
        }
        class Y {
          constructor() {
            const marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(
              first(premiumDiscountOffer[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK,
            );
            let prop = null;
            if (null != marketingComponentByType) {
              prop = null;
              if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
              }
            }
            return prop;
          }
        }
        cResult[25] = enabled;
        cResult[26] = premiumTrialOffer;
        cResult[27] = tmp63;
        tmp62 = tmp63;
      }
      class Ee {
        constructor() {
          return first && null != closure_1;
        }
      }
      cResult[20] = tmp19[1];
      cResult[21] = first;
      cResult[22] = Ee;
      tmp60 = Ee;
    }
  : () => {
      let id;
      let id1;
      let id2;
      let id3;
      let isGiftCoachmarkAssetReady;
      let isGiftReminderAssetReady;
      let items7;
      let items8;
      let obj10;
      let obj13;
      let obj15;
      let obj17;
      let obj19;
      let obj21;
      let obj23;
      let obj28;
      let obj30;
      let priceChangeId;
      let promotionId;
      let promotionId1;
      let promotionId2;
      let promotionId3;
      let tmp33;
      let tmp50;
      let tmp8;
      let tmp9;
      const f128910 = () => {
        const items = [,];
        ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = GooglePlayPriceChangeStore);
        return items;
      };
      let items = [UserSettingsProtoStore];
      const obj = get_initialized;
      let stateFromStores = obj.useStateFromStores(items, () =>
        UserSettingsProtoStore.hasLoaded(constants.PRELOADED_USER_SETTINGS),
      );
      const obj2 = MainViewTooltipActionSheetsDisabledExperimentDefault;
      const obj3 = { location: MainViewTooltipActionSheets };
      const disabled = obj2.getConfig(obj3).disabled;
      const items1 = [UserRequiredActionStore];
      const obj4 = get_initialized;
      const stateFromStores1 = obj4.useStateFromStores(items1, () => UserRequiredActionStore.hasAction());
      if (stateFromStores) {
        stateFromStores = !disabled;
      }
      if (stateFromStores) {
        stateFromStores = !stateFromStores1;
      }
      if (stateFromStores) {
        const tmpResult = MetaQuestUtils;
        stateFromStores = !tmpResult.isMetaQuest();
      }
      const items2 = [GooglePlayPriceChangeStore];
      const tmpResult18 = get_initialized;
      [tmp8, tmp9] = tmpResult18.useStateFromStoresArray(items2, f128910);
      _slicedToArray(tmpResult18.useStateFromStoresArray(items2, f128910), 2);
      const tmpResult19 = usePremiumDiscountOffer;
      const premiumDiscountOffer = tmpResult19.usePremiumDiscountOffer();
      const tmpResult20 = usePremiumTrialOffer;
      const premiumTrialOffer = tmpResult20.usePremiumTrialOffer();
      const PremiumTrialOfferActionSheetKillSwitchExperiment =
        PremiumTrialOfferActionSheetKillSwitchExperiment2.PremiumTrialOfferActionSheetKillSwitchExperiment;
      const enabled = PremiumTrialOfferActionSheetKillSwitchExperiment.useConfig({
        location: MainViewTooltipActionSheets,
      }).enabled;
      const tmpResult21 = usePromotionMarketingComponent;
      const promotionMarketingComponent = tmpResult21.usePromotionMarketingComponent(
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
      const items3 = [PromotionsStore];
      const tmpResult22 = get_initialized;
      const stateFromStores2 = tmpResult22.useStateFromStores(items3, () => {
        const giftPromotion = PromotionsStore.getGiftPromotion();
        let id;
        if (giftPromotion != null) {
          id = giftPromotion.id;
        }
        return id;
      });
      const items4 = [PromotionsStore];
      const tmpResult23 = get_initialized;
      const stateFromStores3 = tmpResult23.useStateFromStores(items4, () => {
        const marketingComponentByType = PromotionsStore.getMarketingComponentByType(
          require("MarketingComponentType").MarketingComponentType.GIFT_ICON_COACHMARK,
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
      const items5 = [PromotionsStore];
      const tmpResult24 = get_initialized;
      const stateFromStores4 = tmpResult24.useStateFromStores(items5, () => {
        const marketingComponentByType = PromotionsStore.getMarketingComponentByType(
          require("MarketingComponentType").MarketingComponentType.GIFT_REMINDER_COACHMARK,
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
      const enabled2 = GiftPromotionReminderExperiment.useConfig({ location: MainViewTooltipActionSheets }).enabled;
      const tmpResult25 = GiftingBadgesUtils;
      const giftingBadgeCoachmarkVariant = tmpResult25.useGiftingBadgeCoachmarkVariant({
        platform: "native",
        location: MainViewTooltipActionSheets,
      });
      let isDismissed = null != stateFromStores2;
      if (isDismissed) {
        const tmpResult26 = DismissibleContentUnsafeUtils;
        isDismissed = tmpResult26.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(
          dismissible_content.DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET,
          stateFromStores2,
        ).isDismissed;
      }
      let isDismissed2 = null != stateFromStores2;
      if (isDismissed2) {
        const tmpResult27 = DismissibleContentUnsafeUtils;
        isDismissed2 = tmpResult27.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(
          dismissible_content.DismissibleContent.GIFTING_PROMOTION_REMINDER,
          stateFromStores2,
        ).isDismissed;
      }
      let tmp20 = null;
      const tmp4Result = useGiftingPromotionAssetsReadyDefault;
      if (!isDismissed) {
        tmp20 = stateFromStores3;
      }
      let tmp21 = null;
      if (!isDismissed2) {
        tmp21 = stateFromStores4;
      }
      ({ isGiftCoachmarkAssetReady, isGiftReminderAssetReady } = tmp4Result(tmp20, tmp21));
      tmp4Result(tmp20, tmp21);
      const tmpResult28 = useNitroFileUploadMarketingEligible;
      const nitroFileUploadAnnouncementEligible =
        tmpResult28.useNitroFileUploadAnnouncementEligible(MainViewTooltipActionSheets);
      const tmpResult29 = useNitroFileUploadMarketingEligible;
      const nitroFileUploadUpsellEligible = tmpResult29.useNitroFileUploadUpsellEligible(MainViewTooltipActionSheets);
      const items6 = [,];
      ({ LEAGUE_OF_LEGENDS: arr7[0], RIOT_GAMES: arr7[1] } = PlatformTypes);
      const tmpResult30 = RobloxConnectionCoachmark;
      const shouldShowRobloxConnectionCoachmark = tmpResult30.useShouldShowRobloxConnectionCoachmark();
      const tmpResult31 = ConnectionDeprecationBottomSheet;
      const shouldShowConnectionDeprecationBottomSheet = tmpResult31.useShouldShowConnectionDeprecationBottomSheet({
        deprecatedPlatformTypes: items6,
      });
      const obj5 = { deprecatedPlatformTypes: items7 };
      items7 = [PlatformTypes.BATTLENET];
      const tmpResult32 = ConnectionDeprecationBottomSheet;
      const shouldShowConnectionDeprecationBottomSheet1 =
        tmpResult32.useShouldShowConnectionDeprecationBottomSheet(obj5);
      const tmpResult33 = DisplayNameStylesFlywheelExperiment;
      const isDisplayNameStylesFlywheelSettersEnabled =
        tmpResult33.useIsDisplayNameStylesFlywheelSettersEnabled(MainViewTooltipActionSheets);
      CustomTypingIndicatorExperiment;
      const obj6 = {};
      if (stateFromStores) {
        const GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET =
          dismissible_content.DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET;
        const obj7 = { isEligible: tmp8, newSnowflakeId: priceChangeId, actionSheetProperties: {} };
        priceChangeId = undefined;
        if (tmp9 != null) {
          priceChangeId = tmp9.priceChangeId;
        }
        obj6[GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET] = obj7;
        let tmp35 = null != premiumDiscountOffer;
        const DISCOUNT_OFFER_ACTION_SHEET = dismissible_content.DismissibleContent.DISCOUNT_OFFER_ACTION_SHEET;
        if (tmp35) {
          tmp35 = null == premiumDiscountOffer.expiresAt;
        }
        const obj8 = { isEligible: tmp35, newSnowflakeId: id, actionSheetProperties: obj10 };
        id = undefined;
        if (premiumDiscountOffer != null) {
          id = premiumDiscountOffer.id;
        }
        if (null != premiumDiscountOffer) {
          obj10 = { userDiscountOffer: premiumDiscountOffer };
          const obj9 = { userDiscountOffer: premiumDiscountOffer };
        } else {
          obj10 = {};
        }
        obj6[DISCOUNT_OFFER_ACTION_SHEET] = obj8;
        let hasItem = null != premiumTrialOffer;
        const MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET =
          dismissible_content.DismissibleContent.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET;
        if (hasItem) {
          hasItem = null == premiumTrialOffer.expiresAt;
        }
        if (hasItem) {
          hasItem = !enabled;
        }
        if (hasItem) {
          hasItem = set.has(premiumTrialOffer.trialId);
        }
        const obj11 = { isEligible: hasItem, newSnowflakeId: id1, actionSheetProperties: obj13 };
        id1 = undefined;
        if (premiumTrialOffer != null) {
          id1 = premiumTrialOffer.id;
        }
        if (null != premiumTrialOffer) {
          obj13 = { userTrialOffer: premiumTrialOffer };
          const obj12 = { userTrialOffer: premiumTrialOffer };
        } else {
          obj13 = {};
        }
        obj6[MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET] = obj11;
        let dismissibleContent;
        const PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL =
          dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
        if (mobileBottomSheet != null) {
          dismissibleContent = mobileBottomSheet.dismissibleContent;
        }
        const obj14 = {
          isEligible:
            dismissibleContent === dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL,
          newSnowflakeId: promotionId,
          actionSheetProperties: obj15,
        };
        promotionId = undefined;
        if (promotionMarketingComponent != null) {
          promotionId = promotionMarketingComponent.promotionId;
        }
        obj15 = { bottomSheetData: mobileBottomSheet, componentId: id2, promotionId: promotionId1 };
        id2 = undefined;
        if (promotionMarketingComponent != null) {
          id2 = promotionMarketingComponent.id;
        }
        promotionId1 = undefined;
        if (promotionMarketingComponent != null) {
          promotionId1 = promotionMarketingComponent.promotionId;
        }
        obj6[PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL] = obj14;
        let dismissibleContent1;
        const PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL =
          dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL;
        if (mobileBottomSheet != null) {
          dismissibleContent1 = mobileBottomSheet.dismissibleContent;
        }
        const obj16 = {
          isEligible:
            dismissibleContent1 === dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL,
          newSnowflakeId: promotionId2,
          actionSheetProperties: obj17,
        };
        promotionId2 = undefined;
        if (promotionMarketingComponent != null) {
          promotionId2 = promotionMarketingComponent.promotionId;
        }
        obj17 = { bottomSheetData: mobileBottomSheet, componentId: id3, promotionId: promotionId3 };
        id3 = undefined;
        if (promotionMarketingComponent != null) {
          id3 = promotionMarketingComponent.id;
        }
        promotionId3 = undefined;
        if (promotionMarketingComponent != null) {
          promotionId3 = promotionMarketingComponent.promotionId;
        }
        obj6[PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL] = obj16;
        let tmp48 = tmp32;
        const GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET =
          dismissible_content.DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET;
        if (null != stateFromStores3) {
          tmp48 = isGiftCoachmarkAssetReady;
        }
        const obj18 = { isEligible: tmp48, newSnowflakeId: stateFromStores2, actionSheetProperties: obj19 };
        obj19 = { coachmarkComponent: stateFromStores3 };
        obj6[GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET] = obj18;
        let tmp49 = !tmp32;
        const GIFTING_PROMOTION_REMINDER = dismissible_content.DismissibleContent.GIFTING_PROMOTION_REMINDER;
        if (null != stateFromStores3) {
          tmp49 = null == stateFromStores4;
        }
        const obj20 = { isEligible: tmp50, newSnowflakeId: stateFromStores2, actionSheetProperties: obj21 };
        obj21 = { coachmarkComponent: stateFromStores4 };
        tmp50 =
          !tmp49 &&
          null != stateFromStores2 &&
          isDismissed &&
          enabled2 &&
          null != stateFromStores4 &&
          isGiftReminderAssetReady;
        obj6[GIFTING_PROMOTION_REMINDER] = obj20;
        const obj22 = { isEligible: null != giftingBadgeCoachmarkVariant, actionSheetProperties: obj23 };
        obj23 = { variant: giftingBadgeCoachmarkVariant };
        obj6[dismissible_content.DismissibleContent.NEW_GIFTING_BADGES_COACHMARK] = obj22;
        const obj24 = { isEligible: true, actionSheetProperties: {} };
        obj6[dismissible_content.DismissibleContent.CUSTOM_APP_ICONS_COACHMARK] = obj24;
        const obj25 = { isEligible: shouldShowRobloxConnectionCoachmark, actionSheetProperties: {} };
        obj6[dismissible_content.DismissibleContent.ROBLOX_CONNECTION_COACHMARK] = obj25;
        const obj26 = { isEligible: isDisplayNameStylesFlywheelSettersEnabled, actionSheetProperties: {} };
        obj6[dismissible_content.DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_COACHMARK] = obj26;
        const obj27 = { isEligible: shouldShowConnectionDeprecationBottomSheet, actionSheetProperties: obj28 };
        obj28 = { platformTypes: items6 };
        obj6[dismissible_content.DismissibleContent.RIOT_CONNECTION_DEPRECATION_DISABLE] = obj27;
        const obj29 = { isEligible: shouldShowConnectionDeprecationBottomSheet1, actionSheetProperties: obj30 };
        obj30 = { platformTypes: items8 };
        items8 = [PlatformTypes.BATTLENET];
        obj6[dismissible_content.DismissibleContent.BATTLENET_CONNECTION_DEPRECATION_DISABLE] = obj29;
        const obj31 = { isEligible: true, actionSheetProperties: {} };
        obj6[dismissible_content.DismissibleContent.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT] = obj31;
        const obj32 = { isEligible: nitroFileUploadAnnouncementEligible, actionSheetProperties: {} };
        obj6[dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_ANNOUNCEMENT] = obj32;
        const obj33 = { isEligible: nitroFileUploadUpsellEligible, actionSheetProperties: {} };
        obj6[dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_UPSELL] = obj33;
        const obj34 = { isEligible: tmp31, actionSheetProperties: {} };
        obj6[dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_COACHMARK] = obj34;
        tmp33 = obj6;
      } else {
        tmp33 = obj6;
      }
      return tmp33;
    };
const result = size.fileFinishedImporting(
  "modules/upsell_tooltip/native/useMainViewTooltipActionSheetEligibilityMap.tsx",
);

export const useMainViewTooltipActionSheetMap = tmp4;
