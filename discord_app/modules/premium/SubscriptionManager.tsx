// discord_app/modules/premium/SubscriptionManager.tsx
import closure_2 from "GuildFeatures";
import mergeGuildAvatar from "mergeGuildAvatar";
import handlePaymentSourceCreateEnd from "handlePaymentSourceCreateEnd";
import reset from "reset";
import addEntitlement from "addEntitlement";
import GuildFeatures from "GuildFeatures";
import "initialize";

let error;
let metroImportAll;
let require = arg1;
({ PREMIUM_SUBSCRIPTION_APPLICATION: error, PremiumTypes: metroImportAll } = GuildFeatures);
let prototype = function SubscriptionManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  let require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      const result = applyArgumentsResult.maybeFetchSubscriptions();
      const result1 = applyArgumentsResult.maybeFetchCountryCode();
      const result2 = applyArgumentsResult.maybeFetchMostRecentSubscription();
    }
  };
  applyArgumentsResult.maybeFetchSubscriptions = callback(function*() {
    if (currentUser === 2) {
      currentUser = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            throw arg1;
          } else if (arg0 === 2) {
            currentUser = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp5;
            let paymentSourceId = tmp2;
            paymentSourceId = undefined;
            currentUser = currentUser.getCurrentUser();
            if (obj9.isPremium(currentUser)) {
              let isSubscriptionFetching = outer1_5.hasFetchedSubscriptions();
              if (!isSubscriptionFetching) {
                isSubscriptionFetching = outer1_4.isSubscriptionFetching;
              }
              if (!isSubscriptionFetching) {
                let obj2 = outer1_0(outer1_1[8]);
                c2 = 1;
                currentUser = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = obj2.fetchSubscriptions();
                return obj1;
              }
            }
            currentUser = 3;
            return { value: "HermesInternal", done: null };
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            currentUser = 3;
            throw arg1;
          } else if (arg0 === 2) {
            currentUser = 3;
            obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          }
        } else if (arg0 === 1) {
          currentUser = 3;
          throw arg1;
        } else if (arg0 === 2) {
          currentUser = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        paymentSourceId = outer1_5.getPremiumSubscription();
        paymentSourceId = undefined;
        if (paymentSourceId != null) {
          paymentSourceId = paymentSourceId.paymentSourceId;
        }
        let hasItem = null != paymentSourceId;
        if (!hasItem) {
          const applicationIdsFetched = outer1_6.applicationIdsFetched;
          hasItem = applicationIdsFetched.has(outer1_7);
        }
        if (!hasItem) {
          c2 = 2;
          currentUser = 1;
          const obj3 = { value: null, done: false };
          obj3[0] = outer1_0(outer1_1[9]).fetchUserEntitlementsForApplication(outer1_7);
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
    const obj2 = applyArgumentsResult(table[7]);
    const tmp = applyArgumentsResult;
    const tmp2 = table;
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
  require = applyArgumentsResult;
  applyArgumentsResult.maybeFetchCountryCode = callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v0 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const currentUser = outer1_3.getCurrentUser();
            let isPremiumResult = v0(table[7]).isPremium(currentUser);
            if (isPremiumResult) {
              isPremiumResult = !outer1_4.ipCountryCodeLoaded;
            }
            if (isPremiumResult) {
              table = 1;
              v0 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = v0.fetchCountryCode();
              return obj1;
            }
            const obj5 = v0(table[7]);
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        v0 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp8) {
        v0 = tmp;
        throw tmp8;
      }
    }
  });
  applyArgumentsResult.fetchCountryCode = callback(function*() {
    if (c2 === 2) {
      c2 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_0 = tmp4;
            dependencyMap = 1;
            c2 = 1;
            let obj1 = { value: null, done: false };
            obj1[0] = outer1_0(4604).fetchIpCountryCode();
            return obj1;
          }
        } else {
          if (1 === tmp4) {
            if (arg0 === 1) {
              c2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else if (null != outer1_4.ipCountryCode) {
              obj1 = outer1_0(4604);
              dependencyMap = 2;
              c2 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = obj1.fetchPaymentSources();
              return obj3;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
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
let result = require("handlePaymentSourceCreateEnd").fileFinishedImporting("modules/premium/SubscriptionManager.tsx");

export default prototype;