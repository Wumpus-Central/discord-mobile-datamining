// discord_app/modules/messages/EphemeralMessageStore.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import { MessageFlags } from "ME";
import { Store } from "initialize";
import { hasFlag } from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import { createMinimalMessageRecord } from "MessageRecordUtils.tsx";

const require = arg1;
function dropChannelIfEmpty(channelId, value) {
  if (0 === value.size) {
    map.delete(channelId);
  }
}
function clearAll() {
  if (0 === map.size) {
    return false;
  } else {
    obj.clear();
  }
  obj = map;
}
let closure_4 = [];
let map = new Map();
class EphemeralMessageStore extends Store {
}
const prototype = EphemeralMessageStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ensureGuildLoaded);
};
prototype["getMessages"] = function getMessages(arg0) {
  const value = map.get(arg0);
  if (null != value) {
    if (0 !== value.size) {
      const _Array = Array;
      let arr = Array.from(value.values());
    }
    return arr;
  }
  arr = closure_4;
};
EphemeralMessageStore.displayName = "EphemeralMessageStore";
const ephemeralMessageStore = new EphemeralMessageStore(require("dispatcher"), {
  MESSAGE_CREATE: function handleMessageCreate(arg0) {
    let channelId;
    let message;
    ({ channelId, message } = arg0);
    let num = message.flags;
    if (num == null) {
      num = 0;
    }
    if (obj.hasFlag(num, MessageFlags.EPHEMERAL)) {
      let value = map.get(channelId);
      if (null == value) {
        const _Map = Map;
        map = new Map();
        const result = map.set(channelId, map);
        value = map;
      }
      const result1 = value.set(message.id, tmp(4586).createMessageRecord(message));
      if (value.size > 50) {
        const iter2 = value.keys().next();
        while (true !== iter2.done) {
          let deleteResult = value.delete(iter2.value);
          if (value.size <= 50) {
            break;
          }
        }
        const iter = value.keys();
      }
    } else {
      return false;
    }
    obj = hasFlag;
    tmp = require;
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    let channel_id;
    let id;
    message = message.message;
    ({ channel_id, id } = message);
    if (null != channel_id) {
      if (null != id) {
        let value = map.get(channel_id);
        if (null == value) {
          return false;
        } else {
          value = value.get(id);
          if (null == value) {
            return false;
          } else {
            const result = value.set(id, createMinimalMessageRecord.updateMessageRecord(value, message));
          }
        }
      }
    }
    return false;
  },
  MESSAGE_DELETE: function handleMessageDelete(channelId) {
    channelId = channelId.channelId;
    const value = map.get(channelId);
    if (null != value) {
      if (value.delete(channelId.id)) {
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
      obj.delete(channelId);
    } else {
      return false;
    }
    obj = map;
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
      const keys = obj.keys();
      const iter = keys[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp10 = channel;
        let tmp9 = nextResult;
        if (null == channel.getChannel(nextResult)) {
          let tmp11 = map;
          let tmp12 = map;
          let tmp13 = nextResult;
          let deleteResult = map.delete(tmp9);
          flag = true;
        }
        continue;
      }
      return flag && undefined;
    }
    obj = map;
  },
  CACHE_LOADED: clearAll,
  CONNECTION_OPEN: clearAll,
  OVERLAY_INITIALIZE: clearAll,
  LOGOUT: clearAll
});
let result = require("hasFlag").fileFinishedImporting("modules/messages/EphemeralMessageStore.tsx");

export default ephemeralMessageStore;