// === Module 17491: SubscriptionManager ===

// Module 17491 (SubscriptionManager)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserStore from "UserStore" /* 1371 */;
import BillingInfoStore from "BillingInfoStore" /* 4220 */;
import SubscriptionStore from "SubscriptionStore" /* 4224 */;
import EntitlementStore from "EntitlementStore" /* 7394 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

let require = fn;
const PremiumConstants = fn(1373);
({ PREMIUM_SUBSCRIPTION_APPLICATION: closure_7, PremiumTypes: closure_8 } = PremiumConstants);
let prototype = function SubscriptionManager() {
  let applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      const result = applyArgumentsResult.maybeFetchSubscriptions();
      const result1 = applyArgumentsResult.maybeFetchCountryCode();
      const result2 = applyArgumentsResult.maybeFetchMostRecentSubscription();
    }
  };
  applyArgumentsResult.maybeFetchSubscriptions = asyncGeneratorStep(async (arg0, value) => {
    if (currentUser === 2) {
      currentUser = 3;
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
        currentUser = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            currentUser = 3;
            throw value;
          } else if (arg0 === 2) {
            currentUser = 3;
            obj = { value, done: true };
            return obj;
          } else {
            dependencyMap = tmp5;
            let premiumSubscription;
            currentUser = currentUser.getCurrentUser();
            if (obj9.isPremium(currentUser)) {
              let isSubscriptionFetching = isFetchingMostRecentSubscription.hasFetchedSubscriptions();
              if (!isSubscriptionFetching) {
                isSubscriptionFetching = BillingInfoStore.isSubscriptionFetching;
              }
              if (!isSubscriptionFetching) {
                let obj2 = tmp2(4884);
                c2 = 1;
                currentUser = 1;
                const obj1 = { value: obj2.fetchSubscriptions(), done: false };
                return obj1;
              }
            }
            currentUser = 3;
            return { value: "HermesInternal", done: null };
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            currentUser = 3;
            throw value;
          } else if (arg0 === 2) {
            currentUser = 3;
            obj2 = { value, done: true };
            return obj2;
          }
        } else if (arg0 === 1) {
          currentUser = 3;
          throw value;
        } else if (arg0 === 2) {
          currentUser = 3;
          obj = { value, done: true };
          return obj;
        }
        premiumSubscription = isFetchingMostRecentSubscription.getPremiumSubscription();
        let paymentSourceId;
        if (premiumSubscription != null) {
          paymentSourceId = premiumSubscription.paymentSourceId;
        }
        let hasItem = null != paymentSourceId;
        if (!hasItem) {
          const applicationIdsFetched = EntitlementStore.applicationIdsFetched;
          hasItem = applicationIdsFetched.has(closure_1_7);
        }
        if (!hasItem) {
          c2 = 2;
          currentUser = 1;
          const obj3 = { value: tmp2(7400).fetchUserEntitlementsForApplication(closure_1_7), done: false };
          return obj3;
        }
      } catch (tmp22) {
        currentUser = tmp;
        throw tmp22;
      }
    }
  });
  applyArgumentsResult.maybeFetchMostRecentSubscription = function maybeFetchMostRecentSubscription() {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    if (premiumType == null) {
      premiumType = null;
    }
    const obj2 = applyArgumentsResult(dependencyMap[7]);
    const tmp = applyArgumentsResult;
    const tmp2 = dependencyMap;
    let hasHadPremiumResult = null != currentUser;
    isFetchingMostRecentSubscription = isFetchingMostRecentSubscription.getIsFetchingMostRecentSubscription();
    if (hasHadPremiumResult) {
      hasHadPremiumResult = isPremiumAtMostResult;
    }
    if (hasHadPremiumResult) {
      hasHadPremiumResult = currentUser.hasHadPremium();
    }
    if (hasHadPremiumResult) {
      hasHadPremiumResult = !isFetchingMostRecentSubscription;
    }
    if (hasHadPremiumResult) {
      const mostRecentSubscription = tmp(tmp2[8]).fetchMostRecentSubscription();
      const tmpResult = tmp(tmp2[8]);
    }
  };
  closure_129_0 = applyArgumentsResult;
  applyArgumentsResult.maybeFetchCountryCode = asyncGeneratorStep(async (arg0, value) => {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        v3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            currentUser = currentUser.getCurrentUser();
            let isPremiumResult = v3(dependencyMap[7]).isPremium(currentUser);
            if (isPremiumResult) {
              isPremiumResult = !ipCountryCodeLoaded.ipCountryCodeLoaded;
            }
            if (isPremiumResult) {
              dependencyMap = 1;
              v3 = 1;
              const obj1 = { value: applyArgumentsResult.fetchCountryCode(), done: false };
              return obj1;
            }
            const obj5 = v3(dependencyMap[7]);
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          obj = { value, done: true };
          return obj;
        }
        v3 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp8) {
        v3 = tmp;
        throw tmp8;
      }
    }
  });
  applyArgumentsResult.fetchCountryCode = asyncGeneratorStep(async (arg0, value) => {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        c2 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            applyArgumentsResult = tmp4;
            dependencyMap = 1;
            c2 = 1;
            let obj1 = { value: applyArgumentsResult(4884).fetchIpCountryCode(), done: false };
            return obj1;
          }
        } else {
          if (1 === tmp4) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj2 = { value, done: true };
              return obj2;
            } else if (null != ipCountryCode.ipCountryCode) {
              obj1 = applyArgumentsResult(4884);
              dependencyMap = 2;
              c2 = 1;
              const obj3 = { value: obj1.fetchPaymentSources(), done: false };
              return obj3;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          }
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp13) {
        c2 = tmp;
        throw tmp13;
      }
    }
  });
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
prototype = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/SubscriptionManager.tsx");

export default prototype;