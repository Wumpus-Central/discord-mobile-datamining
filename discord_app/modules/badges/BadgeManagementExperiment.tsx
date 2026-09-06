// === Module 11198: BadgeManagementExperiment ===

// Module 11198 (BadgeManagementExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-08-badge-management", kind: "user", defaultConfig: { enabled: false, tenureBadgeHideable: false }, variations: null };
obj = { 1: null, 2: { enabled: true, tenureBadgeHideable: true } };
obj[2] = { enabled: true, tenureBadgeHideable: false };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/badges/BadgeManagementExperiment.tsx");

export default apexExperiment;
export const useIsBadgeManagementEnabled = function useIsBadgeManagementEnabled(location) {
  return apexExperiment.useConfig({ location: location.location }).enabled;
};