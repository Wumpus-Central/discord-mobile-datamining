// === Module 13785: GuildHeaderCountsStore ===

// Module 13785 (GuildHeaderCountsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ChannelMemberStore from "ChannelMemberStore" /* 6782 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4780 */;
import UserStore from "UserStore" /* 1377 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;

const obj = {};
const dependencyMap = obj;
const PersistedStore = initializeDefault.PersistedStore;
class GuildHeaderCountsStore extends PersistedStore {
}
const prototype = GuildHeaderCountsStore.prototype;
prototype["initialize"] = function initialize() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = obj;
  }
  this.waitFor(GuildMemberCountStore, ChannelMemberStore, UserStore, ChannelStore, VoiceStateStore, ChannelMemberStore);
  if (tmp == null) {
    tmp = obj;
  }
  closure_6 = tmp;
};
prototype["getState"] = function getState() {
  return closure_6;
};
prototype["getActiveChannelsCount"] = function getActiveChannelsCount(arg0) {
  let activeChannelsCount;
  if (dependencyMap[arg0] != null) {
    activeChannelsCount = tmp.activeChannelsCount;
  }
  return activeChannelsCount;
};
prototype["getOnlineCount"] = function getOnlineCount(arg0) {
  let onlineCount;
  if (dependencyMap[arg0] != null) {
    onlineCount = tmp.onlineCount;
  }
  return onlineCount;
};
prototype["getMemberCount"] = function getMemberCount(arg0) {
  let memberCount;
  if (dependencyMap[arg0] != null) {
    memberCount = tmp.memberCount;
  }
  return memberCount;
};
GuildHeaderCountsStore.displayName = "GuildHeaderCountsStore";
GuildHeaderCountsStore.persistKey = "GuildHeaderCountsStore";
const guildHeaderCountsStore = new GuildHeaderCountsStore(DispatcherDefault, {
  GUILD_HEADER_MEMBER_COUNT: function handleMemberCount(guildId) {
    guildId = guildId.guildId;
    if (null == dependencyMap[guildId]) {
      dependencyMap[guildId] = { activeChannelsCount: "done", onlineCount: "toCharArray$esjava$1", memberCount: "toCharArray$esjava$1" };
    }
    dependencyMap[guildId].memberCount = guildId.count;
  },
  GUILD_HEADER_ONLINE_COUNT: function handleOnlineCount(guildId) {
    guildId = guildId.guildId;
    if (null == dependencyMap[guildId]) {
      dependencyMap[guildId] = { activeChannelsCount: "done", onlineCount: "toCharArray$esjava$1", memberCount: "toCharArray$esjava$1" };
    }
    dependencyMap[guildId].onlineCount = guildId.count;
  },
  GUILD_HEADER_ACTIVE_CHANNELS_COUNT: function handleActiveChannelsCount(guildId) {
    guildId = guildId.guildId;
    if (null == dependencyMap[guildId]) {
      dependencyMap[guildId] = { activeChannelsCount: "done", onlineCount: "toCharArray$esjava$1", memberCount: "toCharArray$esjava$1" };
    }
    dependencyMap[guildId].activeChannelsCount = guildId.count;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/GuildHeaderCountsStore.tsx");

export default guildHeaderCountsStore;