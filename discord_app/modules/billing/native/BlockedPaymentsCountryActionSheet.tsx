// === Module 11093: BlockedPaymentsCountryActionSheet ===

// Module 11093 (BlockedPaymentsCountryActionSheet)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6645 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    BottomSheet = Sheet_BottomSheet.BottomSheet;
    const tmp7 = <BottomSheet>{null}</BottomSheet>;
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  return <BottomSheet>{null}</BottomSheet>;
});
const result = size.fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryActionSheet.tsx");

export default tmp3;