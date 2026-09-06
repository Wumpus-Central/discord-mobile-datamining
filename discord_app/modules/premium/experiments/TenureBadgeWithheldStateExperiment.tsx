// discord_app/modules/premium/experiments/TenureBadgeWithheldStateExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  kind: "user",
  name: "2026-08-nitro-tenure-badge-withheld-state",
  defaultConfig: { showWithheldBadge: false },
  variations: { 0: { showWithheldBadge: false }, 1: { showWithheldBadge: true } },
});
const result = size.fileFinishedImporting("modules/premium/experiments/TenureBadgeWithheldStateExperiment.tsx");

export default apexExperiment;
export const shouldShowWithheldTenureBadge = function shouldShowWithheldTenureBadge(useTieredTenureBadgeData) {
  return apexExperiment.getConfig({ location: useTieredTenureBadgeData }).showWithheldBadge;
};
