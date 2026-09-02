// === Module 13933: initialize ===

// Module 13933 (initialize)
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import closure_0 from "getMemberListId" /* 6134 */;
import closure_1 from "ensureGuildLoaded" /* 1386 */;
import closure_2 from "handleInviteData" /* 4398 */;
import closure_3 from "mergeGuildAvatar" /* 1921 */;
import closure_4 from "updateVoiceState" /* 4497 */;

let obj = {};
const PersistedStore = initializeDefault.PersistedStore;
class GuildHeaderCountsStore extends PersistedStore {
}
const prototype = GuildHeaderCountsStore.prototype;
prototype["initialize"] = function initialize() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = obj;
  }
  this.waitFor(closure_2, closure_0, closure_3, closure_1, closure_4, closure_0);
  if (tmp == null) {
    tmp = obj;
  }
  closure_6 = tmp;
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
      obj[guildId] = { activeChannelsCount: "items", onlineCount: "call", memberCount: "Promise" };
    }
    obj[guildId].memberCount = guildId.count;
  },
  GUILD_HEADER_ONLINE_COUNT: function handleOnlineCount(guildId) {
    guildId = guildId.guildId;
    if (null == obj[guildId]) {
      obj[guildId] = { activeChannelsCount: "items", onlineCount: "call", memberCount: "Promise" };
    }
    obj[guildId].onlineCount = guildId.count;
  },
  GUILD_HEADER_ACTIVE_CHANNELS_COUNT: function handleActiveChannelsCount(guildId) {
    guildId = guildId.guildId;
    if (null == obj[guildId]) {
      obj[guildId] = { activeChannelsCount: "items", onlineCount: "call", memberCount: "Promise" };
    }
    obj[guildId].activeChannelsCount = guildId.count;
  }
};
const guildHeaderCountsStore = new GuildHeaderCountsStore(dispatcherDefault, obj);
const result = require("set").fileFinishedImporting("modules/guild_action_sheet/native/GuildHeaderCountsStore.tsx");

export default guildHeaderCountsStore;