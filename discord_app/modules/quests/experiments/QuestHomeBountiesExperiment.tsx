// === Module 11523: QuestHomeBountiesExperiment ===

// Module 11523 (QuestHomeBountiesExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-03-quest-home-bounties", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/QuestHomeBountiesExperiment.tsx");

export const QuestHomeBountiesExperiment = apexExperiment;