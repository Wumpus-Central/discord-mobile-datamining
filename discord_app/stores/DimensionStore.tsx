// === Module 5271: DimensionStore ===

// Module 5271 (DimensionStore)
import initializeDefault from "initialize" /* 504 */;
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 558 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

const dependencyMap = {};
const dependencyMap2 = {};
let closure_4 = { scrollTop: 0 };
const Store = initializeDefault.Store;
class DimensionStore extends Store {
}
const prototype = DimensionStore.prototype;
prototype["percentageScrolled"] = function percentageScrolled(arg0) {
  if (null != dependencyMap[arg0]) {
    return dependencyMap[arg0].scrollTop / dependencyMap[arg0].scrollHeight;
  } else {
    return 1;
  }
};
prototype["getChannelDimensions"] = function getChannelDimensions(arg0) {
  return dependencyMap[arg0];
};
prototype["getGuildDimensions"] = function getGuildDimensions(guildId) {
  let tmp = dependencyMap2[guildId];
  if (tmp == null) {
    const obj = { guildId, scrollTop: null, scrollTo: null };
    tmp = obj;
  }
  return tmp;
};
prototype["getGuildListDimensions"] = function getGuildListDimensions() {
  return closure_4;
};
prototype["isAtBottom"] = function isAtBottom(channelId) {
  let tmp;
  if (null != dependencyMap[channelId]) {
    tmp = tmp2.scrollTop === tmp2.scrollHeight - tmp2.offsetHeight;
  }
  return tmp;
};
DimensionStore.displayName = "DimensionStore";
const dimensionStore = new DimensionStore(DispatcherDefault, {
  UPDATE_CHANNEL_DIMENSIONS: function handleChannelScroll(arg0) {
    ({ channelId, scrollTop, scrollHeight, offsetHeight } = arg0);
    if (null != scrollTop) {
      if (null != scrollHeight) {
        if (null != offsetHeight) {
          const obj = { channelId, scrollTop, scrollHeight, offsetHeight };
          if (null != tmp4) {
            if (discord_common_shallowEqualDefault(tmp4, obj)) {
              return false;
            }
          }
          tmp3[channelId] = obj;
        }
      }
    }
    if (null == dependencyMap[channelId]) {
      return false;
    } else {
      delete tmp[tmp2];
    }
  },
  UPDATE_CHANNEL_LIST_DIMENSIONS: function handleGuildUpdate(arg0) {
    ({ guildId, scrollTop, scrollTo } = arg0);
    if (null == dependencyMap2[guildId]) {
      const obj = { guildId, scrollTop: null, scrollTo: null };
      dependencyMap2[guildId] = obj;
    }
    if (undefined !== scrollTop) {
      dependencyMap2[guildId].scrollTop = scrollTop;
    }
    let flag = false;
    if (undefined !== scrollTo) {
      flag = dependencyMap2[guildId].scrollTo !== scrollTo;
      dependencyMap2[guildId].scrollTo = scrollTo;
    }
    return null != scrollTo || flag;
  },
  UPDATE_GUILD_LIST_DIMENSIONS: function handleGuildListUpdate(scrollTop) {
    closure_4.scrollTop = scrollTop.scrollTop;
  },
  CALL_CREATE: function handleCallCreate(channelId) {
    channelId = channelId.channelId;
    let tmp3;
    if (null != dependencyMap[channelId]) {
      tmp3 = tmp4.scrollTop === tmp4.scrollHeight - tmp4.offsetHeight;
    }
    if (tmp3) {
      delete tmp[tmp2];
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/DimensionStore.tsx");

export default dimensionStore;