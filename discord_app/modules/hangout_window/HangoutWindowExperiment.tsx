// discord_app/modules/hangout_window/HangoutWindowExperiment.tsx
import set from "../../../_runtime/00002_set.js";
import ExperimentBuckets from "../experiments/ExperimentConstants.tsx";
import createExperiment from "../experiments/index.tsx";

const items = [{ id: 1, label: "Enable Hangout Window", config: { enableHangoutWindow: true } }];
const experiment = createExperiment.createExperiment({
  kind: "guild",
  id: "2026-02_hangout_window",
  label: "Hangout Window",
  defaultConfig: { enableHangoutWindow: false },
  commonTriggerPoint: ExperimentBuckets.CommonTriggerPoints.VOICE_CALL,
  treatments: items,
});
const obj = {
  kind: "guild",
  id: "2026-02_hangout_window",
  label: "Hangout Window",
  defaultConfig: { enableHangoutWindow: false },
  commonTriggerPoint: ExperimentBuckets.CommonTriggerPoints.VOICE_CALL,
  treatments: items,
};
const result = set.fileFinishedImporting("modules/hangout_window/HangoutWindowExperiment.tsx");

export const HangoutWindowExperiment = experiment;
export const useHangoutWindowExperiment = function useHangoutWindowExperiment(guildId) {
  return experiment.useExperiment(
    { guildId: guildId.guildId, location: guildId.location },
    { autoTrackExposure: true },
  );
};
export const getHangoutWindowExperiment = function getHangoutWindowExperiment(guildId) {
  return experiment.getCurrentConfig(
    { guildId: guildId.guildId, location: guildId.location },
    { autoTrackExposure: true },
  );
};
