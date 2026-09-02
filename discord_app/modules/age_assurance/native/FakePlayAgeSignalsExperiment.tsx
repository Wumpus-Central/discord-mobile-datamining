// === Module 17280: apexExperiment ===

// Module 17280 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

let obj = { OFF: "off", ADULT: "adult", TEEN: "teen", UNDER_13: "under_13", UNDER_13_DECLINED: "under_13_declined", SUPERVISED_PENDING: "supervised_pending", SUPERVISED_DECLINED: "supervised_declined", NOT_SHARED: "not_shared", ADULT_SELF_DECLARED: "adult_self_declared", EMPTY: "empty", ERROR: "error", VERIFICATION_REQUIRED: "verification_required", ADULT_ASSESSED: "adult_assessed", SUPERVISED_APPROVED: "supervised_approved", CHECK_ERROR: "check_error" };
obj = { enabled: false, scenario: obj.OFF };
obj = { enabled: false, scenario: obj.OFF };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-08-fake-play-age-signals", defaultConfig: obj, variations: { 0: obj, 1: { enabled: true, scenario: obj.ADULT }, 2: { enabled: true, scenario: obj.TEEN }, 3: { enabled: true, scenario: obj.UNDER_13 }, 4: { enabled: true, scenario: obj.SUPERVISED_PENDING }, 5: { enabled: true, scenario: obj.SUPERVISED_DECLINED }, 6: { enabled: true, scenario: obj.NOT_SHARED }, 7: { enabled: true, scenario: obj.ADULT_SELF_DECLARED }, 8: { enabled: true, scenario: obj.EMPTY }, 9: { enabled: true, scenario: obj.ERROR }, 10: { enabled: true, scenario: obj.VERIFICATION_REQUIRED }, 11: { enabled: true, scenario: obj.ADULT_ASSESSED }, 12: { enabled: true, scenario: obj.SUPERVISED_APPROVED }, 13: { enabled: true, scenario: obj.CHECK_ERROR }, 14: { enabled: true, scenario: obj.UNDER_13_DECLINED } } });
const result = set.fileFinishedImporting("modules/age_assurance/native/FakePlayAgeSignalsExperiment.tsx");

export default apexExperiment;
export const FakePlayAgeSignalsScenario = obj;
export const getFakePlayAgeSignalsConfig = function getFakePlayAgeSignalsConfig(location) {
  return apexExperiment.getConfig({ location });
};
export const isFakePlayAgeSignalsEnabled = function isFakePlayAgeSignalsEnabled(location) {
  return apexExperiment.getConfig({ location }).enabled;
};