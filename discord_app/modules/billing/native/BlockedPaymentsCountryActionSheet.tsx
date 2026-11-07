// === Module 11516: BlockedPaymentsCountryActionSheet ===

// Module 11516 (BlockedPaymentsCountryActionSheet)
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5388 */;
import BlockedPaymentsCountryDisplayDefault from "BlockedPaymentsCountryDisplay" /* 11517 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryActionSheet.tsx");

export default function BlockedPaymentsCountryActionSheet() {
  return jsx(Sheet_BottomSheet.BottomSheet, { children: jsx(BlockedPaymentsCountryDisplayDefault, {}) });
};