// === Module 12436: showModerateUserActionSheet ===

// Module 12436 (showModerateUserActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12437, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};