// discord_app/modules/billing/native/BlockedPaymentsCountryActionSheet.tsx
import Sheet_BottomSheet from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import BlockedPaymentsCountryDisplayDefault from "BlockedPaymentsCountryDisplay.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryActionSheet.tsx");

export default function BlockedPaymentsCountryActionSheet() {
  return jsx(Sheet_BottomSheet.BottomSheet, { children: jsx(BlockedPaymentsCountryDisplayDefault, {}) });
}
