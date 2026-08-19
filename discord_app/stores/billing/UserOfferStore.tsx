// === Module 7421: emitChanges ===

// Module 7421 (emitChanges)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import getPremiumPlanItem from "getPremiumPlanItem" /* 4039 */;
import apexExperiment from "apexExperiment" /* 7611 */;
import createFromServer from "createFromServer" /* 7422 */;
import emitChanges from "emitChanges" /* 7423 */;
import createFromServer2 from "createFromServer" /* 7610 */;
import createFromServer3 from "createFromServer" /* 7425 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import addEntitlement from "addEntitlement" /* 5357 */;
import reset from "reset" /* 4045 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;

require = fn;
function emitChanges() {
  return true;
}
function rehydrateDiscountOffer(discount) {
  obj = closure_4;
  if (discount instanceof closure_4) {
    return discount;
  } else if ("discount_id" in discount) {
    let fromServer = obj.createFromServer(discount);
  } else {
    obj = {};
    const merged = Object.assign(discount);
    discount = discount.discount;
    if (null != discount) {
      if (!(discount instanceof closure_2)) {
        tmp6 = new tmp6(discount);
      }
      obj.discount = tmp6;
      let date = null;
      if (null != discount.appliedAt) {
        const _Date = Date;
        date = new Date(discount.appliedAt);
      }
      obj.appliedAt = date;
      let date1 = null;
      if (null != discount.deletedAt) {
        const _Date2 = Date;
        date1 = new Date(discount.deletedAt);
      }
      obj.deletedAt = date1;
      let date2 = null;
      if (null != discount.expiresAt) {
        const _Date3 = Date;
        date2 = new Date(discount.expiresAt);
      }
      obj.expiresAt = date2;
      fromServer = new obj(obj);
    }
    if (discount == null) {
      discount = null;
    }
    tmp6 = discount;
  }
}
function handleSubscriptionStoreUpdate() {
  const tmp = null != store.getPremiumTypeSubscription();
  if (!tmp) {
    return tmp;
  } else {
    if (null != obj.userDiscountOffers[closure_11]) {
      obj = {};
      obj[closure_11] = obj.userDiscountOffers[closure_11];
      obj.userDiscountOffers = obj;
      obj.userTrialOffers = {};
    } else if (null == obj.userDiscountOffers[closure_12]) {
      obj.userDiscountOffers = {};
    }
    obj = {};
    obj[closure_12] = obj.userDiscountOffers[closure_12];
    obj.userDiscountOffers = obj;
  }
}
function handlePaymentSourceChange() {
  const currentUser = authStore.getCurrentUser();
}
function handleReferralTrialStoreUpdate() {
  return false;
}
({ ANNUAL_DISCOUNT_IDS: c9, DISCOUNT_OFFERS_REQUIRES_REMINDER_ROLLOUT: c10, PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID: unpackModuleId, PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID: closure_12, SubscriptionPlanInfo: map1, SubscriptionTrials: closure_14, TRIAL_OFFERS_REQUIRES_REMINDER_ROLLOUT: closure_15 } = GuildFeatures);
let obj = { userOffersLastFetchedAtDate: "r", userTrialOffers: "PX_16", userDiscountOffers: "TRANSPARENT", userDiscounts: 0, isFetching: "19.2.3", lastFetchSuccessful: "react-native-renderer" };
obj[1] = {};
obj[2] = {};
const PersistedStore = initializeDefault.PersistedStore;
class UserOfferStore extends PersistedStore {
}
const prototype = UserOfferStore.prototype;
prototype["initialize"] = function initialize(userTrialOffers) {
  if (null != userTrialOffers) {
    obj = {};
    let merged = Object.assign(userTrialOffers);
    userTrialOffers = userTrialOffers.userTrialOffers;
    if (userTrialOffers == null) {
      userTrialOffers = {};
    }
    const entries = Object.entries(userTrialOffers);
    obj.userTrialOffers = Object.fromEntries(entries.map((item, index) => {
      [tmp, tmp2] = item;
      const items = [tmp, ];
      obj = closure_5;
      if (tmp2 instanceof closure_5) {
        items[1] = tmp2;
        return items;
      } else if ("trial_id" in tmp2) {
        let fromServer = obj.createFromServer(tmp2);
      } else {
        obj = {};
        const merged = Object.assign(tmp2);
        let date = null;
        if (null != tmp2.expiresAt) {
          const _Date = Date;
          date = new Date(tmp2.expiresAt);
        }
        obj.expiresAt = date;
        let date1 = null;
        if (null != tmp2.redeemedAt) {
          const _Date2 = Date;
          date1 = new Date(tmp2.redeemedAt);
        }
        obj.redeemedAt = date1;
        fromServer = new obj(obj);
      }
    }));
    let userDiscountOffers = userTrialOffers.userDiscountOffers;
    if (userDiscountOffers == null) {
      userDiscountOffers = {};
    }
    const entries1 = Object.entries(userDiscountOffers);
    obj.userDiscountOffers = Object.fromEntries(entries1.map((item, index) => {
      [tmp, tmp2] = item;
      const items = [tmp, callback(tmp2)];
      return items;
    }));
    let tmp = obj;
  } else {
    tmp = obj;
  }
  closure_17 = tmp;
  this.waitFor(closure_7, closure_3, closure_8, closure_6);
  let items = [closure_6];
  this.syncWith(items, emitChanges);
  const items1 = [closure_8];
  this.syncWith(items1, handleSubscriptionStoreUpdate);
  const items2 = [closure_3];
  this.syncWith(items2, handleReferralTrialStoreUpdate);
};
prototype["getUserTrialOffer"] = function getUserTrialOffer(closure_9) {
  if (null !== closure_9) {
    return obj.userTrialOffers[closure_9];
  }
};
prototype["getUserDiscountOffer"] = function getUserDiscountOffer(closure_0) {
  if (null !== closure_0) {
    return obj.userDiscountOffers[closure_0];
  }
};
prototype["getAnyOfUserTrialOfferId"] = function getAnyOfUserTrialOfferId(arg0) {
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    if (null != obj.userTrialOffers[nextResult]) {
      iter.return();
      return nextResult;
    }
  }
  return null;
};
prototype["isFetchingOffer"] = function isFetchingOffer() {
  let flag = obj.isFetching;
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["hasFetchedOffer"] = function hasFetchedOffer() {
  return null != obj.userOffersLastFetchedAtDate;
};
prototype["shouldFetchReferralOffer"] = function shouldFetchReferralOffer(tmp9Result) {
  const userOffersLastFetchedAtDate = obj.userOffersLastFetchedAtDate;
  let flag = obj.isFetching;
  if (flag == null) {
    flag = false;
  }
  if (null == userOffersLastFetchedAtDate) {
    return !flag;
  } else {
    const _Date = Date;
    let tmp2 = Date.now() - 600000 > userOffersLastFetchedAtDate;
    let tmp3 = !flag;
    if (!flag) {
      if (!tmp2) {
        let num2 = tmp9Result;
        if (tmp9Result == null) {
          num2 = 0;
        }
        tmp2 = num2 > userOffersLastFetchedAtDate;
      }
      tmp3 = tmp2;
    }
    return tmp3;
  }
};
prototype["shouldShowTrialOfferReminder"] = function shouldShowTrialOfferReminder(trialId) {
  const hasItem = closure_15.includes(trialId.trialId);
  let result = !hasItem;
  if (hasItem) {
    result = apexExperiment.isPremiumOfferReminderExperimentEnabled({ location: "user_offer_store" });
  }
  return result;
};
prototype["getAlmostExpiringTrialOffersForReminder"] = function getAlmostExpiringTrialOffersForReminder(items) {
  const self = this;
  dependencyMap = items;
  let values = Object.values(closure_14);
  const _require = values.map((item, index) => item.id);
  const currentUser = authStore.getCurrentUser();
  obj = _require(4039);
  if (obj.isPremium(currentUser)) {
    if (!self.canFractionalPremiumUserUseOffer()) {
      items = [];
    }
    return items;
  }
  values = Object.values(obj.userTrialOffers);
  items = values.filter((item, index) => {
    let hasItem = lib.includes(item.trialId);
    if (hasItem) {
      hasItem = null != item.expiresAt;
    }
    if (hasItem) {
      hasItem = null != item.subscriptionTrial;
    }
    if (hasItem) {
      hasItem = items.includes(item.subscriptionTrial.skuId);
    }
    if (hasItem) {
      const expiresAt = item.expiresAt;
      const _Date = Date;
      const time = expiresAt.getTime();
      const timestamp = Date.now();
      hasItem = time < timestamp + lib(items[10]).getOfferNoticeThreshold(item);
      obj = lib(items[10]);
    }
    if (hasItem) {
      hasItem = self.shouldShowTrialOfferReminder(item);
    }
    return hasItem;
  });
};
prototype["shouldShowDiscountOfferReminder"] = function shouldShowDiscountOfferReminder(discountId) {
  const hasItem = closure_10.includes(discountId.discountId);
  let result = !hasItem;
  if (hasItem) {
    result = apexExperiment.isPremiumOfferReminderExperimentEnabled({ location: "user_offer_store" });
  }
  return result;
};
prototype["getAlmostExpiringDiscountOffersForReminder"] = function getAlmostExpiringDiscountOffersForReminder(arg0) {
  const self = this;
  const _require = arg0;
  const currentUser = authStore.getCurrentUser();
  obj = _require(self[10]);
  if (obj.isPremium(currentUser)) {
    if (!self.canFractionalPremiumUserUseOffer()) {
      let items = [];
    }
    return items;
  }
  const values = Object.values(obj.userDiscountOffers);
  items = values.filter((item, index) => {
    let someResult = null != item.expiresAt && null != item.discount;
    if (someResult) {
      const planIds = item.discount.planIds;
      someResult = planIds.some((item, index) => closure_0.includes(closure_1_13[item].skuId));
    }
    if (someResult) {
      const expiresAt = item.expiresAt;
      const _Date = Date;
      const time = expiresAt.getTime();
      const timestamp = Date.now();
      someResult = time < timestamp + callback(self[10]).getOfferNoticeThreshold(item);
      obj = callback(self[10]);
    }
    if (someResult) {
      someResult = self.shouldShowDiscountOfferReminder(item);
    }
    return someResult;
  });
};
prototype["getAcknowledgedOffers"] = function getAcknowledgedOffers(arg0) {
  const _require = arg0;
  const currentUser = authStore.getCurrentUser();
  obj = _require(4039);
  if (obj.isPremium(currentUser)) {
    const self = this;
    if (!this.canFractionalPremiumUserUseOffer()) {
      let items = [];
    }
    return items;
  }
  const values = Object.values(obj.userTrialOffers);
  items = values.filter((item, index) => {
    let hasItem = closure_0.includes(item.trialId);
    if (hasItem) {
      hasItem = null != item.expiresAt;
    }
    return hasItem;
  });
};
prototype["getUnacknowledgedDiscountOffers"] = function getUnacknowledgedDiscountOffers() {
  const currentUser = authStore.getCurrentUser();
  obj = getPremiumPlanItem;
  if (obj.isPremium(currentUser)) {
    const self = this;
    if (!this.canFractionalPremiumUserUseOffer()) {
      let items = [];
    }
    return items;
  }
  let userDiscountOffers = obj.userDiscountOffers;
  if (userDiscountOffers == null) {
    userDiscountOffers = {};
  }
  const values = Object.values(userDiscountOffers);
  items = values.filter((item, index) => {
    const hasAcknowledgedResult = item.hasAcknowledged();
    let tmp2 = !hasAcknowledgedResult;
    if (!hasAcknowledgedResult) {
      tmp2 = !closure_9.includes(item.discountId);
    }
    return tmp2;
  });
};
prototype["getUnacknowledgedOffers"] = function getUnacknowledgedOffers(arg0) {
  const _require = arg0;
  const currentUser = authStore.getCurrentUser();
  obj = _require(4039);
  if (obj.isPremium(currentUser)) {
    const self = this;
    if (!this.canFractionalPremiumUserUseOffer()) {
      let items = [];
    }
    return items;
  }
  const values = Object.values(obj.userTrialOffers);
  items = values.filter((item, index) => {
    let hasItem = closure_0.includes(item.trialId);
    if (hasItem) {
      hasItem = null == item.expiresAt;
    }
    return hasItem;
  });
};
prototype["hasAnyUnexpiredOffer"] = function hasAnyUnexpiredOffer() {
  const values = Object.values(obj.userTrialOffers);
  return values.some((item, index) => !item.hasExpired());
};
prototype["hasAnyUnexpiredDiscountOffer"] = function hasAnyUnexpiredDiscountOffer() {
  const values = Object.values(obj.userDiscountOffers);
  return values.some((item, index) => !item.hasExpired());
};
prototype["canFractionalPremiumUserUseOffer"] = function canFractionalPremiumUserUseOffer() {
  let result = fractionalPremiumActive.isFractionalPremiumActive({ excludeReverseTrial: true });
  if (result) {
    result = null == store.getPremiumTypeSubscription();
  }
  return result;
};
prototype["getReferrer"] = function getReferrer(arg0) {
  let tmp = null;
  if (null != arg0) {
    let referrer;
    if (obj.userTrialOffers[arg0] != null) {
      referrer = tmp3.referrer;
    }
    tmp = referrer;
  }
  return tmp;
};
prototype["getState"] = function getState() {
  return obj;
};
prototype["forceReset"] = function forceReset() {
  obj.userTrialOffers = {};
  obj.userDiscountOffers = {};
  obj.userOffersLastFetchedAtDate = undefined;
  obj.isFetching = false;
};
prototype["lastFetchSuccessful"] = function lastFetchSuccessful() {
  return obj.lastFetchSuccessful;
};
UserOfferStore.displayName = "UserOfferStore";
UserOfferStore.persistKey = "UserOfferStore";
let items = [
  (userDiscounts) => {
    userDiscounts = undefined;
    if (userDiscounts != null) {
      userDiscounts = userDiscounts.userDiscounts;
    }
    if (null != userDiscounts) {
      obj = {};
      const merged = Object.assign(userDiscounts);
      obj.userDiscountOffers = userDiscounts;
      return obj;
    }
  },
  (arg0) => {
    if (null != arg0) {
      const _Object = Object;
      if (Object.hasOwn(arg0, "userAnnualOfferLastFetchedAtDate")) {
        delete tmp[tmp2];
      }
      return arg0;
    }
  },
  (isFetching) => {
    if (null != isFetching) {
      isFetching = undefined;
      if (isFetching != null) {
        isFetching = isFetching.isFetching;
      }
      let tmp2 = isFetching;
      if (null == isFetching) {
        obj = {};
        const merged = Object.assign(isFetching);
        obj.isFetching = false;
        tmp2 = obj;
      }
      return tmp2;
    }
  },
  (userDiscountOffers) => {
    userDiscountOffers = undefined;
    if (userDiscountOffers != null) {
      userDiscountOffers = userDiscountOffers.userDiscountOffers;
    }
    if (null != userDiscountOffers) {
      obj = {};
      const merged = Object.assign(userDiscountOffers);
      const _Object = Object;
      const _Object2 = Object;
      const entries = Object.entries(userDiscountOffers.userDiscountOffers);
      obj.userDiscountOffers = Object.fromEntries(entries.map((item, index) => {
        [tmp, tmp2] = item;
        const items = [tmp, callback(tmp2)];
        return items;
      }));
      return obj;
    }
  }
];
UserOfferStore.migrations = items;
obj = {
  BILLING_USER_OFFER_FETCH_START: function handleUserOfferFetchStart() {
    obj.isFetching = true;
  },
  BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function handleUserTrialOfferAcknowledgedSuccess(userTrialOffer) {
    userTrialOffer = userTrialOffer.userTrialOffer;
    if (null != userTrialOffer) {
      obj.userTrialOffers[userTrialOffer.trialId] = userTrialOffer;
    } else {
      obj.userTrialOffers = {};
    }
    obj.userOffersLastFetchedAtDate = Date.now();
  },
  BILLING_USER_OFFER_FETCH_SUCCESS: function handleUserOfferFetchSuccess(arg0) {
    ({ userTrialOffer, userDiscountOffer } = arg0);
    if (tmp) {
      obj.userTrialOffers = {};
      obj.userDiscountOffers = {};
      obj.userOffersLastFetchedAtDate = undefined;
      obj.isFetching = false;
    }
    if (null != userTrialOffer) {
      obj.userTrialOffers[userTrialOffer.trialId] = userTrialOffer;
      obj.userDiscountOffers = {};
    } else if (null != userDiscountOffer) {
      obj.userDiscountOffers[userDiscountOffer.discountId] = userDiscountOffer;
      obj.userTrialOffers = {};
    }
    obj.userOffersLastFetchedAtDate = Date.now();
    obj.isFetching = false;
    obj.lastFetchSuccessful = true;
    tmp = null == userTrialOffer && null == userDiscountOffer;
  },
  BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function handleUserOfferAcknowledgedSuccess(arg0) {
    ({ userTrialOffer, userDiscount, userDiscountOffer } = arg0);
    if (null != userTrialOffer) {
      obj.userTrialOffers[userTrialOffer.trialId] = userTrialOffer;
    } else {
      obj.userTrialOffers = {};
    }
    if (null != userDiscount) {
      obj.userDiscountOffers[userDiscount.discountId] = userDiscount;
    } else if (null != userDiscountOffer) {
      obj.userDiscountOffers[userDiscountOffer.discountId] = userDiscountOffer;
    } else {
      obj.userDiscountOffers = {};
    }
    obj.userOffersLastFetchedAtDate = Date.now();
  },
  BILLING_USER_OFFER_FETCH_FAIL: function handleUserOfferFetchFail() {
    obj.userTrialOffers = {};
    obj.userDiscountOffers = {};
    obj.userOffersLastFetchedAtDate = undefined;
    obj.isFetching = false;
    obj.userOffersLastFetchedAtDate = Date.now();
    obj.isFetching = false;
    obj.lastFetchSuccessful = false;
  },
  BILLING_USER_OFFER_REDEEMED: function handleUserOfferRedeemed(offerId) {
    offerId = offerId.offerId;
    const keys = Object.keys(obj.userDiscountOffers);
    if (null != keys.find((item, index) => obj.userDiscountOffers[item].id === offerId)) {
      const userDiscountOffers = obj.userDiscountOffers;
      delete tmp3[tmp4];
    }
    const keys1 = Object.keys(obj.userTrialOffers);
    if (null != keys1.find((item, index) => obj.userTrialOffers[item].id === offerId)) {
      const userTrialOffers = obj.userTrialOffers;
      delete tmp[tmp2];
    }
    return true;
  },
  BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: handlePaymentSourceChange,
  BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: handlePaymentSourceChange,
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: handlePaymentSourceChange,
  LOGOUT: function handleReset() {
    obj.userTrialOffers = {};
    obj.userDiscountOffers = {};
    obj.userOffersLastFetchedAtDate = undefined;
    obj.isFetching = false;
  }
};
const userOfferStore = new UserOfferStore(dispatcherDefault, obj);
let result = require("obj132").fileFinishedImporting("stores/billing/UserOfferStore.tsx");

export default userOfferStore;