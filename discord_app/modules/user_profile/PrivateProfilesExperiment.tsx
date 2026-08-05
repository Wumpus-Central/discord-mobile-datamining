// discord_app/modules/user_profile/PrivateProfilesExperiment.tsx
import ApexExperiment from "ApexExperiment";
import { apexExperiment } from "PrivateProfilesStrictExperiment.tsx";
import { apexExperiment } from "PrivateProfilesStrictGbExperiment.tsx";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-private-profiles", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = require("apexExperiment").fileFinishedImporting("modules/user_profile/PrivateProfilesExperiment.tsx");

export const PrivateProfilesExperiment = apexExperiment;
export const useIsInPrivateProfilesExperiment = function useIsInPrivateProfilesExperiment(UserProfilePrivacyNotice) {
  let enabled = apexExperiment.useConfig({ location: UserProfilePrivacyNotice }).enabled;
  const isInPrivateProfilesStrictExperiment = apexExperiment.useIsInPrivateProfilesStrictExperiment(UserProfilePrivacyNotice);
  const obj = { location: UserProfilePrivacyNotice };
  const obj2 = apexExperiment;
  const isInPrivateProfilesStrictGbExperiment = apexExperiment.useIsInPrivateProfilesStrictGbExperiment(UserProfilePrivacyNotice);
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
    enabled = apexExperiment.getIsInPrivateProfilesStrictExperiment(ProfilePrivacySetting);
    const obj2 = apexExperiment;
  }
  if (!enabled) {
    enabled = apexExperiment.getIsInPrivateProfilesStrictGbExperiment(ProfilePrivacySetting);
    const obj3 = apexExperiment;
  }
  return enabled;
};