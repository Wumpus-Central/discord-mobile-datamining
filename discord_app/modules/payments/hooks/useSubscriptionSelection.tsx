// discord_app/modules/payments/hooks/useSubscriptionSelection.tsx
import c from "../../../../_runtime/00576_c.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/payments/hooks/useSubscriptionSelection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(3);
      [tmp3, tmp4] = noop.useState(undefined);
      const tmp2 = _slicedToArray(noop.useState(undefined), 2);
      [tmp6, tmp7] = noop.useState(undefined);
      if (cResult[0] === tmp6) {
        if (cResult[1] === tmp3) {
          let tmp8 = cResult[2];
        }
        return tmp8;
      }
      const obj2 = { selectedSkuId: tmp3, setSelectedSkuId: tmp4, selectedPlanId: tmp6, setSelectedPlanId: tmp7 };
      cResult[0] = tmp6;
      cResult[1] = tmp3;
      cResult[2] = obj2;
      tmp8 = obj2;
    }
  : () => {
      [tmp2, tmp3] = noop.useState(undefined);
      const tmp4 = _slicedToArray(noop.useState(undefined), 2);
      return { selectedSkuId: tmp2, setSelectedSkuId: tmp3, selectedPlanId: tmp4[0], setSelectedPlanId: tmp4[1] };
    };
