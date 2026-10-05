// discord_app/modules/conjure/experiments/ConjureGuildExperiment.tsx
import react from "../../../../_runtime/00576_react.js";
import Constants from "../../../Constants.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import ApexExperiment from "../../experiments/apex/index.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

function isConjureGuildEnabled(guildId) {
  guildId = guildId.guildId;
  let enabled = null != guildId;
  if (enabled) {
    const obj = { guildId, location: tmp };
    enabled = closure_4.getConfig(obj).enabled;
  }
  return enabled;
}
function hasConjureGuild(arg0, location) {
  const obj = arg0[Symbol.iterator]();
  while (obj !== undefined) {
    let obj2 = { guildId: tmp.id, location };
    if (isConjureGuildEnabled(obj2)) {
      obj.return();
      let flag = true;
      return true;
    }
  }
  return false;
}
const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
let obj = {
  name: "2026-07-vibegrations-guild",
  kind: "guild",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
};
let closure_4 = ApexExperiment.createApexExperiment(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let _location;
      let guildId;
      const obj = react;
      const cResult = obj.c(3);
      ({ guildId, location: _location } = arg0);
      if (guildId == null) {
        guildId = EMPTY_STRING_SNOWFLAKE_ID;
      }
      if (cResult[0] === _location) {
        let tmp2;
        if (cResult[1] === guildId) {
          tmp2 = cResult[2];
        }
        return closure_4.useConfig(tmp2).enabled;
      }
      const obj2 = { guildId, location: _location };
      cResult[0] = _location;
      cResult[1] = guildId;
      cResult[2] = obj2;
      tmp2 = obj2;
    }
  : (guildId) => {
      guildId = guildId.guildId;
      const _location = guildId.location;
      const useConfig = closure_4.useConfig;
      if (guildId == null) {
        guildId = EMPTY_STRING_SNOWFLAKE_ID;
      }
      return useConfig({ guildId, location: _location }).enabled;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      let tmp7;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore, require("ApexExperiment").ApexExperimentStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          return hasConjureGuild(Object.values(GuildStore.getGuilds()), closure_0);
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = require("get initialized");
      return tmpResult.useStateFromStores(first, tmp6, tmp7);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [GuildStore];
      const useStateFromStores = require("get initialized").useStateFromStores;
      require("get initialized");
      items[1] = require("ApexExperiment").ApexExperimentStore;
      const items1 = [arg0];
      return useStateFromStores(items, () => hasConjureGuild(Object.values(GuildStore.getGuilds()), closure_0), items1);
    };
const result = size.fileFinishedImporting("modules/conjure/experiments/ConjureGuildExperiment.tsx");

export const useIsConjureGuildEnabled = tmp2;
export { isConjureGuildEnabled };
export { hasConjureGuild };
export const useHasConjureGuild = tmp3;
