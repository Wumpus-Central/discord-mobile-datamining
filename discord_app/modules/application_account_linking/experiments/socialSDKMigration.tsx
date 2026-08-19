// === Module 4484: apexExperiment ===

// Module 4484 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-battlenet-social-sdk-migration", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = obj132.fileFinishedImporting("modules/application_account_linking/experiments/socialSDKMigration.tsx");

export const battlenetSocialSDKMigrationExperiment = apexExperiment;