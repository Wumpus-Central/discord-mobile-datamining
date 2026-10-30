// discord_app/modules/application_commands/native/showExecutedApplicationCommandPopout.tsx
import asyncRequireImpl from "../../../../_runtime/01995_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/application_commands/native/showExecutedApplicationCommandPopout.tsx",
);

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(10133, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
}
