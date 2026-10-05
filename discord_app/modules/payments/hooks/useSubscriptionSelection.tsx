// discord_app/modules/payments/hooks/useSubscriptionSelection.tsx
import react2 from "../../../../_runtime/00576_react.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp3;
      let tmp4;
      let tmp6;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(3);
      [tmp3, tmp4] = react.useState(undefined);
      _slicedToArray(react.useState(undefined), 2);
      [tmp6, tmp7] = react.useState(undefined);
      _slicedToArray(react.useState(undefined), 2);
      if (cResult[0] === tmp6) {
        let tmp8;
        if (cResult[1] === tmp3) {
          tmp8 = cResult[2];
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
      let tmp2;
      let tmp3;
      [tmp2, tmp3] = react.useState(undefined);
      _slicedToArray(react.useState(undefined), 2);
      const tmp4 = _slicedToArray(react.useState(undefined), 2);
      return { selectedSkuId: tmp2, setSelectedSkuId: tmp3, selectedPlanId: tmp4[0], setSelectedPlanId: tmp4[1] };
    };
const result = size.fileFinishedImporting("modules/payments/hooks/useSubscriptionSelection.tsx");

export default tmp2;
