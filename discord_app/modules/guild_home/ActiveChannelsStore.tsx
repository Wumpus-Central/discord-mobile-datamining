// === Module 13705: ActiveChannelsStore ===

// Module 13705 (ActiveChannelsStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;

function truncateOldMessageData(channelId) {
  if (null != dependencyMap2[channelId]) {
    let nowResult = globalThis;
    const _Date2 = Date;
    importDefault = SnowflakeUtilsDefault.fromTimestamp(Date.now() - c5);
    const tmp6 = importDefault;
    const findIndexResult = _modDef12.findIndex(arr, (id) => SnowflakeUtilsDefault.compare(id.id, closure_0) > 0);
    if (-1 === findIndexResult) {
      dependencyMap2[channelId] = [];
    } else {
      const _Math = Math;
      const bound = Math.max(findIndexResult, arr.length - 26);
      dependencyMap2[channelId] = tmp6(12).slice(arr, bound);
      const tmp6Result = tmp6(12);
    }
    const _Date = nowResult.Date;
    nowResult = _Date.now();
    closure_8[channelId] = nowResult;
  }
}
function handleChannelDelete(channel) {
  channel = channel.channel;
  delete tmp4[tmp3];
  delete tmp2[tmp];
}
const isGuildHomeChannel = fn(1964).isGuildHomeChannel;
let c5 = 900000;
let dependencyMap = {};
const dependencyMap2 = {};
let closure_8 = {};
let dependencyMap3 = {};
const Store = initializeDefault.Store;
class ActiveChannelsStore extends Store {
}
const prototype = ActiveChannelsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelStore, SelectedGuildStore);
};
prototype["getActiveChannelsFetchStatus"] = function getActiveChannelsFetchStatus(guildId) {
  return dependencyMap3[guildId];
};
prototype["getActiveChannelIds"] = function getActiveChannelIds(guildId) {
  return dependencyMap[guildId];
};
prototype["getChannelMessageData"] = function getChannelMessageData(channelId) {
  return dependencyMap2[channelId];
};
prototype["shouldFetch"] = function shouldFetch(arg0) {
  let tmp = null == dependencyMap[arg0];
  if (tmp) {
    let loading;
    if (dependencyMap3[arg0] != null) {
      loading = tmp3.loading;
    }
    tmp = !loading;
  }
  return tmp;
};
ActiveChannelsStore.displayName = "ActiveChannelsStore";
const activeChannelsStore = new ActiveChannelsStore(DispatcherDefault, {
  CHANNEL_SELECT: function handleRefreshChannels(guildId) {
    guildId = guildId.guildId;
    if (isGuildHomeChannel(guildId.channelId)) {
      if (null != guildId) {
        if (null == dependencyMap[guildId]) {
          return false;
        } else {
          const item = arr.forEach((item) => {
            truncateOldMessageData(item);
            let length;
            if (dependencyMap[item] != null) {
              length = arr.length;
            }
            if (0 === length) {
              delete tmp[tmp2];
            }
          });
          const _Array = Array;
          const found = _modDef12.chain(Array.from(arr)).filter((item) => item in dependencyMap);
          const chainResult = _modDef12.chain(Array.from(arr));
          const _Set = Set;
          const set = new Set(found.sortBy((arg0) => {
            let num;
            if (dependencyMap[arg0] != null) {
              num = arr.length;
            }
            if (num == null) {
              num = 0;
            }
            return -num;
          }).value());
          dependencyMap[guildId] = set;
          const iter = found.sortBy((arg0) => {
            let num;
            if (dependencyMap[arg0] != null) {
              num = arr.length;
            }
            if (num == null) {
              num = 0;
            }
            return -num;
          });
        }
      }
    }
    return false;
  },
  MESSAGE_CREATE: function handleMessageCreate(optimistic) {
    ({ channelId, message } = optimistic);
    if (!optimistic.optimistic) {
      if (!optimistic.isPushNotification) {
        const channel = ChannelStore.getChannel(channelId);
        if (null == channel) {
          return false;
        } else {
          const guild_id = channel.guild_id;
          let tmp20 = null != guild_id;
          if (tmp20) {
            if (null != dependencyMap[guild_id]) {
              const author = message.author;
              let id;
              if (author != null) {
                id = author.id;
              }
              let obj = dependencyMap[guild_id];
              obj.add(channelId);
              let tmp11 = null == tmp10;
              if (!tmp11) {
                const _Date = Date;
                const sum = tmp10 + 300000;
                tmp11 = sum > Date.now();
              }
              if (tmp11) {
                truncateOldMessageData(channelId);
              }
              if (null == dependencyMap2[channelId]) {
                dependencyMap2[channelId] = [];
              }
              let arr = dependencyMap2[channelId];
              obj = { id: message.id, userId: id };
              arr = arr.push(obj);
            }
            tmp20 = tmp5;
          }
          return tmp20;
        }
      }
    }
    return false;
  },
  GUILD_DELETE: function handleGuildDelete(arg0) {
    delete tmp2[tmp];
  },
  CHANNEL_DELETE: handleChannelDelete,
  THREAD_DELETE: handleChannelDelete,
  ACTIVE_CHANNELS_FETCH_START: function handleActiveChannelsFetchStart(guildId) {
    closure_9[guildId.guildId] = { loading: true, error: null, fetchedAt: Date.now() };
  },
  ACTIVE_CHANNELS_FETCH_SUCCESS: function handleActiveChannelsFetchSuccess(guildId) {
    guildId = guildId.guildId;
    const channels = guildId.channels;
    closure_9[guildId] = { loading: false, error: null, fetchedAt: Date.now() };
    let obj = { loading: false, error: null, fetchedAt: Date.now() };
    closure_6[guildId] = new Set();
    let item = channels.forEach((item) => {
      ({ channel_id: guildId, messages } = item);
      item = messages.forEach((item) => {
        ({ message_id, user_id } = item);
        dependencyMap[guildId].add(closure_1_0);
        let tmp4 = null == tmp3;
        if (!tmp4) {
          const _Date = Date;
          const sum = tmp3 + 300000;
          tmp4 = sum > Date.now();
        }
        if (tmp4) {
          truncateOldMessageData(closure_1_0);
        }
        if (null == dependencyMap[closure_1_0]) {
          dependencyMap[closure_1_0] = [];
        }
        let arr = dependencyMap[closure_1_0];
        arr = arr.push({ id: message_id, userId: user_id });
      });
    });
  },
  ACTIVE_CHANNELS_FETCH_FAILURE: function handleActiveChannelsFetchFailure(error) {
    closure_9[error.guildId] = { loading: false, error: error.error, fetchedAt: null };
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    const guildId = SelectedGuildStore.getGuildId();
    if (null != guildId) {
      let items = tmp5;
      if (dependencyMap[guildId] == null) {
        items = [];
      }
      const reduced = Array.from(items).reduce((acc, item) => {
        let items = dependencyMap2[item];
        if (items == null) {
          items = [];
        }
        acc[item] = items;
        return acc;
      }, {});
      dependencyMap = {};
      closure_7 = {};
      closure_8 = {};
      dependencyMap3 = {};
      const _Date = Date;
      let num;
      const timestamp = Date.now();
      if (dependencyMap3[guildId] != null) {
        num = tmp3.fetchedAt;
      }
      if (num == null) {
        num = 0;
      }
      if (timestamp - num < c5) {
        let obj = {};
        obj[guildId] = tmp3;
        dependencyMap3 = obj;
        obj = {};
        obj[guildId] = tmp5;
        dependencyMap = obj;
        obj = {};
        const merged = Object.assign(reduced);
        closure_7 = obj;
      }
      const arr = Array.from(items);
    } else {
      dependencyMap = {};
      closure_7 = {};
      closure_8 = {};
      dependencyMap3 = {};
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_home/ActiveChannelsStore.tsx");

export default activeChannelsStore;
export const MAX_STORED_MESSAGES = 26;