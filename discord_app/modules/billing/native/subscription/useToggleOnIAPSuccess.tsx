// discord_app/modules/billing/native/subscription/useToggleOnIAPSuccess.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";

const result = require("obj132").fileFinishedImporting("modules/billing/native/subscription/useToggleOnIAPSuccess.tsx");

export default function useToggleOnIAPSuccess() {
  function toggleFlip() {
    callback((arg0) => !arg0);
  }
  [tmp2, importDefault] = callback(React.useState(false), 2);
  const effect = React.useEffect(() => {
    const subscription = importDefault(toggleFlip[2]).subscribe("IAP_PURCHASE_PRODUCT_SUCCESS", toggleFlip);
    return () => {
      closure_1_0(toggleFlip[2]).unsubscribe("IAP_PURCHASE_PRODUCT_SUCCESS", closure_1);
    };
  }, []);
  return tmp2;
};