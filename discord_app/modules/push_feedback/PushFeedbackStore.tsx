// === Module 11100: PushFeedbackStore ===

// Module 11100 (PushFeedbackStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import PushNotificationConstants from "PushNotificationConstants" /* 6092 */;
import size from "module_2" /* 2 */;

const NotificationTypes = PushNotificationConstants.NotificationTypes;
let pushFeedbackMap = {};
const PersistedStore = get_initializedDefault.PersistedStore;
class PushFeedbackStore extends PersistedStore {
  initialize(pushFeedback) {
    if (null != pushFeedback) {
      pushFeedback = pushFeedback.pushFeedback;
      if (null != pushFeedback.pushFeedbackMap) {
        pushFeedbackMap = pushFeedback.pushFeedbackMap;
      }
    }
  }
  getState() {
    return { pushFeedback, pushFeedbackMap };
  }
  isEligible() {
    return null != c1;
  }
  isUserPushMessage(arg0) {
    let messageId;
    if (pushFeedback != null) {
      messageId = pushFeedback.messageId;
    }
    return messageId === arg0;
  }
  getPushFeedback(channel_id, id) {
    let messageId;
    if (pushFeedback != null) {
      messageId = pushFeedback.messageId;
    }
    let tmp2 = null;
    if (messageId === id) {
      tmp2 = null;
      if (pushFeedback.channelId === channel_id) {
        tmp2 = pushFeedback;
      }
    }
    return tmp2;
  }
}
const prototype = PushFeedbackStore.prototype;
PushFeedbackStore.displayName = "PushFeedbackStore";
PushFeedbackStore.persistKey = "PushFeedbackPersistedStore";
let obj = {
  PUSH_FEEDBACK_RECEIVED_NOTIFICATION: function handleReceivedNotification(arg0) {
    let channelId;
    let eligibleAt;
    let flag;
    let messageId;
    let notificationType;
    let viewCount;
    ({ notificationType, messageId, channelId } = arg0);
    if (NotificationTypes.TOP_MESSAGE_PUSH === notificationType) {
      flag = true;
    } else {
      flag = false;
    }
    if (flag) {
      let tmp7;
      let num2;
      let tmp3 = pushFeedbackMap[notificationType];
      if (tmp3 == null) {
        tmp3 = { messageId, channelId, pushType: notificationType };
        const obj = { messageId, channelId, pushType: notificationType };
      }
      let userViewInfo = tmp3.userViewInfo;
      if (userViewInfo == null) {
        userViewInfo = { eligibleAt: 0, viewCount: 0 };
      }
      ({ eligibleAt, viewCount } = userViewInfo);
      const _Date = Date;
      const timestamp = Date.now();
      if (eligibleAt < timestamp) {
        eligibleAt = timestamp + 604800000;
        num2 = 1;
        tmp7 = { eligibleAt, viewCount: num2 };
        const obj2 = { eligibleAt, viewCount: num2 };
      } else {
        tmp7 = null;
        if (viewCount < 10) {
          num2 = viewCount + 1;
        }
      }
      if (null != tmp7) {
        const obj3 = { messageId, channelId, pushType: notificationType, userViewInfo: tmp7 };
        let c1 = obj3;
        pushFeedbackMap[notificationType] = obj3;
      } else {
        c1 = null;
      }
    }
  },
  PUSH_FEEDBACK_CLEANUP: function handleCleanup() {
    let c1 = null;
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      if (null != pushFeedback) {
        if (channelId !== pushFeedback.channelId) {
          pushFeedback = null;
        }
      }
    }
    return false;
  }
};
const pushFeedbackStore = new PushFeedbackStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/push_feedback/PushFeedbackStore.tsx");

export default pushFeedbackStore;