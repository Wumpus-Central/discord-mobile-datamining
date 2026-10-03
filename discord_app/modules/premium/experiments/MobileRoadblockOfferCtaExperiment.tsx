// discord_app/modules/premium/experiments/MobileRoadblockOfferCtaExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const config = ApexExperiment.createApexExperiment({
  kind: "user",
  name: "2026-09-mobile-roadblock-offer-cta",
  defaultConfig: false,
  variations: { 0: false, 1: true },
});
const result = size.fileFinishedImporting("modules/premium/experiments/MobileRoadblockOfferCtaExperiment.tsx");

export const getMobileRoadblockOfferCtaEnabled = function getMobileRoadblockOfferCtaEnabled() {
  return config.getConfig({ location: "native.PremiumUpsellActionSheet" });
};
