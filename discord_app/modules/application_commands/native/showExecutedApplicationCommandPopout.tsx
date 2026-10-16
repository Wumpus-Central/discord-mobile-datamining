// === Module 9879: showExecutedApplicationCommandPopout ===

// Module 9879 (showExecutedApplicationCommandPopout)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(9880, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};