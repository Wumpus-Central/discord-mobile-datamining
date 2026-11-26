// === Module 12162: showExecutedApplicationCommandPopout ===

// Module 12162 (showExecutedApplicationCommandPopout)
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(12163, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};