// discord_app/modules/guild_space/GuildSpaceExperiment.tsx
import createExperiment from "../experiments/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  kind: "guild",
  id: "2026-06_guild_spaces",
  label: "Guild Space",
  defaultConfig: { enabled: false },
  treatments: null,
};
const items = [{ id: 1, label: "Enable Guild Space", config: { enabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/guild_space/GuildSpaceExperiment.tsx");

export const GuildSpaceExperiment = experiment;
export const getGuildSpaceExperimentEnabled = function getGuildSpaceExperimentEnabled(guildId, location) {
  return experiment.getCurrentConfig({ guildId, location }, { autoTrackExposure: false }).enabled;
};
export const useGuildSpaceExperimentEnabled = function useGuildSpaceExperimentEnabled(guildId, location) {
  return experiment.useExperiment({ guildId, location }, { autoTrackExposure: false }).enabled;
};
