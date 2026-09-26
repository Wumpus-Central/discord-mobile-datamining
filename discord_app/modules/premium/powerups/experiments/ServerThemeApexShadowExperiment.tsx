// === Module 4762: ServerThemeApexShadowExperiment ===

// Module 4762 (ServerThemeApexShadowExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "guild", name: "2026-06-server-theme-apex-shadow", defaultConfig: { enabled: false, inExperiment: false, gatesApex: false, rollbackEnabled: false }, variations: { 0: { enabled: false, inExperiment: true, gatesApex: false, rollbackEnabled: false }, 1: { enabled: true, inExperiment: true, gatesApex: false, rollbackEnabled: false }, 2: { enabled: false, inExperiment: true, gatesApex: true, rollbackEnabled: false }, 3: { enabled: true, inExperiment: true, gatesApex: true, rollbackEnabled: false }, 4: { enabled: true, inExperiment: true, gatesApex: true, rollbackEnabled: true } } });
const result = size.fileFinishedImporting("modules/premium/powerups/experiments/ServerThemeApexShadowExperiment.tsx");

export const ServerThemeApexShadowExperiment = apexExperiment;