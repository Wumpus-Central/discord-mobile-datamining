// === Module 10470: openBlockedPaymentsCountryActionSheet ===

// Module 10470 (openBlockedPaymentsCountryActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10471, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};