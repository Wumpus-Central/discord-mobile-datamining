// === Module 11428: initialize ===

// Module 11428 (initialize)
import set from "set" /* 2 */;
import initializeDefault from "initialize" /* 504 */;
import dispatcherDefault from "dispatcher" /* 573 */;
import str2 from "str2" /* 6596 */;

const NotificationTypes = str2.NotificationTypes;
let c1 = null;
let closure_2 = {};
const PersistedStore = initializeDefault.PersistedStore;
class PushFeedbackStore extends PersistedStore {
}
const prototype = PushFeedbackStore.prototype;
prototype["initialize"] = function initialize(pushFeedback) {
  if (null != pushFeedback) {
    pushFeedback = pushFeedback.pushFeedback;
    if (null != pushFeedback.pushFeedbackMap) {
      const pushFeedbackMap = pushFeedback.pushFeedbackMap;
    }
  }
};
prototype["getState"] = function getState() {
  return { pushFeedback: c1, pushFeedbackMap: closure_2 };
};
prototype["isEligible"] = function isEligible() {
  return null != c1;
};
prototype["isUserPushMessage"] = function isUserPushMessage(arg0) {
  let messageId;
  if (_null != null) {
    messageId = _null.messageId;
  }
  return messageId === arg0;
};
prototype["getPushFeedback"] = function getPushFeedback(channel_id, id) {
  let messageId;
  if (_null != null) {
    messageId = _null.messageId;
  }
  let tmp2 = null;
  if (messageId === id) {
    tmp2 = null;
    if (_null.channelId === channel_id) {
      tmp2 = _null;
    }
  }
  return tmp2;
};
PushFeedbackStore.displayName = "PushFeedbackStore";
PushFeedbackStore.persistKey = "PushFeedbackPersistedStore";
const pushFeedbackStore = new PushFeedbackStore(dispatcherDefault, {
  PUSH_FEEDBACK_RECEIVED_NOTIFICATION: function handleReceivedNotification(arg0) {
    ({ notificationType, messageId, channelId } = arg0);
    if (NotificationTypes.TOP_MESSAGE_PUSH === notificationType) {
      let flag = true;
    } else {
      flag = false;
    }
    if (flag) {
      let tmp3 = table[notificationType];
      if (tmp3 == null) {
        let obj = { messageId: null, channelId: null, pushType: null };
        obj[0] = messageId;
        obj[1] = channelId;
        obj[2] = notificationType;
        tmp3 = obj;
      }
      let userViewInfo = tmp3.userViewInfo;
      if (userViewInfo == null) {
        userViewInfo = { eligibleAt: 0, viewCount: 0 };
      }
      ({ eligibleAt, viewCount } = userViewInfo);
      const _Date = Date;
      let timestamp = Date.now();
      if (eligibleAt < timestamp) {
        eligibleAt = timestamp + 604800000;
        let num2 = 1;
      } else if (viewCount >= 10) {
        if (null != null) {
          obj = { messageId: null, channelId: null, pushType: null, userViewInfo: null };
          obj[0] = messageId;
          obj[1] = channelId;
          obj[2] = notificationType;
          obj[3] = null;
          c1 = obj;
          table[notificationType] = obj;
        } else {
          c1 = null;
        }
      } else {
        num2 = viewCount + 1;
      }
      timestamp = { eligibleAt: null, viewCount: null };
      timestamp[0] = eligibleAt;
      timestamp[1] = num2;
    }
  },
  PUSH_FEEDBACK_CLEANUP: function handleCleanup() {
    c1 = null;
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      if (null != _null) {
        if (channelId !== _null.channelId) {
          _null = null;
        }
      }
    }
    return false;
  }
});
const result = set.fileFinishedImporting("modules/push_feedback/PushFeedbackStore.tsx");

export default pushFeedbackStore;