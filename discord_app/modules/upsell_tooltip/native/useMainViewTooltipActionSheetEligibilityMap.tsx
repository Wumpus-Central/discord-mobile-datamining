// === Module 18050: useMainViewTooltipActionSheetEligibilityMap ===

// Module 18050 (useMainViewTooltipActionSheetEligibilityMap)
import initialize from "initialize" /* 504 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1630 */;
import dismissible_content from "dismissible_content" /* 2052 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4997 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7390 */;
import useIsEligibleSenderForReferralProgram from "useIsEligibleSenderForReferralProgram" /* 8309 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 8313 */;
import GiftPromotionReminderExperiment2 from "GiftPromotionReminderExperiment" /* 10334 */;
import MarketingComponentType from "MarketingComponentType" /* 10335 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10340 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 12749 */;
import usePromotionMarketingComponent from "usePromotionMarketingComponent" /* 14424 */;
import DisplayNameStylesFlywheelExperiment from "DisplayNameStylesFlywheelExperiment" /* 15570 */;
import RobloxConnectionCoachmark from "RobloxConnectionCoachmark" /* 18018 */;
import ConnectionDeprecationBottomSheet from "ConnectionDeprecationBottomSheet" /* 18032 */;
import MainViewTooltipActionSheetsDisabledExperimentDefault from "MainViewTooltipActionSheetsDisabledExperiment" /* 18051 */;
import PremiumTrialOfferActionSheetKillSwitchExperiment2 from "PremiumTrialOfferActionSheetKillSwitchExperiment" /* 18053 */;
import useGiftingPromotionAssetsReadyDefault from "useGiftingPromotionAssetsReady" /* 18054 */;
import useNitroFileUploadMarketingEligible from "useNitroFileUploadMarketingEligible" /* 18055 */;
import _slicedToArray from "module_32" /* 32 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1261 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7395 */;
import GooglePlayPriceChangeStore from "GooglePlayPriceChangeStore" /* 18020 */;
import PromotionsStore from "PromotionsStore" /* 9357 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1246 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2062 */;

const require = globalThis.__r;

require = fn;
const PlatformTypes = fn(1087).PlatformTypes;
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
  const cResult = first(premiumDiscountOffer[11]).c(149);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [enabled2];
    class I {
      constructor() {
        return enabled.hasLoaded(isGiftReminderAssetReady.PRELOADED_USER_SETTINGS);
      }
    }
    cResult[0] = items;
    cResult[1] = I;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = first(premiumDiscountOffer[11]);
  const stateFromStores = first(premiumDiscountOffer[12]).useStateFromStores(tmp4, I);
  let tmp8 = importDefault;
  const tmpResult = first(premiumDiscountOffer[12]);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserRequiredActionStore];
    class T {
      constructor() {
        return closure_9.hasAction();
      }
    }
    cResult[2] = items1;
    cResult[3] = T;
    let tmp11 = T;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  const obj2 = { location: _location };
  const obj3 = require("MainViewTooltipActionSheetsDisabledExperiment");
  let tmp14 = stateFromStores;
  const stateFromStores1 = first(premiumDiscountOffer[12]).useStateFromStores(tmp10, tmp11);
  if (stateFromStores) {
    tmp14 = !obj3.getConfig(obj2).disabled;
  }
  if (tmp14) {
    tmp14 = !stateFromStores1;
  }
  if (tmp14) {
    tmp14 = !tmp(tmp2[14]).isMetaQuest();
    const tmpResult24 = tmp(tmp2[14]);
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [stateFromStores3];
    class N {
      constructor() {
        items = [, ];
        ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = closure_6);
        return items;
      }
    }
    cResult[4] = items2;
    cResult[5] = N;
    let tmp16 = N;
    let tmp15 = items2;
  } else {
    tmp15 = cResult[4];
    tmp16 = cResult[5];
  }
  const tmpResult23 = first(premiumDiscountOffer[12]);
  const tmp19 = premiumTrialOffer(first(premiumDiscountOffer[12]).useStateFromStoresArray(tmp15, tmp16), 2);
  first = tmp19[0];
  importDefault = tmp21;
  const tmp18 = premiumTrialOffer;
  const tmpResult25 = first(premiumDiscountOffer[12]);
  premiumDiscountOffer = first(premiumDiscountOffer[15]).usePremiumDiscountOffer();
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [enabled];
    class D {
      constructor() {
        RecurringReferralReminderExperiment = closure_0(closure_2[16]).RecurringReferralReminderExperiment;
        obj = { location: closure_12 };
        return RecurringReferralReminderExperiment.getConfig(obj, { autoTrackExposure: false }).bottomSheetEnabled;
      }
    }
    cResult[6] = items3;
    cResult[7] = D;
    let tmp24 = D;
    let tmp23 = items3;
  } else {
    tmp23 = cResult[6];
    tmp24 = cResult[7];
  }
  const tmpResult26 = first(premiumDiscountOffer[15]);
  const stateFromStores2 = first(premiumDiscountOffer[12]).useStateFromStores(tmp23, tmp24);
  const tmpResult27 = first(premiumDiscountOffer[12]);
  const isEligibleSenderForReferralProgram = first(premiumDiscountOffer[17]).useIsEligibleSenderForReferralProgram(!stateFromStores2);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [mobileBottomSheet];
    class B {
      constructor() {
        items = [, ];
        items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
        items[1] = mobileBottomSheet.getRecurringReminderStateId();
        return items;
      }
    }
    cResult[8] = items4;
    cResult[9] = B;
    let tmp29 = B;
    let tmp28 = items4;
  } else {
    tmp28 = cResult[8];
    tmp29 = cResult[9];
  }
  const tmpResult28 = first(premiumDiscountOffer[17]);
  const tmpResult29 = first(premiumDiscountOffer[12]);
  [tmp32, tmp33] = tmp18(first(premiumDiscountOffer[12]).useStateFromStoresArray(tmp28, tmp29), 2);
  let tmp34 = stateFromStores2;
  if (stateFromStores2) {
    tmp34 = isEligibleSenderForReferralProgram;
  }
  if (tmp34) {
    tmp34 = null != tmp32;
  }
  if (tmp34) {
    tmp34 = tmp32 > 0;
  }
  if (tmp34) {
    tmp34 = null != tmp33;
  }
  const tmp18Result = tmp18(first(premiumDiscountOffer[12]).useStateFromStoresArray(tmp28, tmp29), 2);
  premiumTrialOffer = first(premiumDiscountOffer[18]).usePremiumTrialOffer();
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { location: tmp9 };
    class B {
      constructor() {
        items = [, ];
        items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
        items[1] = mobileBottomSheet.getRecurringReminderStateId();
        return items;
      }
    }
    let tmp38 = obj4;
  } else {
    tmp38 = cResult[10];
  }
  const PremiumTrialOfferActionSheetKillSwitchExperiment = tmp(tmp2[19]).PremiumTrialOfferActionSheetKillSwitchExperiment;
  enabled = PremiumTrialOfferActionSheetKillSwitchExperiment.useConfig(tmp38).enabled;
  const tmpResult30 = first(premiumDiscountOffer[18]);
  const promotionMarketingComponent = first(premiumDiscountOffer[20]).usePromotionMarketingComponent(tmp(tmp2[21]).MarketingComponentType.MOBILE_BOTTOM_SHEET);
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
    class B {
      constructor() {
        items = [, ];
        items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
        items[1] = mobileBottomSheet.getRecurringReminderStateId();
        return items;
      }
    }
    cResult[11] = items5;
    cResult[12] = tmp45;
    let tmp43 = tmp45;
    let tmp42 = items5;
  } else {
    tmp42 = cResult[11];
    tmp43 = cResult[12];
  }
  const tmpResult31 = first(premiumDiscountOffer[20]);
  stateFromStores3 = first(premiumDiscountOffer[12]).useStateFromStores(tmp42, tmp43);
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const items6 = [stateFromStores5];
    class B {
      constructor() {
        items = [, ];
        items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
        items[1] = mobileBottomSheet.getRecurringReminderStateId();
        return items;
      }
    }
    cResult[13] = items6;
    cResult[14] = tmp50;
    let tmp48 = tmp50;
    let tmp47 = items6;
  } else {
    tmp47 = cResult[13];
    tmp48 = cResult[14];
  }
  const tmpResult32 = first(premiumDiscountOffer[12]);
  const stateFromStores4 = first(premiumDiscountOffer[12]).useStateFromStores(tmp47, tmp48);
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    const items7 = [stateFromStores5];
    class B {
      constructor() {
        items = [, ];
        items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
        items[1] = mobileBottomSheet.getRecurringReminderStateId();
        return items;
      }
    }
    cResult[15] = items7;
    cResult[16] = tmp55;
    let tmp53 = tmp55;
    let tmp52 = items7;
  } else {
    tmp52 = cResult[15];
    tmp53 = cResult[16];
  }
  const tmpResult33 = first(premiumDiscountOffer[12]);
  stateFromStores5 = first(premiumDiscountOffer[12]).useStateFromStores(tmp52, tmp53);
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { location: tmp9 };
    class B {
      constructor() {
        items = [, ];
        items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
        items[1] = mobileBottomSheet.getRecurringReminderStateId();
        return items;
      }
    }
    let tmp57 = obj5;
  } else {
    tmp57 = cResult[17];
  }
  const GiftPromotionReminderExperiment = tmp(tmp2[22]).GiftPromotionReminderExperiment;
  enabled2 = GiftPromotionReminderExperiment.useConfig(tmp57).enabled;
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { platform: "native", location: tmp9 };
    class B {
      constructor() {
        items = [, ];
        items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
        items[1] = mobileBottomSheet.getRecurringReminderStateId();
        return items;
      }
    }
    let tmp58 = obj6;
  } else {
    tmp58 = cResult[18];
  }
  const tmpResult34 = first(premiumDiscountOffer[12]);
  const giftingBadgeCoachmarkVariant = first(premiumDiscountOffer[23]).useGiftingBadgeCoachmarkVariant(tmp58);
  if (cResult[19] !== stateFromStores3) {
    let isDismissed = null != stateFromStores3;
    if (isDismissed) {
      isDismissed = tmp(tmp2[24]).UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(tmp2[25]).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, stateFromStores3).isDismissed;
      const tmpResult36 = tmp(tmp2[24]);
    }
    class B {
      constructor() {
        items = [, ];
        items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
        items[1] = mobileBottomSheet.getRecurringReminderStateId();
        return items;
      }
    }
    cResult[20] = isDismissed;
    let tmp60 = isDismissed;
  } else {
    tmp60 = cResult[20];
  }
  UserRequiredActionStore = tmp60;
  let isDismissed2 = null != stateFromStores3;
  if (isDismissed2) {
    isDismissed2 = tmp(tmp2[24]).UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(tmp2[25]).DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores3).isDismissed;
    const tmpResult37 = tmp(tmp2[24]);
  }
  let tmp62 = null;
  const tmpResult35 = first(premiumDiscountOffer[23]);
  if (!tmp60) {
    tmp62 = stateFromStores4;
  }
  let tmp63 = null;
  if (!isDismissed2) {
    tmp63 = stateFromStores5;
  }
  const tmp8ResultResult = tmp8(premiumDiscountOffer[26])(tmp62, tmp63);
  const isGiftCoachmarkAssetReady = tmp8ResultResult.isGiftCoachmarkAssetReady;
  const isGiftReminderAssetReady = tmp8ResultResult.isGiftReminderAssetReady;
  const tmp8Result = tmp8(premiumDiscountOffer[26]);
  const nitroFileUploadAnnouncementEligible = first(premiumDiscountOffer[27]).useNitroFileUploadAnnouncementEligible(tmp9);
  const tmpResult38 = first(premiumDiscountOffer[27]);
  const nitroFileUploadUpsellEligible = first(premiumDiscountOffer[27]).useNitroFileUploadUpsellEligible(tmp9);
  const tmpResult39 = first(premiumDiscountOffer[27]);
  const shouldShowRobloxConnectionCoachmark = first(premiumDiscountOffer[28]).useShouldShowRobloxConnectionCoachmark();
  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
    const items8 = [isGiftCoachmarkAssetReady.LEAGUE_OF_LEGENDS, ];
    class B {
      constructor() {
        items = [, ];
        items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
        items[1] = mobileBottomSheet.getRecurringReminderStateId();
        return items;
      }
    }
    cResult[21] = items8;
    let tmp68 = items8;
  } else {
    tmp68 = cResult[21];
  }
  if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { deprecatedPlatformTypes: tmp68 };
    class B {
      constructor() {
        items = [, ];
        items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
        items[1] = mobileBottomSheet.getRecurringReminderStateId();
        return items;
      }
    }
    let tmp70 = obj7;
  } else {
    tmp70 = cResult[22];
  }
  const tmpResult40 = first(premiumDiscountOffer[28]);
  const shouldShowConnectionDeprecationBottomSheet = first(premiumDiscountOffer[29]).useShouldShowConnectionDeprecationBottomSheet(tmp70);
  if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
    const obj8 = { deprecatedPlatformTypes: null };
    const items9 = [];
    class B {
      constructor() {
        items = [, ];
        items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
        items[1] = mobileBottomSheet.getRecurringReminderStateId();
        return items;
      }
    }
    obj8.deprecatedPlatformTypes = items9;
    cResult[23] = obj8;
    let tmp72 = obj8;
  } else {
    tmp72 = cResult[23];
  }
  const tmpResult41 = first(premiumDiscountOffer[29]);
  const shouldShowConnectionDeprecationBottomSheet1 = first(premiumDiscountOffer[29]).useShouldShowConnectionDeprecationBottomSheet(tmp72);
  const tmpResult42 = first(premiumDiscountOffer[29]);
  const isDisplayNameStylesFlywheelSettersEnabled = first(premiumDiscountOffer[30]).useIsDisplayNameStylesFlywheelSettersEnabled(tmp9);
  const tmpResult43 = first(premiumDiscountOffer[30]);
  const canSet = first(premiumDiscountOffer[31]).useCustomTypingIndicatorConfig(tmp9).canSet;
  if (cResult[24] === tmp19[1]) {
    if (cResult[25] === first) {
      let tmp76 = cResult[26];
    }
    if (cResult[27] !== premiumDiscountOffer) {
      function isDiscountOfferEligible() {
        return null != premiumDiscountOffer && null == premiumDiscountOffer.expiresAt;
      }
      cResult[27] = premiumDiscountOffer;
      class B {
        constructor() {
          items = [, ];
          items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
          items[1] = mobileBottomSheet.getRecurringReminderStateId();
          return items;
        }
      }
      cResult[28] = isDiscountOfferEligible;
      let tmp77 = isDiscountOfferEligible;
    } else {
      tmp77 = cResult[28];
    }
    if (cResult[29] === enabled) {
      if (cResult[30] === premiumTrialOffer) {
        let tmp78 = cResult[31];
      }
      class B {
        constructor() {
          items = [, ];
          items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
          items[1] = mobileBottomSheet.getRecurringReminderStateId();
          return items;
        }
      }
      if (cResult[32] !== undefined) {
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
        class B {
          constructor() {
            items = [, ];
            items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
            items[1] = mobileBottomSheet.getRecurringReminderStateId();
            return items;
          }
        }
        cResult[32] = dismissibleContent;
        cResult[33] = isPremiumMarketingMomentAnnouncementEligible;
        let tmp81 = isPremiumMarketingMomentAnnouncementEligible;
      } else {
        tmp81 = cResult[33];
      }
      let dismissibleContent1;
      if (mobileBottomSheet != null) {
        dismissibleContent1 = mobileBottomSheet.dismissibleContent;
      }
      if (cResult[34] !== dismissibleContent1) {
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
        class B {
          constructor() {
            items = [, ];
            items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
            items[1] = mobileBottomSheet.getRecurringReminderStateId();
            return items;
          }
        }
        cResult[34] = dismissibleContent2;
        cResult[35] = isPremiumMarketingMomentReminderEligible;
        let tmp84 = isPremiumMarketingMomentReminderEligible;
      } else {
        tmp84 = cResult[35];
      }
      _location = tmp86;
      closure_13 = tmp87;
      if (cResult[36] === null != stateFromStores4) {
        if (cResult[37] === isGiftCoachmarkAssetReady) {
          let tmp88 = cResult[38];
        }
        if (cResult[39] === stateFromStores3) {
          if (cResult[40] === enabled2) {
            if (cResult[41] === stateFromStores5) {
              if (cResult[42] === tmp86) {
                if (cResult[43] === tmp87) {
                  if (cResult[44] === tmp60) {
                    if (tmp14) {
                      if (cResult[48] !== tmp76) {
                        const tmp76Result = tmp76();
                        cResult[48] = tmp76;
                        class B {
                          constructor() {
                            items = [, ];
                            items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
                            items[1] = mobileBottomSheet.getRecurringReminderStateId();
                            return items;
                          }
                        }
                        cResult[49] = tmp76Result;
                        let tmp91 = tmp76Result;
                      } else {
                        tmp91 = cResult[49];
                      }
                      let priceChangeId;
                      if (tmp21 != null) {
                        priceChangeId = tmp21.priceChangeId;
                      }
                      class B {
                        constructor() {
                          items = [, ];
                          items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
                          items[1] = mobileBottomSheet.getRecurringReminderStateId();
                          return items;
                        }
                      }
                      if (cResult[50] === Symbol.for("react.memo_cache_sentinel")) {
                        cResult[50] = {};
                        class B {
                          constructor() {
                            items = [, ];
                            items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
                            items[1] = mobileBottomSheet.getRecurringReminderStateId();
                            return items;
                          }
                        }
                        const obj9 = {};
                      } else {
                        const tmp94 = cResult[50];
                      }
                      if (cResult[51] === tmp91) {
                        const tmp77Result = tmp77();
                        class B {
                          constructor() {
                            items = [, ];
                            items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
                            items[1] = mobileBottomSheet.getRecurringReminderStateId();
                            return items;
                          }
                        }
                        if (cResult[54] !== premiumDiscountOffer) {
                          if (null != premiumDiscountOffer) {
                            const obj10 = { userDiscountOffer: premiumDiscountOffer };
                            let obj11 = obj10;
                          } else {
                            obj11 = {};
                          }
                          cResult[54] = premiumDiscountOffer;
                          class B {
                            constructor() {
                              items = [, ];
                              items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
                              items[1] = mobileBottomSheet.getRecurringReminderStateId();
                              return items;
                            }
                          }
                          cResult[55] = obj11;
                        } else {
                          if (cResult[56] === tmp77Result) {
                            if (cResult[57] === tmp97) {
                              if (cResult[60] !== tmp78) {
                                const tmp78Result = tmp78();
                                cResult[60] = tmp78;
                                class B {
                                  constructor() {
                                    items = [, ];
                                    items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
                                    items[1] = mobileBottomSheet.getRecurringReminderStateId();
                                    return items;
                                  }
                                }
                                cResult[61] = tmp78Result;
                                let tmp101 = tmp78Result;
                              } else {
                                tmp101 = cResult[61];
                              }
                              class B {
                                constructor() {
                                  items = [, ];
                                  items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
                                  items[1] = mobileBottomSheet.getRecurringReminderStateId();
                                  return items;
                                }
                              }
                              if (cResult[62] !== premiumTrialOffer) {
                                if (null != premiumTrialOffer) {
                                  const obj12 = { userTrialOffer: premiumTrialOffer };
                                  let obj13 = obj12;
                                } else {
                                  obj13 = {};
                                }
                                cResult[62] = premiumTrialOffer;
                                class B {
                                  constructor() {
                                    items = [, ];
                                    items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
                                    items[1] = mobileBottomSheet.getRecurringReminderStateId();
                                    return items;
                                  }
                                }
                                cResult[63] = obj13;
                              } else {
                                if (cResult[64] === tmp101) {
                                  if (cResult[65] === tmp103) {
                                    const tmp81Result = tmp81();
                                    class B {
                                      constructor() {
                                        items = [, ];
                                        items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
                                        items[1] = mobileBottomSheet.getRecurringReminderStateId();
                                        return items;
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
                                    if (cResult[68] === mobileBottomSheet) {
                                      if (cResult[69] === id) {
                                        if (cResult[70] === promotionId) {
                                          let tmp111 = cResult[71];
                                        }
                                        if (cResult[72] === tmp81Result) {
                                          if (cResult[73] === tmp108) {
                                            const tmp84Result = tmp84();
                                            class B {
                                              constructor() {
                                                items = [, ];
                                                items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
                                                items[1] = mobileBottomSheet.getRecurringReminderStateId();
                                                return items;
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
                                            if (cResult[76] === mobileBottomSheet) {
                                              if (cResult[77] === id1) {
                                                if (cResult[78] === promotionId1) {
                                                  let tmp117 = cResult[79];
                                                }
                                                if (cResult[80] === tmp84Result) {
                                                  if (cResult[81] === tmp114) {
                                                    if (cResult[84] !== tmp88) {
                                                      const tmp88Result = tmp88();
                                                      cResult[84] = tmp88;
                                                      class B {
                                                        constructor() {
                                                          items = [, ];
                                                          items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
                                                          items[1] = mobileBottomSheet.getRecurringReminderStateId();
                                                          return items;
                                                        }
                                                      }
                                                      cResult[85] = tmp88Result;
                                                      let tmp119 = tmp88Result;
                                                    } else {
                                                      tmp119 = cResult[85];
                                                    }
                                                    if (cResult[86] !== stateFromStores4) {
                                                      const obj14 = { coachmarkComponent: stateFromStores4 };
                                                      class B {
                                                        constructor() {
                                                          items = [, ];
                                                          items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
                                                          items[1] = mobileBottomSheet.getRecurringReminderStateId();
                                                          return items;
                                                        }
                                                      }
                                                      cResult[87] = obj14;
                                                      let tmp121 = obj14;
                                                    } else {
                                                      tmp121 = cResult[87];
                                                    }
                                                    class B {
                                                      constructor() {
                                                        items = [, ];
                                                        items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
                                                        items[1] = mobileBottomSheet.getRecurringReminderStateId();
                                                        return items;
                                                      }
                                                    }
                                                    const obj15 = { isEligible: tmp119, newSnowflakeId: stateFromStores3, actionSheetProperties: tmp121 };
                                                    cResult[88] = stateFromStores3;
                                                    cResult[89] = tmp119;
                                                    cResult[90] = tmp121;
                                                    cResult[91] = obj15;
                                                  }
                                                }
                                                const obj16 = { isEligible: null, newSnowflakeId: null, actionSheetProperties: null };
                                                class B {
                                                  constructor() {
                                                    items = [, ];
                                                    items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
                                                    items[1] = mobileBottomSheet.getRecurringReminderStateId();
                                                    return items;
                                                  }
                                                }
                                                obj16.newSnowflakeId = tmp114;
                                                obj16.actionSheetProperties = tmp117;
                                                cResult[80] = tmp84Result;
                                                cResult[81] = tmp114;
                                                cResult[82] = tmp117;
                                                cResult[83] = obj16;
                                              }
                                            }
                                            const obj17 = { bottomSheetData: mobileBottomSheet, componentId: id1, promotionId: promotionId1 };
                                            cResult[76] = mobileBottomSheet;
                                            cResult[77] = id1;
                                            cResult[78] = promotionId1;
                                            cResult[79] = obj17;
                                            tmp117 = obj17;
                                          }
                                        }
                                        const obj18 = { isEligible: null, newSnowflakeId: null, actionSheetProperties: null };
                                        class B {
                                          constructor() {
                                            items = [, ];
                                            items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
                                            items[1] = mobileBottomSheet.getRecurringReminderStateId();
                                            return items;
                                          }
                                        }
                                        obj18.newSnowflakeId = tmp108;
                                        obj18.actionSheetProperties = tmp111;
                                        cResult[72] = tmp81Result;
                                        cResult[73] = tmp108;
                                        cResult[74] = tmp111;
                                        cResult[75] = obj18;
                                      }
                                    }
                                    const obj19 = { bottomSheetData: mobileBottomSheet, componentId: id, promotionId };
                                    cResult[68] = mobileBottomSheet;
                                    cResult[69] = id;
                                    cResult[70] = promotionId;
                                    cResult[71] = obj19;
                                    tmp111 = obj19;
                                  }
                                }
                                const obj20 = { isEligible: null, newSnowflakeId: null, actionSheetProperties: null };
                                class B {
                                  constructor() {
                                    items = [, ];
                                    items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
                                    items[1] = mobileBottomSheet.getRecurringReminderStateId();
                                    return items;
                                  }
                                }
                                obj20.newSnowflakeId = tmp103;
                                obj20.actionSheetProperties = cResult[63];
                                cResult[64] = tmp101;
                                cResult[65] = tmp103;
                                cResult[66] = cResult[63];
                                cResult[67] = obj20;
                              }
                            }
                          }
                          const obj21 = { isEligible: null, newSnowflakeId: null, actionSheetProperties: null };
                          class B {
                            constructor() {
                              items = [, ];
                              items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
                              items[1] = mobileBottomSheet.getRecurringReminderStateId();
                              return items;
                            }
                          }
                          obj21.newSnowflakeId = tmp97;
                          obj21.actionSheetProperties = cResult[55];
                          cResult[56] = tmp77Result;
                          cResult[57] = tmp97;
                          cResult[58] = cResult[55];
                          cResult[59] = obj21;
                        }
                      }
                      const obj22 = { isEligible: tmp91, newSnowflakeId: priceChangeId, actionSheetProperties: tmp94 };
                      cResult[51] = tmp91;
                      cResult[52] = priceChangeId;
                      cResult[53] = obj22;
                    } else {
                      const _Symbol = Symbol;
                      if (cResult[47] === Symbol.for("react.memo_cache_sentinel")) {
                        cResult[47] = {};
                        class B {
                          constructor() {
                            items = [, ];
                            items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
                            items[1] = mobileBottomSheet.getRecurringReminderStateId();
                            return items;
                          }
                        }
                        const obj23 = {};
                      }
                      class B {
                        constructor() {
                          items = [, ];
                          items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
                          items[1] = mobileBottomSheet.getRecurringReminderStateId();
                          return items;
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
        class B {
          constructor() {
            items = [, ];
            items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
            items[1] = mobileBottomSheet.getRecurringReminderStateId();
            return items;
          }
        }
        cResult[39] = stateFromStores3;
        cResult[40] = enabled2;
        cResult[41] = stateFromStores5;
        cResult[42] = tmp86;
        cResult[43] = tmp87;
        cResult[44] = tmp60;
        cResult[45] = isGiftReminderAssetReady;
        cResult[46] = isGiftingPromotionReminderEligible;
      }
      function isGiftingPromotionFirstTimeEligible() {
        let tmp = closure_12;
        if (closure_12) {
          tmp = isGiftCoachmarkAssetReady;
        }
        return tmp;
      }
      cResult[36] = null != stateFromStores4;
      cResult[37] = isGiftCoachmarkAssetReady;
      cResult[38] = isGiftingPromotionFirstTimeEligible;
      tmp88 = isGiftingPromotionFirstTimeEligible;
    }
    class B {
      constructor() {
        items = [, ];
        items[0] = mobileBottomSheet.getReferralsRemaining({ bypassFetch: true });
        items[1] = mobileBottomSheet.getRecurringReminderStateId();
        return items;
      }
    }
    cResult[29] = enabled;
    cResult[30] = premiumTrialOffer;
    cResult[31] = tmp79;
    tmp78 = tmp79;
  }
  function isGooglePlayPriceChangeEligible() {
    let tmp = first;
    if (first) {
      tmp = null != closure_1;
    }
    return tmp;
  }
  cResult[24] = tmp19[1];
  cResult[25] = first;
  cResult[26] = isGooglePlayPriceChangeEligible;
  tmp76 = isGooglePlayPriceChangeEligible;
  const tmpResult44 = first(premiumDiscountOffer[31]);
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
  const tmpResult21 = initialize;
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
  const tmpResult22 = usePremiumDiscountOffer;
  const items3 = [ApexExperimentStore];
  let stateFromStores2 = initialize.useStateFromStores(items3, () => {
    const RecurringReferralReminderExperiment = require("RecurringReferralReminderExperiment").RecurringReferralReminderExperiment;
    return RecurringReferralReminderExperiment.getConfig({ location: _location }, { autoTrackExposure: false }).bottomSheetEnabled;
  });
  const tmpResult23 = initialize;
  const isEligibleSenderForReferralProgram = useIsEligibleSenderForReferralProgram.useIsEligibleSenderForReferralProgram(!stateFromStores2);
  const tmpResult24 = useIsEligibleSenderForReferralProgram;
  const items4 = [ReferralTrialStore];
  const tmpResult25 = initialize;
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
  const tmpResult26 = usePremiumTrialOffer;
  const promotionMarketingComponent = usePromotionMarketingComponent.usePromotionMarketingComponent(MarketingComponentType.MarketingComponentType.MOBILE_BOTTOM_SHEET);
  let oneofKind;
  if (promotionMarketingComponent != null) {
    oneofKind = promotionMarketingComponent.properties.properties.oneofKind;
  }
  let mobileBottomSheet = null;
  if ("mobileBottomSheet" === oneofKind) {
    mobileBottomSheet = promotionMarketingComponent.properties.properties.mobileBottomSheet;
  }
  const tmpResult27 = usePromotionMarketingComponent;
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
  const tmpResult29 = initialize;
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
  const tmpResult30 = initialize;
  const giftingBadgeCoachmarkVariant = GiftingBadgesUtils.useGiftingBadgeCoachmarkVariant({ platform: "native", location: MainViewTooltipActionSheets });
  let isDismissed = null != stateFromStores3;
  if (isDismissed) {
    isDismissed = DismissibleContentUnsafeUtils.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(dismissible_content.DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, stateFromStores3).isDismissed;
    const tmpResult32 = DismissibleContentUnsafeUtils;
  }
  let isDismissed2 = null != stateFromStores3;
  if (isDismissed2) {
    isDismissed2 = DismissibleContentUnsafeUtils.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(dismissible_content.DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores3).isDismissed;
    const tmpResult33 = DismissibleContentUnsafeUtils;
  }
  let tmp25 = null;
  const tmpResult31 = GiftingBadgesUtils;
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
  const tmpResult34 = useNitroFileUploadMarketingEligible;
  const nitroFileUploadUpsellEligible = useNitroFileUploadMarketingEligible.useNitroFileUploadUpsellEligible(MainViewTooltipActionSheets);
  const tmpResult35 = useNitroFileUploadMarketingEligible;
  const items8 = [, ];
  ({ LEAGUE_OF_LEGENDS: arr9[0], RIOT_GAMES: arr9[1] } = PlatformTypes);
  const shouldShowRobloxConnectionCoachmark = RobloxConnectionCoachmark.useShouldShowRobloxConnectionCoachmark();
  const tmpResult36 = RobloxConnectionCoachmark;
  const shouldShowConnectionDeprecationBottomSheet = ConnectionDeprecationBottomSheet.useShouldShowConnectionDeprecationBottomSheet({ deprecatedPlatformTypes: items8 });
  const tmpResult37 = ConnectionDeprecationBottomSheet;
  const obj5 = { deprecatedPlatformTypes: null };
  const items9 = [PlatformTypes.BATTLENET];
  obj5.deprecatedPlatformTypes = items9;
  const shouldShowConnectionDeprecationBottomSheet1 = ConnectionDeprecationBottomSheet.useShouldShowConnectionDeprecationBottomSheet(obj5);
  const tmpResult38 = ConnectionDeprecationBottomSheet;
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
    let tmp40 = null != premiumDiscountOffer;
    if (tmp40) {
      tmp40 = null == premiumDiscountOffer.expiresAt;
    }
    const obj8 = { isEligible: tmp40, newSnowflakeId: null, actionSheetProperties: null };
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
    let tmp53 = tmp37;
    if (tmp37) {
      tmp53 = isGiftCoachmarkAssetReady;
    }
    const obj18 = { isEligible: tmp53, newSnowflakeId: stateFromStores3, actionSheetProperties: null };
    const obj19 = { coachmarkComponent: stateFromStores4 };
    obj18.actionSheetProperties = obj19;
    obj6[dismissible_content.DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET] = obj18;
    let tmp54 = !tmp37;
    if (tmp37) {
      tmp54 = null == stateFromStores5;
    }
    let tmp55 = !tmp54;
    if (!tmp54) {
      let tmp56 = null != stateFromStores3;
      if (tmp56) {
        let tmp57 = isDismissed;
        if (tmp57) {
          if (enabled) {
            enabled = null != stateFromStores5;
          }
          if (enabled) {
            enabled = isGiftReminderAssetReady;
          }
          tmp57 = enabled;
        }
        tmp56 = tmp57;
      }
      tmp55 = tmp56;
    }
    const obj20 = { isEligible: tmp55, newSnowflakeId: stateFromStores3, actionSheetProperties: null };
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
    const obj26 = { isEligible: isDisplayNameStylesFlywheelSettersEnabled, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_COACHMARK] = obj26;
    const obj27 = { isEligible: shouldShowConnectionDeprecationBottomSheet, actionSheetProperties: null };
    const obj28 = { platformTypes: items8 };
    obj27.actionSheetProperties = obj28;
    obj6[dismissible_content.DismissibleContent.RIOT_CONNECTION_DEPRECATION_DISABLE] = obj27;
    const obj29 = { isEligible: shouldShowConnectionDeprecationBottomSheet1, actionSheetProperties: null };
    const obj30 = { platformTypes: null };
    const items10 = [PlatformTypes.BATTLENET];
    obj30.platformTypes = items10;
    obj29.actionSheetProperties = obj30;
    obj6[dismissible_content.DismissibleContent.BATTLENET_CONNECTION_DEPRECATION_DISABLE] = obj29;
    const obj31 = { isEligible: true, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT] = obj31;
    const obj32 = { isEligible: nitroFileUploadAnnouncementEligible, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_ANNOUNCEMENT] = obj32;
    const obj33 = { isEligible: nitroFileUploadUpsellEligible, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_UPSELL] = obj33;
    const obj34 = { isEligible: tmp36, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_COACHMARK] = obj34;
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
    const obj35 = { isEligible: stateFromStores2, newSnowflakeId: tmp15, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.MOBILE_REFERRAL_PROGRAM_BOTTOM_SHEET_ENTRYPOINT] = obj35;
    let tmp38 = obj6;
  } else {
    tmp38 = obj6;
  }
  return tmp38;
});