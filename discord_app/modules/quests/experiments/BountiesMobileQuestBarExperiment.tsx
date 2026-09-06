// === Module 11283: BountiesMobileQuestBarExperiment ===

// Module 11283 (BountiesMobileQuestBarExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-08-bounties-mobile-quest-bar", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/BountiesMobileQuestBarExperiment.tsx");

export const BountiesMobileQuestBarExperiment = apexExperiment;