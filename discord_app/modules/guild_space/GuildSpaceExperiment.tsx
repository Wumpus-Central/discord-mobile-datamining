// === Module 7556: GuildSpaceExperiment ===

// Module 7556 (GuildSpaceExperiment)
import createExperiment from "module_4740" /* 4740 */;
import size from "module_2" /* 2 */;

const obj = { kind: "guild", id: "2026-06_guild_spaces", label: "Guild Space", defaultConfig: { enabled: false }, treatments: null };
const items = [{ id: 1, label: "Enable Guild Space", config: { enabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/guild_space/GuildSpaceExperiment.tsx");

export const GuildSpaceExperiment = experiment;
export const getGuildSpaceExperimentEnabled = function getGuildSpaceExperimentEnabled(id, GuildSettingsModalOverview) {
  return experiment.getCurrentConfig({ guildId: id, location: GuildSettingsModalOverview }, { autoTrackExposure: false }).enabled;
};
export const useGuildSpaceExperimentEnabled = function useGuildSpaceExperimentEnabled(guildId, location) {
  return experiment.useExperiment({ guildId, location }, { autoTrackExposure: false }).enabled;
};