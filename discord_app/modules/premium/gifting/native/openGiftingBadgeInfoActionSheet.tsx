// === Module 11154: openGiftingBadgeInfoActionSheet ===

// Module 11154 (openGiftingBadgeInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11155, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};