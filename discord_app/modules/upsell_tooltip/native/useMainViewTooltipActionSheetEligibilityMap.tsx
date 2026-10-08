// === Module 17444: useMainViewTooltipActionSheetEligibilityMap ===

// Module 17444 (useMainViewTooltipActionSheetEligibilityMap)
import initialize from "initialize" /* 504 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1627 */;
import dismissible_content from "dismissible_content" /* 2048 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4898 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7158 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 8063 */;
import GiftPromotionReminderExperiment2 from "GiftPromotionReminderExperiment" /* 10079 */;
import MarketingComponentType from "MarketingComponentType" /* 10080 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10085 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 11657 */;
import usePromotionMarketingComponent from "usePromotionMarketingComponent" /* 13544 */;
import DisplayNameStylesFlywheelExperiment from "DisplayNameStylesFlywheelExperiment" /* 14685 */;
import RobloxConnectionCoachmark from "RobloxConnectionCoachmark" /* 17419 */;
import ConnectionDeprecationBottomSheet from "ConnectionDeprecationBottomSheet" /* 17431 */;
import MainViewTooltipActionSheetsDisabledExperimentDefault from "MainViewTooltipActionSheetsDisabledExperiment" /* 17445 */;
import PremiumTrialOfferActionSheetKillSwitchExperiment2 from "PremiumTrialOfferActionSheetKillSwitchExperiment" /* 17446 */;
import useGiftingPromotionAssetsReadyDefault from "useGiftingPromotionAssetsReady" /* 17447 */;
import useNitroFileUploadMarketingEligible from "useNitroFileUploadMarketingEligible" /* 17448 */;
import _slicedToArray from "module_32" /* 32 */;
import GooglePlayPriceChangeStore from "GooglePlayPriceChangeStore" /* 17421 */;
import PromotionsStore from "PromotionsStore" /* 10006 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1243 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2057 */;

const require = globalThis.__r;

require = fn;
const PlatformTypes = fn(1085).PlatformTypes;
const PremiumConstants = fn(1391);
({ PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID } = PremiumConstants);
const UserSettingsTypes = fn(1095).UserSettingsTypes;
const MainViewTooltipActionSheets = "MainViewTooltipActionSheets";
let items = [PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID];
const set = new Set(items);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/upsell_tooltip/native/useMainViewTooltipActionSheetEligibilityMap.tsx");

export const useMainViewTooltipActionSheetMap = ReactCompilerGating.isReactCompilerEnabled() ? (function useMainViewTooltipActionSheetMap() {
  const cResult = first(premiumDiscountOffer[9]).c(140);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [stateFromStores2];
    const fn = function c() {
      return stateFromStores2.hasLoaded(constants.PRELOADED_USER_SETTINGS);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = first(premiumDiscountOffer[9]);
  const stateFromStores = first(premiumDiscountOffer[10]).useStateFromStores(tmp4, tmp5);
  let tmp8 = importDefault;
  const tmpResult = first(premiumDiscountOffer[10]);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [stateFromStores4];
    class C {
      constructor() {
        return closure_7.hasAction();
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
  const obj2 = { location: isGiftCoachmarkAssetReady };
  const obj3 = require("MainViewTooltipActionSheetsDisabledExperiment");
  let tmp14 = stateFromStores;
  const stateFromStores1 = first(premiumDiscountOffer[10]).useStateFromStores(tmp10, tmp11);
  if (stateFromStores) {
    tmp14 = !obj3.getConfig(obj2).disabled;
  }
  if (tmp14) {
    tmp14 = !stateFromStores1;
  }
  if (tmp14) {
    tmp14 = !tmp(tmp2[12]).isMetaQuest();
    const tmpResult21 = tmp(tmp2[12]);
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [enabled];
    class N {
      constructor() {
        items = [, ];
        ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = enabled);
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
  const tmpResult20 = first(premiumDiscountOffer[10]);
  const tmp18 = premiumTrialOffer(first(premiumDiscountOffer[10]).useStateFromStoresArray(tmp15, tmp16), 2);
  first = tmp18[0];
  importDefault = tmp20;
  const tmpResult22 = first(premiumDiscountOffer[10]);
  premiumDiscountOffer = first(premiumDiscountOffer[13]).usePremiumDiscountOffer();
  const tmpResult23 = first(premiumDiscountOffer[13]);
  premiumTrialOffer = first(premiumDiscountOffer[14]).usePremiumTrialOffer();
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { location: tmp9 };
    class N {
      constructor() {
        items = [, ];
        ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = enabled);
        return items;
      }
    }
    let tmp23 = obj4;
  } else {
    tmp23 = cResult[6];
  }
  const PremiumTrialOfferActionSheetKillSwitchExperiment = tmp(tmp2[15]).PremiumTrialOfferActionSheetKillSwitchExperiment;
  enabled = PremiumTrialOfferActionSheetKillSwitchExperiment.useConfig(tmp23).enabled;
  const tmpResult24 = first(premiumDiscountOffer[14]);
  const promotionMarketingComponent = first(premiumDiscountOffer[16]).usePromotionMarketingComponent(tmp(tmp2[17]).MarketingComponentType.MOBILE_BOTTOM_SHEET);
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
        giftPromotion = mobileBottomSheet.getGiftPromotion();
        id = undefined;
        if (giftPromotion != null) {
          id = giftPromotion.id;
        }
        return id;
      }
    }
    cResult[7] = items3;
    cResult[8] = U;
    let tmp28 = U;
    let tmp27 = items3;
  } else {
    tmp27 = cResult[7];
    tmp28 = cResult[8];
  }
  const tmpResult25 = first(premiumDiscountOffer[16]);
  stateFromStores2 = first(premiumDiscountOffer[10]).useStateFromStores(tmp27, tmp28);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [mobileBottomSheet];
    class U {
      constructor() {
        giftPromotion = mobileBottomSheet.getGiftPromotion();
        id = undefined;
        if (giftPromotion != null) {
          id = giftPromotion.id;
        }
        return id;
      }
    }
    cResult[9] = tmp34;
    cResult[10] = items4;
    let tmp32 = items4;
    let tmp31 = tmp34;
  } else {
    tmp31 = cResult[9];
    tmp32 = cResult[10];
  }
  const tmpResult26 = first(premiumDiscountOffer[10]);
  const stateFromStores3 = first(premiumDiscountOffer[10]).useStateFromStores(tmp32, tmp31);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    const items5 = [mobileBottomSheet];
    class Y {
      constructor() {
        marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
        prop = null;
        if (null != marketingComponentByType) {
          str = "giftReminderCoachmark";
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
    let tmp37 = Y;
    let tmp36 = items5;
  } else {
    tmp36 = cResult[11];
    tmp37 = cResult[12];
  }
  const tmpResult27 = first(premiumDiscountOffer[10]);
  stateFromStores4 = first(premiumDiscountOffer[10]).useStateFromStores(tmp36, tmp37);
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { location: tmp9 };
    class Y {
      constructor() {
        marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
        prop = null;
        if (null != marketingComponentByType) {
          str = "giftReminderCoachmark";
          prop = null;
          if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
            prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
          }
        }
        return prop;
      }
    }
    let tmp40 = obj5;
  } else {
    tmp40 = cResult[13];
  }
  const GiftPromotionReminderExperiment = tmp(tmp2[18]).GiftPromotionReminderExperiment;
  const enabled2 = GiftPromotionReminderExperiment.useConfig(tmp40).enabled;
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { platform: "native", location: tmp9 };
    class Y {
      constructor() {
        marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
        prop = null;
        if (null != marketingComponentByType) {
          str = "giftReminderCoachmark";
          prop = null;
          if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
            prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
          }
        }
        return prop;
      }
    }
    let tmp41 = obj6;
  } else {
    tmp41 = cResult[14];
  }
  const tmpResult28 = first(premiumDiscountOffer[10]);
  const giftingBadgeCoachmarkVariant = first(premiumDiscountOffer[19]).useGiftingBadgeCoachmarkVariant(tmp41);
  if (cResult[15] !== stateFromStores2) {
    let isDismissed = null != stateFromStores2;
    if (isDismissed) {
      isDismissed = tmp(tmp2[20]).UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(tmp2[21]).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, stateFromStores2).isDismissed;
      const tmpResult30 = tmp(tmp2[20]);
    }
    class Y {
      constructor() {
        marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
        prop = null;
        if (null != marketingComponentByType) {
          str = "giftReminderCoachmark";
          prop = null;
          if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
            prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
          }
        }
        return prop;
      }
    }
    cResult[16] = isDismissed;
    let tmp43 = isDismissed;
  } else {
    tmp43 = cResult[16];
  }
  constants = tmp43;
  let isDismissed2 = null != stateFromStores2;
  if (isDismissed2) {
    isDismissed2 = tmp(tmp2[20]).UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(tmp2[21]).DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores2).isDismissed;
    const tmpResult31 = tmp(tmp2[20]);
  }
  let tmp45 = null;
  const tmpResult29 = first(premiumDiscountOffer[19]);
  if (!tmp43) {
    tmp45 = stateFromStores3;
  }
  let tmp46 = null;
  if (!isDismissed2) {
    tmp46 = stateFromStores4;
  }
  const tmp8ResultResult = tmp8(premiumDiscountOffer[22])(tmp45, tmp46);
  isGiftCoachmarkAssetReady = tmp8ResultResult.isGiftCoachmarkAssetReady;
  const isGiftReminderAssetReady = tmp8ResultResult.isGiftReminderAssetReady;
  const tmp8Result = tmp8(premiumDiscountOffer[22]);
  const nitroFileUploadAnnouncementEligible = first(premiumDiscountOffer[23]).useNitroFileUploadAnnouncementEligible(tmp9);
  const tmpResult32 = first(premiumDiscountOffer[23]);
  const nitroFileUploadUpsellEligible = first(premiumDiscountOffer[23]).useNitroFileUploadUpsellEligible(tmp9);
  const tmpResult33 = first(premiumDiscountOffer[23]);
  const shouldShowRobloxConnectionCoachmark = first(premiumDiscountOffer[24]).useShouldShowRobloxConnectionCoachmark();
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    const items6 = [enabled2.LEAGUE_OF_LEGENDS, ];
    class Y {
      constructor() {
        marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
        prop = null;
        if (null != marketingComponentByType) {
          str = "giftReminderCoachmark";
          prop = null;
          if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
            prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
          }
        }
        return prop;
      }
    }
    cResult[17] = items6;
    let tmp51 = items6;
  } else {
    tmp51 = cResult[17];
  }
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { deprecatedPlatformTypes: tmp51 };
    class Y {
      constructor() {
        marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
        prop = null;
        if (null != marketingComponentByType) {
          str = "giftReminderCoachmark";
          prop = null;
          if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
            prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
          }
        }
        return prop;
      }
    }
    let tmp53 = obj7;
  } else {
    tmp53 = cResult[18];
  }
  const tmpResult34 = first(premiumDiscountOffer[24]);
  const shouldShowConnectionDeprecationBottomSheet = first(premiumDiscountOffer[25]).useShouldShowConnectionDeprecationBottomSheet(tmp53);
  if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
    const obj8 = { deprecatedPlatformTypes: null };
    const items7 = [];
    class Y {
      constructor() {
        marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
        prop = null;
        if (null != marketingComponentByType) {
          str = "giftReminderCoachmark";
          prop = null;
          if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
            prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
          }
        }
        return prop;
      }
    }
    obj8.deprecatedPlatformTypes = items7;
    cResult[19] = obj8;
    let tmp55 = obj8;
  } else {
    tmp55 = cResult[19];
  }
  const tmpResult35 = first(premiumDiscountOffer[25]);
  const shouldShowConnectionDeprecationBottomSheet1 = first(premiumDiscountOffer[25]).useShouldShowConnectionDeprecationBottomSheet(tmp55);
  const tmpResult36 = first(premiumDiscountOffer[25]);
  const isDisplayNameStylesFlywheelSettersEnabled = first(premiumDiscountOffer[26]).useIsDisplayNameStylesFlywheelSettersEnabled(tmp9);
  const tmpResult37 = first(premiumDiscountOffer[26]);
  const canSet = first(premiumDiscountOffer[27]).useCustomTypingIndicatorConfig(tmp9).canSet;
  if (cResult[20] === tmp18[1]) {
    if (cResult[21] === first) {
      let tmp59 = cResult[22];
    }
    if (cResult[23] !== premiumDiscountOffer) {
      function isDiscountOfferEligible() {
        return null != premiumDiscountOffer && null == premiumDiscountOffer.expiresAt;
      }
      cResult[23] = premiumDiscountOffer;
      class Y {
        constructor() {
          marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
          prop = null;
          if (null != marketingComponentByType) {
            str = "giftReminderCoachmark";
            prop = null;
            if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
              prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
            }
          }
          return prop;
        }
      }
      cResult[24] = isDiscountOfferEligible;
      let tmp60 = isDiscountOfferEligible;
    } else {
      tmp60 = cResult[24];
    }
    if (cResult[25] === enabled) {
      if (cResult[26] === premiumTrialOffer) {
        let tmp61 = cResult[27];
      }
      class Y {
        constructor() {
          marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
          prop = null;
          if (null != marketingComponentByType) {
            str = "giftReminderCoachmark";
            prop = null;
            if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
              prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
            }
          }
          return prop;
        }
      }
      if (cResult[28] !== undefined) {
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
        class Y {
          constructor() {
            marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
            prop = null;
            if (null != marketingComponentByType) {
              str = "giftReminderCoachmark";
              prop = null;
              if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
              }
            }
            return prop;
          }
        }
        cResult[28] = dismissibleContent;
        cResult[29] = isPremiumMarketingMomentAnnouncementEligible;
        let tmp64 = isPremiumMarketingMomentAnnouncementEligible;
      } else {
        tmp64 = cResult[29];
      }
      let dismissibleContent1;
      if (mobileBottomSheet != null) {
        dismissibleContent1 = mobileBottomSheet.dismissibleContent;
      }
      if (cResult[30] !== dismissibleContent1) {
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
        class Y {
          constructor() {
            marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
            prop = null;
            if (null != marketingComponentByType) {
              str = "giftReminderCoachmark";
              prop = null;
              if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
              }
            }
            return prop;
          }
        }
        cResult[30] = dismissibleContent2;
        cResult[31] = isPremiumMarketingMomentReminderEligible;
        let tmp67 = isPremiumMarketingMomentReminderEligible;
      } else {
        tmp67 = cResult[31];
      }
      closure_12 = tmp69;
      closure_13 = tmp70;
      if (cResult[32] === null != stateFromStores3) {
        if (cResult[33] === isGiftCoachmarkAssetReady) {
          let tmp71 = cResult[34];
        }
        if (cResult[35] === stateFromStores2) {
          if (cResult[36] === enabled2) {
            if (cResult[37] === stateFromStores4) {
              if (cResult[38] === tmp69) {
                if (cResult[39] === tmp70) {
                  if (cResult[40] === tmp43) {
                    if (tmp14) {
                      if (cResult[44] !== tmp59) {
                        const tmp59Result = tmp59();
                        cResult[44] = tmp59;
                        class Y {
                          constructor() {
                            marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
                            prop = null;
                            if (null != marketingComponentByType) {
                              str = "giftReminderCoachmark";
                              prop = null;
                              if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
                              }
                            }
                            return prop;
                          }
                        }
                        cResult[45] = tmp59Result;
                        let tmp74 = tmp59Result;
                      } else {
                        tmp74 = cResult[45];
                      }
                      let priceChangeId;
                      if (tmp20 != null) {
                        priceChangeId = tmp20.priceChangeId;
                      }
                      class Y {
                        constructor() {
                          marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
                          prop = null;
                          if (null != marketingComponentByType) {
                            str = "giftReminderCoachmark";
                            prop = null;
                            if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                              prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
                            }
                          }
                          return prop;
                        }
                      }
                      if (cResult[46] === Symbol.for("react.memo_cache_sentinel")) {
                        cResult[46] = {};
                        class Y {
                          constructor() {
                            marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
                            prop = null;
                            if (null != marketingComponentByType) {
                              str = "giftReminderCoachmark";
                              prop = null;
                              if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
                              }
                            }
                            return prop;
                          }
                        }
                        const obj9 = {};
                      } else {
                        const tmp77 = cResult[46];
                      }
                      if (cResult[47] === tmp74) {
                        const tmp60Result = tmp60();
                        class Y {
                          constructor() {
                            marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
                            prop = null;
                            if (null != marketingComponentByType) {
                              str = "giftReminderCoachmark";
                              prop = null;
                              if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
                              }
                            }
                            return prop;
                          }
                        }
                        if (cResult[50] !== premiumDiscountOffer) {
                          if (null != premiumDiscountOffer) {
                            const obj10 = { userDiscountOffer: premiumDiscountOffer };
                            let obj11 = obj10;
                          } else {
                            obj11 = {};
                          }
                          cResult[50] = premiumDiscountOffer;
                          class Y {
                            constructor() {
                              marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
                              prop = null;
                              if (null != marketingComponentByType) {
                                str = "giftReminderCoachmark";
                                prop = null;
                                if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                  prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
                                }
                              }
                              return prop;
                            }
                          }
                          cResult[51] = obj11;
                        } else {
                          if (cResult[52] === tmp60Result) {
                            if (cResult[53] === tmp80) {
                              if (cResult[56] !== tmp61) {
                                const tmp61Result = tmp61();
                                cResult[56] = tmp61;
                                class Y {
                                  constructor() {
                                    marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
                                    prop = null;
                                    if (null != marketingComponentByType) {
                                      str = "giftReminderCoachmark";
                                      prop = null;
                                      if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                        prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
                                      }
                                    }
                                    return prop;
                                  }
                                }
                                cResult[57] = tmp61Result;
                                let tmp84 = tmp61Result;
                              } else {
                                tmp84 = cResult[57];
                              }
                              class Y {
                                constructor() {
                                  marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
                                  prop = null;
                                  if (null != marketingComponentByType) {
                                    str = "giftReminderCoachmark";
                                    prop = null;
                                    if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                      prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
                                    }
                                  }
                                  return prop;
                                }
                              }
                              if (cResult[58] !== premiumTrialOffer) {
                                if (null != premiumTrialOffer) {
                                  const obj12 = { userTrialOffer: premiumTrialOffer };
                                  let obj13 = obj12;
                                } else {
                                  obj13 = {};
                                }
                                cResult[58] = premiumTrialOffer;
                                class Y {
                                  constructor() {
                                    marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
                                    prop = null;
                                    if (null != marketingComponentByType) {
                                      str = "giftReminderCoachmark";
                                      prop = null;
                                      if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                        prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
                                      }
                                    }
                                    return prop;
                                  }
                                }
                                cResult[59] = obj13;
                              } else {
                                if (cResult[60] === tmp84) {
                                  if (cResult[61] === tmp86) {
                                    const tmp64Result = tmp64();
                                    class Y {
                                      constructor() {
                                        marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
                                        prop = null;
                                        if (null != marketingComponentByType) {
                                          str = "giftReminderCoachmark";
                                          prop = null;
                                          if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
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
                                        if (cResult[66] === promotionId) {
                                          let tmp94 = cResult[67];
                                        }
                                        if (cResult[68] === tmp64Result) {
                                          if (cResult[69] === tmp91) {
                                            const tmp67Result = tmp67();
                                            class Y {
                                              constructor() {
                                                marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
                                                prop = null;
                                                if (null != marketingComponentByType) {
                                                  str = "giftReminderCoachmark";
                                                  prop = null;
                                                  if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                                    prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
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
                                                if (cResult[74] === promotionId1) {
                                                  let tmp100 = cResult[75];
                                                }
                                                if (cResult[76] === tmp67Result) {
                                                  if (cResult[77] === tmp97) {
                                                    if (cResult[80] !== tmp71) {
                                                      const tmp71Result = tmp71();
                                                      cResult[80] = tmp71;
                                                      class Y {
                                                        constructor() {
                                                          marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
                                                          prop = null;
                                                          if (null != marketingComponentByType) {
                                                            str = "giftReminderCoachmark";
                                                            prop = null;
                                                            if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                                              prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
                                                            }
                                                          }
                                                          return prop;
                                                        }
                                                      }
                                                      cResult[81] = tmp71Result;
                                                      let tmp102 = tmp71Result;
                                                    } else {
                                                      tmp102 = cResult[81];
                                                    }
                                                    if (cResult[82] !== stateFromStores3) {
                                                      const obj14 = { coachmarkComponent: stateFromStores3 };
                                                      class Y {
                                                        constructor() {
                                                          marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
                                                          prop = null;
                                                          if (null != marketingComponentByType) {
                                                            str = "giftReminderCoachmark";
                                                            prop = null;
                                                            if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                                              prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
                                                            }
                                                          }
                                                          return prop;
                                                        }
                                                      }
                                                      cResult[83] = obj14;
                                                      let tmp104 = obj14;
                                                    } else {
                                                      tmp104 = cResult[83];
                                                    }
                                                    class Y {
                                                      constructor() {
                                                        marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
                                                        prop = null;
                                                        if (null != marketingComponentByType) {
                                                          str = "giftReminderCoachmark";
                                                          prop = null;
                                                          if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                                            prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
                                                          }
                                                        }
                                                        return prop;
                                                      }
                                                    }
                                                    const obj15 = { isEligible: tmp102, newSnowflakeId: stateFromStores2, actionSheetProperties: tmp104 };
                                                    cResult[84] = stateFromStores2;
                                                    cResult[85] = tmp102;
                                                    cResult[86] = tmp104;
                                                    cResult[87] = obj15;
                                                  }
                                                }
                                                const obj16 = { isEligible: null, newSnowflakeId: null, actionSheetProperties: null };
                                                class Y {
                                                  constructor() {
                                                    marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
                                                    prop = null;
                                                    if (null != marketingComponentByType) {
                                                      str = "giftReminderCoachmark";
                                                      prop = null;
                                                      if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                                        prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
                                                      }
                                                    }
                                                    return prop;
                                                  }
                                                }
                                                obj16.newSnowflakeId = tmp97;
                                                obj16.actionSheetProperties = tmp100;
                                                cResult[76] = tmp67Result;
                                                cResult[77] = tmp97;
                                                cResult[78] = tmp100;
                                                cResult[79] = obj16;
                                              }
                                            }
                                            const obj17 = { bottomSheetData: mobileBottomSheet, componentId: id1, promotionId: promotionId1 };
                                            cResult[72] = mobileBottomSheet;
                                            cResult[73] = id1;
                                            cResult[74] = promotionId1;
                                            cResult[75] = obj17;
                                            tmp100 = obj17;
                                          }
                                        }
                                        const obj18 = { isEligible: null, newSnowflakeId: null, actionSheetProperties: null };
                                        class Y {
                                          constructor() {
                                            marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
                                            prop = null;
                                            if (null != marketingComponentByType) {
                                              str = "giftReminderCoachmark";
                                              prop = null;
                                              if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                                prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
                                              }
                                            }
                                            return prop;
                                          }
                                        }
                                        obj18.newSnowflakeId = tmp91;
                                        obj18.actionSheetProperties = tmp94;
                                        cResult[68] = tmp64Result;
                                        cResult[69] = tmp91;
                                        cResult[70] = tmp94;
                                        cResult[71] = obj18;
                                      }
                                    }
                                    const obj19 = { bottomSheetData: mobileBottomSheet, componentId: id, promotionId };
                                    cResult[64] = mobileBottomSheet;
                                    cResult[65] = id;
                                    cResult[66] = promotionId;
                                    cResult[67] = obj19;
                                    tmp94 = obj19;
                                  }
                                }
                                const obj20 = { isEligible: null, newSnowflakeId: null, actionSheetProperties: null };
                                class Y {
                                  constructor() {
                                    marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
                                    prop = null;
                                    if (null != marketingComponentByType) {
                                      str = "giftReminderCoachmark";
                                      prop = null;
                                      if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                        prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
                                      }
                                    }
                                    return prop;
                                  }
                                }
                                obj20.newSnowflakeId = tmp86;
                                obj20.actionSheetProperties = cResult[59];
                                cResult[60] = tmp84;
                                cResult[61] = tmp86;
                                cResult[62] = cResult[59];
                                cResult[63] = obj20;
                              }
                            }
                          }
                          const obj21 = { isEligible: null, newSnowflakeId: null, actionSheetProperties: null };
                          class Y {
                            constructor() {
                              marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
                              prop = null;
                              if (null != marketingComponentByType) {
                                str = "giftReminderCoachmark";
                                prop = null;
                                if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                  prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
                                }
                              }
                              return prop;
                            }
                          }
                          obj21.newSnowflakeId = tmp80;
                          obj21.actionSheetProperties = cResult[51];
                          cResult[52] = tmp60Result;
                          cResult[53] = tmp80;
                          cResult[54] = cResult[51];
                          cResult[55] = obj21;
                        }
                      }
                      const obj22 = { isEligible: tmp74, newSnowflakeId: priceChangeId, actionSheetProperties: tmp77 };
                      cResult[47] = tmp74;
                      cResult[48] = priceChangeId;
                      cResult[49] = obj22;
                    } else {
                      const _Symbol = Symbol;
                      if (cResult[43] === Symbol.for("react.memo_cache_sentinel")) {
                        cResult[43] = {};
                        class Y {
                          constructor() {
                            marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
                            prop = null;
                            if (null != marketingComponentByType) {
                              str = "giftReminderCoachmark";
                              prop = null;
                              if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
                              }
                            }
                            return prop;
                          }
                        }
                        const obj23 = {};
                      }
                      class Y {
                        constructor() {
                          marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
                          prop = null;
                          if (null != marketingComponentByType) {
                            str = "giftReminderCoachmark";
                            prop = null;
                            if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
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
        class Y {
          constructor() {
            marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
            prop = null;
            if (null != marketingComponentByType) {
              str = "giftReminderCoachmark";
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
        cResult[38] = tmp69;
        cResult[39] = tmp70;
        cResult[40] = tmp43;
        cResult[41] = isGiftReminderAssetReady;
        cResult[42] = isGiftingPromotionReminderEligible;
      }
      function isGiftingPromotionFirstTimeEligible() {
        let tmp = closure_12;
        if (closure_12) {
          tmp = isGiftCoachmarkAssetReady;
        }
        return tmp;
      }
      cResult[32] = null != stateFromStores3;
      cResult[33] = isGiftCoachmarkAssetReady;
      cResult[34] = isGiftingPromotionFirstTimeEligible;
      tmp71 = isGiftingPromotionFirstTimeEligible;
    }
    class Y {
      constructor() {
        marketingComponentByType = mobileBottomSheet.getMarketingComponentByType(closure_0(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
        prop = null;
        if (null != marketingComponentByType) {
          str = "giftReminderCoachmark";
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
    cResult[27] = tmp62;
    tmp61 = tmp62;
  }
  function isGooglePlayPriceChangeEligible() {
    let tmp = first;
    if (first) {
      tmp = null != closure_1;
    }
    return tmp;
  }
  cResult[20] = tmp18[1];
  cResult[21] = first;
  cResult[22] = isGooglePlayPriceChangeEligible;
  tmp59 = isGooglePlayPriceChangeEligible;
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
  const tmpResult23 = initialize;
  const items5 = [PromotionsStore];
  const stateFromStores4 = initialize.useStateFromStores(items5, () => {
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
    let tmp50 = !tmp49;
    if (!tmp49) {
      let tmp51 = null != stateFromStores2;
      if (tmp51) {
        let tmp52 = isDismissed;
        if (tmp52) {
          if (enabled) {
            enabled = null != stateFromStores4;
          }
          if (enabled) {
            enabled = isGiftReminderAssetReady;
          }
          tmp52 = enabled;
        }
        tmp51 = tmp52;
      }
      tmp50 = tmp51;
    }
    const obj20 = { isEligible: tmp50, newSnowflakeId: stateFromStores2, actionSheetProperties: null };
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
});