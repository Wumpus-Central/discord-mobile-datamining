// discord_app/modules/guild_space/GuildSpaceExperiment.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import createExperiment from "../experiments/index.tsx";

const items = [{ id: 1, label: "Enable Guild Space", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "guild", id: "2026-06_guild_spaces", label: "Guild Space", defaultConfig: { enabled: false }, treatments: items });
const result = obj132.fileFinishedImporting("modules/guild_space/GuildSpaceExperiment.tsx");

export const GuildSpaceExperiment = experiment;
export const getGuildSpaceExperimentEnabled = function getGuildSpaceExperimentEnabled(guildId, location) {
  return experiment.getCurrentConfig({ guildId, location }, { autoTrackExposure: false }).enabled;
};
export const useGuildSpaceExperimentEnabled = function useGuildSpaceExperimentEnabled(id, location) {
  return experiment.useExperiment({ guildId: id, location }, { autoTrackExposure: false }).enabled;
};