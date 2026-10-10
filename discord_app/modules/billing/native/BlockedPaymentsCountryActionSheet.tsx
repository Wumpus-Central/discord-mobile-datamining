// === Module 10495: BlockedPaymentsCountryActionSheet ===

// Module 10495 (BlockedPaymentsCountryActionSheet)
import c from "c" /* 576 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6839 */;
import BlockedPaymentsCountryDisplayDefault from "BlockedPaymentsCountryDisplay" /* 10496 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function BlockedPaymentsCountryActionSheet() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { children: jsx(BlockedPaymentsCountryDisplayDefault, {}) };
    const tmp7 = jsx(Sheet_BottomSheet.BottomSheet, { children: jsx(BlockedPaymentsCountryDisplayDefault, {}) });
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function BlockedPaymentsCountryActionSheet() {
  return jsx(Sheet_BottomSheet.BottomSheet, { children: jsx(BlockedPaymentsCountryDisplayDefault, {}) });
});