// === Module 10805: showExecutedApplicationCommandPopout ===

// Module 10805 (showExecutedApplicationCommandPopout)
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;

const result = obj132.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj.openLazy(asyncRequireImpl(10806, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};