// === Module 18317: useMainViewTooltipActionSheetEligibilityMap ===

// Module 18317 (useMainViewTooltipActionSheetEligibilityMap)
import initialize from "initialize" /* 504 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1630 */;
import dismissible_content from "dismissible_content" /* 4805 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4994 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7541 */;
import useIsEligibleSenderForReferralProgram from "useIsEligibleSenderForReferralProgram" /* 8412 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 8416 */;
import GiftPromotionReminderExperiment2 from "GiftPromotionReminderExperiment" /* 10464 */;
import MarketingComponentType from "MarketingComponentType" /* 10465 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10472 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 12985 */;
import usePromotionMarketingComponent from "usePromotionMarketingComponent" /* 14665 */;
import DisplayNameStylesFlywheelExperiment from "DisplayNameStylesFlywheelExperiment" /* 15802 */;
import RobloxConnectionCoachmark from "RobloxConnectionCoachmark" /* 18289 */;
import MainViewTooltipActionSheetsDisabledExperimentDefault from "MainViewTooltipActionSheetsDisabledExperiment" /* 18318 */;
import PremiumTrialOfferActionSheetKillSwitchExperiment2 from "PremiumTrialOfferActionSheetKillSwitchExperiment" /* 18320 */;
import useGiftingPromotionAssetsReadyDefault from "useGiftingPromotionAssetsReady" /* 18321 */;
import useNitroFileUploadMarketingEligible from "useNitroFileUploadMarketingEligible" /* 18322 */;
import _slicedToArray from "module_32" /* 32 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1261 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7546 */;
import GooglePlayPriceChangeStore from "GooglePlayPriceChangeStore" /* 18291 */;
import PromotionsStore from "PromotionsStore" /* 9489 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1246 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 4815 */;

const require = globalThis.__r;

require = fn;
const PremiumConstants = fn(1394);
({ PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID } = PremiumConstants);
const UserSettingsTypes = fn(1097).UserSettingsTypes;
const MainViewTooltipActionSheets = "MainViewTooltipActionSheets";
let items = [PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID];
const set = new Set(items);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/upsell_tooltip/native/useMainViewTooltipActionSheetEligibilityMap.tsx");

export const useMainViewTooltipActionSheetMap = ReactCompilerGating.isReactCompilerEnabled() ? (function useMainViewTooltipActionSheetMap() {
  const cResult = first(premiumDiscountOffer[10]).c(138);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [enabled2];
    class S {
      constructor() {
        return enabled.hasLoaded(isGiftCoachmarkAssetReady.PRELOADED_USER_SETTINGS);
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
    const items1 = [UserRequiredActionStore];
    class C {
      constructor() {
        return closure_9.hasAction();
      }
    }
    cResult[2] = items1;
    cResult[3] = C;
    let tmp11 = C;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  const obj2 = { location: isGiftReminderAssetReady };
  const obj3 = require("MainViewTooltipActionSheetsDisabledExperiment");
  let tmp14 = stateFromStores;
  const stateFromStores1 = first(premiumDiscountOffer[11]).useStateFromStores(tmp10, tmp11);
  if (stateFromStores) {
    tmp14 = !obj3.getConfig(obj2).disabled;
  }
  if (tmp14) {
    tmp14 = !stateFromStores1;
  }
  if (tmp14) {
    tmp14 = !tmp(tmp2[13]).isMetaQuest();
    const tmpResult22 = tmp(tmp2[13]);
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [stateFromStores3];
    class C {
      constructor() {
        return closure_9.hasAction();
      }
    }
    cResult[4] = items2;
    cResult[5] = tmp18;
    let tmp16 = tmp18;
    let tmp15 = items2;
  } else {
    tmp15 = cResult[4];
    tmp16 = cResult[5];
  }
  const tmpResult21 = first(premiumDiscountOffer[11]);
  const tmp20 = premiumTrialOffer(first(premiumDiscountOffer[11]).useStateFromStoresArray(tmp15, tmp16), 2);
  first = tmp20[0];
  importDefault = tmp22;
  const tmp19 = premiumTrialOffer;
  const tmpResult23 = first(premiumDiscountOffer[11]);
  premiumDiscountOffer = first(premiumDiscountOffer[14]).usePremiumDiscountOffer();
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [enabled];
    class A {
      constructor() {
        RecurringReferralReminderExperiment = closure_0(closure_2[15]).RecurringReferralReminderExperiment;
        obj = { location: isGiftReminderAssetReady };
        return RecurringReferralReminderExperiment.getConfig(obj, { autoTrackExposure: false }).bottomSheetEnabled;
      }
    }
    cResult[6] = items3;
    cResult[7] = A;
    let tmp25 = A;
    let tmp24 = items3;
  } else {
    tmp24 = cResult[6];
    tmp25 = cResult[7];
  }
  const tmpResult24 = first(premiumDiscountOffer[14]);
  const stateFromStores2 = first(premiumDiscountOffer[11]).useStateFromStores(tmp24, tmp25);
  const tmpResult25 = first(premiumDiscountOffer[11]);
  const isEligibleSenderForReferralProgram = first(premiumDiscountOffer[16]).useIsEligibleSenderForReferralProgram(!stateFromStores2);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [mobileBottomSheet];
    class U {
      constructor() {
        items = [, ];
        items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
        items[1] = mobileBottomSheet.getRecurringReminderStateId();
        return items;
      }
    }
    cResult[8] = items4;
    cResult[9] = U;
    let tmp30 = U;
    let tmp29 = items4;
  } else {
    tmp29 = cResult[8];
    tmp30 = cResult[9];
  }
  const tmpResult26 = first(premiumDiscountOffer[16]);
  const tmpResult27 = first(premiumDiscountOffer[11]);
  [tmp33, tmp34] = tmp19(first(premiumDiscountOffer[11]).useStateFromStoresArray(tmp29, tmp30), 2);
  let tmp35 = stateFromStores2;
  if (stateFromStores2) {
    tmp35 = isEligibleSenderForReferralProgram;
  }
  if (tmp35) {
    tmp35 = null != tmp33;
  }
  if (tmp35) {
    tmp35 = tmp33 > 0;
  }
  if (tmp35) {
    tmp35 = null != tmp34;
  }
  const tmp19Result = tmp19(first(premiumDiscountOffer[11]).useStateFromStoresArray(tmp29, tmp30), 2);
  premiumTrialOffer = first(premiumDiscountOffer[17]).usePremiumTrialOffer();
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { location: tmp9 };
    class U {
      constructor() {
        items = [, ];
        items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
        items[1] = mobileBottomSheet.getRecurringReminderStateId();
        return items;
      }
    }
    let tmp39 = obj4;
  } else {
    tmp39 = cResult[10];
  }
  const PremiumTrialOfferActionSheetKillSwitchExperiment = tmp(tmp2[18]).PremiumTrialOfferActionSheetKillSwitchExperiment;
  enabled = PremiumTrialOfferActionSheetKillSwitchExperiment.useConfig(tmp39).enabled;
  const tmpResult28 = first(premiumDiscountOffer[17]);
  const promotionMarketingComponent = first(premiumDiscountOffer[19]).usePromotionMarketingComponent(tmp(tmp2[20]).MarketingComponentType.MOBILE_BOTTOM_SHEET);
  let oneofKind;
  if (promotionMarketingComponent != null) {
    oneofKind = promotionMarketingComponent.properties.properties.oneofKind;
  }
  mobileBottomSheet = null;
  if ("mobileBottomSheet" === oneofKind) {
    mobileBottomSheet = promotionMarketingComponent.properties.properties.mobileBottomSheet;
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    const items5 = [stateFromStores5];
    class X {
      constructor() {
        giftPromotion = closure_7.getGiftPromotion();
        id = undefined;
        if (giftPromotion != null) {
          id = giftPromotion.id;
        }
        return id;
      }
    }
    cResult[11] = items5;
    cResult[12] = X;
    let tmp44 = X;
    let tmp43 = items5;
  } else {
    tmp43 = cResult[11];
    tmp44 = cResult[12];
  }
  const tmpResult29 = first(premiumDiscountOffer[19]);
  stateFromStores3 = first(premiumDiscountOffer[11]).useStateFromStores(tmp43, tmp44);
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const items6 = [stateFromStores5];
    class Z {
      constructor() {
        marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
        giftIconCoachmark = null;
        if (null != marketingComponentByType) {
          str = "giftIconCoachmark";
          giftIconCoachmark = null;
          if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
            giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
          }
        }
        return giftIconCoachmark;
      }
    }
    cResult[13] = items6;
    cResult[14] = Z;
    let tmp48 = Z;
    let tmp47 = items6;
  } else {
    tmp47 = cResult[13];
    tmp48 = cResult[14];
  }
  const tmpResult30 = first(premiumDiscountOffer[11]);
  const stateFromStores4 = first(premiumDiscountOffer[11]).useStateFromStores(tmp47, tmp48);
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    const items7 = [stateFromStores5];
    class Z {
      constructor() {
        marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
        giftIconCoachmark = null;
        if (null != marketingComponentByType) {
          str = "giftIconCoachmark";
          giftIconCoachmark = null;
          if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
            giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
          }
        }
        return giftIconCoachmark;
      }
    }
    cResult[15] = items7;
    cResult[16] = tmp54;
    let tmp52 = tmp54;
    let tmp51 = items7;
  } else {
    tmp51 = cResult[15];
    tmp52 = cResult[16];
  }
  const tmpResult31 = first(premiumDiscountOffer[11]);
  stateFromStores5 = first(premiumDiscountOffer[11]).useStateFromStores(tmp51, tmp52);
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { location: tmp9 };
    class Z {
      constructor() {
        marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
        giftIconCoachmark = null;
        if (null != marketingComponentByType) {
          str = "giftIconCoachmark";
          giftIconCoachmark = null;
          if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
            giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
          }
        }
        return giftIconCoachmark;
      }
    }
    let tmp56 = obj5;
  } else {
    tmp56 = cResult[17];
  }
  const GiftPromotionReminderExperiment = tmp(tmp2[21]).GiftPromotionReminderExperiment;
  enabled2 = GiftPromotionReminderExperiment.useConfig(tmp56).enabled;
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { platform: "native", location: tmp9 };
    class Z {
      constructor() {
        marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
        giftIconCoachmark = null;
        if (null != marketingComponentByType) {
          str = "giftIconCoachmark";
          giftIconCoachmark = null;
          if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
            giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
          }
        }
        return giftIconCoachmark;
      }
    }
    let tmp57 = obj6;
  } else {
    tmp57 = cResult[18];
  }
  const tmpResult32 = first(premiumDiscountOffer[11]);
  const giftingBadgeCoachmarkVariant = first(premiumDiscountOffer[22]).useGiftingBadgeCoachmarkVariant(tmp57);
  if (cResult[19] !== stateFromStores3) {
    let isDismissed = null != stateFromStores3;
    if (isDismissed) {
      isDismissed = tmp(tmp2[23]).UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(tmp2[24]).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, stateFromStores3).isDismissed;
      const tmpResult34 = tmp(tmp2[23]);
    }
    class Z {
      constructor() {
        marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
        giftIconCoachmark = null;
        if (null != marketingComponentByType) {
          str = "giftIconCoachmark";
          giftIconCoachmark = null;
          if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
            giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
          }
        }
        return giftIconCoachmark;
      }
    }
    cResult[20] = isDismissed;
    let tmp59 = isDismissed;
  } else {
    tmp59 = cResult[20];
  }
  UserRequiredActionStore = tmp59;
  let isDismissed2 = null != stateFromStores3;
  if (isDismissed2) {
    isDismissed2 = tmp(tmp2[23]).UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(tmp2[24]).DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores3).isDismissed;
    const tmpResult35 = tmp(tmp2[23]);
  }
  let tmp61 = null;
  const tmpResult33 = first(premiumDiscountOffer[22]);
  if (!tmp59) {
    tmp61 = stateFromStores4;
  }
  let tmp62 = null;
  if (!isDismissed2) {
    tmp62 = stateFromStores5;
  }
  const tmp8ResultResult = tmp8(premiumDiscountOffer[25])(tmp61, tmp62);
  const isGiftCoachmarkAssetReady = tmp8ResultResult.isGiftCoachmarkAssetReady;
  isGiftReminderAssetReady = tmp8ResultResult.isGiftReminderAssetReady;
  const tmp8Result = tmp8(premiumDiscountOffer[25]);
  const nitroFileUploadAnnouncementEligible = first(premiumDiscountOffer[26]).useNitroFileUploadAnnouncementEligible(tmp9);
  const tmpResult36 = first(premiumDiscountOffer[26]);
  const nitroFileUploadUpsellEligible = first(premiumDiscountOffer[26]).useNitroFileUploadUpsellEligible(tmp9);
  const tmpResult37 = first(premiumDiscountOffer[26]);
  const shouldShowRobloxConnectionCoachmark = first(premiumDiscountOffer[27]).useShouldShowRobloxConnectionCoachmark();
  const tmpResult38 = first(premiumDiscountOffer[27]);
  const isDisplayNameStylesFlywheelSettersEnabled = first(premiumDiscountOffer[28]).useIsDisplayNameStylesFlywheelSettersEnabled(tmp9);
  const tmpResult39 = first(premiumDiscountOffer[28]);
  const canSet = first(premiumDiscountOffer[29]).useCustomTypingIndicatorConfig(tmp9).canSet;
  if (cResult[21] === tmp20[1]) {
    if (cResult[22] === first) {
      let tmp68 = cResult[23];
    }
    if (cResult[24] !== premiumDiscountOffer) {
      function isDiscountOfferEligible() {
        return null != premiumDiscountOffer && null == premiumDiscountOffer.expiresAt;
      }
      cResult[24] = premiumDiscountOffer;
      class Z {
        constructor() {
          marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
          giftIconCoachmark = null;
          if (null != marketingComponentByType) {
            str = "giftIconCoachmark";
            giftIconCoachmark = null;
            if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
              giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
            }
          }
          return giftIconCoachmark;
        }
      }
      cResult[25] = isDiscountOfferEligible;
      let tmp69 = isDiscountOfferEligible;
    } else {
      tmp69 = cResult[25];
    }
    if (cResult[26] === enabled) {
      if (cResult[27] === premiumTrialOffer) {
        let tmp70 = cResult[28];
      }
      class Z {
        constructor() {
          marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
          giftIconCoachmark = null;
          if (null != marketingComponentByType) {
            str = "giftIconCoachmark";
            giftIconCoachmark = null;
            if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
              giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
            }
          }
          return giftIconCoachmark;
        }
      }
      if (cResult[29] !== undefined) {
        let dismissibleContent;
        if (mobileBottomSheet != null) {
          dismissibleContent = mobileBottomSheet.dismissibleContent;
        }
        function isPremiumMarketingMomentAnnouncementEligible() {
          let dismissibleContent;
          if (mobileBottomSheet != null) {
            dismissibleContent = mobileBottomSheet.dismissibleContent;
          }
          return dismissibleContent === dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
        }
        class Z {
          constructor() {
            marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
            giftIconCoachmark = null;
            if (null != marketingComponentByType) {
              str = "giftIconCoachmark";
              giftIconCoachmark = null;
              if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
              }
            }
            return giftIconCoachmark;
          }
        }
        cResult[29] = dismissibleContent;
        cResult[30] = isPremiumMarketingMomentAnnouncementEligible;
        let tmp73 = isPremiumMarketingMomentAnnouncementEligible;
      } else {
        tmp73 = cResult[30];
      }
      let dismissibleContent1;
      if (mobileBottomSheet != null) {
        dismissibleContent1 = mobileBottomSheet.dismissibleContent;
      }
      if (cResult[31] !== dismissibleContent1) {
        let dismissibleContent2;
        if (mobileBottomSheet != null) {
          dismissibleContent2 = mobileBottomSheet.dismissibleContent;
        }
        function isPremiumMarketingMomentReminderEligible() {
          let dismissibleContent;
          if (mobileBottomSheet != null) {
            dismissibleContent = mobileBottomSheet.dismissibleContent;
          }
          return dismissibleContent === dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL;
        }
        class Z {
          constructor() {
            marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
            giftIconCoachmark = null;
            if (null != marketingComponentByType) {
              str = "giftIconCoachmark";
              giftIconCoachmark = null;
              if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
              }
            }
            return giftIconCoachmark;
          }
        }
        cResult[31] = dismissibleContent2;
        cResult[32] = isPremiumMarketingMomentReminderEligible;
        let tmp76 = isPremiumMarketingMomentReminderEligible;
      } else {
        tmp76 = cResult[32];
      }
      closure_12 = tmp78;
      closure_13 = tmp79;
      if (cResult[33] === null != stateFromStores4) {
        if (cResult[34] === isGiftCoachmarkAssetReady) {
          let tmp80 = cResult[35];
        }
        if (cResult[36] === stateFromStores3) {
          if (cResult[37] === enabled2) {
            if (cResult[38] === stateFromStores5) {
              if (cResult[39] === tmp78) {
                if (cResult[40] === tmp79) {
                  if (cResult[41] === tmp59) {
                    if (tmp14) {
                      if (cResult[45] !== tmp68) {
                        const tmp68Result = tmp68();
                        cResult[45] = tmp68;
                        class Z {
                          constructor() {
                            marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                            giftIconCoachmark = null;
                            if (null != marketingComponentByType) {
                              str = "giftIconCoachmark";
                              giftIconCoachmark = null;
                              if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                              }
                            }
                            return giftIconCoachmark;
                          }
                        }
                        cResult[46] = tmp68Result;
                        let tmp83 = tmp68Result;
                      } else {
                        tmp83 = cResult[46];
                      }
                      let priceChangeId;
                      if (tmp22 != null) {
                        priceChangeId = tmp22.priceChangeId;
                      }
                      class Z {
                        constructor() {
                          marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                          giftIconCoachmark = null;
                          if (null != marketingComponentByType) {
                            str = "giftIconCoachmark";
                            giftIconCoachmark = null;
                            if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                              giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                            }
                          }
                          return giftIconCoachmark;
                        }
                      }
                      if (cResult[47] === Symbol.for("react.memo_cache_sentinel")) {
                        cResult[47] = {};
                        class Z {
                          constructor() {
                            marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                            giftIconCoachmark = null;
                            if (null != marketingComponentByType) {
                              str = "giftIconCoachmark";
                              giftIconCoachmark = null;
                              if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                              }
                            }
                            return giftIconCoachmark;
                          }
                        }
                        const obj7 = {};
                      } else {
                        const tmp86 = cResult[47];
                      }
                      if (cResult[48] === tmp83) {
                        const tmp69Result = tmp69();
                        class Z {
                          constructor() {
                            marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                            giftIconCoachmark = null;
                            if (null != marketingComponentByType) {
                              str = "giftIconCoachmark";
                              giftIconCoachmark = null;
                              if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                              }
                            }
                            return giftIconCoachmark;
                          }
                        }
                        if (cResult[51] !== premiumDiscountOffer) {
                          if (null != premiumDiscountOffer) {
                            const obj8 = { userDiscountOffer: premiumDiscountOffer };
                            let obj9 = obj8;
                          } else {
                            obj9 = {};
                          }
                          cResult[51] = premiumDiscountOffer;
                          class Z {
                            constructor() {
                              marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                              giftIconCoachmark = null;
                              if (null != marketingComponentByType) {
                                str = "giftIconCoachmark";
                                giftIconCoachmark = null;
                                if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                  giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                                }
                              }
                              return giftIconCoachmark;
                            }
                          }
                          cResult[52] = obj9;
                        } else {
                          if (cResult[53] === tmp69Result) {
                            if (cResult[54] === tmp89) {
                              if (cResult[57] !== tmp70) {
                                const tmp70Result = tmp70();
                                cResult[57] = tmp70;
                                class Z {
                                  constructor() {
                                    marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                                    giftIconCoachmark = null;
                                    if (null != marketingComponentByType) {
                                      str = "giftIconCoachmark";
                                      giftIconCoachmark = null;
                                      if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                        giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                                      }
                                    }
                                    return giftIconCoachmark;
                                  }
                                }
                                cResult[58] = tmp70Result;
                                let tmp93 = tmp70Result;
                              } else {
                                tmp93 = cResult[58];
                              }
                              class Z {
                                constructor() {
                                  marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                                  giftIconCoachmark = null;
                                  if (null != marketingComponentByType) {
                                    str = "giftIconCoachmark";
                                    giftIconCoachmark = null;
                                    if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                      giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                                    }
                                  }
                                  return giftIconCoachmark;
                                }
                              }
                              if (cResult[59] !== premiumTrialOffer) {
                                if (null != premiumTrialOffer) {
                                  const obj10 = { userTrialOffer: premiumTrialOffer };
                                  let obj11 = obj10;
                                } else {
                                  obj11 = {};
                                }
                                cResult[59] = premiumTrialOffer;
                                class Z {
                                  constructor() {
                                    marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                                    giftIconCoachmark = null;
                                    if (null != marketingComponentByType) {
                                      str = "giftIconCoachmark";
                                      giftIconCoachmark = null;
                                      if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                        giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                                      }
                                    }
                                    return giftIconCoachmark;
                                  }
                                }
                                cResult[60] = obj11;
                              } else {
                                if (cResult[61] === tmp93) {
                                  if (cResult[62] === tmp95) {
                                    const tmp73Result = tmp73();
                                    class Z {
                                      constructor() {
                                        marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                                        giftIconCoachmark = null;
                                        if (null != marketingComponentByType) {
                                          str = "giftIconCoachmark";
                                          giftIconCoachmark = null;
                                          if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                            giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                                          }
                                        }
                                        return giftIconCoachmark;
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
                                    if (cResult[65] === mobileBottomSheet) {
                                      if (cResult[66] === id) {
                                        if (cResult[67] === promotionId) {
                                          let tmp103 = cResult[68];
                                        }
                                        if (cResult[69] === tmp73Result) {
                                          if (cResult[70] === tmp100) {
                                            const tmp76Result = tmp76();
                                            class Z {
                                              constructor() {
                                                marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                                                giftIconCoachmark = null;
                                                if (null != marketingComponentByType) {
                                                  str = "giftIconCoachmark";
                                                  giftIconCoachmark = null;
                                                  if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                                    giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                                                  }
                                                }
                                                return giftIconCoachmark;
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
                                            if (cResult[73] === mobileBottomSheet) {
                                              if (cResult[74] === id1) {
                                                if (cResult[75] === promotionId1) {
                                                  let tmp109 = cResult[76];
                                                }
                                                if (cResult[77] === tmp76Result) {
                                                  if (cResult[78] === tmp106) {
                                                    if (cResult[81] !== tmp80) {
                                                      const tmp80Result = tmp80();
                                                      cResult[81] = tmp80;
                                                      class Z {
                                                        constructor() {
                                                          marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                                                          giftIconCoachmark = null;
                                                          if (null != marketingComponentByType) {
                                                            str = "giftIconCoachmark";
                                                            giftIconCoachmark = null;
                                                            if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                                              giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                                                            }
                                                          }
                                                          return giftIconCoachmark;
                                                        }
                                                      }
                                                      cResult[82] = tmp80Result;
                                                      let tmp111 = tmp80Result;
                                                    } else {
                                                      tmp111 = cResult[82];
                                                    }
                                                    if (cResult[83] !== stateFromStores4) {
                                                      const obj12 = { coachmarkComponent: stateFromStores4 };
                                                      class Z {
                                                        constructor() {
                                                          marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                                                          giftIconCoachmark = null;
                                                          if (null != marketingComponentByType) {
                                                            str = "giftIconCoachmark";
                                                            giftIconCoachmark = null;
                                                            if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                                              giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                                                            }
                                                          }
                                                          return giftIconCoachmark;
                                                        }
                                                      }
                                                      cResult[84] = obj12;
                                                      let tmp113 = obj12;
                                                    } else {
                                                      tmp113 = cResult[84];
                                                    }
                                                    class Z {
                                                      constructor() {
                                                        marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                                                        giftIconCoachmark = null;
                                                        if (null != marketingComponentByType) {
                                                          str = "giftIconCoachmark";
                                                          giftIconCoachmark = null;
                                                          if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                                            giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                                                          }
                                                        }
                                                        return giftIconCoachmark;
                                                      }
                                                    }
                                                    const obj13 = { isEligible: tmp111, newSnowflakeId: stateFromStores3, actionSheetProperties: tmp113 };
                                                    cResult[85] = stateFromStores3;
                                                    cResult[86] = tmp111;
                                                    cResult[87] = tmp113;
                                                    cResult[88] = obj13;
                                                  }
                                                }
                                                const obj14 = { isEligible: null, newSnowflakeId: null, actionSheetProperties: null };
                                                class Z {
                                                  constructor() {
                                                    marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                                                    giftIconCoachmark = null;
                                                    if (null != marketingComponentByType) {
                                                      str = "giftIconCoachmark";
                                                      giftIconCoachmark = null;
                                                      if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                                        giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                                                      }
                                                    }
                                                    return giftIconCoachmark;
                                                  }
                                                }
                                                obj14.newSnowflakeId = tmp106;
                                                obj14.actionSheetProperties = tmp109;
                                                cResult[77] = tmp76Result;
                                                cResult[78] = tmp106;
                                                cResult[79] = tmp109;
                                                cResult[80] = obj14;
                                              }
                                            }
                                            const obj15 = { bottomSheetData: mobileBottomSheet, componentId: id1, promotionId: promotionId1 };
                                            cResult[73] = mobileBottomSheet;
                                            cResult[74] = id1;
                                            cResult[75] = promotionId1;
                                            cResult[76] = obj15;
                                            tmp109 = obj15;
                                          }
                                        }
                                        const obj16 = { isEligible: null, newSnowflakeId: null, actionSheetProperties: null };
                                        class Z {
                                          constructor() {
                                            marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                                            giftIconCoachmark = null;
                                            if (null != marketingComponentByType) {
                                              str = "giftIconCoachmark";
                                              giftIconCoachmark = null;
                                              if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                                giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                                              }
                                            }
                                            return giftIconCoachmark;
                                          }
                                        }
                                        obj16.newSnowflakeId = tmp100;
                                        obj16.actionSheetProperties = tmp103;
                                        cResult[69] = tmp73Result;
                                        cResult[70] = tmp100;
                                        cResult[71] = tmp103;
                                        cResult[72] = obj16;
                                      }
                                    }
                                    const obj17 = { bottomSheetData: mobileBottomSheet, componentId: id, promotionId };
                                    cResult[65] = mobileBottomSheet;
                                    cResult[66] = id;
                                    cResult[67] = promotionId;
                                    cResult[68] = obj17;
                                    tmp103 = obj17;
                                  }
                                }
                                const obj18 = { isEligible: null, newSnowflakeId: null, actionSheetProperties: null };
                                class Z {
                                  constructor() {
                                    marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                                    giftIconCoachmark = null;
                                    if (null != marketingComponentByType) {
                                      str = "giftIconCoachmark";
                                      giftIconCoachmark = null;
                                      if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                        giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                                      }
                                    }
                                    return giftIconCoachmark;
                                  }
                                }
                                obj18.newSnowflakeId = tmp95;
                                obj18.actionSheetProperties = cResult[60];
                                cResult[61] = tmp93;
                                cResult[62] = tmp95;
                                cResult[63] = cResult[60];
                                cResult[64] = obj18;
                              }
                            }
                          }
                          const obj19 = { isEligible: null, newSnowflakeId: null, actionSheetProperties: null };
                          class Z {
                            constructor() {
                              marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                              giftIconCoachmark = null;
                              if (null != marketingComponentByType) {
                                str = "giftIconCoachmark";
                                giftIconCoachmark = null;
                                if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                  giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                                }
                              }
                              return giftIconCoachmark;
                            }
                          }
                          obj19.newSnowflakeId = tmp89;
                          obj19.actionSheetProperties = cResult[52];
                          cResult[53] = tmp69Result;
                          cResult[54] = tmp89;
                          cResult[55] = cResult[52];
                          cResult[56] = obj19;
                        }
                      }
                      const obj20 = { isEligible: tmp83, newSnowflakeId: priceChangeId, actionSheetProperties: tmp86 };
                      cResult[48] = tmp83;
                      cResult[49] = priceChangeId;
                      cResult[50] = obj20;
                    } else {
                      const _Symbol = Symbol;
                      if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
                        cResult[44] = {};
                        class Z {
                          constructor() {
                            marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                            giftIconCoachmark = null;
                            if (null != marketingComponentByType) {
                              str = "giftIconCoachmark";
                              giftIconCoachmark = null;
                              if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                              }
                            }
                            return giftIconCoachmark;
                          }
                        }
                        const obj21 = {};
                      }
                      class Z {
                        constructor() {
                          marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                          giftIconCoachmark = null;
                          if (null != marketingComponentByType) {
                            str = "giftIconCoachmark";
                            giftIconCoachmark = null;
                            if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                              giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                            }
                          }
                          return giftIconCoachmark;
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
            let tmp6 = null != stateFromStores3;
            if (tmp6) {
              let tmp8 = closure_9;
              if (tmp8) {
                let tmp9 = enabled2;
                if (enabled2) {
                  tmp9 = null != stateFromStores5;
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
        class Z {
          constructor() {
            marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
            giftIconCoachmark = null;
            if (null != marketingComponentByType) {
              str = "giftIconCoachmark";
              giftIconCoachmark = null;
              if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
              }
            }
            return giftIconCoachmark;
          }
        }
        cResult[36] = stateFromStores3;
        cResult[37] = enabled2;
        cResult[38] = stateFromStores5;
        cResult[39] = tmp78;
        cResult[40] = tmp79;
        cResult[41] = tmp59;
        cResult[42] = isGiftReminderAssetReady;
        cResult[43] = isGiftingPromotionReminderEligible;
      }
      function isGiftingPromotionFirstTimeEligible() {
        let tmp = closure_12;
        if (closure_12) {
          tmp = isGiftCoachmarkAssetReady;
        }
        return tmp;
      }
      cResult[33] = null != stateFromStores4;
      cResult[34] = isGiftCoachmarkAssetReady;
      cResult[35] = isGiftingPromotionFirstTimeEligible;
      tmp80 = isGiftingPromotionFirstTimeEligible;
    }
    class Z {
      constructor() {
        marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
        giftIconCoachmark = null;
        if (null != marketingComponentByType) {
          str = "giftIconCoachmark";
          giftIconCoachmark = null;
          if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
            giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
          }
        }
        return giftIconCoachmark;
      }
    }
    cResult[26] = enabled;
    cResult[27] = premiumTrialOffer;
    cResult[28] = tmp71;
    tmp70 = tmp71;
  }
  function isGooglePlayPriceChangeEligible() {
    let tmp = first;
    if (first) {
      tmp = null != closure_1;
    }
    return tmp;
  }
  cResult[21] = tmp20[1];
  cResult[22] = first;
  cResult[23] = isGooglePlayPriceChangeEligible;
  tmp68 = isGooglePlayPriceChangeEligible;
  const tmpResult40 = first(premiumDiscountOffer[29]);
}) : (function useMainViewTooltipActionSheetMap() {
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
  const tmpResult19 = initialize;
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
  const tmpResult20 = usePremiumDiscountOffer;
  const items3 = [ApexExperimentStore];
  let stateFromStores2 = initialize.useStateFromStores(items3, () => {
    const RecurringReferralReminderExperiment = require("RecurringReferralReminderExperiment").RecurringReferralReminderExperiment;
    return RecurringReferralReminderExperiment.getConfig({ location: _location }, { autoTrackExposure: false }).bottomSheetEnabled;
  });
  const tmpResult21 = initialize;
  const isEligibleSenderForReferralProgram = useIsEligibleSenderForReferralProgram.useIsEligibleSenderForReferralProgram(!stateFromStores2);
  const tmpResult22 = useIsEligibleSenderForReferralProgram;
  const items4 = [ReferralTrialStore];
  const tmpResult23 = initialize;
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
  const tmpResult24 = usePremiumTrialOffer;
  const promotionMarketingComponent = usePromotionMarketingComponent.usePromotionMarketingComponent(MarketingComponentType.MarketingComponentType.MOBILE_BOTTOM_SHEET);
  let oneofKind;
  if (promotionMarketingComponent != null) {
    oneofKind = promotionMarketingComponent.properties.properties.oneofKind;
  }
  let mobileBottomSheet = null;
  if ("mobileBottomSheet" === oneofKind) {
    mobileBottomSheet = promotionMarketingComponent.properties.properties.mobileBottomSheet;
  }
  const tmpResult25 = usePromotionMarketingComponent;
  const items5 = [PromotionsStore];
  const stateFromStores3 = initialize.useStateFromStores(items5, () => {
    const giftPromotion = PromotionsStore.getGiftPromotion();
    let id;
    if (giftPromotion != null) {
      id = giftPromotion.id;
    }
    return id;
  });
  const tmpResult26 = initialize;
  const items6 = [PromotionsStore];
  const stateFromStores4 = initialize.useStateFromStores(items6, () => {
    const marketingComponentByType = PromotionsStore.getMarketingComponentByType(require("MarketingComponentType").MarketingComponentType.GIFT_ICON_COACHMARK);
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
  const items7 = [PromotionsStore];
  const stateFromStores5 = initialize.useStateFromStores(items7, () => {
    const marketingComponentByType = PromotionsStore.getMarketingComponentByType(require("MarketingComponentType").MarketingComponentType.GIFT_REMINDER_COACHMARK);
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
  const giftingBadgeCoachmarkVariant = GiftingBadgesUtils.useGiftingBadgeCoachmarkVariant({ platform: "native", location: MainViewTooltipActionSheets });
  let isDismissed = null != stateFromStores3;
  if (isDismissed) {
    isDismissed = DismissibleContentUnsafeUtils.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(dismissible_content.DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, stateFromStores3).isDismissed;
    const tmpResult30 = DismissibleContentUnsafeUtils;
  }
  let isDismissed2 = null != stateFromStores3;
  if (isDismissed2) {
    isDismissed2 = DismissibleContentUnsafeUtils.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(dismissible_content.DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores3).isDismissed;
    const tmpResult31 = DismissibleContentUnsafeUtils;
  }
  let tmp25 = null;
  const tmpResult29 = GiftingBadgesUtils;
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
  const tmpResult32 = useNitroFileUploadMarketingEligible;
  const nitroFileUploadUpsellEligible = useNitroFileUploadMarketingEligible.useNitroFileUploadUpsellEligible(MainViewTooltipActionSheets);
  const tmpResult33 = useNitroFileUploadMarketingEligible;
  const shouldShowRobloxConnectionCoachmark = RobloxConnectionCoachmark.useShouldShowRobloxConnectionCoachmark();
  const tmpResult34 = RobloxConnectionCoachmark;
  const isDisplayNameStylesFlywheelSettersEnabled = DisplayNameStylesFlywheelExperiment.useIsDisplayNameStylesFlywheelSettersEnabled(MainViewTooltipActionSheets);
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
    let tmp37 = null != premiumDiscountOffer;
    if (tmp37) {
      tmp37 = null == premiumDiscountOffer.expiresAt;
    }
    const obj7 = { isEligible: tmp37, newSnowflakeId: null, actionSheetProperties: null };
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
    let tmp50 = tmp34;
    if (tmp34) {
      tmp50 = isGiftCoachmarkAssetReady;
    }
    const obj17 = { isEligible: tmp50, newSnowflakeId: stateFromStores3, actionSheetProperties: null };
    const obj18 = { coachmarkComponent: stateFromStores4 };
    obj17.actionSheetProperties = obj18;
    obj5[dismissible_content.DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET] = obj17;
    let tmp51 = !tmp34;
    if (tmp34) {
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
    const obj25 = { isEligible: isDisplayNameStylesFlywheelSettersEnabled, actionSheetProperties: {} };
    obj5[dismissible_content.DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_COACHMARK] = obj25;
    const obj26 = { isEligible: true, actionSheetProperties: {} };
    obj5[dismissible_content.DismissibleContent.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT] = obj26;
    const obj27 = { isEligible: nitroFileUploadAnnouncementEligible, actionSheetProperties: {} };
    obj5[dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_ANNOUNCEMENT] = obj27;
    const obj28 = { isEligible: nitroFileUploadUpsellEligible, actionSheetProperties: {} };
    obj5[dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_UPSELL] = obj28;
    const obj29 = { isEligible: tmp33, actionSheetProperties: {} };
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
    let tmp35 = obj5;
  } else {
    tmp35 = obj5;
  }
  return tmp35;
});