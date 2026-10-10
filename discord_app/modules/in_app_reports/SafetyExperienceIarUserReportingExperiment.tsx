// === Module 13090: SafetyExperienceIarUserReportingExperiment ===

// Module 13090 (SafetyExperienceIarUserReportingExperiment)
import c from "c" /* 576 */;
import createExperiment from "module_5014" /* 5014 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", id: "2023-09_iar_user_reporting", label: "Safety Experience IAR User Reporting", defaultConfig: { enabled: false }, treatments: null };
const items = [{ id: 1, label: "Enabled", config: { enabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/in_app_reports/SafetyExperienceIarUserReportingExperiment.tsx");

export default experiment;
export const useIsIarUserReportingEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsIarUserReportingEnabled(location) {
  const cResult = c.c(3);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { autoTrackExposure: true };
    cResult[2] = obj3;
    let tmp3 = obj3;
  } else {
    tmp3 = cResult[2];
  }
  return experiment.useExperiment(tmp2, tmp3).enabled;
}) : (function useIsIarUserReportingEnabled(location) {
  return experiment.useExperiment({ location }, { autoTrackExposure: true }).enabled;
});
export const isIarUserReportingEnabled = function isIarUserReportingEnabled(location) {
  return experiment.getCurrentConfig({ location }, { autoTrackExposure: true }).enabled;
};