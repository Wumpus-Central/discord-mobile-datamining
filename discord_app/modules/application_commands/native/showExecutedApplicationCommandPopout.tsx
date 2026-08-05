// discord_app/modules/application_commands/native/showExecutedApplicationCommandPopout.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = importDefault(4253);
  obj.openLazy(require(1959) /* asyncRequireImpl */(10996, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};