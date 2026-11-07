// === Module 10273: showExecutedApplicationCommandPopout ===

// Module 10273 (showExecutedApplicationCommandPopout)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(10274, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};