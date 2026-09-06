// discord_app/modules/replies/ReferencedMessageStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import privDefault from "../../../_runtime/01437_priv.js";
import MessageRecordUtils from "../messages/MessageRecordUtils.tsx";
import ExplicitMediaRedactionUtils from "../explicit_media_redaction/ExplicitMediaRedactionUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import ConversationsStore from "../conversations/ConversationsStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";

require = fn;
function processMessage(message) {
  let obj = merged;
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
          obj = { state: null, message: null };
          obj.state = obj.LOADED;
          ({ channel_id, id } = referenced_message);
          obj.message = MessageRecordUtils.createMessageRecord(referenced_message);
          const result = obj.set(channel_id, id, obj);
          flag2 = true;
          if (message.type === constants.THREAD_STARTER_MESSAGE) {
            processMessage(referenced_message);
            flag2 = true;
          }
        } else {
          obj = { state: null };
          obj.state = obj.DELETED;
          const result1 = obj.set(message.channel_id, message_id, obj);
          flag2 = true;
        }
      } else {
        message = MessageStore.getMessage(message_reference.channel_id, message_id);
        if (message == null) {
          message = ConversationsStore.getMessage(message_reference.channel_id, message_id);
        }
        if (null != message) {
          const obj1 = { state: obj.LOADED, message };
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
function anyChanged(data, fn) {
  let flag = false;
  const iter = data[Symbol.iterator]();
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
  return anyChanged(data.data, (messages) =>
    anyChanged(messages.messages, (arg0) => closure_1_15(arg0, (arg0) => closure_1_14(arg0))),
  );
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
({ MessageTypes: closure_7, MessageTypesWithLazyLoadedReferences: closure_8 } = Constants);
let ReferencedMessageState = { LOADED: 0, [0]: "LOADED", NOT_LOADED: 1, [1]: "NOT_LOADED", DELETED: 2, [2]: "DELETED" };
ReferencedMessageState = { state: ReferencedMessageState.NOT_LOADED };
let closure_10 = Object.freeze(ReferencedMessageState);
let set = new Set();
class ChannelReferencedMessageCache {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj = {
      max: 100,
      dispose(arg0, arg1) {
        return obj.handleCacheDisposed(arg0, arg1);
      },
    };
    tmp2 = new closure_1(closure_2[5])(obj);
    obj._cachedMessages = tmp2;
    set = new Set();
    obj._cachedMessageIds = set;
    return obj;
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
  _channelCaches.get(arg0);
  value = undefined;
  if (value != null) {
    value = value.get(arg1);
  }
  return value;
};
prototype2["set"] = function set(arg0, arg1, arg2) {
  const _channelCaches = this._channelCaches;
  value = _channelCaches.get(arg0);
  if (null == value) {
    if (typeof ChannelReferencedMessageCache === "function") {
      Object.create(ChannelReferencedMessageCache.prototype);
      const obj = {
        max: 100,
        dispose(arg0, arg1) {
          return obj.handleCacheDisposed(arg0, arg1);
        },
      };
      const tmp7 = new privDefault(obj);
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
class ReferencedMessageStore extends Store {}
const prototype3 = ReferencedMessageStore.prototype;
prototype3["initialize"] = function initialize() {
  this.waitFor(MessageStore, ChannelStore, ConversationsStore);
};
prototype3["getMessageByReference"] = function getMessageByReference(messageReference) {
  value = undefined;
  if (null != messageReference) {
    value = merged.get(messageReference.channel_id, messageReference.message_id);
  }
  if (value == null) {
    value = closure_10;
  }
  return value;
};
prototype3["getMessage"] = function getMessage(arg0, arg1) {
  value = merged.get(arg0, arg1);
  if (value == null) {
    value = closure_10;
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
ReferencedMessageState = {
  CACHE_LOADED: function handleCacheLoaded(messages) {
    return anyChanged(Object.values(messages.messages), (arg0) =>
      anyChanged(Object.values(arg0), (arg0) => closure_1_14(arg0)),
    );
  },
  LOCAL_MESSAGES_LOADED: handleLoadMessages,
  LOAD_MESSAGES_SUCCESS: handleLoadMessages,
  LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
  SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
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
      return anyChanged(messages, (arg0) => closure_1_14(arg0));
    });
  },
  LOAD_THREADS_SUCCESS: handleLoadThreadsSuccess,
  LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadThreadsSuccess,
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function handleMessageExplicitContentScanTimeout(arg0) {
    ({ messageId, channelId } = arg0);
    let obj = merged;
    if (merged.has(channelId, messageId)) {
      value = obj.get(channelId, messageId);
      if (null != value) {
        if (value.state === obj.LOADED) {
          obj = {
            state: tmp3.LOADED,
            message: ExplicitMediaRedactionUtils.handleExplicitMediaScanTimeoutForMessage(value.message),
          };
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
    let obj = merged;
    if (merged.has(channel_id, id)) {
      value = obj.get(channel_id, id);
      if (null != value) {
        if (value.state === obj.LOADED) {
          obj = { state: tmp3.LOADED, message: MessageRecordUtils.updateMessageRecord(value.message, message) };
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
    let obj = merged;
    if (merged.has(channelId, id)) {
      obj = { state: null };
      obj.state = obj.DELETED;
      const result = obj.set(channelId, id, obj);
    }
    return false;
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(channelId) {
    channelId = channelId.channelId;
    return anyChanged(channelId.ids, (arg0) => {
      let obj = merged;
      if (merged.has(channelId, arg0)) {
        obj = { state: null };
        obj.state = obj.DELETED;
        const result = obj.set(channelId, arg0, obj);
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
  LOGOUT: resetState,
};
const referencedMessageStore = new ReferencedMessageStore(DispatcherDefault, ReferencedMessageState);
const size = fn(2);
let result = size.fileFinishedImporting("modules/replies/ReferencedMessageStore.tsx");

export default referencedMessageStore;
export { ReferencedMessageState };
