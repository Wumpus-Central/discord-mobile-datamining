// === Module 4215: RouteParam ===

// Module 4215 (RouteParam)
import obj132 from "obj132" /* 2 */;
import INVITE from "INVITE" /* 677 */;
import set from "set" /* 1398 */;
import RouteParam from "RouteParam" /* 4216 */;

const PSEUDO_GUILD_IDS = INVITE.PSEUDO_GUILD_IDS;
const isStaticChannelRoute = set.isStaticChannelRoute;
const re2 = /^\d+$/;
const result = obj132.fileFinishedImporting("modules/routing/RouteUtils.tsx");

export const RouteParam = RouteParam.RouteParam;
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