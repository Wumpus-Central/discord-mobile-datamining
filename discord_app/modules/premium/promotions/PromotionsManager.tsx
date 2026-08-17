// discord_app/modules/premium/promotions/PromotionsManager.tsx
import initializeDefault from "../../../lib/AutomaticLifecycleManager.tsx";
import fetchActivePromotions from "PromotionsActionCreators.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../user_settings/LocaleStore.tsx";
import closure_5 from "../../../stores/UserStore.tsx";
import closure_6 from "../../../stores/billing/SubscriptionStore.tsx";
import closure_7 from "PromotionsStore.tsx";
import { PremiumTypes } from "../PremiumConstants.tsx";
import { EntitlementTypes } from "../../../Constants.tsx";
import { SubscriptionTypes } from "../../../../discord_common/js/shared/Constants.tsx";

require = arg1;
initializeDefault;
class PromotionsManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    obj = { POST_CONNECTION_OPEN: onPostConnectionOpen.bind(applyArgumentsResult), EXPERIMENTS_FETCH_SUCCESS: onPostConnectionOpen2.bind(applyArgumentsResult), IAP_PURCHASE_PRODUCT_SUCCESS: onMobilePurchaseSuccess.bind(applyArgumentsResult), GPLAY_PURCHASE_VERIFIED: onMobilePurchaseSuccess2.bind(applyArgumentsResult), BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: onOfferUpdated.bind(applyArgumentsResult), BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: onOfferUpdated2.bind(applyArgumentsResult), BILLING_REFERRAL_RESOLVE_SUCCESS: onOfferUpdated3.bind(applyArgumentsResult), VIRTUAL_CURRENCY_REDEEM_SUCCESS: onVCRedeemed.bind(applyArgumentsResult) };
    ({ onPostConnectionOpen, onPostConnectionOpen: onPostConnectionOpen2, onMobilePurchaseSuccess, onMobilePurchaseSuccess: onMobilePurchaseSuccess2, onOfferUpdated, onOfferUpdated: onOfferUpdated2, onOfferUpdated: onOfferUpdated3, onVCRedeemed } = applyArgumentsResult);
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
    applyArgumentsResult.maybeFetchBogoPromotion = closure_3(function*() {
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              const currentUser = closure_1_5.getCurrentUser();
              if (!obj6.isPremiumExactly(currentUser, closure_1_8.TIER_2)) {
                obj1 = v0(tmp15[11]);
                v02 = 1;
                v0 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.maybeFetchActiveBogoPromotion();
                return obj1;
              }
              obj6 = v02(closure_1_2[10]);
              tmp15 = closure_1_2;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
  let tmp = null != closure_7.lastFetchedActivePromotions;
  if (tmp) {
    tmp = closure_7.lastFetchedActivePromotionsLocale !== locale.locale;
  }
  if (tmp) {
    const result = fetchActivePromotions.maybeFetchActivePromotions(false);
    const obj = fetchActivePromotions;
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            obj1 = v0(closure_1_2[9]);
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
    const found = values.filter((type) => type.type === constants.PREMIUM);
    let mapped = found.map((items) => {
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
    if (!tmp3) {
      if (closure_7.isFetchingActivePromotions) {
        self.hasPendingSubscriptionRefetch = true;
      } else {
        const result = fetchActivePromotions.maybeFetchActivePromotions(false);
        const obj3 = fetchActivePromotions;
      }
    }
  }
};
prototype["onPromotionsFetchSettled"] = function onPromotionsFetchSettled() {
  if (this.hasPendingSubscriptionRefetch) {
    if (!closure_7.isFetchingActivePromotions) {
      tmp.hasPendingSubscriptionRefetch = false;
      const result = fetchActivePromotions.maybeFetchActivePromotions(false);
      const obj = fetchActivePromotions;
    }
  }
};
prototype["onMobilePurchaseSuccess"] = function onMobilePurchaseSuccess() {
  const result = fetchActivePromotions.maybeFetchActivePromotions(false);
};
prototype["onOfferUpdated"] = function onOfferUpdated() {
  const result = fetchActivePromotions.maybeFetchActivePromotions(false);
};
prototype["onVCRedeemed"] = function onVCRedeemed(entitlements) {
  entitlements = entitlements.entitlements;
  if (entitlements.some((type) => type.type === constants.FRACTIONAL_REDEMPTION)) {
    const result = fetchActivePromotions.maybeFetchActivePromotions(false);
    const obj = fetchActivePromotions;
  }
};
const promotionsManager = new PromotionsManager();
let result = require("set").fileFinishedImporting("modules/premium/promotions/PromotionsManager.tsx");

export default promotionsManager;