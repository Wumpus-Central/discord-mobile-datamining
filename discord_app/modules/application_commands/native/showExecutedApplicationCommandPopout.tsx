// discord_app/modules/application_commands/native/showExecutedApplicationCommandPopout.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = require("../../action_sheet/native/ActionSheetActionCreators.tsx");
  obj.openLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(10996, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};