// === Module 16678: apexExperiment ===

// Module 16678 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

let obj = { OFF: "off", ADULT: "adult", TEEN: "teen", UNDER_13: "under_13", SUPERVISED_PENDING: "supervised_pending", SUPERVISED_DENIED: "supervised_denied", UNKNOWN: "unknown", DECLARED: "declared", EMPTY: "empty", ERROR: "error" };
obj = { enabled: false, scenario: obj.OFF };
obj = { enabled: false, scenario: obj.OFF };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-08-fake-play-age-signals", defaultConfig: obj, variations: { 0: obj, 1: { enabled: true, scenario: obj.ADULT }, 2: { enabled: true, scenario: obj.TEEN }, 3: { enabled: true, scenario: obj.UNDER_13 }, 4: { enabled: true, scenario: obj.SUPERVISED_PENDING }, 5: { enabled: true, scenario: obj.SUPERVISED_DENIED }, 6: { enabled: true, scenario: obj.UNKNOWN }, 7: { enabled: true, scenario: obj.DECLARED }, 8: { enabled: true, scenario: obj.EMPTY }, 9: { enabled: true, scenario: obj.ERROR } } });
const result = set.fileFinishedImporting("modules/age_assurance/native/FakePlayAgeSignalsExperiment.tsx");

export default apexExperiment;
export const FakePlayAgeSignalsScenario = obj;
export const getFakePlayAgeSignalsConfig = function getFakePlayAgeSignalsConfig(location) {
  return apexExperiment.getConfig({ location });
};
export const isFakePlayAgeSignalsEnabled = function isFakePlayAgeSignalsEnabled(location) {
  return apexExperiment.getConfig({ location }).enabled;
};