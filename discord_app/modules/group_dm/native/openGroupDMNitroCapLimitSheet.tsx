// === Module 11297: openGroupDMNitroCapLimitSheet ===

// Module 11297 (openGroupDMNitroCapLimitSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11298, dependencyMap.paths), "GroupDMNitroCapLimitSheet", { location });
};