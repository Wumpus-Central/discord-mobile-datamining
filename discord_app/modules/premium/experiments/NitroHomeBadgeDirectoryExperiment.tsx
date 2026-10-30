// discord_app/modules/premium/experiments/NitroHomeBadgeDirectoryExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-10-nitro-home-badge-directory",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting("modules/premium/experiments/NitroHomeBadgeDirectoryExperiment.tsx");

export default apexExperiment;
export function useIsNitroHomeBadgeDirectoryEnabled(location) {
  return apexExperiment.useConfig({ location: location.location }).enabled;
}
