// === Module 7287: processMessage ===

// Module 7287 (processMessage)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import privDefault from "priv" /* 1405 */;
import createMinimalMessageRecord from "createMinimalMessageRecord" /* 4703 */;
import redactionSettingToRenderedString from "redactionSettingToRenderedString" /* 7292 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "removePendingListFetch" /* 7288 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import closure_6 from "reinjectEphemerals" /* 4701 */;
import ME from "ME" /* 676 */;
import set from "set" /* 2 */;

require = arg1;
function processMessage(message) {
  let flag = false;
  if (obj.updateExistingMessageIfCached(message)) {
    flag = true;
  }
  let flag2 = flag;
  if (set.has(message.type)) {
    const message_reference = message.message_reference;
    if (null == message_reference) {
      return flag;
    } else {
      const message_id = message_reference.message_id;
      if (null == message_id) {
        return flag;
      } else if ("referenced_message" in message) {
        const referenced_message = message.referenced_message;
        if (null != referenced_message) {
          obj = { state: null, message: null };
          obj[0] = obj.LOADED;
          ({ channel_id, id } = referenced_message);
          obj[1] = createMinimalMessageRecord.createMessageRecord(referenced_message);
          const result = obj.set(channel_id, id, obj);
          flag2 = true;
          if (message.type === constants.THREAD_STARTER_MESSAGE) {
            processMessage(referenced_message);
            flag2 = true;
          }
          const obj5 = createMinimalMessageRecord;
        } else {
          obj = { state: null };
          obj[0] = obj.DELETED;
          const result1 = obj.set(message.channel_id, message_id, obj);
          flag2 = true;
        }
      } else {
        message = store.getMessage(message_reference.channel_id, message_id);
        if (message == null) {
          message = message.getMessage(message_reference.channel_id, message_id);
        }
        if (null != message) {
          obj1 = { state: null, message: null };
          obj1[0] = obj.LOADED;
          obj1[1] = message;
          const result2 = obj.set(message_reference.channel_id, message_id, obj1);
          flag2 = true;
        } else {
          const result3 = obj.set(message_reference.channel_id, message_id, closure_10);
          flag2 = true;
        }
      }
    }
  }
  return flag2;
}
function anyChanged(messages, arg1) {
  let flag = false;
  const iter = messages[Symbol.iterator]();
  while (iter !== undefined) {
    let tmp = false !== arg1(iter.next()) || flag;
    flag = tmp;
    continue;
  }
  return flag;
}
function handleLoadMessages(messages) {
  return anyChanged(messages.messages, (arg0) => callback(arg0));
}
function handleSearchMessagesSuccess(data) {
  return anyChanged(data.data, (messages) => callback(messages.messages, (arg0) => callback(arg0, (arg0) => callback(arg0))));
}
function handleChannelDelete(channel) {
  return obj.deleteChannelCache(channel.channel.id);
}
function resetState() {
  obj.clear();
}
function handleLoadThreadsSuccess(firstMessages) {
  firstMessages = firstMessages.firstMessages;
  let tmp = null != firstMessages;
  if (tmp) {
    tmp = anyChanged(firstMessages, (arg0) => callback(arg0));
  }
  return tmp;
}
({ MessageTypes: error, MessageTypesWithLazyLoadedReferences: closure_8 } = ME);
let obj = { LOADED: 0, [0]: "LOADED", NOT_LOADED: 1, [1]: "NOT_LOADED", DELETED: 2, [2]: "DELETED" };
obj = { state: obj.NOT_LOADED };
let closure_10 = Object.freeze(obj);
let set = new Set();
class ChannelReferencedMessageCache {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj = {
      max: 100,
      dispose(arg0, arg1) {
            return obj.handleCacheDisposed(arg0, arg1);
          }
    };
    tmp2 = new require("priv")(obj);
    obj._cachedMessages = tmp2;
    set = new Set();
    obj._cachedMessageIds = set;
    return obj;
  }
}
const prototype = ChannelReferencedMessageCache.prototype;
prototype["handleCacheDisposed"] = function handleCacheDisposed(arg0, arg1) {
  const self = this;
  const _cachedMessageIds = this._cachedMessageIds;
  if (_cachedMessageIds.has(arg0)) {
    const _Set = Set;
    set = new Set(self._cachedMessageIds);
    self._cachedMessageIds = set;
    const _cachedMessageIds2 = self._cachedMessageIds;
    _cachedMessageIds2.delete(arg0);
  }
};
prototype["set"] = function set(arg0, arg1) {
  const self = this;
  const _cachedMessages = this._cachedMessages;
  const result = _cachedMessages.set(arg0, arg1);
  const _cachedMessageIds = this._cachedMessageIds;
  if (!_cachedMessageIds.has(arg0)) {
    const _Set = Set;
    set = new Set(self._cachedMessageIds);
    self._cachedMessageIds = set;
    const _cachedMessageIds2 = self._cachedMessageIds;
    _cachedMessageIds2.add(arg0);
  }
};
prototype["has"] = function has(arg0) {
  const _cachedMessageIds = this._cachedMessageIds;
  return _cachedMessageIds.has(arg0);
};
prototype["get"] = function get(arg0) {
  const _cachedMessages = this._cachedMessages;
  return _cachedMessages.get(arg0);
};
prototype["getCachedMessageIds"] = function getCachedMessageIds() {
  return this._cachedMessageIds;
};
class ReferencedMessageCache {
  constructor() {
    obj = Object.create(new.target.prototype);
    map = new Map();
    obj[0] = map;
    return obj;
  }
}
const prototype2 = ReferencedMessageCache.prototype;
prototype2["has"] = function has(arg0, arg1) {
  const _channelCaches = this._channelCaches;
  const value = _channelCaches.get(arg0);
  let flag;
  if (value != null) {
    flag = value.has(arg1);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype2["get"] = function get(arg0, arg1) {
  const _channelCaches = this._channelCaches;
  let value = _channelCaches.get(arg0);
  value = undefined;
  if (value != null) {
    value = value.get(arg1);
  }
  return value;
};
prototype2["set"] = function set(arg0, arg1, arg2) {
  const _channelCaches = this._channelCaches;
  let value = _channelCaches.get(arg0);
  if (null == value) {
    if (typeof ChannelReferencedMessageCache !== "function") {
      HermesBuiltin.throwTypeError();
    }
    obj = Object.create(ChannelReferencedMessageCache.prototype);
    obj = { max: 100, dispose: null };
    obj[1] = function dispose(arg0, arg1) {
      return obj.handleCacheDisposed(arg0, arg1);
    };
    const tmp7 = new privDefault(obj);
    obj._cachedMessages = tmp7;
    const _Set = Set;
    set = new Set();
    obj._cachedMessageIds = set;
    const _channelCaches2 = this._channelCaches;
    const result = _channelCaches2.set(arg0, obj);
    value = obj;
    const tmp16 = ChannelReferencedMessageCache;
  }
  const result1 = value.set(arg1, arg2);
};
prototype2["updateExistingMessageIfCached"] = function updateExistingMessageIfCached(channel_id) {
  const _channelCaches = this._channelCaches;
  const value = _channelCaches.get(channel_id.channel_id);
  let tmp = null != value;
  if (tmp) {
    let flag = value.has(channel_id.id);
    if (flag) {
      obj = { state: null, message: null };
      obj[0] = obj.LOADED;
      obj[1] = createMinimalMessageRecord.createMessageRecord(channel_id);
      const result = value.set(channel_id.id, obj);
      flag = true;
      const obj3 = createMinimalMessageRecord;
    }
    tmp = flag;
  }
  return tmp;
};
prototype2["deleteChannelCache"] = function deleteChannelCache(id) {
  const _channelCaches = this._channelCaches;
  return _channelCaches.delete(id);
};
prototype2["retainWhere"] = function retainWhere(arg0) {
  const self = this;
  const items = [];
  while (tmp !== undefined) {
    let tmp3 = callback;
    let first = callback(tmp2, 1)[0];
    let tmp5 = first;
    if (!arg0(first)) {
      let tmp6 = first;
      let arr = items.push(tmp5);
    }
    continue;
  }
  for (const item10024 of items) {
    let deleteChannelCacheResult = self.deleteChannelCache(item10024);
    continue;
  }
  return items.length;
};
prototype2["getCachedMessageIdsForChannel"] = function getCachedMessageIdsForChannel(memo1) {
  const _channelCaches = this._channelCaches;
  const value = _channelCaches.get(memo1);
  let cachedMessageIds = null;
  if (null != value) {
    cachedMessageIds = value.getCachedMessageIds();
  }
  return cachedMessageIds;
};
prototype2["clear"] = function clear() {
  const _channelCaches = this._channelCaches;
  _channelCaches.clear();
};
obj = Object.create(ReferencedMessageCache.prototype);
obj[0] = new Map();
const Store = initializeDefault.Store;
class ReferencedMessageStore extends Store {
}
const prototype3 = ReferencedMessageStore.prototype;
prototype3["initialize"] = function initialize() {
  this.waitFor(closure_6, closure_5, closure_4);
};
prototype3["getMessageByReference"] = function getMessageByReference(messageReference) {
  let value;
  if (null != messageReference) {
    value = obj.get(messageReference.channel_id, messageReference.message_id);
  }
  if (value == null) {
    value = closure_10;
  }
  return value;
};
prototype3["getMessage"] = function getMessage(arg0, arg1) {
  let value = obj.get(arg0, arg1);
  if (value == null) {
    value = closure_10;
  }
  return value;
};
prototype3["getReplyIdsForChannel"] = function getReplyIdsForChannel(memo1) {
  let cachedMessageIdsForChannel;
  if (null != memo1) {
    cachedMessageIdsForChannel = obj.getCachedMessageIdsForChannel(memo1);
  }
  if (cachedMessageIdsForChannel == null) {
    cachedMessageIdsForChannel = set;
  }
  return cachedMessageIdsForChannel;
};
ReferencedMessageStore.displayName = "ReferencedMessageStore";
const referencedMessageStore = new ReferencedMessageStore(dispatcherDefault, {
  CACHE_LOADED: function handleCacheLoaded(messages) {
    return anyChanged(Object.values(messages.messages), (arg0) => callback(Object.values(arg0), (arg0) => callback(arg0)));
  },
  LOCAL_MESSAGES_LOADED: handleLoadMessages,
  LOAD_MESSAGES_SUCCESS: handleLoadMessages,
  LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
  SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  CONVERSATION_FETCH_SUCCESS: function handleConversationFetchSuccess(messages) {
    messages = messages.messages;
    return anyChanged(messages.concat(messages.messageReferences), (arg0) => callback(arg0));
  },
  CONVERSATIONS_FETCH_SUCCESS: function handleConversationsFetchSuccess(rawConversations) {
    return anyChanged(rawConversations.rawConversations, (messages) => {
      messages = messages.messages;
      if (messages == null) {
        messages = [];
      }
      return closure_15(messages, (arg0) => callback(arg0));
    });
  },
  LOAD_THREADS_SUCCESS: handleLoadThreadsSuccess,
  LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadThreadsSuccess,
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function handleMessageExplicitContentScanTimeout(arg0) {
    ({ messageId, channelId } = arg0);
    if (obj.has(channelId, messageId)) {
      const value = obj.get(channelId, messageId);
      if (null != value) {
        if (value.state === obj.LOADED) {
          obj = { state: null, message: null };
          obj[0] = tmp3.LOADED;
          obj[1] = redactionSettingToRenderedString.handleExplicitMediaScanTimeoutForMessage(value.message);
          const result = obj.set(channelId, messageId, obj);
        }
      }
      return false;
    } else {
      return false;
    }
  },
  LOAD_FORUM_POSTS: function handleLoadForumPosts(threads) {
    return anyChanged(Object.values(threads.threads), (first_message) => {
      first_message = first_message.first_message;
      let tmp = null != first_message;
      if (tmp) {
        tmp = callback(first_message);
      }
      return tmp;
    });
  },
  MESSAGE_CREATE: function handleMessageCreate(message) {
    message = message.message;
    let ready = store.getMessages(message.channel_id).ready;
    if (ready) {
      ready = processMessage(message);
    }
    return ready;
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    message = message.message;
    ({ id, channel_id } = message);
    if (obj.has(channel_id, id)) {
      const value = obj.get(channel_id, id);
      if (null != value) {
        if (value.state === obj.LOADED) {
          obj = { state: null, message: null };
          obj[0] = tmp3.LOADED;
          obj[1] = createMinimalMessageRecord.updateMessageRecord(value.message, message);
          const result = obj.set(channel_id, id, obj);
        }
      }
      return false;
    } else {
      return false;
    }
  },
  MESSAGE_DELETE: function handleMessageDelete(arg0) {
    ({ id, channelId } = arg0);
    if (obj.has(channelId, id)) {
      obj = { state: null };
      obj[0] = obj.DELETED;
      const result = obj.set(channelId, id, obj);
    }
    return false;
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(channelId) {
    channelId = channelId.channelId;
    return anyChanged(channelId.ids, (arg0) => {
      obj = closure_1_13;
      if (closure_1_13.has(channelId, arg0)) {
        obj = { state: null };
        obj[0] = closure_1_9.DELETED;
        const result = obj.set(channelId, arg0, obj);
      }
      return false;
    });
  },
  CREATE_PENDING_REPLY: function handleCreatePendingReply(message) {
    message = message.message;
    obj = { state: obj.LOADED, message };
    const result = obj.set(message.channel_id, message.id, obj);
  },
  CHANNEL_DELETE: handleChannelDelete,
  THREAD_DELETE: handleChannelDelete,
  GUILD_DELETE: function handleGenericCleanup() {
    if (0 === obj.retainWhere((arg0) => null != channel.getChannel(arg0))) {
      return false;
    }
  },
  CONNECTION_OPEN: resetState,
  LOGOUT: resetState
});
let result = set.fileFinishedImporting("modules/replies/ReferencedMessageStore.tsx");

export default referencedMessageStore;
export const ReferencedMessageState = obj;