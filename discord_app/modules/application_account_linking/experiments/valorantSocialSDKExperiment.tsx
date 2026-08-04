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
  config = config.getConfig(arg0);
  const config1 = config2.getConfig(arg0);
  let enabled = config.enabled;
  config2 = config3.getConfig(arg0);
  if (!enabled) {
    enabled = config1.enabled;
  }
  if (!enabled) {
    enabled = config2.enabled;
  }
  return enabled;
};