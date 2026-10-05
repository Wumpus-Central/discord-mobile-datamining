// === Module 7548: ConversationExperiments ===

// Module 7548 (ConversationExperiments)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import GuildStore from "GuildStore" /* 2074 */;
import ApexExperiment_mod from "ApexExperiment" /* 1440 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let obj2;
let obj4;
let obj6;
let obj8;
const GuildFeatures = Constants.GuildFeatures;
let ApexExperiment = ApexExperiment_mod;
let obj = { kind: "user", name: "2026-03-conversation-highlighting-utility", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: false } };
obj2[2] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
ApexExperiment = ApexExperiment_mod;
let obj3 = { kind: "guild", name: "2026-06-topical-navigation-guild", defaultConfig: { enabled: false }, variations: obj4 };
obj4 = { 1: null };
obj4[1] = { enabled: true };
const apexExperiment1 = ApexExperiment.createApexExperiment(obj3);
ApexExperiment = ApexExperiment_mod;
const obj5 = { kind: "user", name: "2026-09-conversation-topic-header", defaultConfig: { enabled: false }, variations: obj6 };
obj6 = { 1: null };
obj6[1] = { enabled: true };
const apexExperiment2 = ApexExperiment.createApexExperiment(obj5);
ApexExperiment = ApexExperiment_mod;
const obj7 = { kind: "user", name: "2026-04-topical-navigation-staff-control", defaultConfig: { enabled: false }, variations: obj8 };
obj8 = { 1: null };
obj8[1] = { enabled: true };
const apexExperiment3 = ApexExperiment.createApexExperiment(obj7);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  let first;
  _require = arg0;
  dependencyMap = arg1;
  const tmp = _require;
  let tmp2 = dependencyMap;
  const obj = require("react");
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    let tmp6;
    let tmp7;
    if (cResult[2] === arg0) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp6, tmp7);
  }
  const fn = function u() {
    let tmp2 = null != closure_0;
    if (tmp2) {
      const guild = GuildStore.getGuild(tmp);
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
}) : ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  const items = [GuildStore];
  const items1 = [arg0, arg1];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      const guild = GuildStore.getGuild(tmp);
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
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, location) => {
  let tmp2;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  const tmp3 = closure_8(arg0, GuildFeatures.CONVERSATIONS_EXTRACTION_PROCESSING) && apexExperiment.useConfig(tmp2).enabled;
  return tmp3;
}) : ((arg0, location) => {
  const obj = { location };
  const tmp = closure_8(arg0, GuildFeatures.CONVERSATIONS_EXTRACTION_PROCESSING) && apexExperiment.useConfig(obj).enabled;
  return tmp;
});
let closure_9 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, location) => {
  let tmp3;
  const obj = react;
  const cResult = obj.c(5);
  const tmp2 = closure_9(arg0, location);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  let str = arg0;
  const enabled = apexExperiment3.useConfig(tmp3).enabled;
  if (arg0 == null) {
    str = "";
  }
  if (cResult[2] === location) {
    let tmp4;
    if (cResult[3] === str) {
      tmp4 = cResult[4];
    }
    const enabled2 = apexExperiment1.useConfig(tmp4).enabled;
    let tmp8 = closure_8(arg0, GuildFeatures.CONVERSATIONS_EXTRACTION_PROCESSING);
    let tmp10 = null != arg0;
    if (tmp10) {
      let tmp11 = tmp2;
      if (!tmp11) {
        let tmp12 = enabled;
        if (tmp12) {
          if (tmp8) {
            tmp8 = !tmp9;
          }
          if (tmp8) {
            tmp8 = enabled2;
          }
          tmp12 = tmp8;
        }
        tmp11 = tmp12;
      }
      tmp10 = tmp11;
    }
    return tmp10;
  }
  const obj3 = { guildId: str, location };
  cResult[2] = location;
  cResult[3] = str;
  cResult[4] = obj3;
  tmp4 = obj3;
}) : ((arg0, location) => {
  let str = arg0;
  const obj = { location };
  const tmp = closure_9(arg0, location);
  const enabled = apexExperiment3.useConfig(obj).enabled;
  const useConfig = apexExperiment1.useConfig;
  if (arg0 == null) {
    str = "";
  }
  const obj2 = { guildId: str, location };
  const enabled2 = useConfig(obj2).enabled;
  let tmp3 = closure_8(arg0, GuildFeatures.CONVERSATIONS_EXTRACTION_PROCESSING);
  let tmp5 = null != arg0;
  if (tmp5) {
    let tmp6 = tmp;
    if (!tmp6) {
      let tmp7 = enabled;
      if (tmp7) {
        if (tmp3) {
          tmp3 = !tmp4;
        }
        if (tmp3) {
          tmp3 = enabled2;
        }
        tmp7 = tmp3;
      }
      tmp6 = tmp7;
    }
    tmp5 = tmp6;
  }
  return tmp5;
});
let closure_10 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, location) => {
  let tmp2;
  const obj = react;
  const cResult = obj.c(2);
  let enabled = closure_10(arg0, location);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  if (enabled) {
    enabled = apexExperiment2.useConfig(tmp2).enabled;
  }
  return enabled;
}) : ((arg0, location) => {
  let enabled = closure_10(arg0, location);
  const obj = { location };
  if (enabled) {
    enabled = apexExperiment2.useConfig(obj).enabled;
  }
  return enabled;
});
function isConversationDebugUXEnabled(arg0, location) {
  let tmp2 = null != arg0;
  if (tmp2) {
    const guild = GuildStore.getGuild(arg0);
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
const result = size.fileFinishedImporting("modules/conversations/ConversationExperiments.tsx");

export const ConversationHighlightingExperiment = apexExperiment;
export const TopicalNavGuildExperiment = apexExperiment1;
export const ConversationTopicHeaderExperiment = apexExperiment2;
export const TopicalNavUserGateExperiment = apexExperiment3;
export { isConversationDebugUXEnabled };
export const isTopicalNavEnabled = function isTopicalNavEnabled(c1, fetch_channel_conversations) {
  if (null == dependencyMap) {
    return false;
  } else {
    let tmp3 = null != dependencyMap;
    if (tmp3) {
      const guild = GuildStore.getGuild(dependencyMap);
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
        const guild1 = GuildStore.getGuild(dependencyMap);
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
          const obj3 = { guildId: dependencyMap, location: fetch_channel_conversations };
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
export const useIsConversationTopicHeaderEnabled = tmp8;