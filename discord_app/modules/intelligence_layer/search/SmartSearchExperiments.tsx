// === Module 13911: SmartSearchExperiments ===

// Module 13911 (SmartSearchExperiments)
import ConversationExperiments from "ConversationExperiments" /* 9847 */;
import GuildStore from "GuildStore" /* 4885 */;

const require = globalThis.__r;

require = fn;
const GuildFeatures = fn(1072).GuildFeatures;
let ApexExperiment = fn(1447);
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-09-mobile-nlp-search-user-flag", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
ApexExperiment = fn(1447);
const apexExperiment1 = ApexExperiment.createApexExperiment({ kind: "guild", name: "2026-09-mobile-nlp-search-guild-experiment", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/SmartSearchExperiments.tsx");

export const NlpSearchUserExperiment = apexExperiment;
export const NlpSearchGuildExperiment = apexExperiment1;
export function isNlpSearchEnabled(guildId, suggested_searches) {
  const guild = GuildStore.getGuild(guildId);
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
}
export function useIsNlpSearchEnabled(guildId, fetch_answer) {
  _require = guildId;
  const items = [GuildStore];
  const items1 = [guildId];
  let stateFromStores = require("initialize").useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      const guild = GuildStore.getGuild(tmp);
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
  let isConversationDebugUXEnabled = require("ConversationExperiments").useIsConversationDebugUXEnabled(guildId, fetch_answer);
  let enabled = apexExperiment.useConfig({ location: fetch_answer }).enabled;
  if (guildId == null) {
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
}