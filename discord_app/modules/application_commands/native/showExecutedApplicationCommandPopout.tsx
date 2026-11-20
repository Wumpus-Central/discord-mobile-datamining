// === Module 10426: showExecutedApplicationCommandPopout ===

// Module 10426 (showExecutedApplicationCommandPopout)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(10427, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};