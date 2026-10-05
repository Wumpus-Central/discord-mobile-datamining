// === Module 13193: ApplePurchasesActionCreators ===

// Module 13193 (ApplePurchasesActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import BillingUtils from "BillingUtils" /* 4543 */;
import _mod10785 from "module_10785" /* 10785 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/billing/native/ApplePurchasesActionCreators.tsx");

export const fetchApplePurchases = function fetchApplePurchases() {
  if (null == cleanupPromise) {
    DispatcherDefault.dispatch({ type: "APPLE_PURCHASES_FETCH_START" });
    const availablePurchases = _mod10785.getAvailablePurchases({ onlyIncludeActiveItems: false });
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