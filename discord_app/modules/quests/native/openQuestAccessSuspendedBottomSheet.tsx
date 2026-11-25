// === Module 16659: openQuestAccessSuspendedBottomSheet ===

// Module 16659 (openQuestAccessSuspendedBottomSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const QuestAccessSuspendedBottomSheet = "QuestAccessSuspendedBottomSheet";
const result = size.fileFinishedImporting("modules/quests/native/openQuestAccessSuspendedBottomSheet.tsx");

export default function openQuestAccessSuspendedBottomSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16660, dependencyMap.paths), QuestAccessSuspendedBottomSheet, {});
};
export const ACTION_SHEET_KEY = "QuestAccessSuspendedBottomSheet";