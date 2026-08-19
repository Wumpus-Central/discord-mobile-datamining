// === Module 17118: receiveLocalNotification ===

// Module 17118 (receiveLocalNotification)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import _modDef1208 from "module_1208" /* 1208 */;
import showTooManyUserGuildsAlertDefault from "showTooManyUserGuildsAlert" /* 6778 */;
import LocalNotificationTypes2 from "LocalNotificationTypes" /* 13263 */;

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