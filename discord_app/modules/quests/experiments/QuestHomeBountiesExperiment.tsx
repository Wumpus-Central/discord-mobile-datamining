// === Module 10714: apexExperiment ===

// Module 10714 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-03-quest-home-bounties", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = obj132.fileFinishedImporting("modules/quests/experiments/QuestHomeBountiesExperiment.tsx");

export const QuestHomeBountiesExperiment = apexExperiment;