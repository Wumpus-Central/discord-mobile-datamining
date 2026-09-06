// discord_app/modules/conversations/ConversationExperiments.tsx
import GuildStore from "../../stores/GuildStore.tsx";

const require = fn;
const GuildFeatures = fn(1074).GuildFeatures;
fn(1433);
let ApexExperiment = {
  kind: "user",
  name: "2026-03-conversation-highlighting-utility",
  defaultConfig: { enabled: false },
  variations: null,
};
ApexExperiment = { 1: null, 2: { enabled: false } };
ApexExperiment[2] = { enabled: true };
ApexExperiment.variations = ApexExperiment;
ApexExperiment.createApexExperiment(ApexExperiment);
ApexExperiment = fn(1433);
const obj1 = {
  kind: "guild",
  name: "2026-06-topical-navigation-guild",
  defaultConfig: { enabled: false },
  variations: null,
};
let obj2 = { 1: null };
obj2[1] = { enabled: true };
obj1.variations = obj2;
const apexExperiment1 = ApexExperiment.createApexExperiment(obj1);
fn(1433);
ApexExperiment = {
  kind: "user",
  name: "2026-04-topical-navigation-staff-control",
  defaultConfig: { enabled: false },
  variations: null,
};
const obj4 = { 1: null };
obj4[1] = { enabled: true };
ApexExperiment.variations = obj4;
ApexExperiment = ApexExperiment.createApexExperiment(ApexExperiment);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/ConversationExperiments.tsx");

export const ConversationHighlightingExperiment = ApexExperiment;
export const TopicalNavGuildExperiment = apexExperiment1;
export const TopicalNavUserGateExperiment = ApexExperiment;
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
    enabled = ApexExperiment.getConfig(obj).enabled;
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
      let obj = { location: fetch_channel_conversations };
      enabled = ApexExperiment.getConfig(obj).enabled;
    }
    if (enabled) {
      return true;
    } else {
      obj = { location: fetch_channel_conversations };
      if (ApexExperiment.getConfig(obj).enabled) {
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
          obj = { guildId, location: fetch_channel_conversations };
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
  _require = arg0;
  const items = [GuildStore];
  const items1 = [arg0, CONVERSATIONS_EXTRACTION_PROCESSING];
  const obj = { location };
  const obj2 = require("initialize");
  return (
    require("initialize").useStateFromStores(
      items,
      () => {
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
      },
      items1,
    ) && ApexExperiment.useConfig({ location }).enabled
  );
};
export const useIsTopicalNavEnabled = function useIsTopicalNavEnabled(guild_id, channel_header) {
  let obj = { location: channel_header };
  const CONVERSATIONS_EXTRACTION_PROCESSING = GuildFeatures.CONVERSATIONS_EXTRACTION_PROCESSING;
  _require = guild_id;
  const items = [GuildStore];
  const items1 = [guild_id, CONVERSATIONS_EXTRACTION_PROCESSING];
  const obj2 = require("initialize");
  obj = { location: channel_header };
  let str = guild_id;
  if (guild_id == null) {
    str = "";
  }
  obj = { guildId: str, location: channel_header };
  const CONVERSATIONS_EXTRACTION_PROCESSING2 = GuildFeatures.CONVERSATIONS_EXTRACTION_PROCESSING;
  closure_129_0 = guild_id;
  closure_129_1 = CONVERSATIONS_EXTRACTION_PROCESSING2;
  let tmp2Result = tmp2(tmp3[3]);
  const items2 = [GuildStore];
  const items3 = [guild_id, CONVERSATIONS_EXTRACTION_PROCESSING2];
  let enabled = tmp2Result.useStateFromStores(
    items2,
    () => {
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
    },
    items3,
  );
  const SUMMARIES_ENABLED_GA = GuildFeatures.SUMMARIES_ENABLED_GA;
  closure_130_0 = guild_id;
  closure_130_1 = SUMMARIES_ENABLED_GA;
  tmp2Result = tmp2(tmp3[3]);
  [][0] = GuildStore;
  const items4 = [guild_id, SUMMARIES_ENABLED_GA];
  let tmp9 = null != guild_id;
  if (tmp9) {
    let tmp10 = tmp5;
    if (!tmp10) {
      enabled = ApexExperiment.useConfig(obj).enabled;
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
