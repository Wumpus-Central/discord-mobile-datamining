// === Module 17140: GooglePlayPriceChangeStore ===

// Module 17140 (GooglePlayPriceChangeStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import SubscriptionStore from "SubscriptionStore" /* 4540 */;
import size from "module_2" /* 2 */;

function onInitializeSync() {
  priceChange = null;
  c4 = false;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const premiumSubscription = SubscriptionStore.getPremiumSubscription();
    if (premiumSubscription != null) {
      priceChange = premiumSubscription.priceChange;
    }
    const isPriceIncrease = null != premiumSubscription && set.has(premiumSubscription.status) && null != priceChange && priceChange.isInFuture && priceChange.isPriceIncrease;
    if (isPriceIncrease) {
      c4 = true;
    }
  }
}
let items = [, , ];
({ ACTIVE: arr[0], PAST_DUE: arr[1], UNPAID: arr[2] } = Constants.SubscriptionStatusTypes);
const set = new Set(items);
let c4 = false;
let priceChange = null;
const Store = get_initializedDefault.Store;
class GooglePlayPriceChangeStore extends Store {
  initialize() {
    const items = [SubscriptionStore];
    this.syncWith(items, onInitializeSync);
    this.waitFor(SubscriptionStore);
  }
}
const prototype = GooglePlayPriceChangeStore.prototype;
Object.defineProperty(prototype, "shouldShowGooglePlayPriceChange", {
  get: function shouldShowGooglePlayPriceChange() {
    return c4;
  },
  set: undefined
});
Object.defineProperty(prototype, "priceChangeRecord", {
  get: function priceChangeRecord() {
    return priceChange;
  },
  set: undefined
});
GooglePlayPriceChangeStore.displayName = "GooglePlayPriceChangeStore";
const googlePlayPriceChangeStore = new GooglePlayPriceChangeStore(DispatcherDefault, {});
const result = size.fileFinishedImporting("modules/premium/native/google_play_price_changes/GooglePlayPriceChangeStore.tsx");

export default googlePlayPriceChangeStore;