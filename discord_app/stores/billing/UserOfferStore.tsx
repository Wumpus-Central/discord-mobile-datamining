// === Module 6959: UserOfferStore ===

// Module 6959 (UserOfferStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1096 */;
import PremiumUtils from "PremiumUtils" /* 4528 */;
import PremiumOfferReminderExperiment from "PremiumOfferReminderExperiment" /* 13141 */;
import DiscountRecord from "DiscountRecord" /* 6960 */;
import ReferralTrialStore from "ReferralTrialStore" /* 6961 */;
import UserDiscountOfferRecord from "UserDiscountOfferRecord" /* 7734 */;
import UserTrialOfferRecord from "UserTrialOfferRecord" /* 6963 */;
import UserStore from "UserStore" /* 1377 */;
import EntitlementStore from "EntitlementStore" /* 6899 */;
import SubscriptionStore from "SubscriptionStore" /* 4534 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let closure_12;
let closure_14;
let closure_15;
let map1;
let unpackModuleId;
function emitChanges() {
  return true;
}
function rehydrateDiscountOffer(discount) {
  let tmp = discount;
  if (!(discount instanceof UserDiscountOfferRecord)) {
    let fromServer;
    if ("discount_id" in discount) {
      fromServer = UserDiscountOfferRecord.createFromServer(discount);
    } else {
      const obj2 = {};
      const merged = Object.assign(discount);
      discount = discount.discount;
      if (null != discount) {
        let tmp72;
        if (!(discount instanceof DiscountRecord)) {
          const self = this;
          const self2 = this;
          tmp72 = new tmp7(discount);
        }
        obj2.discount = tmp72;
        let date = null;
        if (null != discount.appliedAt) {
          const _Date = Date;
          const self3 = this;
          const self4 = this;
          date = new Date(discount.appliedAt);
        }
        obj2.appliedAt = date;
        let date1 = null;
        if (null != discount.deletedAt) {
          const _Date2 = Date;
          const self5 = this;
          const self6 = this;
          date1 = new Date(discount.deletedAt);
        }
        obj2.deletedAt = date1;
        let date2 = null;
        if (null != discount.expiresAt) {
          const _Date3 = Date;
          const self7 = this;
          const self8 = this;
          date2 = new Date(discount.expiresAt);
        }
        obj2.expiresAt = date2;
        const self9 = this;
        const self10 = this;
        fromServer = new UserDiscountOfferRecord(obj2);
      }
      if (discount == null) {
        discount = null;
      }
      tmp72 = discount;
    }
    tmp = fromServer;
  }
  return tmp;
}
function handleSubscriptionStoreUpdate() {
  let flag = null != SubscriptionStore.getPremiumTypeSubscription();
  if (flag) {
    const obj = _modDef12;
    closure_19.userDiscountOffers = obj.pick(closure_19.userDiscountOffers, unpackModuleId);
    closure_19.userTrialOffers = {};
    flag = true;
  }
  return flag;
}
function handlePaymentSourceChange() {
  const currentUser = UserStore.getCurrentUser();
}
function handleReferralTrialStoreUpdate() {
  return false;
}
({ ANNUAL_DISCOUNT_IDS: c10, CHURN_DISCOUNT_IDS: unpackModuleId, DISCOUNT_OFFERS_REQUIRES_REMINDER_ROLLOUT: closure_12, SubscriptionPlanInfo: map1, SubscriptionTrials: closure_14, TRIAL_OFFERS_REQUIRES_REMINDER_ROLLOUT: closure_15 } = PremiumConstants);
const OfferTriggerTypes = Constants.OfferTriggerTypes;
let closure_17 = performance.now();
let cooldownExpirationTimestamps = { userOffersLastFetchedAtDate: "r", userTrialOffers: {}, userDiscountOffers: {}, userDiscounts: "\u{1F91E}\u{1F3FB}", isFetching: true, lastFetchSuccessful: null, shouldTriggerOffer: 9, cooldownExpirationTimestamps: { [OfferTriggerTypes.CHANNEL_OPENED]: 0, [OfferTriggerTypes.JOIN_VOICE_CHANNEL]: 0, [OfferTriggerTypes.PREMIUM_UPSELL_VIEWED]: 0, [OfferTriggerTypes.USER_PROFILE_ACTION]: 0, [OfferTriggerTypes.VIDEO_STREAM_ENDED]: 0 } };
let closure_19 = cooldownExpirationTimestamps;
const PersistedStore = get_initializedDefault.PersistedStore;
class UserOfferStore extends PersistedStore {
  initialize(userTrialOffers) {
    let entries1;
    let entries2Result;
    let fromEntries;
    let fromEntries2;
    let obj;
    let tmp;
    if (null != userTrialOffers) {
      obj = {
        userTrialOffers: fromEntries(entries1.map(function(item) {
            let date;
            let date1;
            let tmp;
            let tmp2;
            [tmp, tmp2] = item;
            const items = [tmp, ];
            let tmp3 = tmp2;
            if (!(tmp2 instanceof UserTrialOfferRecord)) {
              let fromServer;
              if ("trial_id" in tmp2) {
                fromServer = UserTrialOfferRecord.createFromServer(tmp2);
              } else {
                const obj2 = { expiresAt: date, redeemedAt: date1 };
                const merged = Object.assign(tmp2);
                date = null;
                if (null != tmp2.expiresAt) {
                  const _Date = Date;
                  const self = this;
                  const self2 = this;
                  date = new Date(tmp2.expiresAt);
                }
                date1 = null;
                if (null != tmp2.redeemedAt) {
                  const _Date2 = Date;
                  const self3 = this;
                  const self4 = this;
                  date1 = new Date(tmp2.redeemedAt);
                }
                const self5 = this;
                const self6 = this;
                fromServer = new UserTrialOfferRecord(obj2);
              }
              tmp3 = fromServer;
            }
            items[1] = tmp3;
            return items;
          })),
        userDiscountOffers: fromEntries2(entries2Result.map((item) => {
            let tmp;
            let tmp2;
            [tmp, tmp2] = item;
            const items = [tmp, rehydrateDiscountOffer(tmp2)];
            return items;
          }))
      };
      const tmp2 = obj;
      let tmp3 = userTrialOffers;
      let merged = Object.assign(userTrialOffers);
      userTrialOffers = userTrialOffers.userTrialOffers;
      const _Object = Object;
      fromEntries = Object.fromEntries;
      const _Object2 = Object;
      if (userTrialOffers == null) {
        userTrialOffers = {};
      }
      entries1 = entries(userTrialOffers);
      let userDiscountOffers = userTrialOffers.userDiscountOffers;
      const _Object3 = Object;
      fromEntries2 = Object.fromEntries;
      const _Object4 = Object;
      const entries2 = Object.entries;
      if (userDiscountOffers == null) {
        userDiscountOffers = {};
      }
      tmp = obj;
      entries2Result = entries2(userDiscountOffers);
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
  }
  getUserTrialOffer(trialId) {
    if (null !== trialId) {
      return closure_19.userTrialOffers[trialId];
    }
  }
  getUserDiscountOffer(arg0) {
    if (null !== arg0) {
      return closure_19.userDiscountOffers[arg0];
    }
  }
  getAnyOfUserTrialOfferId(arg0) {
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (null != closure_19.userTrialOffers[nextResult]) {
        iter.return();
        return nextResult;
      }
    }
    return null;
  }
  isFetchingOffer() {
    let flag = closure_19.isFetching;
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  hasFetchedOffer() {
    return null != closure_19.userOffersLastFetchedAtDate;
  }
  shouldFetchReferralOffer(tmp9Result) {
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
      if (tmp3) {
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
  }
  shouldShowTrialOfferReminder(trialId) {
    const hasItem = closure_15.includes(trialId.trialId);
    let result = !hasItem;
    if (hasItem) {
      const obj = PremiumOfferReminderExperiment;
      result = obj.isPremiumOfferReminderExperimentEnabled({ location: "user_offer_store" });
    }
    return result;
  }
  getAlmostExpiringTrialOffersForReminder(items) {
    let closure_0;
    const self = this;
    const values = Object.values(closure_14);
    _require = values.map((id) => id.id);
    const currentUser = UserStore.getCurrentUser();
    let obj = require("PremiumUtils");
    if (obj.isPremium(currentUser)) {
      if (!self.canFractionalPremiumUserUseOffer()) {
        items = [];
      }
      return items;
    }
    const values2 = Object.values(closure_19.userTrialOffers);
    items = values2.filter((trialId) => {
      let hasItem = closure_0.includes(trialId.trialId) && null != trialId.expiresAt && null != trialId.subscriptionTrial && items.includes(trialId.subscriptionTrial.skuId);
      if (hasItem) {
        const expiresAt = trialId.expiresAt;
        const _Date = Date;
        const time = expiresAt.getTime();
        const timestamp = Date.now();
        const obj = PremiumUtils;
        hasItem = time < timestamp + obj.getOfferNoticeThreshold(trialId);
      }
      if (hasItem) {
        hasItem = self.shouldShowTrialOfferReminder(trialId);
      }
      return hasItem;
    });
  }
  shouldShowDiscountOfferReminder(discountId) {
    const hasItem = closure_12.includes(discountId.discountId);
    let result = !hasItem;
    if (hasItem) {
      const obj = PremiumOfferReminderExperiment;
      result = obj.isPremiumOfferReminderExperimentEnabled({ location: "user_offer_store" });
    }
    return result;
  }
  getAlmostExpiringDiscountOffersForReminder(arg0) {
    let closure_0;
    const self = this;
    _require = arg0;
    const currentUser = UserStore.getCurrentUser();
    let obj = require("PremiumUtils");
    if (obj.isPremium(currentUser)) {
      let items;
      if (!self.canFractionalPremiumUserUseOffer()) {
        items = [];
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
        const obj = PremiumUtils;
        someResult = time < timestamp + obj.getOfferNoticeThreshold(expiresAt);
      }
      if (someResult) {
        someResult = self.shouldShowDiscountOfferReminder(expiresAt);
      }
      return someResult;
    });
  }
  getAcknowledgedOffers(arg0) {
    let closure_0 = arg0;
    const currentUser = UserStore.getCurrentUser();
    const obj = PremiumUtils;
    if (obj.isPremium(currentUser)) {
      let items;
      const self = this;
      if (!this.canFractionalPremiumUserUseOffer()) {
        items = [];
      }
      return items;
    }
    const values = Object.values(closure_19.userTrialOffers);
    items = values.filter((trialId) => {
      const hasItem = closure_0.includes(trialId.trialId) && null != trialId.expiresAt;
      return hasItem;
    });
  }
  getUnacknowledgedDiscountOffers() {
    const currentUser = UserStore.getCurrentUser();
    const obj = PremiumUtils;
    if (obj.isPremium(currentUser)) {
      let items;
      const self = this;
      if (!this.canFractionalPremiumUserUseOffer()) {
        items = [];
      }
      return items;
    }
    let userDiscountOffers = closure_19.userDiscountOffers;
    const _Object = Object;
    if (userDiscountOffers == null) {
      userDiscountOffers = {};
    }
    const values2 = values(userDiscountOffers);
    items = values2.filter((hasAcknowledged) => {
      let tmp2 = !hasAcknowledged.hasAcknowledged();
      hasAcknowledged.hasAcknowledged();
      if (tmp2) {
        tmp2 = !closure_1_10.includes(hasAcknowledged.discountId);
      }
      return tmp2;
    });
  }
  getUnacknowledgedOffers(arg0) {
    let closure_0 = arg0;
    const currentUser = UserStore.getCurrentUser();
    const obj = PremiumUtils;
    if (obj.isPremium(currentUser)) {
      let items;
      const self = this;
      if (!this.canFractionalPremiumUserUseOffer()) {
        items = [];
      }
      return items;
    }
    const values = Object.values(closure_19.userTrialOffers);
    items = values.filter((trialId) => {
      const hasItem = closure_0.includes(trialId.trialId) && null == trialId.expiresAt;
      return hasItem;
    });
  }
  hasAnyUnexpiredOffer() {
    const values = Object.values(closure_19.userTrialOffers);
    return values.some((hasExpired) => !hasExpired.hasExpired);
  }
  hasAnyUnexpiredDiscountOffer() {
    const values = Object.values(closure_19.userDiscountOffers);
    return values.some((hasExpired) => !hasExpired.hasExpired());
  }
  canFractionalPremiumUserUseOffer() {
    const result = EntitlementStore.isFractionalPremiumActive({ excludeReverseTrial: true }) && null == SubscriptionStore.getPremiumTypeSubscription();
    return result;
  }
  getReferrer(arg0) {
    let tmp = null;
    if (null != arg0) {
      let referrer;
      if (closure_19.userTrialOffers[arg0] != null) {
        referrer = tmp3.referrer;
      }
      tmp = referrer;
    }
    return tmp;
  }
  getState() {
    return closure_19;
  }
  forceReset() {
    closure_19.userTrialOffers = {};
    closure_19.userDiscountOffers = {};
    closure_19.userOffersLastFetchedAtDate = undefined;
    closure_19.isFetching = false;
    closure_19.shouldTriggerOffer = false;
    closure_19.cooldownExpirationTimestamps = { [closure_1_16.CHANNEL_OPENED]: 0, [closure_1_16.JOIN_VOICE_CHANNEL]: 0, [closure_1_16.PREMIUM_UPSELL_VIEWED]: 0, [closure_1_16.USER_PROFILE_ACTION]: 0, [closure_1_16.VIDEO_STREAM_ENDED]: 0 };
  }
  lastFetchSuccessful() {
    return closure_19.lastFetchSuccessful;
  }
  canTriggerUserOffer(triggerType) {
    return false;
  }
  getUptimeForTrigger() {
    return Math.floor((performance.now() - closure_17) / 1000);
  }
}
const prototype = UserOfferStore.prototype;
UserOfferStore.displayName = "UserOfferStore";
UserOfferStore.persistKey = "UserOfferStore";
let items = [
  (userDiscounts) => {
    userDiscounts = undefined;
    if (userDiscounts != null) {
      userDiscounts = userDiscounts.userDiscounts;
    }
    if (null != userDiscounts) {
      const obj = { userDiscountOffers: userDiscounts };
      const merged = Object.assign(userDiscounts);
      return obj;
    }
  },
  (arg0) => {
    if (null != arg0) {
      const _Object = Object;
      if (Object.hasOwn(arg0, "userAnnualOfferLastFetchedAtDate")) {
        delete tmp[`userAnnualOfferLastFetchedAtDate`];
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
        const obj = { isFetching: false };
        const merged = Object.assign(isFetching);
        tmp2 = obj;
      }
      return tmp2;
    }
  },
  (userDiscountOffers) => {
    let entries;
    let fromEntries;
    userDiscountOffers = undefined;
    if (userDiscountOffers != null) {
      userDiscountOffers = userDiscountOffers.userDiscountOffers;
    }
    if (null != userDiscountOffers) {
      const obj = {
        userDiscountOffers: fromEntries(entries.map((item) => {
            let tmp;
            let tmp2;
            [tmp, tmp2] = item;
            const items = [tmp, rehydrateDiscountOffer(tmp2)];
            return items;
          }))
      };
      const tmp2 = obj;
      const merged = Object.assign(userDiscountOffers);
      const _Object = Object;
      const _Object2 = Object;
      fromEntries = Object.fromEntries;
      entries = Object.entries(userDiscountOffers.userDiscountOffers);
      return obj;
    }
  },
  (shouldTriggerOffer) => {
    let obj2;
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
      const obj = { shouldTriggerOffer: false, cooldownExpirationTimestamps: obj2 };
      const merged = Object.assign(shouldTriggerOffer);
      obj2 = {};
      obj2[OfferTriggerTypes.CHANNEL_OPENED] = 0;
      obj2[OfferTriggerTypes.JOIN_VOICE_CHANNEL] = 0;
      obj2[OfferTriggerTypes.PREMIUM_UPSELL_VIEWED] = 0;
      obj2[OfferTriggerTypes.USER_PROFILE_ACTION] = 0;
      obj2[OfferTriggerTypes.VIDEO_STREAM_ENDED] = 0;
      return obj;
    }
  }
];
UserOfferStore.migrations = items;
let obj2 = {
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
    let shouldTriggerOffer;
    let userDiscountOffer;
    let userTrialOffer;
    ({ userTrialOffer, userDiscountOffer, shouldTriggerOffer } = arg0);
    const tmp = null == userTrialOffer && null == userDiscountOffer;
    if (tmp) {
      closure_19.userTrialOffers = {};
      closure_19.userDiscountOffers = {};
      closure_19.userOffersLastFetchedAtDate = undefined;
      closure_19.isFetching = false;
      if (!shouldTriggerOffer) {
        closure_19.shouldTriggerOffer = false;
        cooldownExpirationTimestamps = {};
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
  },
  BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function handleUserOfferAcknowledgedSuccess(arg0) {
    let userDiscount;
    let userDiscountOffer;
    let userTrialOffer;
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
    const found = keys.find((item) => closure_19.userDiscountOffers[item].id === offerId);
    if (null != found) {
      delete closure_19.userDiscountOffers[tmp];
    }
    const keys1 = Object.keys(closure_19.userTrialOffers);
    const found1 = keys1.find((item) => closure_19.userTrialOffers[item].id === offerId);
    if (null != found1) {
      delete closure_19.userTrialOffers[tmp3];
    }
    return true;
  },
  BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: handlePaymentSourceChange,
  BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: handlePaymentSourceChange,
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: handlePaymentSourceChange,
  BILLING_USER_OFFER_TRIGGER_ATTEMPT: function handleUserOfferTriggerAttempt(triggerType) {
    triggerType = triggerType.triggerType;
    const result = 3600 * (1 + Math.random());
    closure_19.cooldownExpirationTimestamps[triggerType] = Date.now() + 1000 * result;
  },
  BILLING_USER_OFFER_TRIGGER_SUCCESS: function handleUserOfferTriggerSuccess(arg0) {
    let retryAfter;
    let triggerSuccess;
    let triggerType;
    let userDiscountOffer;
    let userTrialOffer;
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
const userOfferStore = new UserOfferStore(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("stores/billing/UserOfferStore.tsx");

export default userOfferStore;