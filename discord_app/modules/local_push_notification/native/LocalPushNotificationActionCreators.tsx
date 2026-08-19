// discord_app/modules/local_push_notification/native/LocalPushNotificationActionCreators.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ME from "../../../Constants.tsx";
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";
import _modDef1208 from "../../../utils/SentryUtils.native.tsx";
import showTooManyUserGuildsAlertDefault from "../../../actions/GuildActionCreators.tsx";
import LocalNotificationTypes2 from "Constants.tsx";

const LocalNotificationTypes = LocalNotificationTypes2.LocalNotificationTypes;
const AnalyticEvents = ME.AnalyticEvents;
let result = obj132.fileFinishedImporting("modules/local_push_notification/native/LocalPushNotificationActionCreators.tsx");

export const receiveLocalNotification = function receiveLocalNotification(getData) {
  if (null != getData.getData) {
    data(5066).trackAppOpened("notification");
    data = getData.getData();
    let type = data.type;
    function dispatch() {
      let obj = dispatcherDefault;
      obj.dispatch({ type: "PUSH_NOTIFICATION_CLICK" });
      obj = { type: data.type };
      _modDef1208.addBreadcrumb({ message: "Notification Clicked", data: obj });
      obj = { notif_type: data.type, guild_id: null };
      let guildId = null;
      if ("guildId" in data) {
        guildId = data.guildId;
      }
      obj[1] = guildId;
      expandEventPropertiesDefault.track(AnalyticEvents.NOTIFICATION_CLICKED, obj);
      const type = data.type;
      if (LocalNotificationTypes.GUILD_VERIFICATION === type) {
        const result = showTooManyUserGuildsAlertDefault.transitionToGuildSync(data.guildId);
        const tmpResult = showTooManyUserGuildsAlertDefault;
      } else if (LocalNotificationTypes.CALL_RING === type) {
        data(dependencyMap[8])(dependencyMap[7], dependencyMap.paths).then((result) => result.default(channelId.channelId));
        const promise2 = data(dependencyMap[8])(dependencyMap[7], dependencyMap.paths);
      } else if (LocalNotificationTypes.MESSAGE_SEND_FAILED === type) {
        data(dependencyMap[8])(dependencyMap[9], dependencyMap.paths).then((result) => {
          ({ channelId, messageId } = closure_0);
          return result.transitionToMessage(channelId, messageId, { jumpType: data(closure_1_2[10]).JumpType.INSTANT });
        });
        const promise = data(dependencyMap[8])(dependencyMap[9], dependencyMap.paths);
      }
    }
    let obj2 = data(5066);
    if (obj.isDispatching()) {
      const _setImmediate = setImmediate;
      setImmediate(dispatch);
    } else {
      dispatch();
    }
    obj = dispatcherDefault;
  }
};