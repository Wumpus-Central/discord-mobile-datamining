// discord_app/modules/badges/BadgeManagementExperiment.tsx
import set from "../../../_runtime/00002_set.js";
import ApexExperiment from "../experiments/apex/index.tsx";

const obj = { 1: null, 2: { enabled: true, tenureBadgeHideable: true } };
obj[2] = { enabled: true, tenureBadgeHideable: false };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-08-badge-management", kind: "user", defaultConfig: { enabled: false, tenureBadgeHideable: false }, variations: obj });
const result = set.fileFinishedImporting("modules/badges/BadgeManagementExperiment.tsx");

export default apexExperiment;
export const useIsBadgeManagementEnabled = function useIsBadgeManagementEnabled(location) {
  return apexExperiment.useConfig({ location: location.location }).enabled;
};