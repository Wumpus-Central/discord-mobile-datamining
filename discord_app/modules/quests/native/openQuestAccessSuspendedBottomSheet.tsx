// === Module 17407: openQuestAccessSuspendedBottomSheet ===

// Module 17407 (openQuestAccessSuspendedBottomSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const QuestAccessSuspendedBottomSheet = "QuestAccessSuspendedBottomSheet";
const result = size.fileFinishedImporting("modules/quests/native/openQuestAccessSuspendedBottomSheet.tsx");

export default function openQuestAccessSuspendedBottomSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17408, dependencyMap.paths), QuestAccessSuspendedBottomSheet, {});
};
export const ACTION_SHEET_KEY = "QuestAccessSuspendedBottomSheet";