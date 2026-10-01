// === Module 17568: guild_automod/ExperimentUtils ===

// Module 17568 (guild_automod/ExperimentUtils)
import AutomodExperiment from "AutomodExperiment" /* 17569 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/ExperimentUtils.tsx");

export const useIsApplicationRuleEnabled = function useIsApplicationRuleEnabled(guildId) {
  const AutomodApplicationRules = AutomodExperiment.AutomodApplicationRules;
  return AutomodApplicationRules.useConfig({ guildId, location: "automod_settings" }).enabled;
};