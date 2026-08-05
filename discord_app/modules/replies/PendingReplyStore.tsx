// discord_app/modules/replies/PendingReplyStore.tsx
import _slicedToArray from "_slicedToArray";
import ensureGuildLoaded from "ensureGuildLoaded";
import reinjectEphemerals from "reinjectEphemerals";
import { PersistedStore } from "initialize";

let closure_5 = {};
let closure_6 = {};
let closure_7 = {};
class PendingReplyStore extends PersistedStore {
}
const prototype = PendingReplyStore.prototype;
prototype["getState"] = function getState() {
  let tmp6;
  let tmp7;
  let obj = {};
  const entries = importDefault(11).entries(closure_5);
  const obj2 = importDefault(11);
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
  this.waitFor(reinjectEphemerals, ensureGuildLoaded);
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
const pendingReplyStore = new PendingReplyStore(require("dispatcher"), {
  CREATE_PENDING_REPLY: function handleCreatePendingReply(message) {
    let channel;
    let shouldMention;
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
    let channel;
    let shouldMention;
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
    let channelId;
    let shouldMention;
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
    const keys = importDefault(11).keys(closure_6);
    const item = keys.forEach((arg0) => {
      if (null == channel.getChannel(arg0)) {
        delete tmp[tmp2];
      }
    });
  },
  LOGOUT: function handleLogout() {
    let closure_5 = {};
    let closure_6 = {};
    let closure_7 = {};
  },
  MESSAGE_DELETE: function handleMessageDelete(arg0) {
    let channelId;
    let id;
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
const result = require("reinjectEphemerals").fileFinishedImporting("modules/replies/PendingReplyStore.tsx");

export default pendingReplyStore;