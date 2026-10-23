// === Module 16370: OrbsArcadeExperiment ===

// Module 16370 (OrbsArcadeExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-09-orbs-arcade", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/orbs_arcade/experiments/OrbsArcadeExperiment.tsx");

export const OrbsArcadeExperiment = apexExperiment;