// === Module 5813: DesktopGeneralPerfExperiment ===

// Module 5813 (DesktopGeneralPerfExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

const config = ApexExperiment.createApexExperiment({ name: "2026-10-desktop-general-perf", kind: "user", defaultConfig: { skipSilentDelayEstimatorFfts: false, processPollingPerf: false, keepRendererLogFileOpen: false }, variations: { 0: { skipSilentDelayEstimatorFfts: false, processPollingPerf: false, keepRendererLogFileOpen: false }, 1: { skipSilentDelayEstimatorFfts: true, processPollingPerf: true, keepRendererLogFileOpen: true } } });
const result = size.fileFinishedImporting("modules/desktop_perf/DesktopGeneralPerfExperiment.tsx");

export const getDesktopGeneralPerfExperimentConfig = function getDesktopGeneralPerfExperimentConfig(capture_processing_delay_estimator) {
  return config.getConfig({ location: capture_processing_delay_estimator });
};