// discord_app/stores/views/PrivateChannelSortStore.tsx
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import hooksDefault from "../../../_runtime/04044_hooks.js";
import FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID from "../../modules/channel/FakePlaceholderPrivateChannel.tsx";
import closure_3 from "../../modules/message_request/MessageRequestStore.tsx";
import closure_4 from "../../modules/message_request/SpamMessageRequestStore.tsx";
import { isPrivate } from "../../records/ChannelRecord.tsx";
import closure_6 from "../ChannelStore.tsx";
import closure_7 from "../GuildStore.tsx";
import closure_8 from "../ReadStateStore.tsx";
import closure_9 from "../UserGuildSettingsStore.tsx";
import closure_10 from "../UserStore.tsx";

require = arg1;
function makeSortedChannel(channel, id) {
  let tmp = id;
  if (id === undefined) {
    id = closure_8.lastMessageId(channel.id);
    if (id == null) {
      id = channel.lastMessageId;
    }
    if (id == null) {
      id = channel.id;
    }
    const isMessageRequestTimestamp = channel.isMessageRequestTimestamp;
    let tmp2 = id;
    if (null != isMessageRequestTimestamp) {
      let obj = hooksDefault(isMessageRequestTimestamp);
      const valueOfResult = obj.valueOf();
      let fromTimestampResult = DISCORD_EPOCHDefault.fromTimestamp(valueOfResult);
      const obj2 = DISCORD_EPOCHDefault;
      if (obj3.compare(id, fromTimestampResult) > 0) {
        fromTimestampResult = id;
      }
      tmp2 = fromTimestampResult;
      obj3 = DISCORD_EPOCHDefault;
    }
    tmp = tmp2;
  }
  obj = { channelId: channel.id, lastMessageId: tmp, isFavorite: messagesFavorite.isMessagesFavorite(channel.id), isRequest: null };
  let isMessageRequestResult = messageRequest.isMessageRequest(channel.id);
  if (!isMessageRequestResult) {
    isMessageRequestResult = spam.isSpam(channel.id);
  }
  obj[3] = isMessageRequestResult;
  return obj;
}
function handleConnectionOpen() {
  secondaryIndexMap.clear();
  const values = Object.values(store.getMutablePrivateChannels());
  const item = values.forEach((id) => {
    const result = closure_12.set(id.id, callback(id));
  });
}
function handleCacheLoaded() {
  const mutablePrivateChannels = store.getMutablePrivateChannels();
  for (const key10006 in mutablePrivateChannels) {
    let tmp2 = key10006;
    let tmp3 = secondaryIndexMap;
    let tmp4 = makeSortedChannel;
    let result = secondaryIndexMap.set(key10006, makeSortedChannel(mutablePrivateChannels[key10006]));
    continue;
  }
}
let closure_11 = { DEFAULT: "DEFAULT", FAVORITE: "FAVORITE" };
const secondaryIndexMap = new require("version").SecondaryIndexMap(function indexBy(value) {
  if (value.isRequest) {
    let items = [];
  } else {
    items = [tmp ? closure_11.FAVORITE : closure_11.DEFAULT];
  }
  return items;
}, function sortBy(arr, items, arg2) {
  return -DISCORD_EPOCHDefault.extractTimestamp(arr.lastMessageId);
});
let closure_15 = [];
let closure_16 = [];
let closure_17 = [];
const f37118 = () => {

};
const Store = initializeDefault.Store;
class PrivateChannelSortStore extends Store {
}
const prototype = PrivateChannelSortStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_6, closure_7, closure_3, closure_8, closure_4, closure_9, closure_10);
  const items = [closure_9, closure_3];
  this.syncWith(items, handleConnectionOpen);
};
prototype["getPrivateChannelIds"] = function getPrivateChannelIds() {
  if (typeof f37118 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let values = secondaryIndexMap.values(constants.FAVORITE);
  values = secondaryIndexMap.values(constants.DEFAULT);
  let tmp = values === values;
  if (tmp) {
    tmp = values === values;
  }
  if (!tmp) {
    closure_17 = [];
    const item = values.forEach((channelId) => arr.push(channelId.channelId));
    const item1 = values.forEach((channelId) => arr.push(channelId.channelId));
  }
  return closure_17;
};
prototype["getSortedChannels"] = function getSortedChannels() {
  const items = [secondaryIndexMap.values(constants.FAVORITE), secondaryIndexMap.values(constants.DEFAULT)];
  return items;
};
prototype["serializeForOverlay"] = function serializeForOverlay() {
  const obj = {};
  const values = secondaryIndexMap.values();
  const item = values.forEach((channelId) => {
    obj[channelId.channelId] = channelId.lastMessageId;
  });
  return obj;
};
PrivateChannelSortStore.displayName = "PrivateChannelSortStore";
const privateChannelSortStore = new PrivateChannelSortStore(dispatcherDefault, {
  CONNECTION_OPEN: handleConnectionOpen,
  CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  CACHE_LOADED: handleCacheLoaded,
  CACHE_LOADED_LAZY: handleCacheLoaded,
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    channels = channels.channels;
    const item = channels.forEach((type) => {
      let hasItem = callback(type.type);
      if (!hasItem) {
        hasItem = map.has(type.id);
      }
      if (hasItem) {
        const result = map.set(type.id, callback2(type));
      }
    });
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    let tmp = isPrivate(channel.type);
    if (tmp) {
      const tmp4 = channel.id !== FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
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
      const channel = store.getChannel(channelId);
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
let result = require("set").fileFinishedImporting("stores/views/PrivateChannelSortStore.tsx");

export default privateChannelSortStore;