// discord_app/modules/quests/native/openQuestAccessSuspendedBottomSheet.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const QuestAccessSuspendedBottomSheet = "QuestAccessSuspendedBottomSheet";
const result = size.fileFinishedImporting("modules/quests/native/openQuestAccessSuspendedBottomSheet.tsx");

export default function openQuestAccessSuspendedBottomSheet() {
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(15119, dependencyMap.paths),
    QuestAccessSuspendedBottomSheet,
    {},
  );
}
export const ACTION_SHEET_KEY = "QuestAccessSuspendedBottomSheet";
