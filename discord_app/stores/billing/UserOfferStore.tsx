// discord_app/stores/billing/UserOfferStore.tsx
import emitChanges from "emitChanges";
import createFromServer from "createFromServer";
import mergeGuildAvatar from "mergeGuildAvatar";
import addEntitlement from "addEntitlement";
import reset from "reset";
import GuildFeatures from "GuildFeatures";
import { PersistedStore } from "initialize";
import { apexExperiment } from "../../modules/premium/experiments/PremiumOfferReminderExperiment.tsx";
import { getPremiumPlanItem } from "../../utils/PremiumUtils.tsx";

let c10;
let c9;
let closure_12;
let error;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function emitChanges() {
  return true;
}
function handleSubscriptionStoreUpdate() {
  const tmp = null != store.getPremiumTypeSubscription();
  if (!tmp) {
    return tmp;
  } else {
    if (null != obj.userDiscountOffers[closure_9]) {
      obj = {};
      obj[tmp3] = obj.userDiscountOffers[tmp3];
      obj.userDiscountOffers = obj;
      obj.userTrialOffers = {};
    } else if (null == obj.userDiscountOffers[closure_10]) {
      obj.userDiscountOffers = {};
    }
    obj = {};
    obj[tmp5] = obj.userDiscountOffers[tmp5];
    obj.userDiscountOffers = obj;
  }
}
function handlePaymentSourceChange() {
  const currentUser = authStore.getCurrentUser();
}
function handleReferralTrialStoreUpdate() {
  return false;
}
({ ANNUAL_DISCOUNT_IDS: error, DISCOUNT_OFFERS_REQUIRES_REMINDER_ROLLOUT: metroImportAll, PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID: c9, PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID: c10, SubscriptionPlanInfo: unpackModuleId, SubscriptionTrials: closure_12, TRIAL_OFFERS_REQUIRES_REMINDER_ROLLOUT: map1 } = GuildFeatures);
let obj = { userOffersLastFetchedAtDate: "r", userTrialOffers: "PX_16", userDiscountOffers: "TRANSPARENT", userDiscounts: 0, isFetching: "19.2.3", lastFetchSuccessful: "react-native-renderer" };
obj[1] = {};
obj[2] = {};
class UserOfferStore extends PersistedStore {
}
const prototype = UserOfferStore.prototype;
prototype["initialize"] = function initialize(userDiscountOffers) {
  if (null != userDiscountOffers) {
    let obj = {};
    let merged = Object.assign(userDiscountOffers);
    userDiscountOffers = userDiscountOffers.userDiscountOffers;
    if (userDiscountOffers == null) {
      userDiscountOffers = {};
    }
    const entries = Object.entries(userDiscountOffers);
    obj.userDiscountOffers = Object.fromEntries(entries.map((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      const items = [tmp, ];
      let obj = createFromServer;
      if (tmp2 instanceof createFromServer) {
        items[1] = tmp2;
        return items;
      } else if ("discount_id" in tmp2) {
        let fromServer = obj.createFromServer(tmp2);
      } else {
        obj = {};
        const merged = Object.assign(tmp2);
        let date = null;
        if (null != tmp2.appliedAt) {
          const _Date = Date;
          date = new Date(tmp2.appliedAt);
        }
        obj.appliedAt = date;
        let date1 = null;
        if (null != tmp2.deletedAt) {
          const _Date2 = Date;
          date1 = new Date(tmp2.deletedAt);
        }
        obj.deletedAt = date1;
        let date2 = null;
        if (null != tmp2.expiresAt) {
          const _Date3 = Date;
          date2 = new Date(tmp2.expiresAt);
        }
        obj.expiresAt = date2;
        fromServer = new obj(obj);
      }
    }));
    let tmp = obj;
  } else {
    tmp = obj;
  }
  obj = tmp;
  this.waitFor(addEntitlement, emitChanges, reset, mergeGuildAvatar);
  let items = [mergeGuildAvatar];
  this.syncWith(items, emitChanges);
  const items1 = [reset];
  this.syncWith(items1, handleSubscriptionStoreUpdate);
  const items2 = [emitChanges];
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
    let tmp2 = nextResult;
    let tmp3 = obj;
    if (null != obj.userTrialOffers[nextResult]) {
      let tmp4 = iter;
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
prototype["shouldShowTrialOfferReminder"] = function shouldShowTrialOfferReminder(trial_id) {
  const hasItem = closure_13.includes(trial_id.trial_id);
  let result = !hasItem;
  if (hasItem) {
    result = apexExperiment.isPremiumOfferReminderExperimentEnabled({ location: "user_offer_store" });
    const obj = apexExperiment;
  }
  return result;
};
prototype["getAlmostExpiringTrialOffersForReminder"] = function getAlmostExpiringTrialOffersForReminder(items) {
  let self = this;
  self = this;
  const dependencyMap = items;
  let values = Object.values(closure_12);
  const _require = values.map((id) => id.id);
  const currentUser = authStore.getCurrentUser();
  let obj = _getPremiumPlanItem;
  if (obj.isPremium(currentUser)) {
    if (!self.canFractionalPremiumUserUseOffer()) {
      items = [];
    }
    return items;
  }
  values = Object.values(obj.userTrialOffers);
  items = values.filter((trial_id) => {
    let hasItem = lib.includes(trial_id.trial_id);
    if (hasItem) {
      hasItem = null != trial_id.expires_at;
    }
    if (hasItem) {
      hasItem = null != trial_id.subscription_trial;
    }
    if (hasItem) {
      hasItem = items.includes(trial_id.subscription_trial.sku_id);
    }
    if (hasItem) {
      const _Date = Date;
      const _Date2 = Date;
      const parsed = Date.parse(trial_id.expires_at);
      const timestamp = Date.now();
      hasItem = parsed < timestamp + lib(items[8]).getOfferNoticeThreshold(trial_id);
      const obj = lib(items[8]);
    }
    if (hasItem) {
      hasItem = self.shouldShowTrialOfferReminder(trial_id);
    }
    return hasItem;
  });
};
prototype["shouldShowDiscountOfferReminder"] = function shouldShowDiscountOfferReminder(discountId) {
  const hasItem = closure_8.includes(discountId.discountId);
  let result = !hasItem;
  if (hasItem) {
    result = apexExperiment.isPremiumOfferReminderExperimentEnabled({ location: "user_offer_store" });
    const obj = apexExperiment;
  }
  return result;
};
prototype["getAlmostExpiringDiscountOffersForReminder"] = function getAlmostExpiringDiscountOffersForReminder(arg0) {
  let self = this;
  self = this;
  const _require = arg0;
  const currentUser = authStore.getCurrentUser();
  let obj = _require(self[8]);
  if (obj.isPremium(currentUser)) {
    if (!self.canFractionalPremiumUserUseOffer()) {
      let items = [];
    }
    return items;
  }
  const values = Object.values(obj.userDiscountOffers);
  items = values.filter((expiresAt) => {
    let someResult = null != expiresAt.expiresAt && null != expiresAt.discount;
    if (someResult) {
      const planIds = expiresAt.discount.planIds;
      someResult = planIds.some((arg0) => closure_0.includes(outer1_11[arg0].skuId));
    }
    if (someResult) {
      expiresAt = expiresAt.expiresAt;
      const _Date = Date;
      const time = expiresAt.getTime();
      const timestamp = Date.now();
      someResult = time < timestamp + callback(self[8]).getOfferNoticeThreshold(expiresAt);
      const obj = callback(self[8]);
    }
    if (someResult) {
      someResult = self.shouldShowDiscountOfferReminder(expiresAt);
    }
    return someResult;
  });
};
prototype["getAcknowledgedOffers"] = function getAcknowledgedOffers(arg0) {
  const _require = arg0;
  const currentUser = authStore.getCurrentUser();
  const obj = _getPremiumPlanItem;
  if (obj.isPremium(currentUser)) {
    const self = this;
    if (!this.canFractionalPremiumUserUseOffer()) {
      let items = [];
    }
    return items;
  }
  const values = Object.values(obj.userTrialOffers);
  items = values.filter((trial_id) => {
    let hasItem = closure_0.includes(trial_id.trial_id);
    if (hasItem) {
      hasItem = null != trial_id.expires_at;
    }
    return hasItem;
  });
};
prototype["getUnacknowledgedDiscountOffers"] = function getUnacknowledgedDiscountOffers() {
  const currentUser = authStore.getCurrentUser();
  const obj = getPremiumPlanItem;
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
  items = values.filter((hasAcknowledged) => {
    const hasAcknowledgedResult = hasAcknowledged.hasAcknowledged();
    let tmp2 = !hasAcknowledgedResult;
    if (!hasAcknowledgedResult) {
      tmp2 = !closure_7.includes(hasAcknowledged.discountId);
    }
    return tmp2;
  });
};
prototype["getUnacknowledgedOffers"] = function getUnacknowledgedOffers(arg0) {
  const _require = arg0;
  const currentUser = authStore.getCurrentUser();
  const obj = _getPremiumPlanItem;
  if (obj.isPremium(currentUser)) {
    const self = this;
    if (!this.canFractionalPremiumUserUseOffer()) {
      let items = [];
    }
    return items;
  }
  const values = Object.values(obj.userTrialOffers);
  items = values.filter((trial_id) => {
    let hasItem = closure_0.includes(trial_id.trial_id);
    if (hasItem) {
      hasItem = null == trial_id.expires_at;
    }
    return hasItem;
  });
};
prototype["hasAnyUnexpiredOffer"] = function hasAnyUnexpiredOffer() {
  const values = Object.values(obj.userTrialOffers);
  return values.some((expires_at) => {
    let tmp = null == expires_at.expires_at;
    if (!tmp) {
      const _Date = Date;
      const _Date2 = Date;
      const parsed = Date.parse(expires_at.expires_at);
      tmp = parsed > Date.now();
    }
    return tmp;
  });
};
prototype["hasAnyUnexpiredDiscountOffer"] = function hasAnyUnexpiredDiscountOffer() {
  const values = Object.values(obj.userDiscountOffers);
  return values.some((hasExpired) => !hasExpired.hasExpired());
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
      const obj = {};
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
        const obj = {};
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
      let obj = {};
      let merged = Object.assign(userDiscountOffers);
      const _Object = Object;
      const _Object2 = Object;
      const entries = Object.entries(userDiscountOffers.userDiscountOffers);
      obj.userDiscountOffers = Object.fromEntries(entries.map((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        const items = [tmp, ];
        let obj = createFromServer;
        if (tmp2 instanceof createFromServer) {
          items[1] = tmp2;
          return items;
        } else if ("discount_id" in tmp2) {
          let fromServer = obj.createFromServer(tmp2);
        } else {
          obj = {};
          const merged = Object.assign(tmp2);
          let date = null;
          if (null != tmp2.appliedAt) {
            const _Date = Date;
            date = new Date(tmp2.appliedAt);
          }
          obj.appliedAt = date;
          let date1 = null;
          if (null != tmp2.deletedAt) {
            const _Date2 = Date;
            date1 = new Date(tmp2.deletedAt);
          }
          obj.deletedAt = date1;
          let date2 = null;
          if (null != tmp2.expiresAt) {
            const _Date3 = Date;
            date2 = new Date(tmp2.expiresAt);
          }
          obj.expiresAt = date2;
          fromServer = new obj(obj);
        }
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
      obj.userTrialOffers[userTrialOffer.trial_id] = userTrialOffer;
    } else {
      obj.userTrialOffers = {};
    }
    obj.userOffersLastFetchedAtDate = Date.now();
  },
  BILLING_USER_OFFER_FETCH_SUCCESS: function handleUserOfferFetchSuccess(arg0) {
    let userDiscountOffer;
    let userTrialOffer;
    ({ userTrialOffer, userDiscountOffer } = arg0);
    if (tmp) {
      obj.userTrialOffers = {};
      obj.userDiscountOffers = {};
      obj.userOffersLastFetchedAtDate = undefined;
      obj.isFetching = false;
    }
    if (null != userTrialOffer) {
      obj.userTrialOffers[userTrialOffer.trial_id] = userTrialOffer;
      obj.userDiscountOffers = {};
    } else if (null != userDiscountOffer) {
      obj.userDiscountOffers[userDiscountOffer.discountId] = userDiscountOffer;
      obj.userTrialOffers = {};
    }
    obj.userOffersLastFetchedAtDate = Date.now();
    obj.isFetching = false;
    obj.lastFetchSuccessful = true;
  },
  BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function handleUserOfferAcknowledgedSuccess(arg0) {
    let userDiscount;
    let userDiscountOffer;
    let userTrialOffer;
    ({ userTrialOffer, userDiscount, userDiscountOffer } = arg0);
    if (null != userTrialOffer) {
      obj.userTrialOffers[userTrialOffer.trial_id] = userTrialOffer;
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
    if (null != keys.find((arg0) => outer1_15.userDiscountOffers[arg0].id === offerId)) {
      const userDiscountOffers = obj.userDiscountOffers;
      delete tmp3[tmp4];
    }
    const keys1 = Object.keys(obj.userTrialOffers);
    if (null != keys1.find((arg0) => outer1_15.userTrialOffers[arg0].id === offerId)) {
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
const userOfferStore = new UserOfferStore(require("dispatcher"), obj);
let result = require("mergeGuildAvatar").fileFinishedImporting("stores/billing/UserOfferStore.tsx");

export default userOfferStore;