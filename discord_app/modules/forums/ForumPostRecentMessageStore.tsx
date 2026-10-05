// === Module 6811: ForumPostRecentMessageStore ===

// Module 6811 (ForumPostRecentMessageStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5112 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

let closure_5;

function handleLoadThreadsSuccess(arg0) {
  let mostRecentMessages;
  let threads;
  ({ threads, mostRecentMessages } = arg0);
  const item = threads.forEach((id) => {
    closure_1_5[id.id] = { loaded: true, message: null };
    return true;
  });
  if (mostRecentMessages != null) {
    const found = mostRecentMessages.filter(GlobalUtils.isNotNullish);
    const item1 = found.forEach((channel_id) => {
      let messageRecord = null;
      channel_id = channel_id.channel_id;
      if (null != channel_id) {
        const obj = MessageRecordUtils;
        messageRecord = obj.createMessageRecord(channel_id);
      }
      closure_1_5[channel_id] = { loaded: true, message: messageRecord };
    });
  }
}
const hasOwnProperty = {};
const Store = get_initializedDefault.Store;
class ForumPostRecentMessageStore extends Store {
  initialize() {
    this.waitFor(ChannelStore, UserStore);
  }
  getMessageState(id) {
    if (!(id in closure_5)) {
      closure_5[id] = { loaded: false, message: null };
    }
    return closure_5[id];
  }
}
const prototype = ForumPostRecentMessageStore.prototype;
ForumPostRecentMessageStore.displayName = "ForumPostRecentMessageStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_5 = {};
  },
  MESSAGE_CREATE: function handleMessageCreate(isPushNotification) {
    let tmp = !isPushNotification.isPushNotification;
    if (tmp) {
      const message = isPushNotification.message;
      let channel_id1;
      const getChannel = ChannelStore.getChannel;
      if (message != null) {
        channel_id1 = message.channel_id;
      }
      const channel = getChannel(channel_id1);
      let flag = false;
      if (null != channel) {
        flag = false;
        if (channel.isForumPost()) {
          let id;
          const compare = SnowflakeUtilsDefault.compare;
          SnowflakeUtilsDefault;
          if (message != null) {
            id = message.id;
          }
          let id1;
          if (closure_5[channel.id] != null) {
            const message2 = tmp6.message;
            if (message2 != null) {
              id1 = message2.id;
            }
          }
          flag = compare(id, id1) > -1;
        }
      }
      if (flag) {
        const channel_id = isPushNotification.message.channel_id;
        const obj2 = SnowflakeUtilsDefault;
        if (channel_id === obj2.castMessageIdAsChannelId(isPushNotification.message.id)) {
          const obj = { loaded: true, message: null };
          closure_5[isPushNotification.message.channel_id] = obj;
        } else {
          const message3 = isPushNotification.message;
          let messageRecord = null;
          const channel_id2 = isPushNotification.message.channel_id;
          if (null != message3) {
            const obj3 = MessageRecordUtils;
            messageRecord = obj3.createMessageRecord(message3);
          }
          const obj4 = { loaded: true, message: messageRecord };
          closure_5[channel_id2] = obj4;
        }
      }
      tmp = tmp12;
    }
    return tmp;
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    let obj3;
    message = message.message;
    let channel_id1;
    const getChannel = ChannelStore.getChannel;
    if (message != null) {
      channel_id1 = message.channel_id;
    }
    const channel = getChannel(channel_id1);
    let flag = false;
    if (null != channel) {
      flag = false;
      if (channel.isForumPost()) {
        let id;
        const compare = SnowflakeUtilsDefault.compare;
        SnowflakeUtilsDefault;
        if (message != null) {
          id = message.id;
        }
        let id1;
        if (closure_5[channel.id] != null) {
          const message2 = tmp4.message;
          if (message2 != null) {
            id1 = message2.id;
          }
        }
        flag = compare(id, id1) > -1;
      }
    }
    let tmp10 = flag;
    if (tmp10) {
      if (message.message.channel_id !== message.message.id) {
        const channel_id = message.message.channel_id;
        let message1;
        const message3 = message.message;
        if (closure_5[channel_id] != null) {
          message1 = tmp15.message;
        }
        const tmp17 = null != closure_5[channel_id] && null != message1;
        if (tmp17) {
          const obj = { message: obj3.updateMessageRecord(message1, message3) };
          const merged = Object.assign(tmp13);
          closure_5[channel_id] = obj;
          obj3 = MessageRecordUtils;
        }
      }
      tmp10 = tmp11;
    }
    return tmp10;
  },
  MESSAGE_DELETE: function handleMessageDelete(channelId) {
    channelId = channelId.channelId;
    let message;
    const id = channelId.id;
    if (closure_5[channelId] != null) {
      message = tmp.message;
    }
    let id1;
    if (message != null) {
      id1 = message.id;
    }
    let flag = id1 === id;
    if (flag) {
      delete closure_5[channelId];
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
      let obj2 = { loaded: true, message: messageRecord };
      closure_5[key10006] = obj2;
      continue;
    }
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadThreadsSuccess,
  LOAD_THREADS_SUCCESS: handleLoadThreadsSuccess
};
const forumPostRecentMessageStore = new ForumPostRecentMessageStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/forums/ForumPostRecentMessageStore.tsx");

export default forumPostRecentMessageStore;