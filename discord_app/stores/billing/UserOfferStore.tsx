// discord_app/stores/billing/UserOfferStore.tsx
import createFromServer from "createFromServer";
import emitChanges from "emitChanges";
import closure_4 from "createFromServer";
import closure_5 from "createFromServer";
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
let closure_14;
let closure_15;
let map1;
let unpackModuleId;
const require = arg1;
function emitChanges() {
  return true;
}
function rehydrateDiscountOffer(discount) {
  let obj = closure_4;
  if (discount instanceof closure_4) {
    return discount;
  } else if ("discount_id" in discount) {
    let fromServer = obj.createFromServer(discount);
  } else {
    obj = {};
    const merged = Object.assign(discount);
    discount = discount.discount;
    if (null != discount) {
      if (!(discount instanceof createFromServer)) {
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
      obj[tmp3] = obj.userDiscountOffers[tmp3];
      obj.userDiscountOffers = obj;
      obj.userTrialOffers = {};
    } else if (null == obj.userDiscountOffers[closure_12]) {
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
({ ANNUAL_DISCOUNT_IDS: c9, DISCOUNT_OFFERS_REQUIRES_REMINDER_ROLLOUT: c10, PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID: unpackModuleId, PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID: closure_12, SubscriptionPlanInfo: map1, SubscriptionTrials: closure_14, TRIAL_OFFERS_REQUIRES_REMINDER_ROLLOUT: closure_15 } = GuildFeatures);
let obj = { userOffersLastFetchedAtDate: "r", userTrialOffers: "PX_16", userDiscountOffers: "TRANSPARENT", userDiscounts: 0, isFetching: "19.2.3", lastFetchSuccessful: "react-native-renderer" };
obj[1] = {};
obj[2] = {};
class UserOfferStore extends PersistedStore {
}
const prototype = UserOfferStore.prototype;
prototype["initialize"] = function initialize(userTrialOffers) {
  if (null != userTrialOffers) {
    let obj = {};
    let merged = Object.assign(userTrialOffers);
    userTrialOffers = userTrialOffers.userTrialOffers;
    if (userTrialOffers == null) {
      userTrialOffers = {};
    }
    const entries = Object.entries(userTrialOffers);
    obj.userTrialOffers = Object.fromEntries(entries.map((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      const items = [tmp, ];
      let obj = closure_5;
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
    obj.userDiscountOffers = Object.fromEntries(entries1.map((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      const items = [tmp, callback(tmp2)];
      return items;
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
prototype["shouldShowTrialOfferReminder"] = function shouldShowTrialOfferReminder(trialId) {
  const hasItem = closure_15.includes(trialId.trialId);
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
  let values = Object.values(closure_14);
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
  items = values.filter((trialId) => {
    let hasItem = lib.includes(trialId.trialId);
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
      hasItem = time < timestamp + lib(items[10]).getOfferNoticeThreshold(trialId);
      const obj = lib(items[10]);
    }
    if (hasItem) {
      hasItem = self.shouldShowTrialOfferReminder(trialId);
    }
    return hasItem;
  });
};
prototype["shouldShowDiscountOfferReminder"] = function shouldShowDiscountOfferReminder(discountId) {
  const hasItem = closure_10.includes(discountId.discountId);
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
  let obj = _require(self[10]);
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
      someResult = planIds.some((arg0) => closure_0.includes(outer1_13[arg0].skuId));
    }
    if (someResult) {
      expiresAt = expiresAt.expiresAt;
      const _Date = Date;
      const time = expiresAt.getTime();
      const timestamp = Date.now();
      someResult = time < timestamp + callback(self[10]).getOfferNoticeThreshold(expiresAt);
      const obj = callback(self[10]);
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
  items = values.filter((trialId) => {
    let hasItem = closure_0.includes(trialId.trialId);
    if (hasItem) {
      hasItem = null != trialId.expiresAt;
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
      tmp2 = !closure_9.includes(hasAcknowledged.discountId);
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
  items = values.filter((trialId) => {
    let hasItem = closure_0.includes(trialId.trialId);
    if (hasItem) {
      hasItem = null == trialId.expiresAt;
    }
    return hasItem;
  });
};
prototype["hasAnyUnexpiredOffer"] = function hasAnyUnexpiredOffer() {
  const values = Object.values(obj.userTrialOffers);
  return values.some((hasExpired) => !hasExpired.hasExpired());
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
      const obj = {};
      const merged = Object.assign(userDiscountOffers);
      const _Object = Object;
      const _Object2 = Object;
      const entries = Object.entries(userDiscountOffers.userDiscountOffers);
      obj.userDiscountOffers = Object.fromEntries(entries.map((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
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
      obj.userTrialOffers[userTrialOffer.trialId] = userTrialOffer;
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
    if (null != keys.find((arg0) => outer1_17.userDiscountOffers[arg0].id === offerId)) {
      const userDiscountOffers = obj.userDiscountOffers;
      delete tmp3[tmp4];
    }
    const keys1 = Object.keys(obj.userTrialOffers);
    if (null != keys1.find((arg0) => outer1_17.userTrialOffers[arg0].id === offerId)) {
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
let result = require("createFromServer").fileFinishedImporting("stores/billing/UserOfferStore.tsx");

export default userOfferStore;