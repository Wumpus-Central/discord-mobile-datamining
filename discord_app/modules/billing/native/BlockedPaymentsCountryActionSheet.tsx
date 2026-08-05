// discord_app/modules/billing/native/BlockedPaymentsCountryActionSheet.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Background").fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryActionSheet.tsx");

export default function BlockedPaymentsCountryActionSheet() {
  const obj = { children: null };
  obj[0] = jsx(require("BlockedPaymentsCountryDisplay.tsx"), {});
  return jsx(require("../../../design/components/Sheet/native/BottomSheet.native.tsx") /* Background */.BottomSheet, { children: null });
};