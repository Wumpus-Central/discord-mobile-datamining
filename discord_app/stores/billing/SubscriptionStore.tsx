// === Module 4145: reset ===

// Module 4145 (reset)
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import closure_0 from "setActualFromUser" /* 1922 */;
import { isNoneSubscription } from "createFromServer" /* 4140 */;
import { SubscriptionRecord } from "createSubscriptionItemFromServer" /* 4146 */;
import closure_3 from "fetchFingerprint" /* 1215 */;
import ME from "ME" /* 673 */;

function reset() {
  c6 = null;
  c7 = null;
  c8 = null;
  c9 = null;
  c10 = null;
  c11 = false;
  c12 = null;
  c13 = false;
  c14 = false;
  c16 = false;
  c17 = null;
}
({ SubscriptionStatusTypes: c4, SubscriptionTypes: c5 } = ME);
let c6 = null;
let c7 = null;
let c8 = null;
let c9 = null;
let c10 = null;
let c11 = false;
let c12 = null;
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
  this.waitFor(closure_3, closure_0);
};
prototype["hasFetchedSubscriptions"] = function hasFetchedSubscriptions() {
  return null != c6;
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
    const tmp5 = flag ? c7 : c6;
    let tmp4 = null;
    if (null != tmp5) {
      tmp4 = null;
      const keys = Object.keys();
      if (keys !== undefined) {
        tmp4 = null;
        while (keys[tmp] !== undefined) {
          let tmp13 = tmp9;
          let tmp14 = tmp5[tmp9];
          let tmp15 = store2;
          tmp4 = null;
          if (tmp14.userId !== store2.getId()) {
            break;
          } else {
            if (tmp14.type !== PREMIUM) {
              continue;
            } else {
              let tmp10 = isNoneSubscription;
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
    const tmp5 = flag ? c7 : c6;
    let tmp4 = null;
    if (null != tmp5) {
      tmp4 = null;
      const keys = Object.keys();
      if (keys !== undefined) {
        tmp4 = null;
        while (keys[tmp] !== undefined) {
          let tmp10 = tmp9;
          let tmp11 = tmp5[tmp9];
          let tmp12 = store2;
          tmp4 = null;
          if (tmp11.userId !== store2.getId()) {
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
  return flag ? c7 : c6;
};
prototype["getSubscriptionById"] = function getSubscriptionById(subscription_id) {
  let tmp2;
  if (c6 != null) {
    tmp2 = tmp[subscription_id];
  }
  return tmp2;
};
prototype["getActiveGuildSubscriptions"] = function getActiveGuildSubscriptions() {
  return c9;
};
prototype["getActiveApplicationSubscriptions"] = function getActiveApplicationSubscriptions() {
  return c10;
};
prototype["getSubscriptionForPlanIds"] = function getSubscriptionForPlanIds(items) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let set;
  set = new Set(items);
  const tmp2 = flag ? c7 : c6;
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
  return c8;
};
prototype["getPreviousPremiumTypeSubscription"] = function getPreviousPremiumTypeSubscription() {
  return c12;
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
    if (null != c7) {
      tmp3 = null;
      const keys = Object.keys();
      if (keys !== undefined) {
        tmp3 = null;
        while (keys[tmp] !== undefined) {
          let tmp10 = tmp8;
          let tmp11 = tmp4[tmp8];
          let tmp12 = store2;
          tmp3 = null;
          if (tmp11.userId !== store2.getId()) {
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
const subscriptionStore = new SubscriptionStore(dispatcherDefault, {
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: function handleSubscriptionsFetch(subscriptions) {
    subscriptions = subscriptions.subscriptions;
    let id;
    let obj = {};
    obj = {};
    const items = [];
    const items1 = [];
    id = items1.getId();
    const item = subscriptions.forEach((user_id) => {
      if (user_id.user_id === constants) {
        const fromServer = items.createFromServer(user_id);
        obj[fromServer.id] = fromServer;
        if (fromServer.status !== constants.UNPAID) {
          obj[fromServer.id] = fromServer;
          let tmp3 = fromServer.type === closure_1_5.GUILD;
          if (tmp3) {
            tmp3 = fromServer.status !== tmp12.ENDED;
          }
          if (tmp3) {
            items.push(fromServer);
          }
          if (tmp6) {
            items1.push(fromServer);
          }
          const tmp2 = closure_1_5;
          tmp6 = fromServer.type === closure_1_5.APPLICATION && fromServer.status !== tmp12.ENDED;
        }
      }
    });
    const lastLazyPerkSync = subscriptions.lastLazyPerkSync;
  },
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: function handleSubscriptionUpdate(subscription) {
    subscription = subscription.subscription;
    if (subscription.user_id === store2.getId()) {
      const fromServer = SubscriptionRecord.createFromServer(subscription);
      let obj = {};
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
      if (subscription.user_id !== store2.getId()) {
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
      if (subscription.user_id !== store2.getId()) {
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
      HermesBuiltin.throwTypeError();
    } else {
      c15 = false;
      c14 = false;
    }
  },
  SET_PREMIUM_TYPE_OVERRIDE: function handlePremiumTypeOverride() {
    return true;
  },
  LOGOUT: reset
});
const result = require("set").fileFinishedImporting("stores/billing/SubscriptionStore.tsx");

export default subscriptionStore;
export const getSubscriptionOfType = function getSubscriptionOfType(arg0, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  if (arg0 === constants2.PREMIUM) {
    if (null === store.getPremiumTypeOverride()) {
      return null;
    }
  }
  const tmp3 = flag ? c7 : c6;
  if (null == tmp3) {
    return null;
  } else {
    for (const key10014 in tmp3) {
      let tmp5 = key10014;
      let tmp6 = tmp3[key10014];
      let tmp7 = store2;
      if (tmp6.userId !== store2.getId()) {
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