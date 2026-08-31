// === Module 11081: useBountiesExperience ===

// Module 11081 (useBountiesExperience)
import set from "set" /* 2 */;
import apexExperiment from "apexExperiment" /* 11082 */;
import apexExperiment2 from "apexExperiment" /* 11083 */;
import apexExperiment3 from "apexExperiment" /* 11084 */;

const result = set.fileFinishedImporting("modules/quests/experiments/useBountiesExperience.tsx");

export const useBountiesExperience = function useBountiesExperience(VIDEO_MODAL_MOBILE) {
  const BountiesVerticalScrollExperiment = apexExperiment.BountiesVerticalScrollExperiment;
  let obj = { location: VIDEO_MODAL_MOBILE };
  const config = BountiesVerticalScrollExperiment.useConfig(obj);
  const BountiesStage1Experiment = apexExperiment2.BountiesStage1Experiment;
  obj = { location: VIDEO_MODAL_MOBILE };
  const config1 = BountiesStage1Experiment.useConfig(obj);
  const QuestHomeBountiesExperiment = apexExperiment3.QuestHomeBountiesExperiment;
  obj = { location: VIDEO_MODAL_MOBILE };
  let num = 50;
  const config2 = QuestHomeBountiesExperiment.useConfig(obj);
  if (config1.enabled) {
    num = config1.orbAmount;
  }
  let num2 = 15;
  if (config1.enabled) {
    num2 = config1.rewardTimerSeconds;
  }
  if (config.enabled) {
    obj1 = { showBounties: true, ownedByVerticalScrollExperiment: true, verticalScrollEnabled: null, loopingEnabled: false, ctaTimerMilliSeconds: null, scrollAffordanceVariant: null, stage1Enabled: null, orbAmount: null, rewardTimerSeconds: null };
    ({ verticalScrollEnabled: obj5[2], ctaTimerMilliSeconds: obj5[4], scrollAffordanceVariant: obj5[5] } = config);
    obj1[6] = config1.enabled;
    obj1[7] = num;
    obj1[8] = num2;
    let obj2 = obj1;
  } else {
    obj2 = { showBounties: null, ownedByVerticalScrollExperiment: false, verticalScrollEnabled: null, loopingEnabled: null, ctaTimerMilliSeconds: null, scrollAffordanceVariant: "none", stage1Enabled: null, orbAmount: null, rewardTimerSeconds: null };
    obj2[0] = config2.enabled;
    ({ verticalScrollEnabled: obj4[2], loopingEnabled: obj4[3], ctaTimerMilliSeconds: obj4[4], enabled: obj4[6] } = config1);
    obj2[7] = num;
    obj2[8] = num2;
  }
  return obj2;
};