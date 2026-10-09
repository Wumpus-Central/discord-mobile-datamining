// === Module 9651: SavedMessagesStore ===

// Module 9651 (SavedMessagesStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5431 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 9652 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
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
      const error = new Error("Invalid date given (" + tmp + ")");
      throw error;
    }
  }
}
function isChannelRelevant(id) {
  value = map.get(id);
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
  if (null == saveData.saveData.dueAt) {
    set1.add(messageId);
  } else {
    set1.delete(messageId);
  }
  const channelId = saveData.saveData.channelId;
  set = map.get(channelId);
  if (set == null) {
    const _Set = Set;
    set = new Set();
  }
  set.add(messageId);
  const result1 = map.set(channelId, set);
  if (null == saveData.message) {
    set2.add(messageId);
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
function resetSavedMessages(bookmarkIds) {
  secondaryIndexMap.clear();
  map.clear();
  set2.clear();
  set1.clear();
  while (tmp5 !== undefined) {
    let addResult = set1.add(tmp6);
    continue;
  }
  nextBefore = null;
  c13 = null;
  c12 = false;
  if (set1.size > 0) {
    let LOADED_FINISHED = SavedMessagesTypes.BookmarksFetchState.LOADED_HAS_MORE;
  } else {
    LOADED_FINISHED = SavedMessagesTypes.BookmarksFetchState.LOADED_FINISHED;
  }
  FAILED = LOADED_FINISHED;
  tmp5 = bookmarkIds[Symbol.iterator]();
}
function nullifyMessageObject(channelId) {
  const combined = "" + channelId.channelId + "-" + channelId.messageId;
  value = secondaryIndexMap.get(combined);
  let message;
  if (value != null) {
    message = value.message;
  }
  if (null == message) {
    return false;
  } else {
    const obj2 = {};
    const merged = Object.assign(value);
    obj2.message = null;
    const result = secondaryIndexMap.set(combined, obj2);
    return true;
  }
}
function handleGuild() {
  let tmp = 0 !== set2.size;
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
const secondaryIndexMap = new fn(4704).SecondaryIndexMap((saveData) => {
  const items = [SavedMessagesTypes.SavedMessageSortTypes.ALL, ];
  if (null != saveData.saveData.dueAt) {
    let BOOKMARK = SavedMessagesTypes.SavedMessageSortTypes.REMINDER;
  } else {
    BOOKMARK = SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK;
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
let closure_7 = 0;
let set = new Set();
const set1 = new Set();
let nextBefore = null;
let FAILED = fn(9652).BookmarksFetchState.LOADED_FINISHED;
let c12 = false;
let c13 = null;
const set2 = new Set();
const map = new Map();
const Store = initializeDefault.Store;
class SavedMessagesStore extends Store {
}
const prototype = SavedMessagesStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(UserStore);
};
prototype["getSavedMessages"] = function getSavedMessages() {
  return secondaryIndexMap.values(SavedMessagesTypes.SavedMessageSortTypes.ALL);
};
prototype["getSavedMessage"] = function getSavedMessage(channelId, messageId) {
  return secondaryIndexMap.get("" + channelId + "-" + messageId);
};
prototype["getMessageBookmarks"] = function getMessageBookmarks() {
  return secondaryIndexMap.values(SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK);
};
prototype["getMessageReminders"] = function getMessageReminders() {
  return secondaryIndexMap.values(SavedMessagesTypes.SavedMessageSortTypes.REMINDER);
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
};
prototype["getSavedMessageCount"] = function getSavedMessageCount() {
  return secondaryIndexMap.values(SavedMessagesTypes.SavedMessageSortTypes.REMINDER).length + set1.size;
};
prototype["getBookmarkCount"] = function getBookmarkCount() {
  return set1.size;
};
prototype["getBookmarksCursor"] = function getBookmarksCursor() {
  return nextBefore;
};
prototype["getBookmarksFetchState"] = function getBookmarksFetchState() {
  return FAILED;
};
prototype["hasFetchedBookmarks"] = function hasFetchedBookmarks() {
  return c12;
};
prototype["getIsStale"] = function getIsStale() {
  return c6;
};
prototype["getLastChanged"] = function getLastChanged() {
  return closure_7;
};
prototype["isMessageBookmarked"] = function isMessageBookmarked(id, id2) {
  return set1.has(id2);
};
prototype["isMessageReminder"] = function isMessageReminder(id, id2) {
  value = secondaryIndexMap.get("" + id + "-" + id2);
  return null != value && null != value.saveData.dueAt;
};
SavedMessagesStore.displayName = "SavedMessagesStore";
const savedMessagesStore = new SavedMessagesStore(DispatcherDefault, {
  POST_CONNECTION_OPEN: function handlePostConnectionOpen() {
    c6 = true;
  },
  LOGOUT: function handleLogout() {
    c6 = true;
    resetSavedMessages([]);
  },
  SAVED_MESSAGES_UPDATE: function handleUpdate(bookmarkIds) {
    c6 = false;
    resetSavedMessages(bookmarkIds.bookmarkIds);
    for (const item10011 of tmp) {
      let tmp4 = upsertSavedMessage(item10011);
      continue;
    }
  },
  SAVED_MESSAGE_CREATE: function handleCreate(savedMessage) {
    upsertSavedMessage(savedMessage.savedMessage);
  },
  SAVED_MESSAGE_DELETE: function handleDelete(savedMessageData) {
    savedMessageData = savedMessageData.savedMessageData;
    const combined = "" + savedMessageData.channelId + "-" + savedMessageData.messageId;
    const messageId = savedMessageData.messageId;
    value = secondaryIndexMap.get(combined);
    if (null == value) {
      let flag = set1.delete(messageId);
    } else {
      secondaryIndexMap.delete(combined);
      set1.delete(messageId);
      value2 = map.get(value.saveData.channelId);
      if (value2 != null) {
        value2.delete(messageId);
      }
      set2.delete(messageId);
      set.delete(messageId);
      const _Date = Date;
      closure_7 = Date.now();
      flag = true;
    }
    return flag;
  },
  BOOKMARKS_FETCH: function handleBookmarksFetch(requestId) {
    FAILED = SavedMessagesTypes.BookmarksFetchState.LOADING;
    requestId = requestId.requestId;
  },
  BOOKMARKS_FETCH_SUCCESS: function handleBookmarksFetchSuccess(requestId) {
    ({ nextBefore, bookmarks } = requestId);
    if (requestId.requestId !== c13) {
      return false;
    } else {
      c13 = null;
      const BookmarksFetchState = SavedMessagesTypes.BookmarksFetchState;
      FAILED = tmp ? BookmarksFetchState.LOADED_HAS_MORE : BookmarksFetchState.LOADED_FINISHED;
      c12 = true;
      nextBefore = bookmarks[Symbol.iterator]();
      bookmarks = 0;
    }
  },
  BOOKMARKS_FETCH_FAILURE: function handleBookmarksFetchFailure(requestId) {
    if (requestId.requestId !== c13) {
      return false;
    } else {
      c13 = null;
      FAILED = SavedMessagesTypes.BookmarksFetchState.FAILED;
    }
  },
  MESSAGE_DELETE: function handleMessageDelete(channelId) {
    const combined = "" + channelId.channelId + "-" + channelId.id;
    value = secondaryIndexMap.get(combined);
    let message;
    if (value != null) {
      message = value.message;
    }
    let flag = false;
    if (null != message) {
      const obj2 = {};
      const merged = Object.assign(value);
      obj2.message = null;
      const result = secondaryIndexMap.set(combined, obj2);
      flag = true;
    }
    return flag;
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(arg0) {
    while (tmp2 !== undefined) {
      let obj = { messageId: tmp3, channelId: tmp };
      let tmp5 = nullifyMessageObject(obj);
      continue;
    }
    tmp2 = arg0.ids[Symbol.iterator]();
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    message = message.message;
    if (null != message.id) {
      if (null != message.channel_id) {
        const _HermesInternal = HermesInternal;
        const combined = "" + message.channel_id + "-" + message.id;
        value = secondaryIndexMap.get(combined);
        let message1;
        if (value != null) {
          message1 = value.message;
        }
        if (null == message1) {
          return false;
        } else {
          const obj = {};
          const merged = Object.assign(value);
          obj.message = MessageRecordUtils.updateMessageRecord(value.message, message);
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
    let tmp2 = 0 !== set2.size;
    if (tmp2) {
      let tmp4 = !c6;
      if (!c6) {
        value = map.get(tmp.id);
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
    if (0 === set2.size) {
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
    let tmp2 = 0 !== set2.size;
    if (tmp2) {
      let tmp4 = !c6;
      if (!c6) {
        value = map.get(tmp.id);
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
    let tmp2 = 0 !== set2.size;
    if (tmp2) {
      let tmp4 = !c6;
      if (!c6) {
        const currentUser = UserStore.getCurrentUser();
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/saved_messages/SavedMessagesStore.tsx");

export default savedMessagesStore;
export const getComparator = function getComparator(dueAt) {
  if (null != dueAt.dueAt) {
    let diff = getTimeSafe(dueAt.dueAt);
  } else {
    diff = c3 - getTimeSafe(dueAt.savedAt);
  }
  return diff;
};