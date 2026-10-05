// discord_app/modules/premium/experiments/TenureBadgeWithheldStateExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = {
  kind: "user",
  name: "2026-08-nitro-tenure-badge-withheld-state",
  defaultConfig: { showWithheldBadge: false },
  variations: { 0: { showWithheldBadge: false }, 1: { showWithheldBadge: true } },
};
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/experiments/TenureBadgeWithheldStateExperiment.tsx");

export default apexExperiment;
export const shouldShowWithheldTenureBadge = function shouldShowWithheldTenureBadge(useTieredTenureBadgeData) {
  const obj = { location: useTieredTenureBadgeData };
  return apexExperiment.getConfig(obj).showWithheldBadge;
};
