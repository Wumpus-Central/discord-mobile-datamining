// === Module 16805: QuestBarAndroidVideoExperiment ===

// Module 16805 (QuestBarAndroidVideoExperiment)
import ApexExperiment from "ApexExperiment" /* 1451 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-11-quest-bar-android-video", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/quests/experiments/QuestBarAndroidVideoExperiment.tsx");

export const QuestBarAndroidVideoExperiment = apexExperiment;