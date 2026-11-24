// discord_app/modules/quests/experiments/MobileQuestDockClosedStateExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-11-mobile-quest-bar-closed-state",
  kind: "user",
  defaultConfig: { autoCloseEnabled: true },
  variations: { 0: { autoCloseEnabled: true }, 1: { autoCloseEnabled: false } },
});
const result = size.fileFinishedImporting("modules/quests/experiments/MobileQuestDockClosedStateExperiment.tsx");

export const MobileQuestDockClosedStateExperiment = apexExperiment;
