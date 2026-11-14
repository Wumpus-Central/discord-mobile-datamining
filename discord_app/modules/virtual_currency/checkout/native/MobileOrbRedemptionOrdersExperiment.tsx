// === Module 15508: MobileOrbRedemptionOrdersExperiment ===

// Module 15508 (MobileOrbRedemptionOrdersExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-11-mobile-orb-redemption-thru-orders", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/virtual_currency/checkout/native/MobileOrbRedemptionOrdersExperiment.tsx");

export default apexExperiment;