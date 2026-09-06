// === Module 11522: apexExperiment ===

// Module 11522 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

const obj = { 1: null, 2: { enabled: true, verticalScrollEnabled: false, loopingEnabled: false, ctaTimerMilliSeconds: 3000, rewardTimerSeconds: 15, orbAmount: 50 }, 3: { enabled: true, verticalScrollEnabled: false, loopingEnabled: true, ctaTimerMilliSeconds: 3000, rewardTimerSeconds: 15, orbAmount: 50 }, 4: { enabled: true, verticalScrollEnabled: false, loopingEnabled: false, ctaTimerMilliSeconds: 3000, rewardTimerSeconds: 15, orbAmount: 30 }, 5: { enabled: true, verticalScrollEnabled: false, loopingEnabled: false, ctaTimerMilliSeconds: 0, rewardTimerSeconds: 15, orbAmount: 50 }, 6: { enabled: true, verticalScrollEnabled: false, loopingEnabled: false, ctaTimerMilliSeconds: 3000, rewardTimerSeconds: 25, orbAmount: 50 }, 7: { enabled: true, verticalScrollEnabled: true, loopingEnabled: false, ctaTimerMilliSeconds: 3000, rewardTimerSeconds: 15, orbAmount: 50 }, 8: { enabled: true, verticalScrollEnabled: true, loopingEnabled: true, ctaTimerMilliSeconds: 3000, rewardTimerSeconds: 15, orbAmount: 50 }, 9: { enabled: true, verticalScrollEnabled: true, loopingEnabled: false, ctaTimerMilliSeconds: 3000, rewardTimerSeconds: 15, orbAmount: 30 }, 10: { enabled: true, verticalScrollEnabled: true, loopingEnabled: false, ctaTimerMilliSeconds: 0, rewardTimerSeconds: 15, orbAmount: 50 } };
obj[10] = { enabled: true, verticalScrollEnabled: true, loopingEnabled: false, ctaTimerMilliSeconds: 3000, rewardTimerSeconds: 25, orbAmount: 50 };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-05-bounties-stage-1", kind: "user", defaultConfig: { enabled: false, verticalScrollEnabled: false, loopingEnabled: false, ctaTimerMilliSeconds: 3000, rewardTimerSeconds: 15, orbAmount: 50 }, variations: obj });
const result = set.fileFinishedImporting("modules/quests/experiments/BountiesStage1Experiment.tsx");

export const BountiesStage1Experiment = apexExperiment;