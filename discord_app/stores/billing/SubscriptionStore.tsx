// === Module 4224: SubscriptionStore ===

// Module 4224 (SubscriptionStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import OverridePremiumTypeStore from "OverridePremiumTypeStore" /* 1372 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

function reset() {
  closure_8 = null;
  items1 = null;
  c10 = null;
  c11 = false;
  closure_12 = null;
  c13 = false;
  c14 = false;
  c16 = false;
  c17 = null;
}
const isNoneSubscription = fn(4219).isNoneSubscription;
const SubscriptionRecord = fn(4225).SubscriptionRecord;
const Constants = fn(1074);
({ SubscriptionStatusTypes: closure_4, SubscriptionTypes: hasOwnProperty } = Constants);
let obj = null;
let closure_8 = null;
let items1 = null;
let c10 = null;
let c11 = false;
let closure_12 = null;
let c13 = false;
let c14 = false;
let c15 = null;
let c16 = false;
let c17 = null;
const Store = initializeDefault.Store;
class SubscriptionStore extends Store {
}
const prototype = SubscriptionStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore, OverridePremiumTypeStore);
};
prototype["hasFetchedSubscriptions"] = function hasFetchedSubscriptions() {
  return null != obj;
};
prototype["hasFetchedMostRecentPremiumTypeSubscription"] = function hasFetchedMostRecentPremiumTypeSubscription() {
  return c11;
};
prototype["hasFetchedPreviousPremiumTypeSubscription"] = function hasFetchedPreviousPremiumTypeSubscription() {
  return c13;
};
prototype["getPremiumSubscription"] = function getPremiumSubscription(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const PREMIUM = constants2.PREMIUM;
  if (flag === undefined) {
    flag = true;
  }
  if (PREMIUM !== constants2.PREMIUM) {
    const tmp5 = flag ? obj : obj;
    let tmp4 = null;
    if (null != tmp5) {
      tmp4 = null;
      const keys = Object.keys();
      if (keys !== undefined) {
        tmp4 = null;
        while (keys[tmp] !== undefined) {
          let tmp14 = tmp5[tmp9];
          tmp4 = null;
          if (tmp14.userId !== AuthenticationStore.getId()) {
            break;
          } else {
            if (tmp14.type !== PREMIUM) {
              continue;
            } else {
              let tmp11 = isNoneSubscription(tmp14.planId);
              let tmp12 = !tmp11;
              tmp4 = tmp14;
              if (!tmp11) {
                break;
              }
            }
            continue;
          }
        }
      }
    }
  } else {
    tmp4 = null;
  }
  return tmp4;
};
prototype["getPremiumTypeSubscription"] = function getPremiumTypeSubscription(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const PREMIUM = constants2.PREMIUM;
  if (flag === undefined) {
    flag = true;
  }
  if (PREMIUM !== constants2.PREMIUM) {
    const tmp5 = flag ? obj : obj;
    let tmp4 = null;
    if (null != tmp5) {
      tmp4 = null;
      const keys = Object.keys();
      if (keys !== undefined) {
        tmp4 = null;
        while (keys[tmp] !== undefined) {
          let tmp11 = tmp5[tmp9];
          tmp4 = null;
          if (tmp11.userId !== AuthenticationStore.getId()) {
            break;
          } else {
            tmp4 = tmp11;
            if (tmp11.type === PREMIUM) {
              break;
            }
          }
        }
      }
    }
  } else {
    tmp4 = null;
  }
  return tmp4;
};
prototype["getSubscriptions"] = function getSubscriptions(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  return flag ? obj : obj;
};
prototype["getSubscriptionById"] = function getSubscriptionById(subscription_id) {
  let tmp2;
  if (obj != null) {
    tmp2 = tmp[subscription_id];
  }
  return tmp2;
};
prototype["getActiveGuildSubscriptions"] = function getActiveGuildSubscriptions() {
  return items1;
};
prototype["getActiveApplicationSubscriptions"] = function getActiveApplicationSubscriptions() {
  return c10;
};
prototype["getSubscriptionForPlanIds"] = function getSubscriptionForPlanIds(items) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const set = new Set(items);
  const tmp2 = flag ? obj : obj;
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
  return closure_8;
};
prototype["getPreviousPremiumTypeSubscription"] = function getPreviousPremiumTypeSubscription() {
  return closure_12;
};
prototype["getIsSubscriptionEligibleForReward"] = function getIsSubscriptionEligibleForReward() {
  return c15;
};
prototype["getIsFetchingSubscriptionRewardEligibility"] = function getIsFetchingSubscriptionRewardEligibility() {
  return c14;
};
prototype["getIsFetchingMostRecentSubscription"] = function getIsFetchingMostRecentSubscription() {
  return c16;
};
prototype["getLastLazyPerkSync"] = function getLastLazyPerkSync() {
  return c17;
};
prototype["getPremiumGroupSubscription"] = function getPremiumGroupSubscription() {
  const PREMIUM = constants2.PREMIUM;
  if (PREMIUM !== constants2.PREMIUM) {
    let tmp3 = null;
    if (null != obj) {
      tmp3 = null;
      const keys = Object.keys();
      if (keys !== undefined) {
        tmp3 = null;
        while (keys[tmp] !== undefined) {
          let tmp11 = tmp4[tmp8];
          tmp3 = null;
          if (tmp11.userId !== AuthenticationStore.getId()) {
            break;
          } else {
            if (tmp11.type !== PREMIUM) {
              continue;
            } else {
              let tmp9 = tmp11.hasAnyPremiumGroup && tmp11.statusAllowsPerks;
              tmp3 = tmp11;
              if (tmp9) {
                break;
              }
            }
            continue;
          }
        }
      }
    }
  } else {
    tmp3 = null;
  }
  return tmp3;
};
SubscriptionStore.displayName = "SubscriptionStore";
obj = {
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: function handleSubscriptionsFetch(subscriptions) {
    subscriptions = subscriptions.subscriptions;
    obj = {};
    obj = {};
    const items = [];
    items1 = [];
    const id = items1.getId();
    const item = subscriptions.forEach((user_id) => {
      if (user_id.user_id === closure_4) {
        const fromServer = SubscriptionRecord.createFromServer(user_id);
        obj[fromServer.id] = fromServer;
        if (fromServer.status !== constants.UNPAID) {
          obj[fromServer.id] = fromServer;
          let tmp3 = fromServer.type === constants2.GUILD;
          if (tmp3) {
            tmp3 = fromServer.status !== tmp12.ENDED;
          }
          if (tmp3) {
            items.push(fromServer);
          }
          if (tmp6) {
            items1.push(fromServer);
          }
          tmp6 = fromServer.type === constants2.APPLICATION && fromServer.status !== tmp12.ENDED;
        }
      }
    });
    const lastLazyPerkSync = subscriptions.lastLazyPerkSync;
  },
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: function handleSubscriptionUpdate(subscription) {
    subscription = subscription.subscription;
    if (subscription.user_id === AuthenticationStore.getId()) {
      const fromServer = SubscriptionRecord.createFromServer(subscription);
      obj = {};
      const merged = Object.assign(obj);
      obj[fromServer.id] = fromServer;
      if (fromServer.status !== constants.UNPAID) {
        obj = {};
        const merged1 = Object.assign(obj);
        obj[fromServer.id] = fromServer;
      }
      let tmp6 = null != items1;
      if (tmp6) {
        tmp6 = fromServer.type === constants2.GUILD;
      }
      if (!tmp6) {
        let tmp19 = null != _null;
        if (tmp19) {
          tmp19 = fromServer.type === constants2.APPLICATION;
        }
        if (tmp19) {
          const findIndexResult = _null.findIndex((id) => id.id === fromServer.id);
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
          items1 = tmp27;
        }
      } else {
        const findIndexResult1 = items1.findIndex((id) => id.id === fromServer.id);
        if (-1 === findIndexResult1) {
          items1 = [fromServer];
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
        items1 = tmp14;
      }
    }
  },
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START: function handleMostRecentSubscriptionFetchStart() {
    c16 = true;
  },
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function handleMostRecentSubscriptionFetch(subscription) {
    subscription = subscription.subscription;
    c11 = true;
    c16 = false;
    if (null != subscription) {
      if (subscription.user_id !== AuthenticationStore.getId()) {
        c11 = false;
      } else {
        closure_8 = SubscriptionRecord.createFromServer(subscription);
      }
    }
  },
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL: function handleMostRecentSubscriptionFetchFail() {
    c16 = false;
  },
  BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: function handlePreviousSubscriptionFetch(subscription) {
    subscription = subscription.subscription;
    c13 = true;
    if (null != subscription) {
      if (subscription.user_id !== AuthenticationStore.getId()) {
        c13 = false;
      } else {
        closure_12 = SubscriptionRecord.createFromServer(subscription);
      }
    }
  },
  BILLING_SUBSCRIPTION_RESET: reset,
  BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_START: function handleSubscriptionRewardEligibilityFetchStart() {
    c14 = true;
  },
  BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_SUCCESS: function handleSubscriptionRewardEligibilityFetch(eligible) {
    eligible = eligible.eligible;
    c14 = false;
  },
  BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_FAILURE: function handleSubscriptionRewardEligibilityFetchFailed(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      c15 = false;
      c14 = false;
    }
  },
  SET_PREMIUM_TYPE_OVERRIDE: function handlePremiumTypeOverride() {
    return true;
  },
  LOGOUT: reset
};
const subscriptionStore = new SubscriptionStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("stores/billing/SubscriptionStore.tsx");

export default subscriptionStore;
export const getSubscriptionOfType = function getSubscriptionOfType(arg0, fn) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  if (arg0 === constants2.PREMIUM) {
    if (null === OverridePremiumTypeStore.getPremiumTypeOverride()) {
      return null;
    }
  }
  const tmp3 = flag ? obj : obj;
  if (null == tmp3) {
    return null;
  } else {
    for (const key10014 in tmp3) {
      let tmp6 = tmp3[key10014];
      if (tmp6.userId !== AuthenticationStore.getId()) {
        return null;
      } else {
        if (tmp6.type !== arg0) {
          continue;
        } else {
          return tmp6;
        }
        continue;
      }
    }
    return null;
  }
};