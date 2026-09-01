// discord_app/modules/saved_messages/SavedMessagesStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import createMinimalMessageRecord from "../messages/MessageRecordUtils.tsx";
import SavedMessageSortTypes from "SavedMessagesTypes.tsx";
import closure_2 from "../../stores/UserStore.tsx";
import set from "../../../_runtime/00002_set.js";

require = arg1;
function getTimeSafe(dueAt) {
  if (null == dueAt) {
    return c3;
  } else {
    try {
      const _Date = Date;
      const date = new Date(dueAt);
      return date.getTime();
    } catch (err) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      error = new Error("Invalid date given (" + tmp + ")");
      throw error;
    }
  }
}
function isChannelRelevant(id) {
  const value = map.get(id);
  let tmp2 = null != value;
  if (tmp2) {
    tmp2 = value.size > 0;
  }
  return tmp2;
}
function upsertSavedMessage(saveData) {
  saveData = saveData.saveData;
  const combined = "" + saveData.channelId + "-" + saveData.messageId;
  if (null == secondaryIndexMap.get(combined)) {
    const _Date = Date;
    closure_7 = Date.now();
  }
  const result = secondaryIndexMap.set(combined, saveData);
  const messageId = saveData.saveData.messageId;
  const channelId = saveData.saveData.channelId;
  set = map.get(channelId);
  if (set == null) {
    const _Set = Set;
    set = new Set();
  }
  set.add(messageId);
  const result1 = map.set(channelId, set);
  if (null == saveData.message) {
    set1.add(messageId);
  }
  if (null != saveData.saveData.dueAt) {
    const _Date2 = Date;
    const date = new Date();
    if (date > saveData.saveData.dueAt) {
      set.add(messageId);
    }
  }
  set.delete(messageId);
}
function nullifyMessageObject(channelId) {
  const combined = "" + channelId.channelId + "-" + channelId.messageId;
  let obj = secondaryIndexMap;
  const value = secondaryIndexMap.get(combined);
  let message;
  if (value != null) {
    message = value.message;
  }
  if (null == message) {
    return false;
  } else {
    obj = {};
    const merged = Object.assign(value);
    obj.message = null;
    const result = obj.set(combined, obj);
    return true;
  }
}
function handleGuild() {
  let tmp = 0 !== set1.size;
  if (tmp) {
    if (!c6) {
      c6 = true;
    }
    tmp = !c6;
    const tmp3 = !c6;
  }
  return tmp;
}
let c3 = 10000000000000;
const secondaryIndexMap = new require("version").SecondaryIndexMap((saveData) => {
  const items = [SavedMessageSortTypes.SavedMessageSortTypes.ALL, ];
  if (null != saveData.saveData.dueAt) {
    let BOOKMARK = tmp(7604).SavedMessageSortTypes.REMINDER;
  } else {
    BOOKMARK = tmp(7604).SavedMessageSortTypes.BOOKMARK;
  }
  items[1] = BOOKMARK;
  return items;
}, (saveData) => {
  saveData = saveData.saveData;
  if (null != saveData.dueAt) {
    let diff = getTimeSafe(saveData.dueAt);
  } else {
    diff = c3 - getTimeSafe(saveData.savedAt);
  }
  return diff;
});
let c6 = true;
let c7 = 0;
let set = new Set();
const set1 = new Set();
const map = new Map();
const Store = initializeDefault.Store;
class SavedMessagesStore extends Store {
}
const prototype = SavedMessagesStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_2);
};
prototype["getSavedMessages"] = function getSavedMessages() {
  return secondaryIndexMap.values(SavedMessageSortTypes.SavedMessageSortTypes.ALL);
};
prototype["getSavedMessage"] = function getSavedMessage(channelId, messageId) {
  return secondaryIndexMap.get("" + channelId + "-" + messageId);
};
prototype["getMessageBookmarks"] = function getMessageBookmarks() {
  return secondaryIndexMap.values(SavedMessageSortTypes.SavedMessageSortTypes.BOOKMARK);
};
prototype["getMessageReminders"] = function getMessageReminders() {
  return secondaryIndexMap.values(SavedMessageSortTypes.SavedMessageSortTypes.REMINDER);
};
prototype["getOverdueMessageReminderCount"] = function getOverdueMessageReminderCount() {
  return set.size;
};
prototype["hasOverdueReminder"] = function hasOverdueReminder() {
  return set.size > 0;
};
prototype["getMostRecentOverdueDueAt"] = function getMostRecentOverdueDueAt() {
  let num = 0;
  const timestamp = Date.now();
  const values = secondaryIndexMap.values(SavedMessageSortTypes.SavedMessageSortTypes.REMINDER);
  for (const item10021 of values) {
    let tmp3 = getTimeSafe;
    let tmp4 = getTimeSafe(item10021.saveData.dueAt);
    let tmp5 = tmp4;
    if (tmp4 > timestamp) {
      let tmp6 = obj;
      obj.return();
      break;
    } else {
      num = tmp4;
      continue;
    }
    return num;
  }
};
prototype["getSavedMessageCount"] = function getSavedMessageCount() {
  return secondaryIndexMap.size();
};
prototype["getIsStale"] = function getIsStale() {
  return c6;
};
prototype["getLastChanged"] = function getLastChanged() {
  return c7;
};
prototype["isMessageBookmarked"] = function isMessageBookmarked(id, id2) {
  const value = secondaryIndexMap.get("" + id + "-" + id2);
  return null != value && null == value.saveData.dueAt;
};
prototype["isMessageReminder"] = function isMessageReminder(id, id2) {
  const value = secondaryIndexMap.get("" + id + "-" + id2);
  return null != value && null != value.saveData.dueAt;
};
SavedMessagesStore.displayName = "SavedMessagesStore";
const savedMessagesStore = new SavedMessagesStore(dispatcherDefault, {
  POST_CONNECTION_OPEN: function handlePostConnectionOpen() {
    c6 = true;
  },
  LOGOUT: function handleLogout() {
    c6 = true;
    secondaryIndexMap.clear();
    map.clear();
    set1.clear();
  },
  SAVED_MESSAGES_UPDATE: function handleUpdate(arg0) {
    c6 = false;
    secondaryIndexMap.clear();
    map.clear();
    set1.clear();
    while (tmp4 !== undefined) {
      let tmp6 = upsertSavedMessage;
      let tmp7 = upsertSavedMessage(tmp5);
      continue;
    }
  },
  SAVED_MESSAGE_CREATE: function handleCreate(savedMessage) {
    upsertSavedMessage(savedMessage.savedMessage);
  },
  SAVED_MESSAGE_DELETE: function handleDelete(savedMessageData) {
    savedMessageData = savedMessageData.savedMessageData;
    const combined = "" + savedMessageData.channelId + "-" + savedMessageData.messageId;
    let value = secondaryIndexMap.get(combined);
    if (null != value) {
      secondaryIndexMap.delete(combined);
      const messageId = savedMessageData.messageId;
      value = map.get(value.saveData.channelId);
      if (value != null) {
        value.delete(messageId);
      }
      set1.delete(messageId);
      set.delete(messageId);
      const _Date = Date;
      closure_7 = Date.now();
    }
    return false;
  },
  MESSAGE_DELETE: function handleMessageDelete(channelId) {
    const combined = "" + channelId.channelId + "-" + channelId.id;
    let obj = secondaryIndexMap;
    const value = secondaryIndexMap.get(combined);
    let message;
    if (value != null) {
      message = value.message;
    }
    let flag = false;
    if (null != message) {
      obj = {};
      const merged = Object.assign(value);
      obj.message = null;
      const result = obj.set(combined, obj);
      flag = true;
    }
    return flag;
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(arg0) {
    while (tmp2 !== undefined) {
      let tmp4 = nullifyMessageObject;
      let obj = { messageId: null, channelId: null };
      obj[0] = tmp3;
      obj[1] = tmp;
      let tmp5 = nullifyMessageObject(obj);
      continue;
    }
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    message = message.message;
    if (null != message.id) {
      if (null != message.channel_id) {
        const _HermesInternal = HermesInternal;
        const combined = "" + message.channel_id + "-" + message.id;
        const value = secondaryIndexMap.get(combined);
        message = undefined;
        if (value != null) {
          message = value.message;
        }
        if (null == message) {
          return false;
        } else {
          const obj = {};
          const merged = Object.assign(value);
          obj.message = createMinimalMessageRecord.updateMessageRecord(value.message, message);
          const result = obj3.set(combined, obj);
        }
        obj3 = secondaryIndexMap;
      }
    }
    return false;
  },
  GUILD_CREATE: handleGuild,
  GUILD_UPDATE: handleGuild,
  GUILD_DELETE: handleGuild,
  CHANNEL_CREATE: function handleChannelCreate(arg0) {
    let tmp2 = 0 !== set1.size;
    if (tmp2) {
      let tmp4 = !c6;
      if (!c6) {
        const value = map.get(tmp.id);
        if (null != value && value.size > 0) {
          c6 = true;
        }
        tmp4 = tmp9;
        const tmp8 = null != value && value.size > 0;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  },
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    channels = channels.channels;
    if (0 === set1.size) {
      return false;
    } else if (c6) {
      return false;
    } else {
      let flag2 = false;
      const tmp3 = channels[Symbol.iterator]();
      while (tmp3 !== undefined) {
        let tmp7 = isChannelRelevant;
        if (isChannelRelevant(tmp5.id)) {
          c6 = true;
          flag2 = true;
        }
        continue;
      }
      return flag2;
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(arg0) {
    let tmp2 = 0 !== set1.size;
    if (tmp2) {
      let tmp4 = !c6;
      if (!c6) {
        const value = map.get(tmp.id);
        if (null != value && value.size > 0) {
          c6 = true;
        }
        tmp4 = tmp9;
        const tmp8 = null != value && value.size > 0;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  },
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(arg0) {
    let tmp2 = 0 !== set1.size;
    if (tmp2) {
      let tmp4 = !c6;
      if (!c6) {
        currentUser = currentUser.getCurrentUser();
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        if (tmp.id === id) {
          c6 = true;
        }
        tmp4 = tmp9;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  },
  GUILD_ROLE_CREATE: handleGuild,
  GUILD_ROLE_UPDATE: handleGuild,
  GUILD_ROLE_DELETE: handleGuild,
  MESSAGE_REMINDER_DUE: function handleMessageReminderDue(savedMessage) {
    set.add(savedMessage.savedMessage.saveData.messageId);
  }
});
let result = set.fileFinishedImporting("modules/saved_messages/SavedMessagesStore.tsx");

export default savedMessagesStore;
export const getComparator = function getComparator(dueAt) {
  if (null != dueAt.dueAt) {
    let diff = getTimeSafe(dueAt.dueAt);
  } else {
    diff = c3 - getTimeSafe(dueAt.savedAt);
  }
  return diff;
};