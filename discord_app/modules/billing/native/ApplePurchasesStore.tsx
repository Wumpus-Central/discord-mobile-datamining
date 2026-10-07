// discord_app/modules/billing/native/ApplePurchasesStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";

let c0 = null;
let c1 = false;
const Store = initializeDefault.Store;
class ApplePurchasesStore extends Store {}
const prototype = ApplePurchasesStore.prototype;
prototype["hasOwnership"] = function hasOwnership(prop) {
  closure_0 = prop;
  let someResult = null == prop;
  if (!someResult) {
    someResult = null == _null;
  }
  if (!someResult) {
    someResult = _null.some(
      (originalTransactionIdentifierIOS) =>
        String(originalTransactionIdentifierIOS.originalTransactionIdentifierIOS) === String(closure_0),
    );
  }
  return someResult;
};
prototype["getPurchases"] = function getPurchases() {
  return c0;
};
prototype["isFetching"] = function isFetching() {
  return c1;
};
ApplePurchasesStore.displayName = "ApplePurchasesStore";
const applePurchasesStore = new ApplePurchasesStore(DispatcherDefault, {
  APPLE_PURCHASES_FETCH_START: function handleFetchStart() {
    c1 = true;
  },
  APPLE_PURCHASES_FETCH_SUCCESS: function handleFetchSuccess(purchases) {
    purchases = purchases.purchases;
    c1 = false;
  },
  APPLE_PURCHASES_FETCH_FAILURE: function handleFetchFailure() {
    c1 = false;
  },
  LOGOUT: function handleLogout() {
    c0 = null;
    c1 = false;
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/ApplePurchasesStore.tsx");

export default applePurchasesStore;
