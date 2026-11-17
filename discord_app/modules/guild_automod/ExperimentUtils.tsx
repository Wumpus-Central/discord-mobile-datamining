// === Module 20458: guild_automod/ExperimentUtils ===

// Module 20458 (guild_automod/ExperimentUtils)
import AutomodExperiment from "AutomodExperiment" /* 20459 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/ExperimentUtils.tsx");

export function useIsApplicationRuleEnabled(guildId) {
  const AutomodApplicationRules = AutomodExperiment.AutomodApplicationRules;
  let enabled = AutomodApplicationRules.useConfig({ guildId, location: "automod_settings" }).enabled;
  if (!enabled) {
    enabled = obj2.useIsConjureGuildEnabled(obj3);
  }
  return enabled;
}