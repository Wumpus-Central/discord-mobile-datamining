// discord_app/modules/quests/native/openQuestAccessSuspendedBottomSheet.tsx
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const QuestAccessSuspendedBottomSheet = "QuestAccessSuspendedBottomSheet";
const result = size.fileFinishedImporting("modules/quests/native/openQuestAccessSuspendedBottomSheet.tsx");

export default function openQuestAccessSuspendedBottomSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14937, dependencyMap.paths), QuestAccessSuspendedBottomSheet, {});
}
export const ACTION_SHEET_KEY = "QuestAccessSuspendedBottomSheet";
