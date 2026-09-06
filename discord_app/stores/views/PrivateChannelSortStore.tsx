// === Module 7218: PrivateChannelSortStore ===

// Module 7218 (PrivateChannelSortStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import _modDef4153 from "module_4153" /* 4153 */;
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 7221 */;
import MessageRequestStore from "MessageRequestStore" /* 7219 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 7220 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import ReadStateStore from "ReadStateStore" /* 4575 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function makeSortedChannel(channel, id) {
  let tmp = id;
  if (id === undefined) {
    id = ReadStateStore.lastMessageId(channel.id);
    if (id == null) {
      id = channel.lastMessageId;
    }
    if (id == null) {
      id = channel.id;
    }
    const isMessageRequestTimestamp = channel.isMessageRequestTimestamp;
    let tmp2 = id;
    if (null != isMessageRequestTimestamp) {
      let obj = _modDef4153(isMessageRequestTimestamp);
      const valueOfResult = obj.valueOf();
      let fromTimestampResult = SnowflakeUtilsDefault.fromTimestamp(valueOfResult);
      if (obj3.compare(id, fromTimestampResult) > 0) {
        fromTimestampResult = id;
      }
      tmp2 = fromTimestampResult;
      obj3 = SnowflakeUtilsDefault;
    }
    tmp = tmp2;
  }
  obj = { channelId: channel.id, lastMessageId: tmp, isFavorite: UserGuildSettingsStore.isMessagesFavorite(channel.id), isRequest: null };
  let isMessageRequestResult = MessageRequestStore.isMessageRequest(channel.id);
  if (!isMessageRequestResult) {
    isMessageRequestResult = SpamMessageRequestStore.isSpam(channel.id);
  }
  obj.isRequest = isMessageRequestResult;
  return obj;
}
function handleConnectionOpen() {
  secondaryIndexMap.clear();
  values = Object.values(ChannelStore.getMutablePrivateChannels());
  const item = values.forEach((id) => {
    const result = secondaryIndexMap.set(id.id, makeSortedChannel(id));
  });
}
function handleCacheLoaded() {
  const mutablePrivateChannels = ChannelStore.getMutablePrivateChannels();
  for (const key10006 in mutablePrivateChannels) {
    let result = secondaryIndexMap.set(key10006, makeSortedChannel(mutablePrivateChannels[key10006]));
    continue;
  }
}
const isPrivate = fn(1961).isPrivate;
const constants = { DEFAULT: "DEFAULT", FAVORITE: "FAVORITE" };
const secondaryIndexMap = new fn(4195).SecondaryIndexMap(function indexBy(value) {
  if (value.isRequest) {
    let items = [];
  } else {
    items = [tmp ? constants.FAVORITE : constants.DEFAULT];
  }
  return items;
}, function sortBy(arr) {
  return -SnowflakeUtilsDefault.extractTimestamp(arr.lastMessageId);
});
let values = [];
values = [];
let closure_17 = [];
const f38615 = () => {

};
const Store = initializeDefault.Store;
class PrivateChannelSortStore extends Store {
}
const prototype = PrivateChannelSortStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelStore, GuildStore, MessageRequestStore, ReadStateStore, SpamMessageRequestStore, UserGuildSettingsStore, UserStore);
  const items = [UserGuildSettingsStore, MessageRequestStore];
  this.syncWith(items, handleConnectionOpen);
};
prototype["getPrivateChannelIds"] = function getPrivateChannelIds() {
  if (typeof f38615 === "function") {
    secondaryIndexMap.values(constants.FAVORITE);
    values = secondaryIndexMap.values(constants.DEFAULT);
    let tmp4 = values === values;
    if (tmp4) {
      tmp4 = values === values;
    }
    if (!tmp4) {
      closure_17 = [];
      const item = values.forEach((channelId) => closure_1_17.push(channelId.channelId));
      const item1 = values.forEach((channelId) => closure_1_17.push(channelId.channelId));
    }
    return closure_17;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
prototype["getSortedChannels"] = function getSortedChannels() {
  const items = [secondaryIndexMap.values(constants.FAVORITE), secondaryIndexMap.values(constants.DEFAULT)];
  return items;
};
prototype["serializeForOverlay"] = function serializeForOverlay() {
  const obj = {};
  values = secondaryIndexMap.values();
  const item = values.forEach((channelId) => {
    obj[channelId.channelId] = channelId.lastMessageId;
  });
  return obj;
};
PrivateChannelSortStore.displayName = "PrivateChannelSortStore";
const privateChannelSortStore = new PrivateChannelSortStore(DispatcherDefault, {
  CONNECTION_OPEN: handleConnectionOpen,
  CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  CACHE_LOADED: handleCacheLoaded,
  CACHE_LOADED_LAZY: handleCacheLoaded,
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    channels = channels.channels;
    const item = channels.forEach((type) => {
      let hasItem = isPrivate(type.type);
      if (!hasItem) {
        hasItem = map.has(type.id);
      }
      if (hasItem) {
        const result = map.set(type.id, makeSortedChannel(type));
      }
    });
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    let tmp = isPrivate(channel.type);
    if (tmp) {
      const tmp4 = channel.id !== FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
      if (tmp4) {
        const result = secondaryIndexMap.set(channel.id, makeSortedChannel(channel));
      }
      tmp = tmp4;
    }
    return tmp;
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    return secondaryIndexMap.delete(channel.channel.id);
  },
  MESSAGE_CREATE: function handleMessageCreate(channelId) {
    channelId = channelId.channelId;
    if (secondaryIndexMap.has(channelId)) {
      const channel = ChannelStore.getChannel(channelId);
      let result = null != channel;
      if (result) {
        result = obj.set(channelId, makeSortedChannel(channel, channelId.message.id));
      }
      return result;
    } else {
      return false;
    }
    obj = secondaryIndexMap;
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    return secondaryIndexMap.delete(guild.guild.id);
  },
  LOGOUT: function handleLogout() {
    secondaryIndexMap.clear();
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("stores/views/PrivateChannelSortStore.tsx");

export default privateChannelSortStore;