// discord_app/stores/views/PrivateChannelSortStore.tsx
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import tDefault from "../../../_runtime/03975_t.js";
import FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID from "../../modules/channel/FakePlaceholderPrivateChannel.tsx";
import processChannel from "../../modules/message_request/MessageRequestStore.tsx";
import processChannel2 from "../../modules/message_request/SpamMessageRequestStore.tsx";
import { isPrivate } from "../../records/ChannelRecord.tsx";
import ensureGuildLoaded from "../ChannelStore.tsx";
import createGuildRecordFromRust from "../GuildStore.tsx";
import generateOldThreadCutoff from "../ReadStateStore.tsx";
import updateUserGuildSettingsInternal from "../UserGuildSettingsStore.tsx";
import mergeGuildAvatar from "../UserStore.tsx";

require = fn;
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
      let obj = tDefault(isMessageRequestTimestamp);
      const valueOfResult = obj.valueOf();
      let fromTimestampResult = DISCORD_EPOCHDefault.fromTimestamp(valueOfResult);
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
  const item = values.forEach((item, index) => {
    const result = closure_12.set(item.id, callback(item));
  });
}
function handleCacheLoaded() {
  const mutablePrivateChannels = store.getMutablePrivateChannels();
  for (const key10006 in mutablePrivateChannels) {
    let result = secondaryIndexMap.set(key10006, makeSortedChannel(mutablePrivateChannels[key10006]));
    continue;
  }
}
let closure_11 = { DEFAULT: "DEFAULT", FAVORITE: "FAVORITE" };
const secondaryIndexMap = new require("version").SecondaryIndexMap(function indexBy(value) {
  if (value.isRequest) {
    let items = [];
  } else {
    items = [tmp ? constants.FAVORITE : constants.DEFAULT];
  }
  return items;
}, function sortBy(arr, items, arg2) {
  return -DISCORD_EPOCHDefault.extractTimestamp(arr.lastMessageId);
});
let closure_15 = [];
let closure_16 = [];
let closure_17 = [];
const f36560 = () => {

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
  if (typeof f36560 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  secondaryIndexMap.values(constants.FAVORITE);
  const values = secondaryIndexMap.values(constants.DEFAULT);
  let tmp = values === values;
  if (tmp) {
    tmp = values === values;
  }
  if (!tmp) {
    closure_17 = [];
    const item = values.forEach((item, index) => arr.push(item.channelId));
    const item1 = values.forEach((item, index) => arr.push(item.channelId));
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
  const item = values.forEach((item, index) => {
    obj[item.channelId] = item.lastMessageId;
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
    const item = channels.forEach((item, index) => {
      let hasItem = callback(item.type);
      if (!hasItem) {
        hasItem = map.has(item.id);
      }
      if (hasItem) {
        const result = map.set(item.id, callback2(item));
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
        result = secondaryIndexMap.set(channelId, makeSortedChannel(channel, channelId.message.id));
      }
      return result;
    } else {
      return false;
    }
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    return secondaryIndexMap.delete(guild.guild.id);
  },
  LOGOUT: function handleLogout() {
    secondaryIndexMap.clear();
  }
});
let result = require("obj132").fileFinishedImporting("stores/views/PrivateChannelSortStore.tsx");

export default privateChannelSortStore;