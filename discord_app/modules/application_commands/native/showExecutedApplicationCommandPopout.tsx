// === Module 9596: showExecutedApplicationCommandPopout ===

// Module 9596 (showExecutedApplicationCommandPopout)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(9597, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};