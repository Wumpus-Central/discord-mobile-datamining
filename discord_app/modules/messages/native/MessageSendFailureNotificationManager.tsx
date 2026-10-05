// discord_app/modules/messages/native/MessageSendFailureNotificationManager.tsx
import intl3 from "../../../intl/index.native.tsx";
import Constants2 from "../../local_push_notification/native/Constants.tsx";
import PushNotificationDefault from "../../../lib/pushnotification/PushNotification.tsx";
import InAppNotificationUtils from "../../in_app_notifications/native/InAppNotificationUtils.tsx";
import InAppNotificationActionCreatorsDefault from "../../../actions/native/InAppNotificationActionCreators.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";
import Constants from "../../../Constants.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let metroImportAll;
let metroImportDefault;
function handleMessageSendFailure(shouldNotify) {
  let channelId;
  let intl;
  let intl2;
  let messageId;
  let obj2;
  let obj5;
  ({ channelId, messageId } = shouldNotify);
  if (shouldNotify.shouldNotify) {
    if ("active" !== AppStateStore.getState()) {
      let obj = {
        category: "local",
        alertTitle: intl.string(intl3.t.LdlH2M),
        alertBody: intl2.string(intl3.t.xxRPOT),
        userInfo: obj2,
      };
      const presentLocalNotification = PushNotificationDefault.presentLocalNotification;
      PushNotificationDefault;
      intl = intl3.intl;
      intl2 = intl3.intl;
      obj2 = { channelId, messageId, type: LocalNotificationTypes.MESSAGE_SEND_FAILED };
      const result = presentLocalNotification(obj);
    } else if (channelId !== SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId())) {
      const MESSAGE_FAILED_TO_SEND = metroImportDefault.MESSAGE_FAILED_TO_SEND;
      const obj3 = InAppNotificationUtils;
      const notificationDuration = obj3.getNotificationDuration(MESSAGE_FAILED_TO_SEND);
      const obj4 = {
        type: MESSAGE_FAILED_TO_SEND,
        channelId,
        messageId,
        key: `${channelId}-${messageId}`,
        duration: notificationDuration,
        onDismiss() {
          const obj = InAppNotificationActionCreatorsDefault;
          obj.clearNotification();
        },
        inAppNotificationId: obj5.generateInAppNotificationId(),
      };
      const enqueueNotification = InAppNotificationActionCreatorsDefault.enqueueNotification;
      InAppNotificationActionCreatorsDefault;
      obj5 = InAppNotificationUtils;
      enqueueNotification(obj4);
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
      const obj = { channelId: message.channel_id, messageId: message.id, shouldNotify: true };
      handleMessageSendFailure(obj);
    }, 3000);
  }
}
({ InAppNotificationTypes: metroImportDefault, MessageStates: metroImportAll } = Constants);
const LocalNotificationTypes = Constants2.LocalNotificationTypes;
class MessageSendFailureNotificationManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = { MESSAGE_CREATE: handleMessageCreate, MESSAGE_SEND_FAILED: handleMessageSendFailure };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const messageSendFailureNotificationManager = new MessageSendFailureNotificationManager();
let result = size.fileFinishedImporting("modules/messages/native/MessageSendFailureNotificationManager.tsx");

export default messageSendFailureNotificationManager;
