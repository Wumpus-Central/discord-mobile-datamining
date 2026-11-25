// === Module 16727: QuestBarExpandRateV1Experiment ===

// Module 16727 (QuestBarExpandRateV1Experiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-11-quest-bar-expand-rate-asset-cta", kind: "user", defaultConfig: { squareAsset: "default", rewardMessage: "generic" }, variations: { 0: { squareAsset: "default", rewardMessage: "generic" }, 1: { squareAsset: "reward", rewardMessage: "generic" }, 2: { squareAsset: "reward", rewardMessage: "orbAmount" }, 3: { squareAsset: "reward", rewardMessage: "bountyIllustration" }, 4: { squareAsset: "advertiser", rewardMessage: "orbAmount" }, 5: { squareAsset: "advertiser", rewardMessage: "bountyIllustration" } } });
const result = size.fileFinishedImporting("modules/quests/experiments/QuestBarExpandRateV1Experiment.tsx");

export function useQuestBarExpandRateV1Config(QUESTS_BAR_MOBILE) {
  return closure_0.useConfig({ location: QUESTS_BAR_MOBILE });
}