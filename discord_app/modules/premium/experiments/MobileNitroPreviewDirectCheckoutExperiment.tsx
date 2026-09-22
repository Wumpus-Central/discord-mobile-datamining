// discord_app/modules/premium/experiments/MobileNitroPreviewDirectCheckoutExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-09-mobile-nitro-preview-direct-checkout",
  kind: "user",
  defaultConfig: false,
  variations: { 0: false, 1: true },
});
const result = size.fileFinishedImporting("modules/premium/experiments/MobileNitroPreviewDirectCheckoutExperiment.tsx");

export const MobileNitroPreviewDirectCheckoutExperiment = apexExperiment;
export const useMobileNitroPreviewDirectCheckoutEnabled = function useMobileNitroPreviewDirectCheckoutEnabled() {
  return apexExperiment.useConfig({ location: "native.GetNitroCard" });
};
