// === Module 6748: VibegrationsGuildExperiment ===

// Module 6748 (VibegrationsGuildExperiment)
import c from "c" /* 576 */;
import GuildStore from "GuildStore" /* 2074 */;

const require = globalThis.__r;

require = fn;
function isVibegrationsGuildEnabled(guildId) {
  guildId = guildId.guildId;
  let enabled = null != guildId;
  if (enabled) {
    const obj = { guildId, location: tmp };
    enabled = closure_4.getConfig(obj).enabled;
  }
  return enabled;
}
function hasVibegrationsGuild(arg0, location) {
  const obj = arg0[Symbol.iterator]();
  while (obj !== undefined) {
    let obj2 = { guildId: tmp.id, location };
    if (isVibegrationsGuildEnabled(obj2)) {
      obj.return();
      let flag = true;
      return true;
    }
  }
  return false;
}
const EMPTY_STRING_SNOWFLAKE_ID = fn(1085).EMPTY_STRING_SNOWFLAKE_ID;
const ApexExperiment = fn(1440);
let closure_4 = ApexExperiment.createApexExperiment({ name: "2026-07-vibegrations-guild", kind: "guild", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
fn(558);
const ReactCompilerGating = fn(558);
let obj2 = { name: "2026-07-vibegrations-guild", kind: "guild", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
}) : ((location) => {
  let guildId = location.guildId;
  if (guildId == null) {
    guildId = EMPTY_STRING_SNOWFLAKE_ID;
  }
  return closure_4.useConfig({ guildId, location: location.location }).enabled;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/experiments/VibegrationsGuildExperiment.tsx");

export const useIsVibegrationsGuildEnabled = tmp2;
export { isVibegrationsGuildEnabled };
export { hasVibegrationsGuild };
export const useHasVibegrationsGuild = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, tmp(1440).ApexExperimentStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      return hasVibegrationsGuild(Object.values(GuildStore.getGuilds()), closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : ((arg0) => {
  _require = arg0;
  const items = [GuildStore, require("ApexExperiment").ApexExperimentStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => hasVibegrationsGuild(Object.values(GuildStore.getGuilds()), closure_0), items1);
});