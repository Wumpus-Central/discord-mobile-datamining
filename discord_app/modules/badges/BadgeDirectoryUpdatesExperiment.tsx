// discord_app/modules/badges/BadgeDirectoryUpdatesExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_0 = ApexExperiment.createApexExperiment({
  name: "2026-10-badge-directory-updates",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting("modules/badges/BadgeDirectoryUpdatesExperiment.tsx");

export const useIsBadgeDirectoryUpdatesEnabled = function useIsBadgeDirectoryUpdatesEnabled(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
};
