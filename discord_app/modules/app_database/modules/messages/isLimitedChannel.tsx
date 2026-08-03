import ensureGuildLoaded from "ensureGuildLoaded";
import handleInviteData from "handleInviteData";
import { ChannelTypes } from "ME";

const result = require("ME").fileFinishedImporting("modules/app_database/modules/messages/isLimitedChannel.tsx");

export const LIMITED_GUILD_MEMBER_THRESHOLD = 10000;
export const isLimitedChannel = function isLimitedChannel(basicChannel) {
  let guild_id;
  if (basicChannel != null) {
    guild_id = basicChannel.guild_id;
  }
  let num = store.getMemberCount(guild_id);
  if (num == null) {
    num = 0;
  }
  let tmp3 = null != basicChannel;
  if (tmp3) {
    tmp3 = basicChannel.type !== ChannelTypes.DM;
  }
  if (tmp3) {
    tmp3 = basicChannel.type !== ChannelTypes.GROUP_DM;
  }
  if (tmp3) {
    tmp3 = num >= 10000;
  }
  return tmp3;
};
export const isLimitedChannelId = function isLimitedChannelId(arg0) {
  let str = arg0;
  if (arg0 == null) {
    str = "_";
  }
  basicChannel = basicChannel.getBasicChannel(str);
  let guild_id;
  if (basicChannel != null) {
    guild_id = basicChannel.guild_id;
  }
  let num = store.getMemberCount(guild_id);
  if (num == null) {
    num = 0;
  }
  let tmp5 = null != basicChannel;
  if (tmp5) {
    tmp5 = basicChannel.type !== ChannelTypes.DM;
  }
  if (tmp5) {
    tmp5 = basicChannel.type !== ChannelTypes.GROUP_DM;
  }
  if (tmp5) {
    tmp5 = num >= 10000;
  }
  return tmp5;
};