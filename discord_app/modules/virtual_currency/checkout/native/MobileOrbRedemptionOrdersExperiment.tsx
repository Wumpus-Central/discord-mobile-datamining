// discord_app/modules/virtual_currency/checkout/native/MobileOrbRedemptionOrdersExperiment.tsx
import ApexExperiment from "../../../experiments/apex/index.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-11-mobile-orb-redemption-thru-orders",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting(
  "modules/virtual_currency/checkout/native/MobileOrbRedemptionOrdersExperiment.tsx",
);

export default apexExperiment;
