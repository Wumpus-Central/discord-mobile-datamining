// === Module 13298: AndroidTwoWeekTrialsExperiment ===

// Module 13298 (AndroidTwoWeekTrialsExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-06-android-two-week-trials", kind: "user", defaultConfig: { enabled: false, trialCTAEnabled: false }, variations: null };
obj = { 1: null, 2: { enabled: true, trialCTAEnabled: true } };
obj[2] = { enabled: true, trialCTAEnabled: false };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/experiments/AndroidTwoWeekTrialsExperiment.tsx");

export const AndroidTwoWeekTrialsExperiment = apexExperiment;
export const isAndroidTwoWeekTrialsExperimentEnabled = function isAndroidTwoWeekTrialsExperimentEnabled(location) {
  return apexExperiment.getConfig({ location: location.location }).enabled;
};
export const isAndroidTwoWeekTrialsTrialCTAEnabled = function isAndroidTwoWeekTrialsTrialCTAEnabled(location) {
  return apexExperiment.getConfig({ location: location.location }).trialCTAEnabled;
};