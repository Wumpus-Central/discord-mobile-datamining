// === Module 7331: ConversationExperiments ===

// Module 7331 (ConversationExperiments)
import GuildStore from "GuildStore" /* 2067 */;

const require = globalThis.__r;

const require = fn;
function useIsTopicalNavEnabled(guild_id, channel_header) {
  const CONVERSATIONS_EXTRACTION_PROCESSING = GuildFeatures.CONVERSATIONS_EXTRACTION_PROCESSING;
  _require = guild_id;
  const items = [GuildStore];
  const items1 = [guild_id, CONVERSATIONS_EXTRACTION_PROCESSING];
  const obj = { location: channel_header };
  const obj2 = require("initialize");
  let str = guild_id;
  if (guild_id == null) {
    str = "";
  }
  const CONVERSATIONS_EXTRACTION_PROCESSING2 = GuildFeatures.CONVERSATIONS_EXTRACTION_PROCESSING;
  closure_129_0 = guild_id;
  closure_129_1 = CONVERSATIONS_EXTRACTION_PROCESSING2;
  const obj3 = { location: channel_header };
  const obj4 = { guildId: str, location: channel_header };
  const tmp5 = require("initialize").useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      const guild = GuildStore.getGuild(tmp);
      let flag;
      if (guild != null) {
        const features = guild.features;
        flag = features.has(CONVERSATIONS_EXTRACTION_PROCESSING);
      }
      if (flag == null) {
        flag = false;
      }
      tmp2 = flag;
    }
    return tmp2;
  }, items1) && apexExperiment.useConfig({ location: channel_header }).enabled;
  const items2 = [GuildStore];
  const items3 = [guild_id, CONVERSATIONS_EXTRACTION_PROCESSING2];
  let enabled = require("initialize").useStateFromStores(items2, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      const guild = GuildStore.getGuild(tmp);
      let flag;
      if (guild != null) {
        const features = guild.features;
        flag = features.has(CONVERSATIONS_EXTRACTION_PROCESSING);
      }
      if (flag == null) {
        flag = false;
      }
      tmp2 = flag;
    }
    return tmp2;
  }, items3);
  const SUMMARIES_ENABLED_GA = GuildFeatures.SUMMARIES_ENABLED_GA;
  closure_130_0 = guild_id;
  closure_130_1 = SUMMARIES_ENABLED_GA;
  require("initialize");
  [][0] = GuildStore;
  const items4 = [guild_id, SUMMARIES_ENABLED_GA];
  let tmp9 = null != guild_id;
  if (tmp9) {
    let tmp10 = tmp5;
    if (!tmp10) {
      let enabled1 = apexExperiment3.useConfig(obj3).enabled;
      if (enabled1) {
        if (enabled) {
          enabled = !tmp8;
        }
        if (enabled) {
          enabled = apexExperiment1.useConfig(obj4).enabled;
        }
        enabled1 = enabled;
      }
      tmp10 = enabled1;
    }
    tmp9 = tmp10;
  }
  return tmp9;
}
const GuildFeatures = fn(1074).GuildFeatures;
let ApexExperiment = fn(1435);
let obj2 = { kind: "user", name: "2026-03-conversation-highlighting-utility", defaultConfig: { enabled: false }, variations: null };
let obj3 = { 1: null, 2: { enabled: false } };
obj3[2] = { enabled: true };
obj2.variations = obj3;
const apexExperiment = ApexExperiment.createApexExperiment(obj2);
ApexExperiment = fn(1435);
const obj5 = { kind: "guild", name: "2026-06-topical-navigation-guild", defaultConfig: { enabled: false }, variations: null };
const obj6 = { 1: null };
obj6[1] = { enabled: true };
obj5.variations = obj6;
const apexExperiment1 = ApexExperiment.createApexExperiment(obj5);
ApexExperiment = fn(1435);
const obj8 = { kind: "user", name: "2026-09-conversation-topic-header", defaultConfig: { enabled: false }, variations: null };
const obj9 = { 1: null };
obj9[1] = { enabled: true };
obj8.variations = obj9;
const apexExperiment2 = ApexExperiment.createApexExperiment(obj8);
ApexExperiment = fn(1435);
const obj11 = { kind: "user", name: "2026-04-topical-navigation-staff-control", defaultConfig: { enabled: false }, variations: null };
const obj12 = { 1: null };
obj12[1] = { enabled: true };
obj11.variations = obj12;
const apexExperiment3 = ApexExperiment.createApexExperiment(obj11);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/ConversationExperiments.tsx");

export const ConversationHighlightingExperiment = apexExperiment;
export const TopicalNavGuildExperiment = apexExperiment1;
export const ConversationTopicHeaderExperiment = apexExperiment2;
export const TopicalNavUserGateExperiment = apexExperiment3;
export const isConversationDebugUXEnabled = function isConversationDebugUXEnabled(arg0, location) {
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
};
export const isTopicalNavEnabled = function isTopicalNavEnabled(guildId, fetch_channel_conversations) {
  if (null == guildId) {
    return false;
  } else {
    let tmp3 = null != guildId;
    if (tmp3) {
      const guild = GuildStore.getGuild(guildId);
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
export const useIsConversationDebugUXEnabled = function useIsConversationDebugUXEnabled(arg0, location) {
  const CONVERSATIONS_EXTRACTION_PROCESSING = GuildFeatures.CONVERSATIONS_EXTRACTION_PROCESSING;
  _require = arg0;
  const items = [GuildStore];
  const items1 = [arg0, CONVERSATIONS_EXTRACTION_PROCESSING];
  const obj = { location };
  const obj2 = require("initialize");
  return require("initialize").useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      const guild = GuildStore.getGuild(tmp);
      let flag;
      if (guild != null) {
        const features = guild.features;
        flag = features.has(CONVERSATIONS_EXTRACTION_PROCESSING);
      }
      if (flag == null) {
        flag = false;
      }
      tmp2 = flag;
    }
    return tmp2;
  }, items1) && apexExperiment.useConfig({ location }).enabled;
};
export { useIsTopicalNavEnabled };
export const useIsConversationTopicHeaderEnabled = function useIsConversationTopicHeaderEnabled(guild_id, messages_conversation_header) {
  let enabled = useIsTopicalNavEnabled(guild_id, messages_conversation_header);
  if (enabled) {
    enabled = apexExperiment2.useConfig(obj).enabled;
  }
  return enabled;
};