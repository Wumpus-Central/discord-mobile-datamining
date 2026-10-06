// === Module 17655: PromotionsManager ===

// Module 17655 (PromotionsManager)
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 1096 */;
import PromotionsActionCreators from "PromotionsActionCreators" /* 13245 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import SubscriptionStore from "SubscriptionStore" /* 4540 */;
import PromotionsStore from "PromotionsStore" /* 10409 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6620 */;
import size from "module_2" /* 2 */;

let map;

const EntitlementTypes = Constants.EntitlementTypes;
const SubscriptionTypes = Constants2.SubscriptionTypes;
class PromotionsManager extends AutomaticLifecycleManager {
  constructor() {
    let onMobilePurchaseSuccess;
    let onMobilePurchaseSuccess2;
    let onOfferUpdated;
    let onOfferUpdated2;
    let onOfferUpdated3;
    let onPostConnectionOpen;
    let onPostConnectionOpen2;
    let onVCRedeemed;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = { POST_CONNECTION_OPEN: onPostConnectionOpen.bind(applyArgumentsResult), EXPERIMENTS_FETCH_SUCCESS: onPostConnectionOpen2.bind(applyArgumentsResult), IAP_PURCHASE_PRODUCT_SUCCESS: onMobilePurchaseSuccess.bind(applyArgumentsResult), GPLAY_PURCHASE_VERIFIED: onMobilePurchaseSuccess2.bind(applyArgumentsResult), BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: onOfferUpdated.bind(applyArgumentsResult), BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: onOfferUpdated2.bind(applyArgumentsResult), BILLING_REFERRAL_RESOLVE_SUCCESS: onOfferUpdated3.bind(applyArgumentsResult), VIRTUAL_CURRENCY_REDEEM_SUCCESS: onVCRedeemed.bind(applyArgumentsResult) };
    onPostConnectionOpen = applyArgumentsResult.onPostConnectionOpen;
    onPostConnectionOpen2 = applyArgumentsResult.onPostConnectionOpen;
    onMobilePurchaseSuccess = applyArgumentsResult.onMobilePurchaseSuccess;
    onMobilePurchaseSuccess2 = applyArgumentsResult.onMobilePurchaseSuccess;
    onOfferUpdated = applyArgumentsResult.onOfferUpdated;
    onOfferUpdated2 = applyArgumentsResult.onOfferUpdated;
    onOfferUpdated3 = applyArgumentsResult.onOfferUpdated;
    onVCRedeemed = applyArgumentsResult.onVCRedeemed;
    applyArgumentsResult.actions = obj;
    const onLocaleChanged = applyArgumentsResult.onLocaleChanged;
    map = new Map();
    const result = map.set(LocaleStore, onLocaleChanged.bind(applyArgumentsResult));
    const onSubscriptionStateChanged = applyArgumentsResult.onSubscriptionStateChanged;
    const result1 = result.set(SubscriptionStore, onSubscriptionStateChanged.bind(applyArgumentsResult));
    const onPromotionsFetchSettled = applyArgumentsResult.onPromotionsFetchSettled;
    applyArgumentsResult.stores = result1.set(PromotionsStore, onPromotionsFetchSettled.bind(applyArgumentsResult));
    applyArgumentsResult.lastSubscriptionStateSignature = null;
    applyArgumentsResult.hasPendingSubscriptionRefetch = false;
    return applyArgumentsResult;
  }
  _terminate() {
    this.hasPendingSubscriptionRefetch = false;
    this.lastSubscriptionStateSignature = null;
  }
  onLocaleChanged() {
    const tmp = null != PromotionsStore.lastFetchedActivePromotions && PromotionsStore.lastFetchedActivePromotionsLocale !== LocaleStore.locale;
    if (tmp) {
      const obj = PromotionsActionCreators;
      const result = obj.maybeFetchActivePromotions(false);
    }
  }
  onPostConnectionOpen() {
    const obj = PromotionsActionCreators;
    const result = obj.maybeFetchActivePromotions();
  }
  onSubscriptionStateChanged() {
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
          const obj3 = PromotionsActionCreators;
          const result = obj3.maybeFetchActivePromotions(false);
        }
      }
    }
  }
  onPromotionsFetchSettled() {
    if (this.hasPendingSubscriptionRefetch) {
      if (!PromotionsStore.isFetchingActivePromotions) {
        tmp.hasPendingSubscriptionRefetch = false;
        const obj = PromotionsActionCreators;
        const result = obj.maybeFetchActivePromotions(false);
      }
    }
  }
  onMobilePurchaseSuccess() {
    const obj = PromotionsActionCreators;
    const result = obj.maybeFetchActivePromotions(false);
  }
  onOfferUpdated() {
    const obj = PromotionsActionCreators;
    const result = obj.maybeFetchActivePromotions(false);
  }
  onVCRedeemed(entitlements) {
    entitlements = entitlements.entitlements;
    if (entitlements.some((type) => type.type === constants.FRACTIONAL_REDEMPTION)) {
      const obj = PromotionsActionCreators;
      const result = obj.maybeFetchActivePromotions(false);
    }
  }
}
const prototype = PromotionsManager.prototype;
const promotionsManager = new PromotionsManager();
let result = size.fileFinishedImporting("modules/premium/promotions/PromotionsManager.tsx");

export default promotionsManager;