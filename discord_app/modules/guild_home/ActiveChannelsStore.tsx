// === Module 13518: ActiveChannelsStore ===

// Module 13518 (ActiveChannelsStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4699 */;
import size from "module_2" /* 2 */;

let closure_6, closure_7, closure_9, importDefault, set;

function truncateOldMessageData(channelId) {
  let closure_0;
  if (null != closure_7[channelId]) {
    let obj = SnowflakeUtilsDefault;
    const _Date2 = Date;
    const tmp5 = importDefault;
    importDefault = obj.fromTimestamp(Date.now() - c5);
    const obj2 = _modDef12;
    const findIndexResult = obj2.findIndex(closure_7[channelId], (id) => {
      const obj = SnowflakeUtilsDefault;
      return obj.compare(id.id, closure_0) > 0;
    });
    if (-1 === findIndexResult) {
      closure_7[channelId] = [];
    } else {
      const _Math = Math;
      const bound = Math.max(findIndexResult, arr.length - 26);
      const tmp5Result = tmp5(12);
      closure_7[channelId] = tmp5Result.slice(closure_7[channelId], bound);
    }
    const _Date = Date;
    closure_8[channelId] = Date.now();
  }
}
function handleChannelDelete(channel) {
  channel = channel.channel;
  delete closure_7[channel.id];
  delete closure_8[channel.id];
}
const isGuildHomeChannel = ChannelConstants.isGuildHomeChannel;
let c5 = 900000;
const metroRequire = {};
const metroImportDefault = {};
let closure_8 = {};
const React4 = {};
const Store = get_initializedDefault.Store;
class ActiveChannelsStore extends Store {
  initialize() {
    this.waitFor(ChannelStore, SelectedGuildStore);
  }
  getActiveChannelsFetchStatus(guildId) {
    return closure_9[guildId];
  }
  getActiveChannelIds(guildId) {
    return closure_6[guildId];
  }
  getChannelMessageData(channelId) {
    return closure_7[channelId];
  }
  shouldFetch(arg0) {
    let tmp = null == closure_6[arg0];
    if (tmp) {
      let loading;
      if (closure_9[arg0] != null) {
        loading = tmp3.loading;
      }
      tmp = !loading;
    }
    return tmp;
  }
}
const prototype = ActiveChannelsStore.prototype;
ActiveChannelsStore.displayName = "ActiveChannelsStore";
let obj = {
  CHANNEL_SELECT: function handleRefreshChannels(guildId) {
    guildId = guildId.guildId;
    if (isGuildHomeChannel(guildId.channelId)) {
      let tmp = null;
      if (null != guildId) {
        const arr = closure_6[guildId];
        if (null == arr) {
          return false;
        } else {
          const item = arr.forEach((item) => {
            truncateOldMessageData(item);
            let length;
            const tmp = item;
            if (closure_1_7[item] != null) {
              length = arr.length;
            }
            if (0 === length) {
              delete closure_1_7[tmp];
            }
          });
          const _Array = Array;
          const obj = _modDef12;
          const chainResult = obj.chain(Array.from(arr));
          const found = chainResult.filter((item) => item in closure_1_7);
          const _Set = Set;
          const self = this;
          const self2 = this;
          const iter = found.sortBy((arg0) => {
            let num;
            if (closure_1_7[arg0] != null) {
              num = arr.length;
            }
            if (num == null) {
              num = 0;
            }
            return -num;
          });
          closure_6[guildId] = new Set(iter.value());
          set = new Set(iter.value());
        }
      }
    }
    return false;
  },
  MESSAGE_CREATE: function handleMessageCreate(optimistic) {
    let channelId;
    let message;
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
            if (null != closure_6[guild_id]) {
              const author = message.author;
              let id1;
              const id = message.id;
              if (author != null) {
                id1 = author.id;
              }
              const obj = closure_6[guild_id];
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
              if (null == closure_7[channelId]) {
                closure_7[channelId] = [];
              }
              const arr = closure_7[channelId];
              const obj2 = { id, userId: id1 };
              arr.push(obj2);
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
    delete closure_6[arg0.guild.id];
  },
  CHANNEL_DELETE: handleChannelDelete,
  THREAD_DELETE: handleChannelDelete,
  ACTIVE_CHANNELS_FETCH_START: function handleActiveChannelsFetchStart(guildId) {
    closure_9[guildId.guildId] = { loading: true, error: null, fetchedAt: Date.now() };
    ({ loading: true, error: null, fetchedAt: Date.now() });
  },
  ACTIVE_CHANNELS_FETCH_SUCCESS: function handleActiveChannelsFetchSuccess(guildId) {
    guildId = guildId.guildId;
    const channels = guildId.channels;
    let obj = { loading: false, error: null, fetchedAt: Date.now() };
    closure_9[guildId] = obj;
    closure_6[guildId] = new Set();
    new Set();
    let item = channels.forEach((item) => {
      let messages;
      ({ channel_id: guildId, messages } = item);
      item = messages.forEach((item) => {
        let message_id;
        let user_id;
        const obj = closure_6[guildId];
        ({ message_id, user_id } = item);
        obj.add(guildId);
        let tmp4 = null == tmp3;
        if (!tmp4) {
          const _Date = Date;
          const sum = tmp3 + 300000;
          tmp4 = sum > Date.now();
        }
        if (tmp4) {
          truncateOldMessageData(guildId);
        }
        if (null == closure_7[guildId]) {
          closure_7[guildId] = [];
        }
        const arr = closure_7[guildId];
        arr.push({ id: message_id, userId: user_id });
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
      const _Array = Array;
      if (closure_6[guildId] == null) {
        items = [];
      }
      const fromResult = from(items);
      const reduced = fromResult.reduce((acc, item) => {
        let items = closure_1_7[item];
        if (items == null) {
          items = [];
        }
        acc[item] = items;
        return acc;
      }, {});
      closure_6 = {};
      closure_7 = {};
      closure_8 = {};
      closure_9 = {};
      const _Date = Date;
      let num;
      const timestamp = Date.now();
      if (closure_9[guildId] != null) {
        num = tmp3.fetchedAt;
      }
      if (num == null) {
        num = 0;
      }
      if (timestamp - num < c5) {
        const obj = {};
        obj[guildId] = closure_9[guildId];
        closure_9 = obj;
        const obj2 = {};
        obj2[guildId] = closure_6[guildId];
        closure_6 = obj2;
        const obj3 = {};
        const merged = Object.assign(reduced);
        closure_7 = obj3;
      }
    } else {
      closure_6 = {};
      closure_7 = {};
      closure_8 = {};
      closure_9 = {};
    }
  }
};
const activeChannelsStore = new ActiveChannelsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/guild_home/ActiveChannelsStore.tsx");

export default activeChannelsStore;
export const MAX_STORED_MESSAGES = 26;