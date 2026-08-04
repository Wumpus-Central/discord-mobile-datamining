// discord_app/modules/stage_channels/useGuildEligibleForStageChannels.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { GuildFeatures } from "ME";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/stage_channels/useGuildEligibleForStageChannels.tsx");

export const isGuildEligibleForStageChannels = function isGuildEligibleForStageChannels(id) {
  let obj;
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [createGuildRecordFromRust];
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
  let items = [createGuildRecordFromRust];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => {
    let obj;
    const items = [outer1_2];
    [obj] = items;
    const guild = obj.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(outer1_3.COMMUNITY);
    }
    return Boolean(hasItem);
  }, items1);
};