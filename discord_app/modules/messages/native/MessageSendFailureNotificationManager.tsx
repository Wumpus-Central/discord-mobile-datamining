// === Module 17162: handleMessageSendFailure ===

// Module 17162 (handleMessageSendFailure)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import initializeDefault from "initialize" /* 5367 */;
import isReactionMilestoneNotification from "isReactionMilestoneNotification" /* 9924 */;
import dispatcherDefault from "dispatcher" /* 9926 */;
import NativeModulesDefault from "NativeModules" /* 10861 */;
import closure_3 from "handleConnectionOpen" /* 1981 */;
import closure_4 from "handleConnectionOpen" /* 4202 */;
import closure_5 from "mergeGuildAvatar" /* 1922 */;
import closure_6 from "getState" /* 7019 */;
import ME from "ME" /* 676 */;
import { LocalNotificationTypes } from "LocalNotificationTypes" /* 13183 */;

require = arg1;
function handleMessageSendFailure(shouldNotify) {
  ({ channelId, messageId } = shouldNotify);
  if (shouldNotify.shouldNotify) {
    if ("active" !== state.getState()) {
      let obj = NativeModulesDefault;
      obj = { category: "local", alertTitle: null, alertBody: null, userInfo: null };
      const intl = getSystemLocale.intl;
      obj[1] = intl.string(getSystemLocale.t.LdlH2M);
      const intl2 = getSystemLocale.intl;
      obj[2] = intl2.string(getSystemLocale.t.xxRPOT);
      obj = { channelId: null, messageId: null, type: null };
      obj[0] = channelId;
      obj[1] = messageId;
      obj[2] = LocalNotificationTypes.MESSAGE_SEND_FAILED;
      obj[3] = obj;
      const result = obj.presentLocalNotification(obj);
    } else if (channelId !== channelId.getChannelId(guildId.getGuildId())) {
      const MESSAGE_FAILED_TO_SEND = constants.MESSAGE_FAILED_TO_SEND;
      const notificationDuration = isReactionMilestoneNotification.getNotificationDuration(MESSAGE_FAILED_TO_SEND);
      const obj4 = isReactionMilestoneNotification;
      obj1 = { type: null, channelId: null, messageId: null, key: null, duration: null, onDismiss: null, inAppNotificationId: null };
      obj1[0] = MESSAGE_FAILED_TO_SEND;
      obj1[1] = channelId;
      obj1[2] = messageId;
      obj1[3] = `${channelId}-${messageId}`;
      obj1[4] = notificationDuration;
      obj1[5] = function onDismiss() {
        callback(table[7]).clearNotification();
      };
      const obj5 = dispatcherDefault;
      obj1[6] = isReactionMilestoneNotification.generateInAppNotificationId();
      obj5.enqueueNotification(obj1);
      const obj7 = isReactionMilestoneNotification;
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
    currentUser = currentUser.getCurrentUser();
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
      closure_1_10({ channelId: message.channel_id, messageId: message.id, shouldNotify: true });
    }, 3000);
  }
}
({ InAppNotificationTypes: error, MessageStates: closure_8 } = ME);
initializeDefault;
let prototype = function MessageSendFailureNotificationManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { MESSAGE_CREATE: handleMessageCreate, MESSAGE_SEND_FAILED: handleMessageSendFailure };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
prototype = new prototype();
let result = require("set").fileFinishedImporting("modules/messages/native/MessageSendFailureNotificationManager.tsx");

export default prototype;