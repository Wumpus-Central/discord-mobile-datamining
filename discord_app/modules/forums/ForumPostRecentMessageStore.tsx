// === Module 7308: ForumPostRecentMessageStore ===

// Module 7308 (ForumPostRecentMessageStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import MessageRecordUtils from "MessageRecordUtils" /* 4783 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function handleLoadThreadsSuccess(arg0) {
  ({ threads, mostRecentMessages } = arg0);
  const item = threads.forEach((id) => {
    dependencyMap[id.id] = { loaded: true, message: null };
    return true;
  });
  if (mostRecentMessages != null) {
    const found = mostRecentMessages.filter(GlobalUtils.isNotNullish);
    const item1 = found.forEach((channel_id) => {
      let messageRecord = null;
      if (null != channel_id) {
        messageRecord = MessageRecordUtils.createMessageRecord(channel_id);
      }
      closure_1_5[channel_id.channel_id] = { loaded: true, message: messageRecord };
    });
  }
}
const dependencyMap = {};
const Store = initializeDefault.Store;
class ForumPostRecentMessageStore extends Store {
}
const prototype = ForumPostRecentMessageStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelStore, UserStore);
};
prototype["getMessageState"] = function getMessageState(id) {
  if (!(id in dependencyMap)) {
    dependencyMap[id] = { loaded: false, message: null };
  }
  return dependencyMap[id];
};
ForumPostRecentMessageStore.displayName = "ForumPostRecentMessageStore";
const forumPostRecentMessageStore = new ForumPostRecentMessageStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_5 = {};
  },
  MESSAGE_CREATE: function handleMessageCreate(isPushNotification) {
    let tmp = isPushNotification;
    isPushNotification = isPushNotification.isPushNotification;
    if (isPushNotification) {
      return !isPushNotification;
    } else {
      const message = tmp.message;
      let channel_id;
      if (message != null) {
        channel_id = message.channel_id;
      }
      const channel = ChannelStore.getChannel(channel_id);
      let flag = false;
      if (null != channel) {
        flag = false;
        if (channel.isForumPost()) {
          let id;
          if (message != null) {
            id = message.id;
          }
          let id1;
          if (dependencyMap[channel.id] != null) {
            const message2 = tmp6.message;
            if (message2 != null) {
              id1 = message2.id;
            }
          }
          flag = SnowflakeUtilsDefault.compare(id, id1) > -1;
        }
      }
      if (flag) {
        if (tmp.message.channel_id !== obj3.castMessageIdAsChannelId(tmp.message.id)) {
          const message3 = tmp.message;
          let messageRecord = null;
          if (null != message3) {
            messageRecord = MessageRecordUtils.createMessageRecord(message3);
          }
          let obj = { loaded: true, message: messageRecord };
          dependencyMap[tmp.message.channel_id] = obj;
        }
        obj3 = SnowflakeUtilsDefault;
      }
      tmp = dependencyMap;
      obj = { loaded: true, message: null };
      dependencyMap[tmp.message.channel_id] = obj;
    }
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    message = message.message;
    let channel_id;
    if (message != null) {
      channel_id = message.channel_id;
    }
    const channel = ChannelStore.getChannel(channel_id);
    let flag = false;
    if (null != channel) {
      flag = false;
      if (channel.isForumPost()) {
        let id;
        if (message != null) {
          id = message.id;
        }
        let id1;
        if (dependencyMap[channel.id] != null) {
          const message2 = tmp4.message;
          if (message2 != null) {
            id1 = message2.id;
          }
        }
        flag = SnowflakeUtilsDefault.compare(id, id1) > -1;
      }
    }
    let tmp9 = flag;
    if (tmp9) {
      if (message.message.channel_id !== message.message.id) {
        channel_id = message.message.channel_id;
        message = undefined;
        if (dependencyMap[channel_id] != null) {
          message = tmp14.message;
        }
        if (tmp16) {
          const obj = {};
          const merged = Object.assign(tmp12);
          obj.message = MessageRecordUtils.updateMessageRecord(message, message.message);
          dependencyMap[channel_id] = obj;
        }
        tmp16 = null != dependencyMap[channel_id] && null != message;
      }
      tmp9 = tmp10;
    }
    return tmp9;
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    let message;
    if (dependencyMap[id.channelId] != null) {
      message = tmp3.message;
    }
    id = undefined;
    if (message != null) {
      id = message.id;
    }
    let flag = id === id.id;
    if (flag) {
      delete tmp[tmp2];
      flag = true;
    }
    return flag;
  },
  LOAD_FORUM_POSTS: function handlePostChannelLoadData(threads) {
    threads = threads.threads;
    for (const key10006 in threads) {
      let most_recent_message = threads[key10006].most_recent_message;
      let messageRecord = null;
      if (null != most_recent_message) {
        let obj = MessageRecordUtils;
        messageRecord = obj.createMessageRecord(most_recent_message);
      }
      obj = { loaded: true, message: messageRecord };
      closure_5[key10006] = obj;
      continue;
    }
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadThreadsSuccess,
  LOAD_THREADS_SUCCESS: handleLoadThreadsSuccess
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/ForumPostRecentMessageStore.tsx");

export default forumPostRecentMessageStore;