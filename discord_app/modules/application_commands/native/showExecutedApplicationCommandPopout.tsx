// === Module 9644: showExecutedApplicationCommandPopout ===

// Module 9644 (showExecutedApplicationCommandPopout)
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(9645, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};