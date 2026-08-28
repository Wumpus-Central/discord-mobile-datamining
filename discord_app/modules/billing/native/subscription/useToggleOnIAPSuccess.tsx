// === Module 10519: useToggleOnIAPSuccess ===

// Module 10519 (useToggleOnIAPSuccess)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("modules/billing/native/subscription/useToggleOnIAPSuccess.tsx");

export default function useToggleOnIAPSuccess() {
  function toggleFlip() {
    callback((arg0) => !arg0);
  }
  [tmp2, importDefault] = callback(React.useState(false), 2);
  const effect = React.useEffect(() => {
    const subscription = closure_1_0(toggleFlip[2]).subscribe("IAP_PURCHASE_PRODUCT_SUCCESS", toggleFlip);
    return () => {
      closure_1_0(closure_1_1[2]).unsubscribe("IAP_PURCHASE_PRODUCT_SUCCESS", closure_1);
    };
  }, []);
  return tmp2;
};