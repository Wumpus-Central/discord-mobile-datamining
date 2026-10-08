// discord_app/modules/dismissible_content/DcfNewUserCooldownExperiment.tsx
import c from "../../../_runtime/00576_c.js";
import DurationsDefault from "../../utils/Durations.tsx";
import ApexExperiment from "../experiments/apex/index.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-08-dcf-new-user-cooldown",
  kind: "user",
  defaultConfig: { newUserCooldownMs: DurationsDefault.Millis.DAY },
  variations: null,
};
const obj3 = { 1: null, 2: null, 3: null };
let obj2 = { newUserCooldownMs: DurationsDefault.Millis.DAY };
obj3[1] = { newUserCooldownMs: 2 * DurationsDefault.Millis.DAY };
const obj4 = { newUserCooldownMs: 2 * DurationsDefault.Millis.DAY };
obj3[2] = { newUserCooldownMs: 3 * DurationsDefault.Millis.DAY };
const obj5 = { newUserCooldownMs: 3 * DurationsDefault.Millis.DAY };
obj3[3] = { newUserCooldownMs: 7 * DurationsDefault.Millis.DAY };
obj.variations = obj3;
let closure_2 = ApexExperiment.createApexExperiment(obj);
const obj6 = { newUserCooldownMs: 7 * DurationsDefault.Millis.DAY };
const result = size.fileFinishedImporting("modules/dismissible_content/DcfNewUserCooldownExperiment.tsx");

export const useDcfNewUserCooldown = ReactCompilerGating.isReactCompilerEnabled()
  ? function useDcfNewUserCooldown() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "useDcfNewUserCooldown" };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      return closure_2.useConfig(first).newUserCooldownMs;
    }
  : function useDcfNewUserCooldown() {
      return closure_2.useConfig({ location: "useDcfNewUserCooldown" }).newUserCooldownMs;
    };
export const getDcfNewUserCooldown = function getDcfNewUserCooldown() {
  return closure_2.getConfig({ location: "getDcfNewUserCooldown" }).newUserCooldownMs;
};
