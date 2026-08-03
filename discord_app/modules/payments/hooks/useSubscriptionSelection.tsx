// === Module 8951: useSubscriptionSelection ===

// Module 8951 (useSubscriptionSelection)
import _slicedToArray from "_slicedToArray";
import noop from "noop";

const result = require("set").fileFinishedImporting("modules/payments/hooks/useSubscriptionSelection.tsx");

export default function useSubscriptionSelection() {
  let tmp2;
  let tmp3;
  [tmp2, tmp3] = callback(React.useState(undefined), 2);
  const tmp4 = callback(React.useState(undefined), 2);
  return { selectedSkuId: tmp2, setSelectedSkuId: tmp3, selectedPlanId: tmp4[0], setSelectedPlanId: tmp4[1] };
};