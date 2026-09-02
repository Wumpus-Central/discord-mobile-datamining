// discord_app/modules/quests/native/openQuestAccessSuspendedBottomSheet.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/02008_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";

const QuestAccessSuspendedBottomSheet = "QuestAccessSuspendedBottomSheet";
const result = set.fileFinishedImporting("modules/quests/native/openQuestAccessSuspendedBottomSheet.tsx");

export default function openQuestAccessSuspendedBottomSheet() {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(
    asyncRequireImpl(14946, dependencyMap.paths),
    QuestAccessSuspendedBottomSheet,
    {},
  );
}
export const ACTION_SHEET_KEY = "QuestAccessSuspendedBottomSheet";
