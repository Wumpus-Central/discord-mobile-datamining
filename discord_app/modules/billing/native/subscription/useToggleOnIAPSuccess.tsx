// discord_app/modules/billing/native/subscription/useToggleOnIAPSuccess.tsx
import DispatcherDefault from "../../../../Dispatcher.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/subscription/useToggleOnIAPSuccess.tsx");

export default function useToggleOnIAPSuccess() {
  function toggleFlip() {
    importDefault((arg0) => !arg0);
  }
  [tmp2, importDefault] = _slicedToArray(noop.useState(false), 2);
  const effect = noop.useEffect(() => {
    const subscription = DispatcherDefault.subscribe("IAP_PURCHASE_PRODUCT_SUCCESS", toggleFlip);
    return () => {
      require("Dispatcher").unsubscribe("IAP_PURCHASE_PRODUCT_SUCCESS", closure_1_1);
    };
  }, []);
  return tmp2;
}
