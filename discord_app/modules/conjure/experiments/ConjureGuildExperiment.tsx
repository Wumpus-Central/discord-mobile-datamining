// === Module 6809: ConjureGuildExperiment ===

// Module 6809 (ConjureGuildExperiment)
import ConjureUserExperiment from "ConjureUserExperiment" /* 6810 */;
import GuildStore from "GuildStore" /* 4846 */;

const require = globalThis.__r;

require = fn;
function isEnabledForUser(config, location) {
  ({ enabled, requiresUserExperiment } = config);
  if (enabled) {
    let isConjureUserEnabledResult = !requiresUserExperiment;
    if (requiresUserExperiment) {
      const obj2 = { location };
      const obj3 = { autoTrackExposure: false };
      isConjureUserEnabledResult = ConjureUserExperiment.isConjureUserEnabled(obj2, obj3);
    }
    enabled = isConjureUserEnabledResult;
  }
  return enabled;
}
function isConjureGuildEnabled(arg0) {
  ({ guildId, location: _location } = arg0);
  let tmp = null != guildId;
  if (tmp) {
    const obj = { guildId, location: _location };
    const config = closure_4.getConfig(obj);
    ({ enabled, requiresUserExperiment } = config);
    if (enabled) {
      let isConjureUserEnabledResult = !requiresUserExperiment;
      if (requiresUserExperiment) {
        const obj3 = { location: _location };
        const obj4 = { autoTrackExposure: true };
        isConjureUserEnabledResult = ConjureUserExperiment.isConjureUserEnabled(obj3, obj4);
      }
      enabled = isConjureUserEnabledResult;
    }
    tmp = enabled;
  }
  return tmp;
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
  const obj = values[Symbol.iterator]();
  while (obj !== undefined) {
    let obj2 = { guildId: tmp2.id, location: conjure_resume };
    if (isEnabledForUser(closure_4.getConfig(obj2, { autoTrackExposure: false }), conjure_resume, false)) {
      obj.return();
      let flag = true;
      return true;
    }
  }
  return false;
}
const EMPTY_STRING_SNOWFLAKE_ID = fn(1084).EMPTY_STRING_SNOWFLAKE_ID;
const ApexExperiment = fn(1452);
let closure_4 = ApexExperiment.createApexExperiment({ name: "2026-07-vibegrations-guild", kind: "guild", defaultConfig: { enabled: false, requiresUserExperiment: false }, variations: { 0: { enabled: false, requiresUserExperiment: false }, 1: { enabled: true, requiresUserExperiment: false }, 2: { enabled: true, requiresUserExperiment: true } } });
fn(558);
const ReactCompilerGating = fn(558);
let obj2 = { name: "2026-07-vibegrations-guild", kind: "guild", defaultConfig: { enabled: false, requiresUserExperiment: false }, variations: { 0: { enabled: false, requiresUserExperiment: false }, 1: { enabled: true, requiresUserExperiment: false }, 2: { enabled: true, requiresUserExperiment: true } } };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsConjureGuildEnabled(arg0) {
  const cResult = _location(enabled[5]).c(9);
  ({ guildId, location: _location } = arg0);
  if (guildId == null) {
    guildId = EMPTY_STRING_SNOWFLAKE_ID;
  }
  if (cResult[0] === _location) {
    if (cResult[1] === guildId) {
      let tmp4 = cResult[2];
    }
    const config = closure_4.useConfig(tmp4);
    enabled = config.enabled;
    const requiresUserExperiment = config.requiresUserExperiment;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [_location(tmp2[2]).ApexExperimentStore];
      cResult[3] = items;
      let tmp8 = items;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] === enabled) {
      if (cResult[5] === _location) {
        if (cResult[6] === requiresUserExperiment) {
          let tmp9 = cResult[7];
          let tmp10 = cResult[8];
        }
        return _location(tmp2[6]).useStateFromStores(tmp8, tmp9, tmp10);
      }
    }
    const fn = function b() {
      let tmp = enabled;
      if (enabled) {
        let isConjureUserEnabledResult = !requiresUserExperiment;
        if (requiresUserExperiment) {
          const obj2 = { location: tmp3 };
          const obj3 = { autoTrackExposure: true };
          isConjureUserEnabledResult = ConjureUserExperiment.isConjureUserEnabled(obj2, obj3);
        }
        tmp = isConjureUserEnabledResult;
      }
      return tmp;
    };
    const items1 = [enabled, requiresUserExperiment, _location];
    cResult[4] = enabled;
    cResult[5] = _location;
    cResult[6] = requiresUserExperiment;
    cResult[7] = fn;
    cResult[8] = items1;
    tmp10 = items1;
    tmp9 = fn;
  }
  let obj2 = { guildId, location: _location };
  cResult[0] = _location;
  cResult[1] = guildId;
  cResult[2] = obj2;
  tmp4 = obj2;
  let obj = _location(enabled[5]);
}) : (function useIsConjureGuildEnabled(arg0) {
  ({ guildId, location: _location } = arg0);
  let enabled;
  let requiresUserExperiment;
  if (guildId == null) {
    guildId = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const config = closure_4.useConfig({ guildId, location: _location });
  enabled = config.enabled;
  requiresUserExperiment = config.requiresUserExperiment;
  const items = [_location(enabled[2]).ApexExperimentStore];
  const items1 = [enabled, requiresUserExperiment, _location];
  return _location(enabled[6]).useStateFromStores(items, () => {
    let tmp = enabled;
    if (enabled) {
      let isConjureUserEnabledResult = !requiresUserExperiment;
      if (requiresUserExperiment) {
        const obj2 = { location: tmp3 };
        const obj3 = { autoTrackExposure: true };
        isConjureUserEnabledResult = ConjureUserExperiment.isConjureUserEnabled(obj2, obj3);
      }
      tmp = isConjureUserEnabledResult;
    }
    return tmp;
  }, items1);
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
    const items = [GuildStore, tmp(1452).ApexExperimentStore];
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
  class E {
    constructor() {
      if (autoTrackExposure) {
        tmp4 = hasConjureGuild;
        tmp5 = globalThis;
        _Object = Object;
        tmp6 = closure_2;
        tmp7 = closure_0;
        tmp3 = hasConjureGuild(Object.values(closure_2.getGuilds()), closure_0);
      } else {
        tmp = hasConjureGuildWithoutExposure;
        tmp2 = closure_0;
        tmp3 = hasConjureGuildWithoutExposure(closure_0);
      }
      return tmp3;
    }
  }
  const items1 = [arg0, undefined === autoTrackExposure || autoTrackExposure];
  cResult[3] = undefined === autoTrackExposure || autoTrackExposure;
  cResult[4] = arg0;
  cResult[5] = E;
  cResult[6] = items1;
  tmp9 = items1;
  tmp8 = E;
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