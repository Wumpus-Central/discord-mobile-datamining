// === Module 12476: apexExperiment ===

// Module 12476 (apexExperiment)
import set from "set" /* 2 */;
import apexExperiment2 from "apexExperiment" /* 12477 */;
import apexExperiment3 from "apexExperiment" /* 12478 */;
import ApexExperiment from "ApexExperiment" /* 1468 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-private-profiles", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = set.fileFinishedImporting("modules/user_profile/PrivateProfilesExperiment.tsx");

export const PrivateProfilesExperiment = apexExperiment;
export const useIsInPrivateProfilesExperiment = function useIsInPrivateProfilesExperiment(UserProfilePrivacyNotice) {
  let enabled = apexExperiment.useConfig({ location: UserProfilePrivacyNotice }).enabled;
  const isInPrivateProfilesStrictExperiment = apexExperiment2.useIsInPrivateProfilesStrictExperiment(UserProfilePrivacyNotice);
  const obj = { location: UserProfilePrivacyNotice };
  const obj2 = apexExperiment2;
  const isInPrivateProfilesStrictGbExperiment = apexExperiment3.useIsInPrivateProfilesStrictGbExperiment(UserProfilePrivacyNotice);
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
    enabled = apexExperiment2.getIsInPrivateProfilesStrictExperiment(ProfilePrivacySetting);
    const obj2 = apexExperiment2;
  }
  if (!enabled) {
    enabled = apexExperiment3.getIsInPrivateProfilesStrictGbExperiment(ProfilePrivacySetting);
    const obj3 = apexExperiment3;
  }
  return enabled;
};