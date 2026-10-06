// === Module 7121: ConversationPreviewStore ===

// Module 7121 (ConversationPreviewStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import LRUCacheDefault from "LRUCache" /* 1444 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5118 */;
import ConversationConstants from "ConversationConstants" /* 7118 */;
import ConversationMessageCacheUtils from "ConversationMessageCacheUtils" /* 7119 */;
import ConversationsUtils from "ConversationsUtils" /* 7120 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

function clearMessageIndex(conversationId) {
  const tmp2 = map[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let first = tmp5[0];
    if (tmp5[1] === conversationId) {
      let deleteResult = map.delete(first);
    }
    continue;
  }
}
function handleReaction(messageId) {
  messageId = messageId.messageId;
  const value = map.get(messageId);
  let flag = false;
  if (null != value) {
    const peekResult = navigation.peek(value);
    flag = false;
    if (null != peekResult) {
      const messageByMessageId = peekResult.messageByMessageId;
      const value2 = messageByMessageId.get(messageId);
      flag = false;
      if (null != value2) {
        const obj = ConversationMessageCacheUtils;
        const applyReactionResult = obj.applyReaction(messageId, value2);
        let flag2 = null != applyReactionResult;
        if (flag2) {
          const messageByMessageId2 = peekResult.messageByMessageId;
          const result = messageByMessageId2.set(messageId, applyReactionResult);
          const tmp5Result = ConversationMessageCacheUtils;
          const result1 = tmp5Result.replaceHydratedMessage(peekResult, messageId, applyReactionResult);
          flag2 = true;
        }
        flag = flag2;
      }
    }
  }
  return flag;
}
function handleRelationshipUpdate() {
  let c0 = false;
  let item = navigation.forEach((messageByMessageId) => {
    messageByMessageId = messageByMessageId.messageByMessageId;
    const item = messageByMessageId.forEach((item, index) => {
      const obj = ConversationMessageCacheUtils;
      const result = obj.applyRelationshipFlags(item);
      if (null != result) {
        c0 = true;
        messageByMessageId = messageByMessageId.messageByMessageId;
        const result1 = messageByMessageId.set(index, result);
        const tmpResult = ConversationMessageCacheUtils;
        const result2 = tmpResult.replaceHydratedMessage(messageByMessageId, index, result);
      }
    });
  });
  return c0;
}
function removeMessage(id) {
  const value = map.get(id);
  if (null == value) {
    return false;
  } else {
    const peekResult = navigation.peek(value);
    if (null == peekResult) {
      return false;
    } else {
      const obj2 = ConversationMessageCacheUtils;
      const result = obj2.removeHydratedMessage(peekResult, id);
      const messageByMessageId = peekResult.messageByMessageId;
      const deleteResult = messageByMessageId.delete(id);
      map.delete(id);
      return deleteResult;
    }
  }
}
function evictWhere(fn) {
  let flag = false;
  const keys = navigation.keys();
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let peekResult = navigation.peek(nextResult);
    let conversation;
    if (peekResult != null) {
      conversation = peekResult.conversation;
    }
    let tmp8 = null != conversation;
    if (tmp8) {
      tmp8 = fn(tmp7);
    }
    if (tmp8) {
      let delResult = navigation.del(tmp3);
      flag = true;
    }
    continue;
  }
  return flag;
}
let obj = { max: ConversationConstants.MAX_PREVIEW_CONVERSATIONS, dispose: clearMessageIndex };
let tmp2 = new LRUCacheDefault(obj);
const metroImportDefault = tmp2;
let map = new Map();
const map1 = new Map();
const Store = get_initializedDefault.Store;
class ConversationPreviewStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, ChannelStore, RelationshipStore, UserStore);
  }
  touchConversation(body) {
    return null != navigation.get(body);
  }
  getConversation(c3) {
    const peekResult = navigation.peek(c3);
    let conversation;
    if (peekResult != null) {
      conversation = peekResult.conversation;
    }
    if (conversation == null) {
      conversation = null;
    }
    return conversation;
  }
  isFullyHydrated(arg0) {
    const peekResult = navigation.peek(arg0);
    let fullyHydrated;
    if (peekResult != null) {
      fullyHydrated = peekResult.fullyHydrated;
    }
    return true === fullyHydrated;
  }
  getHydratedMessages(arg0) {
    const peekResult = navigation.peek(arg0);
    let hydratedMessages;
    if (peekResult != null) {
      hydratedMessages = peekResult.hydratedMessages;
    }
    if (hydratedMessages == null) {
      hydratedMessages = null;
    }
    return hydratedMessages;
  }
  getMessage(arg0) {
    const value = map.get(arg0);
    let tmp2 = null;
    if (null != value) {
      const peekResult = navigation.peek(value);
      let value2;
      if (peekResult != null) {
        const messageByMessageId = peekResult.messageByMessageId;
        value2 = messageByMessageId.get(arg0);
      }
      if (value2 == null) {
        value2 = null;
      }
      tmp2 = value2;
    }
    return tmp2;
  }
  isConversationFetchPending(arg0, arg1) {
    const value = map1.get(arg0);
    let tmp = null != value && 0 !== value.size;
    if (tmp) {
      const hasItem = true !== arg1 || value.has("full");
      tmp = hasItem;
    }
    return tmp;
  }
}
const prototype = ConversationPreviewStore.prototype;
ConversationPreviewStore.displayName = "ConversationPreviewStore";
let obj2 = {
  CONVERSATION_FETCH_SUCCESS: function handleConversationFetchSuccess(rawConversation) {
    rawConversation = rawConversation.rawConversation;
    const obj = ConversationsUtils;
    const mapConversationResult = obj.mapConversation(rawConversation);
    if (null == mapConversationResult) {
      return false;
    } else {
      const peekResult = navigation.peek(mapConversationResult.id);
      if (null != peekResult) {
        peekResult.conversation = mapConversationResult;
      } else {
        const _Map = Map;
        const self = this;
        const self2 = this;
        const id = mapConversationResult.id;
        const obj2 = { conversation: mapConversationResult, hydratedMessages: null, fullyHydrated: false, messageByMessageId: map };
        set = navigation.set;
        map = new Map();
        const result = set(id, obj2);
      }
      return true;
    }
  },
  CONVERSATION_MESSAGES_FETCH_START: function handleConversationMessagesFetchStart(conversationId) {
    conversationId = conversationId.conversationId;
    if (true !== conversationId.isStandalone) {
      return false;
    } else {
      let str = "preview";
      if (tmp) {
        str = "full";
      }
      const value = map1.get(conversationId);
      if (null != value) {
        value.add(str);
      } else {
        const _Set = Set;
        const items = [str];
        const self = this;
        const self2 = this;
        set = map1.set;
        const set1 = new Set(items);
        const result = set(conversationId, set1);
      }
    }
  },
  CONVERSATION_MESSAGES_FETCH_SUCCESS: function handleConversationMessagesFetchSuccess(isStandalone) {
    let _undefined;
    let conversationId;
    let fullyHydrated;
    function reindexMessages(conversationId, peekResult) {
      clearMessageIndex(conversationId);
      const messageByMessageId = peekResult.messageByMessageId;
      const keys = messageByMessageId.keys();
      for (const item10011 of keys) {
        let result = map.set(item10011, conversationId);
        continue;
      }
    }
    ({ conversationId, fullyHydrated } = isStandalone);
    _require = undefined;
    if (true !== isStandalone.isStandalone) {
      return false;
    } else {
      let str = "preview";
      if (fullyHydrated) {
        str = "full";
      }
      const value = map1.get(conversationId);
      if (null != value) {
        value.delete(str);
        if (0 === value.size) {
          map1.delete(conversationId);
        }
      }
      const peekResult = navigation.peek(conversationId);
      _require = peekResult;
      if (null != peekResult) {
        const obj2 = {
          meta: peekResult,
          messages: tmp,
          fullyHydrated,
          messageReferences: tmp2,
          upsertMessage(id) {
                const messageByMessageId = _undefined.messageByMessageId;
                return messageByMessageId.set(id.id, id);
              },
          upsertReference(id) {
                const messageByMessageId = _undefined.messageByMessageId;
                if (!messageByMessageId.has(id.id)) {
                  const messageByMessageId2 = _undefined.messageByMessageId;
                  const result = messageByMessageId2.set(id.id, id);
                }
              }
        };
        const obj3 = require("ConversationMessageCacheUtils");
        if (obj3.applyHydratedMessages(obj2)) {
          reindexMessages(conversationId, peekResult);
        }
      }
      return true;
    }
  },
  CONVERSATION_MESSAGES_FETCH_FAILURE: function handleConversationMessagesFetchFailure(conversationId) {
    conversationId = conversationId.conversationId;
    if (true !== conversationId.isStandalone) {
      return false;
    } else {
      let str = "preview";
      if (tmp) {
        str = "full";
      }
      const value = map1.get(conversationId);
      if (null != value) {
        value.delete(str);
        if (0 === value.size) {
          map1.delete(conversationId);
        }
      }
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    return evictWhere((channelId) => channelId.channelId === channel.id);
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    const tmp = (!("unavailable" in guild) || true !== guild.unavailable) && evictWhere((guildId) => guildId.guildId === guild.id);
    return tmp;
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    message = message.message;
    const id = message.id;
    let tmp = null != id;
    if (tmp) {
      const value = map.get(id);
      let flag = false;
      if (null != value) {
        const peekResult = navigation.peek(value);
        flag = false;
        if (null != peekResult) {
          const messageByMessageId = peekResult.messageByMessageId;
          const value2 = messageByMessageId.get(id);
          flag = false;
          if (null != value2) {
            const obj = MessageRecordUtils;
            const updateMessageRecordResult = obj.updateMessageRecord(value2, message);
            let flag2 = null != updateMessageRecordResult;
            if (flag2) {
              const messageByMessageId2 = peekResult.messageByMessageId;
              const result = messageByMessageId2.set(id, updateMessageRecordResult);
              const tmp7Result = ConversationMessageCacheUtils;
              const result1 = tmp7Result.replaceHydratedMessage(peekResult, id, updateMessageRecordResult);
              flag2 = true;
            }
            flag = flag2;
          }
        }
      }
      tmp = flag;
    }
    return tmp;
  },
  MESSAGE_REACTION_ADD: handleReaction,
  MESSAGE_REACTION_REMOVE: handleReaction,
  MESSAGE_REACTION_ADD_MANY: function handleReactionBatch(messageId) {
    messageId = messageId.messageId;
    const reactions = messageId.reactions;
    const value = map.get(messageId);
    let flag = false;
    if (null != value) {
      const peekResult = navigation.peek(value);
      flag = false;
      if (null != peekResult) {
        const messageByMessageId = peekResult.messageByMessageId;
        const value2 = messageByMessageId.get(messageId);
        flag = false;
        if (null != value2) {
          const addReactionBatchResult = value2.addReactionBatch(reactions, AuthenticationStore.getId());
          let flag2 = null != addReactionBatchResult;
          if (flag2) {
            const messageByMessageId2 = peekResult.messageByMessageId;
            const result = messageByMessageId2.set(messageId, addReactionBatchResult);
            const obj2 = ConversationMessageCacheUtils;
            const result1 = obj2.replaceHydratedMessage(peekResult, messageId, addReactionBatchResult);
            flag2 = true;
          }
          flag = flag2;
        }
      }
    }
    return flag;
  },
  MESSAGE_REACTION_REMOVE_ALL: function handleRemoveAllReactions(messageId) {
    messageId = messageId.messageId;
    const value = map.get(messageId);
    let flag = false;
    if (null != value) {
      const peekResult = navigation.peek(value);
      flag = false;
      if (null != peekResult) {
        const messageByMessageId = peekResult.messageByMessageId;
        const value2 = messageByMessageId.get(messageId);
        flag = false;
        if (null != value2) {
          const result = value2.set("reactions", []);
          let flag2 = null != result;
          if (flag2) {
            const messageByMessageId2 = peekResult.messageByMessageId;
            const result1 = messageByMessageId2.set(messageId, result);
            const obj2 = ConversationMessageCacheUtils;
            const result2 = obj2.replaceHydratedMessage(peekResult, messageId, result);
            flag2 = true;
          }
          flag = flag2;
        }
      }
    }
    return flag;
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function handleRemoveEmojiReactions(messageId) {
    messageId = messageId.messageId;
    const emoji = messageId.emoji;
    const value = map.get(messageId);
    let flag = false;
    if (null != value) {
      const peekResult = navigation.peek(value);
      flag = false;
      if (null != peekResult) {
        const messageByMessageId = peekResult.messageByMessageId;
        const value2 = messageByMessageId.get(messageId);
        flag = false;
        if (null != value2) {
          const result = value2.removeReactionsForEmoji(emoji);
          let flag2 = null != result;
          if (flag2) {
            const messageByMessageId2 = peekResult.messageByMessageId;
            const result1 = messageByMessageId2.set(messageId, result);
            const obj2 = ConversationMessageCacheUtils;
            const result2 = obj2.replaceHydratedMessage(peekResult, messageId, result);
            flag2 = true;
          }
          flag = flag2;
        }
      }
    }
    return flag;
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    id = id.id;
    const value = map.get(id);
    let flag = false;
    if (null != value) {
      const peekResult = navigation.peek(value);
      flag = false;
      if (null != peekResult) {
        const obj2 = ConversationMessageCacheUtils;
        const result = obj2.removeHydratedMessage(peekResult, id);
        const messageByMessageId = peekResult.messageByMessageId;
        flag = messageByMessageId.delete(id);
        map.delete(id);
      }
    }
    return flag;
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(arg0) {
    let flag = false;
    const tmp = arg0.ids[Symbol.iterator]();
    while (tmp !== undefined) {
      if (removeMessage(tmp2)) {
        flag = true;
      }
      continue;
    }
    return flag;
  },
  RELATIONSHIP_ADD: handleRelationshipUpdate,
  RELATIONSHIP_UPDATE: handleRelationshipUpdate,
  RELATIONSHIP_REMOVE: handleRelationshipUpdate,
  LOGOUT: function handleLogout() {
    navigation.reset();
    map.clear();
    map1.clear();
  }
};
const conversationPreviewStore = new ConversationPreviewStore(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("modules/conversations/ConversationPreviewStore.tsx");

export default conversationPreviewStore;