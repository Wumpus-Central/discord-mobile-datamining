// discord_app/modules/user_settings/UserSettingsRedesignExperiment.tsx
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-05-user-settings-redesign-4d", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = require("set").fileFinishedImporting("modules/user_settings/UserSettingsRedesignExperiment.tsx");

export const UserSettingsRedesign4DExperiment = apexExperiment;
export const useIsEligibleForUserSettingsRedesign4DExperiment = function useIsEligibleForUserSettingsRedesign4DExperiment(location) {
  return apexExperiment.useConfig({ location }).enabled;
};
export const getIsEligibleForUserSettingsRedesign4DExperiment = function getIsEligibleForUserSettingsRedesign4DExperiment(UserSection) {
  return apexExperiment.getConfig({ location: UserSection }).enabled;
};