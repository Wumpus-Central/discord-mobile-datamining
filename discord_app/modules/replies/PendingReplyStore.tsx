// discord_app/modules/replies/PendingReplyStore.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_5, closure_7;

const hasOwnProperty = {};
let closure_6 = {};
const metroImportDefault = {};
const PersistedStore = get_initializedDefault.PersistedStore;
class PendingReplyStore extends PersistedStore {
  getState() {
    let tmp6;
    let tmp7;
    const obj = {};
    const obj2 = SnowflakeUtilsDefault;
    const entries = obj2.entries(closure_5);
    const tmp2 = entries[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      [tmp6, tmp7] = tmp5;
      let obj4 = { channelId: tmp6, messageId: tmp7.message.id, shouldMention: null, showMentionToggle: null };
      ({ shouldMention: obj3.shouldMention, showMentionToggle: obj3.showMentionToggle } = tmp7);
      obj[tmp6] = obj4;
      continue;
    }
    const obj6 = {};
    const merged = Object.assign(closure_6);
    const merged1 = Object.assign(obj);
    return obj6;
  }
  initialize(arg0) {
    let obj = arg0;
    this.waitFor(MessageStore, ChannelStore);
    if (arg0 == null) {
      obj = {};
    }
    closure_6 = obj;
  }
  getPendingReply(id) {
    return closure_5[id];
  }
  getPendingReplyActionSource(c0) {
    return closure_7[c0];
  }
}
const prototype = PendingReplyStore.prototype;
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
let obj = {
  CREATE_PENDING_REPLY: function handleCreatePendingReply(mediaMention) {
    let channel;
    let shouldMention;
    ({ channel, shouldMention } = mediaMention);
    const message = mediaMention.message;
    if (shouldMention === undefined) {
      shouldMention = true;
    }
    let flag = mediaMention.showMentionToggle;
    if (flag === undefined) {
      flag = true;
    }
    closure_5[channel.id] = {
      channel,
      message,
      shouldMention,
      showMentionToggle: flag,
      mediaMention: mediaMention.mediaMention,
    };
    closure_7[channel.id] = mediaMention.source;
  },
  CREATE_SHALLOW_PENDING_REPLY: function handleCreateShallowPendingReply(messageId) {
    let channel;
    let shouldMention;
    ({ channel, shouldMention } = messageId);
    messageId = messageId.messageId;
    if (shouldMention === undefined) {
      shouldMention = true;
    }
    let flag = messageId.showMentionToggle;
    if (flag === undefined) {
      flag = true;
    }
    closure_6[channel.id] = { channelId: channel.id, messageId, shouldMention, showMentionToggle: flag };
  },
  SET_PENDING_REPLY_SHOULD_MENTION: function handleSetPendingReplyShouldMention(arg0) {
    let channelId;
    let shouldMention;
    ({ channelId, shouldMention } = arg0);
    if (channelId in closure_5) {
      const obj = { shouldMention };
      const merged = Object.assign(closure_5[channelId]);
      closure_5[channelId] = obj;
    }
    if (channelId in closure_6) {
      const obj2 = { shouldMention };
      const merged1 = Object.assign(closure_6[channelId]);
      closure_6[channelId] = obj2;
    }
  },
  DELETE_PENDING_REPLY: function handleDeletePendingReply(channelId) {
    channelId = channelId.channelId;
    delete closure_5[channelId];
    delete closure_6[channelId];
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    let channel;
    const obj = SnowflakeUtilsDefault;
    const keys = obj.keys(closure_6);
    const item = keys.forEach((item) => {
      const tmp = item;
      if (null == channel.getChannel(item)) {
        delete closure_1_6[tmp];
      }
    });
  },
  LOGOUT: function handleLogout() {
    closure_5 = {};
    closure_6 = {};
    closure_7 = {};
  },
  MESSAGE_DELETE: function handleMessageDelete(arg0) {
    let channelId;
    let id;
    ({ id, channelId } = arg0);
    let id1;
    if (closure_5[channelId] != null) {
      const message = tmp.message;
      if (message != null) {
        id1 = message.id;
      }
    }
    if (id1 === id) {
      delete closure_5[channelId];
      delete closure_7[channelId];
    } else {
      let messageId;
      if (closure_6[channelId] != null) {
        messageId = tmp4.messageId;
      }
      if (messageId !== id) {
        return false;
      } else {
        delete closure_6[channelId];
        delete closure_7[channelId];
      }
    }
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      if (null != closure_6[channelId]) {
        const message = MessageStore.getMessage(channelId, tmp2.messageId);
        const channel = ChannelStore.getChannel(tmp2.channelId);
        if (null != message) {
          if (null != channel) {
            const obj = { channel, message, shouldMention: null, showMentionToggle: null };
            ({ shouldMention: obj.shouldMention, showMentionToggle: obj.showMentionToggle } = closure_6[channelId]);
            closure_5[channelId] = obj;
            delete closure_6[channelId];
          }
        }
      }
    }
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessagesSuccess(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      if (null != closure_6[channelId]) {
        const message = MessageStore.getMessage(channelId, tmp2.messageId);
        const channel = ChannelStore.getChannel(tmp2.channelId);
        if (null != message) {
          if (null != channel) {
            const obj = { channel, message, shouldMention: null, showMentionToggle: null };
            ({ shouldMention: obj.shouldMention, showMentionToggle: obj.showMentionToggle } = closure_6[channelId]);
            closure_5[channelId] = obj;
            delete closure_6[channelId];
          }
        }
      }
    }
  },
};
const pendingReplyStore = new PendingReplyStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/replies/PendingReplyStore.tsx");

export default pendingReplyStore;
