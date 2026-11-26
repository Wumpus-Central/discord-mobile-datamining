// === Module 16685: MobileQuestDockClosedStateExperiment ===

// Module 16685 (MobileQuestDockClosedStateExperiment)
import ApexExperiment from "ApexExperiment" /* 1451 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-11-mobile-quest-bar-closed-state", kind: "user", defaultConfig: { autoCloseEnabled: true }, variations: { 0: { autoCloseEnabled: true }, 1: { autoCloseEnabled: false } } });
const result = size.fileFinishedImporting("modules/quests/experiments/MobileQuestDockClosedStateExperiment.tsx");

export const MobileQuestDockClosedStateExperiment = apexExperiment;