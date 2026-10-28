// === Module 14532: RequestToStreamStore ===

// Module 14532 (RequestToStreamStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import MessageRecordUtils from "MessageRecordUtils" /* 6047 */;
import StreamKeyUtilsAll from "StreamKeyUtils" /* 6680 */;
import RequestToStreamNewEntryPointExperimentDefault from "RequestToStreamNewEntryPointExperiment" /* 14533 */;
import _slicedToArray from "module_32" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5750 */;

require = fn;
const ActivityActionTypes = fn(1084).ActivityActionTypes;
let closure_8 = {};
const dependencyMap = {};
let c10 = null;
const set = new Set();
let c12 = null;
const Store = initializeDefault.Store;
class RequestToStreamStore extends Store {
}
const prototype = RequestToStreamStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore, RTCConnectionStore);
};
prototype["getPendingRequestForUser"] = function getPendingRequestForUser(userId) {
  return dependencyMap[userId];
};
prototype["isRequestOnCooldown"] = function isRequestOnCooldown(id) {
  return set.has(id);
};
prototype["getMostRecentInboundRequest"] = function getMostRecentInboundRequest() {
  return c12;
};
const requestToStreamStore = new RequestToStreamStore(DispatcherDefault, {
  STREAM_WATCH: function handleStreamWatch(arg0) {
    const obj = StreamKeyUtilsAll;
    if (null != dependencyMap[obj.decodeStreamKey(obj, arg0.streamKey).ownerId]) {
      delete tmp[tmp2];
    } else {
      return false;
    }
  },
  STREAM_REQUEST_COOLDOWN_START: function handleStreamRequestCooldownStart(userId) {
    userId = userId.userId;
    if (set.has(userId)) {
      return false;
    } else {
      set.add(userId);
    }
  },
  STREAM_REQUEST_COOLDOWN_END: function handleStreamRequestCooldownEnd(userId) {
    userId = userId.userId;
    if (set.has(userId)) {
      set.delete(userId);
    } else {
      return false;
    }
  },
  STREAM_REQUEST_REMINDER_DISMISS: function handleStreamRequestReminderDismiss(messageId) {
    let id;
    if (_null != null) {
      id = _null.id;
    }
    if (id !== messageId.messageId) {
      return false;
    } else {
      _null = null;
    }
  },
  STREAM_START: function handleStreamStart() {
    if (null == c12) {
      return false;
    } else {
      c12 = null;
    }
  },
  MESSAGE_CREATE: function handleMessageCreate(arg0) {
    ({ sendMessageOptions, message } = arg0);
    let id;
    ({ channelId, optimistic } = arg0);
    if (channelId !== RTCConnectionStore.getChannelId()) {
      return false;
    } else if (optimistic) {
      let targetUserId;
      if (sendMessageOptions != null) {
        const activityAction = sendMessageOptions.activityAction;
        if (activityAction != null) {
          targetUserId = activityAction.targetUserId;
        }
      }
      if (null != targetUserId) {
        closure_8[message.id] = targetUserId;
      }
      return false;
    } else {
      const activity = message.activity;
      let type;
      if (activity != null) {
        type = activity.type;
      }
      if (type !== ActivityActionTypes.STREAM_REQUEST) {
        return false;
      } else {
        id = AuthenticationStore.getId();
        const author = message.author;
        let id1;
        if (author != null) {
          id1 = author.id;
        }
        if (id1 !== id) {
          const mentions = message.mentions;
          let someResult;
          if (mentions != null) {
            someResult = mentions.some((id) => id.id === id);
          }
          let tmp13 = someResult;
          if (tmp13) {
            const showReminderPanel = RequestToStreamNewEntryPointExperimentDefault.getConfig({ location: "RequestToStreamStore" }).showReminderPanel;
            if (showReminderPanel) {
              c12 = MessageRecordUtils.createMessageRecord(message);
            }
            tmp13 = showReminderPanel;
          }
          return tmp13;
        } else if (null == message.nonce) {
          return false;
        } else if (null == closure_8[message.nonce]) {
          return false;
        } else {
          const nonce = message.nonce;
          delete tmp2[tmp];
          const obj = {};
          const merged = Object.assign(closure_9);
          obj[tmp7] = message.id;
          closure_9 = obj;
        }
      }
    }
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    id = id.id;
    delete tmp[tmp2];
    let id1;
    if (_null != null) {
      id1 = _null.id;
    }
    if (id1 === id) {
      _null = null;
    }
    const entries = Object.entries(closure_9);
    while (tmp7 !== undefined) {
      let tmp10 = _slicedToArray(tmp8, 2);
      if (id === tmp10[1]) {
        delete tmp4[tmp3];
      }
      continue;
    }
    tmp7 = entries[Symbol.iterator]();
  },
  VOICE_CHANNEL_SELECT: function handleSelectVoiceChannel(channelId) {
    if (channelId.channelId === channelId.currentVoiceChannelId) {
      return false;
    } else {
      closure_9 = {};
      closure_8 = {};
      c12 = null;
    }
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates() {
    if (RTCConnectionStore.getWasMoved()) {
      if (RTCConnectionStore.getChannelId() === channelId) {
        return false;
      } else {
        channelId = RTCConnectionStore.getChannelId();
        closure_9 = {};
        closure_8 = {};
        c12 = null;
      }
    } else if (null == channelId) {
      return false;
    } else {
      channelId = null;
    }
  },
  LOGOUT: function resetStateAndCooldowns() {
    closure_9 = {};
    closure_8 = {};
    c12 = null;
    set.clear();
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/request_to_stream/RequestToStreamStore.tsx");

export default requestToStreamStore;