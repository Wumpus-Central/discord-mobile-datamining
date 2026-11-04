// discord_app/modules/badges/BadgeUnreadStateExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_0 = ApexExperiment.createApexExperiment({
  name: "2026-10-badges-unread-state",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting("modules/badges/BadgeUnreadStateExperiment.tsx");

export function useIsBadgeUnreadStateEnabled(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
}
