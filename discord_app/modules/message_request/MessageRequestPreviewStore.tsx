// discord_app/modules/message_request/MessageRequestPreviewStore.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import processChannel from "processChannel";
import closure_4 from "processChannel";
import { Store } from "initialize";
import set from "processChannel";

const require = arg1;
function isMessagePreviewEnabledForChannel(id) {
  let isMessageRequestResult = processChannel.isMessageRequest(id);
  if (!isMessageRequestResult) {
    isMessageRequestResult = closure_4.isSpam(id);
  }
  return isMessageRequestResult;
}
function storeMessagePreview(id, arg1) {
  let isMessageRequestResult = processChannel.isMessageRequest(id);
  if (!isMessageRequestResult) {
    isMessageRequestResult = closure_4.isSpam(id);
  }
  if (isMessageRequestResult) {
    if (true) {
      let messageRecord = null;
      if (!flag2) {
        let obj = require(4413) /* createMinimalMessageRecord */;
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
class MessageRequestPreviewStore extends Store {
}
const prototype = MessageRequestPreviewStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(processChannel, closure_4, mergeGuildAvatar);
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
const messageRequestPreviewStore = new MessageRequestPreviewStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_5 = {};
    set.clear();
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    const id = channel.id;
    let isMessageRequestResult = processChannel.isMessageRequest(id);
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
      let tmp5 = isMessagePreviewEnabledForChannel;
      if (!isMessagePreviewEnabledForChannel(nextResult.id)) {
        let tmp6 = set;
        let tmp7 = nextResult;
        let deleteResult = set.delete(tmp4.id);
        let tmp9 = closure_5;
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
      let isMessageRequestResult = processChannel.isMessageRequest(channel_id);
      if (!isMessageRequestResult) {
        isMessageRequestResult = closure_4.isSpam(channel_id);
      }
      if (isMessageRequestResult) {
        if (null == message) {
          let messageRecord = null;
          if (null != message) {
            let obj = require(4413) /* createMinimalMessageRecord */;
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
          obj.message = require(4413) /* createMinimalMessageRecord */.updateMessageRecord(tmp2.message, message.message);
          dependencyMap[channel_id] = obj;
          const obj2 = require(4413) /* createMinimalMessageRecord */;
        }
        tmp3 = tmp4;
      }
      return tmp3;
    }
  },
  MESSAGE_DELETE: function handleMessageDelete(channelId) {
    channelId = channelId.channelId;
    let isMessageRequestResult = processChannel.isMessageRequest(channelId);
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
    let set;
    const items = [...supplementalData.requestedChannelIds];
    set = new Set(items);
    const item = supplementalData.forEach((channel_id) => {
      let message_preview;
      ({ channel_id, message_preview } = channel_id);
      let isMessageRequestResult = outer1_3.isMessageRequest(channel_id);
      if (!isMessageRequestResult) {
        isMessageRequestResult = outer1_4.isSpam(channel_id);
      }
      if (isMessageRequestResult) {
        if (null == message_preview) {
          let messageRecord = null;
          if (null != message_preview) {
            let obj = set(outer1_1[3]);
            messageRecord = obj.createMessageRecord(message_preview);
          }
          obj = { loaded: true, error: null, message: null };
          obj[1] = false;
          obj[2] = messageRecord;
          outer1_5[channel_id] = obj;
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
      let tmp6 = storeMessagePreview;
      let tmp7 = storeMessagePreview(tmp5, null);
      continue;
    }
  },
  LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR: function handleLoadMessageRequestsSupplementalDataError(requestedChannelIds) {
    requestedChannelIds = requestedChannelIds.requestedChannelIds;
    const item = requestedChannelIds.forEach((id) => {
      let isMessageRequestResult = messageRequest.isMessageRequest(id);
      if (!isMessageRequestResult) {
        isMessageRequestResult = spam.isSpam(id);
      }
      if (isMessageRequestResult) {
        const obj = { loaded: true, error: null, message: null };
        obj[1] = true;
        obj[2] = null;
        closure_5[id] = obj;
      }
    });
  }
});
const result = set.fileFinishedImporting("modules/message_request/MessageRequestPreviewStore.tsx");

export default messageRequestPreviewStore;