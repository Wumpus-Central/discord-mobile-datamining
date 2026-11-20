// discord_app/modules/quests/experiments/QuestBarAndroidVideoExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-11-quest-bar-android-video",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting("modules/quests/experiments/QuestBarAndroidVideoExperiment.tsx");

export const QuestBarAndroidVideoExperiment = apexExperiment;
