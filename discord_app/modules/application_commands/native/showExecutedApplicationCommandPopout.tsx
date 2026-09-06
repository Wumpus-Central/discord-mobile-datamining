// discord_app/modules/application_commands/native/showExecutedApplicationCommandPopout.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";

const result = set.fileFinishedImporting(
  "modules/application_commands/native/showExecutedApplicationCommandPopout.tsx",
);

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj.openLazy(asyncRequireImpl(11621, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
}
