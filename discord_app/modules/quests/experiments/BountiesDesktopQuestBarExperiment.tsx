// === Module 12972: BountiesDesktopQuestBarExperiment ===

// Module 12972 (BountiesDesktopQuestBarExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-10-bounties-desktop-quest-bar", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/BountiesDesktopQuestBarExperiment.tsx");

export const BountiesDesktopQuestBarExperiment = apexExperiment;