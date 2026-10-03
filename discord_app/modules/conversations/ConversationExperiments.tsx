// === Module 7548: ConversationExperiments ===

// Module 7548 (ConversationExperiments)
import c from "c" /* 576 */;
import GuildStore from "GuildStore" /* 2074 */;

require = fn;
const GuildFeatures = fn(1085).GuildFeatures;
let ApexExperiment = fn(1440);
let obj2 = { kind: "user", name: "2026-03-conversation-highlighting-utility", defaultConfig: { enabled: false }, variations: null };
let obj3 = { 1: null, 2: { enabled: false } };
obj3[2] = { enabled: true };
obj2.variations = obj3;
const apexExperiment = ApexExperiment.createApexExperiment(obj2);
ApexExperiment = fn(1440);
const obj5 = { kind: "guild", name: "2026-06-topical-navigation-guild", defaultConfig: { enabled: false }, variations: null };
const obj6 = { 1: null };
obj6[1] = { enabled: true };
obj5.variations = obj6;
const apexExperiment1 = ApexExperiment.createApexExperiment(obj5);
ApexExperiment = fn(1440);
const obj8 = { kind: "user", name: "2026-09-conversation-topic-header", defaultConfig: { enabled: false }, variations: null };
const obj9 = { 1: null };
obj9[1] = { enabled: true };
obj8.variations = obj9;
const apexExperiment2 = ApexExperiment.createApexExperiment(obj8);
ApexExperiment = fn(1440);
const obj11 = { kind: "user", name: "2026-04-topical-navigation-staff-control", defaultConfig: { enabled: false }, variations: null };
const obj12 = { 1: null };
obj12[1] = { enabled: true };
obj11.variations = obj12;
const apexExperiment3 = ApexExperiment.createApexExperiment(obj11);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    return tmp(504).useStateFromStores(first, tmp6, tmp7);
  }
  const fn = function u() {
    let tmp2 = null != closure_0;
    if (tmp2) {
      guild = GuildStore.getGuild(tmp);
      let flag;
      if (guild != null) {
        const features = guild.features;
        flag = features.has(closure_1);
      }
      if (flag == null) {
        flag = false;
      }
      tmp2 = flag;
    }
    return tmp2;
  };
  const items1 = [arg0, arg1];
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
  const obj = require("c");
  tmp = _require;
}) : ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const items = [GuildStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      guild = GuildStore.getGuild(tmp);
      let flag;
      if (guild != null) {
        const features = guild.features;
        flag = features.has(closure_1);
      }
      if (flag == null) {
        flag = false;
      }
      tmp2 = flag;
    }
    return tmp2;
  }, items1);
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, location) => {
  const cResult = c.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_8(arg0, GuildFeatures.CONVERSATIONS_EXTRACTION_PROCESSING) && apexExperiment.useConfig(tmp2).enabled;
}) : ((arg0, location) => closure_8(arg0, GuildFeatures.CONVERSATIONS_EXTRACTION_PROCESSING) && apexExperiment.useConfig({ location }).enabled);
let closure_9 = tmp6;
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, location) => {
  const cResult = c.c(5);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  let str = arg0;
  if (arg0 == null) {
    str = "";
  }
  if (cResult[2] === location) {
    if (cResult[3] === str) {
      let tmp4 = cResult[4];
    }
    let enabled = closure_8(arg0, GuildFeatures.CONVERSATIONS_EXTRACTION_PROCESSING);
    let tmp9 = null != arg0;
    if (tmp9) {
      let tmp10 = tmp2;
      if (!tmp10) {
        let enabled1 = apexExperiment3.useConfig(tmp3).enabled;
        if (enabled1) {
          if (enabled) {
            enabled = !tmp8;
          }
          if (enabled) {
            enabled = apexExperiment1.useConfig(tmp4).enabled;
          }
          enabled1 = enabled;
        }
        tmp10 = enabled1;
      }
      tmp9 = tmp10;
    }
    return tmp9;
  }
  const obj3 = { guildId: str, location };
  cResult[2] = location;
  cResult[3] = str;
  cResult[4] = obj3;
  tmp4 = obj3;
  tmp2 = closure_9(arg0, location);
}) : ((arg0, location) => {
  if (arg0 == null) {
    const str = "";
  }
  let enabled = closure_8(arg0, GuildFeatures.CONVERSATIONS_EXTRACTION_PROCESSING);
  let tmp4 = null != arg0;
  if (tmp4) {
    let tmp5 = tmp;
    if (!tmp5) {
      let enabled1 = apexExperiment3.useConfig(obj).enabled;
      if (enabled1) {
        if (enabled) {
          enabled = !tmp3;
        }
        if (enabled) {
          enabled = apexExperiment1.useConfig(obj2).enabled;
        }
        enabled1 = enabled;
      }
      tmp5 = enabled1;
    }
    tmp4 = tmp5;
  }
  return tmp4;
});
let closure_10 = tmp7;
ReactCompilerGating = fn(558);
function isConversationDebugUXEnabled(arg0, location) {
  let tmp2 = null != arg0;
  if (tmp2) {
    guild = GuildStore.getGuild(arg0);
    let flag;
    if (guild != null) {
      const features = guild.features;
      flag = features.has(tmp);
    }
    if (flag == null) {
      flag = false;
    }
    tmp2 = flag;
  }
  let enabled = tmp2;
  if (enabled) {
    const obj = { location };
    enabled = apexExperiment.getConfig(obj).enabled;
  }
  return enabled;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/ConversationExperiments.tsx");

export const ConversationHighlightingExperiment = apexExperiment;
export const TopicalNavGuildExperiment = apexExperiment1;
export const ConversationTopicHeaderExperiment = apexExperiment2;
export const TopicalNavUserGateExperiment = apexExperiment3;
export { isConversationDebugUXEnabled };
export const isTopicalNavEnabled = function isTopicalNavEnabled(guildId, fetch_channel_conversations) {
  if (null == guildId) {
    return false;
  } else {
    let tmp3 = null != guildId;
    if (tmp3) {
      guild = GuildStore.getGuild(guildId);
      let flag;
      if (guild != null) {
        const features = guild.features;
        flag = features.has(tmp11);
      }
      if (flag == null) {
        flag = false;
      }
      tmp3 = flag;
    }
    let enabled = tmp3;
    if (enabled) {
      const obj = { location: fetch_channel_conversations };
      enabled = apexExperiment.getConfig(obj).enabled;
    }
    if (enabled) {
      return true;
    } else {
      const obj2 = { location: fetch_channel_conversations };
      if (apexExperiment3.getConfig(obj2).enabled) {
        const guild1 = GuildStore.getGuild(guildId);
        let enabled2 = null != guild1;
        if (enabled2) {
          const features2 = guild1.features;
          enabled2 = !features2.has(GuildFeatures.SUMMARIES_ENABLED_GA);
        }
        if (enabled2) {
          const features3 = guild1.features;
          enabled2 = features3.has(GuildFeatures.CONVERSATIONS_EXTRACTION_PROCESSING);
        }
        if (enabled2) {
          const obj3 = { guildId, location: fetch_channel_conversations };
          enabled2 = apexExperiment1.getConfig(obj3).enabled;
        }
        return enabled2;
      } else {
        return false;
      }
    }
  }
};
export const useIsConversationDebugUXEnabled = tmp6;
export const useIsTopicalNavEnabled = tmp7;
export const useIsConversationTopicHeaderEnabled = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, location) => {
  const cResult = c.c(2);
  let enabled = closure_10(arg0, location);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  if (enabled) {
    enabled = apexExperiment2.useConfig(tmp2).enabled;
  }
  return enabled;
}) : ((arg0, location) => {
  let enabled = closure_10(arg0, location);
  if (enabled) {
    enabled = apexExperiment2.useConfig(obj).enabled;
  }
  return enabled;
});