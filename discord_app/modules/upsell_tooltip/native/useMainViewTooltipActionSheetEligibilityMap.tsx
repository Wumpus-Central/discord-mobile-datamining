// discord_app/modules/upsell_tooltip/native/useMainViewTooltipActionSheetEligibilityMap.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
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
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import GooglePlayPriceChangeStore from "../../premium/native/google_play_price_changes/GooglePlayPriceChangeStore.tsx";
import PromotionsStore from "../../premium/promotions/PromotionsStore.tsx";
import UserSettingsProtoStore from "../../user_settings/UserSettingsProtoStore.tsx";
import UserRequiredActionStore from "../../../stores/UserRequiredActionStore.tsx";

const require = globalThis.__r;

require = fn;
const PlatformTypes = fn(1085).PlatformTypes;
const PremiumConstants = fn(1379);
({ PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID } = PremiumConstants);
let UserSettingsTypes = fn(1095).UserSettingsTypes;
const MainViewTooltipActionSheets = "MainViewTooltipActionSheets";
let items = [PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID];
const set = new Set(items);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/upsell_tooltip/native/useMainViewTooltipActionSheetEligibilityMap.tsx");

export const useMainViewTooltipActionSheetMap = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = first(premiumDiscountOffer[9]).c(140);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [stateFromStores2];
    class S {
      constructor() {
        return closure_6.hasLoaded(closure_9.PRELOADED_USER_SETTINGS);
      }
    }
    cResult[0] = items;
    cResult[1] = S;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = first(premiumDiscountOffer[9]);
  const stateFromStores = first(premiumDiscountOffer[10]).useStateFromStores(tmp4, S);
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
    class C {
      constructor() {
        return closure_7.hasAction();
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
  const tmpResult20 = first(premiumDiscountOffer[10]);
  const tmp19 = premiumTrialOffer(first(premiumDiscountOffer[10]).useStateFromStoresArray(tmp15, tmp16), 2);
  first = tmp19[0];
  importDefault = tmp21;
  const tmpResult22 = first(premiumDiscountOffer[10]);
  premiumDiscountOffer = first(premiumDiscountOffer[13]).usePremiumDiscountOffer();
  const tmpResult23 = first(premiumDiscountOffer[13]);
  premiumTrialOffer = first(premiumDiscountOffer[14]).usePremiumTrialOffer();
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { location: tmp9 };
    class C {
      constructor() {
        return closure_7.hasAction();
      }
    }
    let tmp24 = obj4;
  } else {
    tmp24 = cResult[6];
  }
  const PremiumTrialOfferActionSheetKillSwitchExperiment = tmp(tmp2[15]).PremiumTrialOfferActionSheetKillSwitchExperiment;
  enabled = PremiumTrialOfferActionSheetKillSwitchExperiment.useConfig(tmp24).enabled;
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
    let tmp29 = U;
    let tmp28 = items3;
  } else {
    tmp28 = cResult[7];
    tmp29 = cResult[8];
  }
  const tmpResult25 = first(premiumDiscountOffer[16]);
  stateFromStores2 = first(premiumDiscountOffer[10]).useStateFromStores(tmp28, tmp29);
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
    cResult[9] = tmp35;
    cResult[10] = items4;
    let tmp33 = items4;
    let tmp32 = tmp35;
  } else {
    tmp32 = cResult[9];
    tmp33 = cResult[10];
  }
  const tmpResult26 = first(premiumDiscountOffer[10]);
  const stateFromStores3 = first(premiumDiscountOffer[10]).useStateFromStores(tmp33, tmp32);
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
    let tmp38 = Y;
    let tmp37 = items5;
  } else {
    tmp37 = cResult[11];
    tmp38 = cResult[12];
  }
  const tmpResult27 = first(premiumDiscountOffer[10]);
  stateFromStores4 = first(premiumDiscountOffer[10]).useStateFromStores(tmp37, tmp38);
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
    let tmp41 = obj5;
  } else {
    tmp41 = cResult[13];
  }
  const GiftPromotionReminderExperiment = tmp(tmp2[18]).GiftPromotionReminderExperiment;
  const enabled2 = GiftPromotionReminderExperiment.useConfig(tmp41).enabled;
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
    let tmp42 = obj6;
  } else {
    tmp42 = cResult[14];
  }
  const tmpResult28 = first(premiumDiscountOffer[10]);
  const giftingBadgeCoachmarkVariant = first(premiumDiscountOffer[19]).useGiftingBadgeCoachmarkVariant(tmp42);
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
    let tmp44 = isDismissed;
  } else {
    tmp44 = cResult[16];
  }
  UserSettingsTypes = tmp44;
  let isDismissed2 = null != stateFromStores2;
  if (isDismissed2) {
    isDismissed2 = tmp(tmp2[20]).UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(tmp2[21]).DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores2).isDismissed;
    const tmpResult31 = tmp(tmp2[20]);
  }
  let tmp46 = null;
  const tmpResult29 = first(premiumDiscountOffer[19]);
  if (!tmp44) {
    tmp46 = stateFromStores3;
  }
  let tmp47 = null;
  if (!isDismissed2) {
    tmp47 = stateFromStores4;
  }
  const tmp8ResultResult = tmp8(premiumDiscountOffer[22])(tmp46, tmp47);
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
    let tmp52 = items6;
  } else {
    tmp52 = cResult[17];
  }
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { deprecatedPlatformTypes: tmp52 };
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
    let tmp54 = obj7;
  } else {
    tmp54 = cResult[18];
  }
  const tmpResult34 = first(premiumDiscountOffer[24]);
  const shouldShowConnectionDeprecationBottomSheet = first(premiumDiscountOffer[25]).useShouldShowConnectionDeprecationBottomSheet(tmp54);
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
    let tmp56 = obj8;
  } else {
    tmp56 = cResult[19];
  }
  const tmpResult35 = first(premiumDiscountOffer[25]);
  const shouldShowConnectionDeprecationBottomSheet1 = first(premiumDiscountOffer[25]).useShouldShowConnectionDeprecationBottomSheet(tmp56);
  const tmpResult36 = first(premiumDiscountOffer[25]);
  const isDisplayNameStylesFlywheelSettersEnabled = first(premiumDiscountOffer[26]).useIsDisplayNameStylesFlywheelSettersEnabled(tmp9);
  const tmpResult37 = first(premiumDiscountOffer[26]);
  const canSet = first(premiumDiscountOffer[27]).useCustomTypingIndicatorConfig(tmp9).canSet;
  if (cResult[20] === tmp19[1]) {
    if (cResult[21] === first) {
      let tmp60 = cResult[22];
    }
    if (cResult[23] !== premiumDiscountOffer) {
      function ce() {
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
      cResult[24] = ce;
      let tmp61 = ce;
    } else {
      tmp61 = cResult[24];
    }
    if (cResult[25] === enabled) {
      if (cResult[26] === premiumTrialOffer) {
        let tmp62 = cResult[27];
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
        class Oe {
          constructor() {
            dismissibleContent = undefined;
            if (mobileBottomSheet != null) {
              dismissibleContent = mobileBottomSheet.dismissibleContent;
            }
            return dismissibleContent === closure_0(closure_2[21]).DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
          }
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
        cResult[29] = Oe;
        let tmp65 = Oe;
      } else {
        tmp65 = cResult[29];
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
        class Oe {
          constructor() {
            dismissibleContent = undefined;
            if (mobileBottomSheet != null) {
              dismissibleContent = mobileBottomSheet.dismissibleContent;
            }
            return dismissibleContent === closure_0(closure_2[21]).DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
          }
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
        cResult[31] = tmp70;
        let tmp68 = tmp70;
      } else {
        tmp68 = cResult[31];
      }
      closure_12 = tmp71;
      closure_13 = tmp72;
      if (cResult[32] === null != stateFromStores3) {
        if (cResult[33] === isGiftCoachmarkAssetReady) {
          let tmp73 = cResult[34];
        }
        if (cResult[35] === stateFromStores2) {
          if (cResult[36] === enabled2) {
            if (cResult[37] === stateFromStores4) {
              if (cResult[38] === tmp71) {
                if (cResult[39] === tmp72) {
                  if (cResult[40] === tmp44) {
                    if (tmp14) {
                      if (cResult[44] !== tmp60) {
                        const tmp60Result = tmp60();
                        class Ae {
                          constructor() {
                            tmp = !closure_12;
                            if (closure_12) {
                              tmp2 = closure_13;
                              tmp = !closure_13;
                            }
                            tmp3 = !tmp;
                            if (!tmp) {
                              tmp4 = closure_6;
                              tmp5 = null;
                              tmp6 = null != closure_6;
                              if (tmp6) {
                                tmp7 = closure_9;
                                tmp8 = closure_9;
                                if (tmp8) {
                                  tmp9 = enabled;
                                  if (enabled) {
                                    tmp10 = closure_7;
                                    tmp9 = null != closure_7;
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
                        cResult[45] = tmp60Result;
                        let tmp76 = tmp60Result;
                      } else {
                        tmp76 = cResult[45];
                      }
                      class Ae {
                        constructor() {
                          tmp = !closure_12;
                          if (closure_12) {
                            tmp2 = closure_13;
                            tmp = !closure_13;
                          }
                          tmp3 = !tmp;
                          if (!tmp) {
                            tmp4 = closure_6;
                            tmp5 = null;
                            tmp6 = null != closure_6;
                            if (tmp6) {
                              tmp7 = closure_9;
                              tmp8 = closure_9;
                              if (tmp8) {
                                tmp9 = enabled;
                                if (enabled) {
                                  tmp10 = closure_7;
                                  tmp9 = null != closure_7;
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
                        class Ae {
                          constructor() {
                            tmp = !closure_12;
                            if (closure_12) {
                              tmp2 = closure_13;
                              tmp = !closure_13;
                            }
                            tmp3 = !tmp;
                            if (!tmp) {
                              tmp4 = closure_6;
                              tmp5 = null;
                              tmp6 = null != closure_6;
                              if (tmp6) {
                                tmp7 = closure_9;
                                tmp8 = closure_9;
                                if (tmp8) {
                                  tmp9 = enabled;
                                  if (enabled) {
                                    tmp10 = closure_7;
                                    tmp9 = null != closure_7;
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
                      } else {
                        const tmp79 = cResult[46];
                      }
                      if (cResult[47] === tmp76) {
                        const tmp61Result = tmp61();
                        class Ae {
                          constructor() {
                            tmp = !closure_12;
                            if (closure_12) {
                              tmp2 = closure_13;
                              tmp = !closure_13;
                            }
                            tmp3 = !tmp;
                            if (!tmp) {
                              tmp4 = closure_6;
                              tmp5 = null;
                              tmp6 = null != closure_6;
                              if (tmp6) {
                                tmp7 = closure_9;
                                tmp8 = closure_9;
                                if (tmp8) {
                                  tmp9 = enabled;
                                  if (enabled) {
                                    tmp10 = closure_7;
                                    tmp9 = null != closure_7;
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
                        if (cResult[50] !== premiumDiscountOffer) {
                          if (null != premiumDiscountOffer) {
                            { userDiscountOffer: null }.userDiscountOffer = premiumDiscountOffer;
                            class Ae {
                              constructor() {
                                tmp = !closure_12;
                                if (closure_12) {
                                  tmp2 = closure_13;
                                  tmp = !closure_13;
                                }
                                tmp3 = !tmp;
                                if (!tmp) {
                                  tmp4 = closure_6;
                                  tmp5 = null;
                                  tmp6 = null != closure_6;
                                  if (tmp6) {
                                    tmp7 = closure_9;
                                    tmp8 = closure_9;
                                    if (tmp8) {
                                      tmp9 = enabled;
                                      if (enabled) {
                                        tmp10 = closure_7;
                                        tmp9 = null != closure_7;
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
                            }
                            const obj10 = { userDiscountOffer: null };
                          } else {
                            const obj11 = {};
                          }
                          class Ae {
                            constructor() {
                              tmp = !closure_12;
                              if (closure_12) {
                                tmp2 = closure_13;
                                tmp = !closure_13;
                              }
                              tmp3 = !tmp;
                              if (!tmp) {
                                tmp4 = closure_6;
                                tmp5 = null;
                                tmp6 = null != closure_6;
                                if (tmp6) {
                                  tmp7 = closure_9;
                                  tmp8 = closure_9;
                                  if (tmp8) {
                                    tmp9 = enabled;
                                    if (enabled) {
                                      tmp10 = closure_7;
                                      tmp9 = null != closure_7;
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
                          cResult[51] = obj11;
                        } else {
                          if (cResult[52] === tmp61Result) {
                            if (cResult[53] === tmp82) {
                              if (cResult[56] !== tmp62) {
                                const tmp62Result = tmp62();
                                class Ae {
                                  constructor() {
                                    tmp = !closure_12;
                                    if (closure_12) {
                                      tmp2 = closure_13;
                                      tmp = !closure_13;
                                    }
                                    tmp3 = !tmp;
                                    if (!tmp) {
                                      tmp4 = closure_6;
                                      tmp5 = null;
                                      tmp6 = null != closure_6;
                                      if (tmp6) {
                                        tmp7 = closure_9;
                                        tmp8 = closure_9;
                                        if (tmp8) {
                                          tmp9 = enabled;
                                          if (enabled) {
                                            tmp10 = closure_7;
                                            tmp9 = null != closure_7;
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
                                cResult[57] = tmp62Result;
                                let tmp87 = tmp62Result;
                              } else {
                                tmp87 = cResult[57];
                              }
                              class Ae {
                                constructor() {
                                  tmp = !closure_12;
                                  if (closure_12) {
                                    tmp2 = closure_13;
                                    tmp = !closure_13;
                                  }
                                  tmp3 = !tmp;
                                  if (!tmp) {
                                    tmp4 = closure_6;
                                    tmp5 = null;
                                    tmp6 = null != closure_6;
                                    if (tmp6) {
                                      tmp7 = closure_9;
                                      tmp8 = closure_9;
                                      if (tmp8) {
                                        tmp9 = enabled;
                                        if (enabled) {
                                          tmp10 = closure_7;
                                          tmp9 = null != closure_7;
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
                                  { userTrialOffer: null }.userTrialOffer = premiumTrialOffer;
                                  class Ae {
                                    constructor() {
                                      tmp = !closure_12;
                                      if (closure_12) {
                                        tmp2 = closure_13;
                                        tmp = !closure_13;
                                      }
                                      tmp3 = !tmp;
                                      if (!tmp) {
                                        tmp4 = closure_6;
                                        tmp5 = null;
                                        tmp6 = null != closure_6;
                                        if (tmp6) {
                                          tmp7 = closure_9;
                                          tmp8 = closure_9;
                                          if (tmp8) {
                                            tmp9 = enabled;
                                            if (enabled) {
                                              tmp10 = closure_7;
                                              tmp9 = null != closure_7;
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
                                  }
                                  const obj12 = { userTrialOffer: null };
                                } else {
                                  const obj13 = {};
                                }
                                class Ae {
                                  constructor() {
                                    tmp = !closure_12;
                                    if (closure_12) {
                                      tmp2 = closure_13;
                                      tmp = !closure_13;
                                    }
                                    tmp3 = !tmp;
                                    if (!tmp) {
                                      tmp4 = closure_6;
                                      tmp5 = null;
                                      tmp6 = null != closure_6;
                                      if (tmp6) {
                                        tmp7 = closure_9;
                                        tmp8 = closure_9;
                                        if (tmp8) {
                                          tmp9 = enabled;
                                          if (enabled) {
                                            tmp10 = closure_7;
                                            tmp9 = null != closure_7;
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
                                cResult[59] = obj13;
                              } else {
                                if (cResult[60] === tmp87) {
                                  if (cResult[61] === tmp89) {
                                    const tmp65Result = tmp65();
                                    class Ae {
                                      constructor() {
                                        tmp = !closure_12;
                                        if (closure_12) {
                                          tmp2 = closure_13;
                                          tmp = !closure_13;
                                        }
                                        tmp3 = !tmp;
                                        if (!tmp) {
                                          tmp4 = closure_6;
                                          tmp5 = null;
                                          tmp6 = null != closure_6;
                                          if (tmp6) {
                                            tmp7 = closure_9;
                                            tmp8 = closure_9;
                                            if (tmp8) {
                                              tmp9 = enabled;
                                              if (enabled) {
                                                tmp10 = closure_7;
                                                tmp9 = null != closure_7;
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
                                          let tmp98 = cResult[67];
                                        }
                                        if (cResult[68] === tmp65Result) {
                                          if (cResult[69] === tmp95) {
                                            const tmp68Result = tmp68();
                                            class Ae {
                                              constructor() {
                                                tmp = !closure_12;
                                                if (closure_12) {
                                                  tmp2 = closure_13;
                                                  tmp = !closure_13;
                                                }
                                                tmp3 = !tmp;
                                                if (!tmp) {
                                                  tmp4 = closure_6;
                                                  tmp5 = null;
                                                  tmp6 = null != closure_6;
                                                  if (tmp6) {
                                                    tmp7 = closure_9;
                                                    tmp8 = closure_9;
                                                    if (tmp8) {
                                                      tmp9 = enabled;
                                                      if (enabled) {
                                                        tmp10 = closure_7;
                                                        tmp9 = null != closure_7;
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
                                                  let tmp105 = cResult[75];
                                                }
                                                if (cResult[76] === tmp68Result) {
                                                  if (cResult[77] === tmp102) {
                                                    if (cResult[80] !== tmp73) {
                                                      const tmp73Result = tmp73();
                                                      class Ae {
                                                        constructor() {
                                                          tmp = !closure_12;
                                                          if (closure_12) {
                                                            tmp2 = closure_13;
                                                            tmp = !closure_13;
                                                          }
                                                          tmp3 = !tmp;
                                                          if (!tmp) {
                                                            tmp4 = closure_6;
                                                            tmp5 = null;
                                                            tmp6 = null != closure_6;
                                                            if (tmp6) {
                                                              tmp7 = closure_9;
                                                              tmp8 = closure_9;
                                                              if (tmp8) {
                                                                tmp9 = enabled;
                                                                if (enabled) {
                                                                  tmp10 = closure_7;
                                                                  tmp9 = null != closure_7;
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
                                                      cResult[81] = tmp73Result;
                                                      let tmp108 = tmp73Result;
                                                    } else {
                                                      tmp108 = cResult[81];
                                                    }
                                                    class Ae {
                                                      constructor() {
                                                        tmp = !closure_12;
                                                        if (closure_12) {
                                                          tmp2 = closure_13;
                                                          tmp = !closure_13;
                                                        }
                                                        tmp3 = !tmp;
                                                        if (!tmp) {
                                                          tmp4 = closure_6;
                                                          tmp5 = null;
                                                          tmp6 = null != closure_6;
                                                          if (tmp6) {
                                                            tmp7 = closure_9;
                                                            tmp8 = closure_9;
                                                            if (tmp8) {
                                                              tmp9 = enabled;
                                                              if (enabled) {
                                                                tmp10 = closure_7;
                                                                tmp9 = null != closure_7;
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
                                                    const obj14 = { isEligible: tmp108, newSnowflakeId: stateFromStores2, actionSheetProperties: tmp110 };
                                                    cResult[84] = stateFromStores2;
                                                    cResult[85] = tmp108;
                                                    cResult[86] = tmp110;
                                                    cResult[87] = obj14;
                                                  }
                                                }
                                                class Ae {
                                                  constructor() {
                                                    tmp = !closure_12;
                                                    if (closure_12) {
                                                      tmp2 = closure_13;
                                                      tmp = !closure_13;
                                                    }
                                                    tmp3 = !tmp;
                                                    if (!tmp) {
                                                      tmp4 = closure_6;
                                                      tmp5 = null;
                                                      tmp6 = null != closure_6;
                                                      if (tmp6) {
                                                        tmp7 = closure_9;
                                                        tmp8 = closure_9;
                                                        if (tmp8) {
                                                          tmp9 = enabled;
                                                          if (enabled) {
                                                            tmp10 = closure_7;
                                                            tmp9 = null != closure_7;
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
                                                tmp107[1] = tmp102;
                                                tmp107[2] = tmp105;
                                                cResult[76] = tmp68Result;
                                                cResult[77] = tmp102;
                                                cResult[78] = tmp105;
                                                cResult[79] = tmp107;
                                              }
                                            }
                                            const obj15 = { bottomSheetData: mobileBottomSheet, componentId: id1, promotionId: promotionId1 };
                                            cResult[72] = mobileBottomSheet;
                                            cResult[73] = id1;
                                            cResult[74] = promotionId1;
                                            cResult[75] = obj15;
                                            tmp105 = obj15;
                                          }
                                        }
                                        class Ae {
                                          constructor() {
                                            tmp = !closure_12;
                                            if (closure_12) {
                                              tmp2 = closure_13;
                                              tmp = !closure_13;
                                            }
                                            tmp3 = !tmp;
                                            if (!tmp) {
                                              tmp4 = closure_6;
                                              tmp5 = null;
                                              tmp6 = null != closure_6;
                                              if (tmp6) {
                                                tmp7 = closure_9;
                                                tmp8 = closure_9;
                                                if (tmp8) {
                                                  tmp9 = enabled;
                                                  if (enabled) {
                                                    tmp10 = closure_7;
                                                    tmp9 = null != closure_7;
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
                                        tmp100[1] = tmp95;
                                        tmp100[2] = tmp98;
                                        cResult[68] = tmp65Result;
                                        cResult[69] = tmp95;
                                        cResult[70] = tmp98;
                                        cResult[71] = tmp100;
                                      }
                                    }
                                    const obj16 = { bottomSheetData: mobileBottomSheet, componentId: id, promotionId };
                                    cResult[64] = mobileBottomSheet;
                                    cResult[65] = id;
                                    cResult[66] = promotionId;
                                    cResult[67] = obj16;
                                    tmp98 = obj16;
                                  }
                                }
                                class Ae {
                                  constructor() {
                                    tmp = !closure_12;
                                    if (closure_12) {
                                      tmp2 = closure_13;
                                      tmp = !closure_13;
                                    }
                                    tmp3 = !tmp;
                                    if (!tmp) {
                                      tmp4 = closure_6;
                                      tmp5 = null;
                                      tmp6 = null != closure_6;
                                      if (tmp6) {
                                        tmp7 = closure_9;
                                        tmp8 = closure_9;
                                        if (tmp8) {
                                          tmp9 = enabled;
                                          if (enabled) {
                                            tmp10 = closure_7;
                                            tmp9 = null != closure_7;
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
                                tmp93[1] = tmp89;
                                tmp93[2] = cResult[59];
                                cResult[60] = tmp87;
                                cResult[61] = tmp89;
                                cResult[62] = cResult[59];
                                cResult[63] = tmp93;
                              }
                            }
                          }
                          class Ae {
                            constructor() {
                              tmp = !closure_12;
                              if (closure_12) {
                                tmp2 = closure_13;
                                tmp = !closure_13;
                              }
                              tmp3 = !tmp;
                              if (!tmp) {
                                tmp4 = closure_6;
                                tmp5 = null;
                                tmp6 = null != closure_6;
                                if (tmp6) {
                                  tmp7 = closure_9;
                                  tmp8 = closure_9;
                                  if (tmp8) {
                                    tmp9 = enabled;
                                    if (enabled) {
                                      tmp10 = closure_7;
                                      tmp9 = null != closure_7;
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
                          tmp86[1] = tmp82;
                          tmp86[2] = cResult[51];
                          cResult[52] = tmp61Result;
                          cResult[53] = tmp82;
                          cResult[54] = cResult[51];
                          cResult[55] = tmp86;
                        }
                      }
                      const obj17 = { isEligible: tmp76, newSnowflakeId: undefined, actionSheetProperties: tmp79 };
                      cResult[47] = tmp76;
                      cResult[48] = undefined;
                      cResult[49] = obj17;
                    } else {
                      const _Symbol = Symbol;
                      class Ae {
                        constructor() {
                          tmp = !closure_12;
                          if (closure_12) {
                            tmp2 = closure_13;
                            tmp = !closure_13;
                          }
                          tmp3 = !tmp;
                          if (!tmp) {
                            tmp4 = closure_6;
                            tmp5 = null;
                            tmp6 = null != closure_6;
                            if (tmp6) {
                              tmp7 = closure_9;
                              tmp8 = closure_9;
                              if (tmp8) {
                                tmp9 = enabled;
                                if (enabled) {
                                  tmp10 = closure_7;
                                  tmp9 = null != closure_7;
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
        class Ae {
          constructor() {
            tmp = !closure_12;
            if (closure_12) {
              tmp2 = closure_13;
              tmp = !closure_13;
            }
            tmp3 = !tmp;
            if (!tmp) {
              tmp4 = closure_6;
              tmp5 = null;
              tmp6 = null != closure_6;
              if (tmp6) {
                tmp7 = closure_9;
                tmp8 = closure_9;
                if (tmp8) {
                  tmp9 = enabled;
                  if (enabled) {
                    tmp10 = closure_7;
                    tmp9 = null != closure_7;
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
        cResult[38] = tmp71;
        cResult[39] = tmp72;
        cResult[40] = tmp44;
        cResult[41] = isGiftReminderAssetReady;
        cResult[42] = Ae;
      }
      function be() {
        let tmp = closure_12;
        if (closure_12) {
          tmp = isGiftCoachmarkAssetReady;
        }
        return tmp;
      }
      cResult[32] = null != stateFromStores3;
      cResult[33] = isGiftCoachmarkAssetReady;
      cResult[34] = be;
      tmp73 = be;
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
    cResult[27] = tmp63;
    tmp62 = tmp63;
  }
  class Ee {
    constructor() {
      tmp = closure_0;
      if (closure_0) {
        tmp2 = closure_1;
        tmp3 = null;
        tmp = null != closure_1;
      }
      return tmp;
    }
  }
  cResult[20] = tmp19[1];
  cResult[21] = first;
  cResult[22] = Ee;
  tmp60 = Ee;
  const tmpResult38 = first(premiumDiscountOffer[27]);
}) : (() => {
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
});