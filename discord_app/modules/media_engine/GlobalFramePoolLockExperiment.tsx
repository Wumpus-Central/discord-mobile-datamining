// discord_app/modules/media_engine/GlobalFramePoolLockExperiment.tsx
import apex_ApexExperimentDefault from "../experiments/apex/ApexExperiment.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj2;
const obj = {
  kind: "user",
  name: "2025-11-global-frame-pool-lock",
  defaultConfig: { enabled: false },
  variations: obj2,
};
obj2 = { 1: null };
obj2[1] = { enabled: true };
const config = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/media_engine/GlobalFramePoolLockExperiment.tsx");

export const getGlobalFramePoolLockExperimentConfig = function getGlobalFramePoolLockExperimentConfig(disable) {
  let defaultConfig;
  let flag = disable.disable;
  const _location = disable.location;
  if (flag === undefined) {
    flag = false;
  }
  if (flag) {
    defaultConfig = config.definition.defaultConfig;
  } else {
    const obj2 = { location: _location };
    defaultConfig = config.getConfig(obj2);
  }
  return defaultConfig;
};
