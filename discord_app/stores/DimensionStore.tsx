// === Module 5180: percentageScrolled ===

// Module 5180 (percentageScrolled)
import initializeDefault from "initialize" /* 589 */;
import shallowEqualDefault from "shallowEqual" /* 643 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let closure_2 = {};
let closure_3 = {};
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
prototype["getGuildDimensions"] = function getGuildDimensions(arg0) {
  let tmp = dependencyMap2[arg0];
  if (tmp == null) {
    const obj = { guildId: null, scrollTop: null, scrollTo: null };
    obj[0] = arg0;
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
const dimensionStore = new DimensionStore(dispatcherDefault, {
  UPDATE_CHANNEL_DIMENSIONS: function handleChannelScroll(arg0) {
    ({ channelId, scrollTop, scrollHeight, offsetHeight } = arg0);
    if (null != scrollTop) {
      if (null != scrollHeight) {
        if (null != offsetHeight) {
          const obj = { channelId: null, scrollTop: null, scrollHeight: null, offsetHeight: null };
          obj[0] = channelId;
          obj[1] = scrollTop;
          obj[2] = scrollHeight;
          obj[3] = offsetHeight;
          if (null != tmp4) {
            if (shallowEqualDefault(tmp4, obj)) {
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
      const obj = { guildId: null, scrollTop: null, scrollTo: null };
      obj[0] = guildId;
      tmp[guildId] = obj;
    }
    if (undefined !== scrollTop) {
      tmp[guildId].scrollTop = scrollTop;
    }
    let flag = false;
    if (undefined !== scrollTo) {
      flag = tmp[guildId].scrollTo !== scrollTo;
      tmp[guildId].scrollTo = scrollTo;
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
const result = require("set").fileFinishedImporting("stores/DimensionStore.tsx");

export default dimensionStore;