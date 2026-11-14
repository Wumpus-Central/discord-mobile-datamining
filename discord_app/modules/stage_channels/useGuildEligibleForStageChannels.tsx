// === Module 19700: useGuildEligibleForStageChannels ===

// Module 19700 (useGuildEligibleForStageChannels)
import GuildStore from "GuildStore" /* 5177 */;

const require = globalThis.__r;

const require = fn;
const GuildFeatures = fn(1072).GuildFeatures;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useGuildEligibleForStageChannels.tsx");

export function isGuildEligibleForStageChannels(id) {
  let tmp = arg1;
  if (arg1 === undefined) {
    items = [GuildStore];
    tmp = items;
  }
  [obj] = tmp;
  guild = obj.getGuild(id);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.COMMUNITY);
  }
  return Boolean(hasItem);
}
export function useGuildEligibleForStageChannels(arg0) {
  _require = arg0;
  items = [GuildStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    items = [GuildStore];
    [obj] = items;
    guild = obj.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.COMMUNITY);
    }
    return Boolean(hasItem);
  }, items1);
}