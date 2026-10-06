// === Module 18141: LocalPushNotificationActionCreators ===

// Module 18141 (LocalPushNotificationActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5712 */;
import Constants2 from "Constants" /* 8739 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const LocalNotificationTypes = Constants2.LocalNotificationTypes;
({ AnalyticEvents: closure_4, Routes: hasOwnProperty } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
let result = size.fileFinishedImporting("modules/local_push_notification/native/LocalPushNotificationActionCreators.tsx");

export const receiveLocalNotification = function receiveLocalNotification(getData) {
  let constants2;
  let data;
  if (null != getData.getData) {
    let obj2 = data(6997);
    obj2.trackAppOpened("notification");
    data = getData.getData();
    let type = data.type;
    function dispatch() {
      let channelId;
      let closure_1;
      let guildId;
      let obj4;
      let obj = DispatcherDefault;
      obj.dispatch({ type: "PUSH_NOTIFICATION_CLICK" });
      const obj3 = { message: "Notification Clicked", data: obj4 };
      obj4 = { type: data.type };
      const obj2 = SentryUtilsDefault;
      obj2.addBreadcrumb(obj3);
      const obj5 = { notif_type: data.type, guild_id: guildId };
      guildId = null;
      const track = AnalyticsUtilsDefault.track;
      const NOTIFICATION_CLICKED = constants2.NOTIFICATION_CLICKED;
      AnalyticsUtilsDefault;
      if ("guildId" in data) {
        guildId = data.guildId;
      }
      track(NOTIFICATION_CLICKED, obj5);
      const type = data.type;
      if (constants.GUILD_VERIFICATION === type) {
        const tmpResult = GuildActionCreatorsDefault;
        const result = tmpResult.transitionToGuildSync(data.guildId);
      } else if (constants.CALL_RING === type) {
        const promise2 = data(dependencyMap[9])(dependencyMap[8], dependencyMap.paths);
        promise2.then((result) => result.default(data.channelId));
      } else if (constants.MESSAGE_SEND_FAILED === type) {
        const promise = data(dependencyMap[9])(dependencyMap[10], dependencyMap.paths);
        promise.then((transitionToMessage) => {
          let messageId;
          ({ channelId, messageId } = data);
          const obj = { jumpType: data(dependencyMap[11]).JumpType.INSTANT };
          return transitionToMessage.transitionToMessage(channelId, messageId, obj);
        });
      } else if (constants.CONJURE === type) {
        if (null != data.guildId) {
          ({ guildId: data, projectId: closure_1 } = data);
          const promise3 = data(dependencyMap[9])(dependencyMap[12], dependencyMap.paths);
          promise3.then((transitionTo) => transitionTo.transitionTo(hasOwnProperty.CHANNEL(data, StaticChannelRoute.CONJURE, closure_1)));
        }
      }
    }
    let obj = DispatcherDefault;
    if (obj.isDispatching()) {
      const _setImmediate = setImmediate;
      setImmediate(dispatch);
    } else {
      dispatch();
    }
  }
};