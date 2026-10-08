// === Module 11965: GiftingPromoMobileButtonAnimationDismissHoldoutExperiment ===

// Module 11965 (GiftingPromoMobileButtonAnimationDismissHoldoutExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-10-gifting-promo-mobile-button-animation-dismiss", kind: "user", defaultConfig: { inHoldout: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { inHoldout: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/gifting/experiments/GiftingPromoMobileButtonAnimationDismissHoldoutExperiment.tsx");

export default apexExperiment;
export const GiftingPromoMobileButtonAnimationDismissHoldoutExperiment = apexExperiment;