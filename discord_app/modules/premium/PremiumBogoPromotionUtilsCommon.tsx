// === Module 13467: PremiumBogoPromotionUtilsCommon ===

// Module 13467 (PremiumBogoPromotionUtilsCommon)
import useStateFromStores from "useStateFromStores" /* 563 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import _modDef4153 from "module_4153" /* 4153 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4218 */;
import shared_PlatformUtils from "shared/PlatformUtils" /* 4801 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 7417 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7447 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 8060 */;
import PromotionsHooks from "PromotionsHooks" /* 13468 */;
import BogoPromotionExperiment from "BogoPromotionExperiment" /* 13469 */;
import useScheduledForcedUpdateDefault from "useScheduledForcedUpdate" /* 13470 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserStore from "UserStore" /* 1371 */;
import SubscriptionStore from "SubscriptionStore" /* 4224 */;
import UserOfferStore from "UserOfferStore" /* 7450 */;
import EntitlementStore from "EntitlementStore" /* 7394 */;
import PromotionsStore from "PromotionsStore" /* 10665 */;

require = fn;
function isUserEligibleBasedOnCurrentOrPreviousSubs(experimentEnabled) {
  ({ premiumSubscription, mostRecentSubscription, previousPremiumSubscription } = experimentEnabled);
  if (experimentEnabled.experimentEnabled) {
    if (null != mostRecentSubscription) {
      if (mostRecentSubscription.status === constants2.ENDED) {
        const endedAt = mostRecentSubscription.endedAt;
        if (null != endedAt) {
          if (mostRecentSubscription.hasPremiumAtLeast(closure_1_10.TIER_2)) {
            const obj = _modDef4153();
            if (subtractResult.isBefore(endedAt)) {
              return false;
            }
            subtractResult = _modDef4153().subtract(10, "days");
          }
        }
      }
    }
    if (null != previousPremiumSubscription) {
      if (previousPremiumSubscription.status === constants2.ENDED) {
        const endedAt2 = previousPremiumSubscription.endedAt;
        if (null != endedAt2) {
          if (previousPremiumSubscription.hasPremiumAtLeast(closure_1_10.TIER_2)) {
            const obj3 = _modDef4153();
            if (subtractResult1.isBefore(endedAt2)) {
              return false;
            }
            subtractResult1 = _modDef4153().subtract(10, "days");
          }
        }
      }
    }
    if (null != premiumSubscription) {
      let hasActiveTrial;
      const currentUser = UserStore.getCurrentUser();
      if (premiumSubscription != null) {
        hasActiveTrial = premiumSubscription.hasActiveTrial;
      }
      let isPremiumExactlyResult = hasActiveTrial;
      if (isPremiumExactlyResult) {
        isPremiumExactlyResult = PremiumUtilsDefault.isPremiumExactly(currentUser, tmp22.TIER_0);
      }
      const hasPremiumAtLeastResult = premiumSubscription.hasPremiumAtLeast(closure_1_10.TIER_2);
      tmp22 = closure_1_10;
      let isAndroidResult = PlatformUtils.isAndroid();
      if (isAndroidResult) {
        isAndroidResult = premiumSubscription.paymentGateway !== constants.GOOGLE;
      }
      return false;
    }
    const isMobile = shared_PlatformUtils.isMobile;
    let tmp20 = !isMobile;
    if (isMobile) {
      tmp20 = !EntitlementStore.isFractionalPremiumActive();
    }
    return tmp20;
  } else {
    return false;
  }
}
function isEligibleForBOGOPromotion() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_15 = async function _isEligibleForBOGOPromotion(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          let flag = closure_0;
          if (closure_0 === undefined) {
            flag = true;
          }
          closure_129_0 = flag;
          let currentUser2;
          closure_129_2 = undefined;
          let isPaymentsBlocked;
          let bogoPromotionGateEnabled;
          let bogoMarketingMaterialsEnabled;
          closure_129_6 = undefined;
          let mostRecentPremiumTypeSubscription;
          c3 = 1;
          c4 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else {
            currentUser2 = closure_130_4.getCurrentUser();
            let isClaimedResult;
            if (currentUser2 != null) {
              isClaimedResult = currentUser2.isClaimed();
            }
            closure_129_2 = !isClaimedResult;
            let obj2 = closure_130_0(closure_130_2[12]);
            isPaymentsBlocked = obj2.getIsPaymentsBlocked();
            let obj3 = closure_130_0(closure_130_2[14]);
            bogoPromotionGateEnabled = obj3.getBogoPromotionGateEnabled("bogo eligibility async check");
            let obj4 = closure_130_0(closure_130_2[19]);
            bogoMarketingMaterialsEnabled = obj4.getBogoMarketingMaterialsEnabled("bogo marketing eligibility async check");
            const isMobile = closure_130_0(closure_130_2[11]).isMobile;
            let isAndroidResult = !isMobile;
            if (isMobile) {
              let obj5 = closure_130_0(closure_130_2[10]);
              isAndroidResult = obj5.isAndroid();
            }
            closure_129_6 = isAndroidResult;
            if (!closure_129_2) {
              if (!isPaymentsBlocked) {
                if (bogoPromotionGateEnabled) {
                  if (!closure_129_0) {
                    if (closure_129_6) {
                      if (closure_130_6.hasFetchedOffer()) {
                        c4 = 3;
                        return { value: false, done: true };
                      }
                      const result = closure_130_5.hasFetchedMostRecentPremiumTypeSubscription();
                      let tmp37 = !result;
                      if (!result) {
                        const currentUser = closure_130_4.getCurrentUser();
                        let hasPurchasedFlagResult;
                        if (currentUser != null) {
                          hasPurchasedFlagResult = currentUser.hasPurchasedFlag(closure_130_9.PREMIUM_TIER_2);
                        }
                        tmp37 = hasPurchasedFlagResult;
                      }
                      if (tmp37) {
                        c3 = 2;
                        c4 = 1;
                        obj2 = { value: closure_130_0(closure_130_2[20]).fetchMostRecentSubscription(), done: false };
                        return obj2;
                      }
                    }
                  }
                }
              }
            }
            c4 = 3;
            return { value: false, done: true };
          }
        } else {
          if (2 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              obj3 = { value, done: true };
              return obj3;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          }
          mostRecentPremiumTypeSubscription = closure_130_5.getMostRecentPremiumTypeSubscription();
          obj4 = { experimentEnabled: bogoPromotionGateEnabled, premiumSubscription: closure_130_5.getPremiumTypeSubscription(), mostRecentSubscription: mostRecentPremiumTypeSubscription, previousPremiumSubscription: closure_130_5.getPreviousPremiumTypeSubscription() };
          c4 = 3;
          obj5 = { value: closure_130_13(obj4), done: true };
          return obj5;
        }
        if (!closure_130_5.hasFetchedSubscriptions()) {
          c3 = 3;
          c4 = 1;
          const obj6 = { value: closure_130_0(closure_130_2[20]).fetchSubscriptions(), done: false };
          return obj6;
        }
      }
    } catch (tmp59) {
      c4 = tmp;
      throw tmp59;
    }
  }
};
let closure_16 = async function _maybeFetchActiveBogoPromotion(arg0, value) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp5;
          closure_0 = tmp2;
          let bogoPromotion;
          c2 = 1;
          c3 = 1;
          const obj1 = { value: isEligibleForBOGOPromotion(false), done: false };
          return obj1;
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            let obj2 = { value, done: true };
            return obj2;
          } else if (value) {
            bogoPromotion = closure_129_8.bogoPromotion;
            if (null != bogoPromotion) {
              const _Date = Date;
              const date = new Date(bogoPromotion.endDate);
              const _Date2 = Date;
              if (valueOfResult >= Date.now()) {
                c3 = 3;
                return { value: "HermesInternal", done: null };
              }
              valueOfResult = date.valueOf();
            }
            obj2 = closure_129_0(closure_129_2[21]);
            c2 = 2;
            c3 = 1;
            const obj3 = { value: obj2.fetchActiveBogoPromotion(), done: false };
            return obj3;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        }
        c3 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp22) {
      c3 = tmp;
      throw tmp22;
    }
  }
};
const PremiumConstants = fn(1373);
({ PurchasedFlags: closure_9, PremiumTypes: c10 } = PremiumConstants);
const Constants = fn(1074);
({ PaymentGateways: closure_11, SubscriptionStatusTypes: closure_12 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/PremiumBogoPromotionUtilsCommon.tsx");

export { isUserEligibleBasedOnCurrentOrPreviousSubs };
export const useIsEligibleForBogoPromotion = function useIsEligibleForBogoPromotion() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const isPaymentsBlocked = BlockedPaymentsCountryExperiment.useIsPaymentsBlocked();
  const promotion = PromotionsHooks.useBogoPromotion().promotion;
  const bogoPromotionGateEnabled = BogoPromotionExperiment.useBogoPromotionGateEnabled("bogo eligibility hook");
  const items = [SubscriptionStore];
  const stateFromStoresObject = useStateFromStores.useStateFromStoresObject(items, () => ({ mostRecentSubscription: SubscriptionStore.getMostRecentPremiumTypeSubscription(), premiumSubscription: SubscriptionStore.getPremiumTypeSubscription(), previousPremiumSubscription: SubscriptionStore.getPreviousPremiumTypeSubscription() }));
  ({ mostRecentSubscription, premiumSubscription, previousPremiumSubscription } = stateFromStoresObject);
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  let num;
  const premiumDiscountOffer = usePremiumDiscountOffer.usePremiumDiscountOffer();
  if (promotion != null) {
    num = promotion.endDate;
  }
  if (num == null) {
    num = 0;
  }
  const valueOfResult = new Date(num).valueOf();
  const timestamp = Date.now();
  let num2 = -1;
  const date = new Date(num);
  if (timestamp <= valueOfResult) {
    num2 = valueOfResult - timestamp;
  }
  useScheduledForcedUpdateDefault({ delay: num2 });
  const isMobile = tmp(4801).isMobile;
  let isAndroidResult = !isMobile;
  if (isMobile) {
    let tmpResult = tmp(1115);
    isAndroidResult = tmpResult.isAndroid();
  }
  tmpResult = tmp(13471);
  let bogoMarketingMaterialsEnabled = tmpResult.useBogoMarketingMaterialsEnabled("bogo marketing eligibility hook");
  let tmp16 = !tmp10;
  if (timestamp <= valueOfResult) {
    if (!flag) {
      if (isAndroidResult) {
        isAndroidResult = tmp14;
      }
      if (isAndroidResult) {
        isAndroidResult = null == premiumTrialOffer;
      }
      if (isAndroidResult) {
        isAndroidResult = null != promotion;
      }
      if (isAndroidResult) {
        isAndroidResult = !isPaymentsBlocked;
      }
      if (isAndroidResult) {
        isAndroidResult = null == premiumDiscountOffer;
      }
      bogoMarketingMaterialsEnabled = isAndroidResult;
    }
    tmp16 = bogoMarketingMaterialsEnabled;
  }
  return tmp16;
};
export { isEligibleForBOGOPromotion };
export const maybeFetchActiveBogoPromotion = function maybeFetchActiveBogoPromotion() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};