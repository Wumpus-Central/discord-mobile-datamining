// === Module 7558: GuildSpaceExperiment ===

// Module 7558 (GuildSpaceExperiment)
import Constants from "Constants" /* 1074 */;
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "guild", name: "2026-09-guild-spaces", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/guild_space/GuildSpaceExperiment.tsx");

export const GuildSpaceExperiment = apexExperiment;
export const getGuildSpaceExperimentEnabled = function getGuildSpaceExperimentEnabled(id, GuildSettingsModalOverview) {
  let enabled = null != id;
  if (enabled) {
    const obj = { guildId: id, location: GuildSettingsModalOverview };
    enabled = apexExperiment.getConfig(obj).enabled;
  }
  return enabled;
};
export const useGuildSpaceExperimentEnabled = function useGuildSpaceExperimentEnabled(id, location) {
  let tmp = id;
  if (id == null) {
    tmp = EMPTY_STRING_SNOWFLAKE_ID;
  }
  return apexExperiment.useConfig({ guildId: tmp, location }).enabled;
};