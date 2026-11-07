// discord_app/modules/premium/experiments/NitroMobileRefreshExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_0 = ApexExperiment.createApexExperiment({
  name: "2026-11-nitro-mobile-refresh",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting("modules/premium/experiments/NitroMobileRefreshExperiment.tsx");

export function useIsNitroMobileRefreshEnabled(PremiumMarketingPage) {
  return closure_0.useConfig({ location: PremiumMarketingPage }).enabled;
}
