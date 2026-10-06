// === Module 7115: ReferencedMessageStore ===

// Module 7115 (ReferencedMessageStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import LRUCacheDefault from "LRUCache" /* 1444 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5118 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7122 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ChannelConversationsStore from "ChannelConversationsStore" /* 7116 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7121 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MessageStore from "MessageStore" /* 5116 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
function processMessage(message) {
  let channel_id;
  let id;
  let obj5;
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
          ({ channel_id, id } = referenced_message);
          const obj2 = { state: merged.LOADED, message: obj5.createMessageRecord(referenced_message) };
          obj5 = MessageRecordUtils;
          const result = set(channel_id, id, obj2);
          flag2 = true;
          if (message.type === metroImportAll.THREAD_STARTER_MESSAGE) {
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
          message = ChannelConversationsStore.getMessage(message_reference.channel_id, message_id);
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
  const tmp = null != firstMessages && anyChanged(firstMessages, (first_message) => processMessage(first_message));
  return tmp;
}
({ MessageTypes: metroImportAll, MessageTypesWithLazyLoadedReferences: c9 } = Constants);
const ReferencedMessageState = { LOADED: 0, [0]: "LOADED", NOT_LOADED: 1, [1]: "NOT_LOADED", DELETED: 2, [2]: "DELETED" };
let obj2 = { state: ReferencedMessageState.NOT_LOADED };
let closure_11 = Object.freeze(obj2);
let set = new Set();
class ChannelReferencedMessageCache {
  constructor() {
    const obj2 = Object.create(new.target.prototype);
    const obj = {
      max: 100,
      dispose(arg0, arg1) {
        return obj.handleCacheDisposed(arg0, arg1);
      }
    };
    obj2._cachedMessages = new LRUCacheDefault(obj);
    new LRUCacheDefault(obj);
    obj2._cachedMessageIds = new Set();
    new Set();
    return obj2;
  }
  handleCacheDisposed(arg0) {
    const self = this;
    const _cachedMessageIds = this._cachedMessageIds;
    if (_cachedMessageIds.has(arg0)) {
      const _Set = Set;
      const self2 = this;
      const self3 = this;
      self._cachedMessageIds = new Set(self._cachedMessageIds);
      const _cachedMessageIds2 = self._cachedMessageIds;
      set = new Set(self._cachedMessageIds);
      _cachedMessageIds2.delete(arg0);
    }
  }
  set(arg0, arg1) {
    const self = this;
    const _cachedMessages = this._cachedMessages;
    const result = _cachedMessages.set(arg0, arg1);
    const _cachedMessageIds = this._cachedMessageIds;
    if (!_cachedMessageIds.has(arg0)) {
      const _Set = Set;
      const self2 = this;
      const self3 = this;
      self._cachedMessageIds = new Set(self._cachedMessageIds);
      const _cachedMessageIds2 = self._cachedMessageIds;
      set = new Set(self._cachedMessageIds);
      _cachedMessageIds2.add(arg0);
    }
  }
  has(arg0) {
    const _cachedMessageIds = this._cachedMessageIds;
    return _cachedMessageIds.has(arg0);
  }
  get(arg0) {
    const _cachedMessages = this._cachedMessages;
    return _cachedMessages.get(arg0);
  }
  getCachedMessageIds() {
    return this._cachedMessageIds;
  }
}
const prototype = ChannelReferencedMessageCache.prototype;
class ReferencedMessageCache {
  constructor() {
    merged = Object.assign({ _channelCaches: null });
    merged[0] = new Map();
    new Map();
    return merged;
  }
  has(arg0, arg1) {
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
  }
  get(arg0, arg1) {
    const _channelCaches = this._channelCaches;
    const value = _channelCaches.get(arg0);
    let value2;
    if (value != null) {
      value2 = value.get(arg1);
    }
    return value2;
  }
  set(arg0, arg1, arg2) {
    const _channelCaches = this._channelCaches;
    let value = _channelCaches.get(arg0);
    if (null == value) {
      const self5 = this;
      if (typeof ChannelReferencedMessageCache === "function") {
        const obj = Object.create(ChannelReferencedMessageCache.prototype);
        const self = this;
        const self2 = this;
        const obj2 = {
          max: 100,
          dispose(arg0, arg1) {
                return obj.handleCacheDisposed(arg0, arg1);
              }
        };
        obj._cachedMessages = new LRUCacheDefault(obj2);
        const _Set = Set;
        const self3 = this;
        const self4 = this;
        const tmp5 = new LRUCacheDefault(obj2);
        obj._cachedMessageIds = new Set();
        const _channelCaches2 = this._channelCaches;
        set = new Set();
        const result = _channelCaches2.set(arg0, obj);
        value = obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    const result1 = value.set(arg1, arg2);
  }
  updateExistingMessageIfCached(channel_id) {
    let obj;
    let obj3;
    const _channelCaches = this._channelCaches;
    const value = _channelCaches.get(channel_id.channel_id);
    let tmp = null != value;
    if (tmp) {
      let flag = value.has(channel_id.id);
      if (flag) {
        obj = { state: obj.LOADED, message: obj3.createMessageRecord(channel_id) };
        const id = channel_id.id;
        set = value.set;
        obj3 = MessageRecordUtils;
        const result = set(id, obj);
        flag = true;
      }
      tmp = flag;
    }
    return tmp;
  }
  deleteChannelCache(id) {
    const _channelCaches = this._channelCaches;
    return _channelCaches.delete(id);
  }
  retainWhere(fn) {
    const self = this;
    const items = [];
    const tmp = this._channelCaches[Symbol.iterator]();
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
  }
  getCachedMessageIdsForChannel(id) {
    const _channelCaches = this._channelCaches;
    const value = _channelCaches.get(id);
    let cachedMessageIds = null;
    if (null != value) {
      cachedMessageIds = value.getCachedMessageIds();
    }
    return cachedMessageIds;
  }
  clear() {
    const _channelCaches = this._channelCaches;
    _channelCaches.clear();
  }
}
const prototype2 = ReferencedMessageCache.prototype;
let merged = Object.assign({ _channelCaches: null });
const map = new Map();
merged[0] = map;
const Store = get_initializedDefault.Store;
class ReferencedMessageStore extends Store {
  initialize() {
    this.waitFor(MessageStore, ChannelStore, ChannelConversationsStore, ConversationPreviewStore);
  }
  getMessageByReference(messageReference) {
    let value;
    if (null != messageReference) {
      value = merged.get(messageReference.channel_id, messageReference.message_id);
    }
    if (value == null) {
      value = closure_11;
    }
    return value;
  }
  getMessage(arg0, arg1) {
    let value = merged.get(arg0, arg1);
    if (value == null) {
      value = closure_11;
    }
    return value;
  }
  getReplyIdsForChannel(id) {
    let cachedMessageIdsForChannel;
    if (null != id) {
      cachedMessageIdsForChannel = merged.getCachedMessageIdsForChannel(id);
    }
    if (cachedMessageIdsForChannel == null) {
      cachedMessageIdsForChannel = set;
    }
    return cachedMessageIdsForChannel;
  }
}
const prototype3 = ReferencedMessageStore.prototype;
ReferencedMessageStore.displayName = "ReferencedMessageStore";
let obj3 = {
  CACHE_LOADED: function handleCacheLoaded(messages) {
    return anyChanged(Object.values(messages.messages), (arg0) => anyChanged(Object.values(arg0), (arg0) => closure_1_15(arg0)));
  },
  LOCAL_MESSAGES_LOADED: handleLoadMessages,
  LOAD_MESSAGES_SUCCESS: handleLoadMessages,
  LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
  SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  SMART_SEARCH_FETCH_SUCCESS: function handleSmartSearchFetchSuccess(messages) {
    return anyChanged(messages.messages, (first_message) => processMessage(first_message));
  },
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  CONVERSATION_MESSAGES_FETCH_SUCCESS: function handleConversationMessagesFetchSuccess(messages) {
    messages = messages.messages;
    return anyChanged(messages.concat(messages.messageReferences), (first_message) => processMessage(first_message));
  },
  CHANNEL_CONVERSATIONS_FETCH_SUCCESS: function handleChannelConversationsFetchSuccess(rawConversations) {
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
    let channelId;
    let messageId;
    let obj3;
    ({ messageId, channelId } = arg0);
    if (merged.has(channelId, messageId)) {
      const value = merged.get(channelId, messageId);
      if (null != value) {
        if (value.state === merged.LOADED) {
          const obj2 = { state: tmp3.LOADED, message: obj3.handleExplicitMediaScanTimeoutForMessage(value.message) };
          set = merged.set;
          obj3 = ExplicitMediaRedactionUtils;
          const result = set(channelId, messageId, obj2);
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
      const tmp = null != first_message && processMessage(first_message);
      return tmp;
    });
  },
  MESSAGE_CREATE: function handleMessageCreate(message) {
    message = message.message;
    const ready = MessageStore.getMessages(message.channel_id).ready && processMessage(message);
    return ready;
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    let channel_id;
    let id;
    let obj3;
    message = message.message;
    ({ id, channel_id } = message);
    if (merged.has(channel_id, id)) {
      const value = merged.get(channel_id, id);
      if (null != value) {
        if (value.state === merged.LOADED) {
          const obj2 = { state: tmp3.LOADED, message: obj3.updateMessageRecord(value.message, message) };
          set = merged.set;
          obj3 = MessageRecordUtils;
          const result = set(channel_id, id, obj2);
        }
      }
      return false;
    } else {
      return false;
    }
  },
  MESSAGE_DELETE: function handleMessageDelete(arg0) {
    let channelId;
    let id;
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
    let obj;
    message = message.message;
    obj = { state: obj.LOADED, message };
    const result = merged.set(message.channel_id, message.id, obj);
  },
  CHANNEL_DELETE: handleChannelDelete,
  THREAD_DELETE: handleChannelDelete,
  GUILD_DELETE: function handleGenericCleanup() {
    let channel;
    if (0 === merged.retainWhere((arg0) => null != channel.getChannel(arg0))) {
      return false;
    }
  },
  CONNECTION_OPEN: resetState,
  LOGOUT: resetState
};
const referencedMessageStore = new ReferencedMessageStore(DispatcherDefault, obj3);
let result = size.fileFinishedImporting("modules/replies/ReferencedMessageStore.tsx");

export default referencedMessageStore;
export { ReferencedMessageState };