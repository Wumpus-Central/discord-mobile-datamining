// === Module 10823: useSubscriptionSelection ===

// Module 10823 (useSubscriptionSelection)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/payments/hooks/useSubscriptionSelection.tsx");

export default function useSubscriptionSelection() {
  [tmp2, tmp3] = _slicedToArray(noop.useState(undefined), 2);
  const tmp4 = _slicedToArray(noop.useState(undefined), 2);
  return { selectedSkuId: tmp2, setSelectedSkuId: tmp3, selectedPlanId: tmp4[0], setSelectedPlanId: tmp4[1] };
};