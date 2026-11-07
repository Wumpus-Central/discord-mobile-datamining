// === Module 15625: NitroMobileRefreshExperiment ===

// Module 15625 (NitroMobileRefreshExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-11-nitro-mobile-refresh", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/premium/experiments/NitroMobileRefreshExperiment.tsx");

export function useIsNitroMobileRefreshEnabled(PremiumMarketingPage) {
  return closure_0.useConfig({ location: PremiumMarketingPage }).enabled;
}