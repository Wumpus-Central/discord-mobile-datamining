// discord_app/modules/media_engine/experiments/DesktopGeneralPerfExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const config = ApexExperiment.createApexExperiment({
  name: "2026-10-desktop-general-perf",
  kind: "user",
  defaultConfig: { skipSilentDelayEstimatorFfts: false, basicProcessEnumeration: false },
  variations: {
    0: { skipSilentDelayEstimatorFfts: false, basicProcessEnumeration: false },
    1: { skipSilentDelayEstimatorFfts: true, basicProcessEnumeration: true },
  },
});
const result = size.fileFinishedImporting("modules/media_engine/experiments/DesktopGeneralPerfExperiment.tsx");

export const getDesktopGeneralPerfExperimentConfig = function getDesktopGeneralPerfExperimentConfig(
  capture_processing_delay_estimator,
) {
  return config.getConfig({ location: capture_processing_delay_estimator });
};
