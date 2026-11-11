// discord_app/modules/collectibles/experiments/CollectiblesStorefrontPricingIntegrationExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_0 = ApexExperiment.createApexExperiment({
  name: "2026-10-collectibles-storefront-pricing-integration",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting(
  "modules/collectibles/experiments/CollectiblesStorefrontPricingIntegrationExperiment.tsx",
);

export function getCollectiblesStorefrontPricingIntegrationEnabled(location) {
  return closure_0.getConfig({ location }).enabled;
}
export function useCollectiblesStorefrontPricingIntegrationEnabled(c7) {
  return closure_0.useConfig({ location: _location }).enabled;
}
