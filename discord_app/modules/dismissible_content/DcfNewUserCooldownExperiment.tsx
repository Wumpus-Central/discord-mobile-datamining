// discord_app/modules/dismissible_content/DcfNewUserCooldownExperiment.tsx
import react from "../../../_runtime/00576_react.js";
import DurationsDefault from "../../utils/Durations.tsx";
import ApexExperiment from "../experiments/apex/index.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj2;
let obj3;
let obj = { name: "2026-08-dcf-new-user-cooldown", kind: "user", defaultConfig: obj2, variations: obj3 };
obj2 = { newUserCooldownMs: DurationsDefault.Millis.DAY };
const createApexExperiment = ApexExperiment.createApexExperiment;
obj3 = { 1: null, 2: { newUserCooldownMs: 2 * DurationsDefault.Millis.DAY }, 3: null };
({ newUserCooldownMs: 2 * DurationsDefault.Millis.DAY });
obj3[2] = { newUserCooldownMs: 3 * DurationsDefault.Millis.DAY };
({ newUserCooldownMs: 3 * DurationsDefault.Millis.DAY });
obj3[3] = { newUserCooldownMs: 7 * DurationsDefault.Millis.DAY };
({ newUserCooldownMs: 7 * DurationsDefault.Millis.DAY });
let closure_2 = createApexExperiment(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      const obj = react;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "useDcfNewUserCooldown" };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      return closure_2.useConfig(first).newUserCooldownMs;
    }
  : () => closure_2.useConfig({ location: "useDcfNewUserCooldown" }).newUserCooldownMs;
const result = size.fileFinishedImporting("modules/dismissible_content/DcfNewUserCooldownExperiment.tsx");

export const useDcfNewUserCooldown = tmp3;
export const getDcfNewUserCooldown = function getDcfNewUserCooldown() {
  return closure_2.getConfig({ location: "getDcfNewUserCooldown" }).newUserCooldownMs;
};
