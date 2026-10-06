// discord_app/modules/recent_channels/NewChannelsStore.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import GuildChannelStore2 from "../../stores/GuildChannelStore.tsx";
import ReadStateActionCreators from "../../actions/ReadStateActionCreators.tsx";
import SidebarActionTypes from "../sidebar/SidebarActionTypes.tsx";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import ReadStateStore from "../../stores/ReadStateStore.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const GuildChannelStore = GuildChannelStore2;

let closure_12;
let closure_14;
let map1;
function guildHasCommunity(nextResult) {
  const guild = GuildStore.getGuild(nextResult);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(constants3.COMMUNITY);
  }
  return true === hasItem;
}
function seedCommunityBaseline() {
  set1.clear();
  const guildIds = GuildStore.getGuildIds();
  const iter = guildIds[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = nextResult;
    if (guildHasCommunity(nextResult)) {
      let addResult = set1.add(tmp4);
    }
    continue;
  }
  return false;
}
function maybeAckViewedChannel(guildId, channelId) {
  let closure_0 = channelId;
  let obj = closure_16[guildId];
  let tmp = null != obj && null != channelId && obj.has(channelId);
  if (tmp) {
    const guild = GuildStore.getGuild(guildId);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants3.COMMUNITY);
    }
    tmp = true === hasItem;
  }
  if (tmp) {
    const channel = ChannelStore.getChannel(channelId);
    let isThreadResult;
    if (channel != null) {
      isThreadResult = channel.isThread();
    }
    tmp = !isThreadResult;
  }
  if (tmp) {
    tmp = null == ReadStateStore.ackMessageId(channelId);
  }
  if (tmp) {
    tmp = 0 === ReadStateStore.getMentionCount(channelId);
  }
  if (tmp) {
    const obj3 = DispatcherDefault;
    obj3.wait(() => {
      const ack = ReadStateActionCreators.ack;
      const obj = { object: constants.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED, objectType: map1.ACK_AUTOMATIC };
      ReadStateActionCreators;
      const obj2 = SnowflakeUtilsDefault;
      return ack(channelId, obj, true, true, obj2.atPreviousMillisecond(channelId));
    });
  }
}
function initializeNewChannels(guildId) {
  let closure_1;
  let closure_0 = guildId;
  if (null == closure_16[guildId]) {
    let joinedAt;
    const arr = GuildChannelStore.getChannels(guildId)[closure_7];
    const mapped = arr.map((channel) => channel.channel.id);
    const member = GuildMemberStore.getMember(guildId, AuthenticationStore.getId());
    if (member != null) {
      joinedAt = member.joinedAt;
    }
    if (null != joinedAt) {
      const _Set2 = Set;
      const self3 = this;
      const self4 = this;
      closure_16[guildId] = new Set();
      const _Date2 = Date;
      const self5 = this;
      const self6 = this;
      set = new Set();
      const date = new Date(joinedAt);
      const time = date.getTime();
      if (0 !== mapped.length) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        set1 = new Set(
          mapped.filter((item) => {
            const obj = SnowflakeUtilsDefault;
            const extractTimestampResult = obj.extractTimestamp(item);
            let tmp4 = null == ReadStateStore.getTrackedAckMessageId(item);
            if (tmp4) {
              const _Date = Date;
              const timestamp = Date.now();
              tmp4 = extractTimestampResult > timestamp - DurationsDefault.Millis.WEEK;
            }
            if (tmp4) {
              tmp4 = extractTimestampResult > UserSettingsProtoStore.getGuildRecentsDismissedAt(guildId);
            }
            if (tmp4) {
              tmp4 = extractTimestampResult > closure_1;
            }
            if (tmp4) {
              tmp4 = !UserGuildSettingsStore.isChannelOrParentOptedIn(guildId, item);
            }
            return tmp4;
          }),
        );
        let tmp4 = set1;
        closure_16[guildId] = set1;
        let _Date = Date;
        closure_17[guildId] = Date.now();
      }
    }
  }
}
function pruneNewChannels() {
  let channelOrParentOptedIn;
  const obj = SnowflakeUtilsDefault;
  const keys = obj.keys(closure_16);
  const item = keys.forEach((item) => {
    const f138141 = (item) => !channelOrParentOptedIn.isChannelOrParentOptedIn(closure_0, item);
    let closure_0 = item;
    const items = [...closure_16[item]];
    closure_16[item] = new Set(items.filter(f138141));
    new Set(items.filter(f138141));
  });
}
let closure_7 = GuildChannelStore2.GUILD_SELECTABLE_CHANNELS_KEY;
({ AnalyticsObjects: closure_12, AnalyticsObjectTypes: map1, GuildFeatures: closure_14 } = Constants);
let set = new Set();
const authStore3 = {};
let closure_17 = {};
let set1 = new Set();
const Store = get_initializedDefault.Store;
class NewChannelsStore extends Store {
  initialize() {
    this.waitFor(
      AuthenticationStore,
      ChannelStore,
      GuildChannelStore,
      GuildMemberStore,
      GuildStore,
      ReadStateStore,
      UserGuildSettingsStore,
      UserSettingsProtoStore,
    );
    const items = [UserGuildSettingsStore];
    this.syncWith(items, pruneNewChannels);
  }
  getNewChannelIds(id) {
    let tmp5;
    const tmp = null != id && null == closure_16[id];
    if (tmp) {
      initializeNewChannels(id);
    }
    if (null != id) {
      let tmp7 = closure_16[id];
      if (tmp7 == null) {
        tmp7 = set;
      }
      tmp5 = tmp7;
    } else {
      tmp5 = set;
    }
    return tmp5;
  }
  shouldIndicateNewChannel(guild_id, id) {
    if (null == guild_id) {
      return false;
    } else {
      const guild = GuildStore.getGuild(guild_id);
      let tmp2 = null == guild;
      if (!tmp2) {
        const features = guild.features;
        tmp2 = !features.has(constants3.COMMUNITY);
      }
      let tmp3 = !tmp2;
      if (tmp3) {
        const tmp4 = null != guild_id && null == closure_16[guild_id];
        if (tmp4) {
          initializeNewChannels(guild_id);
        }
        let hasItem;
        if (closure_16[guild_id] != null) {
          hasItem = obj.has(id);
        }
        if (hasItem) {
          hasItem = null == ReadStateStore.getTrackedAckMessageId(id);
        }
        tmp3 = hasItem;
      }
      return tmp3;
    }
  }
}
const prototype = NewChannelsStore.prototype;
NewChannelsStore.displayName = "NewChannelsStore";
let obj = {
  BULK_CLEAR_RECENTS: function handleBulkClearRecents(guildId) {
    guildId = guildId.guildId;
    const channelIds = guildId.channelIds;
    if (null == closure_16[guildId]) {
      return false;
    } else {
      const item = channelIds.forEach((item) => {
        const obj = closure_16[guildId];
        return obj.delete(item);
      });
      if (0 === closure_16[guildId].size) {
        delete closure_16[guildId];
      }
    }
  },
  CHANNEL_ACK() {
    return true;
  },
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    let channelId;
    let guildId;
    ({ guildId, channelId } = arg0);
    if (null == guildId) {
      return false;
    } else {
      let tmp2 = null == closure_16[guildId];
      if (!tmp2) {
        const _Date = Date;
        const tmp4 = closure_17[guildId];
        const timestamp = Date.now();
        tmp2 = tmp4 < timestamp - DurationsDefault.Millis.HOUR;
      }
      let flag = false;
      if (tmp2) {
        initializeNewChannels(guildId);
        flag = true;
      }
      if (null != channelId) {
        maybeAckViewedChannel(guildId, channelId);
      }
      return flag;
    }
  },
  SIDEBAR_VIEW_CHANNEL: function handleSidebarViewChannel(guildId) {
    guildId = guildId.guildId;
    let tmp2 = null == guildId;
    const channelId = guildId.channelId;
    if (!tmp2) {
      tmp2 = tmp !== SidebarActionTypes.SidebarType.VIEW_CHANNEL;
    }
    if (!tmp2) {
      maybeAckViewedChannel(guildId, channelId);
    }
    return false;
  },
  SIDEBAR_VIEW_GUILD: function handleSidebarViewGuild(guildId) {
    guildId = guildId.guildId;
    if (null != guildId) {
      maybeAckViewedChannel(guildId, tmp);
    }
    return false;
  },
  CONNECTION_OPEN: seedCommunityBaseline,
  CACHE_LOADED: seedCommunityBaseline,
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    const guild1 = GuildStore.getGuild(guild.id);
    let hasItem;
    if (guild1 != null) {
      const features = guild1.features;
      hasItem = features.has(constants3.COMMUNITY);
    }
    if (true === hasItem) {
      set1.add(guild.id);
    }
    return false;
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    guild = guild.guild;
    let hasItem;
    let closure_0;
    set = undefined;
    const guild1 = GuildStore.getGuild(guild.id);
    if (guild1 != null) {
      const features = guild1.features;
      hasItem = features.has(constants3.COMMUNITY);
    }
    if (true === hasItem) {
      if (!set1.has(guild.id)) {
        set1.add(guild.id);
        closure_0 = tmp7;
        const guild2 = GuildStore.getGuild(guild.id);
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set();
        const tmp12 = null != guild2 && null != closure_16[guild.id];
        if (tmp12) {
          const items = [,];
          ({ rulesChannelId: arr[0], publicUpdatesChannelId: arr[1] } = guild2);
          const item = items.forEach((item) => {
            const hasItem = null != item && set.has(item);
            if (hasItem) {
              set.add(item);
            }
          });
        }
        closure_16[guild.id] = set;
        const _Date = Date;
        closure_17[guild.id] = Date.now();
        return true;
      }
    }
    if (true !== hasItem) {
      set1.delete(guild.id);
    }
    return false;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    delete closure_16[guild.id];
    set1.delete(guild.id);
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    if (!channel.isVocal()) {
      set = closure_16[channel.guild_id];
      const guild_id = channel.guild_id;
      if (set == null) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set();
      }
      closure_16[guild_id] = set;
      const obj = closure_16[channel.guild_id];
      obj.add(channel.id);
    }
  },
};
const newChannelsStore = new NewChannelsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/recent_channels/NewChannelsStore.tsx");

export default newChannelsStore;
