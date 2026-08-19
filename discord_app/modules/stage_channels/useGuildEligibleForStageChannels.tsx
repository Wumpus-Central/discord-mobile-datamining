// === Module 16047: isGuildEligibleForStageChannels ===

// Module 16047 (isGuildEligibleForStageChannels)
import closure_2 from "createGuildRecordFromRust" /* 1910 */;
import { GuildFeatures } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/stage_channels/useGuildEligibleForStageChannels.tsx");

export const isGuildEligibleForStageChannels = function isGuildEligibleForStageChannels(id) {
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [closure_2];
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
  const _require = arg0;
  let items = [closure_2];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => {
    const items = [closure_1_2];
    [obj] = items;
    const guild = obj.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(closure_1_3.COMMUNITY);
    }
    return Boolean(hasItem);
  }, items1);
};