// discord_app/modules/media_engine/AGC2Experiment.tsx
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

let obj = { useAGC2: true, enableAnalog: false, enableDigital: true, headroom_db: 5, max_gain_db: 50, initial_gain_db: 15, max_gain_change_db_per_second: 6, max_output_noise_level_dbfs: -50, fixed_gain_db: 0 };
obj = { 1: null, 2: { noiseCancellationDuringProcessing: true, noiseCancellationConfig: { useAGC2: false } }, 3: { noiseCancellationDuringProcessing: true, noiseCancellationConfig: obj, vadKrispActivationThreshold: 0.5 }, 4: { noiseCancellationDuringProcessing: true, noiseCancellationConfig: obj, vadKrispActivationThreshold: 0.55 }, 5: { noiseCancellationDuringProcessing: true, noiseCancellationConfig: obj, vadKrispActivationThreshold: 0.6 }, 6: { noiseCancellationDuringProcessing: true, noiseCancellationConfig: obj, vadKrispActivationThreshold: 0.65 } };
obj[6] = { noiseCancellationDuringProcessing: true, noiseCancellationConfig: obj, vadKrispActivationThreshold: 0.7 };
let closure_0 = ApexExperiment.createApexExperiment({ kind: "user", name: "2025-09-agc2-v2", defaultConfig: { noiseCancellationDuringProcessing: false, noiseCancellationConfig: { useAGC2: false } }, variations: obj });
const result = set.fileFinishedImporting("modules/media_engine/AGC2Experiment.tsx");

export const getAGC2ExperimentConfig = function getAGC2ExperimentConfig(disable) {
  let flag = disable.disable;
  if (flag === undefined) {
    flag = false;
  }
  let obj = closure_0;
  if (flag) {
    let defaultConfig = obj.definition.defaultConfig;
  } else {
    obj = { location: null };
    obj[0] = disable.location;
    defaultConfig = obj.getConfig(obj);
  }
  return defaultConfig;
};