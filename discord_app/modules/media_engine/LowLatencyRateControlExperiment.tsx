// discord_app/modules/media_engine/LowLatencyRateControlExperiment.tsx
import apex_ApexExperimentDefault from "../experiments/apex/ApexExperiment.tsx";

let obj = {
  kind: "user",
  name: "2025-10-low-latency-rate-control",
  defaultConfig: { enabled: false },
  variations: null,
};
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
let closure_0 = apex_ApexExperimentDefault(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_engine/LowLatencyRateControlExperiment.tsx");

export const getLowLatencyRateControlExperimentConfig = function getLowLatencyRateControlExperimentConfig(disable) {
  let flag = disable.disable;
  if (flag === undefined) {
    flag = false;
  }
  let obj = closure_0;
  if (flag) {
    let defaultConfig = obj.definition.defaultConfig;
  } else {
    obj = { location: disable.location };
    defaultConfig = obj.getConfig(obj);
  }
  return defaultConfig;
};
