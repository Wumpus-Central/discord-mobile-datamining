// === Module 11790: openGroupDMNitroCapLimitSheet ===

// Module 11790 (openGroupDMNitroCapLimitSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11791, dependencyMap.paths), "GroupDMNitroCapLimitSheet", { location });
};