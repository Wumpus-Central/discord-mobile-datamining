// discord_app/modules/application_commands/native/showExecutedApplicationCommandPopout.tsx
import { asyncRequireImpl } from "../../../../_runtime/02007_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ACTION_SHEET_HEIGHT_HALF;
  obj.openLazy(asyncRequireImpl(10806, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};