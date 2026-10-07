// === Module 6740: GuildSpaceExperiment ===

// Module 6740 (GuildSpaceExperiment)
import c from "c" /* 576 */;
import Constants from "Constants" /* 1085 */;
import ApexExperiment from "ApexExperiment" /* 1440 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
export const useGuildSpaceExperimentEnabled = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, location) => {
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
}) : ((arg0, location) => {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = EMPTY_STRING_SNOWFLAKE_ID;
  }
  return apexExperiment.useConfig({ guildId: tmp, location }).enabled;
});