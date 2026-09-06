// discord_app/modules/routing/RouteUtils.tsx
import set from "../../../_runtime/00002_set.js";
import INVITE from "RouteConstants.tsx";
import set2 from "../channel/ChannelConstants.tsx";
import RouteParam from "RouteParam.tsx";

const PSEUDO_GUILD_IDS = INVITE.PSEUDO_GUILD_IDS;
const isStaticChannelRoute = set2.isStaticChannelRoute;
const re2 = /^\d+$/;
const result = set.fileFinishedImporting("modules/routing/RouteUtils.tsx");

export const RouteParam = RouteParam.RouteParam;
export const isPseudoGuildId = function isPseudoGuildId(guildId) {
  return PSEUDO_GUILD_IDS.includes(guildId);
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
