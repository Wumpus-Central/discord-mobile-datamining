// discord_app/modules/local_push_notification/native/LocalPushNotificationActionCreators.tsx
import set from "../../../../_runtime/00002_set.js";
import dispatcherDefault from "../../../Dispatcher.tsx";
import set2 from "../../channel/ChannelConstants.tsx";
import LocalNotificationTypes2 from "Constants.tsx";
import ME from "../../../Constants.tsx";

const LocalNotificationTypes = LocalNotificationTypes2.LocalNotificationTypes;
({ AnalyticEvents: c4, Routes: c5 } = ME);
const StaticChannelRoute = set2.StaticChannelRoute;
let result = set.fileFinishedImporting("modules/local_push_notification/native/LocalPushNotificationActionCreators.tsx");

export const receiveLocalNotification = function receiveLocalNotification(getData) {
  if (null != getData.getData) {
    data(7220).trackAppOpened("notification");
    data = getData.getData();
    let type = data.type;
    function dispatch() {
      let obj = closure_1_1(closure_1_2[4]);
      obj.dispatch({ type: "PUSH_NOTIFICATION_CLICK" });
      obj = { type: data.type };
      closure_1_1(closure_1_2[5]).addBreadcrumb({ message: "Notification Clicked", data: obj });
      const obj2 = closure_1_1(closure_1_2[5]);
      const tmp = closure_1_1;
      obj = { notif_type: data.type, guild_id: null };
      let guildId = null;
      if ("guildId" in data) {
        guildId = tmp4.guildId;
      }
      obj[1] = guildId;
      closure_1_1(closure_1_2[6]).track(closure_1_4.NOTIFICATION_CLICKED, obj);
      const type = tmp4.type;
      if (closure_1_3.GUILD_VERIFICATION === type) {
        const result = tmp(tmp2[7]).transitionToGuildSync(tmp4.guildId);
        const tmpResult = tmp(tmp2[7]);
      } else if (tmp8.CALL_RING === type) {
        data(tmp2[9])(tmp2[8], tmp2.paths).then((arg0) => arg0.default(channelId.channelId));
        const promise2 = data(tmp2[9])(tmp2[8], tmp2.paths);
      } else if (tmp8.MESSAGE_SEND_FAILED === type) {
        data(tmp2[9])(tmp2[10], tmp2.paths).then((transitionToMessage) => {
          ({ channelId, messageId } = closure_0);
          return transitionToMessage.transitionToMessage(channelId, messageId, { jumpType: closure_1_0(closure_1_2[11]).JumpType.INSTANT });
        });
        const promise = data(tmp2[9])(tmp2[10], tmp2.paths);
      } else if (tmp8.VIBEGRATIONS === type) {
        if (null != tmp4.guildId) {
          ({ guildId: data, projectId: closure_1 } = tmp4);
          data(tmp2[9])(tmp2[12], tmp2.paths).then((transitionTo) => transitionTo.transitionTo(closure_2_5.CHANNEL(closure_0, closure_2_6.VIBEGRATIONS, closure_1)));
          const promise3 = data(tmp2[9])(tmp2[12], tmp2.paths);
        }
      }
    }
    let obj2 = data(7220);
    if (obj.isDispatching()) {
      const _setImmediate = setImmediate;
      setImmediate(dispatch);
    } else {
      dispatch();
    }
    obj = dispatcherDefault;
  }
};