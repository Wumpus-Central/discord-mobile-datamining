// === Module 5819: DesktopGeneralPerfExperiment ===

// Module 5819 (DesktopGeneralPerfExperiment)
import PlatformUtils from "PlatformUtils" /* 1384 */;
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let closure_2 = ApexExperiment.createApexExperiment({ name: "2026-10-desktop-general-perf", kind: "user", defaultConfig: { skipSilentDelayEstimatorFfts: false, processPollingPerf: false, keepRendererLogFileOpen: false, questRingVisibleSteps: false }, variations: { 0: { skipSilentDelayEstimatorFfts: false, processPollingPerf: false, keepRendererLogFileOpen: false, questRingVisibleSteps: false }, 1: { skipSilentDelayEstimatorFfts: true, processPollingPerf: true, keepRendererLogFileOpen: true, questRingVisibleSteps: true } } });
const result = size.fileFinishedImporting("modules/desktop_perf/DesktopGeneralPerfExperiment.tsx");

export const getDesktopGeneralPerfExperimentConfig = function getDesktopGeneralPerfExperimentConfig(capture_processing_delay_estimator) {
  return closure_2.getConfig({ location: capture_processing_delay_estimator });
};
export const getIsQuestRingVisibleStepsEnabled = function getIsQuestRingVisibleStepsEnabled() {
  let questRingVisibleSteps = PlatformUtils.isDesktop();
  if (questRingVisibleSteps) {
    questRingVisibleSteps = closure_2.getConfig({ location: "quest_bar_circular_progress" }).questRingVisibleSteps;
  }
  return questRingVisibleSteps;
};