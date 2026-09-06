// === Module 11620: showExecutedApplicationCommandPopout ===

// Module 11620 (showExecutedApplicationCommandPopout)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(11621, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};