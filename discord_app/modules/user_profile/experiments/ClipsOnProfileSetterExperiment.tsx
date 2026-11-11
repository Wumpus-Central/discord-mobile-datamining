// === Module 15697: ClipsOnProfileSetterExperiment ===

// Module 15697 (ClipsOnProfileSetterExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-07-clips-on-profile-setter", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/user_profile/experiments/ClipsOnProfileSetterExperiment.tsx");

export default apexExperiment;