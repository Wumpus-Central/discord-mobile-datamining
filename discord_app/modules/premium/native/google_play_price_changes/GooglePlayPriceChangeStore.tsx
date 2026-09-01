// discord_app/modules/premium/native/google_play_price_changes/GooglePlayPriceChangeStore.tsx
import initializeDefault from "../../../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../../../Dispatcher.tsx";
import closure_2 from "../../../../stores/billing/SubscriptionStore.tsx";
import set from "../../../../../_runtime/00002_set.js";

const require = arg1;
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
}
let items = [, ,];
({ ACTIVE: arr[0], PAST_DUE: arr[1], UNPAID: arr[2] } = require("ME").SubscriptionStatusTypes);
let set = new Set(items);
let c4 = false;
let c5 = null;
const Store = initializeDefault.Store;
class GooglePlayPriceChangeStore extends Store {}
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
  set: undefined,
});
Object.defineProperty(prototype, "priceChangeRecord", {
  get: function priceChangeRecord() {
    return c5;
  },
  set: undefined,
});
GooglePlayPriceChangeStore.displayName = "GooglePlayPriceChangeStore";
const googlePlayPriceChangeStore = new GooglePlayPriceChangeStore(dispatcherDefault, {});
const result = set.fileFinishedImporting(
  "modules/premium/native/google_play_price_changes/GooglePlayPriceChangeStore.tsx",
);

export default googlePlayPriceChangeStore;
