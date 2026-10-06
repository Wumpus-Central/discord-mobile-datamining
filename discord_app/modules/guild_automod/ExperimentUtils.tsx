// === Module 17726: guild_automod/ExperimentUtils ===

// Module 17726 (guild_automod/ExperimentUtils)
import react from "react" /* 576 */;
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6758 */;
import AutomodExperiment from "AutomodExperiment" /* 17727 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(4);
  if (cResult[0] !== guildId) {
    const obj2 = { guildId, location: "automod_settings" };
    cResult[0] = guildId;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const AutomodApplicationRules = AutomodExperiment.AutomodApplicationRules;
  let enabled = AutomodApplicationRules.useConfig(tmp4).enabled;
  if (cResult[2] !== guildId) {
    const obj3 = { guildId, location: "automod_settings" };
    cResult[2] = guildId;
    cResult[3] = obj3;
    tmp5 = obj3;
  } else {
    tmp5 = cResult[3];
  }
  const tmpResult = ConjureGuildExperiment;
  if (!enabled) {
    enabled = tmpResult.useIsConjureGuildEnabled(tmp5);
  }
  return enabled;
}) : ((guildId) => {
  const AutomodApplicationRules = AutomodExperiment.AutomodApplicationRules;
  const obj = { guildId, location: "automod_settings" };
  let enabled = AutomodApplicationRules.useConfig(obj).enabled;
  const obj2 = ConjureGuildExperiment;
  const obj3 = { guildId, location: "automod_settings" };
  if (!enabled) {
    enabled = obj2.useIsConjureGuildEnabled(obj3);
  }
  return enabled;
});
const result = size.fileFinishedImporting("modules/guild_automod/ExperimentUtils.tsx");

export const useIsApplicationRuleEnabled = tmp2;