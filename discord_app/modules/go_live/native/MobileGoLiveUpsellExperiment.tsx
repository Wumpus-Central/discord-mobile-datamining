// === Module 9958: MobileGoLiveUpsellExperiment ===

// Module 9958 (MobileGoLiveUpsellExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-04-mobile-go-live-upsell", kind: "user", defaultConfig: { showMobileGoLiveUpsell: false }, variations: null };
obj = { 1: null, 2: { showMobileGoLiveUpsell: true, goLiveUpsellVariant: "one-step" } };
obj[2] = { showMobileGoLiveUpsell: true, goLiveUpsellVariant: "two-step" };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/go_live/native/MobileGoLiveUpsellExperiment.tsx");

export default apexExperiment;