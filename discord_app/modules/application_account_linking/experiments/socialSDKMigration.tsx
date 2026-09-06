// discord_app/modules/application_account_linking/experiments/socialSDKMigration.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-06-battlenet-social-sdk-migration",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting("modules/application_account_linking/experiments/socialSDKMigration.tsx");

export const battlenetSocialSDKMigrationExperiment = apexExperiment;
