// === Module 16325: _terminate ===

// Module 16325 (_terminate)
import GuildFeatures from "GuildFeatures";
import _getSystemLocale from "_getSystemLocale";
import mergeGuildAvatar from "mergeGuildAvatar";
import reset from "reset";
import createEmptyPromotionsByType from "createEmptyPromotionsByType";
import { PremiumTypes } from "GuildFeatures";
import { EntitlementTypes } from "ME";
import "initialize";

const require = arg1;
class PromotionsManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    obj = { POST_CONNECTION_OPEN: onPostConnectionOpen.bind(applyArgumentsResult), EXPERIMENTS_FETCH_SUCCESS: onPostConnectionOpen2.bind(applyArgumentsResult), IAP_PURCHASE_PRODUCT_SUCCESS: onMobilePurchaseSuccess.bind(applyArgumentsResult), GPLAY_PURCHASE_VERIFIED: onMobilePurchaseSuccess2.bind(applyArgumentsResult), BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: onOfferUpdated.bind(applyArgumentsResult), BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: onOfferUpdated2.bind(applyArgumentsResult), BILLING_REFERRAL_RESOLVE_SUCCESS: onOfferUpdated3.bind(applyArgumentsResult), VIRTUAL_CURRENCY_REDEEM_SUCCESS: onVCRedeemed.bind(applyArgumentsResult) };
    ({ onPostConnectionOpen, onPostConnectionOpen: onPostConnectionOpen2, onMobilePurchaseSuccess, onMobilePurchaseSuccess: onMobilePurchaseSuccess2, onOfferUpdated, onOfferUpdated: onOfferUpdated2, onOfferUpdated: onOfferUpdated3, onVCRedeemed } = applyArgumentsResult);
    applyArgumentsResult.actions = obj;
    map = new Map();
    onLocaleChanged = applyArgumentsResult.onLocaleChanged;
    result = map.set(_getSystemLocale, onLocaleChanged.bind(applyArgumentsResult));
    onSubscriptionStateChanged = applyArgumentsResult.onSubscriptionStateChanged;
    result1 = result.set(reset, onSubscriptionStateChanged.bind(applyArgumentsResult));
    onPromotionsFetchSettled = applyArgumentsResult.onPromotionsFetchSettled;
    applyArgumentsResult.stores = result1.set(createEmptyPromotionsByType, onPromotionsFetchSettled.bind(applyArgumentsResult));
    applyArgumentsResult.lastSubscriptionStateSignature = null;
    applyArgumentsResult.hasPendingSubscriptionRefetch = false;
    applyArgumentsResult.maybeFetchBogoPromotion = GuildFeatures(function*() {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v0 = 2;
          if (0 === v02) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const currentUser = outer1_5.getCurrentUser();
              if (!obj6.isPremiumExactly(currentUser, outer1_8.TIER_2)) {
                let obj1 = v0(tmp15[10]);
                v02 = 1;
                v0 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.maybeFetchActiveBogoPromotion();
                return obj1;
              }
              obj6 = v02(outer1_2[9]);
              tmp15 = outer1_2;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          v0 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp6) {
          v0 = tmp;
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
  let tmp = null != createEmptyPromotionsByType.lastFetchedActivePromotions;
  if (tmp) {
    tmp = createEmptyPromotionsByType.lastFetchedActivePromotionsLocale !== locale.locale;
  }
  if (tmp) {
    const result = require(6567) /* fetchActivePromotions */.maybeFetchActivePromotions(false);
    const obj = require(6567) /* fetchActivePromotions */;
  }
};
prototype["onPostConnectionOpen"] = function onPostConnectionOpen() {
  const self = this;
  return callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let obj1 = v0(outer1_2[8]);
            const result = obj1.maybeFetchActivePromotions();
            c1 = 1;
            v0 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = v0.maybeFetchBogoPromotion();
            return obj1;
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          v0 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp9) {
        v0 = tmp;
        throw tmp9;
      }
    }
  })();
};
prototype["onSubscriptionStateChanged"] = function onSubscriptionStateChanged() {
  subscriptions = subscriptions.getSubscriptions(false);
  let str = "";
  if (null != subscriptions) {
    const _Object = Object;
    const values = Object.values(subscriptions);
    let mapped = values.map((items) => {
      items = items.items;
      const mapped = items.map((planId) => planId.planId);
      const sorted = mapped.sort();
      return "" + items.id + ":" + items.type + ":" + items.status + ":" + sorted.join("|");
    });
    let sorted = mapped.sort();
    str = sorted.join(",");
  }
  const self = this;
  if (str !== this.lastSubscriptionStateSignature) {
    self.lastSubscriptionStateSignature = str;
    if (null != createEmptyPromotionsByType.lastFetchedActivePromotions) {
      if (createEmptyPromotionsByType.isFetchingActivePromotions) {
        self.hasPendingSubscriptionRefetch = true;
      } else {
        const result = require(6567) /* fetchActivePromotions */.maybeFetchActivePromotions(false);
        const obj3 = require(6567) /* fetchActivePromotions */;
      }
    }
  }
};
prototype["onPromotionsFetchSettled"] = function onPromotionsFetchSettled() {
  if (this.hasPendingSubscriptionRefetch) {
    if (!createEmptyPromotionsByType.isFetchingActivePromotions) {
      tmp.hasPendingSubscriptionRefetch = false;
      const result = require(6567) /* fetchActivePromotions */.maybeFetchActivePromotions(false);
      const obj = require(6567) /* fetchActivePromotions */;
    }
  }
};
prototype["onMobilePurchaseSuccess"] = function onMobilePurchaseSuccess() {
  const result = require(6567) /* fetchActivePromotions */.maybeFetchActivePromotions(false);
};
prototype["onOfferUpdated"] = function onOfferUpdated() {
  const result = require(6567) /* fetchActivePromotions */.maybeFetchActivePromotions(false);
};
prototype["onVCRedeemed"] = function onVCRedeemed(entitlements) {
  entitlements = entitlements.entitlements;
  if (entitlements.some((type) => type.type === constants.FRACTIONAL_REDEMPTION)) {
    const result = require(6567) /* fetchActivePromotions */.maybeFetchActivePromotions(false);
    const obj = require(6567) /* fetchActivePromotions */;
  }
};
const promotionsManager = new PromotionsManager();
let result = require("mergeGuildAvatar").fileFinishedImporting("modules/premium/promotions/PromotionsManager.tsx");

export default promotionsManager;