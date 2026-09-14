// === Module 10872: GiftingBadgeExperiment ===

// Module 10872 (GiftingBadgeExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-04-gifting-badge", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/gifting/experiments/GiftingBadgeExperiment.tsx");

export default apexExperiment;
export const GiftingBadgeExperiment = apexExperiment;