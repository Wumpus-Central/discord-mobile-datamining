// === Module 11520: useBountiesExperience ===

// Module 11520 (useBountiesExperience)
import BountiesVerticalScrollExperiment2 from "BountiesVerticalScrollExperiment" /* 11521 */;
import BountiesStage1Experiment2 from "BountiesStage1Experiment" /* 11522 */;
import QuestHomeBountiesExperiment2 from "QuestHomeBountiesExperiment" /* 11523 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/experiments/useBountiesExperience.tsx");

export const useBountiesExperience = function useBountiesExperience(VIDEO_MODAL_MOBILE) {
  const BountiesVerticalScrollExperiment = BountiesVerticalScrollExperiment2.BountiesVerticalScrollExperiment;
  let obj = { location: VIDEO_MODAL_MOBILE };
  const config = BountiesVerticalScrollExperiment.useConfig(obj);
  const BountiesStage1Experiment = BountiesStage1Experiment2.BountiesStage1Experiment;
  obj = { location: VIDEO_MODAL_MOBILE };
  const config1 = BountiesStage1Experiment.useConfig(obj);
  const QuestHomeBountiesExperiment = QuestHomeBountiesExperiment2.QuestHomeBountiesExperiment;
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
    const obj1 = { showBounties: true, ownedByVerticalScrollExperiment: true, verticalScrollEnabled: null, loopingEnabled: false, ctaTimerMilliSeconds: null, scrollAffordanceVariant: null, stage1Enabled: null, orbAmount: null, rewardTimerSeconds: null };
    ({ verticalScrollEnabled: obj5.verticalScrollEnabled, ctaTimerMilliSeconds: obj5.ctaTimerMilliSeconds, scrollAffordanceVariant: obj5.scrollAffordanceVariant } = config);
    obj1.stage1Enabled = config1.enabled;
    obj1.orbAmount = num;
    obj1.rewardTimerSeconds = num2;
    let obj2 = obj1;
  } else {
    obj2 = { showBounties: config2.enabled, ownedByVerticalScrollExperiment: false, verticalScrollEnabled: null, loopingEnabled: null, ctaTimerMilliSeconds: null, scrollAffordanceVariant: "none", stage1Enabled: null, orbAmount: null, rewardTimerSeconds: null };
    ({ verticalScrollEnabled: obj4.verticalScrollEnabled, loopingEnabled: obj4.loopingEnabled, ctaTimerMilliSeconds: obj4.ctaTimerMilliSeconds, enabled: obj4.stage1Enabled } = config1);
    obj2.orbAmount = num;
    obj2.rewardTimerSeconds = num2;
  }
  return obj2;
};