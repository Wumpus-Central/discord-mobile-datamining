// === Module 7588: openBlockedPaymentsCountryActionSheet ===

// Module 7588 (openBlockedPaymentsCountryActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4347 */;

const result = set.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(7589, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};