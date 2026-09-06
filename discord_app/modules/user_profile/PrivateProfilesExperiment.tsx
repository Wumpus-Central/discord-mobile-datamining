// === Module 13075: PrivateProfilesExperiment ===

// Module 13075 (PrivateProfilesExperiment)
import PrivateProfilesStrictExperiment from "PrivateProfilesStrictExperiment" /* 13076 */;
import PrivateProfilesStrictGbExperiment from "PrivateProfilesStrictGbExperiment" /* 13077 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-private-profiles", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/user_profile/PrivateProfilesExperiment.tsx");

export const PrivateProfilesExperiment = apexExperiment;
export const useIsInPrivateProfilesExperiment = function useIsInPrivateProfilesExperiment(UserProfilePrivacyNotice) {
  let enabled = apexExperiment.useConfig({ location: UserProfilePrivacyNotice }).enabled;
  const isInPrivateProfilesStrictExperiment = PrivateProfilesStrictExperiment.useIsInPrivateProfilesStrictExperiment(UserProfilePrivacyNotice);
  const obj = { location: UserProfilePrivacyNotice };
  const isInPrivateProfilesStrictGbExperiment = PrivateProfilesStrictGbExperiment.useIsInPrivateProfilesStrictGbExperiment(UserProfilePrivacyNotice);
  if (!enabled) {
    enabled = isInPrivateProfilesStrictExperiment;
  }
  if (!enabled) {
    enabled = isInPrivateProfilesStrictGbExperiment;
  }
  return enabled;
};
export const getIsInPrivateProfilesExperiment = function getIsInPrivateProfilesExperiment(ProfilePrivacySetting) {
  let enabled = apexExperiment.getConfig({ location: ProfilePrivacySetting }).enabled;
  if (!enabled) {
    enabled = PrivateProfilesStrictExperiment.getIsInPrivateProfilesStrictExperiment(ProfilePrivacySetting);
  }
  if (!enabled) {
    enabled = PrivateProfilesStrictGbExperiment.getIsInPrivateProfilesStrictGbExperiment(ProfilePrivacySetting);
  }
  return enabled;
};