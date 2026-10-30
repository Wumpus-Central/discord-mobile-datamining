// discord_app/modules/guild_automod/ExperimentUtils.tsx
import AutomodExperiment from "AutomodExperiment.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_automod/ExperimentUtils.tsx");

export function useIsApplicationRuleEnabled(guildId) {
  const AutomodApplicationRules = AutomodExperiment.AutomodApplicationRules;
  let enabled = AutomodApplicationRules.useConfig({ guildId, location: "automod_settings" }).enabled;
  if (!enabled) {
    enabled = obj2.useIsConjureGuildEnabled(obj3);
  }
  return enabled;
}
