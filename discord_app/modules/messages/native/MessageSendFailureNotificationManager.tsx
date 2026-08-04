// discord_app/modules/messages/native/MessageSendFailureNotificationManager.tsx
import handleConnectionOpen from "handleConnectionOpen";
import closure_4 from "handleConnectionOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import getState from "getState";
import ME from "ME";
import { LocalNotificationTypes } from "LocalNotificationTypes";
import "initialize";

let error;
let metroImportAll;
const require = arg1;
function handleMessageSendFailure(shouldNotify) {
  let channelId;
  let messageId;
  ({ channelId, messageId } = shouldNotify);
  if (shouldNotify.shouldNotify) {
    if ("active" !== state.getState()) {
      let obj = importDefault(10708);
      obj = { category: "local", alertTitle: null, alertBody: null, userInfo: null };
      const intl = require(1236) /* getSystemLocale */.intl;
      obj[1] = intl.string(require(1236) /* getSystemLocale */.t.LdlH2M);
      const intl2 = require(1236) /* getSystemLocale */.intl;
      obj[2] = intl2.string(require(1236) /* getSystemLocale */.t.xxRPOT);
      obj = { channelId: null, messageId: null, type: null };
      obj[0] = channelId;
      obj[1] = messageId;
      obj[2] = LocalNotificationTypes.MESSAGE_SEND_FAILED;
      obj[3] = obj;
      const result = obj.presentLocalNotification(obj);
    } else if (channelId !== channelId.getChannelId(guildId.getGuildId())) {
      const MESSAGE_FAILED_TO_SEND = constants.MESSAGE_FAILED_TO_SEND;
      const notificationDuration = require(10274) /* extractMetadataFromNotification */.getNotificationDuration(MESSAGE_FAILED_TO_SEND);
      const obj4 = require(10274) /* extractMetadataFromNotification */;
      const obj1 = { type: null, channelId: null, messageId: null, key: null, duration: null, onDismiss: null, inAppNotificationId: null };
      obj1[0] = MESSAGE_FAILED_TO_SEND;
      obj1[1] = channelId;
      obj1[2] = messageId;
      obj1[3] = `${channelId}-${messageId}`;
      obj1[4] = notificationDuration;
      obj1[5] = function onDismiss() {
        callback(table[7]).clearNotification();
      };
      const obj5 = importDefault(10276);
      obj1[6] = require(10274) /* extractMetadataFromNotification */.generateInAppNotificationId();
      obj5.enqueueNotification(obj1);
      const obj7 = require(10274) /* extractMetadataFromNotification */;
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
      outer1_10({ channelId: message.channel_id, messageId: message.id, shouldNotify: true });
    }, 3000);
  }
}
({ InAppNotificationTypes: error, MessageStates: metroImportAll } = ME);
let prototype = function MessageSendFailureNotificationManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { MESSAGE_CREATE: handleMessageCreate, MESSAGE_SEND_FAILED: handleMessageSendFailure };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
prototype = new prototype();
let result = require("mergeGuildAvatar").fileFinishedImporting("modules/messages/native/MessageSendFailureNotificationManager.tsx");

export default prototype;