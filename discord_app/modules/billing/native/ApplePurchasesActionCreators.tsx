// === Module 12911: ApplePurchasesActionCreators ===

// Module 12911 (ApplePurchasesActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import BillingUtils from "BillingUtils" /* 4500 */;
import _mod10503 from "module_10503" /* 10503 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/billing/native/ApplePurchasesActionCreators.tsx");

export const fetchApplePurchases = function fetchApplePurchases() {
  if (null == cleanupPromise) {
    DispatcherDefault.dispatch({ type: "APPLE_PURCHASES_FETCH_START" });
    const availablePurchases = _mod10503.getAvailablePurchases({ onlyIncludeActiveItems: false });
    const nextPromise = availablePurchases.then((purchases) => {
      DispatcherDefault.dispatch({ type: "APPLE_PURCHASES_FETCH_SUCCESS", purchases });
      return true;
    });
    cleanupPromise = availablePurchases.then((purchases) => {
      DispatcherDefault.dispatch({ type: "APPLE_PURCHASES_FETCH_SUCCESS", purchases });
      return true;
    }).catch((error) => {
      const result = BillingUtils.captureBillingException(error);
      DispatcherDefault.dispatch({ type: "APPLE_PURCHASES_FETCH_FAILURE" });
      return false;
    }).finally(() => {
      c3 = null;
    });
    const catchPromise = availablePurchases.then((purchases) => {
      DispatcherDefault.dispatch({ type: "APPLE_PURCHASES_FETCH_SUCCESS", purchases });
      return true;
    }).catch((error) => {
      const result = BillingUtils.captureBillingException(error);
      DispatcherDefault.dispatch({ type: "APPLE_PURCHASES_FETCH_FAILURE" });
      return false;
    });
  }
  return cleanupPromise;
};