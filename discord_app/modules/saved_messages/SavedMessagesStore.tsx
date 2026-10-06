// === Module 11296: SavedMessagesStore ===

// Module 11296 (SavedMessagesStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import SecondaryIndexMap from "SecondaryIndexMap" /* 4510 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5118 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7506 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

function getTimeSafe(dueAt) {
  if (null == dueAt) {
    return c3;
  } else {
    try {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const date = new Date(dueAt);
      return date.getTime();
    } catch (err) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self3 = this;
      const self4 = this;
      const error = new Error("Invalid date given (" + dueAt + ")");
      throw error;
    }
  }
}
function isChannelRelevant(id) {
  const value = map.get(id);
  return null != value && value.size > 0;
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
    const self = this;
    const self2 = this;
    set = new Set();
  }
  set.add(messageId);
  const result1 = map.set(channelId, set);
  if (null == saveData.message) {
    set1.add(messageId);
  }
  if (null != saveData.saveData.dueAt) {
    const _Date2 = Date;
    const self3 = this;
    const self4 = this;
    const date = new Date();
    if (date > saveData.saveData.dueAt) {
      set.add(messageId);
    }
  }
  set.delete(messageId);
}
function nullifyMessageObject(channelId) {
  const combined = "" + channelId.channelId + "-" + channelId.messageId;
  const value = secondaryIndexMap.get(combined);
  let message;
  if (value != null) {
    message = value.message;
  }
  if (null == message) {
    return false;
  } else {
    const obj2 = { message: null };
    const merged = Object.assign(value);
    const result = secondaryIndexMap.set(combined, obj2);
    return true;
  }
}
function handleGuild() {
  let tmp = 0 !== set1.size;
  if (tmp) {
    if (!c6) {
      c6 = true;
    }
    tmp = tmp3;
  }
  return tmp;
}
let c3 = 10000000000000;
const secondaryIndexMap = new SecondaryIndexMap.SecondaryIndexMap((saveData) => {
  let BOOKMARK;
  saveData = saveData.saveData;
  const items = [SavedMessagesTypes.SavedMessageSortTypes.ALL, ];
  if (null != saveData.dueAt) {
    BOOKMARK = SavedMessagesTypes.SavedMessageSortTypes.REMINDER;
  } else {
    BOOKMARK = SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK;
  }
  items[1] = BOOKMARK;
  return items;
}, (saveData) => {
  let diff;
  saveData = saveData.saveData;
  if (null != saveData.dueAt) {
    diff = getTimeSafe(saveData.dueAt);
  } else {
    diff = c3 - getTimeSafe(saveData.savedAt);
  }
  return diff;
});
let c6 = true;
let closure_7 = 0;
let set = new Set();
const set1 = new Set();
const map = new Map();
const Store = get_initializedDefault.Store;
class SavedMessagesStore extends Store {
  initialize() {
    this.waitFor(UserStore);
  }
  getSavedMessages() {
    return secondaryIndexMap.values(SavedMessagesTypes.SavedMessageSortTypes.ALL);
  }
  getSavedMessage(channelId, messageId) {
    return secondaryIndexMap.get("" + channelId + "-" + messageId);
  }
  getMessageBookmarks() {
    return secondaryIndexMap.values(SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK);
  }
  getMessageReminders() {
    return secondaryIndexMap.values(SavedMessagesTypes.SavedMessageSortTypes.REMINDER);
  }
  getOverdueMessageReminderCount() {
    return set.size;
  }
  hasOverdueReminder() {
    return set.size > 0;
  }
  getMostRecentOverdueDueAt() {
    let num = 0;
    const timestamp = Date.now();
    const values = secondaryIndexMap.values(SavedMessagesTypes.SavedMessageSortTypes.REMINDER);
    for (const item10021 of values) {
      let tmp4 = getTimeSafe(item10021.saveData.dueAt);
      if (tmp4 > timestamp) {
        obj.return();
        break;
      } else {
        num = tmp4;
        continue;
      }
      return num;
    }
  }
  getSavedMessageCount() {
    return secondaryIndexMap.size();
  }
  getIsStale() {
    return c6;
  }
  getLastChanged() {
    return closure_7;
  }
  isMessageBookmarked(id, id2) {
    const value = secondaryIndexMap.get("" + id + "-" + id2);
    return null != value && null == value.saveData.dueAt;
  }
  isMessageReminder(id, id2) {
    const value = secondaryIndexMap.get("" + id + "-" + id2);
    return null != value && null != value.saveData.dueAt;
  }
}
const prototype = SavedMessagesStore.prototype;
SavedMessagesStore.displayName = "SavedMessagesStore";
let obj = {
  POST_CONNECTION_OPEN: function handlePostConnectionOpen() {
    c6 = true;
  },
  LOGOUT: function handleLogout() {
    c6 = true;
    secondaryIndexMap.clear();
    map.clear();
    set1.clear();
  },
  SAVED_MESSAGES_UPDATE: function handleUpdate(savedMessages) {
    savedMessages = savedMessages.savedMessages;
    c6 = false;
    secondaryIndexMap.clear();
    map.clear();
    set1.clear();
    const tmp4 = savedMessages[Symbol.iterator]();
    while (tmp4 !== undefined) {
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
    const value = secondaryIndexMap.get(combined);
    if (null != value) {
      secondaryIndexMap.delete(combined);
      const messageId = savedMessageData.messageId;
      const value2 = map.get(value.saveData.channelId);
      if (value2 != null) {
        value2.delete(messageId);
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
    const value = secondaryIndexMap.get(combined);
    let message;
    if (value != null) {
      message = value.message;
    }
    let flag = false;
    if (null != message) {
      const obj2 = { message: null };
      const merged = Object.assign(value);
      const result = secondaryIndexMap.set(combined, obj2);
      flag = true;
    }
    return flag;
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(channelId) {
    channelId = channelId.channelId;
    const tmp = channelId.ids[Symbol.iterator]();
    while (tmp !== undefined) {
      let obj = { messageId: tmp2, channelId };
      let tmp4 = nullifyMessageObject(obj);
      continue;
    }
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    let obj2;
    message = message.message;
    if (null != message.id) {
      if (null != message.channel_id) {
        const _HermesInternal = HermesInternal;
        const combined = "" + message.channel_id + "-" + message.id;
        const value = secondaryIndexMap.get(combined);
        let message1;
        if (value != null) {
          message1 = value.message;
        }
        if (null == message1) {
          return false;
        } else {
          const obj = { message: obj2.updateMessageRecord(value.message, message) };
          const merged = Object.assign(value);
          obj2 = MessageRecordUtils;
          const result = secondaryIndexMap.set(combined, obj);
        }
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
      if (tmp4) {
        const value = map.get(tmp.id);
        if (null != value && value.size > 0) {
          c6 = true;
        }
        tmp4 = tmp9;
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
      if (tmp4) {
        const value = map.get(tmp.id);
        if (null != value && value.size > 0) {
          c6 = true;
        }
        tmp4 = tmp9;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  },
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(arg0) {
    let tmp2 = 0 !== set1.size;
    if (tmp2) {
      let tmp4 = !c6;
      if (tmp4) {
        const id = tmp.id;
        const currentUser = UserStore.getCurrentUser();
        let id1;
        if (currentUser != null) {
          id1 = currentUser.id;
        }
        if (id === id1) {
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
};
const savedMessagesStore = new SavedMessagesStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/saved_messages/SavedMessagesStore.tsx");

export default savedMessagesStore;
export const getComparator = function getComparator(dueAt) {
  let diff;
  if (null != dueAt.dueAt) {
    diff = getTimeSafe(dueAt.dueAt);
  } else {
    diff = c3 - getTimeSafe(dueAt.savedAt);
  }
  return diff;
};