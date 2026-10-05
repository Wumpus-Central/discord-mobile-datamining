// discord_app/modules/message_request/MessageRequestPreviewStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import MessageRecordUtils from "../messages/MessageRecordUtils.tsx";
import UserStore from "../../stores/UserStore.tsx";
import MessageRequestStore from "MessageRequestStore.tsx";
import SpamMessageRequestStore from "SpamMessageRequestStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_5;

function isMessagePreviewEnabledForChannel(id) {
  const isMessageRequestResult = MessageRequestStore.isMessageRequest(id) || SpamMessageRequestStore.isSpam(id);
  return isMessageRequestResult;
}
function storeMessagePreview(id, arg1) {
  const isMessageRequestResult = MessageRequestStore.isMessageRequest(id) || SpamMessageRequestStore.isSpam(id);
  if (isMessageRequestResult) {
    if (true) {
      let messageRecord = null;
      if (!true) {
        const obj = MessageRecordUtils;
        messageRecord = obj.createMessageRecord(null);
      }
      const obj2 = { loaded: true, error: false, message: messageRecord };
      closure_5[id] = obj2;
    } else {
      // // eliminated: always false
    }
  }
}
const hasOwnProperty = {};
let set = new Set();
const Store = get_initializedDefault.Store;
class MessageRequestPreviewStore extends Store {
  initialize() {
    this.waitFor(MessageRequestStore, SpamMessageRequestStore, UserStore);
  }
  shouldLoadMessageRequestPreview(id) {
    return !set.has(id);
  }
  getMessageRequestPreview(id) {
    if (!(id in closure_5)) {
      closure_5[id] = { loaded: false, error: false, message: null };
    }
    return closure_5[id];
  }
}
const prototype = MessageRequestPreviewStore.prototype;
MessageRequestPreviewStore.displayName = "MessageRequestPreviewStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_5 = {};
    set.clear();
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    const id = channel.id;
    const isMessageRequestResult = MessageRequestStore.isMessageRequest(id) || SpamMessageRequestStore.isSpam(id);
    if (isMessageRequestResult) {
      set.add(channel.id);
    }
  },
  CHANNEL_UPDATES: function handleChannelUpdates(arg0) {
    const iter = arg0.channels[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      if (!isMessagePreviewEnabledForChannel(nextResult.id)) {
        let deleteResult = set.delete(tmp2.id);
        delete closure_5[tmp2.id];
      }
      continue;
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    set.delete(channel.id);
    delete closure_5[channel.id];
  },
  MESSAGE_CREATE: function handleMessageCreate(isPushNotification) {
    if (isPushNotification.isPushNotification) {
      return false;
    } else {
      const channel_id = isPushNotification.message.channel_id;
      const message = isPushNotification.message;
      const isMessageRequestResult =
        MessageRequestStore.isMessageRequest(channel_id) || SpamMessageRequestStore.isSpam(channel_id);
      if (isMessageRequestResult) {
        if (null == message) {
          let messageRecord = null;
          if (null != message) {
            const obj = MessageRecordUtils;
            messageRecord = obj.createMessageRecord(message);
          }
          const obj2 = { loaded: true, error: false, message: messageRecord };
          closure_5[channel_id] = obj2;
        } else {
          let channel_id1;
          if (message != null) {
            channel_id1 = message.channel_id;
          }
        }
      }
    }
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    let obj2;
    const channel_id = message.message.channel_id;
    if (null == channel_id) {
      return false;
    } else {
      let tmp3 = null != tmp2;
      if (tmp3) {
        if (null != closure_5[channel_id].message) {
          const obj = { message: obj2.updateMessageRecord(closure_5[channel_id].message, message.message) };
          const merged = Object.assign(tmp2);
          closure_5[channel_id] = obj;
          obj2 = MessageRecordUtils;
        }
        tmp3 = tmp4;
      }
      return tmp3;
    }
  },
  MESSAGE_DELETE: function handleMessageDelete(channelId) {
    channelId = channelId.channelId;
    const isMessageRequestResult =
      MessageRequestStore.isMessageRequest(channelId) || SpamMessageRequestStore.isSpam(channelId);
    if (isMessageRequestResult) {
      closure_5[channelId.channelId] = { loaded: true, error: false, message: null };
    } else {
      return false;
    }
  },
  LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: function handleLoadMessageRequestsSupplementalDataSuccess(
    supplementalData,
  ) {
    supplementalData = supplementalData.supplementalData;
    const items = [...supplementalData.requestedChannelIds];
    set = new Set(items);
    const item = supplementalData.forEach((channel_id) => {
      let message_preview;
      ({ channel_id, message_preview } = channel_id);
      const isMessageRequestResult =
        MessageRequestStore.isMessageRequest(channel_id) || SpamMessageRequestStore.isSpam(channel_id);
      if (isMessageRequestResult) {
        if (null == message_preview) {
          let messageRecord = null;
          if (null != message_preview) {
            const obj = MessageRecordUtils;
            messageRecord = obj.createMessageRecord(message_preview);
          }
          const obj2 = { loaded: true, error: false, message: messageRecord };
          closure_5[channel_id] = obj2;
        } else {
          let channel_id1;
          if (message_preview != null) {
            channel_id1 = message_preview.channel_id;
          }
        }
      }
      set.delete(channel_id.channel_id);
    });
    const arr = Array.from(set);
    const tmp4 = arr[Symbol.iterator]();
    while (tmp4 !== undefined) {
      let tmp7 = storeMessagePreview(tmp5, null);
      continue;
    }
  },
  LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR: function handleLoadMessageRequestsSupplementalDataError(
    requestedChannelIds,
  ) {
    let messageRequest;
    let spam;
    requestedChannelIds = requestedChannelIds.requestedChannelIds;
    const item = requestedChannelIds.forEach((item) => {
      const isMessageRequestResult = messageRequest.isMessageRequest(item) || spam.isSpam(item);
      if (isMessageRequestResult) {
        const obj = { loaded: true, error: true, message: null };
        closure_1_5[item] = obj;
      }
    });
  },
};
const messageRequestPreviewStore = new MessageRequestPreviewStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/message_request/MessageRequestPreviewStore.tsx");

export default messageRequestPreviewStore;
