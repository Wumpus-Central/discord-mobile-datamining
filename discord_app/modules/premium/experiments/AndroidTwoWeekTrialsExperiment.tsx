// === Module 7612: apexExperiment ===

// Module 7612 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null, 2: { enabled: true, trialCTAEnabled: true } };
obj[2] = { enabled: true, trialCTAEnabled: false };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-android-two-week-trials", kind: "user", defaultConfig: { enabled: false, trialCTAEnabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/premium/experiments/AndroidTwoWeekTrialsExperiment.tsx");

export const AndroidTwoWeekTrialsExperiment = apexExperiment;
export const isAndroidTwoWeekTrialsExperimentEnabled = function isAndroidTwoWeekTrialsExperimentEnabled(location) {
  return apexExperiment.getConfig({ location: location.location }).enabled;
};
export const isAndroidTwoWeekTrialsTrialCTAEnabled = function isAndroidTwoWeekTrialsTrialCTAEnabled(location) {
  return apexExperiment.getConfig({ location: location.location }).trialCTAEnabled;
};