// === Module 1922: socialSDKMigration ===

// Module 1922 (socialSDKMigration)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-battlenet-social-sdk-migration", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/application_account_linking/experiments/socialSDKMigration.tsx");

export const battlenetSocialSDKMigrationExperiment = apexExperiment;