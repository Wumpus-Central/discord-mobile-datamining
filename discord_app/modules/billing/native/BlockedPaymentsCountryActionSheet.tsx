// === Module 7730: BlockedPaymentsCountryActionSheet ===

// Module 7730 (BlockedPaymentsCountryActionSheet)
import noopAll from "noop" /* 19 */;
import Background from "Background" /* 6950 */;
import BlockedPaymentsCountryDisplayDefault from "BlockedPaymentsCountryDisplay" /* 7689 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryActionSheet.tsx");

export default function BlockedPaymentsCountryActionSheet() {
  return jsx(Background.BottomSheet, { children: jsx(BlockedPaymentsCountryDisplayDefault, {}) });
};