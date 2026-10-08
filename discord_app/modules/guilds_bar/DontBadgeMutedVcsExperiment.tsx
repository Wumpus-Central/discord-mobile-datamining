// discord_app/modules/guilds_bar/DontBadgeMutedVcsExperiment.tsx
import c from "../../../_runtime/00576_c.js";
import apex_ApexExperimentDefault from "../experiments/apex/ApexExperiment.tsx";

require = fn;
let closure_2 = apex_ApexExperimentDefault({
  kind: "user",
  name: "2026-06-dont-badge-muted-vcs",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/DontBadgeMutedVcsExperiment.tsx");

export const useIsDontBadgeMutedVcsEnabled = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsDontBadgeMutedVcsEnabled(location) {
      const cResult = c.c(2);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        let tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return closure_2.useConfig(tmp2).enabled;
    }
  : function useIsDontBadgeMutedVcsEnabled(location) {
      return closure_2.useConfig({ location }).enabled;
    };
export const getIsDontBadgeMutedVcsEnabled = function getIsDontBadgeMutedVcsEnabled(GuildMediaStateStore) {
  return closure_2.getConfig({ location: GuildMediaStateStore }).enabled;
};
