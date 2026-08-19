// === Module 11764: isMessagePreviewEnabledForChannel ===

// Module 11764 (isMessagePreviewEnabledForChannel)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import createMinimalMessageRecord from "createMinimalMessageRecord" /* 4803 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import processChannel from "processChannel" /* 4799 */;
import processChannel2 from "processChannel" /* 4800 */;

require = fn;
function isMessagePreviewEnabledForChannel(id) {
  let isMessageRequestResult = closure_3.isMessageRequest(id);
  if (!isMessageRequestResult) {
    isMessageRequestResult = closure_4.isSpam(id);
  }
  return isMessageRequestResult;
}
function storeMessagePreview(id, arg1) {
  let isMessageRequestResult = closure_3.isMessageRequest(id);
  if (!isMessageRequestResult) {
    isMessageRequestResult = closure_4.isSpam(id);
  }
  if (isMessageRequestResult) {
    if (true) {
      let messageRecord = null;
      if (!flag2) {
        let obj = createMinimalMessageRecord;
        messageRecord = obj.createMessageRecord(null);
      }
      obj = { loaded: true, error: null, message: null };
      obj[1] = flag;
      obj[2] = messageRecord;
      closure_5[id] = obj;
    } else {
      // // eliminated: always false
    }
  }
}
let closure_5 = {};
let set = new Set();
const Store = initializeDefault.Store;
class MessageRequestPreviewStore extends Store {
}
const prototype = MessageRequestPreviewStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_3, closure_4, closure_2);
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
const messageRequestPreviewStore = new MessageRequestPreviewStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_5 = {};
    set.clear();
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    const id = channel.id;
    let isMessageRequestResult = closure_3.isMessageRequest(id);
    if (!isMessageRequestResult) {
      isMessageRequestResult = closure_4.isSpam(id);
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
      let isMessageRequestResult = closure_3.isMessageRequest(channel_id);
      if (!isMessageRequestResult) {
        isMessageRequestResult = closure_4.isSpam(channel_id);
      }
      if (isMessageRequestResult) {
        if (null == message) {
          let messageRecord = null;
          if (null != message) {
            let obj = createMinimalMessageRecord;
            messageRecord = obj.createMessageRecord(message);
          }
          obj = { loaded: true, error: null, message: null };
          obj[1] = false;
          obj[2] = messageRecord;
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
          obj.message = createMinimalMessageRecord.updateMessageRecord(tmp2.message, message.message);
          dependencyMap[channel_id] = obj;
        }
        tmp3 = tmp4;
      }
      return tmp3;
    }
  },
  MESSAGE_DELETE: function handleMessageDelete(channelId) {
    channelId = channelId.channelId;
    let isMessageRequestResult = closure_3.isMessageRequest(channelId);
    if (!isMessageRequestResult) {
      isMessageRequestResult = closure_4.isSpam(channelId);
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
    const item = supplementalData.forEach((item, index) => {
      ({ channel_id, message_preview } = item);
      let isMessageRequestResult = closure_1_3.isMessageRequest(channel_id);
      if (!isMessageRequestResult) {
        isMessageRequestResult = closure_1_4.isSpam(channel_id);
      }
      if (isMessageRequestResult) {
        if (null == message_preview) {
          let messageRecord = null;
          if (null != message_preview) {
            let obj = set(dependencyMap[3]);
            messageRecord = obj.createMessageRecord(message_preview);
          }
          obj = { loaded: true, error: null, message: null };
          obj[1] = false;
          obj[2] = messageRecord;
          closure_1_5[channel_id] = obj;
        } else {
          channel_id = undefined;
          if (message_preview != null) {
            channel_id = message_preview.channel_id;
          }
        }
      }
      set.delete(item.channel_id);
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
    const item = requestedChannelIds.forEach((item, index) => {
      let isMessageRequestResult = messageRequest.isMessageRequest(item);
      if (!isMessageRequestResult) {
        isMessageRequestResult = spam.isSpam(item);
      }
      if (isMessageRequestResult) {
        const obj = { loaded: true, error: null, message: null };
        obj[1] = true;
        obj[2] = null;
        closure_5[item] = obj;
      }
    });
  }
});
const result = require("obj132").fileFinishedImporting("modules/message_request/MessageRequestPreviewStore.tsx");

export default messageRequestPreviewStore;