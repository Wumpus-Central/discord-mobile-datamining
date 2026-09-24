// discord_app/modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx
import asyncRequireImpl from "../../../../_runtime/01980_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(15503, dependencyMap.paths),
    "QuestOrbMultiplierPerkInfoActionSheet",
    { multiplier, orbMultiplierEligibility },
  );
}
