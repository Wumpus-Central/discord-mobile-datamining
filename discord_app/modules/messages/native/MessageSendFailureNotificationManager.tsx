// === Module 19240: MessageSendFailureNotificationManager ===

// Module 19240 (MessageSendFailureNotificationManager)
import util from "util" /* 1128 */;
import PushNotificationDefault from "PushNotification" /* 10723 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 13678 */;
import InAppNotificationActionCreatorsDefault from "InAppNotificationActionCreators" /* 13680 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4872 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4995 */;
import UserStore from "UserStore" /* 1392 */;
import AppStateStore from "AppStateStore" /* 2001 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7200 */;

require = fn;
function handleMessageSendFailure(shouldNotify) {
  ({ channelId, messageId } = shouldNotify);
  if (shouldNotify.shouldNotify) {
    if ("active" !== AppStateStore.getState()) {
      const obj2 = { category: "local", alertTitle: null, alertBody: null, userInfo: null };
      const intl = util.intl;
      obj2.alertTitle = intl.string(util.t.LdlH2M);
      const intl2 = util.intl;
      obj2.alertBody = intl2.string(util.t.xxRPOT);
      const obj3 = { channelId, messageId, type: LocalNotificationTypes.MESSAGE_SEND_FAILED };
      obj2.userInfo = obj3;
      const result = PushNotificationDefault.presentLocalNotification(obj2);
    } else if (channelId !== SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId())) {
      const MESSAGE_FAILED_TO_SEND = constants.MESSAGE_FAILED_TO_SEND;
      const notificationDuration = InAppNotificationUtils.getNotificationDuration(MESSAGE_FAILED_TO_SEND);
      const obj6 = {
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
      obj6.inAppNotificationId = InAppNotificationUtils.generateInAppNotificationId();
      obj5.enqueueNotification(obj6);
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
const Constants = fn(1087);
({ InAppNotificationTypes: closure_7, MessageStates: closure_8 } = Constants);
const LocalNotificationTypes = fn(10713).LocalNotificationTypes;
const prototype = function MessageSendFailureNotificationManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { MESSAGE_CREATE: handleMessageCreate, MESSAGE_SEND_FAILED: handleMessageSendFailure };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
const prototype1 = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/MessageSendFailureNotificationManager.tsx");

export default prototype1;