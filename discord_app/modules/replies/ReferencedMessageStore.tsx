// === Module 7789: ReferencedMessageStore ===

// Module 7789 (ReferencedMessageStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import privDefault from "priv" /* 1438 */;
import MessageRecordUtils from "MessageRecordUtils" /* 4945 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7796 */;
import _slicedToArray from "module_32" /* 32 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7790 */;
import ConversationsStore from "ConversationsStore" /* 7794 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import MessageStore from "MessageStore" /* 4943 */;

require = fn;
function processMessage(message) {
  let flag = false;
  if (merged.updateExistingMessageIfCached(message)) {
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
          const obj2 = { state: merged.LOADED, message: null };
          ({ channel_id, id } = referenced_message);
          obj2.message = MessageRecordUtils.createMessageRecord(referenced_message);
          const result = merged.set(channel_id, id, obj2);
          flag2 = true;
          if (message.type === constants.THREAD_STARTER_MESSAGE) {
            processMessage(referenced_message);
            flag2 = true;
          }
        } else {
          const obj3 = { state: merged.DELETED };
          const result1 = merged.set(message.channel_id, message_id, obj3);
          flag2 = true;
        }
      } else {
        message = MessageStore.getMessage(message_reference.channel_id, message_id);
        if (message == null) {
          message = ConversationsStore.getMessage(message_reference.channel_id, message_id);
        }
        if (message == null) {
          message = ConversationPreviewStore.getMessage(message_id);
        }
        if (null != message) {
          const obj4 = { state: merged.LOADED, message };
          const result2 = merged.set(message_reference.channel_id, message_id, obj4);
          flag2 = true;
        } else {
          const result3 = merged.set(message_reference.channel_id, message_id, closure_11);
          flag2 = true;
        }
      }
    }
  }
  return flag2;
}
function anyChanged(messages, fn) {
  let flag = false;
  const iter = messages[Symbol.iterator]();
  while (iter !== undefined) {
    let tmp = false !== fn(iter.next()) || flag;
    flag = tmp;
    continue;
  }
  return flag;
}
function handleLoadMessages(messages) {
  return anyChanged(messages.messages, (first_message) => processMessage(first_message));
}
function handleSearchMessagesSuccess(data) {
  return anyChanged(data.data, (messages) => anyChanged(messages.messages, (arg0) => closure_1_16(arg0, (arg0) => closure_1_15(arg0))));
}
function handleChannelDelete(channel) {
  return merged.deleteChannelCache(channel.channel.id);
}
function resetState() {
  merged.clear();
}
function handleLoadThreadsSuccess(firstMessages) {
  firstMessages = firstMessages.firstMessages;
  let tmp = null != firstMessages;
  if (tmp) {
    tmp = anyChanged(firstMessages, (first_message) => processMessage(first_message));
  }
  return tmp;
}
const Constants = fn(1074);
({ MessageTypes: closure_8, MessageTypesWithLazyLoadedReferences: closure_9 } = Constants);
const ReferencedMessageState = { LOADED: 0, [0]: "LOADED", NOT_LOADED: 1, [1]: "NOT_LOADED", DELETED: 2, [2]: "DELETED" };
let closure_11 = Object.freeze({ state: ReferencedMessageState.NOT_LOADED });
let set = new Set();
class ChannelReferencedMessageCache {
  constructor() {
    obj1 = Object.create(new.target.prototype);
    closure_0 = obj1;
    obj = {
      max: 100,
      dispose(arg0, arg1) {
            return obj.handleCacheDisposed(arg0, arg1);
          }
    };
    tmp2 = new closure_1(closure_2[6])(obj);
    obj1._cachedMessages = tmp2;
    set = new Set();
    obj1._cachedMessageIds = set;
    return obj1;
  }
}
const prototype = ChannelReferencedMessageCache.prototype;
prototype["handleCacheDisposed"] = function handleCacheDisposed(arg0) {
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
    merged = Object.assign({ _channelCaches: null });
    map = new Map();
    merged[0] = map;
    return merged;
  }
}
const prototype2 = ReferencedMessageCache.prototype;
prototype2["has"] = function has(arg0, arg1) {
  const _channelCaches = this._channelCaches;
  value = _channelCaches.get(arg0);
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
  value = _channelCaches.get(arg0);
  value2 = undefined;
  if (value != null) {
    value2 = value.get(arg1);
  }
  return value2;
};
prototype2["set"] = function set(arg0, arg1, arg2) {
  const _channelCaches = this._channelCaches;
  value = _channelCaches.get(arg0);
  if (null == value) {
    if (typeof ChannelReferencedMessageCache === "function") {
      const obj = Object.create(ChannelReferencedMessageCache.prototype);
      const obj2 = {
        max: 100,
        dispose(arg0, arg1) {
              return obj.handleCacheDisposed(arg0, arg1);
            }
      };
      const tmp7 = new privDefault(obj2);
      obj._cachedMessages = tmp7;
      const _Set = Set;
      set = new Set();
      obj._cachedMessageIds = set;
      const _channelCaches2 = this._channelCaches;
      const result = _channelCaches2.set(arg0, obj);
      value = obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  const result1 = value.set(arg1, arg2);
};
prototype2["updateExistingMessageIfCached"] = function updateExistingMessageIfCached(channel_id) {
  const _channelCaches = this._channelCaches;
  value = _channelCaches.get(channel_id.channel_id);
  let tmp = null != value;
  if (tmp) {
    let flag = value.has(channel_id.id);
    if (flag) {
      const obj = { state: null, message: null };
      obj.state = obj.LOADED;
      obj.message = MessageRecordUtils.createMessageRecord(channel_id);
      const result = value.set(channel_id.id, obj);
      flag = true;
    }
    tmp = flag;
  }
  return tmp;
};
prototype2["deleteChannelCache"] = function deleteChannelCache(id) {
  const _channelCaches = this._channelCaches;
  return _channelCaches.delete(id);
};
prototype2["retainWhere"] = function retainWhere(fn) {
  const self = this;
  const items = [];
  while (tmp !== undefined) {
    let first = _slicedToArray(tmp2, 1)[0];
    let tmp5 = first;
    if (!fn(first)) {
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
prototype2["getCachedMessageIdsForChannel"] = function getCachedMessageIdsForChannel(id) {
  const _channelCaches = this._channelCaches;
  value = _channelCaches.get(id);
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
let merged = Object.assign({ _channelCaches: null });
merged[0] = new Map();
const Store = initializeDefault.Store;
class ReferencedMessageStore extends Store {
}
const prototype3 = ReferencedMessageStore.prototype;
prototype3["initialize"] = function initialize() {
  this.waitFor(MessageStore, ChannelStore, ConversationsStore, ConversationPreviewStore);
};
prototype3["getMessageByReference"] = function getMessageByReference(messageReference) {
  value = undefined;
  if (null != messageReference) {
    value = merged.get(messageReference.channel_id, messageReference.message_id);
  }
  if (value == null) {
    value = closure_11;
  }
  return value;
};
prototype3["getMessage"] = function getMessage(arg0, arg1) {
  value = merged.get(arg0, arg1);
  if (value == null) {
    value = closure_11;
  }
  return value;
};
prototype3["getReplyIdsForChannel"] = function getReplyIdsForChannel(id) {
  let cachedMessageIdsForChannel;
  if (null != id) {
    cachedMessageIdsForChannel = merged.getCachedMessageIdsForChannel(id);
  }
  if (cachedMessageIdsForChannel == null) {
    cachedMessageIdsForChannel = set;
  }
  return cachedMessageIdsForChannel;
};
ReferencedMessageStore.displayName = "ReferencedMessageStore";
const referencedMessageStore = new ReferencedMessageStore(DispatcherDefault, {
  CACHE_LOADED: function handleCacheLoaded(messages) {
    return anyChanged(Object.values(messages.messages), (arg0) => anyChanged(Object.values(arg0), (arg0) => closure_1_15(arg0)));
  },
  LOCAL_MESSAGES_LOADED: handleLoadMessages,
  LOAD_MESSAGES_SUCCESS: handleLoadMessages,
  LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
  SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  INTELLIGENCE_SEARCH_FETCH_SUCCESS: function handleIntelligenceSearchFetchSuccess(messages) {
    return anyChanged(messages.messages, (first_message) => processMessage(first_message));
  },
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  CONVERSATION_FETCH_SUCCESS: function handleConversationFetchSuccess(messages) {
    messages = messages.messages;
    return anyChanged(messages.concat(messages.messageReferences), (first_message) => processMessage(first_message));
  },
  CONVERSATIONS_FETCH_SUCCESS: function handleConversationsFetchSuccess(rawConversations) {
    return anyChanged(rawConversations.rawConversations, (messages) => {
      messages = messages.messages;
      if (messages == null) {
        messages = [];
      }
      return anyChanged(messages, (arg0) => closure_1_15(arg0));
    });
  },
  LOAD_THREADS_SUCCESS: handleLoadThreadsSuccess,
  LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadThreadsSuccess,
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function handleMessageExplicitContentScanTimeout(arg0) {
    ({ messageId, channelId } = arg0);
    if (merged.has(channelId, messageId)) {
      value = merged.get(channelId, messageId);
      if (null != value) {
        if (value.state === merged.LOADED) {
          const obj2 = { state: tmp3.LOADED, message: ExplicitMediaRedactionUtils.handleExplicitMediaScanTimeoutForMessage(value.message) };
          const result = merged.set(channelId, messageId, obj2);
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
        tmp = processMessage(first_message);
      }
      return tmp;
    });
  },
  MESSAGE_CREATE: function handleMessageCreate(message) {
    message = message.message;
    let ready = MessageStore.getMessages(message.channel_id).ready;
    if (ready) {
      ready = processMessage(message);
    }
    return ready;
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    message = message.message;
    ({ id, channel_id } = message);
    if (merged.has(channel_id, id)) {
      value = merged.get(channel_id, id);
      if (null != value) {
        if (value.state === merged.LOADED) {
          const obj2 = { state: tmp3.LOADED, message: MessageRecordUtils.updateMessageRecord(value.message, message) };
          const result = merged.set(channel_id, id, obj2);
        }
      }
      return false;
    } else {
      return false;
    }
  },
  MESSAGE_DELETE: function handleMessageDelete(arg0) {
    ({ id, channelId } = arg0);
    if (merged.has(channelId, id)) {
      const obj2 = { state: merged.DELETED };
      const result = merged.set(channelId, id, obj2);
    }
    return false;
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(channelId) {
    channelId = channelId.channelId;
    return anyChanged(channelId.ids, (arg0) => {
      if (merged.has(channelId, arg0)) {
        const obj2 = { state: merged.DELETED };
        const result = merged.set(channelId, arg0, obj2);
      }
      return false;
    });
  },
  CREATE_PENDING_REPLY: function handleCreatePendingReply(message) {
    message = message.message;
    obj = { state: obj.LOADED, message };
    const result = merged.set(message.channel_id, message.id, obj);
  },
  CHANNEL_DELETE: handleChannelDelete,
  THREAD_DELETE: handleChannelDelete,
  GUILD_DELETE: function handleGenericCleanup() {
    if (0 === merged.retainWhere((arg0) => null != channel.getChannel(arg0))) {
      return false;
    }
  },
  CONNECTION_OPEN: resetState,
  LOGOUT: resetState
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/replies/ReferencedMessageStore.tsx");

export default referencedMessageStore;
export { ReferencedMessageState };