// discord_app/modules/push_feedback/PushFeedbackStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import PushNotificationConstants from "../push_notifications/PushNotificationConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const NotificationTypes = PushNotificationConstants.NotificationTypes;
let c1 = null;
let pushFeedbackMap = {};
const PersistedStore = initializeDefault.PersistedStore;
class PushFeedbackStore extends PersistedStore {}
const prototype = PushFeedbackStore.prototype;
prototype["initialize"] = function initialize(pushFeedback) {
  if (null != pushFeedback) {
    pushFeedback = pushFeedback.pushFeedback;
    if (null != pushFeedback.pushFeedbackMap) {
      pushFeedbackMap = pushFeedback.pushFeedbackMap;
    }
  }
};
prototype["getState"] = function getState() {
  return { pushFeedback, pushFeedbackMap };
};
prototype["isEligible"] = function isEligible() {
  return null != c1;
};
prototype["isUserPushMessage"] = function isUserPushMessage(arg0) {
  let messageId;
  if (pushFeedback != null) {
    messageId = pushFeedback.messageId;
  }
  return messageId === arg0;
};
prototype["getPushFeedback"] = function getPushFeedback(channel_id, id) {
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
};
PushFeedbackStore.displayName = "PushFeedbackStore";
PushFeedbackStore.persistKey = "PushFeedbackPersistedStore";
const pushFeedbackStore = new PushFeedbackStore(DispatcherDefault, {
  PUSH_FEEDBACK_RECEIVED_NOTIFICATION: function handleReceivedNotification(arg0) {
    ({ notificationType, messageId, channelId } = arg0);
    if (NotificationTypes.TOP_MESSAGE_PUSH === notificationType) {
      let flag = true;
    } else {
      flag = false;
    }
    if (flag) {
      let tmp3 = pushFeedbackMap[notificationType];
      if (tmp3 == null) {
        let obj = { messageId, channelId, pushType: notificationType };
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
          obj = { messageId, channelId, pushType: notificationType, userViewInfo: null };
          c1 = obj;
          pushFeedbackMap[notificationType] = obj;
        } else {
          c1 = null;
        }
      } else {
        num2 = viewCount + 1;
      }
      timestamp = { eligibleAt, viewCount: num2 };
    }
  },
  PUSH_FEEDBACK_CLEANUP: function handleCleanup() {
    c1 = null;
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
  },
});
const result = size.fileFinishedImporting("modules/push_feedback/PushFeedbackStore.tsx");

export default pushFeedbackStore;
