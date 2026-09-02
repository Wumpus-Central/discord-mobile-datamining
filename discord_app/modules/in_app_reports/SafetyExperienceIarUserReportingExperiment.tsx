// === Module 9071: experiment ===

// Module 9071 (experiment)
import set from "set" /* 2 */;
import createExperiment from "createExperiment" /* 4389 */;

const items = [{ id: 1, label: "Enabled", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "user", id: "2023-09_iar_user_reporting", label: "Safety Experience IAR User Reporting", defaultConfig: { enabled: false }, treatments: items });
const result = set.fileFinishedImporting("modules/in_app_reports/SafetyExperienceIarUserReportingExperiment.tsx");

export default experiment;
export const useIsIarUserReportingEnabled = function useIsIarUserReportingEnabled(location) {
  return experiment.useExperiment({ location }, { autoTrackExposure: true }).enabled;
};
export const isIarUserReportingEnabled = function isIarUserReportingEnabled(location) {
  return experiment.getCurrentConfig({ location }, { autoTrackExposure: true }).enabled;
};