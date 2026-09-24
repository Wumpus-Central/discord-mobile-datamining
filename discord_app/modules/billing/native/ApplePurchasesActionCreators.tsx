// discord_app/modules/billing/native/ApplePurchasesActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import BillingUtils from "../../../utils/BillingUtils.tsx";
import _mod11405 from "../../../../_runtime/metro/11405__.js";
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/billing/native/ApplePurchasesActionCreators.tsx");

export const fetchApplePurchases = function fetchApplePurchases() {
  if (null == cleanupPromise) {
    DispatcherDefault.dispatch({ type: "APPLE_PURCHASES_FETCH_START" });
    const availablePurchases = _mod11405.getAvailablePurchases({ onlyIncludeActiveItems: false });
    const nextPromise = availablePurchases.then((purchases) => {
      DispatcherDefault.dispatch({ type: "APPLE_PURCHASES_FETCH_SUCCESS", purchases });
      return true;
    });
    cleanupPromise = availablePurchases
      .then((purchases) => {
        DispatcherDefault.dispatch({ type: "APPLE_PURCHASES_FETCH_SUCCESS", purchases });
        return true;
      })
      .catch((error) => {
        const result = BillingUtils.captureBillingException(error);
        DispatcherDefault.dispatch({ type: "APPLE_PURCHASES_FETCH_FAILURE" });
        return false;
      })
      .finally(() => {
        c3 = null;
      });
    const catchPromise = availablePurchases
      .then((purchases) => {
        DispatcherDefault.dispatch({ type: "APPLE_PURCHASES_FETCH_SUCCESS", purchases });
        return true;
      })
      .catch((error) => {
        const result = BillingUtils.captureBillingException(error);
        DispatcherDefault.dispatch({ type: "APPLE_PURCHASES_FETCH_FAILURE" });
        return false;
      });
  }
  return cleanupPromise;
};
