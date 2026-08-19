// === Module 9629: apexExperiment ===

// Module 9629 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-08-premium-gifting-gogo-promotion", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = obj132.fileFinishedImporting("modules/premium/gifting/experiments/PremiumGiftingGogoPromotionExperiment.tsx");

export default apexExperiment;
export const PremiumGiftingGogoPromotionExperiment = apexExperiment;