// === Module 5437: DimensionStore ===

// Module 5437 (DimensionStore)
import get_initializedDefault from "get initialized" /* 504 */;
import shallowEqualDefault from "shallowEqual" /* 568 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const React2 = {};
const _false = {};
let closure_4 = { scrollTop: 0 };
const Store = get_initializedDefault.Store;
class DimensionStore extends Store {
  percentageScrolled(arg0) {
    if (null != closure_2[arg0]) {
      return closure_2[arg0].scrollTop / closure_2[arg0].scrollHeight;
    } else {
      return 1;
    }
  }
  getChannelDimensions(arg0) {
    return closure_2[arg0];
  }
  getGuildDimensions(guildId) {
    let tmp = closure_3[guildId];
    if (tmp == null) {
      tmp = { guildId, scrollTop: null, scrollTo: null };
      const obj = { guildId, scrollTop: null, scrollTo: null };
    }
    return tmp;
  }
  getGuildListDimensions() {
    return closure_4;
  }
  isAtBottom(channelId) {
    let tmp;
    if (null != closure_2[channelId]) {
      tmp = tmp2.scrollTop === tmp2.scrollHeight - tmp2.offsetHeight;
    }
    return tmp;
  }
}
const prototype = DimensionStore.prototype;
DimensionStore.displayName = "DimensionStore";
let obj = {
  UPDATE_CHANNEL_DIMENSIONS: function handleChannelScroll(arg0) {
    let channelId;
    let offsetHeight;
    let scrollHeight;
    let scrollTop;
    ({ channelId, scrollTop, scrollHeight, offsetHeight } = arg0);
    if (null != scrollTop) {
      if (null != scrollHeight) {
        if (null != offsetHeight) {
          const obj = { channelId, scrollTop, scrollHeight, offsetHeight };
          if (null != closure_2[channelId]) {
            if (shallowEqualDefault(closure_2[channelId], obj)) {
              return false;
            }
          }
          closure_2[channelId] = obj;
        }
      }
    }
    if (null == closure_2[channelId]) {
      return false;
    } else {
      delete closure_2[channelId];
    }
  },
  UPDATE_CHANNEL_LIST_DIMENSIONS: function handleGuildUpdate(arg0) {
    let guildId;
    let scrollTo;
    let scrollTop;
    ({ guildId, scrollTop, scrollTo } = arg0);
    if (null == closure_3[guildId]) {
      const obj = { guildId, scrollTop: null, scrollTo: null };
      closure_3[guildId] = obj;
    }
    if (undefined !== scrollTop) {
      closure_3[guildId].scrollTop = scrollTop;
    }
    let flag = false;
    if (undefined !== scrollTo) {
      flag = closure_3[guildId].scrollTo !== scrollTo;
      closure_3[guildId].scrollTo = scrollTo;
    }
    return null != scrollTo || flag;
  },
  UPDATE_GUILD_LIST_DIMENSIONS: function handleGuildListUpdate(scrollTop) {
    closure_4.scrollTop = scrollTop.scrollTop;
  },
  CALL_CREATE: function handleCallCreate(channelId) {
    channelId = channelId.channelId;
    let tmp2;
    if (null != closure_2[channelId]) {
      tmp2 = tmp3.scrollTop === tmp3.scrollHeight - tmp3.offsetHeight;
    }
    if (tmp2) {
      delete closure_2[channelId];
    }
  }
};
const dimensionStore = new DimensionStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/DimensionStore.tsx");

export default dimensionStore;