// === Module 10953: useToggleOnIAPSuccess ===

// Module 10953 (useToggleOnIAPSuccess)
import DispatcherDefault from "Dispatcher" /* 573 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/subscription/useToggleOnIAPSuccess.tsx");

export default function useToggleOnIAPSuccess() {
  function toggleFlip() {
    importDefault((arg0) => !arg0);
  }
  [tmp2, importDefault] = noop.useState(false);
  const effect = noop.useEffect(() => {
    const subscription = DispatcherDefault.subscribe("IAP_PURCHASE_PRODUCT_SUCCESS", toggleFlip);
    return () => {
      require("Dispatcher").unsubscribe("IAP_PURCHASE_PRODUCT_SUCCESS", closure_1_1);
    };
  }, []);
  return tmp2;
};