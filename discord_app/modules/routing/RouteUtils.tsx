// discord_app/modules/routing/RouteUtils.tsx
import { PSEUDO_GUILD_IDS } from "INVITE";
import { isStaticChannelRoute } from "set";

const re2 = /^\d+$/;
const result = require("set").fileFinishedImporting("modules/routing/RouteUtils.tsx");

export const RouteParam = require("RouteParam").RouteParam;
export const isPseudoGuildId = function isPseudoGuildId(stateFromStores) {
  return PSEUDO_GUILD_IDS.includes(stateFromStores);
};
export const isValidGuildId = function isValidGuildId(guildId) {
  let tmp = null != guildId;
  if (tmp) {
    let hasItem = PSEUDO_GUILD_IDS.includes(guildId);
    if (!hasItem) {
      hasItem = regex.test(guildId);
    }
    tmp = hasItem;
  }
  return tmp;
};
export const isValidChannelId = function isValidChannelId(channelId) {
  let tmp = null == channelId;
  if (!tmp) {
    let isMatch = regex.test(channelId);
    if (!isMatch) {
      isMatch = isStaticChannelRoute(channelId);
    }
    tmp = isMatch;
  }
  return tmp;
};