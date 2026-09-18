// discord_app/modules/guild_automod/ExperimentUtils.tsx
import AutomodExperiment from "AutomodExperiment.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_automod/ExperimentUtils.tsx");

export const isInMentionRaidExperiment = function isInMentionRaidExperiment(guildId) {
  const AutomodMentionRaidLimit = AutomodExperiment.AutomodMentionRaidLimit;
  return AutomodMentionRaidLimit.getCurrentConfig({ guildId, location: "988d4e_3" }).enabled;
};
export const useIsMentionRaidExperimentEnabled = function useIsMentionRaidExperimentEnabled(guildId, arg1) {
  let autoTrackExposure = arg1;
  if (arg1 === undefined) {
    autoTrackExposure = true;
  }
  const AutomodMentionRaidLimit = AutomodExperiment.AutomodMentionRaidLimit;
  return AutomodMentionRaidLimit.useExperiment({ guildId, location: "988d4e_4" }, { autoTrackExposure }).enabled;
};
export const useIsApplicationRuleEnabled = function useIsApplicationRuleEnabled(guildId) {
  const AutomodApplicationRules = AutomodExperiment.AutomodApplicationRules;
  return AutomodApplicationRules.useConfig({ guildId, location: "automod_settings" }).enabled;
};
