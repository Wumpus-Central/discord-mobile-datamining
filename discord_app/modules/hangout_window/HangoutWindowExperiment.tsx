// discord_app/modules/hangout_window/HangoutWindowExperiment.tsx
import ExperimentConstants from "../experiments/ExperimentConstants.tsx";
import createExperiment from "../experiments/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  kind: "guild",
  id: "2026-02_hangout_window",
  label: "Hangout Window",
  defaultConfig: { enableHangoutWindow: false },
  commonTriggerPoint: ExperimentConstants.CommonTriggerPoints.VOICE_CALL,
  treatments: null,
};
const items = [{ id: 1, label: "Enable Hangout Window", config: { enableHangoutWindow: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/hangout_window/HangoutWindowExperiment.tsx");

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
