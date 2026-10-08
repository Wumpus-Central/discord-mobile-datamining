// discord_app/modules/guild_automod/ExperimentUtils.tsx
import c from "../../../_runtime/00576_c.js";
import AutomodExperiment from "AutomodExperiment.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_automod/ExperimentUtils.tsx");

export const useIsApplicationRuleEnabled = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsApplicationRuleEnabled(guildId) {
      const cResult = c.c(4);
      if (cResult[0] !== guildId) {
        const obj2 = { guildId, location: "automod_settings" };
        cResult[0] = guildId;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const AutomodApplicationRules = AutomodExperiment.AutomodApplicationRules;
      let enabled = AutomodApplicationRules.useConfig(tmp4).enabled;
      if (cResult[2] !== guildId) {
        const obj3 = { guildId, location: "automod_settings" };
        cResult[2] = guildId;
        cResult[3] = obj3;
        let tmp5 = obj3;
      } else {
        tmp5 = cResult[3];
      }
      if (!enabled) {
        enabled = tmpResult.useIsConjureGuildEnabled(tmp5);
      }
      return enabled;
    }
  : function useIsApplicationRuleEnabled(guildId) {
      const AutomodApplicationRules = AutomodExperiment.AutomodApplicationRules;
      let enabled = AutomodApplicationRules.useConfig({ guildId, location: "automod_settings" }).enabled;
      if (!enabled) {
        enabled = obj2.useIsConjureGuildEnabled(obj3);
      }
      return enabled;
    };
