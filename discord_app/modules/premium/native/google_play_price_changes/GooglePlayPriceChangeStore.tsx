// discord_app/modules/premium/native/google_play_price_changes/GooglePlayPriceChangeStore.tsx
import get_initializedDefault from "../../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import Constants from "../../../../Constants.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import SubscriptionStore from "../../../../stores/billing/SubscriptionStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function onInitializeSync() {
  priceChange = null;
  c4 = false;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const premiumSubscription = SubscriptionStore.getPremiumSubscription();
    if (premiumSubscription != null) {
      priceChange = premiumSubscription.priceChange;
    }
    const isPriceIncrease =
      null != premiumSubscription &&
      set.has(premiumSubscription.status) &&
      null != priceChange &&
      priceChange.isInFuture &&
      priceChange.isPriceIncrease;
    if (isPriceIncrease) {
      c4 = true;
    }
  }
}
let items = [, ,];
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
const result = size.fileFinishedImporting(
  "modules/premium/native/google_play_price_changes/GooglePlayPriceChangeStore.tsx",
);

export default googlePlayPriceChangeStore;
