// discord_app/stores/billing/SubscriptionStore.tsx
import { isNoneSubscription } from "createFromServer";
import { SubscriptionRecord } from "createSubscriptionItemFromServer";
import fetchFingerprint from "fetchFingerprint";
import ME from "ME";
import { Store } from "initialize";

let c3;
let c4;
function reset() {
  let c5 = null;
  let c6 = null;
  let c7 = null;
  let c8 = null;
  let c9 = null;
  let c10 = false;
  let c11 = null;
  let c12 = false;
  let c13 = false;
  let c15 = false;
  let c16 = null;
}
({ SubscriptionStatusTypes: c3, SubscriptionTypes: c4 } = ME);
let c5 = null;
let c6 = null;
let c7 = null;
let c8 = null;
let c9 = null;
let c10 = false;
let c11 = null;
let c12 = false;
let c13 = false;
let c14 = null;
let c15 = false;
let c16 = null;
class SubscriptionStore extends Store {
}
const prototype = SubscriptionStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(fetchFingerprint);
};
prototype["hasFetchedSubscriptions"] = function hasFetchedSubscriptions() {
  return null != c5;
};
prototype["hasFetchedMostRecentPremiumTypeSubscription"] = function hasFetchedMostRecentPremiumTypeSubscription() {
  return c10;
};
prototype["hasFetchedPreviousPremiumTypeSubscription"] = function hasFetchedPreviousPremiumTypeSubscription() {
  return c12;
};
prototype["getPremiumSubscription"] = function getPremiumSubscription(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  if (flag === undefined) {
    flag = true;
  }
  const tmp3 = flag ? c6 : c5;
  let tmp4 = null;
  if (null != tmp3) {
    tmp4 = null;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp4 = null;
      while (keys[tmp] !== undefined) {
        let tmp11 = tmp7;
        let tmp12 = tmp3[tmp7];
        let tmp13 = store;
        tmp4 = null;
        if (tmp12.userId !== store.getId()) {
          break;
        } else {
          if (tmp12.type !== tmp2) {
            continue;
          } else {
            let tmp8 = isNoneSubscription;
            let tmp9 = isNoneSubscription(tmp12.planId);
            let tmp10 = !tmp9;
            tmp4 = tmp12;
            if (!tmp9) {
              break;
            }
          }
          continue;
        }
      }
    }
  }
  return tmp4;
};
prototype["getPremiumTypeSubscription"] = function getPremiumTypeSubscription(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  if (flag === undefined) {
    flag = true;
  }
  const tmp3 = flag ? c6 : c5;
  let tmp4 = null;
  if (null != tmp3) {
    tmp4 = null;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp4 = null;
      while (keys[tmp] !== undefined) {
        let tmp8 = tmp7;
        let tmp9 = tmp3[tmp7];
        let tmp10 = store;
        tmp4 = null;
        if (tmp9.userId !== store.getId()) {
          break;
        } else {
          tmp4 = tmp9;
          if (tmp9.type === tmp2) {
            break;
          }
        }
      }
    }
  }
  return tmp4;
};
prototype["getSubscriptions"] = function getSubscriptions(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  return flag ? c6 : c5;
};
prototype["getSubscriptionById"] = function getSubscriptionById(subscription_id) {
  let tmp2;
  if (c5 != null) {
    tmp2 = tmp[subscription_id];
  }
  return tmp2;
};
prototype["getActiveGuildSubscriptions"] = function getActiveGuildSubscriptions() {
  return c8;
};
prototype["getActiveApplicationSubscriptions"] = function getActiveApplicationSubscriptions() {
  return c9;
};
prototype["getSubscriptionForPlanIds"] = function getSubscriptionForPlanIds(items) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let set;
  set = new Set(items);
  const tmp2 = flag ? c6 : c5;
  let tmp3 = null;
  if (null != tmp2) {
    const _Object = Object;
    const values = Object.values(tmp2);
    let found = values.find((items) => {
      items = items.items;
      return items.some((planId) => set.has(planId.planId));
    });
    if (found == null) {
      found = null;
    }
    tmp3 = found;
  }
  return tmp3;
};
prototype["getMostRecentPremiumTypeSubscription"] = function getMostRecentPremiumTypeSubscription() {
  return c7;
};
prototype["getPreviousPremiumTypeSubscription"] = function getPreviousPremiumTypeSubscription() {
  return c11;
};
prototype["getIsSubscriptionEligibleForReward"] = function getIsSubscriptionEligibleForReward() {
  return c14;
};
prototype["getIsFetchingSubscriptionRewardEligibility"] = function getIsFetchingSubscriptionRewardEligibility() {
  return c13;
};
prototype["getIsFetchingMostRecentSubscription"] = function getIsFetchingMostRecentSubscription() {
  return c15;
};
prototype["getLastLazyPerkSync"] = function getLastLazyPerkSync() {
  return c16;
};
prototype["getPremiumGroupSubscription"] = function getPremiumGroupSubscription() {
  let tmp4 = null;
  if (null != c6) {
    tmp4 = null;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp4 = null;
      while (keys[tmp] !== undefined) {
        let tmp9 = tmp7;
        let tmp10 = tmp3[tmp7];
        let tmp11 = store;
        tmp4 = null;
        if (tmp10.userId !== store.getId()) {
          break;
        } else {
          if (tmp10.type !== tmp2) {
            continue;
          } else {
            let tmp8 = tmp10.hasAnyPremiumGroup && tmp10.statusAllowsPerks;
            tmp4 = tmp10;
            if (tmp8) {
              break;
            }
          }
          continue;
        }
      }
    }
  }
  return tmp4;
};
SubscriptionStore.displayName = "SubscriptionStore";
const subscriptionStore = new SubscriptionStore(require("dispatcher"), {
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: function handleSubscriptionsFetch(subscriptions) {
    subscriptions = subscriptions.subscriptions;
    let id;
    let obj = {};
    obj = {};
    const items = [];
    const items1 = [];
    id = items.getId();
    const item = subscriptions.forEach((user_id) => {
      if (user_id.user_id === constants) {
        const fromServer = obj.createFromServer(user_id);
        obj[fromServer.id] = fromServer;
        if (fromServer.status !== items1.UNPAID) {
          obj[fromServer.id] = fromServer;
          let tmp3 = fromServer.type === constants.GUILD;
          if (tmp3) {
            tmp3 = fromServer.status !== tmp12.ENDED;
          }
          if (tmp3) {
            items.push(fromServer);
          }
          if (tmp6) {
            items1.push(fromServer);
          }
          const tmp2 = constants;
          tmp6 = fromServer.type === constants.APPLICATION && fromServer.status !== tmp12.ENDED;
        }
      }
    });
    const lastLazyPerkSync = subscriptions.lastLazyPerkSync;
  },
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: function handleSubscriptionUpdate(subscription) {
    subscription = subscription.subscription;
    if (subscription.user_id === store.getId()) {
      const fromServer = SubscriptionRecord.createFromServer(subscription);
      let obj = {};
      const merged = Object.assign(obj);
      obj[fromServer.id] = fromServer;
      if (fromServer.status !== constants.UNPAID) {
        obj = {};
        const merged1 = Object.assign(obj);
        obj[fromServer.id] = fromServer;
      }
      let tmp6 = null != _null;
      if (tmp6) {
        tmp6 = fromServer.type === constants2.GUILD;
      }
      if (!tmp6) {
        let tmp19 = null != _null2;
        if (tmp19) {
          tmp19 = fromServer.type === constants2.APPLICATION;
        }
        if (tmp19) {
          const findIndexResult = _null2.findIndex((id) => id.id === fromServer.id);
          if (-1 === findIndexResult) {
            let items = [fromServer];
            HermesBuiltin.arraySpread(tmp21, 1);
            let tmp27 = items;
          } else {
            items = [];
            HermesBuiltin.arraySpread(tmp21, 0);
            if (fromServer.status === tmp36.UNPAID) {
              items.splice(findIndexResult, 1);
              tmp27 = items;
            }
            items[findIndexResult] = fromServer;
            tmp27 = items;
          }
          _null = tmp27;
        }
      } else {
        const findIndexResult1 = _null.findIndex((id) => id.id === fromServer.id);
        if (-1 === findIndexResult1) {
          let items1 = [fromServer];
          HermesBuiltin.arraySpread(tmp8, 1);
          let tmp14 = items1;
        } else {
          items1 = [];
          HermesBuiltin.arraySpread(tmp8, 0);
          if (fromServer.status === tmp36.UNPAID) {
            items1.splice(findIndexResult1, 1);
            tmp14 = items1;
          }
          items1[findIndexResult1] = fromServer;
          tmp14 = items1;
        }
        _null = tmp14;
      }
    }
  },
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START: function handleMostRecentSubscriptionFetchStart() {
    let c15 = true;
  },
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function handleMostRecentSubscriptionFetch(subscription) {
    subscription = subscription.subscription;
    let c10 = true;
    let c15 = false;
    if (null != subscription) {
      if (subscription.user_id !== store.getId()) {
        c10 = false;
      } else {
        let closure_7 = SubscriptionRecord.createFromServer(subscription);
      }
    }
  },
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL: function handleMostRecentSubscriptionFetchFail() {
    let c15 = false;
  },
  BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: function handlePreviousSubscriptionFetch(subscription) {
    subscription = subscription.subscription;
    let c12 = true;
    if (null != subscription) {
      if (subscription.user_id !== store.getId()) {
        c12 = false;
      } else {
        let closure_11 = SubscriptionRecord.createFromServer(subscription);
      }
    }
  },
  BILLING_SUBSCRIPTION_RESET: reset,
  BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_START: function handleSubscriptionRewardEligibilityFetchStart() {
    let c13 = true;
  },
  BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_SUCCESS: function handleSubscriptionRewardEligibilityFetch(eligible) {
    eligible = eligible.eligible;
    let c13 = false;
  },
  BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_FAILURE: function handleSubscriptionRewardEligibilityFetchFailed(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError();
    } else {
      let c14 = false;
      let c13 = false;
    }
  },
  LOGOUT: reset
});
const result = require("fetchFingerprint").fileFinishedImporting("stores/billing/SubscriptionStore.tsx");

export default subscriptionStore;
export const getSubscriptionOfType = function getSubscriptionOfType(arg0, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  const tmp = flag ? c6 : c5;
  if (null == tmp) {
    return null;
  } else {
    for (const key10008 in tmp) {
      let tmp3 = key10008;
      let tmp4 = tmp[key10008];
      let tmp5 = store;
      if (tmp4.userId !== store.getId()) {
        return null;
      } else {
        if (tmp4.type !== arg0) {
          continue;
        } else {
          return tmp4;
        }
        continue;
      }
    }
    return null;
  }
};