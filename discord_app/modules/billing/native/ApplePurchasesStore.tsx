// === Module 13192: ApplePurchasesStore ===

// Module 13192 (ApplePurchasesStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const React = null;
let c1 = false;
const Store = get_initializedDefault.Store;
class ApplePurchasesStore extends Store {
  hasOwnership(prop) {
    let closure_0 = prop;
    const someResult = null == prop || null == _null || _null.some((originalTransactionIdentifierIOS) => {
      const StringResult = String(originalTransactionIdentifierIOS.originalTransactionIdentifierIOS);
      return StringResult === String(closure_0);
    });
    return someResult;
  }
  getPurchases() {
    return c0;
  }
  isFetching() {
    return c1;
  }
}
const prototype = ApplePurchasesStore.prototype;
ApplePurchasesStore.displayName = "ApplePurchasesStore";
const obj = {
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
    let c0 = null;
    c1 = false;
  }
};
const applePurchasesStore = new ApplePurchasesStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/billing/native/ApplePurchasesStore.tsx");

export default applePurchasesStore;