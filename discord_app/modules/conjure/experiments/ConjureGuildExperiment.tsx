// === Module 6794: ConjureGuildExperiment ===

// Module 6794 (ConjureGuildExperiment)
import c from "c" /* 576 */;
import GuildStore from "GuildStore" /* 4843 */;

const require = globalThis.__r;

require = fn;
function isConjureGuildEnabled(guildId) {
  guildId = guildId.guildId;
  let enabled = null != guildId;
  if (enabled) {
    const obj = { guildId, location: tmp };
    enabled = closure_4.getConfig(obj).enabled;
  }
  return enabled;
}
function hasConjureGuild(arg0, DMAppChannel) {
  const obj = arg0[Symbol.iterator]();
  while (obj !== undefined) {
    let obj2 = { guildId: tmp.id, location: DMAppChannel };
    if (isConjureGuildEnabled(obj2)) {
      obj.return();
      let flag = true;
      return true;
    }
  }
  return false;
}
function hasConjureGuildWithoutExposure(conjure_resume) {
  const values = Object.values(GuildStore.getGuilds());
  for (const item10012 of values) {
    let obj2 = { guildId: item10012.id, location: arg0 };
    if (closure_4.getConfig(obj2, { autoTrackExposure: false }).enabled) {
      obj.return();
      let flag = true;
      return true;
    }
  }
  return false;
}
const EMPTY_STRING_SNOWFLAKE_ID = fn(1087).EMPTY_STRING_SNOWFLAKE_ID;
const ApexExperiment = fn(1455);
let closure_4 = ApexExperiment.createApexExperiment({ name: "2026-07-vibegrations-guild", kind: "guild", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
fn(558);
const ReactCompilerGating = fn(558);
let obj2 = { name: "2026-07-vibegrations-guild", kind: "guild", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsConjureGuildEnabled(arg0) {
  const cResult = c.c(3);
  ({ guildId, location: _location } = arg0);
  if (guildId == null) {
    guildId = EMPTY_STRING_SNOWFLAKE_ID;
  }
  if (cResult[0] === _location) {
    if (cResult[1] === guildId) {
      let tmp2 = cResult[2];
    }
    return closure_4.useConfig(tmp2).enabled;
  }
  const obj2 = { guildId, location: _location };
  cResult[0] = _location;
  cResult[1] = guildId;
  cResult[2] = obj2;
  tmp2 = obj2;
}) : (function useIsConjureGuildEnabled(location) {
  let guildId = location.guildId;
  if (guildId == null) {
    guildId = EMPTY_STRING_SNOWFLAKE_ID;
  }
  return closure_4.useConfig({ guildId, location: location.location }).enabled;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/experiments/ConjureGuildExperiment.tsx");

export const useIsConjureGuildEnabled = tmp2;
export { isConjureGuildEnabled };
export { hasConjureGuild };
export { hasConjureGuildWithoutExposure };
export const useHasConjureGuild = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasConjureGuild(arg0, arg1) {
  _require = arg0;
  const cResult = require("c").c(7);
  if (cResult[0] !== arg1) {
    let obj2 = arg1;
    if (undefined === arg1) {
      obj2 = {};
    }
    cResult[0] = arg1;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const autoTrackExposure = tmp4.autoTrackExposure;
  dependencyMap = tmp5;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, tmp(1455).ApexExperimentStore];
    cResult[2] = items;
    let tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === (undefined === autoTrackExposure || autoTrackExposure)) {
    if (cResult[4] === arg0) {
      let tmp8 = cResult[5];
      let tmp9 = cResult[6];
    }
    return tmp(504).useStateFromStores(tmp6, tmp8, tmp9);
  }
  const fn = function c() {
    if (closure_1) {
      const _Object = Object;
      let tmp3 = hasConjureGuild(Object.values(GuildStore.getGuilds()), closure_0);
    } else {
      tmp3 = hasConjureGuildWithoutExposure(closure_0);
    }
    return tmp3;
  };
  const items1 = [arg0, undefined === autoTrackExposure || autoTrackExposure];
  cResult[3] = undefined === autoTrackExposure || autoTrackExposure;
  cResult[4] = arg0;
  cResult[5] = fn;
  cResult[6] = items1;
  tmp9 = items1;
  tmp8 = fn;
  const obj = require("c");
}) : (function useHasConjureGuild(arg0) {
  _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.autoTrackExposure;
  if (flag === undefined) {
    flag = true;
  }
  const items = [GuildStore, require("ApexExperiment").ApexExperimentStore];
  const items1 = [arg0, flag];
  return require("initialize").useStateFromStores(items, () => {
    if (flag) {
      const _Object = Object;
      let tmp3 = hasConjureGuild(Object.values(GuildStore.getGuilds()), closure_0);
    } else {
      tmp3 = hasConjureGuildWithoutExposure(closure_0);
    }
    return tmp3;
  }, items1);
});