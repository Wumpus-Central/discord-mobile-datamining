// === Module 7372: getState ===

// Module 7372 (getState)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;
import closure_4 from "reinjectEphemerals" /* 4701 */;

let closure_5 = {};
let closure_6 = {};
let closure_7 = {};
const PersistedStore = initializeDefault.PersistedStore;
class PendingReplyStore extends PersistedStore {
}
const prototype = PendingReplyStore.prototype;
prototype["getState"] = function getState() {
  let obj = {};
  const entries = DISCORD_EPOCHDefault.entries(closure_5);
  const obj2 = DISCORD_EPOCHDefault;
  while (tmp2 !== undefined) {
    let tmp4 = callback;
    let tmp5 = callback(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    obj = { channelId: null, messageId: null, shouldMention: null, showMentionToggle: null };
    obj[0] = tmp6;
    obj[1] = tmp7.message.id;
    ({ shouldMention: obj3[2], showMentionToggle: obj3[3] } = tmp7);
    obj[tmp6] = obj;
    continue;
  }
  obj = {};
  const merged = Object.assign(closure_6);
  const merged1 = Object.assign(obj);
  return obj;
};
prototype["initialize"] = function initialize(arg0) {
  let obj = arg0;
  this.waitFor(closure_4, closure_3);
  if (arg0 == null) {
    obj = {};
  }
};
prototype["getPendingReply"] = function getPendingReply(id) {
  return dependencyMap[id];
};
prototype["getPendingReplyActionSource"] = function getPendingReplyActionSource(pendingReplyActionSource) {
  return table[pendingReplyActionSource];
};
PendingReplyStore.displayName = "PendingReplyStore";
PendingReplyStore.persistKey = "PendingReplyStore";
const items = [
  (arg0) => {
    let obj = arg0;
    if (arg0 == null) {
      obj = {};
    }
    return obj;
  }
];
PendingReplyStore.migrations = items;
const pendingReplyStore = new PendingReplyStore(dispatcherDefault, {
  CREATE_PENDING_REPLY: function handleCreatePendingReply(message) {
    ({ channel, shouldMention } = message);
    if (shouldMention === undefined) {
      shouldMention = true;
    }
    let flag = message.showMentionToggle;
    if (flag === undefined) {
      flag = true;
    }
    closure_5[channel.id] = { channel, message: message.message, shouldMention, showMentionToggle: flag, mediaMention: message.mediaMention };
    closure_7[channel.id] = message.source;
  },
  CREATE_SHALLOW_PENDING_REPLY: function handleCreateShallowPendingReply(messageId) {
    ({ channel, shouldMention } = messageId);
    if (shouldMention === undefined) {
      shouldMention = true;
    }
    let flag = messageId.showMentionToggle;
    if (flag === undefined) {
      flag = true;
    }
    closure_6[channel.id] = { channelId: channel.id, messageId: messageId.messageId, shouldMention, showMentionToggle: flag };
  },
  SET_PENDING_REPLY_SHOULD_MENTION: function handleSetPendingReplyShouldMention(arg0) {
    ({ channelId, shouldMention } = arg0);
    if (channelId in dependencyMap) {
      let obj = {};
      const merged = Object.assign(dependencyMap[channelId]);
      obj.shouldMention = shouldMention;
      dependencyMap[channelId] = obj;
    }
    if (channelId in dependencyMap2) {
      obj = {};
      const merged1 = Object.assign(dependencyMap2[channelId]);
      obj.shouldMention = shouldMention;
      dependencyMap2[channelId] = obj;
    }
  },
  DELETE_PENDING_REPLY: function handleDeletePendingReply(arg0) {
    delete tmp3[tmp2];
    delete tmp[tmp2];
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    const keys = DISCORD_EPOCHDefault.keys(closure_6);
    const item = keys.forEach((arg0) => {
      if (null == channel.getChannel(arg0)) {
        delete tmp[tmp2];
      }
    });
  },
  LOGOUT: function handleLogout() {
    closure_5 = {};
    closure_6 = {};
    closure_7 = {};
  },
  MESSAGE_DELETE: function handleMessageDelete(arg0) {
    ({ id, channelId } = arg0);
    id = undefined;
    if (dependencyMap[channelId] != null) {
      const message = tmp4.message;
      if (message != null) {
        id = message.id;
      }
    }
    if (id === id) {
      delete tmp3[tmp2];
      delete tmp[tmp2];
    } else {
      let messageId;
      if (dependencyMap2[channelId] != null) {
        messageId = tmp7.messageId;
      }
      if (messageId !== id) {
        return false;
      } else {
        delete tmp3[tmp2];
        delete tmp3[tmp2];
      }
    }
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      if (null != dependencyMap2[channelId]) {
        const message = store2.getMessage(channelId, tmp4.messageId);
        const channel = store.getChannel(tmp4.channelId);
        if (null != message) {
          if (null != channel) {
            const obj = { channel: null, message: null, shouldMention: null, showMentionToggle: null };
            obj[0] = channel;
            obj[1] = message;
            ({ shouldMention: obj[2], showMentionToggle: obj[3] } = tmp4);
            closure_5[channelId] = obj;
            delete tmp[tmp2];
          }
        }
      }
    }
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessagesSuccess(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      if (null != dependencyMap2[channelId]) {
        const message = store2.getMessage(channelId, tmp4.messageId);
        const channel = store.getChannel(tmp4.channelId);
        if (null != message) {
          if (null != channel) {
            const obj = { channel: null, message: null, shouldMention: null, showMentionToggle: null };
            obj[0] = channel;
            obj[1] = message;
            ({ shouldMention: obj[2], showMentionToggle: obj[3] } = tmp4);
            closure_5[channelId] = obj;
            delete tmp[tmp2];
          }
        }
      }
    }
  }
});
const result = require("set").fileFinishedImporting("modules/replies/PendingReplyStore.tsx");

export default pendingReplyStore;