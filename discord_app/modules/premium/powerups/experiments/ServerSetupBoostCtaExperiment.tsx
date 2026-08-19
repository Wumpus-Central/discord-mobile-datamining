// === Module 11757: apexExperiment ===

// Module 11757 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-server-setup-boost-cta", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = obj132.fileFinishedImporting("modules/premium/powerups/experiments/ServerSetupBoostCtaExperiment.tsx");

export const ServerSetupBoostCtaExperiment = apexExperiment;