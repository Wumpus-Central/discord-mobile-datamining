// discord_app/modules/premium/native/google_play_price_changes/GooglePlayPriceChangeStore.tsx
import initializeDefault from "../../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import SubscriptionStore from "../../../../stores/billing/SubscriptionStore.tsx";

require = fn;
function onInitializeSync() {
  priceChange = null;
  c4 = false;
  if (obj.isAndroid()) {
    const premiumSubscription = SubscriptionStore.getPremiumSubscription();
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
  obj = PlatformUtils;
}
let items = [, ,];
({ ACTIVE: arr[0], PAST_DUE: arr[1], UNPAID: arr[2] } = fn(1074).SubscriptionStatusTypes);
const set = new Set(items);
let c4 = false;
let priceChange = null;
const Store = initializeDefault.Store;
class GooglePlayPriceChangeStore extends Store {}
const prototype = GooglePlayPriceChangeStore.prototype;
prototype["initialize"] = function initialize() {
  const items = [SubscriptionStore];
  this.syncWith(items, onInitializeSync);
  this.waitFor(SubscriptionStore);
};
Object.defineProperty(prototype, "shouldShowGooglePlayPriceChange", {
  get: function shouldShowGooglePlayPriceChange() {
    return c4;
  },
  set: undefined,
});
Object.defineProperty(prototype, "priceChangeRecord", {
  get: function priceChangeRecord() {
    return priceChange;
  },
  set: undefined,
});
GooglePlayPriceChangeStore.displayName = "GooglePlayPriceChangeStore";
const googlePlayPriceChangeStore = new GooglePlayPriceChangeStore(DispatcherDefault, {});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/premium/native/google_play_price_changes/GooglePlayPriceChangeStore.tsx",
);

export default googlePlayPriceChangeStore;
