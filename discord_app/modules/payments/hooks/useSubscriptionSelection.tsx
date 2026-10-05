// === Module 10552: useSubscriptionSelection ===

// Module 10552 (useSubscriptionSelection)
import react2 from "react" /* 576 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
  let tmp2;
  let tmp3;
  [tmp2, tmp3] = react.useState(undefined);
  _slicedToArray(react.useState(undefined), 2);
  const tmp4 = _slicedToArray(react.useState(undefined), 2);
  return { selectedSkuId: tmp2, setSelectedSkuId: tmp3, selectedPlanId: tmp4[0], setSelectedPlanId: tmp4[1] };
});
const result = size.fileFinishedImporting("modules/payments/hooks/useSubscriptionSelection.tsx");

export default tmp2;