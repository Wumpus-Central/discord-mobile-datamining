// === Module 12989: SafetyExperienceIarUserReportingExperiment ===

// Module 12989 (SafetyExperienceIarUserReportingExperiment)
import createExperiment from "module_4474" /* 4474 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", id: "2023-09_iar_user_reporting", label: "Safety Experience IAR User Reporting", defaultConfig: { enabled: false }, treatments: null };
const items = [{ id: 1, label: "Enabled", config: { enabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/in_app_reports/SafetyExperienceIarUserReportingExperiment.tsx");

export default experiment;
export const useIsIarUserReportingEnabled = function useIsIarUserReportingEnabled(location) {
  return experiment.useExperiment({ location }, { autoTrackExposure: true }).enabled;
};
export const isIarUserReportingEnabled = function isIarUserReportingEnabled(location) {
  return experiment.getCurrentConfig({ location }, { autoTrackExposure: true }).enabled;
};