// === Module 16826: receiveLocalNotification ===

// Module 16826 (receiveLocalNotification)
import { LocalNotificationTypes } from "LocalNotificationTypes";
import { AnalyticEvents } from "ME";

let result = require("getDeviceMetadata").fileFinishedImporting("modules/local_push_notification/native/LocalPushNotificationActionCreators.tsx");

export const receiveLocalNotification = function receiveLocalNotification(getData) {
  if (null != getData.getData) {
    data(6831).trackAppOpened("notification");
    data = getData.getData();
    let type = data.type;
    function dispatch() {
      let obj = outer1_1(outer1_2[3]);
      obj.dispatch({ type: "PUSH_NOTIFICATION_CLICK" });
      obj = { type: data.type };
      outer1_1(outer1_2[4]).addBreadcrumb({ message: "Notification Clicked", data: obj });
      const obj2 = outer1_1(outer1_2[4]);
      const tmp = outer1_1;
      obj = { notif_type: data.type, guild_id: null };
      let guildId = null;
      if ("guildId" in data) {
        guildId = tmp4.guildId;
      }
      obj[1] = guildId;
      outer1_1(outer1_2[5]).track(outer1_4.NOTIFICATION_CLICKED, obj);
      const type = tmp4.type;
      if (outer1_3.GUILD_VERIFICATION === type) {
        const result = tmp(tmp2[6]).transitionToGuildSync(tmp4.guildId);
        const tmpResult = tmp(tmp2[6]);
      } else if (tmp8.CALL_RING === type) {
        data(tmp2[8])(tmp2[7], tmp2.paths).then((arg0) => arg0.default(channelId.channelId));
        const promise2 = data(tmp2[8])(tmp2[7], tmp2.paths);
      } else if (tmp8.MESSAGE_SEND_FAILED === type) {
        data(tmp2[8])(tmp2[9], tmp2.paths).then((transitionToMessage) => {
          let channelId;
          let messageId;
          ({ channelId, messageId } = closure_0);
          return transitionToMessage.transitionToMessage(channelId, messageId, { jumpType: outer1_0(outer1_2[10]).JumpType.INSTANT });
        });
        const promise = data(tmp2[8])(tmp2[9], tmp2.paths);
      }
    }
    let obj2 = data(6831);
    if (obj.isDispatching()) {
      const _setImmediate = setImmediate;
      setImmediate(dispatch);
    } else {
      dispatch();
    }
    obj = importDefault(709);
  }
};