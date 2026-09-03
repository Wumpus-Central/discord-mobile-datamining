// === Module 6133: handleLoadThreadsSuccess ===

// Module 6133 (handleLoadThreadsSuccess)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import createMinimalMessageRecord from "createMinimalMessageRecord" /* 4738 */;
import closure_3 from "handleConnectionOpenOrResumed" /* 6134 */;
import closure_4 from "mergeGuildAvatar" /* 1921 */;

require = arg1;
function handleLoadThreadsSuccess(arg0) {
  ({ threads, firstMessages } = arg0);
  if (null == firstMessages) {
    return false;
  } else {
    for (const item10008 of threads) {
      let tmp3 = closure_5;
      closure_5[item10008.id] = { loaded: true, firstMessage: null };
      continue;
    }
    const iter = firstMessages[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp8 = storeFirstMessage;
      let tmp9 = storeFirstMessage(nextResult.channel_id, nextResult);
      continue;
    }
  }
}
function storeFirstMessage(channel_id, nextResult) {
  let messageRecord = null;
  if (null != nextResult) {
    messageRecord = createMinimalMessageRecord.createMessageRecord(nextResult);
    const obj = createMinimalMessageRecord;
  }
  closure_5[channel_id] = { loaded: true, firstMessage: messageRecord };
}
function handleReaction(colors) {
  ({ channelId, emoji, reactionType } = colors);
  if (null != dependencyMap[channelId]) {
    if (null != tmp5.firstMessage) {
      if (tmp2 !== tmp5.firstMessage.id) {
        return false;
      } else {
        const currentUser = authStore.getCurrentUser();
        if (tmp4) {
          if (!tmp6) {
            return false;
          }
        }
        let obj = {};
        const merged = Object.assign(tmp5);
        dependencyMap[channelId] = obj;
        if ("MESSAGE_REACTION_ADD" === tmp) {
          const firstMessage2 = tmp5.firstMessage;
          obj = { colors: null, reactionType: null };
          obj[0] = colors.colors;
          obj[1] = reactionType;
          let addReactionResult = firstMessage2.addReaction(emoji, tmp6, obj);
        } else {
          const firstMessage = tmp5.firstMessage;
          addReactionResult = firstMessage.removeReaction(emoji, tmp6, reactionType);
        }
        dependencyMap[channelId].firstMessage = addReactionResult;
      }
    }
  }
  return false;
}
let closure_5 = {};
const Store = initializeDefault.Store;
class ForumPostMessagesStore extends Store {
}
const prototype = ForumPostMessagesStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_3, closure_4);
};
prototype["isLoading"] = function isLoading(arg0) {
  let loaded;
  if (dependencyMap[arg0] != null) {
    loaded = tmp.loaded;
  }
  return true !== loaded;
};
prototype["getMessage"] = function getMessage(arg0) {
  if (!(arg0 in dependencyMap)) {
    dependencyMap[arg0] = { loaded: false, firstMessage: null };
  }
  return dependencyMap[arg0];
};
ForumPostMessagesStore.displayName = "ForumPostMessagesStore";
const forumPostMessagesStore = new ForumPostMessagesStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_5 = {};
  },
  MESSAGE_CREATE: function handleMessageCreate(isPushNotification) {
    isPushNotification = isPushNotification.isPushNotification;
    let tmp = !isPushNotification;
    if (!isPushNotification) {
      let obj = DISCORD_EPOCHDefault;
      const tmp4 = isPushNotification.message.id === obj.castChannelIdAsMessageId(isPushNotification.message.channel_id);
      if (tmp4) {
        const message = isPushNotification.message;
        let messageRecord = null;
        if (null != message) {
          messageRecord = createMinimalMessageRecord.createMessageRecord(message);
          const obj2 = createMinimalMessageRecord;
        }
        obj = { loaded: true, firstMessage: null };
        obj[1] = messageRecord;
        closure_5[isPushNotification.message.channel_id] = obj;
      }
      tmp = tmp4;
    }
    return tmp;
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    if (message.message.id !== message.message.channel_id) {
      return false;
    } else {
      const obj4 = DISCORD_EPOCHDefault;
      const tmp12 = dependencyMap[obj4.castMessageIdAsChannelId(obj4, message.message.id)];
      let tmp8 = null != tmp12;
      if (tmp8) {
        if (null != tmp12.firstMessage) {
          const obj = {};
          const result = DISCORD_EPOCHDefault.castMessageIdAsChannelId(message.message.id);
          const merged = Object.assign(tmp12);
          const tmp10Result = DISCORD_EPOCHDefault;
          obj.firstMessage = createMinimalMessageRecord.updateMessageRecord(tmp12.firstMessage, message.message);
          dependencyMap[result] = obj;
          const obj3 = createMinimalMessageRecord;
        }
        tmp8 = tmp;
      }
      return tmp8;
    }
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    if (id.id !== obj.castChannelIdAsMessageId(id.channelId)) {
      return false;
    } else {
      closure_5[id.channelId] = { loaded: true, firstMessage: null };
    }
    obj = DISCORD_EPOCHDefault;
  },
  THREAD_CREATE: function handleThreadCreate(channel) {
    let tmp = null == dependencyMap[channel.channel.id];
    if (tmp) {
      const result = subscribedToThreads.isSubscribedToThreads(channel.channel.guild_id);
      if (result) {
        dependencyMap[channel.channel.id] = { loaded: true, firstMessage: null };
      }
      tmp = result;
    }
    return tmp;
  },
  MESSAGE_REACTION_ADD: handleReaction,
  MESSAGE_REACTION_REMOVE: handleReaction,
  MESSAGE_REACTION_REMOVE_ALL: function handleRemoveAllReactions(channelId) {
    channelId = channelId.channelId;
    let tmp2 = null != tmp;
    if (tmp2) {
      tmp2 = null != tmp.firstMessage;
    }
    if (tmp2) {
      if (channelId.messageId === tmp.firstMessage.id) {
        const obj = {};
        const merged = Object.assign(tmp);
        const firstMessage = tmp.firstMessage;
        obj.firstMessage = firstMessage.set("reactions", []);
        dependencyMap[channelId] = obj;
      }
      tmp2 = tmp3;
    }
    return tmp2;
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function handleRemoveEmojiReactions(channelId) {
    channelId = channelId.channelId;
    let tmp2 = null != tmp;
    ({ messageId, emoji } = channelId);
    if (tmp2) {
      tmp2 = null != tmp.firstMessage;
    }
    if (tmp2) {
      if (messageId === tmp.firstMessage.id) {
        const obj = {};
        const merged = Object.assign(tmp);
        const firstMessage = tmp.firstMessage;
        obj.firstMessage = firstMessage.removeReactionsForEmoji(emoji);
        dependencyMap[channelId] = obj;
      }
      tmp2 = tmp3;
    }
    return tmp2;
  },
  MESSAGE_REACTION_ADD_MANY: function handleReactionBatch(channelId) {
    channelId = channelId.channelId;
    if (null != dependencyMap[channelId]) {
      if (null != tmp3.firstMessage) {
        if (tmp !== tmp3.firstMessage.id) {
          return false;
        } else {
          const currentUser = authStore.getCurrentUser();
          const firstMessage = tmp3.firstMessage;
          let id;
          if (currentUser != null) {
            id = currentUser.id;
          }
          const obj = {};
          const merged = Object.assign(tmp3);
          obj.firstMessage = firstMessage.addReactionBatch(tmp2, id);
          dependencyMap[channelId] = obj;
        }
      }
    }
    return false;
  },
  LOAD_FORUM_POSTS: function handlePostChannelLoadData(threads) {
    threads = threads.threads;
    for (const key10006 in threads) {
      let tmp5 = key10006;
      let first_message = threads[key10006].first_message;
      let messageRecord = null;
      if (null != first_message) {
        let tmp = require;
        let tmp2 = dependencyMap;
        let obj = createMinimalMessageRecord;
        messageRecord = obj.createMessageRecord(first_message);
      }
      let tmp4 = closure_5;
      obj = { loaded: true, firstMessage: null };
      obj[1] = messageRecord;
      closure_5[key10006] = obj;
      continue;
    }
  },
  LOAD_THREADS_SUCCESS: handleLoadThreadsSuccess,
  LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadThreadsSuccess,
  LOAD_MESSAGES_SUCCESS: function handleLoadMessagesSuccess(arg0) {
    ({ channelId, messages } = arg0);
    let tmp2 = null != tmp;
    if (tmp2) {
      let obj = DISCORD_EPOCHDefault;
      tmp2 = tmp.id === obj.castChannelIdAsMessageId(channelId);
    }
    if (tmp2) {
      obj = { loaded: true, firstMessage: null };
      obj[1] = createMinimalMessageRecord.createMessageRecord(tmp);
      closure_5[channelId] = obj;
      const obj3 = createMinimalMessageRecord;
    }
  }
});
let result = require("set").fileFinishedImporting("modules/forums/ForumPostMessagesStore.tsx");

export default forumPostMessagesStore;