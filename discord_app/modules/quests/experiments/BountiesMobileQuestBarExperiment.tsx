// === Module 11546: BountiesMobileQuestBarExperiment ===

// Module 11546 (BountiesMobileQuestBarExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { CONTROL: 0, [0]: "CONTROL", LOOP_SQUEEZED_BACK_APP_STORE_OVERLAY: 1, [1]: "LOOP_SQUEEZED_BACK_APP_STORE_OVERLAY", FIRST_TAP_APP_STORE_OVERLAY: 2, [2]: "FIRST_TAP_APP_STORE_OVERLAY", EVERY_PAUSE_APP_STORE_OVERLAY: 3, [3]: "EVERY_PAUSE_APP_STORE_OVERLAY" };
const obj2 = { ILLUSTRATION_1: "illustration1", ILLUSTRATION_2: "illustration2", ILLUSTRATION_3: "illustration3" };
const ILLUSTRATION_1 = obj2.ILLUSTRATION_1;
const obj3 = { name: "2026-08-bounties-mobile-quest-bar", kind: "user", defaultConfig: { enabled: false, illustration: ILLUSTRATION_1, ctrVariant: obj.CONTROL, hapticFeedbackOnRewardEarnedEnabled: false }, variations: null };
const obj4 = { 1: null, 2: { enabled: true, illustration: obj2.ILLUSTRATION_1, ctrVariant: obj.CONTROL, hapticFeedbackOnRewardEarnedEnabled: false }, 3: { enabled: true, illustration: obj2.ILLUSTRATION_2, ctrVariant: obj.CONTROL, hapticFeedbackOnRewardEarnedEnabled: false }, 4: { enabled: true, illustration: obj2.ILLUSTRATION_3, ctrVariant: obj.CONTROL, hapticFeedbackOnRewardEarnedEnabled: false }, 5: { enabled: true, illustration: ILLUSTRATION_1, ctrVariant: obj.FIRST_TAP_APP_STORE_OVERLAY, hapticFeedbackOnRewardEarnedEnabled: false }, 6: { enabled: true, illustration: ILLUSTRATION_1, ctrVariant: obj.EVERY_PAUSE_APP_STORE_OVERLAY, hapticFeedbackOnRewardEarnedEnabled: false }, 7: { enabled: true, illustration: ILLUSTRATION_1, ctrVariant: obj.LOOP_SQUEEZED_BACK_APP_STORE_OVERLAY, hapticFeedbackOnRewardEarnedEnabled: false } };
obj4[7] = { enabled: true, illustration: ILLUSTRATION_1, ctrVariant: obj.CONTROL, hapticFeedbackOnRewardEarnedEnabled: true };
obj3.variations = obj4;
const apexExperiment = ApexExperiment.createApexExperiment(obj3);
const result = size.fileFinishedImporting("modules/quests/experiments/BountiesMobileQuestBarExperiment.tsx");

export const BountiesMobileQuestBarCtrVariant = obj;
export const BountiesMobileQuestBarIllustration = obj2;
export const BountiesMobileQuestBarExperiment = apexExperiment;