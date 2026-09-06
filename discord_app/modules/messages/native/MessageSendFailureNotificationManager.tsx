// === Module 17816: MessageSendFailureNotificationManager ===

// Module 17816 (MessageSendFailureNotificationManager)
import util from "util" /* 1114 */;
import PushNotificationDefault from "PushNotification" /* 9687 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 10094 */;
import InAppNotificationActionCreatorsDefault from "InAppNotificationActionCreators" /* 10096 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;
import UserStore from "UserStore" /* 1371 */;
import AppStateStore from "AppStateStore" /* 1895 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

require = fn;
function handleMessageSendFailure(shouldNotify) {
  ({ channelId, messageId } = shouldNotify);
  if (shouldNotify.shouldNotify) {
    if ("active" !== AppStateStore.getState()) {
      let obj = { category: "local", alertTitle: null, alertBody: null, userInfo: null };
      const intl = util.intl;
      obj.alertTitle = intl.string(util.t.LdlH2M);
      const intl2 = util.intl;
      obj.alertBody = intl2.string(util.t.xxRPOT);
      obj = { channelId, messageId, type: LocalNotificationTypes.MESSAGE_SEND_FAILED };
      obj.userInfo = obj;
      const result = obj.presentLocalNotification(obj);
    } else if (channelId !== SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId())) {
      const MESSAGE_FAILED_TO_SEND = constants.MESSAGE_FAILED_TO_SEND;
      const notificationDuration = InAppNotificationUtils.getNotificationDuration(MESSAGE_FAILED_TO_SEND);
      const obj1 = {
        type: MESSAGE_FAILED_TO_SEND,
        channelId,
        messageId,
        key: `${channelId}-${messageId}`,
        duration: notificationDuration,
        onDismiss() {
              InAppNotificationActionCreatorsDefault.clearNotification();
            },
        inAppNotificationId: null
      };
      const obj5 = InAppNotificationActionCreatorsDefault;
      obj1.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
      obj5.enqueueNotification(obj1);
    }
  }
}
function handleMessageCreate(message) {
  message = message.message;
  const sendMessageOptions = message.sendMessageOptions;
  let prop;
  if (sendMessageOptions != null) {
    prop = sendMessageOptions.isHydratingExpiredPendingMessage;
  }
  if (prop) {
    prop = message.state === constants2.SEND_FAILED;
  }
  if (prop) {
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    const author = message.author;
    let id1;
    if (author != null) {
      id1 = author.id;
    }
    prop = id === id1;
  }
  if (prop) {
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      handleMessageSendFailure({ channelId: message.channel_id, messageId: message.id, shouldNotify: true });
    }, 3000);
  }
}
const Constants = fn(1074);
({ InAppNotificationTypes: closure_7, MessageStates: closure_8 } = Constants);
const LocalNotificationTypes = fn(13716).LocalNotificationTypes;
let prototype = function MessageSendFailureNotificationManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { MESSAGE_CREATE: handleMessageCreate, MESSAGE_SEND_FAILED: handleMessageSendFailure };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
prototype = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/MessageSendFailureNotificationManager.tsx");

export default prototype;