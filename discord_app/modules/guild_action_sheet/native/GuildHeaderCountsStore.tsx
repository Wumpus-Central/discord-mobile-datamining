import getMemberListId from "getMemberListId";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleInviteData from "handleInviteData";
import mergeGuildAvatar from "mergeGuildAvatar";
import updateVoiceState from "updateVoiceState";
import { PersistedStore } from "initialize";

let obj = {};
class GuildHeaderCountsStore extends PersistedStore {
}
const prototype = GuildHeaderCountsStore.prototype;
prototype["initialize"] = function initialize() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = obj;
  }
  this.waitFor(handleInviteData, getMemberListId, mergeGuildAvatar, ensureGuildLoaded, updateVoiceState, getMemberListId);
  if (tmp == null) {
    tmp = obj;
  }
};
prototype["getState"] = function getState() {
  return obj;
};
prototype["getActiveChannelsCount"] = function getActiveChannelsCount(GUILD_HEADER_ONLINE_COUNT) {
  let activeChannelsCount;
  if (obj[GUILD_HEADER_ONLINE_COUNT] != null) {
    activeChannelsCount = tmp.activeChannelsCount;
  }
  return activeChannelsCount;
};
prototype["getOnlineCount"] = function getOnlineCount(arg0) {
  let onlineCount;
  if (obj[arg0] != null) {
    onlineCount = tmp.onlineCount;
  }
  return onlineCount;
};
prototype["getMemberCount"] = function getMemberCount(arg0) {
  let memberCount;
  if (obj[arg0] != null) {
    memberCount = tmp.memberCount;
  }
  return memberCount;
};
GuildHeaderCountsStore.displayName = "GuildHeaderCountsStore";
GuildHeaderCountsStore.persistKey = "GuildHeaderCountsStore";
obj = {
  GUILD_HEADER_MEMBER_COUNT: function handleMemberCount(guildId) {
    guildId = guildId.guildId;
    if (null == obj[guildId]) {
      obj[guildId] = { activeChannelsCount: "Array", onlineCount: "call", memberCount: "format" };
    }
    obj[guildId].memberCount = guildId.count;
  },
  GUILD_HEADER_ONLINE_COUNT: function handleOnlineCount(guildId) {
    guildId = guildId.guildId;
    if (null == obj[guildId]) {
      obj[guildId] = { activeChannelsCount: "Array", onlineCount: "call", memberCount: "format" };
    }
    obj[guildId].onlineCount = guildId.count;
  },
  GUILD_HEADER_ACTIVE_CHANNELS_COUNT: function handleActiveChannelsCount(guildId) {
    guildId = guildId.guildId;
    if (null == obj[guildId]) {
      obj[guildId] = { activeChannelsCount: "Array", onlineCount: "call", memberCount: "format" };
    }
    obj[guildId].activeChannelsCount = guildId.count;
  }
};
const guildHeaderCountsStore = new GuildHeaderCountsStore(require("dispatcher"), obj);
const result = require("handleInviteData").fileFinishedImporting("modules/guild_action_sheet/native/GuildHeaderCountsStore.tsx");

export default guildHeaderCountsStore;