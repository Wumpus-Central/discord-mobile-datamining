// discord_app/modules/application_account_linking/experiments/valorantSocialSDKExperiment.tsx
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";

let obj = { 0: { enabled: false }, 1: { enabled: true } };
obj = { enabled: false };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-04-valorant-social-sdk", kind: "user", defaultConfig: obj, variations: obj });
let closure_1 = ApexExperiment.createApexExperiment({ name: "2026-05-valorant-social-sdk-us--canada", kind: "user", defaultConfig: obj, variations: obj });
let closure_2 = ApexExperiment.createApexExperiment({ name: "2026-05-valorant-social-sdk-all-regions", kind: "user", defaultConfig: obj, variations: obj });
const result = require("set").fileFinishedImporting("modules/application_account_linking/experiments/valorantSocialSDKExperiment.tsx");

export const getIsValorantSocialSDKEnabled = function getIsValorantSocialSDKEnabled(arg0) {
  const config = closure_0.getConfig(arg0);
  const config1 = closure_1.getConfig(arg0);
  let enabled = config.enabled;
  const config2 = closure_2.getConfig(arg0);
  if (!enabled) {
    enabled = config1.enabled;
  }
  if (!enabled) {
    enabled = config2.enabled;
  }
  return enabled;
};
export const useIsValorantSocialSDKEnabled = function useIsValorantSocialSDKEnabled(location) {
  const config = closure_0.useConfig(location);
  const config1 = closure_1.useConfig(location);
  let enabled = config.enabled;
  const config2 = closure_2.useConfig(location);
  if (!enabled) {
    enabled = config1.enabled;
  }
  if (!enabled) {
    enabled = config2.enabled;
  }
  return enabled;
};