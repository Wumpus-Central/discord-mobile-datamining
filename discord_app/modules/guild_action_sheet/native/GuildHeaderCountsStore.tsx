// discord_app/modules/guild_action_sheet/native/GuildHeaderCountsStore.tsx
import get_initializedDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import ChannelMemberStore from "../../../stores/ChannelMemberStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildMemberCountStore from "../../../stores/GuildMemberCountStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_6;

const obj = {};
const metroRequire = obj;
const PersistedStore = get_initializedDefault.PersistedStore;
class GuildHeaderCountsStore extends PersistedStore {
  initialize() {
    let tmp = arg0;
    if (arg0 === undefined) {
      tmp = obj;
    }
    this.waitFor(
      GuildMemberCountStore,
      ChannelMemberStore,
      UserStore,
      ChannelStore,
      VoiceStateStore,
      ChannelMemberStore,
    );
    if (tmp == null) {
      tmp = obj;
    }
    closure_6 = tmp;
  }
  getState() {
    return closure_6;
  }
  getActiveChannelsCount(arg0) {
    let activeChannelsCount;
    if (closure_6[arg0] != null) {
      activeChannelsCount = tmp.activeChannelsCount;
    }
    return activeChannelsCount;
  }
  getOnlineCount(arg0) {
    let onlineCount;
    if (closure_6[arg0] != null) {
      onlineCount = tmp.onlineCount;
    }
    return onlineCount;
  }
  getMemberCount(arg0) {
    let memberCount;
    if (closure_6[arg0] != null) {
      memberCount = tmp.memberCount;
    }
    return memberCount;
  }
}
const prototype = GuildHeaderCountsStore.prototype;
GuildHeaderCountsStore.displayName = "GuildHeaderCountsStore";
GuildHeaderCountsStore.persistKey = "GuildHeaderCountsStore";
const obj2 = {
  GUILD_HEADER_MEMBER_COUNT: function handleMemberCount(guildId) {
    guildId = guildId.guildId;
    const count = guildId.count;
    if (null == closure_6[guildId]) {
      closure_6[guildId] = {
        activeChannelsCount: "duration",
        onlineCount: "toCharArray$esjava$1",
        memberCount: "toCharArray$esjava$1",
      };
    }
    closure_6[guildId].memberCount = count;
  },
  GUILD_HEADER_ONLINE_COUNT: function handleOnlineCount(guildId) {
    guildId = guildId.guildId;
    const count = guildId.count;
    if (null == closure_6[guildId]) {
      closure_6[guildId] = {
        activeChannelsCount: "duration",
        onlineCount: "toCharArray$esjava$1",
        memberCount: "toCharArray$esjava$1",
      };
    }
    closure_6[guildId].onlineCount = count;
  },
  GUILD_HEADER_ACTIVE_CHANNELS_COUNT: function handleActiveChannelsCount(guildId) {
    guildId = guildId.guildId;
    const count = guildId.count;
    if (null == closure_6[guildId]) {
      closure_6[guildId] = {
        activeChannelsCount: "duration",
        onlineCount: "toCharArray$esjava$1",
        memberCount: "toCharArray$esjava$1",
      };
    }
    closure_6[guildId].activeChannelsCount = count;
  },
};
const guildHeaderCountsStore = new GuildHeaderCountsStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/GuildHeaderCountsStore.tsx");

export default guildHeaderCountsStore;
