// === Module 12816: SafetyExperienceIarUserReportingExperiment ===

// Module 12816 (SafetyExperienceIarUserReportingExperiment)
import react from "react" /* 576 */;
import createExperiment from "module_4780" /* 4780 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let items;
let obj = { kind: "user", id: "2023-09_iar_user_reporting", label: "Safety Experience IAR User Reporting", defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 1, label: "Enabled", config: { enabled: true } }];
const experiment = createExperiment.createExperiment(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  let tmp2;
  let tmp3;
  const obj = react;
  const cResult = obj.c(3);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { autoTrackExposure: true };
    cResult[2] = obj3;
    tmp3 = obj3;
  } else {
    tmp3 = cResult[2];
  }
  return experiment.useExperiment(tmp2, tmp3).enabled;
}) : ((location) => {
  const obj = { location };
  return experiment.useExperiment(obj, { autoTrackExposure: true }).enabled;
});
const result = size.fileFinishedImporting("modules/in_app_reports/SafetyExperienceIarUserReportingExperiment.tsx");

export default experiment;
export const useIsIarUserReportingEnabled = tmp3;
export const isIarUserReportingEnabled = function isIarUserReportingEnabled(location) {
  const obj = { location };
  return experiment.getCurrentConfig(obj, { autoTrackExposure: true }).enabled;
};