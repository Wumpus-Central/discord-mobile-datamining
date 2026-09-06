// === Module 7450: UserOfferStore ===

// Module 7450 (UserOfferStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import PremiumUtils from "PremiumUtils" /* 4218 */;
import PremiumOfferReminderExperiment from "PremiumOfferReminderExperiment" /* 13297 */;
import DiscountRecord from "DiscountRecord" /* 7451 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7452 */;
import UserDiscountOfferRecord from "UserDiscountOfferRecord" /* 8063 */;
import UserTrialOfferRecord from "UserTrialOfferRecord" /* 7454 */;
import UserStore from "UserStore" /* 1371 */;
import EntitlementStore from "EntitlementStore" /* 7394 */;
import SubscriptionStore from "SubscriptionStore" /* 4224 */;

require = fn;
function emitChanges() {
  return true;
}
function rehydrateDiscountOffer(discount) {
  obj = UserDiscountOfferRecord;
  if (discount instanceof UserDiscountOfferRecord) {
    return discount;
  } else if ("discount_id" in discount) {
    let fromServer = obj.createFromServer(discount);
  } else {
    obj = {};
    const merged = Object.assign(discount);
    discount = discount.discount;
    if (null != discount) {
      if (!(discount instanceof DiscountRecord)) {
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
  const tmp = null != SubscriptionStore.getPremiumTypeSubscription();
  if (!tmp) {
    return tmp;
  } else {
    if (null != closure_19.userDiscountOffers[closure_1_11]) {
      let userDiscountOffers = {};
      userDiscountOffers[closure_1_11] = closure_19.userDiscountOffers[closure_1_11];
      closure_19.userDiscountOffers = userDiscountOffers;
      closure_19.userTrialOffers = {};
    } else if (null == closure_19.userDiscountOffers[closure_1_12]) {
      closure_19.userDiscountOffers = {};
    }
    userDiscountOffers = {};
    userDiscountOffers[closure_1_12] = closure_19.userDiscountOffers[closure_1_12];
    closure_19.userDiscountOffers = userDiscountOffers;
  }
}
function handlePaymentSourceChange() {
  const currentUser = UserStore.getCurrentUser();
}
function handleReferralTrialStoreUpdate() {
  return false;
}
const PremiumConstants = fn(1373);
({ ANNUAL_DISCOUNT_IDS: closure_9, DISCOUNT_OFFERS_REQUIRES_REMINDER_ROLLOUT: c10, PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID: closure_11, PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID: closure_12, SubscriptionPlanInfo: map1, SubscriptionTrials: closure_14, TRIAL_OFFERS_REQUIRES_REMINDER_ROLLOUT: closure_15 } = PremiumConstants);
const OfferTriggerTypes = fn(1085).OfferTriggerTypes;
let closure_17 = performance.now();
let obj = { userOffersLastFetchedAtDate: "r", userTrialOffers: {}, userDiscountOffers: {}, userDiscounts: "\u{1F9D1}\u{1F3FC}\u200D\u{1F9B1}", isFetching: true, lastFetchSuccessful: null, shouldTriggerOffer: 12.1, cooldownExpirationTimestamps: { [OfferTriggerTypes.CHANNEL_OPENED]: 0, [OfferTriggerTypes.JOIN_VOICE_CHANNEL]: 0, [OfferTriggerTypes.PREMIUM_UPSELL_VIEWED]: 0, [OfferTriggerTypes.USER_PROFILE_ACTION]: 0, [OfferTriggerTypes.VIDEO_STREAM_ENDED]: 0 } };
let closure_19 = obj;
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
    obj.userTrialOffers = Object.fromEntries(entries.map((item) => {
      [tmp, tmp2] = item;
      const items = [tmp, ];
      obj = UserTrialOfferRecord;
      if (tmp2 instanceof UserTrialOfferRecord) {
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
    obj.userDiscountOffers = Object.fromEntries(entries1.map((item) => {
      [tmp, tmp2] = item;
      const items = [tmp, rehydrateDiscountOffer(tmp2)];
      return items;
    }));
    let tmp = obj;
  } else {
    tmp = obj;
  }
  closure_19 = tmp;
  this.waitFor(EntitlementStore, ReferralTrialStore, SubscriptionStore, UserStore);
  let items = [UserStore];
  this.syncWith(items, emitChanges);
  const items1 = [SubscriptionStore];
  this.syncWith(items1, handleSubscriptionStoreUpdate);
  const items2 = [ReferralTrialStore];
  this.syncWith(items2, handleReferralTrialStoreUpdate);
};
prototype["getUserTrialOffer"] = function getUserTrialOffer(trialId) {
  if (null !== trialId) {
    return closure_19.userTrialOffers[trialId];
  }
};
prototype["getUserDiscountOffer"] = function getUserDiscountOffer(arg0) {
  if (null !== arg0) {
    return closure_19.userDiscountOffers[arg0];
  }
};
prototype["getAnyOfUserTrialOfferId"] = function getAnyOfUserTrialOfferId(arg0) {
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    if (null != closure_19.userTrialOffers[nextResult]) {
      iter.return();
      return nextResult;
    }
  }
  return null;
};
prototype["isFetchingOffer"] = function isFetchingOffer() {
  let flag = closure_19.isFetching;
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["hasFetchedOffer"] = function hasFetchedOffer() {
  return null != closure_19.userOffersLastFetchedAtDate;
};
prototype["shouldFetchReferralOffer"] = function shouldFetchReferralOffer(tmp9Result) {
  const userOffersLastFetchedAtDate = closure_19.userOffersLastFetchedAtDate;
  let flag = closure_19.isFetching;
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
  const hasItem = __initData.includes(trialId.trialId);
  let result = !hasItem;
  if (hasItem) {
    result = PremiumOfferReminderExperiment.isPremiumOfferReminderExperimentEnabled({ location: "user_offer_store" });
  }
  return result;
};
prototype["getAlmostExpiringTrialOffersForReminder"] = function getAlmostExpiringTrialOffersForReminder(items) {
  const self = this;
  dependencyMap = items;
  let values = Object.values(closure_14);
  _require = values.map((id) => id.id);
  const currentUser = UserStore.getCurrentUser();
  if (obj.isPremium(currentUser)) {
    if (!self.canFractionalPremiumUserUseOffer()) {
      items = [];
    }
    return items;
  }
  values = Object.values(closure_19.userTrialOffers);
  items = values.filter((trialId) => {
    let hasItem = closure_0.includes(trialId.trialId);
    if (hasItem) {
      hasItem = null != trialId.expiresAt;
    }
    if (hasItem) {
      hasItem = null != trialId.subscriptionTrial;
    }
    if (hasItem) {
      hasItem = items.includes(trialId.subscriptionTrial.skuId);
    }
    if (hasItem) {
      const expiresAt = trialId.expiresAt;
      const _Date = Date;
      const time = expiresAt.getTime();
      const timestamp = Date.now();
      hasItem = time < timestamp + PremiumUtils.getOfferNoticeThreshold(trialId);
    }
    if (hasItem) {
      hasItem = self.shouldShowTrialOfferReminder(trialId);
    }
    return hasItem;
  });
};
prototype["shouldShowDiscountOfferReminder"] = function shouldShowDiscountOfferReminder(discountId) {
  const hasItem = closure_1_10.includes(discountId.discountId);
  let result = !hasItem;
  if (hasItem) {
    result = PremiumOfferReminderExperiment.isPremiumOfferReminderExperimentEnabled({ location: "user_offer_store" });
  }
  return result;
};
prototype["getAlmostExpiringDiscountOffersForReminder"] = function getAlmostExpiringDiscountOffersForReminder(arg0) {
  const self = this;
  _require = arg0;
  const currentUser = UserStore.getCurrentUser();
  if (obj.isPremium(currentUser)) {
    if (!self.canFractionalPremiumUserUseOffer()) {
      let items = [];
    }
    return items;
  }
  const values = Object.values(closure_19.userDiscountOffers);
  items = values.filter((expiresAt) => {
    let someResult = null != expiresAt.expiresAt && null != expiresAt.discount;
    if (someResult) {
      const planIds = expiresAt.discount.planIds;
      someResult = planIds.some((item) => closure_1_0.includes(closure_2_13[item].skuId));
    }
    if (someResult) {
      expiresAt = expiresAt.expiresAt;
      const _Date = Date;
      const time = expiresAt.getTime();
      const timestamp = Date.now();
      someResult = time < timestamp + PremiumUtils.getOfferNoticeThreshold(expiresAt);
    }
    if (someResult) {
      someResult = self.shouldShowDiscountOfferReminder(expiresAt);
    }
    return someResult;
  });
};
prototype["getAcknowledgedOffers"] = function getAcknowledgedOffers(arg0) {
  closure_0 = arg0;
  const currentUser = UserStore.getCurrentUser();
  if (obj.isPremium(currentUser)) {
    const self = this;
    if (!this.canFractionalPremiumUserUseOffer()) {
      let items = [];
    }
    return items;
  }
  const values = Object.values(closure_19.userTrialOffers);
  items = values.filter((trialId) => {
    let hasItem = closure_0.includes(trialId.trialId);
    if (hasItem) {
      hasItem = null != trialId.expiresAt;
    }
    return hasItem;
  });
};
prototype["getUnacknowledgedDiscountOffers"] = function getUnacknowledgedDiscountOffers() {
  const currentUser = UserStore.getCurrentUser();
  if (obj.isPremium(currentUser)) {
    const self = this;
    if (!this.canFractionalPremiumUserUseOffer()) {
      let items = [];
    }
    return items;
  }
  let userDiscountOffers = closure_19.userDiscountOffers;
  if (userDiscountOffers == null) {
    userDiscountOffers = {};
  }
  const values = Object.values(userDiscountOffers);
  items = values.filter((hasAcknowledged) => {
    const hasAcknowledgedResult = hasAcknowledged.hasAcknowledged();
    let tmp2 = !hasAcknowledgedResult;
    if (!hasAcknowledgedResult) {
      tmp2 = !closure_1_9.includes(hasAcknowledged.discountId);
    }
    return tmp2;
  });
};
prototype["getUnacknowledgedOffers"] = function getUnacknowledgedOffers(arg0) {
  closure_0 = arg0;
  const currentUser = UserStore.getCurrentUser();
  if (obj.isPremium(currentUser)) {
    const self = this;
    if (!this.canFractionalPremiumUserUseOffer()) {
      let items = [];
    }
    return items;
  }
  const values = Object.values(closure_19.userTrialOffers);
  items = values.filter((trialId) => {
    let hasItem = closure_0.includes(trialId.trialId);
    if (hasItem) {
      hasItem = null == trialId.expiresAt;
    }
    return hasItem;
  });
};
prototype["hasAnyUnexpiredOffer"] = function hasAnyUnexpiredOffer() {
  const values = Object.values(closure_19.userTrialOffers);
  return values.some((hasExpired) => !hasExpired.hasExpired);
};
prototype["hasAnyUnexpiredDiscountOffer"] = function hasAnyUnexpiredDiscountOffer() {
  const values = Object.values(closure_19.userDiscountOffers);
  return values.some((hasExpired) => !hasExpired.hasExpired());
};
prototype["canFractionalPremiumUserUseOffer"] = function canFractionalPremiumUserUseOffer() {
  let result = EntitlementStore.isFractionalPremiumActive({ excludeReverseTrial: true });
  if (result) {
    result = null == SubscriptionStore.getPremiumTypeSubscription();
  }
  return result;
};
prototype["getReferrer"] = function getReferrer(arg0) {
  let tmp = null;
  if (null != arg0) {
    let referrer;
    if (closure_19.userTrialOffers[arg0] != null) {
      referrer = tmp3.referrer;
    }
    tmp = referrer;
  }
  return tmp;
};
prototype["getState"] = function getState() {
  return closure_19;
};
prototype["forceReset"] = function forceReset() {
  closure_19.userTrialOffers = {};
  closure_19.userDiscountOffers = {};
  closure_19.userOffersLastFetchedAtDate = undefined;
  closure_19.isFetching = false;
  closure_19.shouldTriggerOffer = false;
  closure_19.cooldownExpirationTimestamps = { [closure_1_16.CHANNEL_OPENED]: 0, [closure_1_16.JOIN_VOICE_CHANNEL]: 0, [closure_1_16.PREMIUM_UPSELL_VIEWED]: 0, [closure_1_16.USER_PROFILE_ACTION]: 0, [closure_1_16.VIDEO_STREAM_ENDED]: 0 };
};
prototype["lastFetchSuccessful"] = function lastFetchSuccessful() {
  return closure_19.lastFetchSuccessful;
};
prototype["canTriggerUserOffer"] = function canTriggerUserOffer(triggerType) {
  return false;
};
prototype["getUptimeForTrigger"] = function getUptimeForTrigger() {
  return Math.floor((performance.now() - closure_17) / 1000);
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
      obj.userDiscountOffers = Object.fromEntries(entries.map((item) => {
        [tmp, tmp2] = item;
        const items = [tmp, rehydrateDiscountOffer(tmp2)];
        return items;
      }));
      return obj;
    }
  },
  (shouldTriggerOffer) => {
    if (null != shouldTriggerOffer) {
      shouldTriggerOffer = undefined;
      if (shouldTriggerOffer != null) {
        shouldTriggerOffer = shouldTriggerOffer.shouldTriggerOffer;
      }
      if (null != shouldTriggerOffer) {
        let prop;
        if (shouldTriggerOffer != null) {
          prop = shouldTriggerOffer.cooldownExpirationTimestamps;
        }
      }
      let cooldownExpirationTimestamps = {};
      const merged = Object.assign(shouldTriggerOffer);
      cooldownExpirationTimestamps.shouldTriggerOffer = false;
      cooldownExpirationTimestamps = {};
      cooldownExpirationTimestamps[OfferTriggerTypes.CHANNEL_OPENED] = 0;
      cooldownExpirationTimestamps[OfferTriggerTypes.JOIN_VOICE_CHANNEL] = 0;
      cooldownExpirationTimestamps[OfferTriggerTypes.PREMIUM_UPSELL_VIEWED] = 0;
      cooldownExpirationTimestamps[OfferTriggerTypes.USER_PROFILE_ACTION] = 0;
      cooldownExpirationTimestamps[OfferTriggerTypes.VIDEO_STREAM_ENDED] = 0;
      cooldownExpirationTimestamps.cooldownExpirationTimestamps = cooldownExpirationTimestamps;
      return cooldownExpirationTimestamps;
    }
  }
];
UserOfferStore.migrations = items;
obj = {
  BILLING_USER_OFFER_FETCH_START: function handleUserOfferFetchStart() {
    closure_19.isFetching = true;
  },
  BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function handleUserTrialOfferAcknowledgedSuccess(userTrialOffer) {
    userTrialOffer = userTrialOffer.userTrialOffer;
    if (null != userTrialOffer) {
      closure_19.userTrialOffers[userTrialOffer.trialId] = userTrialOffer;
    } else {
      closure_19.userTrialOffers = {};
    }
    closure_19.userOffersLastFetchedAtDate = Date.now();
  },
  BILLING_USER_OFFER_FETCH_SUCCESS: function handleUserOfferFetchSuccess(arg0) {
    ({ userTrialOffer, userDiscountOffer, shouldTriggerOffer } = arg0);
    if (tmp) {
      closure_19.userTrialOffers = {};
      closure_19.userDiscountOffers = {};
      closure_19.userOffersLastFetchedAtDate = undefined;
      closure_19.isFetching = false;
      if (!shouldTriggerOffer) {
        closure_19.shouldTriggerOffer = false;
        const cooldownExpirationTimestamps = {};
        cooldownExpirationTimestamps[OfferTriggerTypes.CHANNEL_OPENED] = 0;
        cooldownExpirationTimestamps[OfferTriggerTypes.JOIN_VOICE_CHANNEL] = 0;
        cooldownExpirationTimestamps[OfferTriggerTypes.PREMIUM_UPSELL_VIEWED] = 0;
        cooldownExpirationTimestamps[OfferTriggerTypes.USER_PROFILE_ACTION] = 0;
        cooldownExpirationTimestamps[OfferTriggerTypes.VIDEO_STREAM_ENDED] = 0;
        closure_19.cooldownExpirationTimestamps = cooldownExpirationTimestamps;
      }
    }
    if (null != userTrialOffer) {
      closure_19.userTrialOffers[userTrialOffer.trialId] = userTrialOffer;
      closure_19.userDiscountOffers = {};
    } else if (null != userDiscountOffer) {
      closure_19.userDiscountOffers[userDiscountOffer.discountId] = userDiscountOffer;
      closure_19.userTrialOffers = {};
    }
    closure_19.userOffersLastFetchedAtDate = Date.now();
    closure_19.isFetching = false;
    closure_19.lastFetchSuccessful = true;
    if (shouldTriggerOffer == null) {
      shouldTriggerOffer = false;
    }
    closure_19.shouldTriggerOffer = shouldTriggerOffer;
    tmp = null == userTrialOffer && null == userDiscountOffer;
  },
  BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function handleUserOfferAcknowledgedSuccess(arg0) {
    ({ userTrialOffer, userDiscount, userDiscountOffer } = arg0);
    if (null != userTrialOffer) {
      closure_19.userTrialOffers[userTrialOffer.trialId] = userTrialOffer;
    } else {
      closure_19.userTrialOffers = {};
    }
    if (null != userDiscount) {
      closure_19.userDiscountOffers[userDiscount.discountId] = userDiscount;
    } else if (null != userDiscountOffer) {
      closure_19.userDiscountOffers[userDiscountOffer.discountId] = userDiscountOffer;
    } else {
      closure_19.userDiscountOffers = {};
    }
    closure_19.userOffersLastFetchedAtDate = Date.now();
  },
  BILLING_USER_OFFER_FETCH_FAIL: function handleUserOfferFetchFail() {
    closure_19.userTrialOffers = {};
    closure_19.userDiscountOffers = {};
    closure_19.userOffersLastFetchedAtDate = undefined;
    closure_19.isFetching = false;
    closure_19.shouldTriggerOffer = false;
    closure_19.cooldownExpirationTimestamps = { [closure_1_16.CHANNEL_OPENED]: 0, [closure_1_16.JOIN_VOICE_CHANNEL]: 0, [closure_1_16.PREMIUM_UPSELL_VIEWED]: 0, [closure_1_16.USER_PROFILE_ACTION]: 0, [closure_1_16.VIDEO_STREAM_ENDED]: 0 };
    closure_19.userOffersLastFetchedAtDate = Date.now();
    closure_19.isFetching = false;
    closure_19.lastFetchSuccessful = false;
  },
  BILLING_USER_OFFER_REDEEMED: function handleUserOfferRedeemed(offerId) {
    offerId = offerId.offerId;
    const keys = Object.keys(closure_19.userDiscountOffers);
    if (null != keys.find((item) => closure_19.userDiscountOffers[item].id === offerId)) {
      const userDiscountOffers = closure_19.userDiscountOffers;
      delete tmp3[tmp4];
    }
    const keys1 = Object.keys(closure_19.userTrialOffers);
    if (null != keys1.find((item) => closure_19.userTrialOffers[item].id === offerId)) {
      const userTrialOffers = closure_19.userTrialOffers;
      delete tmp[tmp2];
    }
    return true;
  },
  BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: handlePaymentSourceChange,
  BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: handlePaymentSourceChange,
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: handlePaymentSourceChange,
  BILLING_USER_OFFER_TRIGGER_ATTEMPT: function handleUserOfferTriggerAttempt(triggerType) {
    const result = 3600 * (1 + Math.random());
    closure_19.cooldownExpirationTimestamps[triggerType.triggerType] = Date.now() + 1000 * result;
  },
  BILLING_USER_OFFER_TRIGGER_SUCCESS: function handleUserOfferTriggerSuccess(arg0) {
    ({ retryAfter, userTrialOffer, userDiscountOffer } = arg0);
    ({ triggerType, triggerSuccess } = arg0);
    if (retryAfter === undefined) {
      retryAfter = null;
    }
    if (null == retryAfter) {
      const _Math = Math;
      retryAfter = 3600 * (1 + Math.random());
    }
    closure_19.cooldownExpirationTimestamps[triggerType] = Date.now() + 1000 * retryAfter;
    if (null != userTrialOffer) {
      closure_19.userTrialOffers[userTrialOffer.trialId] = userTrialOffer;
      closure_19.userDiscountOffers = {};
      closure_19.shouldTriggerOffer = false;
    } else if (null != userDiscountOffer) {
      closure_19.userDiscountOffers[userDiscountOffer.discountId] = userDiscountOffer;
      closure_19.userTrialOffers = {};
      closure_19.shouldTriggerOffer = false;
    } else if (true === triggerSuccess) {
      closure_19.shouldTriggerOffer = false;
    }
    closure_19.userOffersLastFetchedAtDate = Date.now();
    closure_19.isFetching = false;
    closure_19.lastFetchSuccessful = true;
  },
  LOGOUT: function handleLogout() {
    closure_19.userTrialOffers = {};
    closure_19.userDiscountOffers = {};
    closure_19.userOffersLastFetchedAtDate = undefined;
    closure_19.isFetching = false;
    closure_19.shouldTriggerOffer = false;
    closure_19.cooldownExpirationTimestamps = { [closure_1_16.CHANNEL_OPENED]: 0, [closure_1_16.JOIN_VOICE_CHANNEL]: 0, [closure_1_16.PREMIUM_UPSELL_VIEWED]: 0, [closure_1_16.USER_PROFILE_ACTION]: 0, [closure_1_16.VIDEO_STREAM_ENDED]: 0 };
  }
};
const userOfferStore = new UserOfferStore(DispatcherDefault, obj);
const size = fn(2);
let result = size.fileFinishedImporting("stores/billing/UserOfferStore.tsx");

export default userOfferStore;