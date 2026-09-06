// === Module 17469: PromotionsManager ===

// Module 17469 (PromotionsManager)
import PremiumUtilsDefault from "PremiumUtils" /* 4218 */;
import PromotionsActionCreators from "PromotionsActionCreators" /* 13353 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import UserStore from "UserStore" /* 1371 */;
import SubscriptionStore from "SubscriptionStore" /* 4224 */;
import PromotionsStore from "PromotionsStore" /* 10665 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

require = fn;
const PremiumTypes = fn(1373).PremiumTypes;
const EntitlementTypes = fn(1074).EntitlementTypes;
const SubscriptionTypes = fn(1085).SubscriptionTypes;
class PromotionsManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    obj = { POST_CONNECTION_OPEN: null, EXPERIMENTS_FETCH_SUCCESS: null, IAP_PURCHASE_PRODUCT_SUCCESS: null, GPLAY_PURCHASE_VERIFIED: null, BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: null, BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: null, BILLING_REFERRAL_RESOLVE_SUCCESS: null, VIRTUAL_CURRENCY_REDEEM_SUCCESS: null };
    onPostConnectionOpen = applyArgumentsResult.onPostConnectionOpen;
    obj.POST_CONNECTION_OPEN = onPostConnectionOpen.bind(applyArgumentsResult);
    onPostConnectionOpen2 = applyArgumentsResult.onPostConnectionOpen;
    obj.EXPERIMENTS_FETCH_SUCCESS = onPostConnectionOpen2.bind(applyArgumentsResult);
    onMobilePurchaseSuccess = applyArgumentsResult.onMobilePurchaseSuccess;
    obj.IAP_PURCHASE_PRODUCT_SUCCESS = onMobilePurchaseSuccess.bind(applyArgumentsResult);
    onMobilePurchaseSuccess2 = applyArgumentsResult.onMobilePurchaseSuccess;
    obj.GPLAY_PURCHASE_VERIFIED = onMobilePurchaseSuccess2.bind(applyArgumentsResult);
    onOfferUpdated = applyArgumentsResult.onOfferUpdated;
    obj.BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS = onOfferUpdated.bind(applyArgumentsResult);
    onOfferUpdated2 = applyArgumentsResult.onOfferUpdated;
    obj.BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS = onOfferUpdated2.bind(applyArgumentsResult);
    onOfferUpdated3 = applyArgumentsResult.onOfferUpdated;
    obj.BILLING_REFERRAL_RESOLVE_SUCCESS = onOfferUpdated3.bind(applyArgumentsResult);
    onVCRedeemed = applyArgumentsResult.onVCRedeemed;
    obj.VIRTUAL_CURRENCY_REDEEM_SUCCESS = onVCRedeemed.bind(applyArgumentsResult);
    applyArgumentsResult.actions = obj;
    map = new Map();
    onLocaleChanged = applyArgumentsResult.onLocaleChanged;
    result = map.set(closure_4, onLocaleChanged.bind(applyArgumentsResult));
    onSubscriptionStateChanged = applyArgumentsResult.onSubscriptionStateChanged;
    result1 = result.set(closure_6, onSubscriptionStateChanged.bind(applyArgumentsResult));
    onPromotionsFetchSettled = applyArgumentsResult.onPromotionsFetchSettled;
    applyArgumentsResult.stores = result1.set(closure_7, onPromotionsFetchSettled.bind(applyArgumentsResult));
    applyArgumentsResult.lastSubscriptionStateSignature = null;
    applyArgumentsResult.hasPendingSubscriptionRefetch = false;
    applyArgumentsResult.maybeFetchBogoPromotion = closure_3(async (arg0, value) => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              currentUser = currentUser.getCurrentUser();
              if (!obj6.isPremiumExactly(currentUser, TIER_2.TIER_2)) {
                let obj1 = require("PremiumBogoPromotionUtilsCommon");
                c1 = 1;
                c0 = 1;
                obj1 = { value: null, done: false };
                obj1.value = obj1.maybeFetchActiveBogoPromotion();
                return obj1;
              }
              obj6 = PremiumUtilsDefault;
              tmp14 = dependencyMap;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value, done: true };
            return obj;
          }
          c0 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp6) {
          c0 = tmp;
          throw tmp6;
        }
      }
    });
    return applyArgumentsResult;
  }
}
const prototype = PromotionsManager.prototype;
prototype["_terminate"] = function _terminate() {
  this.hasPendingSubscriptionRefetch = false;
  this.lastSubscriptionStateSignature = null;
};
prototype["onLocaleChanged"] = function onLocaleChanged() {
  let tmp = null != PromotionsStore.lastFetchedActivePromotions;
  if (tmp) {
    tmp = PromotionsStore.lastFetchedActivePromotionsLocale !== LocaleStore.locale;
  }
  if (tmp) {
    const result = PromotionsActionCreators.maybeFetchActivePromotions(false);
  }
};
prototype["onPostConnectionOpen"] = function onPostConnectionOpen() {
  const self = this;
  return (async (arg0, value) => {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v3 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            let obj1 = v3(dependencyMap[9]);
            const result = obj1.maybeFetchActivePromotions();
            c1 = 1;
            v3 = 1;
            obj1 = { value: self.maybeFetchBogoPromotion(), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          v3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp9) {
        v3 = tmp;
        throw tmp9;
      }
    }
  })();
};
prototype["onSubscriptionStateChanged"] = function onSubscriptionStateChanged() {
  const subscriptions = SubscriptionStore.getSubscriptions(false);
  let str = "";
  if (null != subscriptions) {
    const _Object = Object;
    const values = Object.values(subscriptions);
    const found = values.filter((type) => type.type === constants.PREMIUM);
    let mapped = found.map((id) => {
      const items = id.items;
      const mapped = items.map((planId) => planId.planId);
      const sorted = mapped.sort();
      return "" + id.id + ":" + id.type + ":" + id.status + ":" + sorted.join("|");
    });
    let sorted = mapped.sort();
    str = sorted.join(",");
  }
  const self = this;
  if (str !== this.lastSubscriptionStateSignature) {
    self.lastSubscriptionStateSignature = str;
    if (!tmp3) {
      if (PromotionsStore.isFetchingActivePromotions) {
        self.hasPendingSubscriptionRefetch = true;
      } else {
        const result = PromotionsActionCreators.maybeFetchActivePromotions(false);
      }
    }
  }
};
prototype["onPromotionsFetchSettled"] = function onPromotionsFetchSettled() {
  if (this.hasPendingSubscriptionRefetch) {
    if (!PromotionsStore.isFetchingActivePromotions) {
      tmp.hasPendingSubscriptionRefetch = false;
      const result = PromotionsActionCreators.maybeFetchActivePromotions(false);
    }
  }
};
prototype["onMobilePurchaseSuccess"] = function onMobilePurchaseSuccess() {
  const result = PromotionsActionCreators.maybeFetchActivePromotions(false);
};
prototype["onOfferUpdated"] = function onOfferUpdated() {
  const result = PromotionsActionCreators.maybeFetchActivePromotions(false);
};
prototype["onVCRedeemed"] = function onVCRedeemed(entitlements) {
  entitlements = entitlements.entitlements;
  if (entitlements.some((type) => type.type === constants.FRACTIONAL_REDEMPTION)) {
    const result = PromotionsActionCreators.maybeFetchActivePromotions(false);
  }
};
const promotionsManager = new PromotionsManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/promotions/PromotionsManager.tsx");

export default promotionsManager;