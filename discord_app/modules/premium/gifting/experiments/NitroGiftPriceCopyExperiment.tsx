// === Module 8991: apexExperiment ===

// Module 8991 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null, 2: { showGiftPrice: false, useNewCopy: false, monthlyDefaultSelected: false }, 3: { showGiftPrice: true, useNewCopy: true, monthlyDefaultSelected: false } };
obj[3] = { showGiftPrice: true, useNewCopy: true, monthlyDefaultSelected: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-nitro-gifting-price-copy-tweaks", kind: "user", defaultConfig: { showGiftPrice: true, useNewCopy: false, monthlyDefaultSelected: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/premium/gifting/experiments/NitroGiftPriceCopyExperiment.tsx");

export default apexExperiment;