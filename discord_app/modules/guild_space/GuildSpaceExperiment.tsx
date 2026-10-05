// discord_app/modules/guild_space/GuildSpaceExperiment.tsx
import react from "../../../_runtime/00576_react.js";
import Constants from "../../Constants.tsx";
import ApexExperiment from "../experiments/apex/index.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
let obj = {
  kind: "guild",
  name: "2026-09-guild-spaces",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
};
const apexExperiment = ApexExperiment.createApexExperiment(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, location) => {
      let tmp = arg0;
      const obj = react;
      const cResult = obj.c(3);
      if (arg0 == null) {
        tmp = EMPTY_STRING_SNOWFLAKE_ID;
      }
      if (cResult[0] === location) {
        let tmp3;
        if (cResult[1] === tmp) {
          tmp3 = cResult[2];
        }
        return apexExperiment.useConfig(tmp3).enabled;
      }
      const obj2 = { guildId: tmp, location };
      cResult[0] = location;
      cResult[1] = tmp;
      cResult[2] = obj2;
      tmp3 = obj2;
    }
  : (arg0, location) => {
      let tmp = arg0;
      const useConfig = apexExperiment.useConfig;
      if (arg0 == null) {
        tmp = EMPTY_STRING_SNOWFLAKE_ID;
      }
      const obj = { guildId: tmp, location };
      return useConfig(obj).enabled;
    };
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
export const useGuildSpaceExperimentEnabled = tmp3;
