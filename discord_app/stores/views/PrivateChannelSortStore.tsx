// === Module 5720: makeSortedChannel ===

// Module 5720 (makeSortedChannel)
import processChannel from "processChannel";
import closure_4 from "processChannel";
import { isPrivate } from "createChannelRecord";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import mergeGuildAvatar from "mergeGuildAvatar";
import { Store } from "initialize";

const require = arg1;
function makeSortedChannel(channel, id) {
  let tmp = id;
  if (id === undefined) {
    id = generateOldThreadCutoff.lastMessageId(channel.id);
    if (id == null) {
      id = channel.lastMessageId;
    }
    if (id == null) {
      id = channel.id;
    }
    const isMessageRequestTimestamp = channel.isMessageRequestTimestamp;
    let tmp2 = id;
    if (null != isMessageRequestTimestamp) {
      let obj = importDefault(3837)(isMessageRequestTimestamp);
      const valueOfResult = obj.valueOf();
      let fromTimestampResult = importDefault(11).fromTimestamp(valueOfResult);
      const obj2 = importDefault(11);
      if (obj3.compare(id, fromTimestampResult) > 0) {
        fromTimestampResult = id;
      }
      tmp2 = fromTimestampResult;
      obj3 = importDefault(11);
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
  return -importDefault(11).extractTimestamp(arr.lastMessageId);
});
let closure_15 = [];
let closure_16 = [];
let closure_17 = [];
const f35998 = () => {

};
class PrivateChannelSortStore extends Store {
}
const prototype = PrivateChannelSortStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ensureGuildLoaded, createGuildRecordFromRust, processChannel, generateOldThreadCutoff, closure_4, updateUserGuildSettingsInternal, mergeGuildAvatar);
  const items = [updateUserGuildSettingsInternal, processChannel];
  this.syncWith(items, handleConnectionOpen);
};
prototype["getPrivateChannelIds"] = function getPrivateChannelIds() {
  if (typeof f35998 !== "error") {
    HermesBuiltin.throwTypeError();
  }
  let values = secondaryIndexMap.values(constants.FAVORITE);
  values = secondaryIndexMap.values(constants.DEFAULT);
  let tmp = values === values;
  if (tmp) {
    tmp = values === values;
  }
  if (!tmp) {
    let closure_17 = [];
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
const privateChannelSortStore = new PrivateChannelSortStore(require("dispatcher"), {
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
      const tmp4 = channel.id !== require(5723) /* FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID */.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
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
let result = require("createChannelRecord").fileFinishedImporting("stores/views/PrivateChannelSortStore.tsx");

export default privateChannelSortStore;