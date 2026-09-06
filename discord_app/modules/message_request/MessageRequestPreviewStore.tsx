// === Module 12595: MessageRequestPreviewStore ===

// Module 12595 (MessageRequestPreviewStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import MessageRecordUtils from "MessageRecordUtils" /* 4783 */;
import UserStore from "UserStore" /* 1371 */;
import MessageRequestStore from "MessageRequestStore" /* 7219 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 7220 */;

require = fn;
function isMessagePreviewEnabledForChannel(id) {
  let isMessageRequestResult = MessageRequestStore.isMessageRequest(id);
  if (!isMessageRequestResult) {
    isMessageRequestResult = SpamMessageRequestStore.isSpam(id);
  }
  return isMessageRequestResult;
}
function storeMessagePreview(id, arg1) {
  let isMessageRequestResult = MessageRequestStore.isMessageRequest(id);
  if (!isMessageRequestResult) {
    isMessageRequestResult = SpamMessageRequestStore.isSpam(id);
  }
  if (isMessageRequestResult) {
    if (true) {
      let messageRecord = null;
      if (!flag2) {
        let obj = MessageRecordUtils;
        messageRecord = obj.createMessageRecord(null);
      }
      obj = { loaded: true, error: flag, message: messageRecord };
      closure_5[id] = obj;
    } else {
      // // eliminated: always false
    }
  }
}
const dependencyMap = {};
let set = new Set();
const Store = initializeDefault.Store;
class MessageRequestPreviewStore extends Store {
}
const prototype = MessageRequestPreviewStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(MessageRequestStore, SpamMessageRequestStore, UserStore);
};
prototype["shouldLoadMessageRequestPreview"] = function shouldLoadMessageRequestPreview(id) {
  return !set.has(id);
};
prototype["getMessageRequestPreview"] = function getMessageRequestPreview(id) {
  if (!(id in dependencyMap)) {
    dependencyMap[id] = { loaded: false, error: false, message: null };
  }
  return dependencyMap[id];
};
MessageRequestPreviewStore.displayName = "MessageRequestPreviewStore";
const messageRequestPreviewStore = new MessageRequestPreviewStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_5 = {};
    set.clear();
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    const id = channel.id;
    let isMessageRequestResult = MessageRequestStore.isMessageRequest(id);
    if (!isMessageRequestResult) {
      isMessageRequestResult = SpamMessageRequestStore.isSpam(id);
    }
    if (isMessageRequestResult) {
      set.add(channel.id);
    }
  },
  CHANNEL_UPDATES: function handleChannelUpdates(arg0) {
    const iter = arg0.channels[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      if (!isMessagePreviewEnabledForChannel(nextResult.id)) {
        let deleteResult = set.delete(tmp4.id);
        let id = tmp4.id;
        delete tmp2[tmp];
      }
      continue;
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    set.delete(channel.channel.id);
    delete tmp2[tmp];
  },
  MESSAGE_CREATE: function handleMessageCreate(isPushNotification) {
    if (isPushNotification.isPushNotification) {
      return false;
    } else {
      let channel_id = isPushNotification.message.channel_id;
      const message = isPushNotification.message;
      let isMessageRequestResult = MessageRequestStore.isMessageRequest(channel_id);
      if (!isMessageRequestResult) {
        isMessageRequestResult = SpamMessageRequestStore.isSpam(channel_id);
      }
      if (isMessageRequestResult) {
        if (null == message) {
          let messageRecord = null;
          if (null != message) {
            let obj = MessageRecordUtils;
            messageRecord = obj.createMessageRecord(message);
          }
          obj = { loaded: true, error: false, message: messageRecord };
          closure_5[channel_id] = obj;
        } else {
          channel_id = undefined;
          if (message != null) {
            channel_id = message.channel_id;
          }
        }
      }
    }
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    const channel_id = message.message.channel_id;
    if (null == channel_id) {
      return false;
    } else {
      let tmp3 = null != tmp2;
      if (tmp3) {
        if (null != tmp2.message) {
          const obj = {};
          const merged = Object.assign(tmp2);
          obj.message = MessageRecordUtils.updateMessageRecord(tmp2.message, message.message);
          dependencyMap[channel_id] = obj;
        }
        tmp3 = tmp4;
      }
      return tmp3;
    }
  },
  MESSAGE_DELETE: function handleMessageDelete(channelId) {
    channelId = channelId.channelId;
    let isMessageRequestResult = MessageRequestStore.isMessageRequest(channelId);
    if (!isMessageRequestResult) {
      isMessageRequestResult = SpamMessageRequestStore.isSpam(channelId);
    }
    if (isMessageRequestResult) {
      closure_5[channelId.channelId] = { loaded: true, error: false, message: null };
    } else {
      return false;
    }
  },
  LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: function handleLoadMessageRequestsSupplementalDataSuccess(supplementalData) {
    supplementalData = supplementalData.supplementalData;
    const items = [...supplementalData.requestedChannelIds];
    set = new Set(items);
    const item = supplementalData.forEach((channel_id) => {
      ({ channel_id, message_preview } = channel_id);
      let isMessageRequestResult = MessageRequestStore.isMessageRequest(channel_id);
      if (!isMessageRequestResult) {
        isMessageRequestResult = SpamMessageRequestStore.isSpam(channel_id);
      }
      if (isMessageRequestResult) {
        if (null == message_preview) {
          let messageRecord = null;
          if (null != message_preview) {
            let obj = MessageRecordUtils;
            messageRecord = obj.createMessageRecord(message_preview);
          }
          obj = { loaded: true, error: false, message: messageRecord };
          closure_5[channel_id] = obj;
        } else {
          channel_id = undefined;
          if (message_preview != null) {
            channel_id = message_preview.channel_id;
          }
        }
      }
      set.delete(channel_id.channel_id);
    });
    const arr = Array.from(set);
    while (tmp4 !== undefined) {
      let tmp7 = storeMessagePreview(tmp5, null);
      continue;
    }
    tmp4 = Array.from(set)[Symbol.iterator]();
  },
  LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR: function handleLoadMessageRequestsSupplementalDataError(requestedChannelIds) {
    requestedChannelIds = requestedChannelIds.requestedChannelIds;
    const item = requestedChannelIds.forEach((item) => {
      let isMessageRequestResult = messageRequest.isMessageRequest(item);
      if (!isMessageRequestResult) {
        isMessageRequestResult = spam.isSpam(item);
      }
      if (isMessageRequestResult) {
        const obj = { loaded: true, error: true, message: null };
        dependencyMap[item] = obj;
      }
    });
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/MessageRequestPreviewStore.tsx");

export default messageRequestPreviewStore;