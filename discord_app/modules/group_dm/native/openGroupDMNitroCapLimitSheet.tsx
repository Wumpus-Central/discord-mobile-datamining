// === Module 12103: openGroupDMNitroCapLimitSheet ===

// Module 12103 (openGroupDMNitroCapLimitSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12104, dependencyMap.paths), "GroupDMNitroCapLimitSheet", { location });
};