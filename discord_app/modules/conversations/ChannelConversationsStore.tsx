// === Module 7767: ChannelConversationsStore ===

// Module 7767 (ChannelConversationsStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import privDefault from "priv" /* 1451 */;
import MessageRecordUtils from "MessageRecordUtils" /* 6063 */;
import ConversationMessageCacheUtils from "ConversationMessageCacheUtils" /* 7768 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4917 */;
import UserStore from "UserStore" /* 1383 */;

require = fn;
function removePendingListFetch(channelId, requestKey) {
  value = map.get(channelId);
  const tmp = null == value || !value.has(requestKey);
  let flag = !tmp;
  if (!tmp) {
    value.delete(requestKey);
    flag = true;
    if (0 === value.size) {
      map.delete(channelId);
      flag = true;
    }
  }
  return flag;
}
function processHydratedMessages(arg0, arg1, messages, fullyHydrated) {
  closure_0 = arg1;
  const items = [];
  const peekResult = navigation.peek(arg0);
  c1 = peekResult;
  if (null != peekResult) {
    const conversationMetadataById = peekResult.conversationMetadataById;
    value = conversationMetadataById.get(arg1);
    if (null != value) {
      const obj2 = {
        meta: value,
        messages,
        fullyHydrated,
        messageReferences: items,
        upsertMessage(id) {
              const messageMetadataByMessageId = _undefined.messageMetadataByMessageId;
              value = messageMetadataByMessageId.get(id.id);
              if (null != value) {
                value.conversationId = conversationId;
                value.message = id;
              } else {
                const messageMetadataByMessageId2 = _undefined.messageMetadataByMessageId;
                const obj = { conversationId, message: id };
                const result = messageMetadataByMessageId2.set(id.id, obj);
              }
            },
        upsertReference(id) {
              const messageMetadataByMessageId = _undefined.messageMetadataByMessageId;
              if (!messageMetadataByMessageId.has(id.id)) {
                const messageMetadataByMessageId2 = _undefined.messageMetadataByMessageId;
                const obj = { conversationId: null, message: id };
                const result = messageMetadataByMessageId2.set(id.id, obj);
              }
            }
      };
      const result = ConversationMessageCacheUtils.applyHydratedMessages(obj2);
    }
  }
}
function handleReaction(messageId) {
  messageId = messageId.messageId;
  const peekResult = navigation.peek(messageId.channelId);
  let flag = false;
  if (null != peekResult) {
    const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
    value = messageMetadataByMessageId.get(messageId);
    let message;
    if (value != null) {
      message = value.message;
    }
    flag = false;
    if (null != message) {
      const applyReactionResult = ConversationMessageCacheUtils.applyReaction(messageId, value.message);
      let flag2 = null != applyReactionResult;
      if (flag2) {
        value.message = applyReactionResult;
        let tmp7 = null;
        if (null != value.conversationId) {
          const conversationMetadataById = peekResult.conversationMetadataById;
          value2 = conversationMetadataById.get(value.conversationId);
          if (value2 == null) {
            value2 = null;
          }
          tmp7 = value2;
        }
        const result = ConversationMessageCacheUtils.replaceHydratedMessage(tmp7, messageId, applyReactionResult);
        flag2 = true;
        const tmp4Result = ConversationMessageCacheUtils;
      }
      flag = flag2;
    }
  }
  return flag;
}
function handleRelationshipUpdate() {
  c0 = false;
  let item = navigation.forEach((messageMetadataByMessageId) => {
    const prop = messageMetadataByMessageId.messageMetadataByMessageId;
    const item = prop.forEach((message, index) => {
      if (null != message.message) {
        const result = ConversationMessageCacheUtils.applyRelationshipFlags(message.message);
        if (null != result) {
          c0 = true;
          message.message = result;
          let tmp = null;
          if (null != message.conversationId) {
            const conversationMetadataById = messageMetadataByMessageId.conversationMetadataById;
            value = conversationMetadataById.get(message.conversationId);
            if (value == null) {
              value = null;
            }
            tmp = value;
          }
          const result1 = ConversationMessageCacheUtils.replaceHydratedMessage(tmp, index, result);
          const tmp5Result = ConversationMessageCacheUtils;
        }
      }
    });
  });
  return c0;
}
function removeMessage(arg0, id) {
  const peekResult = navigation.peek(arg0);
  if (null == peekResult) {
    return false;
  } else {
    const messageMetadataByMessageId2 = peekResult.messageMetadataByMessageId;
    value = messageMetadataByMessageId2.get(id);
    let tmp4 = null;
    if (null != value) {
      let tmp2 = null;
      if (null != value.conversationId) {
        const conversationMetadataById = peekResult.conversationMetadataById;
        value2 = conversationMetadataById.get(value.conversationId);
        if (value2 == null) {
          value2 = null;
        }
        tmp2 = value2;
      }
      tmp4 = tmp2;
    }
    const result = ConversationMessageCacheUtils.removeHydratedMessage(tmp4, id);
    const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
    return messageMetadataByMessageId.delete(id);
  }
}
function evictChannel(arg0) {
  let hasItem = navigation.has(arg0);
  navigation.del(arg0);
  if (!hasItem) {
    hasItem = map.delete(arg0);
  }
  return hasItem;
}
const ConversationConstants = fn(5655);
({ CONVERSATION_COLORS: closure_8, CONVERSATION_FEEDBACK_RATINGS_CACHE_MAX: closure_9, MAX_CONVERSATIONS_PER_CHANNEL: c10, MAX_CHANNELS_WITH_CONVERSATIONS } = ConversationConstants);
const navigation = new privDefault({
  max: MAX_CHANNELS_WITH_CONVERSATIONS,
  dispose: function cleanupChannelSideState(arg0) {
    return map.delete(arg0);
  }
});
let map = new Map();
let map1 = new Map();
const Store = initializeDefault.Store;
class ChannelConversationsStore extends Store {
}
const prototype = ChannelConversationsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore, ChannelStore, RelationshipStore, SelectedChannelStore, UserStore);
};
prototype["hasChannelData"] = function hasChannelData(id) {
  return navigation.has(id);
};
prototype["getChannelConversations"] = function getChannelConversations(id) {
  const peekResult = navigation.peek(id);
  let conversations = null;
  if (null != peekResult) {
    conversations = peekResult.conversations;
  }
  return conversations;
};
prototype["getConversationForMessage"] = function getConversationForMessage(arg0, arg1) {
  const peekResult = navigation.peek(arg0);
  let conversationId;
  if (peekResult != null) {
    const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
    value = messageMetadataByMessageId.get(arg1);
    if (value != null) {
      conversationId = value.conversationId;
    }
  }
  if (conversationId == null) {
    conversationId = null;
  }
  return conversationId;
};
prototype["getMessageMetadata"] = function getMessageMetadata(arg0, arg1) {
  const peekResult = navigation.peek(arg0);
  value = undefined;
  if (peekResult != null) {
    const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
    value = messageMetadataByMessageId.get(arg1);
  }
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getMessage"] = function getMessage(arg0, arg1) {
  const messageMetadata = this.getMessageMetadata(arg0, arg1);
  let message;
  if (messageMetadata != null) {
    message = messageMetadata.message;
  }
  if (message == null) {
    message = null;
  }
  return message;
};
prototype["getConversation"] = function getConversation(arg0, arg1) {
  const peekResult = navigation.peek(arg0);
  let conversation;
  if (peekResult != null) {
    const conversationMetadataById = peekResult.conversationMetadataById;
    value = conversationMetadataById.get(arg1);
    if (value != null) {
      conversation = value.conversation;
    }
  }
  if (conversation == null) {
    conversation = null;
  }
  return conversation;
};
prototype["getEdgeMarker"] = function getEdgeMarker(id, after) {
  const peekResult = navigation.peek(id);
  if (null == peekResult) {
    return null;
  }
};
prototype["isPendingFetch"] = function isPendingFetch(id) {
  return map.has(id);
};
prototype["isListFetchPending"] = function isListFetchPending(arg0, arg1) {
  value = map.get(arg0);
  let flag;
  if (value != null) {
    flag = value.has(arg1);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["getConversationColor"] = function getConversationColor(arg0, arg1) {
  closure_0 = arg1;
  const peekResult = navigation.peek(arg0);
  if (null == peekResult) {
    return null;
  } else {
    const conversations = peekResult.conversations;
    const findIndexResult = conversations.findIndex((id) => id.id === closure_0);
    let tmp3 = null;
    if (-1 !== findIndexResult) {
      tmp3 = length[findIndexResult % length.length];
    }
    return tmp3;
  }
};
prototype["isFullyHydrated"] = function isFullyHydrated(arg0, arg1) {
  const peekResult = navigation.peek(arg0);
  let fullyHydrated;
  if (peekResult != null) {
    const conversationMetadataById = peekResult.conversationMetadataById;
    value = conversationMetadataById.get(arg1);
    if (value != null) {
      fullyHydrated = value.fullyHydrated;
    }
  }
  return true === fullyHydrated;
};
prototype["getHydratedMessages"] = function getHydratedMessages(arg0, arg1) {
  const peekResult = navigation.peek(arg0);
  let hydratedMessages;
  if (peekResult != null) {
    const conversationMetadataById = peekResult.conversationMetadataById;
    value = conversationMetadataById.get(arg1);
    if (value != null) {
      hydratedMessages = value.hydratedMessages;
    }
  }
  if (hydratedMessages == null) {
    hydratedMessages = null;
  }
  return hydratedMessages;
};
prototype["getHydratedMessageById"] = function getHydratedMessageById(arg0, arg1) {
  const peekResult = navigation.peek(arg0);
  let message;
  if (peekResult != null) {
    const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
    value = messageMetadataByMessageId.get(arg1);
    if (value != null) {
      message = value.message;
    }
  }
  if (message == null) {
    message = null;
  }
  return message;
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
prototype["getConversationFeedbackRating"] = function getConversationFeedbackRating(arg0, arg1) {
  const peekResult = navigation.peek(arg0);
  value = undefined;
  if (peekResult != null) {
    const recentFeedbackRatingsByConversationId = peekResult.recentFeedbackRatingsByConversationId;
    value = recentFeedbackRatingsByConversationId.get(arg1);
  }
  if (value == null) {
    value = null;
  }
  return value;
};
ChannelConversationsStore.displayName = "ChannelConversationsStore";
const channelConversationsStore = new ChannelConversationsStore(DispatcherDefault, {
  CONVERSATION_MESSAGES_FETCH_START: function handleConversationMessagesFetchStart(conversationId) {
    conversationId = conversationId.conversationId;
    if ("channel" !== conversationId.cacheType) {
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
  CONVERSATION_MESSAGES_FETCH_SUCCESS: function handleConversationMessagesFetchSuccess(cacheType) {
    ({ conversationId, messageReferences, fullyHydrated } = cacheType);
    if ("channel" !== cacheType.cacheType) {
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
      if (messageReferences === undefined) {
        messageReferences = [];
      }
      const peekResult = navigation.peek(tmp);
      c1 = peekResult;
      if (null != peekResult) {
        const conversationMetadataById = peekResult.conversationMetadataById;
        value2 = conversationMetadataById.get(conversationId);
        if (null != value2) {
          const obj2 = {
            meta: value2,
            messages: tmp2,
            fullyHydrated,
            messageReferences,
            upsertMessage(id) {
                    const messageMetadataByMessageId = _undefined.messageMetadataByMessageId;
                    value = messageMetadataByMessageId.get(id.id);
                    if (null != value) {
                      value.conversationId = conversationId;
                      value.message = id;
                    } else {
                      const messageMetadataByMessageId2 = _undefined.messageMetadataByMessageId;
                      const obj = { conversationId, message: id };
                      const result = messageMetadataByMessageId2.set(id.id, obj);
                    }
                  },
            upsertReference(id) {
                    const messageMetadataByMessageId = _undefined.messageMetadataByMessageId;
                    if (!messageMetadataByMessageId.has(id.id)) {
                      const messageMetadataByMessageId2 = _undefined.messageMetadataByMessageId;
                      const obj = { conversationId: null, message: id };
                      const result = messageMetadataByMessageId2.set(id.id, obj);
                    }
                  }
          };
          let result = ConversationMessageCacheUtils.applyHydratedMessages(obj2);
        }
      }
    }
  },
  CONVERSATION_MESSAGES_FETCH_FAILURE: function handleConversationMessagesFetchFailure(conversationId) {
    conversationId = conversationId.conversationId;
    if ("channel" !== conversationId.cacheType) {
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
  CHANNEL_CONVERSATIONS_FETCH_START: function handleFetchStart(isJump) {
    ({ channelId, requestKey } = isJump);
    if (isJump.isJump) {
      map.delete(channelId);
    }
    value = map.get(channelId);
    if (null == value) {
      const _Set = Set;
      const set = new Set();
      const result = map.set(channelId, set);
      value = set;
    }
    value.add(requestKey);
  },
  CHANNEL_CONVERSATIONS_FETCH_SUCCESS: function handleFetchSuccess(requestKey) {
    ({ channelId, rawConversations, direction, anchor, isJump, fullyHydrated, selectedConversationId } = requestKey);
    let set;
    if (removePendingListFetch(channelId, requestKey.requestKey)) {
      const mapped = rawConversations.map(set(7769).mapConversation);
      const found = mapped.filter(set(1379).isNotNullish);
      const peekResult = navigation.peek(channelId);
      if (isJump) {
        let tmp5 = null;
        if (null != selectedConversationId) {
          let conversation;
          if (peekResult != null) {
            let conversationMetadataById = peekResult.conversationMetadataById;
            value = conversationMetadataById.get(selectedConversationId);
            if (value != null) {
              conversation = value.conversation;
            }
          }
          tmp5 = conversation;
        }
        if (null != tmp5) {
          const items = [tmp5];
          let items1 = items;
        } else {
          items1 = [];
        }
      } else {
        let conversations;
        if (peekResult != null) {
          conversations = peekResult.conversations;
        }
        if (conversations == null) {
          conversations = [];
        }
        let timestamp1 = null;
        if (!isJump) {
          let reachedOldest;
          if (peekResult != null) {
            reachedOldest = peekResult.reachedOldest;
          }
          if (reachedOldest == null) {
            reachedOldest = null;
          }
          timestamp1 = reachedOldest;
        }
        let tmp11 = null;
        if (!isJump) {
          let reachedNewest;
          if (peekResult != null) {
            reachedNewest = peekResult.reachedNewest;
          }
          if (reachedNewest == null) {
            reachedNewest = null;
          }
          tmp11 = reachedNewest;
        }
        let tmp13 = globalThis;
        const _Set = Set;
        set = new Set(conversations.map((id) => id.id));
        let timestamp = tmp11;
        if (tmp18) {
          let tmp25 = tmp24;
          if ("before" === direction) {
            tmp25 = null == anchor;
          }
          if (tmp25) {
            const _Date3 = Date;
            timestamp = Date.now();
          }
          const arr5 = (function mergeConversations(conversations, found) {
            map = new Map();
            const iter = conversations[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              let result = map.set(nextResult.id, nextResult);
              continue;
            }
            const iter2 = found[Symbol.iterator]();
            const nextResult1 = iter2.next();
            while (iter2 !== undefined) {
              let result1 = map.set(nextResult1.id, nextResult1);
              continue;
            }
            const arr = Array.from(map.values());
            const sorted = arr.sort((startMessageId, startMessageId2) => closure_1_1(dependencyMap[7]).compare(startMessageId.startMessageId, startMessageId2.startMessageId));
            return arr;
          })(conversations, found);
          let tmp27 = timestamp;
          let tmp28 = timestamp1;
          let substr = arr5;
          if (arr5.length > closure_10) {
            if ("after" === direction) {
              substr = arr5.slice(arr5.length - closure_10);
              tmp27 = timestamp;
              tmp28 = null;
            } else if (tmp24) {
              substr = arr5.slice(0, closure_10);
              tmp27 = null;
              tmp28 = timestamp1;
            } else {
              const tmp30 = (function clampAnchorWindowStart(arr5, anchor) {
                closure_0 = anchor;
                if (null == anchor) {
                  return 0;
                } else {
                  length = arr5.findIndex((startMessageId) => SnowflakeUtilsDefault.compare(startMessageId.startMessageId, closure_0) >= 0);
                  if (-1 === length) {
                    length = arr5.length;
                  }
                  const _Math = Math;
                  const _Math2 = Math;
                  const _Math3 = Math;
                  return Math.max(0, Math.min(length - Math.floor(closure_10 / 2), arr5.length - closure_10));
                }
              })(arr5, anchor);
              let tmp31 = timestamp1;
              if (tmp30 > 0) {
                tmp31 = null;
              }
              let tmp32 = timestamp;
              if (tmp30 + closure_10 < arr5.length) {
                tmp32 = null;
              }
              substr = arr5.slice(tmp30, tmp30 + closure_10);
              tmp27 = tmp32;
              tmp28 = tmp31;
            }
          }
          let tmp33 = (function buildChannelData(channelId, substr, peekResult) {
            let guildId;
            if (peekResult != null) {
              guildId = peekResult.guildId;
            }
            if (guildId == null) {
              const first = substr[0];
              let guildId1;
              if (first != null) {
                guildId1 = first.guildId;
              }
              guildId = guildId1;
            }
            if (guildId == null) {
              channel = channel.getChannel(channelId);
              let guild_id;
              if (channel != null) {
                guild_id = channel.guild_id;
              }
              guildId = guild_id;
            }
            if (guildId == null) {
              guildId = null;
            }
            map = new Map();
            map1 = new Map();
            const iter = substr[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              let tmp9 = nextResult;
              value = undefined;
              if (peekResult != null) {
                let conversationMetadataById = peekResult.conversationMetadataById;
                value = conversationMetadataById.get(tmp9.id);
              }
              let tmp12 = value;
              let hydratedMessages;
              if (value != null) {
                hydratedMessages = value.hydratedMessages;
              }
              if (hydratedMessages == null) {
                hydratedMessages = null;
              }
              let tmp15 = null != hydratedMessages;
              let tmp14 = hydratedMessages;
              if (tmp15) {
                let fullyHydrated;
                if (tmp12 != null) {
                  fullyHydrated = tmp12.fullyHydrated;
                }
                tmp15 = fullyHydrated;
              }
              let obj = { conversation: tmp9, hydratedMessages: null, fullyHydrated: null };
              obj.hydratedMessages = tmp14;
              obj.fullyHydrated = tmp15;
              let result = map.set(tmp9.id, obj);
              let messageIds = tmp9.messageIds;
              for (const item10064 of messageIds) {
                let value3;
                if (arg2 != null) {
                  let messageMetadataByMessageId = arg2.messageMetadataByMessageId;
                  value3 = messageMetadataByMessageId.get(item10064);
                }
                let tmp26 = value3;
                let obj2 = { conversationId: null, message: null };
                obj2.conversationId = tmp9.id;
                let message1;
                if (value3 != null) {
                  message1 = value3.message;
                }
                if (message1 == null) {
                  message1 = null;
                }
                obj2.message = message1;
                let result1 = map1.set(item10064, obj2);
                let message_id;
                if (tmp26 != null) {
                  let message = tmp26.message;
                  if (message != null) {
                    let messageReference = message.messageReference;
                    if (messageReference != null) {
                      message_id = messageReference.message_id;
                    }
                  }
                }
                let tmp33 = message_id;
                if (null != message_id) {
                  let value4;
                  if (arg2 != null) {
                    let messageMetadataByMessageId2 = arg2.messageMetadataByMessageId;
                    value4 = messageMetadataByMessageId2.get(tmp33);
                  }
                  let message2;
                  let tmp36 = value4;
                  if (value4 != null) {
                    message2 = value4.message;
                  }
                  let hasItem = null == message2;
                  if (!hasItem) {
                    hasItem = map1.has(tmp33);
                  }
                  if (!hasItem) {
                    let result2 = map1.set(tmp33, tmp36);
                  }
                }
                continue;
              }
              continue;
            }
            const obj3 = { guildId, conversations: substr, conversationMetadataById: map, messageMetadataByMessageId: map1, recentFeedbackRatingsByConversationId: null, reachedOldest: null, reachedNewest: null };
            let prop;
            if (peekResult != null) {
              prop = peekResult.recentFeedbackRatingsByConversationId;
            }
            if (prop == null) {
              const obj4 = { max };
              prop = new privDefault(obj4);
            }
            obj3.recentFeedbackRatingsByConversationId = prop;
            let reachedOldest;
            if (peekResult != null) {
              reachedOldest = peekResult.reachedOldest;
            }
            if (reachedOldest == null) {
              reachedOldest = null;
            }
            obj3.reachedOldest = reachedOldest;
            let reachedNewest;
            if (peekResult != null) {
              reachedNewest = peekResult.reachedNewest;
            }
            if (reachedNewest == null) {
              reachedNewest = null;
            }
            obj3.reachedNewest = reachedNewest;
            return obj3;
          })(channelId, substr, peekResult);
          tmp33.reachedOldest = tmp28;
          tmp33.reachedNewest = tmp27;
          if (null != peekResult) {
            const _Object = tmp13.Object;
            _Object.assign(peekResult, tmp33);
          } else {
            let result = navigation.set(channelId, tmp33);
          }
          tmp13 = rawConversations;
          rawConversations[Symbol.iterator]();
        } else if ("before" === direction) {
          const _Date2 = Date;
          timestamp1 = Date.now();
          let timestamp2 = tmp11;
        } else {
          timestamp2 = tmp11;
          if ("after" === direction) {
            const _Date = Date;
            timestamp2 = Date.now();
          }
        }
        tmp18 = found.some((id) => !set.has(id.id)) || null == anchor;
      }
    } else {
      return false;
    }
  },
  CHANNEL_CONVERSATIONS_FETCH_FAILURE: function handleFetchFailure(arg0) {
    ({ channelId, requestKey } = arg0);
    value = map.get(channelId);
    const tmp = null == value || !value.has(requestKey);
    let flag = !tmp;
    if (!tmp) {
      value.delete(requestKey);
      flag = true;
      if (0 === value.size) {
        map.delete(channelId);
        flag = true;
      }
    }
    return flag;
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    let hasItem = null != channelId;
    if (hasItem) {
      hasItem = navigation.has(channelId);
    }
    if (hasItem) {
      value = navigation.get(channelId);
    }
    return false;
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    const id = channel.channel.id;
    let hasItem = navigation.has(id);
    navigation.del(id);
    if (!hasItem) {
      hasItem = map.delete(id);
    }
    return hasItem;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    if ("unavailable" in guild) {
      if (true === guild.unavailable) {
        return false;
      }
    }
    let flag2 = false;
    const keys = navigation.keys();
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let peekResult = navigation.peek(nextResult);
      let guildId;
      if (peekResult != null) {
        guildId = peekResult.guildId;
      }
      let tmp7 = guildId === guild.id;
      if (tmp7) {
        tmp7 = evictChannel(tmp3);
      }
      if (tmp7) {
        flag2 = true;
      }
      continue;
    }
    return flag2;
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessagesSuccess(channelId) {
    channelId = channelId.channelId;
    if (null != channelId.jump) {
      if (SelectedChannelStore.getChannelId() === channelId) {
        const peekResult = navigation.peek(channelId);
        let flag = null != peekResult;
        if (flag) {
          peekResult.reachedOldest = null;
          peekResult.reachedNewest = null;
          flag = true;
        }
        return flag;
      }
    }
    return false;
  },
  SET_CONVERSATION_FEEDBACK_RATING: function handleSetConversationFeedbackRating(channelId) {
    ({ conversationId, rating } = channelId);
    const peekResult = navigation.peek(channelId.channelId);
    let flag = null != peekResult;
    if (flag) {
      const recentFeedbackRatingsByConversationId = peekResult.recentFeedbackRatingsByConversationId;
      const result = recentFeedbackRatingsByConversationId.set(conversationId, rating);
      flag = true;
    }
    return flag;
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    message = message.message;
    ({ channel_id, id } = message);
    let tmp = null != channel_id && null != id;
    if (tmp) {
      const peekResult = navigation.peek(channel_id);
      let flag = false;
      if (null != peekResult) {
        const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
        value = messageMetadataByMessageId.get(id);
        let message1;
        if (value != null) {
          message1 = value.message;
        }
        flag = false;
        if (null != message1) {
          const updateMessageRecordResult = MessageRecordUtils.updateMessageRecord(value.message, message);
          let flag2 = null != updateMessageRecordResult;
          if (flag2) {
            value.message = updateMessageRecordResult;
            let tmp9 = null;
            if (null != value.conversationId) {
              const conversationMetadataById = peekResult.conversationMetadataById;
              value2 = conversationMetadataById.get(value.conversationId);
              if (value2 == null) {
                value2 = null;
              }
              tmp9 = value2;
            }
            const result = ConversationMessageCacheUtils.replaceHydratedMessage(tmp9, id, updateMessageRecordResult);
            flag2 = true;
            const tmp6Result = ConversationMessageCacheUtils;
          }
          flag = flag2;
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
    const peekResult = navigation.peek(messageId.channelId);
    let flag = false;
    if (null != peekResult) {
      const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
      value = messageMetadataByMessageId.get(messageId);
      let message1;
      if (value != null) {
        message1 = value.message;
      }
      flag = false;
      if (null != message1) {
        const message = value.message;
        const addReactionBatchResult = message.addReactionBatch(messageId.reactions, AuthenticationStore.getId());
        let flag2 = null != addReactionBatchResult;
        if (flag2) {
          value.message = addReactionBatchResult;
          let tmp8 = null;
          if (null != value.conversationId) {
            const conversationMetadataById = peekResult.conversationMetadataById;
            value2 = conversationMetadataById.get(value.conversationId);
            if (value2 == null) {
              value2 = null;
            }
            tmp8 = value2;
          }
          const result = ConversationMessageCacheUtils.replaceHydratedMessage(tmp8, messageId, addReactionBatchResult);
          flag2 = true;
        }
        flag = flag2;
      }
    }
    return flag;
  },
  MESSAGE_REACTION_REMOVE_ALL: function handleRemoveAllReactions(messageId) {
    messageId = messageId.messageId;
    const peekResult = navigation.peek(messageId.channelId);
    let flag = false;
    if (null != peekResult) {
      const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
      value = messageMetadataByMessageId.get(messageId);
      let message1;
      if (value != null) {
        message1 = value.message;
      }
      flag = false;
      if (null != message1) {
        const message = value.message;
        const result = message.set("reactions", []);
        let flag2 = null != result;
        if (flag2) {
          value.message = result;
          let tmp7 = null;
          if (null != value.conversationId) {
            const conversationMetadataById = peekResult.conversationMetadataById;
            value2 = conversationMetadataById.get(value.conversationId);
            if (value2 == null) {
              value2 = null;
            }
            tmp7 = value2;
          }
          const result1 = ConversationMessageCacheUtils.replaceHydratedMessage(tmp7, messageId, result);
          flag2 = true;
        }
        flag = flag2;
      }
    }
    return flag;
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function handleRemoveEmojiReactions(messageId) {
    messageId = messageId.messageId;
    const peekResult = navigation.peek(messageId.channelId);
    let flag = false;
    if (null != peekResult) {
      const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
      value = messageMetadataByMessageId.get(messageId);
      let message1;
      if (value != null) {
        message1 = value.message;
      }
      flag = false;
      if (null != message1) {
        const message = value.message;
        const result = message.removeReactionsForEmoji(messageId.emoji);
        let flag2 = null != result;
        if (flag2) {
          value.message = result;
          let tmp7 = null;
          if (null != value.conversationId) {
            const conversationMetadataById = peekResult.conversationMetadataById;
            value2 = conversationMetadataById.get(value.conversationId);
            if (value2 == null) {
              value2 = null;
            }
            tmp7 = value2;
          }
          const result1 = ConversationMessageCacheUtils.replaceHydratedMessage(tmp7, messageId, result);
          flag2 = true;
        }
        flag = flag2;
      }
    }
    return flag;
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    id = id.id;
    const peekResult = navigation.peek(id.channelId);
    let flag = false;
    if (null != peekResult) {
      const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
      value = messageMetadataByMessageId.get(id);
      let tmp3 = null;
      if (null != value) {
        let tmp4 = null;
        if (null != value.conversationId) {
          const conversationMetadataById = peekResult.conversationMetadataById;
          value2 = conversationMetadataById.get(value.conversationId);
          if (value2 == null) {
            value2 = null;
          }
          tmp4 = value2;
        }
        tmp3 = tmp4;
      }
      const result = ConversationMessageCacheUtils.removeHydratedMessage(tmp3, id);
      const messageMetadataByMessageId2 = peekResult.messageMetadataByMessageId;
      flag = messageMetadataByMessageId2.delete(id);
    }
    return flag;
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(arg0) {
    let flag = false;
    while (tmp2 !== undefined) {
      if (removeMessage(tmp, tmp3)) {
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
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conversations/ChannelConversationsStore.tsx");

export default channelConversationsStore;