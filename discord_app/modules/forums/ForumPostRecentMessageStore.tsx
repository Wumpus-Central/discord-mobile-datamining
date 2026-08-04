// discord_app/modules/forums/ForumPostRecentMessageStore.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import mergeGuildAvatar from "mergeGuildAvatar";
import { Store } from "initialize";

const require = arg1;
function handleLoadThreadsSuccess(arg0) {
  let mostRecentMessages;
  let threads;
  ({ threads, mostRecentMessages } = arg0);
  const item = threads.forEach((id) => {
    closure_5[id.id] = { loaded: true, message: null };
    return true;
  });
  if (mostRecentMessages != null) {
    const found = mostRecentMessages.filter(require(1351) /* isDiscordFrontendDevelopment */.isNotNullish);
    const item1 = found.forEach((channel_id) => {
      let messageRecord = null;
      if (null != channel_id) {
        messageRecord = callback(table[3]).createMessageRecord(channel_id);
        const obj = callback(table[3]);
      }
      closure_5[channel_id.channel_id] = { loaded: true, message: messageRecord };
    });
  }
}
let closure_5 = {};
class ForumPostRecentMessageStore extends Store {
}
const prototype = ForumPostRecentMessageStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ensureGuildLoaded, mergeGuildAvatar);
};
prototype["getMessageState"] = function getMessageState(id) {
  if (!(id in dependencyMap)) {
    dependencyMap[id] = { loaded: false, message: null };
  }
  return dependencyMap[id];
};
ForumPostRecentMessageStore.displayName = "ForumPostRecentMessageStore";
const forumPostRecentMessageStore = new ForumPostRecentMessageStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_5 = {};
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
      const channel = store.getChannel(channel_id);
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
          flag = importDefault(11).compare(id, id1) > -1;
          const obj2 = importDefault(11);
        }
      }
      if (flag) {
        if (tmp.message.channel_id !== obj3.castMessageIdAsChannelId(tmp.message.id)) {
          const message3 = tmp.message;
          let messageRecord = null;
          if (null != message3) {
            messageRecord = require(4413) /* createMinimalMessageRecord */.createMessageRecord(message3);
            const obj4 = require(4413) /* createMinimalMessageRecord */;
          }
          let obj = { loaded: true, message: null };
          obj[1] = messageRecord;
          dependencyMap[tmp.message.channel_id] = obj;
        }
        obj3 = importDefault(11);
      }
      tmp = dependencyMap;
      obj = { loaded: true, message: null };
      obj[1] = null;
      dependencyMap[tmp.message.channel_id] = obj;
    }
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    message = message.message;
    let channel_id;
    if (message != null) {
      channel_id = message.channel_id;
    }
    const channel = store.getChannel(channel_id);
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
        flag = importDefault(11).compare(id, id1) > -1;
        const obj2 = importDefault(11);
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
          obj.message = require(4413) /* createMinimalMessageRecord */.updateMessageRecord(message, message.message);
          dependencyMap[channel_id] = obj;
          const obj4 = require(4413) /* createMinimalMessageRecord */;
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
      let tmp5 = key10006;
      let most_recent_message = threads[key10006].most_recent_message;
      let messageRecord = null;
      if (null != most_recent_message) {
        let tmp = require;
        let tmp2 = dependencyMap;
        let obj = require(4413) /* createMinimalMessageRecord */;
        messageRecord = obj.createMessageRecord(most_recent_message);
      }
      let tmp4 = closure_5;
      obj = { loaded: true, message: null };
      obj[1] = messageRecord;
      closure_5[key10006] = obj;
      continue;
    }
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadThreadsSuccess,
  LOAD_THREADS_SUCCESS: handleLoadThreadsSuccess
});
const result = require("DISCORD_EPOCH").fileFinishedImporting("modules/forums/ForumPostRecentMessageStore.tsx");

export default forumPostRecentMessageStore;