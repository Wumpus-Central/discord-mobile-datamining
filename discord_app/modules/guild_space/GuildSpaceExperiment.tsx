// discord_app/modules/guild_space/GuildSpaceExperiment.tsx
import c from "../../../_runtime/00576_c.js";
import Constants from "../../Constants.tsx";
import ApexExperiment from "../experiments/apex/index.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
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
export const useGuildSpaceExperimentEnabled = ReactCompilerGating.isReactCompilerEnabled()
  ? function useGuildSpaceExperimentEnabled(arg0, location) {
      let tmp = arg0;
      const cResult = c.c(3);
      if (arg0 == null) {
        tmp = EMPTY_STRING_SNOWFLAKE_ID;
      }
      if (cResult[0] === location) {
        if (cResult[1] === tmp) {
          let tmp3 = cResult[2];
        }
        return apexExperiment.useConfig(tmp3).enabled;
      }
      const obj2 = { guildId: tmp, location };
      cResult[0] = location;
      cResult[1] = tmp;
      cResult[2] = obj2;
      tmp3 = obj2;
    }
  : function useGuildSpaceExperimentEnabled(arg0, location) {
      let tmp = arg0;
      if (arg0 == null) {
        tmp = EMPTY_STRING_SNOWFLAKE_ID;
      }
      return apexExperiment.useConfig({ guildId: tmp, location }).enabled;
    };
