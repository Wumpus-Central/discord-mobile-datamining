// === Module 7729: openBlockedPaymentsCountryActionSheet ===

// Module 7729 (openBlockedPaymentsCountryActionSheet)
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;

const result = obj132.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(7730, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};