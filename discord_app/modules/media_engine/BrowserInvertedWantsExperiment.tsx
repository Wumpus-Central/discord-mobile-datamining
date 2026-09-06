// discord_app/modules/media_engine/BrowserInvertedWantsExperiment.tsx
import utils_PlatformUtils from "../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  kind: "user",
  name: "2026-03-browser-inverted-wants",
  defaultConfig: { invertWants: false },
  variations: null,
};
obj = { 1: null };
obj[1] = { invertWants: true };
obj.variations = obj;
let config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/BrowserInvertedWantsExperiment.tsx");

export const getBrowserInvertedWantsConfig = function getBrowserInvertedWantsConfig(location) {
  config = utils_PlatformUtils;
  if (config.isDesktop()) {
    config = { invertWants: false };
  } else {
    const obj = { location };
    config = config.getConfig(obj);
  }
  return config;
};
