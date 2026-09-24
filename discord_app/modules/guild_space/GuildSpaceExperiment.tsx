// discord_app/modules/guild_space/GuildSpaceExperiment.tsx
import Constants from "../../Constants.tsx";
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
const apexExperiment = ApexExperiment.createApexExperiment({
  kind: "guild",
  name: "2026-09-guild-spaces",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
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
