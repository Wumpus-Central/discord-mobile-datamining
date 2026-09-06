// === Module 16831: useGuildEligibleForStageChannels ===

// Module 16831 (useGuildEligibleForStageChannels)
import GuildStore from "GuildStore" /* 1979 */;

const require = fn;
const GuildFeatures = fn(1074).GuildFeatures;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useGuildEligibleForStageChannels.tsx");

export const isGuildEligibleForStageChannels = function isGuildEligibleForStageChannels(id) {
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [GuildStore];
    tmp = items;
  }
  [obj] = tmp;
  const guild = obj.getGuild(id);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.COMMUNITY);
  }
  return Boolean(hasItem);
};
export const useGuildEligibleForStageChannels = function useGuildEligibleForStageChannels(arg0) {
  _require = arg0;
  let items = [GuildStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const items = [GuildStore];
    [obj] = items;
    const guild = obj.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.COMMUNITY);
    }
    return Boolean(hasItem);
  }, items1);
};