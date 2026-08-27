// === Module 8413: BlockedPaymentsCountryActionSheet ===

// Module 8413 (BlockedPaymentsCountryActionSheet)
import noopAll from "noop" /* 19 */;
import Background from "Background" /* 5574 */;
import BlockedPaymentsCountryDisplayDefault from "BlockedPaymentsCountryDisplay" /* 8414 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryActionSheet.tsx");

export default function BlockedPaymentsCountryActionSheet() {
  return jsx(Background.BottomSheet, { children: jsx(BlockedPaymentsCountryDisplayDefault, {}) });
};