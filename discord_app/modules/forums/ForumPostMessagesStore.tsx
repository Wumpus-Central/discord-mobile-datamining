// discord_app/modules/forums/ForumPostMessagesStore.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import MessageRecordUtils from "../messages/MessageRecordUtils.tsx";
import GuildSubscriptionsStore from "../../stores/GuildSubscriptionsStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_5;

function handleLoadThreadsSuccess(arg0) {
  let firstMessages;
  let threads;
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
    const obj = MessageRecordUtils;
    messageRecord = obj.createMessageRecord(nextResult);
  }
  closure_5[channel_id] = { loaded: true, firstMessage: messageRecord };
}
function handleReaction(colors) {
  let channelId;
  let emoji;
  let reactionType;
  ({ channelId, emoji, reactionType } = colors);
  if (null != closure_5[channelId]) {
    if (null != closure_5[channelId].firstMessage) {
      if (tmp2 !== closure_5[channelId].firstMessage.id) {
        return false;
      } else {
        let addReactionResult;
        const currentUser = UserStore.getCurrentUser();
        if (tmp4) {
          if (!(null != currentUser && currentUser.id === tmp3)) {
            return false;
          }
        }
        const obj = {};
        const merged = Object.assign(tmp5);
        closure_5[channelId] = obj;
        const tmp12 = closure_5[channelId];
        if ("MESSAGE_REACTION_ADD" === tmp) {
          const firstMessage2 = tmp5.firstMessage;
          const obj2 = { colors: colors.colors, reactionType };
          addReactionResult = firstMessage2.addReaction(emoji, tmp6, obj2);
        } else {
          const firstMessage = tmp5.firstMessage;
          addReactionResult = firstMessage.removeReaction(emoji, tmp6, reactionType);
        }
        tmp12.firstMessage = addReactionResult;
      }
    }
  }
  return false;
}
const hasOwnProperty = {};
const Store = get_initializedDefault.Store;
class ForumPostMessagesStore extends Store {
  initialize() {
    this.waitFor(GuildSubscriptionsStore, UserStore);
  }
  isLoading(arg0) {
    let loaded;
    if (closure_5[arg0] != null) {
      loaded = tmp.loaded;
    }
    return true !== loaded;
  }
  getMessage(arg0) {
    if (!(arg0 in closure_5)) {
      closure_5[arg0] = { loaded: false, firstMessage: null };
    }
    return closure_5[arg0];
  }
}
const prototype = ForumPostMessagesStore.prototype;
ForumPostMessagesStore.displayName = "ForumPostMessagesStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_5 = {};
  },
  MESSAGE_CREATE: function handleMessageCreate(isPushNotification) {
    let tmp = !isPushNotification.isPushNotification;
    if (tmp) {
      const id = isPushNotification.message.id;
      const obj = SnowflakeUtilsDefault;
      const tmp4 = id === obj.castChannelIdAsMessageId(isPushNotification.message.channel_id);
      if (tmp4) {
        const message = isPushNotification.message;
        let messageRecord = null;
        const channel_id = isPushNotification.message.channel_id;
        if (null != message) {
          const obj2 = MessageRecordUtils;
          messageRecord = obj2.createMessageRecord(message);
        }
        const obj3 = { loaded: true, firstMessage: messageRecord };
        closure_5[channel_id] = obj3;
      }
      tmp = tmp4;
    }
    return tmp;
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    let obj3;
    if (message.message.id !== message.message.channel_id) {
      return false;
    } else {
      const obj4 = SnowflakeUtilsDefault;
      const tmp12 = closure_5[obj4.castMessageIdAsChannelId(obj4, message.message.id)];
      let tmp8 = null != tmp12;
      if (tmp8) {
        if (null != tmp12.firstMessage) {
          const obj = { firstMessage: obj3.updateMessageRecord(tmp12.firstMessage, message.message) };
          const tmp10Result = SnowflakeUtilsDefault;
          const result = tmp10Result.castMessageIdAsChannelId(message.message.id);
          const merged = Object.assign(tmp12);
          closure_5[result] = obj;
          obj3 = MessageRecordUtils;
        }
        tmp8 = tmp;
      }
      return tmp8;
    }
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    id = id.id;
    const obj = SnowflakeUtilsDefault;
    if (id !== obj.castChannelIdAsMessageId(id.channelId)) {
      return false;
    } else {
      closure_5[id.channelId] = { loaded: true, firstMessage: null };
    }
  },
  THREAD_CREATE: function handleThreadCreate(channel) {
    let tmp = null == closure_5[channel.channel.id];
    if (tmp) {
      const result = GuildSubscriptionsStore.isSubscribedToThreads(channel.channel.guild_id);
      if (result) {
        closure_5[channel.channel.id] = { loaded: true, firstMessage: null };
      }
      tmp = result;
    }
    return tmp;
  },
  MESSAGE_REACTION_ADD: handleReaction,
  MESSAGE_REACTION_REMOVE: handleReaction,
  MESSAGE_REACTION_REMOVE_ALL: function handleRemoveAllReactions(channelId) {
    let firstMessage;
    channelId = channelId.channelId;
    let tmp2 = null != tmp;
    const messageId = channelId.messageId;
    if (tmp2) {
      tmp2 = null != tmp.firstMessage;
    }
    if (tmp2) {
      if (messageId === closure_5[channelId].firstMessage.id) {
        const obj = { firstMessage: firstMessage.set("reactions", []) };
        const merged = Object.assign(tmp);
        firstMessage = tmp.firstMessage;
        closure_5[channelId] = obj;
      }
      tmp2 = tmp3;
    }
    return tmp2;
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function handleRemoveEmojiReactions(channelId) {
    let emoji;
    let firstMessage;
    let messageId;
    channelId = channelId.channelId;
    let tmp2 = null != tmp;
    ({ messageId, emoji } = channelId);
    if (tmp2) {
      tmp2 = null != tmp.firstMessage;
    }
    if (tmp2) {
      if (messageId === closure_5[channelId].firstMessage.id) {
        const obj = { firstMessage: firstMessage.removeReactionsForEmoji(emoji) };
        const merged = Object.assign(tmp);
        firstMessage = tmp.firstMessage;
        closure_5[channelId] = obj;
      }
      tmp2 = tmp3;
    }
    return tmp2;
  },
  MESSAGE_REACTION_ADD_MANY: function handleReactionBatch(channelId) {
    let addReactionBatchResult;
    channelId = channelId.channelId;
    if (null != closure_5[channelId]) {
      if (null != closure_5[channelId].firstMessage) {
        if (tmp !== closure_5[channelId].firstMessage.id) {
          return false;
        } else {
          const currentUser = UserStore.getCurrentUser();
          const firstMessage = tmp3.firstMessage;
          let id;
          const addReactionBatch = firstMessage.addReactionBatch;
          if (currentUser != null) {
            id = currentUser.id;
          }
          const obj = { firstMessage: addReactionBatchResult };
          addReactionBatchResult = addReactionBatch(tmp2, id);
          const merged = Object.assign(tmp3);
          closure_5[channelId] = obj;
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
      let obj2 = { loaded: true, firstMessage: messageRecord };
      closure_5[key10006] = obj2;
      continue;
    }
  },
  LOAD_THREADS_SUCCESS: handleLoadThreadsSuccess,
  LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadThreadsSuccess,
  LOAD_MESSAGES_SUCCESS: function handleLoadMessagesSuccess(arg0) {
    let channelId;
    let messages;
    let obj3;
    ({ channelId, messages } = arg0);
    let tmp2 = null != tmp;
    if (tmp2) {
      const id = tmp.id;
      const obj = SnowflakeUtilsDefault;
      tmp2 = id === obj.castChannelIdAsMessageId(channelId);
    }
    if (tmp2) {
      const obj2 = { loaded: true, firstMessage: obj3.createMessageRecord(messages[messages.length - 1]) };
      closure_5[channelId] = obj2;
      obj3 = MessageRecordUtils;
    }
  },
};
const forumPostMessagesStore = new ForumPostMessagesStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/forums/ForumPostMessagesStore.tsx");

export default forumPostMessagesStore;
