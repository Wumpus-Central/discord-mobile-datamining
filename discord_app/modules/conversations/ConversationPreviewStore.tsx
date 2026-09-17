// discord_app/modules/conversations/ConversationPreviewStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import privDefault from "../../../_runtime/01438_priv.js";
import MessageRecordUtils from "../messages/MessageRecordUtils.tsx";
import ConversationsUtils from "ConversationsUtils.tsx";
import ConversationMessageCacheUtils from "ConversationMessageCacheUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
function clearMessageIndex(conversationId) {
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let first = tmp5[0];
    if (tmp5[1] === conversationId) {
      let deleteResult = map.delete(first);
    }
    continue;
  }
  tmp2 = map[Symbol.iterator]();
}
function handleReaction(messageId) {
  messageId = messageId.messageId;
  value = map.get(messageId);
  let flag = false;
  if (null != value) {
    const peekResult = navigation.peek(value);
    flag = false;
    if (null != peekResult) {
      const messageByMessageId = peekResult.messageByMessageId;
      value2 = messageByMessageId.get(messageId);
      flag = false;
      if (null != value2) {
        const applyReactionResult = ConversationMessageCacheUtils.applyReaction(messageId, value2);
        let flag2 = null != applyReactionResult;
        if (flag2) {
          const messageByMessageId2 = peekResult.messageByMessageId;
          const result = messageByMessageId2.set(messageId, applyReactionResult);
          const result1 = ConversationMessageCacheUtils.replaceHydratedMessage(
            peekResult,
            messageId,
            applyReactionResult,
          );
          flag2 = true;
          const tmp5Result = ConversationMessageCacheUtils;
        }
        flag = flag2;
      }
    }
  }
  return flag;
}
function handleRelationshipUpdate() {
  c0 = false;
  let item = navigation.forEach((messageByMessageId) => {
    messageByMessageId = messageByMessageId.messageByMessageId;
    const item = messageByMessageId.forEach((item, index) => {
      const result = ConversationMessageCacheUtils.applyRelationshipFlags(item);
      if (null != result) {
        c0 = true;
        messageByMessageId = messageByMessageId.messageByMessageId;
        const result1 = messageByMessageId.set(index, result);
        const result2 = ConversationMessageCacheUtils.replaceHydratedMessage(messageByMessageId, index, result);
        const tmpResult = ConversationMessageCacheUtils;
      }
    });
  });
  return c0;
}
function removeMessage(id) {
  value = map.get(id);
  if (null == value) {
    return false;
  } else {
    const peekResult = navigation.peek(value);
    if (null == peekResult) {
      return false;
    } else {
      const result = ConversationMessageCacheUtils.removeHydratedMessage(peekResult, id);
      const messageByMessageId = peekResult.messageByMessageId;
      map.delete(id);
      return messageByMessageId.delete(id);
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
let obj = { max: fn(7709).MAX_PREVIEW_CONVERSATIONS, dispose: clearMessageIndex };
const navigation = new privDefault({ max: fn(7709).MAX_PREVIEW_CONVERSATIONS, dispose: clearMessageIndex });
let map = new Map();
const map1 = new Map();
const Store = initializeDefault.Store;
class ConversationPreviewStore extends Store {}
const prototype = ConversationPreviewStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore, ChannelStore, RelationshipStore, UserStore);
};
prototype["touchConversation"] = function touchConversation(arg0) {
  return null != navigation.get(arg0);
};
prototype["getConversation"] = function getConversation(conversationId) {
  const peekResult = navigation.peek(conversationId);
  let conversation;
  if (peekResult != null) {
    conversation = peekResult.conversation;
  }
  if (conversation == null) {
    conversation = null;
  }
  return conversation;
};
prototype["isFullyHydrated"] = function isFullyHydrated(arg0) {
  const peekResult = navigation.peek(arg0);
  let fullyHydrated;
  if (peekResult != null) {
    fullyHydrated = peekResult.fullyHydrated;
  }
  return true === fullyHydrated;
};
prototype["getHydratedMessages"] = function getHydratedMessages(arg0) {
  const peekResult = navigation.peek(arg0);
  let hydratedMessages;
  if (peekResult != null) {
    hydratedMessages = peekResult.hydratedMessages;
  }
  if (hydratedMessages == null) {
    hydratedMessages = null;
  }
  return hydratedMessages;
};
prototype["getMessage"] = function getMessage(arg0) {
  value = map.get(arg0);
  let tmp2 = null;
  if (null != value) {
    const peekResult = navigation.peek(value);
    value2 = undefined;
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
};
prototype["isConversationFetchPending"] = function isConversationFetchPending(arg0, arg1) {
  value = map1.get(arg0);
  let tmp = null != value;
  if (tmp) {
    tmp = 0 !== value.size;
  }
  if (tmp) {
    let hasItem = true !== arg1;
    if (!hasItem) {
      hasItem = value.has("full");
    }
    tmp = hasItem;
  }
  return tmp;
};
ConversationPreviewStore.displayName = "ConversationPreviewStore";
const conversationPreviewStore = new ConversationPreviewStore(DispatcherDefault, {
  CONVERSATION_GET_SUCCESS: function handleConversationGetSuccess(rawConversation) {
    const mapConversationResult = ConversationsUtils.mapConversation(rawConversation.rawConversation);
    if (null == mapConversationResult) {
      return false;
    } else {
      const peekResult = navigation.peek(mapConversationResult.id);
      if (null != peekResult) {
        peekResult.conversation = mapConversationResult;
      } else {
        const obj3 = {
          conversation: mapConversationResult,
          hydratedMessages: null,
          fullyHydrated: false,
          messageByMessageId: null,
        };
        const _Map = Map;
        map = new Map();
        obj3.messageByMessageId = map;
        const result = navigation.set(mapConversationResult.id, obj3);
      }
      return true;
    }
  },
  CONVERSATION_FETCH_START: function handleConversationFetchStart(conversationId) {
    conversationId = conversationId.conversationId;
    if (true !== conversationId.isStandalone) {
      return false;
    } else {
      let str = "preview";
      if (tmp) {
        str = "full";
      }
      value = map1.get(conversationId);
      if (null != value) {
        value.add(str);
      } else {
        const _Set = Set;
        const items = [str];
        const set = new Set(items);
        const result = map1.set(conversationId, set);
      }
    }
  },
  CONVERSATION_FETCH_SUCCESS: function handleConversationFetchSuccess(isStandalone) {
    ({ conversationId, fullyHydrated } = isStandalone);
    _require = undefined;
    if (true !== isStandalone.isStandalone) {
      return false;
    } else {
      let str = "preview";
      if (fullyHydrated) {
        str = "full";
      }
      value = map1.get(conversationId);
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
          },
        };
        if (obj3.applyHydratedMessages(obj2)) {
          (function reindexMessages(conversationId, peekResult) {
            clearMessageIndex(conversationId);
            const messageByMessageId = peekResult.messageByMessageId;
            const keys = messageByMessageId.keys();
            for (const item10011 of keys) {
              let result = map.set(item10011, arg0);
              continue;
            }
          })(conversationId, peekResult);
        }
        obj3 = require("ConversationMessageCacheUtils");
      }
      return true;
    }
  },
  CONVERSATION_FETCH_FAILURE: function handleConversationFetchFailure(conversationId) {
    conversationId = conversationId.conversationId;
    if (true !== conversationId.isStandalone) {
      return false;
    } else {
      let str = "preview";
      if (tmp) {
        str = "full";
      }
      value = map1.get(conversationId);
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
    let tmp = !("unavailable" in guild);
    if (!tmp) {
      tmp = true !== guild.unavailable;
    }
    if (tmp) {
      tmp = evictWhere((guildId) => guildId.guildId === guild.id);
    }
    return tmp;
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    message = message.message;
    const id = message.id;
    let tmp = null != id;
    if (tmp) {
      value = map.get(id);
      let flag = false;
      if (null != value) {
        const peekResult = navigation.peek(value);
        flag = false;
        if (null != peekResult) {
          const messageByMessageId = peekResult.messageByMessageId;
          value2 = messageByMessageId.get(id);
          flag = false;
          if (null != value2) {
            const updateMessageRecordResult = MessageRecordUtils.updateMessageRecord(value2, message);
            let flag2 = null != updateMessageRecordResult;
            if (flag2) {
              const messageByMessageId2 = peekResult.messageByMessageId;
              const result = messageByMessageId2.set(id, updateMessageRecordResult);
              const result1 = ConversationMessageCacheUtils.replaceHydratedMessage(
                peekResult,
                id,
                updateMessageRecordResult,
              );
              flag2 = true;
              const tmp7Result = ConversationMessageCacheUtils;
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
    value = map.get(messageId);
    let flag = false;
    if (null != value) {
      const peekResult = navigation.peek(value);
      flag = false;
      if (null != peekResult) {
        const messageByMessageId = peekResult.messageByMessageId;
        value2 = messageByMessageId.get(messageId);
        flag = false;
        if (null != value2) {
          const addReactionBatchResult = value2.addReactionBatch(messageId.reactions, AuthenticationStore.getId());
          let flag2 = null != addReactionBatchResult;
          if (flag2) {
            const messageByMessageId2 = peekResult.messageByMessageId;
            const result = messageByMessageId2.set(messageId, addReactionBatchResult);
            const result1 = ConversationMessageCacheUtils.replaceHydratedMessage(
              peekResult,
              messageId,
              addReactionBatchResult,
            );
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
    value = map.get(messageId);
    let flag = false;
    if (null != value) {
      const peekResult = navigation.peek(value);
      flag = false;
      if (null != peekResult) {
        const messageByMessageId = peekResult.messageByMessageId;
        value2 = messageByMessageId.get(messageId);
        flag = false;
        if (null != value2) {
          const result = value2.set("reactions", []);
          let flag2 = null != result;
          if (flag2) {
            const messageByMessageId2 = peekResult.messageByMessageId;
            const result1 = messageByMessageId2.set(messageId, result);
            const result2 = ConversationMessageCacheUtils.replaceHydratedMessage(peekResult, messageId, result);
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
    value = map.get(messageId);
    let flag = false;
    if (null != value) {
      const peekResult = navigation.peek(value);
      flag = false;
      if (null != peekResult) {
        const messageByMessageId = peekResult.messageByMessageId;
        value2 = messageByMessageId.get(messageId);
        flag = false;
        if (null != value2) {
          const result = value2.removeReactionsForEmoji(messageId.emoji);
          let flag2 = null != result;
          if (flag2) {
            const messageByMessageId2 = peekResult.messageByMessageId;
            const result1 = messageByMessageId2.set(messageId, result);
            const result2 = ConversationMessageCacheUtils.replaceHydratedMessage(peekResult, messageId, result);
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
    value = map.get(id);
    let flag = false;
    if (null != value) {
      const peekResult = navigation.peek(value);
      flag = false;
      if (null != peekResult) {
        const result = ConversationMessageCacheUtils.removeHydratedMessage(peekResult, id);
        const messageByMessageId = peekResult.messageByMessageId;
        flag = messageByMessageId.delete(id);
        map.delete(id);
      }
    }
    return flag;
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(arg0) {
    let flag = false;
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
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conversations/ConversationPreviewStore.tsx");

export default conversationPreviewStore;
