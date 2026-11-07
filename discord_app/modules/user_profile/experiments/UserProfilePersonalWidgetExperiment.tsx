// === Module 15183: UserProfilePersonalWidgetExperiment ===

// Module 15183 (UserProfilePersonalWidgetExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-07-personal-widget", kind: "user", defaultConfig: { enabled: false, showCreateEntrypoint: false }, variations: { 0: { enabled: false, showCreateEntrypoint: false }, 1: { enabled: true, showCreateEntrypoint: false }, 2: { enabled: true, showCreateEntrypoint: true } } });
const result = size.fileFinishedImporting("modules/user_profile/experiments/UserProfilePersonalWidgetExperiment.tsx");

export default apexExperiment;