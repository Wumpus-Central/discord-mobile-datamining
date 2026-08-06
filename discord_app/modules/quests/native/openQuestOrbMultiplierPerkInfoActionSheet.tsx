// discord_app/modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx
import { asyncRequireImpl } from "../../../../_runtime/01988_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  let obj = ACTION_SHEET_HEIGHT_HALF;
  obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequireImpl(14319, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};