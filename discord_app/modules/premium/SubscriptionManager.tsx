// === Module 17977: SubscriptionManager ===

// Module 17977 (SubscriptionManager)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserStore from "UserStore" /* 1372 */;
import BillingInfoStore from "BillingInfoStore" /* 4483 */;
import SubscriptionStore from "SubscriptionStore" /* 4487 */;
import EntitlementStore from "EntitlementStore" /* 7722 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7449 */;

let require = fn;
const PremiumConstants = fn(1374);
({ PREMIUM_SUBSCRIPTION_APPLICATION: closure_7, PremiumTypes: closure_8 } = PremiumConstants);
const prototype = function SubscriptionManager() {
  let applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      const result = applyArgumentsResult.maybeFetchSubscriptions();
      const result1 = applyArgumentsResult.maybeFetchCountryCode();
      const result2 = applyArgumentsResult.maybeFetchMostRecentSubscription();
    }
  };
  applyArgumentsResult.maybeFetchSubscriptions = asyncGeneratorStep(async () => {
    if (currentUser === 2) {
      currentUser = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
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
            const obj4 = { value, done: true };
            return obj4;
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
                c2 = 1;
                currentUser = 1;
                const obj6 = { value: tmp2(5164).fetchSubscriptions(), done: false };
                return obj6;
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
            const obj7 = { value, done: true };
            return obj7;
          }
        } else if (arg0 === 1) {
          currentUser = 3;
          throw value;
        } else if (arg0 === 2) {
          currentUser = 3;
          const obj = { value, done: true };
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
          const obj8 = { value: tmp2(7728).fetchUserEntitlementsForApplication(closure_1_7), done: false };
          return obj8;
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
      const mostRecentSubscription = applyArgumentsResult(dependencyMap[8]).fetchMostRecentSubscription();
      const tmpResult = applyArgumentsResult(dependencyMap[8]);
    }
    isPremiumAtMostResult = applyArgumentsResult(dependencyMap[7]).isPremiumAtMost(premiumType, TIER_1.TIER_1);
  };
  closure_129_0 = applyArgumentsResult;
  applyArgumentsResult.maybeFetchCountryCode = asyncGeneratorStep(async () => {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            currentUser = currentUser.getCurrentUser();
            let isPremiumResult = v3(dependencyMap[7]).isPremium(currentUser);
            if (isPremiumResult) {
              isPremiumResult = !ipCountryCodeLoaded.ipCountryCodeLoaded;
            }
            if (isPremiumResult) {
              dependencyMap = 1;
              v3 = 1;
              const obj4 = { value: applyArgumentsResult.fetchCountryCode(), done: false };
              return obj4;
            }
            const obj5 = v3(dependencyMap[7]);
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          const obj = { value, done: true };
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
  applyArgumentsResult.fetchCountryCode = asyncGeneratorStep(async () => {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            applyArgumentsResult = tmp4;
            dependencyMap = 1;
            c2 = 1;
            const obj6 = { value: applyArgumentsResult(5164).fetchIpCountryCode(), done: false };
            return obj6;
          }
        } else {
          if (1 === tmp4) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else if (null != ipCountryCode.ipCountryCode) {
              dependencyMap = 2;
              c2 = 1;
              const obj8 = { value: applyArgumentsResult(5164).fetchPaymentSources(), done: false };
              return obj8;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
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
const prototype1 = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/SubscriptionManager.tsx");

export default prototype1;