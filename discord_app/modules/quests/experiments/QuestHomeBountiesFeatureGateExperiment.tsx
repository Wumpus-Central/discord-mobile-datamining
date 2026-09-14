// discord_app/modules/quests/experiments/QuestHomeBountiesFeatureGateExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-09-quest-home-bounties-feature-gate",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/QuestHomeBountiesFeatureGateExperiment.tsx");

export const QuestHomeBountiesFeatureGateExperiment = apexExperiment;
