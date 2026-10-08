// discord_app/modules/guilds_bar/GuildMediaStateStoreExperiment.tsx
import c from "../../../_runtime/00576_c.js";
import apex_ApexExperimentDefault from "../experiments/apex/ApexExperiment.tsx";

require = fn;
const obj = { HOOK: "hook", STORE: "store", SHADOW: "shadow" };
let obj2 = {
  kind: "user",
  name: "2026-08-guilds-bar-media-state-store",
  defaultConfig: { source: obj.HOOK },
  variations: { 0: { source: obj.HOOK }, 1: { source: obj.STORE }, 2: { source: obj.SHADOW } },
};
let closure_2 = apex_ApexExperimentDefault(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/GuildMediaStateStoreExperiment.tsx");

export const GuildMediaStateSource = obj;
export const useGuildMediaStateSource = ReactCompilerGating.isReactCompilerEnabled()
  ? function useGuildMediaStateSource(location) {
      const cResult = c.c(2);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        let tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return closure_2.useConfig(tmp2).source;
    }
  : function useGuildMediaStateSource(location) {
      return closure_2.useConfig({ location }).source;
    };
