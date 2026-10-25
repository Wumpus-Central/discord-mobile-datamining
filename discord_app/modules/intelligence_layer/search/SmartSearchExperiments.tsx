// === Module 13263: SmartSearchExperiments ===

// Module 13263 (SmartSearchExperiments)
import ConversationExperiments from "ConversationExperiments" /* 9734 */;
import GuildStore from "GuildStore" /* 4845 */;

const require = globalThis.__r;

require = fn;
const GuildFeatures = fn(1087).GuildFeatures;
let ApexExperiment = fn(1455);
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-09-mobile-nlp-search-user-flag", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
ApexExperiment = fn(1455);
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
    if (obj.isConversationDebugUXEnabled(guildId, suggested_searches)) {
      return true;
    } else {
      const obj2 = { location: suggested_searches };
      let enabled = apexExperiment.getConfig(obj2).enabled;
      const obj3 = { guildId, location: suggested_searches };
      if (enabled) {
        enabled = apexExperiment1.getConfig(obj3).enabled;
      }
      return enabled;
    }
    obj = ConversationExperiments;
  } else {
    return false;
  }
};
export const useIsNlpSearchEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsNlpSearchEnabled(arg0, location) {
  _require = arg0;
  const cResult = require("c").c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
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
  let stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  const tmpResult = require("initialize");
  let isConversationDebugUXEnabled = require("ConversationExperiments").useIsConversationDebugUXEnabled(arg0, location);
  if (cResult[4] !== location) {
    const obj2 = { location };
    cResult[4] = location;
    cResult[5] = obj2;
    let tmp10 = obj2;
  } else {
    tmp10 = cResult[5];
  }
  let enabled = apexExperiment.useConfig(tmp10).enabled;
  let str = arg0;
  if (arg0 == null) {
    str = "";
  }
  if (cResult[6] === location) {
    if (cResult[7] === str) {
      let tmp11 = cResult[8];
    }
    if (stateFromStores) {
      if (!isConversationDebugUXEnabled) {
        if (enabled) {
          enabled = apexExperiment1.useConfig(tmp11).enabled;
        }
        isConversationDebugUXEnabled = enabled;
      }
      stateFromStores = isConversationDebugUXEnabled;
    }
    return stateFromStores;
  }
  const obj3 = { guildId: str, location };
  cResult[6] = location;
  cResult[7] = str;
  cResult[8] = obj3;
  tmp11 = obj3;
  const tmpResult2 = require("ConversationExperiments");
}) : (function useIsNlpSearchEnabled(arg0, location) {
  _require = arg0;
  const items = [GuildStore];
  const items1 = [arg0];
  let stateFromStores = require("initialize").useStateFromStores(items, () => {
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
  const obj = require("initialize");
  let isConversationDebugUXEnabled = require("ConversationExperiments").useIsConversationDebugUXEnabled(arg0, location);
  let enabled = apexExperiment.useConfig({ location }).enabled;
  if (arg0 == null) {
    const str = "";
  }
  if (stateFromStores) {
    if (!isConversationDebugUXEnabled) {
      if (enabled) {
        enabled = apexExperiment1.useConfig(obj4).enabled;
      }
      isConversationDebugUXEnabled = enabled;
    }
    stateFromStores = isConversationDebugUXEnabled;
  }
  return stateFromStores;
});