// discord_app/modules/premium/premium_marketing/native/PremiumOrbsDeliveredModalExperiment.tsx
import ApexExperiment from "../../../experiments/apex/index.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-09-mobile-nitro-orbs-delivered-modal",
  kind: "user",
  defaultConfig: false,
  variations: { 1: true },
});
const result = size.fileFinishedImporting(
  "modules/premium/premium_marketing/native/PremiumOrbsDeliveredModalExperiment.tsx",
);

export default apexExperiment;
