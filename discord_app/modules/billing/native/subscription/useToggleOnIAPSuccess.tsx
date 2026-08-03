// === Module 7326: useToggleOnIAPSuccess ===

// Module 7326 (useToggleOnIAPSuccess)
import _slicedToArray from "_slicedToArray";
import noop from "noop";

const result = require("dispatcher").fileFinishedImporting("modules/billing/native/subscription/useToggleOnIAPSuccess.tsx");

export default function useToggleOnIAPSuccess() {
  let importDefault;
  let tmp2;
  function toggleFlip() {
    callback((arg0) => !arg0);
  }
  [tmp2, importDefault] = callback(React.useState(false), 2);
  const effect = React.useEffect(() => {
    const subscription = outer1_0(toggleFlip[2]).subscribe("IAP_PURCHASE_PRODUCT_SUCCESS", toggleFlip);
    return () => {
      outer1_0(outer1_1[2]).unsubscribe("IAP_PURCHASE_PRODUCT_SUCCESS", closure_1);
    };
  }, []);
  return tmp2;
};