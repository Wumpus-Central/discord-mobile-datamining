// discord_app/modules/messages/EphemeralMessageStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import FlagUtils from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import MessageRecordUtils from "MessageRecordUtils.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let set;

function dropChannelIfEmpty(channelId, value) {
  if (0 === value.size) {
    map.delete(channelId);
  }
}
function clearAll() {
  if (0 === map.size) {
    return false;
  } else {
    map.clear();
  }
}
const MessageFlags = Constants.MessageFlags;
let closure_4 = [];
let map = new Map();
const Store = get_initializedDefault.Store;
class EphemeralMessageStore extends Store {
  initialize() {
    this.waitFor(ChannelStore);
  }
  getMessages(arg0) {
    const value = map.get(arg0);
    if (null != value) {
      let arr;
      if (0 !== value.size) {
        const _Array = Array;
        arr = Array.from(value.values());
      }
      return arr;
    }
    arr = closure_4;
  }
}
const prototype = EphemeralMessageStore.prototype;
EphemeralMessageStore.displayName = "EphemeralMessageStore";
let obj = {
  MESSAGE_CREATE: function handleMessageCreate(arg0) {
    let channelId;
    let message;
    ({ channelId, message } = arg0);
    let num = message.flags;
    const hasFlag = FlagUtils.hasFlag;
    FlagUtils;
    if (num == null) {
      num = 0;
    }
    if (hasFlag(num, MessageFlags.EPHEMERAL)) {
      let value = map.get(channelId);
      const obj = map;
      if (null == value) {
        const _Map = Map;
        const self = this;
        const self2 = this;
        map = new Map();
        const result = obj.set(channelId, map);
        value = map;
      }
      const id = message.id;
      set = value.set;
      const tmpResult = MessageRecordUtils;
      const result1 = set(id, tmpResult.createMessageRecord(message));
      if (value.size > 50) {
        const iter = value.keys();
        const iter2 = iter.next();
        while (true !== iter2.done) {
          let deleteResult = value.delete(iter2.value);
          if (value.size <= 50) {
            break;
          }
        }
      }
    } else {
      return false;
    }
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    let channel_id;
    let id;
    message = message.message;
    ({ channel_id, id } = message);
    if (null != channel_id) {
      if (null != id) {
        const value = map.get(channel_id);
        if (null == value) {
          return false;
        } else {
          const value2 = value.get(id);
          if (null == value2) {
            return false;
          } else {
            set = value.set;
            const obj2 = MessageRecordUtils;
            const result = set(id, obj2.updateMessageRecord(value2, message));
          }
        }
      }
    }
    return false;
  },
  MESSAGE_DELETE: function handleMessageDelete(channelId) {
    channelId = channelId.channelId;
    const id = channelId.id;
    const value = map.get(channelId);
    if (null != value) {
      if (value.delete(id)) {
        if (0 === value.size) {
          map.delete(channelId);
        }
      }
    }
    return false;
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(arg0) {
    let channelId;
    let ids;
    ({ channelId, ids } = arg0);
    const value = map.get(channelId);
    if (null == value) {
      return false;
    } else {
      let flag2 = false;
      for (const item10014 of ids) {
        if (value.delete(item10014)) {
          flag2 = true;
        }
        continue;
      }
      if (flag2) {
        dropChannelIfEmpty(channelId, value);
      } else {
        return false;
      }
    }
  },
  CLEAR_MESSAGES: function handleClearMessages(channelId) {
    channelId = channelId.channelId;
    if (map.has(channelId)) {
      map.delete(channelId);
    } else {
      return false;
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    if (!map.delete(channel.channel.id)) {
      return false;
    }
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    if (!map.delete(channel.channel.id)) {
      return false;
    }
  },
  GUILD_DELETE: function handleGuildDelete() {
    if (0 === map.size) {
      return false;
    } else {
      let flag = false;
      const keys = map.keys();
      const iter = keys[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp9 = nextResult;
        if (null == ChannelStore.getChannel(nextResult)) {
          let deleteResult = map.delete(tmp9);
          flag = true;
        }
        continue;
      }
      return flag && undefined;
    }
  },
  CACHE_LOADED: clearAll,
  CONNECTION_OPEN: clearAll,
  OVERLAY_INITIALIZE: clearAll,
  LOGOUT: clearAll,
};
const ephemeralMessageStore = new EphemeralMessageStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/messages/EphemeralMessageStore.tsx");

export default ephemeralMessageStore;
