// === Module 16149: onInitializeSync ===

// Module 16149 (onInitializeSync)
import obj132 from "obj132" /* 500 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import reset from "reset" /* 4045 */;

require = fn;
function onInitializeSync() {
  let priceChange = null;
  c4 = false;
  if (obj.isAndroid()) {
    premiumSubscription = premiumSubscription.getPremiumSubscription();
    if (premiumSubscription != null) {
      priceChange = premiumSubscription.priceChange;
    }
    let isPriceIncrease = null != premiumSubscription;
    if (isPriceIncrease) {
      isPriceIncrease = set.has(premiumSubscription.status);
    }
    if (isPriceIncrease) {
      isPriceIncrease = null != priceChange;
    }
    if (isPriceIncrease) {
      isPriceIncrease = priceChange.isInFuture;
    }
    if (isPriceIncrease) {
      isPriceIncrease = priceChange.isPriceIncrease;
    }
    if (isPriceIncrease) {
      c4 = true;
    }
  }
  obj = obj132;
}
let items = [, , ];
({ ACTIVE: arr[0], PAST_DUE: arr[1], UNPAID: arr[2] } = require("ME").SubscriptionStatusTypes);
const set = new Set(items);
let c4 = false;
let c5 = null;
const Store = initializeDefault.Store;
class GooglePlayPriceChangeStore extends Store {
}
const prototype = GooglePlayPriceChangeStore.prototype;
prototype["initialize"] = function initialize() {
  const items = [closure_2];
  this.syncWith(items, onInitializeSync);
  this.waitFor(closure_2);
};
Object.defineProperty(prototype, "shouldShowGooglePlayPriceChange", {
  get: function shouldShowGooglePlayPriceChange() {
    return c4;
  },
  set: undefined
});
Object.defineProperty(prototype, "priceChangeRecord", {
  get: function priceChangeRecord() {
    return c5;
  },
  set: undefined
});
GooglePlayPriceChangeStore.displayName = "GooglePlayPriceChangeStore";
const googlePlayPriceChangeStore = new GooglePlayPriceChangeStore(dispatcherDefault, {});
const result = require("obj132").fileFinishedImporting("modules/premium/native/google_play_price_changes/GooglePlayPriceChangeStore.tsx");

export default googlePlayPriceChangeStore;