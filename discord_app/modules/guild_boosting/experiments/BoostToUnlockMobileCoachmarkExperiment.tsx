// === Module 12754: BoostToUnlockMobileCoachmarkExperiment ===

// Module 12754 (BoostToUnlockMobileCoachmarkExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1435 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_boosting/experiments/BoostToUnlockMobileCoachmarkExperiment.tsx");

export default apex_ApexExperimentDefault({ name: "2026-03-boost-to-unlock-mobile-coachmark", kind: "user", defaultConfig: { showCoachmark: false }, variations: { 0: { showCoachmark: false }, 1: { showCoachmark: true } } });