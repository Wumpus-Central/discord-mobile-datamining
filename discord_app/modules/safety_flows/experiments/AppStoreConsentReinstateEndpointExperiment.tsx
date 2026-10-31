// discord_app/modules/safety_flows/experiments/AppStoreConsentReinstateEndpointExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const config = ApexExperiment.createApexExperiment({
  name: "2026-10-app-store-consent-reinstate-endpoint",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting(
  "modules/safety_flows/experiments/AppStoreConsentReinstateEndpointExperiment.tsx",
);

export function getIsAppStoreConsentReinstateEndpointEnabled(openSafetyFlow) {
  return config.getConfig({ location: openSafetyFlow }).enabled;
}
