// === Module 10763: AndroidNitroGiftOrdersExperiment ===

// Module 10763 (AndroidNitroGiftOrdersExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-11-android-nitro-gift-orders", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/gifting/experiments/AndroidNitroGiftOrdersExperiment.tsx");

export const AndroidNitroGiftOrdersExperiment = apexExperiment;