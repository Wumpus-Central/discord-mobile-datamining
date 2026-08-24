// === Module 4309: apexExperiment ===

// Module 4309 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "guild", name: "2026-06-server-theme-apex-shadow", defaultConfig: { enabled: false, inExperiment: false, gatesApex: false }, variations: { 0: { enabled: false, inExperiment: true, gatesApex: false }, 1: { enabled: true, inExperiment: true, gatesApex: false }, 2: { enabled: false, inExperiment: true, gatesApex: true }, 3: { enabled: true, inExperiment: true, gatesApex: true } } });
const result = set.fileFinishedImporting("modules/premium/powerups/experiments/ServerThemeApexShadowExperiment.tsx");

export const ServerThemeApexShadowExperiment = apexExperiment;