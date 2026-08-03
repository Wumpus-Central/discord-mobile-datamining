import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";

let obj = { 0: { enabled: false }, 1: { enabled: true } };
obj = { enabled: false };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-04-riot-social-sdk-migration", kind: "user", defaultConfig: obj, variations: obj });
let closure_1 = ApexExperiment.createApexExperiment({ name: "2026-05-riot-social-sdk-migration-us--canada", kind: "user", defaultConfig: obj, variations: obj });
let closure_2 = ApexExperiment.createApexExperiment({ name: "2026-05-riot-social-sdk-migration-all-regions", kind: "user", defaultConfig: obj, variations: obj });
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-battlenet-social-sdk-migration", kind: "user", defaultConfig: obj, variations: obj });
const result = require("set").fileFinishedImporting("modules/application_account_linking/experiments/socialSDKMigration.tsx");

export const useIsRiotSocialSDKMigrationEnabled = function useIsRiotSocialSDKMigrationEnabled(location) {
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
export const getIsRiotSocialSDKMigrationEnabled = function getIsRiotSocialSDKMigrationEnabled(arg0) {
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
export const battlenetSocialSDKMigrationExperiment = apexExperiment;