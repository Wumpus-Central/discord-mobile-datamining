// === Module 16313: GuildMediaStateStoreExperiment ===

// Module 16313 (GuildMediaStateStoreExperiment)
import react from "react" /* 576 */;
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1441 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj3;
let obj = { HOOK: "hook", STORE: "store", SHADOW: "shadow" };
let obj2 = { kind: "user", name: "2026-08-guilds-bar-media-state-store", defaultConfig: { source: obj.HOOK }, variations: obj3 };
obj3 = { 0: { source: obj.HOOK }, 1: { source: obj.STORE }, 2: { source: obj.SHADOW } };
let closure_2 = apex_ApexExperimentDefault(obj2);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  let tmp2;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2).source;
}) : ((location) => {
  const obj = { location };
  return closure_2.useConfig(obj).source;
});
const result = size.fileFinishedImporting("modules/guilds_bar/GuildMediaStateStoreExperiment.tsx");

export const GuildMediaStateSource = obj;
export const useGuildMediaStateSource = tmp2;