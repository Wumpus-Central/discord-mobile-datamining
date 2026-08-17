// discord_app/modules/premium/PremiumBogoPromotionUtilsCommon.tsx
import set from "set" /* 500 */;
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 647 */;
import tDefault from "t" /* 3975 */;
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4039 */;
import isTablet from "isTablet" /* 4383 */;
import useBlockedPaymentsConfig from "useBlockedPaymentsConfig" /* 7388 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7418 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 7625 */;
import useEligibleActiveOutboundPromotions from "useEligibleActiveOutboundPromotions" /* 12899 */;
import apexExperiment from "apexExperiment" /* 12900 */;
import useScheduledForcedUpdateDefault from "useScheduledForcedUpdate" /* 12901 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "mergeGuildAvatar" /* 1922 */;
import closure_5 from "reset" /* 4045 */;
import closure_6 from "emitChanges" /* 7421 */;
import closure_7 from "addEntitlement" /* 5357 */;
import closure_8 from "createEmptyPromotionsByType" /* 7628 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import ME from "ME" /* 676 */;

require = arg1;
function isUserEligibleBasedOnCurrentOrPreviousSubs(experimentEnabled) {
  ({ premiumSubscription, mostRecentSubscription, previousPremiumSubscription } = experimentEnabled);
  if (experimentEnabled.experimentEnabled) {
    if (null != mostRecentSubscription) {
      if (mostRecentSubscription.status === constants2.ENDED) {
        const endedAt = mostRecentSubscription.endedAt;
        if (null != endedAt) {
          if (mostRecentSubscription.hasPremiumAtLeast(closure_10.TIER_2)) {
            const obj = tDefault();
            if (subtractResult.isBefore(endedAt)) {
              return false;
            }
            subtractResult = tDefault().subtract(10, "days");
          }
        }
      }
    }
    if (null != previousPremiumSubscription) {
      if (previousPremiumSubscription.status === constants2.ENDED) {
        const endedAt2 = previousPremiumSubscription.endedAt;
        if (null != endedAt2) {
          if (previousPremiumSubscription.hasPremiumAtLeast(closure_10.TIER_2)) {
            const obj3 = tDefault();
            if (subtractResult1.isBefore(endedAt2)) {
              return false;
            }
            subtractResult1 = tDefault().subtract(10, "days");
          }
        }
      }
    }
    if (null != premiumSubscription) {
      let hasActiveTrial;
      currentUser = currentUser.getCurrentUser();
      if (premiumSubscription != null) {
        hasActiveTrial = premiumSubscription.hasActiveTrial;
      }
      let isPremiumExactlyResult = hasActiveTrial;
      if (isPremiumExactlyResult) {
        isPremiumExactlyResult = getPremiumPlanItemDefault.isPremiumExactly(currentUser, tmp22.TIER_0);
        const obj5 = getPremiumPlanItemDefault;
      }
      const hasPremiumAtLeastResult = premiumSubscription.hasPremiumAtLeast(closure_10.TIER_2);
      tmp22 = closure_10;
      let isAndroidResult = set.isAndroid();
      if (isAndroidResult) {
        isAndroidResult = premiumSubscription.paymentGateway !== constants.GOOGLE;
      }
      return false;
    }
    const isMobile = isTablet.isMobile;
    let tmp20 = !isMobile;
    if (isMobile) {
      tmp20 = !fractionalPremiumActive.isFractionalPremiumActive();
    }
    return tmp20;
  } else {
    return false;
  }
}
function isEligibleForBOGOPromotion() {
  const self = this;
  const apply = _isEligibleForBOGOPromotion.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _isEligibleForBOGOPromotion() {
  const self = this;
  const tmp = callback(() => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*() {
      if (authStore === 2) {
        authStore = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          authStore = 2;
          if (0 === isPaymentsBlocked) {
            if (arg0 === 1) {
              authStore = 3;
              throw arg1;
            } else if (arg0 === 2) {
              authStore = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp5;
              let currentUser2 = tmp2;
              let flag;
              if (flag === undefined) {
                flag = true;
              }
              currentUser2 = undefined;
              dependencyMap = undefined;
              isPaymentsBlocked = undefined;
              authStore = undefined;
              let store;
              c6 = undefined;
              let mostRecentPremiumTypeSubscription;
              isPaymentsBlocked = 1;
              authStore = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                authStore = 3;
                throw arg1;
              } else if (arg0 === 2) {
                authStore = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                currentUser2 = authStore.getCurrentUser();
                let isClaimedResult;
                if (currentUser2 != null) {
                  isClaimedResult = currentUser2.isClaimed();
                }
                dependencyMap = !isClaimedResult;
                let obj2 = flag(7388);
                isPaymentsBlocked = obj2.getIsPaymentsBlocked();
                let obj3 = flag(12900);
                authStore = obj3.getBogoPromotionGateEnabled("bogo eligibility async check");
                let obj4 = flag(12902);
                store = obj4.getBogoMarketingMaterialsEnabled("bogo marketing eligibility async check");
                const isMobile = flag(4383).isMobile;
                let isAndroidResult = !isMobile;
                if (isMobile) {
                  let obj5 = flag(500);
                  isAndroidResult = obj5.isAndroid();
                }
                c6 = isAndroidResult;
                if (!dependencyMap) {
                  if (!isPaymentsBlocked) {
                    if (authStore) {
                      if (!flag) {
                        if (c6) {
                          if (c6.hasFetchedOffer()) {
                            authStore = 3;
                            return { value: false, done: true };
                          }
                          const result = store.hasFetchedMostRecentPremiumTypeSubscription();
                          let tmp37 = !result;
                          if (!result) {
                            const currentUser = authStore.getCurrentUser();
                            let hasPurchasedFlagResult;
                            if (currentUser != null) {
                              hasPurchasedFlagResult = currentUser.hasPurchasedFlag(PREMIUM_TIER_2.PREMIUM_TIER_2);
                            }
                            tmp37 = hasPurchasedFlagResult;
                          }
                          if (tmp37) {
                            isPaymentsBlocked = 2;
                            authStore = 1;
                            obj2 = { value: null, done: false };
                            obj2[0] = flag(4466).fetchMostRecentSubscription();
                            return obj2;
                          }
                        }
                      }
                    }
                  }
                }
                authStore = 3;
                return { value: false, done: true };
              }
            } else {
              if (2 === tmp5) {
                if (arg0 === 1) {
                  authStore = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  authStore = 3;
                  obj3 = { value: null, done: true };
                  obj3[0] = arg1;
                  return obj3;
                }
              } else if (arg0 === 1) {
                authStore = 3;
                throw arg1;
              } else if (arg0 === 2) {
                authStore = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
              mostRecentPremiumTypeSubscription = store.getMostRecentPremiumTypeSubscription();
              obj4 = { experimentEnabled: null, premiumSubscription: null, mostRecentSubscription: null, previousPremiumSubscription: null };
              obj4[0] = authStore;
              obj4[1] = store.getPremiumTypeSubscription();
              obj4[2] = mostRecentPremiumTypeSubscription;
              obj4[3] = store.getPreviousPremiumTypeSubscription();
              authStore = 3;
              obj5 = { value: null, done: true };
              obj5[0] = callback(obj4);
              return obj5;
            }
            if (!store.hasFetchedSubscriptions()) {
              isPaymentsBlocked = 3;
              authStore = 1;
              const obj6 = { value: null, done: false };
              obj6[0] = flag(4466).fetchSubscriptions();
              return obj6;
            }
          }
        } catch (tmp59) {
          authStore = tmp;
          throw tmp59;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_15 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _maybeFetchActiveBogoPromotion() {
  const self = this;
  const tmp = callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = tmp5;
            let bogoPromotion = tmp2;
            bogoPromotion = undefined;
            table = 1;
            c3 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_14(false);
            return obj1;
          }
        } else {
          if (1 === tmp5) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              let obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else if (arg1) {
              bogoPromotion = bogoPromotion.bogoPromotion;
              if (null != bogoPromotion) {
                const _Date = Date;
                const date = new Date(bogoPromotion.endDate);
                const _Date2 = Date;
                if (valueOfResult >= Date.now()) {
                  c3 = 3;
                  return { value: "HermesInternal", done: "HermesInternal" };
                }
                valueOfResult = date.valueOf();
              }
              obj2 = bogoPromotion(table[21]);
              table = 2;
              c3 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = obj2.fetchActiveBogoPromotion();
              return obj3;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c3 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp22) {
        c3 = tmp;
        throw tmp22;
      }
    }
  });
  closure_16 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ PurchasedFlags: c9, PremiumTypes: c10 } = GuildFeatures);
({ PaymentGateways: unpackModuleId, SubscriptionStatusTypes: closure_12 } = ME);
let result = require("set").fileFinishedImporting("modules/premium/PremiumBogoPromotionUtilsCommon.tsx");

export { isUserEligibleBasedOnCurrentOrPreviousSubs };
export const useIsEligibleForBogoPromotion = function useIsEligibleForBogoPromotion() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const isPaymentsBlocked = useBlockedPaymentsConfig.useIsPaymentsBlocked();
  const obj = useBlockedPaymentsConfig;
  const promotion = useEligibleActiveOutboundPromotions.useBogoPromotion().promotion;
  const obj2 = useEligibleActiveOutboundPromotions;
  const bogoPromotionGateEnabled = apexExperiment.useBogoPromotionGateEnabled("bogo eligibility hook");
  const obj3 = apexExperiment;
  const items = [closure_5];
  const stateFromStoresObject = defaultAreStatesEqual.useStateFromStoresObject(items, () => ({ mostRecentSubscription: store.getMostRecentPremiumTypeSubscription(), premiumSubscription: store.getPremiumTypeSubscription(), previousPremiumSubscription: store.getPreviousPremiumTypeSubscription() }));
  ({ mostRecentSubscription, premiumSubscription, previousPremiumSubscription } = stateFromStoresObject);
  const obj4 = defaultAreStatesEqual;
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  const obj5 = usePremiumTrialOffer;
  let num;
  const premiumDiscountOffer = usePremiumDiscountOffer.usePremiumDiscountOffer();
  if (promotion != null) {
    num = promotion.endDate;
  }
  if (num == null) {
    num = 0;
  }
  const obj6 = usePremiumDiscountOffer;
  const valueOfResult = new Date(num).valueOf();
  const timestamp = Date.now();
  let num2 = -1;
  const date = new Date(num);
  if (timestamp <= valueOfResult) {
    num2 = valueOfResult - timestamp;
  }
  useScheduledForcedUpdateDefault({ delay: num2 });
  const isMobile = tmp(4383).isMobile;
  let isAndroidResult = !isMobile;
  if (isMobile) {
    let tmpResult = tmp(500);
    isAndroidResult = tmpResult.isAndroid();
  }
  const tmp11 = useScheduledForcedUpdateDefault;
  tmpResult = tmp(12902);
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
  const apply = _maybeFetchActiveBogoPromotion.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};