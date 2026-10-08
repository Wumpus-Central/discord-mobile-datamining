// === Module 12093: SmartSearchExperiments ===

// Module 12093 (SmartSearchExperiments)
import GuildStore from "GuildStore" /* 2086 */;

const require = globalThis.__r;

const require = fn;
const GuildFeatures = fn(1085).GuildFeatures;
let ApexExperiment = fn(1452);
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-09-mobile-nlp-search-user-flag", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
ApexExperiment = fn(1452);
const apexExperiment1 = ApexExperiment.createApexExperiment({ kind: "guild", name: "2026-09-mobile-nlp-search-guild-experiment", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/SmartSearchExperiments.tsx");

export const NlpSearchUserExperiment = apexExperiment;
export const NlpSearchGuildExperiment = apexExperiment1;
export const isNlpSearchEnabled = function isNlpSearchEnabled(guildId, suggested_searches) {
  guild = GuildStore.getGuild(guildId);
  let flag;
  if (guild != null) {
    const features = guild.features;
    flag = features.has(GuildFeatures.DISCOVERABLE);
  }
  if (flag == null) {
    flag = false;
  }
  if (flag) {
    const obj = { location: suggested_searches };
    let enabled = apexExperiment.getConfig(obj).enabled;
    const obj2 = { guildId, location: suggested_searches };
    if (enabled) {
      enabled = apexExperiment1.getConfig(obj2).enabled;
    }
    return enabled;
  } else {
    return false;
  }
};
export const useIsNlpSearchEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsNlpSearchEnabled(arg0, location) {
  let str = arg0;
  _require = arg0;
  const cResult = require("c").c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== str) {
    const fn = function c() {
      let tmp2 = null != closure_0;
      if (tmp2) {
        guild = GuildStore.getGuild(tmp);
        let flag;
        if (guild != null) {
          const features = guild.features;
          flag = features.has(GuildFeatures.DISCOVERABLE);
        }
        if (flag == null) {
          flag = false;
        }
        tmp2 = flag;
      }
      return tmp2;
    };
    const items1 = [str];
    cResult[1] = str;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  let enabled = require("initialize").useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] !== location) {
    const obj2 = { location };
    cResult[4] = location;
    cResult[5] = obj2;
    let tmp8 = obj2;
  } else {
    tmp8 = cResult[5];
  }
  if (str == null) {
    str = "";
  }
  if (cResult[6] === location) {
    if (cResult[7] === str) {
      let tmp9 = cResult[8];
    }
    if (enabled) {
      enabled = apexExperiment.useConfig(tmp8).enabled;
    }
    if (enabled) {
      enabled = apexExperiment1.useConfig(tmp9).enabled;
    }
    return enabled;
  }
  const obj3 = { guildId: str, location };
  cResult[6] = location;
  cResult[7] = str;
  cResult[8] = obj3;
  tmp9 = obj3;
  const tmpResult = require("initialize");
}) : (function useIsNlpSearchEnabled(arg0, location) {
  _require = arg0;
  const items = [GuildStore];
  const items1 = [arg0];
  let enabled = require("initialize").useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      guild = GuildStore.getGuild(tmp);
      let flag;
      if (guild != null) {
        const features = guild.features;
        flag = features.has(GuildFeatures.DISCOVERABLE);
      }
      if (flag == null) {
        flag = false;
      }
      tmp2 = flag;
    }
    return tmp2;
  }, items1);
  if (arg0 == null) {
    const str = "";
  }
  if (enabled) {
    enabled = apexExperiment.useConfig(obj2).enabled;
  }
  if (enabled) {
    enabled = apexExperiment1.useConfig(obj3).enabled;
  }
  return enabled;
});