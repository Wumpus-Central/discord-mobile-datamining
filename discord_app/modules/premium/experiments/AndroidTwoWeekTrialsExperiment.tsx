// === Module 13697: AndroidTwoWeekTrialsExperiment ===

// Module 13697 (AndroidTwoWeekTrialsExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-06-android-two-week-trials", kind: "user", defaultConfig: { enabled: false, trialCTAEnabled: false }, variations: null };
const obj2 = { 1: null, 2: { enabled: true, trialCTAEnabled: true } };
obj2[2] = { enabled: true, trialCTAEnabled: false };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/experiments/AndroidTwoWeekTrialsExperiment.tsx");

export const AndroidTwoWeekTrialsExperiment = apexExperiment;
export const isAndroidTwoWeekTrialsExperimentEnabled = function isAndroidTwoWeekTrialsExperimentEnabled(location) {
  return apexExperiment.getConfig({ location: location.location }).enabled;
};
export const isAndroidTwoWeekTrialsTrialCTAEnabled = function isAndroidTwoWeekTrialsTrialCTAEnabled(location) {
  return apexExperiment.getConfig({ location: location.location }).trialCTAEnabled;
};