// === Module 9360: openGiftingBadgeInfoActionSheet ===

// Module 9360 (openGiftingBadgeInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(9361, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};