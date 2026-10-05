// discord_app/modules/routing/RouteUtils.tsx
import RouteConstants from "RouteConstants.tsx";
import ChannelConstants from "../channel/ChannelConstants.tsx";
import RouteParam from "RouteParam.tsx";
import size from "../../../_runtime/metro/00002__.js";

const PSEUDO_GUILD_IDS = RouteConstants.PSEUDO_GUILD_IDS;
const isStaticChannelRoute = ChannelConstants.isStaticChannelRoute;
const re2 = /^\d+$/;
const result = size.fileFinishedImporting("modules/routing/RouteUtils.tsx");
const RouteParam_export = RouteParam.RouteParam;

export { RouteParam_export as RouteParam };
export const isPseudoGuildId = function isPseudoGuildId(guildId) {
  return PSEUDO_GUILD_IDS.includes(guildId);
};
export const isValidGuildId = function isValidGuildId(guildId) {
  let tmp = null != guildId;
  if (tmp) {
    const hasItem = PSEUDO_GUILD_IDS.includes(guildId) || re2.test(guildId);
    tmp = hasItem;
  }
  return tmp;
};
export const isValidChannelId = function isValidChannelId(channelId) {
  let tmp = null == channelId;
  if (!tmp) {
    const isMatch = re2.test(channelId) || isStaticChannelRoute(channelId);
    tmp = isMatch;
  }
  return tmp;
};
