// === Module 15271: ApplePurchasesActionCreators ===

// Module 15271 (ApplePurchasesActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import BillingUtils from "BillingUtils" /* 4827 */;
import _mod14453 from "module_14453" /* 14453 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/billing/native/ApplePurchasesActionCreators.tsx");

export function fetchApplePurchases() {
  if (null == cleanupPromise) {
    DispatcherDefault.dispatch({ type: "APPLE_PURCHASES_FETCH_START" });
    const availablePurchases = _mod14453.getAvailablePurchases({ onlyIncludeActiveItems: false });
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
}