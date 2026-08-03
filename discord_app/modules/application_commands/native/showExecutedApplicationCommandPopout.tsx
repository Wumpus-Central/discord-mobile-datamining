// === Module 9526: showExecutedApplicationCommandPopout ===

// Module 9526 (showExecutedApplicationCommandPopout)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = importDefault(4161);
  obj.openLazy(require(1959) /* asyncRequireImpl */(9527, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};