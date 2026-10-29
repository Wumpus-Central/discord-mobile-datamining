// discord_app/modules/billing/native/ApplePurchasesActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import BillingUtils from "../../../utils/BillingUtils.tsx";
import _mod14382 from "../../../../_runtime/metro/14382__.js";
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/billing/native/ApplePurchasesActionCreators.tsx");

export function fetchApplePurchases() {
  if (null == cleanupPromise) {
    DispatcherDefault.dispatch({ type: "APPLE_PURCHASES_FETCH_START" });
    const availablePurchases = _mod14382.getAvailablePurchases({ onlyIncludeActiveItems: false });
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
}
