// discord_app/modules/application_commands/native/showExecutedApplicationCommandPopout.tsx
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/application_commands/native/showExecutedApplicationCommandPopout.tsx",
);

export default function showExecutedApplicationCommandPopout(messageId) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(11257, dependencyMap.paths);
  openLazy(tmp2, "ExecutedCommandPopout:" + messageId.messageId, messageId);
}
