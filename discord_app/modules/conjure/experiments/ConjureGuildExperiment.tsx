// === Module 6873: ConjureGuildExperiment ===

// Module 6873 (ConjureGuildExperiment)
import ConjureUserExperiment from "ConjureUserExperiment" /* 6874 */;
import GuildStore from "GuildStore" /* 4880 */;

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
const EMPTY_STRING_SNOWFLAKE_ID = fn(1072).EMPTY_STRING_SNOWFLAKE_ID;
const ApexExperiment = fn(1448);
let closure_4 = ApexExperiment.createApexExperiment({ name: "2026-07-vibegrations-guild", kind: "guild", defaultConfig: { enabled: false, requiresUserExperiment: false }, variations: { 0: { enabled: false, requiresUserExperiment: false }, 1: { enabled: true, requiresUserExperiment: false }, 2: { enabled: true, requiresUserExperiment: true } } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/experiments/ConjureGuildExperiment.tsx");

export function useIsConjureGuildEnabled(arg0) {
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
  return _location(enabled[4]).useStateFromStores(items, () => {
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
}
export { isConjureGuildEnabled };
export { hasConjureGuild };
export { hasConjureGuildWithoutExposure };
export function useHasConjureGuild(DMAppChannel, arg1) {
  _require = DMAppChannel;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.autoTrackExposure;
  if (flag === undefined) {
    flag = true;
  }
  const items = [GuildStore, require("ApexExperiment").ApexExperimentStore];
  const items1 = [DMAppChannel, flag];
  return require("initialize").useStateFromStores(items, () => {
    if (flag) {
      const _Object = Object;
      let tmp3 = hasConjureGuild(Object.values(GuildStore.getGuilds()), closure_0);
    } else {
      tmp3 = hasConjureGuildWithoutExposure(closure_0);
    }
    return tmp3;
  }, items1);
}