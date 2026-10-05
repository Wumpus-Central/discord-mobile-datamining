// === Module 4534: SubscriptionStore ===

// Module 4534 (SubscriptionStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import SubscriptionPlanRecord from "SubscriptionPlanRecord" /* 4529 */;
import SubscriptionRecord2 from "SubscriptionRecord" /* 4535 */;
import OverridePremiumTypeStore from "OverridePremiumTypeStore" /* 1378 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let set;

let closure_4;
let hasOwnProperty;
function reset() {
  closure_8 = null;
  items3 = null;
  let c10 = null;
  c11 = false;
  closure_12 = null;
  c13 = false;
  c14 = false;
  c16 = false;
  c17 = null;
}
const isNoneSubscription = SubscriptionPlanRecord.isNoneSubscription;
const SubscriptionRecord = SubscriptionRecord2.SubscriptionRecord;
({ SubscriptionStatusTypes: closure_4, SubscriptionTypes: hasOwnProperty } = Constants);
let obj2 = null;
let obj = null;
let closure_8 = null;
let items3 = null;
let c10 = null;
let c11 = false;
let closure_12 = null;
let c13 = false;
let c14 = false;
let c15 = null;
let c16 = false;
let c17 = null;
const Store = get_initializedDefault.Store;
class SubscriptionStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, OverridePremiumTypeStore);
  }
  hasFetchedSubscriptions() {
    return null != obj2;
  }
  hasFetchedMostRecentPremiumTypeSubscription() {
    return c11;
  }
  hasFetchedPreviousPremiumTypeSubscription() {
    return c13;
  }
  getPremiumSubscription(arg0) {
    let tmp4;
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    const PREMIUM = hasOwnProperty.PREMIUM;
    if (flag === undefined) {
      flag = true;
    }
    if (PREMIUM !== hasOwnProperty.PREMIUM) {
      const tmp5 = flag ? obj : obj2;
      tmp4 = null;
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
  }
  getPremiumTypeSubscription(arg0) {
    let tmp4;
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    const PREMIUM = hasOwnProperty.PREMIUM;
    if (flag === undefined) {
      flag = true;
    }
    if (PREMIUM !== hasOwnProperty.PREMIUM) {
      const tmp5 = flag ? obj : obj2;
      tmp4 = null;
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
  }
  getSubscriptions() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    return flag ? obj : obj2;
  }
  getSubscriptionById(subscription_id) {
    let tmp2;
    if (obj2 != null) {
      tmp2 = tmp[subscription_id];
    }
    return tmp2;
  }
  getActiveGuildSubscriptions() {
    return items3;
  }
  getActiveApplicationSubscriptions() {
    return c10;
  }
  getSubscriptionForPlanIds(items) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    set = new Set(items);
    const tmp2 = flag ? obj : obj2;
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
  }
  getMostRecentPremiumTypeSubscription() {
    return closure_8;
  }
  getPreviousPremiumTypeSubscription() {
    return closure_12;
  }
  getIsSubscriptionEligibleForReward() {
    return c15;
  }
  getIsFetchingSubscriptionRewardEligibility() {
    return c14;
  }
  getIsFetchingMostRecentSubscription() {
    return c16;
  }
  getLastLazyPerkSync() {
    return c17;
  }
  getPremiumGroupSubscription() {
    let tmp3;
    const PREMIUM = hasOwnProperty.PREMIUM;
    if (PREMIUM !== hasOwnProperty.PREMIUM) {
      tmp3 = null;
      if (null != obj) {
        tmp3 = null;
        const keys = Object.keys();
        if (keys !== undefined) {
          tmp3 = null;
          while (keys[tmp] !== undefined) {
            let tmp11 = obj[tmp8];
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
  }
}
const prototype = SubscriptionStore.prototype;
SubscriptionStore.displayName = "SubscriptionStore";
obj = {
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: function handleSubscriptionsFetch(subscriptions) {
    subscriptions = subscriptions.subscriptions;
    obj = {};
    obj2 = {};
    const items = [];
    const items1 = [];
    const lastLazyPerkSync = subscriptions.lastLazyPerkSync;
    const id = items1.getId();
    const item = subscriptions.forEach((user_id) => {
      if (user_id.user_id === constants) {
        const fromServer = SubscriptionRecord.createFromServer(user_id);
        obj[fromServer.id] = fromServer;
        if (fromServer.status !== constants.UNPAID) {
          obj2[fromServer.id] = fromServer;
          const tmp3 = fromServer.type === hasOwnProperty.GUILD && fromServer.status !== constants.ENDED;
          if (tmp3) {
            items.push(fromServer);
          }
          const tmp6 = fromServer.type === hasOwnProperty.APPLICATION && fromServer.status !== constants.ENDED;
          if (tmp6) {
            items1.push(fromServer);
          }
        }
      }
    });
  },
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: function handleSubscriptionUpdate(subscription) {
    const f88643 = (id) => id.id === fromServer.id;
    subscription = subscription.subscription;
    if (subscription.user_id === AuthenticationStore.getId()) {
      const fromServer = SubscriptionRecord.createFromServer(subscription);
      obj2 = {};
      const merged = Object.assign(obj2);
      obj2[fromServer.id] = fromServer;
      if (fromServer.status !== constants.UNPAID) {
        obj = {};
        const merged1 = Object.assign(obj);
        obj[fromServer.id] = fromServer;
      }
      const tmp7 = null != items3 && fromServer.type === hasOwnProperty.GUILD;
      if (tmp7) {
        let tmp15;
        const findIndexResult = items3.findIndex(f88643);
        if (-1 === findIndexResult) {
          const items = [fromServer];
          HermesBuiltin.arraySpread(items, items3, 1);
          tmp15 = items;
        } else {
          const items1 = [];
          HermesBuiltin.arraySpread(items1, items3, 0);
          if (fromServer.status !== constants.UNPAID) {
            if (fromServer.status !== constants.ENDED) {
              items1[findIndexResult] = fromServer;
              tmp15 = items1;
            }
          }
          items1.splice(findIndexResult, 1);
          tmp15 = items1;
        }
        items3 = tmp15;
      }
      const tmp20 = null != _null && fromServer.type === hasOwnProperty.APPLICATION;
      if (tmp20) {
        let tmp28;
        const findIndexResult1 = _null.findIndex(f88643);
        if (-1 === findIndexResult1) {
          const items2 = [fromServer];
          HermesBuiltin.arraySpread(items2, _null, 1);
          tmp28 = items2;
        } else {
          items3 = [];
          HermesBuiltin.arraySpread(items3, _null, 0);
          if (fromServer.status !== constants.UNPAID) {
            if (fromServer.status !== constants.ENDED) {
              items3[findIndexResult1] = fromServer;
              tmp28 = items3;
            }
          }
          items3.splice(findIndexResult1, 1);
          tmp28 = items3;
        }
        items3 = tmp28;
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
const result = size.fileFinishedImporting("stores/billing/SubscriptionStore.tsx");

export default subscriptionStore;
export const getSubscriptionOfType = function getSubscriptionOfType(arg0, fn) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  if (arg0 === hasOwnProperty.PREMIUM) {
    if (null === OverridePremiumTypeStore.getPremiumTypeOverride()) {
      return null;
    }
  }
  const tmp3 = flag ? obj : obj2;
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