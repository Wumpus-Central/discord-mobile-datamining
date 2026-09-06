// discord_app/modules/replies/PendingReplyStore.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";

const dependencyMap = {};
const dependencyMap2 = {};
let closure_7 = {};
const PersistedStore = initializeDefault.PersistedStore;
class PendingReplyStore extends PersistedStore {}
const prototype = PendingReplyStore.prototype;
prototype["getState"] = function getState() {
  let obj = {};
  const entries = SnowflakeUtilsDefault.entries(closure_5);
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    obj = { channelId: tmp6, messageId: tmp7.message.id, shouldMention: null, showMentionToggle: null };
    ({ shouldMention: obj3.shouldMention, showMentionToggle: obj3.showMentionToggle } = tmp7);
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
  this.waitFor(MessageStore, ChannelStore);
  if (arg0 == null) {
    obj = {};
  }
  closure_6 = obj;
};
prototype["getPendingReply"] = function getPendingReply(id) {
  return dependencyMap[id];
};
prototype["getPendingReplyActionSource"] = function getPendingReplyActionSource(channelId) {
  return closure_7[channelId];
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
  },
];
PendingReplyStore.migrations = items;
const pendingReplyStore = new PendingReplyStore(DispatcherDefault, {
  CREATE_PENDING_REPLY: function handleCreatePendingReply(message) {
    ({ channel, shouldMention } = message);
    if (shouldMention === undefined) {
      shouldMention = true;
    }
    let flag = message.showMentionToggle;
    if (flag === undefined) {
      flag = true;
    }
    closure_5[channel.id] = {
      channel,
      message: message.message,
      shouldMention,
      showMentionToggle: flag,
      mediaMention: message.mediaMention,
    };
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
    closure_6[channel.id] = {
      channelId: channel.id,
      messageId: messageId.messageId,
      shouldMention,
      showMentionToggle: flag,
    };
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
    const keys = SnowflakeUtilsDefault.keys(closure_6);
    const item = keys.forEach((item) => {
      if (null == channel.getChannel(item)) {
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
        const message = MessageStore.getMessage(channelId, tmp4.messageId);
        const channel = ChannelStore.getChannel(tmp4.channelId);
        if (null != message) {
          if (null != channel) {
            const obj = { channel, message, shouldMention: null, showMentionToggle: null };
            ({ shouldMention: obj.shouldMention, showMentionToggle: obj.showMentionToggle } = tmp4);
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
        const message = MessageStore.getMessage(channelId, tmp4.messageId);
        const channel = ChannelStore.getChannel(tmp4.channelId);
        if (null != message) {
          if (null != channel) {
            const obj = { channel, message, shouldMention: null, showMentionToggle: null };
            ({ shouldMention: obj.shouldMention, showMentionToggle: obj.showMentionToggle } = tmp4);
            closure_5[channelId] = obj;
            delete tmp[tmp2];
          }
        }
      }
    }
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/replies/PendingReplyStore.tsx");

export default pendingReplyStore;
