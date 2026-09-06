// === Module 4399: RouteUtils ===

// Module 4399 (RouteUtils)
import RouteConstants from "RouteConstants" /* 1075 */;
import ChannelConstants from "ChannelConstants" /* 1964 */;
import RouteParam from "RouteParam" /* 4400 */;
import size from "module_2" /* 2 */;

const PSEUDO_GUILD_IDS = RouteConstants.PSEUDO_GUILD_IDS;
const isStaticChannelRoute = ChannelConstants.isStaticChannelRoute;
const re2 = /^\d+$/;
const result = size.fileFinishedImporting("modules/routing/RouteUtils.tsx");

export const RouteParam = RouteParam.RouteParam;
export const isPseudoGuildId = function isPseudoGuildId(guildId) {
  return PSEUDO_GUILD_IDS.includes(guildId);
};
export const isValidGuildId = function isValidGuildId(guildId) {
  let tmp = null != guildId;
  if (tmp) {
    let hasItem = PSEUDO_GUILD_IDS.includes(guildId);
    if (!hasItem) {
      hasItem = re2.test(guildId);
    }
    tmp = hasItem;
  }
  return tmp;
};
export const isValidChannelId = function isValidChannelId(channelId) {
  let tmp = null == channelId;
  if (!tmp) {
    let isMatch = re2.test(channelId);
    if (!isMatch) {
      isMatch = isStaticChannelRoute(channelId);
    }
    tmp = isMatch;
  }
  return tmp;
};