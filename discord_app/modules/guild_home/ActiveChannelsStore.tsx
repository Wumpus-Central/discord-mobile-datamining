// discord_app/modules/guild_home/ActiveChannelsStore.tsx
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";
import applyDefault from "../../../_runtime/00012_apply.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import closure_2 from "../../stores/ChannelStore.tsx";
import closure_3 from "../../stores/SelectedGuildStore.tsx";
import { isGuildHomeChannel } from "../channel/ChannelConstants.tsx";

function truncateOldMessageData(channelId) {
  if (null != dependencyMap2[channelId]) {
    let nowResult = globalThis;
    const _Date2 = Date;
    importDefault = DISCORD_EPOCHDefault.fromTimestamp(Date.now() - c5);
    const obj = DISCORD_EPOCHDefault;
    const tmp6 = importDefault;
    const findIndexResult = applyDefault.findIndex(arr, (id) => callback(closure_1_1[3]).compare(id.id, callback) > 0);
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
    const obj2 = applyDefault;
  }
}
function handleChannelDelete(channel) {
  channel = channel.channel;
  delete tmp4[tmp3];
  delete tmp2[tmp];
}
let c5 = 900000;
let closure_6 = {};
let closure_7 = {};
let closure_8 = {};
let closure_9 = {};
const Store = initializeDefault.Store;
class ActiveChannelsStore extends Store {
}
const prototype = ActiveChannelsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_2, closure_3);
};
prototype["getActiveChannelsFetchStatus"] = function getActiveChannelsFetchStatus(arg0) {
  return dependencyMap3[arg0];
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
const activeChannelsStore = new ActiveChannelsStore(dispatcherDefault, {
  CHANNEL_SELECT: function handleRefreshChannels(guildId) {
    guildId = guildId.guildId;
    if (isGuildHomeChannel(guildId.channelId)) {
      if (null != guildId) {
        if (null == dependencyMap[guildId]) {
          return false;
        } else {
          const item = arr.forEach((arg0) => {
            callback(arg0);
            let length;
            if (dependencyMap[arg0] != null) {
              length = arr.length;
            }
            if (0 === length) {
              delete tmp[tmp2];
            }
          });
          const _Array = Array;
          const obj = applyDefault;
          const found = applyDefault.chain(Array.from(arr)).filter((arg0) => arg0 in closure_7);
          const chainResult = applyDefault.chain(Array.from(arr));
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
        }
      }
    }
    return false;
  },
  MESSAGE_CREATE: function handleMessageCreate(optimistic) {
    ({ channelId, message } = optimistic);
    if (!optimistic.optimistic) {
      if (!optimistic.isPushNotification) {
        channel = channel.getChannel(channelId);
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
              obj = { id: null, userId: null };
              obj[0] = message.id;
              obj[1] = id;
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
    const obj = { loading: false, error: null, fetchedAt: Date.now() };
    closure_6[guildId] = new Set();
    let item = channels.forEach((arg0) => {
      ({ channel_id: guildId, messages } = arg0);
      const item = messages.forEach((arg0) => {
        ({ message_id, user_id } = arg0);
        closure_2_6[closure_1_0].add(closure_0);
        let tmp4 = null == tmp3;
        if (!tmp4) {
          const _Date = Date;
          const sum = tmp3 + 300000;
          tmp4 = sum > Date.now();
        }
        if (tmp4) {
          closure_2_10(tmp);
        }
        if (null == closure_2_7[closure_0]) {
          closure_2_7[tmp] = [];
        }
        let arr = closure_2_7[tmp];
        arr = arr.push({ id: message_id, userId: user_id });
      });
    });
  },
  ACTIVE_CHANNELS_FETCH_FAILURE: function handleActiveChannelsFetchFailure(error) {
    closure_9[error.guildId] = { loading: false, error: error.error, fetchedAt: null };
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    guildId = guildId.getGuildId();
    if (null != guildId) {
      let items = tmp5;
      if (dependencyMap[guildId] == null) {
        items = [];
      }
      const reduced = Array.from(items).reduce((arg0, arg1) => {
        let items = table[arg1];
        if (items == null) {
          items = [];
        }
        arg0[arg1] = items;
        return arg0;
      }, {});
      dependencyMap = {};
      closure_7 = {};
      closure_8 = {};
      let dependencyMap3 = {};
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
const result = require("set").fileFinishedImporting("modules/guild_home/ActiveChannelsStore.tsx");

export default activeChannelsStore;
export const MAX_STORED_MESSAGES = 26;