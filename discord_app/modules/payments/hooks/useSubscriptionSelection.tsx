// discord_app/modules/payments/hooks/useSubscriptionSelection.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting("modules/payments/hooks/useSubscriptionSelection.tsx");

export default function useSubscriptionSelection() {
  [tmp2, tmp3] = _slicedToArray(noop.useState(undefined), 2);
  const tmp4 = _slicedToArray(noop.useState(undefined), 2);
  return { selectedSkuId: tmp2, setSelectedSkuId: tmp3, selectedPlanId: tmp4[0], setSelectedPlanId: tmp4[1] };
}
