// === Module 9277: apexExperiment ===

// Module 9277 (apexExperiment)
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { GuildFeatures } from "ME";
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";

const require = arg1;
ApexExperiment = { 1: null, 2: { enabled: false } };
ApexExperiment[2] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-03-conversation-highlighting-utility", defaultConfig: { enabled: false }, variations: ApexExperiment });
ApexExperiment = { 1: null };
ApexExperiment[1] = { enabled: true };
const apexExperiment1 = ApexExperiment.createApexExperiment({ kind: "guild", name: "2026-06-topical-navigation-guild", defaultConfig: { enabled: false }, variations: ApexExperiment });
const obj1 = { 1: null };
obj1[1] = { enabled: true };
const apexExperiment2 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-04-topical-navigation-staff-control", defaultConfig: { enabled: false }, variations: obj1 });
const result = require("ApexExperiment").fileFinishedImporting("modules/conversations/ConversationExperiments.tsx");

export const ConversationHighlightingExperiment = apexExperiment;
export const TopicalNavGuildExperiment = apexExperiment1;
export const TopicalNavUserGateExperiment = apexExperiment2;
export const isConversationDebugUXEnabled = function isConversationDebugUXEnabled(arg0, arg1) {
  let tmp2 = null != arg0;
  if (tmp2) {
    const guild = store.getGuild(arg0);
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
    const obj = { location: null };
    obj[0] = arg1;
    enabled = apexExperiment.getConfig(obj).enabled;
  }
  return enabled;
};
export const isTopicalNavEnabled = function isTopicalNavEnabled(c1, fetch_channel_conversations) {
  if (null == c1) {
    return false;
  } else {
    let tmp3 = null != c1;
    if (tmp3) {
      const guild = store.getGuild(c1);
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
      let obj = { location: null };
      obj[0] = fetch_channel_conversations;
      enabled = apexExperiment.getConfig(obj).enabled;
    }
    if (enabled) {
      return true;
    } else {
      obj = { location: null };
      obj[0] = fetch_channel_conversations;
      if (apexExperiment2.getConfig(obj).enabled) {
        const guild1 = store.getGuild(c1);
        let enabled2 = null != guild1;
        if (enabled2) {
          const features2 = guild1.features;
          enabled2 = !features2.has(tmp10.SUMMARIES_ENABLED_GA);
        }
        if (enabled2) {
          const features3 = guild1.features;
          enabled2 = features3.has(tmp10.CONVERSATIONS_EXTRACTION_PROCESSING);
        }
        if (enabled2) {
          obj = { guildId: null, location: null };
          obj[0] = c1;
          obj[1] = fetch_channel_conversations;
          enabled2 = apexExperiment1.getConfig(obj).enabled;
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
  const _require = arg0;
  const items = [createGuildRecordFromRust];
  const items1 = [arg0, CONVERSATIONS_EXTRACTION_PROCESSING];
  const obj = { location };
  const obj2 = _require(CONVERSATIONS_EXTRACTION_PROCESSING[3]);
  return _require(CONVERSATIONS_EXTRACTION_PROCESSING[3]).useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      const guild = outer1_2.getGuild(tmp);
      let flag;
      if (guild != null) {
        const features = guild.features;
        flag = features.has(SUMMARIES_ENABLED_GA);
      }
      if (flag == null) {
        flag = false;
      }
      tmp2 = flag;
    }
    return tmp2;
  }, items1) && apexExperiment.useConfig({ location }).enabled;
};
export const useIsTopicalNavEnabled = function useIsTopicalNavEnabled(guild_id, channel_header) {
  let obj = { location: channel_header };
  const CONVERSATIONS_EXTRACTION_PROCESSING = GuildFeatures.CONVERSATIONS_EXTRACTION_PROCESSING;
  let _require = guild_id;
  let SUMMARIES_ENABLED_GA = CONVERSATIONS_EXTRACTION_PROCESSING;
  const items = [createGuildRecordFromRust];
  const items1 = [guild_id, CONVERSATIONS_EXTRACTION_PROCESSING];
  const obj2 = _require(SUMMARIES_ENABLED_GA[3]);
  obj = { location: channel_header };
  let str = guild_id;
  if (guild_id == null) {
    str = "";
  }
  obj = { guildId: str, location: channel_header };
  const CONVERSATIONS_EXTRACTION_PROCESSING2 = tmp.CONVERSATIONS_EXTRACTION_PROCESSING;
  _require = guild_id;
  SUMMARIES_ENABLED_GA = CONVERSATIONS_EXTRACTION_PROCESSING2;
  let tmp2Result = tmp2(tmp3[3]);
  const items2 = [createGuildRecordFromRust];
  const items3 = [guild_id, CONVERSATIONS_EXTRACTION_PROCESSING2];
  let enabled = tmp2Result.useStateFromStores(items2, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      const guild = outer1_2.getGuild(tmp);
      let flag;
      if (guild != null) {
        const features = guild.features;
        flag = features.has(SUMMARIES_ENABLED_GA);
      }
      if (flag == null) {
        flag = false;
      }
      tmp2 = flag;
    }
    return tmp2;
  }, items3);
  SUMMARIES_ENABLED_GA = tmp.SUMMARIES_ENABLED_GA;
  _require = guild_id;
  tmp2Result = tmp2(tmp3[3]);
  [][0] = createGuildRecordFromRust;
  const items4 = [guild_id, SUMMARIES_ENABLED_GA];
  let tmp9 = null != guild_id;
  if (tmp9) {
    let tmp10 = tmp5;
    if (!tmp10) {
      enabled = apexExperiment2.useConfig(obj).enabled;
      if (enabled) {
        if (enabled) {
          enabled = !tmp8;
        }
        if (enabled) {
          enabled = apexExperiment1.useConfig(obj).enabled;
        }
      }
      tmp10 = enabled;
    }
    tmp9 = tmp10;
  }
  return tmp9;
};