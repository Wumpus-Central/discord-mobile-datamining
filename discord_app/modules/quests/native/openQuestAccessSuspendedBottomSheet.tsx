// discord_app/modules/quests/native/openQuestAccessSuspendedBottomSheet.tsx
import { asyncRequireImpl } from "../../../../_runtime/01988_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";
const QuestAccessSuspendedBottomSheet = "QuestAccessSuspendedBottomSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/openQuestAccessSuspendedBottomSheet.tsx");

export default function openQuestAccessSuspendedBottomSheet() {
  ACTION_SHEET_HEIGHT_HALF.openLazy(asyncRequireImpl(14361, dependencyMap.paths), QuestAccessSuspendedBottomSheet, {});
};
export const ACTION_SHEET_KEY = "QuestAccessSuspendedBottomSheet";