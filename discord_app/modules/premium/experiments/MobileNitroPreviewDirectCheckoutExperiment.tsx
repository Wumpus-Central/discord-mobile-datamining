// === Module 14927: MobileNitroPreviewDirectCheckoutExperiment ===

// Module 14927 (MobileNitroPreviewDirectCheckoutExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-09-mobile-nitro-preview-direct-checkout", kind: "user", defaultConfig: false, variations: { 0: false, 1: true } });
const result = size.fileFinishedImporting("modules/premium/experiments/MobileNitroPreviewDirectCheckoutExperiment.tsx");

export const MobileNitroPreviewDirectCheckoutExperiment = apexExperiment;
export const useMobileNitroPreviewDirectCheckoutEnabled = function useMobileNitroPreviewDirectCheckoutEnabled() {
  return apexExperiment.useConfig({ location: "native.GetNitroCard" });
};