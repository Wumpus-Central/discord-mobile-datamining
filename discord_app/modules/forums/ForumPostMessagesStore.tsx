// === Module 7277: ForumPostMessagesStore ===

// Module 7277 (ForumPostMessagesStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import MessageRecordUtils from "MessageRecordUtils" /* 4783 */;
import GuildSubscriptionsStore from "GuildSubscriptionsStore" /* 7278 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function handleLoadThreadsSuccess(arg0) {
  ({ threads, firstMessages } = arg0);
  if (null == firstMessages) {
    return false;
  } else {
    for (const item10008 of threads) {
      closure_5[item10008.id] = { loaded: true, firstMessage: null };
      continue;
    }
    const iter = firstMessages[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp9 = storeFirstMessage(nextResult.channel_id, nextResult);
      continue;
    }
  }
}
function storeFirstMessage(channel_id, nextResult) {
  let messageRecord = null;
  if (null != nextResult) {
    messageRecord = MessageRecordUtils.createMessageRecord(nextResult);
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
        const currentUser = UserStore.getCurrentUser();
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
          obj = { colors: colors.colors, reactionType };
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
const dependencyMap = {};
const Store = initializeDefault.Store;
class ForumPostMessagesStore extends Store {
}
const prototype = ForumPostMessagesStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(GuildSubscriptionsStore, UserStore);
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
const forumPostMessagesStore = new ForumPostMessagesStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_5 = {};
  },
  MESSAGE_CREATE: function handleMessageCreate(isPushNotification) {
    isPushNotification = isPushNotification.isPushNotification;
    let tmp = !isPushNotification;
    if (!isPushNotification) {
      let obj = SnowflakeUtilsDefault;
      const tmp4 = isPushNotification.message.id === obj.castChannelIdAsMessageId(isPushNotification.message.channel_id);
      if (tmp4) {
        const message = isPushNotification.message;
        let messageRecord = null;
        if (null != message) {
          messageRecord = MessageRecordUtils.createMessageRecord(message);
        }
        obj = { loaded: true, firstMessage: messageRecord };
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
      const obj4 = SnowflakeUtilsDefault;
      const tmp12 = dependencyMap[obj4.castMessageIdAsChannelId(obj4, message.message.id)];
      let tmp8 = null != tmp12;
      if (tmp8) {
        if (null != tmp12.firstMessage) {
          const obj = {};
          const result = SnowflakeUtilsDefault.castMessageIdAsChannelId(message.message.id);
          const merged = Object.assign(tmp12);
          const tmp10Result = SnowflakeUtilsDefault;
          obj.firstMessage = MessageRecordUtils.updateMessageRecord(tmp12.firstMessage, message.message);
          dependencyMap[result] = obj;
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
    obj = SnowflakeUtilsDefault;
  },
  THREAD_CREATE: function handleThreadCreate(channel) {
    let tmp = null == dependencyMap[channel.channel.id];
    if (tmp) {
      const result = GuildSubscriptionsStore.isSubscribedToThreads(channel.channel.guild_id);
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
          const currentUser = UserStore.getCurrentUser();
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
      let first_message = threads[key10006].first_message;
      let messageRecord = null;
      if (null != first_message) {
        let obj = MessageRecordUtils;
        messageRecord = obj.createMessageRecord(first_message);
      }
      obj = { loaded: true, firstMessage: messageRecord };
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
      let obj = SnowflakeUtilsDefault;
      tmp2 = tmp.id === obj.castChannelIdAsMessageId(channelId);
    }
    if (tmp2) {
      obj = { loaded: true, firstMessage: MessageRecordUtils.createMessageRecord(tmp) };
      closure_5[channelId] = obj;
    }
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/ForumPostMessagesStore.tsx");

export default forumPostMessagesStore;