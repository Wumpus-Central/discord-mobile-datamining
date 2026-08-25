// === Module 5953: experiment ===

// Module 5953 (experiment)
import set from "set" /* 2 */;
import createExperiment from "createExperiment" /* 4291 */;

const items = [{ id: 1, label: "Enable Guild Space", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "guild", id: "2026-06_guild_spaces", label: "Guild Space", defaultConfig: { enabled: false }, treatments: items });
const result = set.fileFinishedImporting("modules/guild_space/GuildSpaceExperiment.tsx");

export const GuildSpaceExperiment = experiment;
export const getGuildSpaceExperimentEnabled = function getGuildSpaceExperimentEnabled(guildId, location) {
  return experiment.getCurrentConfig({ guildId, location }, { autoTrackExposure: false }).enabled;
};
export const useGuildSpaceExperimentEnabled = function useGuildSpaceExperimentEnabled(id, location) {
  return experiment.useExperiment({ guildId: id, location }, { autoTrackExposure: false }).enabled;
};