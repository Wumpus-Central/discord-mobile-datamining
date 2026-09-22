// === Module 17886: PromotionsManager ===

// Module 17886 (PromotionsManager)
import PromotionsActionCreators from "PromotionsActionCreators" /* 13696 */;
import LocaleStore from "LocaleStore" /* 2109 */;
import SubscriptionStore from "SubscriptionStore" /* 4421 */;
import PromotionsStore from "PromotionsStore" /* 10931 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7365 */;

require = fn;
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
    result = map.set(closure_2, onLocaleChanged.bind(applyArgumentsResult));
    onSubscriptionStateChanged = applyArgumentsResult.onSubscriptionStateChanged;
    result1 = result.set(closure_3, onSubscriptionStateChanged.bind(applyArgumentsResult));
    onPromotionsFetchSettled = applyArgumentsResult.onPromotionsFetchSettled;
    applyArgumentsResult.stores = result1.set(closure_4, onPromotionsFetchSettled.bind(applyArgumentsResult));
    applyArgumentsResult.lastSubscriptionStateSignature = null;
    applyArgumentsResult.hasPendingSubscriptionRefetch = false;
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
  const result = PromotionsActionCreators.maybeFetchActivePromotions();
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