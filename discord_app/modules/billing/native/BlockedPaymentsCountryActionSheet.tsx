// discord_app/modules/billing/native/BlockedPaymentsCountryActionSheet.tsx
import "noop";
import { jsx } from "jsxProd";
import { Background } from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import { BlockedPaymentsCountryDisplay } from "BlockedPaymentsCountryDisplay.tsx";

const require = arg1;
const result = require("Background").fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryActionSheet.tsx");

export default function BlockedPaymentsCountryActionSheet() {
  const obj = { children: null };
  obj[0] = jsx(BlockedPaymentsCountryDisplay, {});
  return jsx(Background.BottomSheet, { children: null });
};