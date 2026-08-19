// === Module 9257: apexExperiment ===

// Module 9257 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2025-12-orb-redemption-thru-orders", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = obj132.fileFinishedImporting("modules/virtual_currency/experiments/OrbRedemptionOrdersExperiment.tsx");

export default apexExperiment;