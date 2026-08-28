// === Module 10858: apexExperiment ===

// Module 10858 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-08-bounties-mobile-quest-bar", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/quests/experiments/BountiesMobileQuestBarExperiment.tsx");

export const BountiesMobileQuestBarExperiment = apexExperiment;