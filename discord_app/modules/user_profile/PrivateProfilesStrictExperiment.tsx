// === Module 13076: PrivateProfilesStrictExperiment ===

// Module 13076 (PrivateProfilesStrictExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-03-private-profiles-strict", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true }, 2: { enabled: true }, 3: { enabled: true } } });
const result = size.fileFinishedImporting("modules/user_profile/PrivateProfilesStrictExperiment.tsx");

export const PrivateProfilesStrictExperiment = apexExperiment;
export const useIsInPrivateProfilesStrictExperiment = function useIsInPrivateProfilesStrictExperiment(location) {
  return apexExperiment.useConfig({ location }).enabled;
};
export const getIsInPrivateProfilesStrictExperiment = function getIsInPrivateProfilesStrictExperiment(location) {
  return apexExperiment.getConfig({ location }).enabled;
};