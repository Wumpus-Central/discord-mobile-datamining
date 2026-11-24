// discord_app/modules/badges/native/BadgeSocialComparisonMobileExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_0 = ApexExperiment.createApexExperiment({
  name: "2026-11-badge-social-comparison-mobile",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting("modules/badges/native/BadgeSocialComparisonMobileExperiment.tsx");

export function useBadgeSocialComparisonMobileEnabled(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
}
