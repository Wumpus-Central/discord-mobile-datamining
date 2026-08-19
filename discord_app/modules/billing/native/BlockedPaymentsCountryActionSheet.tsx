// discord_app/modules/billing/native/BlockedPaymentsCountryActionSheet.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import Background from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import BlockedPaymentsCountryDisplayDefault from "BlockedPaymentsCountryDisplay.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryActionSheet.tsx");

export default function BlockedPaymentsCountryActionSheet() {
  return jsx(Background.BottomSheet, { children: jsx(BlockedPaymentsCountryDisplayDefault, {}) });
};