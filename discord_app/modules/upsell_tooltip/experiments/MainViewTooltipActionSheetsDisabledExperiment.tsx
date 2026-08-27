// === Module 16441: apexExperiment ===

// Module 16441 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-01-mobile-action-sheet-killswitch", defaultConfig: { disabled: false }, variations: { 0: { disabled: false }, 1: { disabled: true } } });
const result = set.fileFinishedImporting("modules/upsell_tooltip/experiments/MainViewTooltipActionSheetsDisabledExperiment.tsx");

export default apexExperiment;