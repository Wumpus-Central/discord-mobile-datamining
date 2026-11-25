// === Module 12055: openGroupDMNitroCapLimitSheet ===

// Module 12055 (openGroupDMNitroCapLimitSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12056, dependencyMap.paths), "GroupDMNitroCapLimitSheet", { location });
};