// discord_app/modules/conversations/ConversationsStore.tsx
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import handleConnectionOpen from "handleConnectionOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import initialize from "initialize";
import CONVERSATION_COLORS from "CONVERSATION_COLORS";
import { Store } from "initialize";
import { createMinimalMessageRecord } from "../messages/MessageRecordUtils.tsx";

let MAX_CHANNELS_WITH_CONVERSATIONS;
let c10;
let c9;
let unpackModuleId;
const require = arg1;
function removePendingListFetch(channelId, requestKey) {
  const value = map.get(channelId);
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
function buildModerationLabel(arr) {
  const first = arr[0];
  const mapped = arr.map((category) => {
    let reason = category.category;
    if (reason == null) {
      reason = category.reason;
    }
    return reason;
  });
  const found = mapped.filter((arg0) => null != arg0);
  let severity;
  if (first != null) {
    severity = first.severity;
  }
  if (severity == null) {
    severity = null;
  }
  let confidence;
  if (first != null) {
    confidence = first.confidence;
  }
  if (confidence == null) {
    confidence = null;
  }
  let combined = null;
  if (null != severity) {
    const _HermesInternal = HermesInternal;
    combined = "" + severity + " severity";
  }
  const items = [combined, ];
  let combined1 = null;
  if (null != confidence) {
    const _HermesInternal2 = HermesInternal;
    combined1 = "" + confidence + " confidence";
  }
  items[1] = combined1;
  const found1 = items.filter(Boolean);
  const joined = found1.join(", ");
  let joined1 = null;
  if (found.length > 0) {
    joined1 = found.join(", ");
  }
  const items1 = [joined1, ];
  let tmp9 = null;
  if (joined.length > 0) {
    tmp9 = joined;
  }
  items1[1] = tmp9;
  const found2 = items1.filter(Boolean);
  const joined2 = found2.join(" \u00B7 ");
  let str5 = "Moderation Failed";
  if (joined2.length > 0) {
    str5 = joined2;
  }
  return str5;
}
function processHydratedMessages(channelId, conversationId, messages, fullyHydrated, messageReferences) {
  let items = messageReferences;
  if (messageReferences === undefined) {
    items = [];
  }
  const peekResult = tmp3.peek(channelId);
  if (null != peekResult) {
    const conversationMetadataById = peekResult.conversationMetadataById;
    let value = conversationMetadataById.get(conversationId);
    if (null != value) {
      if (fullyHydrated) {
        const items1 = [];
        const tmp4 = messages[Symbol.iterator]();
        while (tmp4 !== undefined) {
          let tmp8 = require;
          let tmp9 = dependencyMap;
          let obj = createMinimalMessageRecord;
          let messageRecord = obj.createMessageRecord(tmp6);
          let tmp11 = messageRecord;
          let arr = items1.push(messageRecord);
          let messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
          value = messageMetadataByMessageId.get(messageRecord.id);
          let tmp14 = value;
          if (null != value) {
            let tmp17 = value;
            tmp14.conversationId = conversationId;
            let tmp18 = messageRecord;
            tmp14.message = tmp11;
          } else {
            let messageMetadataByMessageId2 = peekResult.messageMetadataByMessageId;
            let tmp15 = messageRecord;
            obj = { conversationId: null, moderationLabel: null, message: null };
            obj[0] = conversationId;
            obj[2] = tmp11;
            let result = messageMetadataByMessageId2.set(tmp11.id, obj);
          }
          continue;
        }
        value.hydratedMessages = items1;
        value.fullyHydrated = fullyHydrated;
        for (const item10044 of items) {
          let tmp21 = item10044;
          let messageMetadataByMessageId3 = peekResult.messageMetadataByMessageId;
          if (null == messageMetadataByMessageId3.get(item10044.id)) {
            let messageMetadataByMessageId4 = peekResult.messageMetadataByMessageId;
            let tmp22 = item10044;
            obj = { conversationId: null, moderationLabel: null, message: null };
            let tmp23 = require;
            let tmp24 = dependencyMap;
            let obj4 = createMinimalMessageRecord;
            obj[2] = obj4.createMessageRecord(tmp21);
            let result1 = messageMetadataByMessageId4.set(tmp21.id, obj);
          }
          continue;
        }
        tmp3 = messages;
      }
    }
  }
}
function handleReaction(channelId) {
  let emoji;
  let messageId;
  let reactionType;
  let type;
  let userId;
  ({ messageId, emoji, reactionType } = channelId);
  ({ type, userId } = channelId);
  const peekResult = tmp3.peek(channelId.channelId);
  if (null == peekResult) {
    return false;
  } else {
    const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
    let value = messageMetadataByMessageId.get(messageId);
    let message;
    if (value != null) {
      message = value.message;
    }
    if (null == message) {
      return false;
    } else {
      if (obj2.shouldApplyReaction(channelId)) {
        const tmp4 = store.getId() === userId;
        if ("MESSAGE_REACTION_ADD" === type) {
          const message2 = value.message;
          const obj = { colors: null, reactionType: null };
          obj[0] = channelId.colors;
          obj[1] = reactionType;
          let addReactionResult = message2.addReaction(emoji, tmp4, obj);
        } else {
          message = value.message;
          addReactionResult = message.removeReaction(emoji, tmp4, reactionType);
        }
        value.message = addReactionResult;
        value = null;
        if (null != value.conversationId) {
          const conversationMetadataById = peekResult.conversationMetadataById;
          value = conversationMetadataById.get(value.conversationId);
        }
        let hydratedMessages;
        if (value != null) {
          hydratedMessages = value.hydratedMessages;
        }
        if (null != hydratedMessages) {
          hydratedMessages = value.hydratedMessages;
          const findIndexResult = hydratedMessages.findIndex((id) => id.id === closure_0);
          if (-1 !== findIndexResult) {
            const hydratedMessages1 = value.hydratedMessages;
            const substr = hydratedMessages1.slice();
            substr[findIndexResult] = addReactionResult;
            value.hydratedMessages = substr;
          }
        }
        return true;
      } else {
        return false;
      }
      obj2 = messageId(4032);
    }
  }
}
function handleRelationshipUpdate() {
  let c0 = false;
  let item = tmp3.forEach((messageMetadataByMessageId) => {
    let closure_0 = messageMetadataByMessageId;
    const prop = messageMetadataByMessageId.messageMetadataByMessageId;
    const item = prop.forEach((message) => {
      if (null != message.message) {
        const isBlockedForMessageResult = outer2_5.isBlockedForMessage(message.message);
        const isIgnoredForMessageResult = outer2_5.isIgnoredForMessage(message.message);
        if (message.message.blocked !== isBlockedForMessageResult) {
          let messageMetadataByMessageId = true;
          message = message.message;
          const result = message.set("blocked", isBlockedForMessageResult);
          const result1 = result.set("ignored", isIgnoredForMessageResult);
          messageMetadataByMessageId = arg1;
          message.message = result1;
          let value = null;
          if (null != message.conversationId) {
            const conversationMetadataById = messageMetadataByMessageId.conversationMetadataById;
            value = conversationMetadataById.get(message.conversationId);
          }
          let hydratedMessages;
          if (value != null) {
            hydratedMessages = value.hydratedMessages;
          }
          if (null != hydratedMessages) {
            hydratedMessages = value.hydratedMessages;
            const findIndexResult = hydratedMessages.findIndex((id) => id.id === closure_0);
            if (-1 !== findIndexResult) {
              const hydratedMessages1 = value.hydratedMessages;
              const substr = hydratedMessages1.slice();
              substr[findIndexResult] = result1;
              value.hydratedMessages = substr;
            }
          }
        }
      }
    });
  });
  return c0;
}
function removeHydratedMessage(arg0, arg1) {
  let closure_0 = arg1;
  const peekResult = tmp3.peek(arg0);
  if (null == peekResult) {
    return false;
  } else {
    const messageMetadataByMessageId2 = peekResult.messageMetadataByMessageId;
    let value = messageMetadataByMessageId2.get(arg1);
    if (null != value) {
      value = null;
      if (null != value.conversationId) {
        const conversationMetadataById = peekResult.conversationMetadataById;
        value = conversationMetadataById.get(value.conversationId);
      }
      let hydratedMessages;
      if (value != null) {
        hydratedMessages = value.hydratedMessages;
      }
      if (null != hydratedMessages) {
        const hydratedMessages1 = value.hydratedMessages;
        value.hydratedMessages = hydratedMessages1.filter((id) => id.id !== id);
      }
    }
    const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
    return messageMetadataByMessageId.delete(arg1);
  }
}
function evictChannel(arg0) {
  let hasItem = tmp3.has(arg0);
  tmp3.del(arg0);
  if (!hasItem) {
    hasItem = map.delete(arg0);
  }
  return hasItem;
}
({ CONVERSATION_COLORS: c9, CONVERSATION_FEEDBACK_RATINGS_CACHE_MAX: c10, MAX_CONVERSATIONS_PER_CHANNEL: unpackModuleId, MAX_CHANNELS_WITH_CONVERSATIONS } = CONVERSATION_COLORS);
let obj = {
  max: MAX_CHANNELS_WITH_CONVERSATIONS,
  dispose: function cleanupChannelSideState(arg0) {
    return map.delete(arg0);
  }
};
let closure_12 = new require("priv")(obj);
let map = new Map();
let map1 = new Map();
class ConversationsStore extends Store {
}
const prototype = ConversationsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(fetchFingerprint, ensureGuildLoaded, initialize, markAllUserIdListsStale, handleConnectionOpen, mergeGuildAvatar);
};
prototype["hasChannelData"] = function hasChannelData(id) {
  return tmp3.has(id);
};
prototype["getChannelConversations"] = function getChannelConversations(_handleEndReached) {
  const peekResult = tmp3.peek(_handleEndReached);
  let conversations = null;
  if (null != peekResult) {
    conversations = peekResult.conversations;
  }
  return conversations;
};
prototype["getConversationForMessage"] = function getConversationForMessage(arg0, arg1) {
  const peekResult = tmp3.peek(arg0);
  let conversationId;
  if (peekResult != null) {
    const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
    const value = messageMetadataByMessageId.get(arg1);
    if (value != null) {
      conversationId = value.conversationId;
    }
    tmp3 = arg1;
  }
  if (conversationId == null) {
    conversationId = null;
  }
  return conversationId;
};
prototype["getMessageMetadata"] = function getMessageMetadata(arg0, arg1) {
  const peekResult = tmp3.peek(arg0);
  let value;
  if (peekResult != null) {
    const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
    value = messageMetadataByMessageId.get(arg1);
    tmp3 = arg1;
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
prototype["getConversationMetadata"] = function getConversationMetadata(channelId, conversationId) {
  const peekResult = tmp3.peek(channelId);
  let value;
  if (peekResult != null) {
    const conversationMetadataById = peekResult.conversationMetadataById;
    value = conversationMetadataById.get(conversationId);
    tmp3 = conversationId;
  }
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getEdgeMarker"] = function getEdgeMarker(_handleEndReached, after) {
  const peekResult = tmp3.peek(_handleEndReached);
  if (null == peekResult) {
    return null;
  } else {
    tmp3 = "before" === after ? peekResult.reachedOldest : peekResult.reachedNewest;
  }
};
prototype["isPendingFetch"] = function isPendingFetch(_handleEndReached) {
  return map.has(_handleEndReached);
};
prototype["isListFetchPending"] = function isListFetchPending(c0, c8) {
  const value = map.get(c0);
  let flag;
  if (value != null) {
    flag = value.has(c8);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["getSelectedConversationId"] = function getSelectedConversationId(arg0) {
  const peekResult = tmp3.peek(arg0);
  let prop;
  if (peekResult != null) {
    prop = peekResult.selectedConversationId;
  }
  if (prop == null) {
    prop = null;
  }
  return prop;
};
prototype["getSelectedConversation"] = function getSelectedConversation(arg0) {
  const peekResult = tmp3.peek(arg0);
  let prop;
  if (peekResult != null) {
    prop = peekResult.selectedConversationId;
  }
  tmp3 = null;
  if (null != prop) {
    let conversation;
    if (peekResult != null) {
      const conversationMetadataById = peekResult.conversationMetadataById;
      const value = conversationMetadataById.get(prop);
      if (value != null) {
        conversation = value.conversation;
      }
    }
    if (conversation == null) {
      conversation = null;
    }
    tmp3 = conversation;
  }
  return tmp3;
};
prototype["getConversationColor"] = function getConversationColor(arg0, arg1) {
  const peekResult = tmp3.peek(arg0);
  let tmp2 = null;
  if (null != peekResult) {
    const conversationMetadataById = peekResult.conversationMetadataById;
    const value = conversationMetadataById.get(arg1);
    let color;
    if (value != null) {
      color = value.color;
    }
    if (color == null) {
      color = null;
    }
    tmp2 = color;
    tmp3 = arg1;
  }
  return tmp2;
};
prototype["getHydratedMessages"] = function getHydratedMessages(channelId, conversationId) {
  const peekResult = tmp3.peek(channelId);
  let hydratedMessages;
  if (peekResult != null) {
    const conversationMetadataById = peekResult.conversationMetadataById;
    const value = conversationMetadataById.get(conversationId);
    if (value != null) {
      hydratedMessages = value.hydratedMessages;
    }
    tmp3 = conversationId;
  }
  if (hydratedMessages == null) {
    hydratedMessages = null;
  }
  return hydratedMessages;
};
prototype["getHydratedMessageById"] = function getHydratedMessageById(arg0, arg1) {
  const peekResult = tmp3.peek(arg0);
  let message;
  if (peekResult != null) {
    const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
    const value = messageMetadataByMessageId.get(arg1);
    if (value != null) {
      message = value.message;
    }
    tmp3 = arg1;
  }
  if (message == null) {
    message = null;
  }
  return message;
};
prototype["isConversationFetchPending"] = function isConversationFetchPending(arg0, arg1) {
  const value = map1.get(arg0);
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
  const peekResult = tmp3.peek(arg0);
  let value;
  if (peekResult != null) {
    const recentFeedbackRatingsByConversationId = peekResult.recentFeedbackRatingsByConversationId;
    value = recentFeedbackRatingsByConversationId.get(arg1);
    tmp3 = arg1;
  }
  if (value == null) {
    value = null;
  }
  return value;
};
ConversationsStore.displayName = "ConversationsStore";
obj = {
  CONVERSATION_FETCH_START: function handleConversationFetchStart(conversationId) {
    conversationId = conversationId.conversationId;
    let str = "preview";
    if (conversationId.full) {
      str = "full";
    }
    const value = map1.get(conversationId);
    if (null != value) {
      value.add(str);
    } else {
      const _Set = Set;
      const items = [str];
      const set = new Set(items);
      const result = map1.set(conversationId, set);
    }
  },
  CONVERSATION_FETCH_SUCCESS: function handleConversationFetchSuccess(arg0) {
    let channelId;
    let conversationId;
    let fullyHydrated;
    let messageReferences;
    let messages;
    ({ channelId, conversationId, messages, messageReferences, fullyHydrated } = arg0);
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
    processHydratedMessages(channelId, conversationId, messages, fullyHydrated, messageReferences);
  },
  CONVERSATION_FETCH_FAILURE: function handleConversationFetchFailure(conversationId) {
    conversationId = conversationId.conversationId;
    let str = "preview";
    if (conversationId.full) {
      str = "full";
    }
    const value = map1.get(conversationId);
    if (null != value) {
      value.delete(str);
      if (0 === value.size) {
        map1.delete(conversationId);
      }
    }
  },
  CONVERSATIONS_FETCH_START: function handleFetchStart(isJump) {
    let channelId;
    let requestKey;
    ({ channelId, requestKey } = isJump);
    if (isJump.isJump) {
      map.delete(channelId);
    }
    let value = map.get(channelId);
    if (null == value) {
      const _Set = Set;
      const set = new Set();
      const result = map.set(channelId, set);
      value = set;
    }
    value.add(requestKey);
  },
  CONVERSATIONS_FETCH_SUCCESS: function handleFetchSuccess(requestKey) {
    let anchor;
    let channelId;
    let direction;
    let fullyHydrated;
    let isJump;
    let rawConversations;
    ({ channelId, rawConversations, direction, anchor, isJump, fullyHydrated } = requestKey);
    let set;
    if (removePendingListFetch(channelId, requestKey.requestKey)) {
      const mapped = rawConversations.map(set(5017).mapConversation);
      const found = mapped.filter(set(1370).isNotNullish);
      const peekResult = tmp3.peek(channelId);
      if (isJump) {
        let prop;
        if (!tmp5) {
          prop = peekResult.selectedConversationId;
        }
        let tmp7 = null;
        if (null != prop) {
          let conversation;
          if (peekResult != null) {
            let conversationMetadataById = peekResult.conversationMetadataById;
            let value = conversationMetadataById.get(prop);
            if (value != null) {
              conversation = value.conversation;
            }
          }
          tmp7 = conversation;
        }
        if (null != tmp7) {
          let items = [tmp7];
          let items1 = items;
        } else {
          items1 = [];
        }
      } else {
        let conversations;
        if (!tmp5) {
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
        let tmp13 = null;
        if (!isJump) {
          let reachedNewest;
          if (peekResult != null) {
            reachedNewest = peekResult.reachedNewest;
          }
          if (reachedNewest == null) {
            reachedNewest = null;
          }
          tmp13 = reachedNewest;
        }
        let tmp15 = globalThis;
        const _Set = Set;
        set = new Set(conversations.map((id) => id.id));
        let timestamp = tmp13;
        if (tmp20) {
          let tmp27 = tmp26;
          if ("before" === direction) {
            tmp27 = null == anchor;
          }
          if (tmp27) {
            const _Date3 = Date;
            timestamp = Date.now();
          }
          const arr5 = (function mergeConversations(conversations, found) {
            const map = new Map();
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
            const sorted = arr.sort((startMessageId, startMessageId2) => callback(table[8]).compare(startMessageId.startMessageId, startMessageId2.startMessageId));
            return arr;
          })(conversations, found);
          let tmp29 = timestamp;
          let tmp30 = timestamp1;
          let substr = arr5;
          if (arr5.length > closure_11) {
            if ("after" === direction) {
              substr = arr5.slice(arr5.length - tmp28);
              tmp29 = timestamp;
              tmp30 = null;
            } else if (tmp26) {
              substr = arr5.slice(0, tmp28);
              tmp29 = null;
              tmp30 = timestamp1;
            } else {
              let tmp32 = (function clampAnchorWindowStart(arr5, anchor) {
                let closure_0 = anchor;
                if (null == anchor) {
                  return 0;
                } else {
                  let length = arr5.findIndex((startMessageId) => outer1_1(outer1_2[8]).compare(startMessageId.startMessageId, closure_0) >= 0);
                  if (-1 === length) {
                    length = arr5.length;
                  }
                  const _Math = Math;
                  const _Math2 = Math;
                  const _Math3 = Math;
                  return Math.max(0, Math.min(length - Math.floor(closure_11 / 2), arr5.length - closure_11));
                }
              })(arr5, anchor);
              let tmp33 = timestamp1;
              if (tmp32 > 0) {
                tmp33 = null;
              }
              let tmp34 = timestamp;
              if (tmp32 + tmp28 < arr5.length) {
                tmp34 = null;
              }
              substr = arr5.slice(tmp32, tmp32 + tmp28);
              tmp29 = tmp34;
              tmp30 = tmp33;
            }
          }
          let tmp35 = (function buildChannelData(channelId, substr, peekResult) {
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
            const map = new Map();
            const map1 = new Map();
            let num;
            if (peekResult != null) {
              num = peekResult.colorIndex;
            }
            if (num == null) {
              num = 0;
            }
            let sum = num;
            const iter = substr[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              let tmp10 = nextResult;
              let value;
              if (peekResult != null) {
                let conversationMetadataById = peekResult.conversationMetadataById;
                let tmp12 = nextResult;
                value = conversationMetadataById.get(tmp10.id);
              }
              let tmp13 = value;
              let color;
              if (value != null) {
                color = value.color;
              }
              if (color == null) {
                let tmp15 = length;
                let tmp16 = sum;
                let tmp17 = +sum;
                sum = tmp17 + 1;
                color = length[tmp17 % length.length];
              }
              let tmp19 = value;
              let hydratedMessages;
              let tmp18 = color;
              if (tmp13 != null) {
                hydratedMessages = tmp13.hydratedMessages;
              }
              if (hydratedMessages == null) {
                hydratedMessages = null;
              }
              let tmp22 = null != hydratedMessages;
              let tmp21 = hydratedMessages;
              if (tmp22) {
                let tmp23 = value;
                let fullyHydrated;
                if (tmp13 != null) {
                  fullyHydrated = tmp13.fullyHydrated;
                }
                tmp22 = fullyHydrated;
              }
              let tmp25 = nextResult;
              let obj = { conversation: null, color: null, hydratedMessages: null, fullyHydrated: null };
              obj[0] = tmp10;
              let tmp26 = color;
              obj[1] = tmp18;
              let tmp27 = hydratedMessages;
              obj[2] = tmp21;
              obj[3] = tmp22;
              let result = map.set(tmp10.id, obj);
              let map2 = null;
              if (null != tmp10.moderation) {
                let _Map = Map;
                let tmp87 = new.target;
                let tmp88 = new.target;
                map2 = new Map();
                let tmp89 = nextResult;
                let flaggedMessageDetails = tmp10.moderation.flaggedMessageDetails;
                let tmp90 = flaggedMessageDetails;
                let tmp30 = flaggedMessageDetails;
                for (const item10083 of flaggedMessageDetails) {
                  let tmp31 = item10083;
                  let tmp32 = map2;
                  value = map2.get(item10083.messageId);
                  let arr = value;
                  if (null != value) {
                    let tmp37 = value;
                    let tmp38 = item10083;
                    arr = arr.push(tmp31);
                  } else {
                    let tmp34 = map2;
                    let tmp35 = item10083;
                    let items = [tmp31];
                    let result1 = map2.set(tmp31.messageId, items);
                  }
                  continue;
                }
              }
              let tmp40 = nextResult;
              let messageIds = tmp10.messageIds;
              let tmp41 = messageIds;
              let tmp42 = messageIds;
              for (const item10107 of messageIds) {
                let tmp43 = item10107;
                let value1;
                if (arg2 != null) {
                  let messageMetadataByMessageId = arg2.messageMetadataByMessageId;
                  let tmp45 = item10107;
                  value1 = messageMetadataByMessageId.get(tmp43);
                }
                let tmp46 = value1;
                let tmp54Result = null;
                let moderationLabel;
                if (value1 != null) {
                  moderationLabel = value1.moderationLabel;
                }
                let hasItem = null == moderationLabel;
                if (hasItem) {
                  let tmp50 = nextResult;
                  hasItem = null != tmp10.moderation;
                }
                if (hasItem) {
                  let tmp51 = nextResult;
                  let flaggedMessageIds = tmp10.moderation.flaggedMessageIds;
                  let tmp52 = item10107;
                  hasItem = flaggedMessageIds.includes(tmp43);
                }
                if (hasItem) {
                  let tmp53 = map2;
                  hasItem = null != map2;
                }
                if (hasItem) {
                  let tmp55 = map2;
                  let tmp56 = item10107;
                  let tmp54 = closure_16;
                  let value2 = map2.get(tmp43);
                  if (value2 == null) {
                    value2 = [];
                  }
                  tmp54Result = tmp54(value2);
                }
                let tmp57 = item10107;
                obj = { conversationId: null, moderationLabel: null, message: null };
                let tmp58 = nextResult;
                obj[0] = tmp10.id;
                let tmp59 = value1;
                let moderationLabel1;
                if (tmp46 != null) {
                  moderationLabel1 = tmp46.moderationLabel;
                }
                if (moderationLabel1 == null) {
                  moderationLabel1 = tmp54Result;
                }
                obj[1] = moderationLabel1;
                let tmp61 = value1;
                let message;
                if (tmp46 != null) {
                  message = tmp46.message;
                }
                if (message == null) {
                  message = null;
                }
                obj[2] = message;
                let result2 = map1.set(tmp43, obj);
                let tmp64 = value1;
                let message_id;
                if (tmp46 != null) {
                  message = tmp46.message;
                  if (message != null) {
                    let messageReference = message.messageReference;
                    if (messageReference != null) {
                      message_id = messageReference.message_id;
                    }
                  }
                }
                let tmp66 = message_id;
                if (null != message_id) {
                  let value3;
                  if (arg2 != null) {
                    let messageMetadataByMessageId2 = arg2.messageMetadataByMessageId;
                    let tmp68 = message_id;
                    value3 = messageMetadataByMessageId2.get(tmp66);
                  }
                  let message1;
                  let tmp69 = value3;
                  if (value3 != null) {
                    message1 = value3.message;
                  }
                  let hasItem1 = null == message1;
                  if (!hasItem1) {
                    let tmp72 = message_id;
                    hasItem1 = map1.has(tmp66);
                  }
                  if (!hasItem1) {
                    let tmp73 = message_id;
                    let tmp74 = value3;
                    let result3 = map1.set(tmp66, tmp69);
                  }
                }
                continue;
              }
              continue;
            }
            let prop;
            if (peekResult != null) {
              prop = peekResult.recentFeedbackRatingsByConversationId;
            }
            if (prop == null) {
              const obj1 = { max: null };
              obj1[0] = closure_10;
              prop = new callback(table[7])(obj1);
            }
            let prop1;
            if (peekResult != null) {
              prop1 = peekResult.selectedConversationId;
            }
            if (prop1 == null) {
              prop1 = null;
            }
            let tmp84 = null;
            if (null != prop1) {
              tmp84 = null;
              if (substr.some((id) => id.id === prop1)) {
                tmp84 = prop1;
              }
            }
            const obj2 = { guildId, conversations: substr, conversationMetadataById: map, messageMetadataByMessageId: map1, recentFeedbackRatingsByConversationId: prop, reachedOldest: null, reachedNewest: null, selectedConversationId: null, colorIndex: null };
            let reachedOldest;
            if (peekResult != null) {
              reachedOldest = peekResult.reachedOldest;
            }
            if (reachedOldest == null) {
              reachedOldest = null;
            }
            obj2[5] = reachedOldest;
            let reachedNewest;
            if (peekResult != null) {
              reachedNewest = peekResult.reachedNewest;
            }
            if (reachedNewest == null) {
              reachedNewest = null;
            }
            obj2[6] = reachedNewest;
            obj2[7] = tmp84;
            obj2[8] = sum;
            return obj2;
          })(channelId, substr, peekResult);
          tmp35.reachedOldest = tmp30;
          tmp35.reachedNewest = tmp29;
          if (null != peekResult) {
            const _Object = tmp15.Object;
            _Object.assign(peekResult, tmp35);
          } else {
            let result = obj2.set(channelId, tmp35);
          }
          tmp15 = rawConversations;
          rawConversations[Symbol.iterator]();
        } else if ("before" === direction) {
          const _Date2 = Date;
          timestamp1 = Date.now();
          let timestamp2 = tmp13;
        } else {
          timestamp2 = tmp13;
          if ("after" === direction) {
            const _Date = Date;
            timestamp2 = Date.now();
          }
        }
        tmp20 = found.some((id) => !set.has(id.id)) || null == anchor;
      }
      obj2 = tmp3;
    } else {
      return false;
    }
  },
  CONVERSATIONS_FETCH_FAILURE: function handleFetchFailure(arg0) {
    let channelId;
    let requestKey;
    ({ channelId, requestKey } = arg0);
    const value = map.get(channelId);
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
      hasItem = tmp3.has(channelId);
    }
    if (hasItem) {
      const value = tmp3.get(channelId);
    }
    return false;
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    const id = channel.channel.id;
    let hasItem = tmp3.has(id);
    tmp3.del(id);
    if (!hasItem) {
      hasItem = map.delete(id);
    }
    return hasItem;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    let tmp3;
    guild = guild.guild;
    if ("unavailable" in guild) {
      if (true === guild.unavailable) {
        return false;
      }
    }
    let flag2 = false;
    const keys = tmp3.keys();
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = tmp3;
      tmp3 = nextResult;
      let peekResult = tmp3.peek(nextResult);
      let guildId;
      if (peekResult != null) {
        guildId = peekResult.guildId;
      }
      let tmp7 = guildId === guild.id;
      if (tmp7) {
        let tmp8 = evictChannel;
        let tmp9 = nextResult;
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
      if (channelId.getChannelId() === channelId) {
        const peekResult = tmp3.peek(channelId);
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
  SET_SELECTED_CONVERSATION: function handleSetSelectedConversation(channelId) {
    channelId = channelId.channelId;
    if (null == channelId) {
      return false;
    } else {
      const peekResult = tmp3.peek(channelId);
      let flag = null != peekResult;
      if (flag) {
        peekResult.selectedConversationId = tmp;
        flag = true;
      }
      return flag;
    }
  },
  CLEAR_CONVERSATION_SELECTION: function handleClearConversationSelection(conversationId) {
    conversationId = conversationId.conversationId;
    const peekResult = tmp3.peek(conversationId.channelId);
    if (null == peekResult) {
      return false;
    } else {
      const selectedConversationId = peekResult.selectedConversationId;
      let flag = null != selectedConversationId;
      if (flag) {
        flag = null == conversationId || selectedConversationId === conversationId;
        const tmp2 = null == conversationId || selectedConversationId === conversationId;
      }
      if (flag) {
        peekResult.selectedConversationId = null;
        flag = true;
      }
      return flag;
    }
  },
  SET_CONVERSATION_FEEDBACK_RATING: function handleSetConversationFeedbackRating(channelId) {
    let conversationId;
    let rating;
    ({ conversationId, rating } = channelId);
    const peekResult = tmp3.peek(channelId.channelId);
    let flag = null != peekResult;
    if (flag) {
      const recentFeedbackRatingsByConversationId = peekResult.recentFeedbackRatingsByConversationId;
      const result = recentFeedbackRatingsByConversationId.set(conversationId, rating);
      flag = true;
    }
    return flag;
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    let channel_id;
    let id;
    message = message.message;
    ({ channel_id, id } = message);
    if (null != channel_id) {
      if (null != id) {
        const peekResult = tmp3.peek(channel_id);
        if (null == peekResult) {
          return false;
        } else {
          const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
          let value = messageMetadataByMessageId.get(id);
          message = undefined;
          if (value != null) {
            message = value.message;
          }
          let flag = null != message;
          if (flag) {
            const updateMessageRecordResult = id(4803).updateMessageRecord(value.message, message);
            value.message = updateMessageRecordResult;
            value = null;
            if (null != value.conversationId) {
              const conversationMetadataById = peekResult.conversationMetadataById;
              value = conversationMetadataById.get(value.conversationId);
            }
            let hydratedMessages;
            if (value != null) {
              hydratedMessages = value.hydratedMessages;
            }
            flag = true;
            if (null != hydratedMessages) {
              hydratedMessages = value.hydratedMessages;
              const findIndexResult = hydratedMessages.findIndex((id) => id.id === closure_0);
              flag = true;
              if (-1 !== findIndexResult) {
                const hydratedMessages1 = value.hydratedMessages;
                const substr = hydratedMessages1.slice();
                substr[findIndexResult] = updateMessageRecordResult;
                value.hydratedMessages = substr;
                flag = true;
              }
            }
            const obj = id(4803);
          }
          return flag;
        }
      }
    }
    return false;
  },
  MESSAGE_REACTION_ADD: handleReaction,
  MESSAGE_REACTION_REMOVE: handleReaction,
  MESSAGE_REACTION_ADD_MANY: function handleReactionBatch(messageId) {
    messageId = messageId.messageId;
    const peekResult = tmp3.peek(messageId.channelId);
    if (null == peekResult) {
      return false;
    } else {
      const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
      let value = messageMetadataByMessageId.get(messageId);
      let message;
      if (value != null) {
        message = value.message;
      }
      if (null == message) {
        return false;
      } else {
        message = value.message;
        const addReactionBatchResult = message.addReactionBatch(messageId.reactions, store.getId());
        value.message = addReactionBatchResult;
        value = null;
        if (null != value.conversationId) {
          const conversationMetadataById = peekResult.conversationMetadataById;
          value = conversationMetadataById.get(value.conversationId);
        }
        let hydratedMessages;
        if (value != null) {
          hydratedMessages = value.hydratedMessages;
        }
        if (null != hydratedMessages) {
          hydratedMessages = value.hydratedMessages;
          const findIndexResult = hydratedMessages.findIndex((id) => id.id === closure_0);
          if (-1 !== findIndexResult) {
            const hydratedMessages1 = value.hydratedMessages;
            const substr = hydratedMessages1.slice();
            substr[findIndexResult] = addReactionBatchResult;
            value.hydratedMessages = substr;
          }
        }
        return true;
      }
    }
  },
  MESSAGE_REACTION_REMOVE_ALL: function handleRemoveAllReactions(messageId) {
    messageId = messageId.messageId;
    const peekResult = tmp3.peek(messageId.channelId);
    if (null == peekResult) {
      return false;
    } else {
      const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
      let value = messageMetadataByMessageId.get(messageId);
      let message;
      if (value != null) {
        message = value.message;
      }
      if (null == message) {
        return false;
      } else {
        message = value.message;
        const result = message.set("reactions", []);
        value.message = result;
        value = null;
        if (null != value.conversationId) {
          const conversationMetadataById = peekResult.conversationMetadataById;
          value = conversationMetadataById.get(value.conversationId);
        }
        let hydratedMessages;
        if (value != null) {
          hydratedMessages = value.hydratedMessages;
        }
        if (null != hydratedMessages) {
          hydratedMessages = value.hydratedMessages;
          const findIndexResult = hydratedMessages.findIndex((id) => id.id === closure_0);
          if (-1 !== findIndexResult) {
            const hydratedMessages1 = value.hydratedMessages;
            const substr = hydratedMessages1.slice();
            substr[findIndexResult] = result;
            value.hydratedMessages = substr;
          }
        }
        return true;
      }
    }
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function handleRemoveEmojiReactions(messageId) {
    messageId = messageId.messageId;
    const peekResult = tmp3.peek(messageId.channelId);
    if (null == peekResult) {
      return false;
    } else {
      const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
      let value = messageMetadataByMessageId.get(messageId);
      let message;
      if (value != null) {
        message = value.message;
      }
      if (null == message) {
        return false;
      } else {
        message = value.message;
        const result = message.removeReactionsForEmoji(messageId.emoji);
        value.message = result;
        value = null;
        if (null != value.conversationId) {
          const conversationMetadataById = peekResult.conversationMetadataById;
          value = conversationMetadataById.get(value.conversationId);
        }
        let hydratedMessages;
        if (value != null) {
          hydratedMessages = value.hydratedMessages;
        }
        if (null != hydratedMessages) {
          hydratedMessages = value.hydratedMessages;
          const findIndexResult = hydratedMessages.findIndex((id) => id.id === closure_0);
          if (-1 !== findIndexResult) {
            const hydratedMessages1 = value.hydratedMessages;
            const substr = hydratedMessages1.slice();
            substr[findIndexResult] = result;
            value.hydratedMessages = substr;
          }
        }
        return true;
      }
    }
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    id = id.id;
    const peekResult = tmp3.peek(id.channelId);
    let flag = false;
    if (null != peekResult) {
      const messageMetadataByMessageId = peekResult.messageMetadataByMessageId;
      let value = messageMetadataByMessageId.get(id);
      if (null != value) {
        value = null;
        if (null != value.conversationId) {
          const conversationMetadataById = peekResult.conversationMetadataById;
          value = conversationMetadataById.get(value.conversationId);
        }
        let hydratedMessages;
        if (value != null) {
          hydratedMessages = value.hydratedMessages;
        }
        if (null != hydratedMessages) {
          const hydratedMessages1 = value.hydratedMessages;
          value.hydratedMessages = hydratedMessages1.filter((id) => id.id !== id);
        }
      }
      const messageMetadataByMessageId2 = peekResult.messageMetadataByMessageId;
      flag = messageMetadataByMessageId2.delete(id);
    }
    return flag;
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(arg0) {
    let flag = false;
    while (tmp2 !== undefined) {
      let tmp4 = removeHydratedMessage;
      if (removeHydratedMessage(tmp, tmp3)) {
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
    tmp3.reset();
    map.clear();
    map1.clear();
  }
};
const conversationsStore = new ConversationsStore(require("dispatcher"), obj);
let tmp3 = new require("priv")(obj);
let result = require("markAllUserIdListsStale").fileFinishedImporting("modules/conversations/ConversationsStore.tsx");

export default conversationsStore;