// discord_app/modules/intelligence_layer/search/IntelligenceSearchExperiments.tsx
import GuildStore from "../../../stores/GuildStore.tsx";

const require = globalThis.__r;

const require = fn;
const GuildFeatures = fn(1074).GuildFeatures;
let ApexExperiment = fn(1435);
const apexExperiment = ApexExperiment.createApexExperiment({
  kind: "user",
  name: "2026-09-mobile-nlp-search-user-flag",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
ApexExperiment = fn(1435);
const apexExperiment1 = ApexExperiment.createApexExperiment({
  kind: "guild",
  name: "2026-09-mobile-nlp-search-guild-experiment",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/IntelligenceSearchExperiments.tsx");

export const NlpSearchUserExperiment = apexExperiment;
export const NlpSearchGuildExperiment = apexExperiment1;
export const isNlpSearchEnabled = function isNlpSearchEnabled(guildId, fetch_answer) {
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
    const obj = { location: fetch_answer };
    let enabled = apexExperiment.getConfig(obj).enabled;
    const obj2 = { guildId, location: fetch_answer };
    if (enabled) {
      enabled = apexExperiment1.getConfig(obj2).enabled;
    }
    return enabled;
  } else {
    return false;
  }
};
export const useIsNlpSearchEnabled = function useIsNlpSearchEnabled(guildIdFromSearchContext, search) {
  _require = guildIdFromSearchContext;
  const items = [GuildStore];
  const items1 = [guildIdFromSearchContext];
  let enabled = require("initialize").useStateFromStores(
    items,
    () => {
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
    },
    items1,
  );
  if (guildIdFromSearchContext == null) {
    const str = "";
  }
  if (enabled) {
    enabled = apexExperiment.useConfig(obj2).enabled;
  }
  if (enabled) {
    enabled = apexExperiment1.useConfig(obj3).enabled;
  }
  return enabled;
};
