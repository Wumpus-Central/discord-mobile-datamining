// discord_app/modules/premium/experiments/PremiumGroupExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_0 = ApexExperiment.createApexExperiment({
  name: "2025-12-katsudon",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting("modules/premium/experiments/PremiumGroupExperiment.tsx");

export default function usePremiumGroupExperiment(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
}
