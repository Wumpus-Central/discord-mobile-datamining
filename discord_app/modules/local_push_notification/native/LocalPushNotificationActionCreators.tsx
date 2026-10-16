// === Module 19047: LocalPushNotificationActionCreators ===

// Module 19047 (LocalPushNotificationActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import SentryUtilsDefault from "SentryUtils" /* 1257 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import ChannelConstants from "ChannelConstants" /* 2075 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6322 */;
import Constants2 from "Constants" /* 10935 */;
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

const LocalNotificationTypes = Constants2.LocalNotificationTypes;
({ AnalyticEvents: closure_4, Routes: hasOwnProperty } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
let result = size.fileFinishedImporting("modules/local_push_notification/native/LocalPushNotificationActionCreators.tsx");

export const receiveLocalNotification = function receiveLocalNotification(getData) {
  if (null != getData.getData) {
    data(7415).trackAppOpened("notification");
    data = getData.getData();
    let type = data.type;
    function dispatch() {
      DispatcherDefault.dispatch({ type: "PUSH_NOTIFICATION_CLICK" });
      const obj3 = { message: "Notification Clicked", data: { type: data.type } };
      SentryUtilsDefault.addBreadcrumb(obj3);
      const obj4 = { type: data.type };
      const obj6 = { notif_type: data.type, guild_id: null };
      let guildId = null;
      if ("guildId" in data) {
        guildId = data.guildId;
      }
      obj6.guild_id = guildId;
      AnalyticsUtilsDefault.track(constants2.NOTIFICATION_CLICKED, obj6);
      const type = data.type;
      if (constants.GUILD_VERIFICATION === type) {
        const result = GuildActionCreatorsDefault.transitionToGuildSync(data.guildId);
        const tmpResult = GuildActionCreatorsDefault;
      } else if (constants.CALL_RING === type) {
        data(2002)(12428, dependencyMap.paths).then((result) => result.default(channelId.channelId));
        const promise2 = data(2002)(12428, dependencyMap.paths);
      } else if (constants.MESSAGE_SEND_FAILED === type) {
        data(2002)(5164, dependencyMap.paths).then((transitionToMessage) => {
          ({ channelId, messageId } = closure_1_0);
          return transitionToMessage.transitionToMessage(channelId, messageId, { jumpType: data(5086).JumpType.INSTANT });
        });
        const promise = data(2002)(5164, dependencyMap.paths);
      } else if (constants.CONJURE === type) {
        if (null != data.guildId) {
          ({ guildId: data, projectId: closure_1 } = data);
          data(2002)(1114, dependencyMap.paths).then((transitionTo) => transitionTo.transitionTo(hasOwnProperty.CHANNEL(channelId, StaticChannelRoute.CONJURE, closure_1_1)));
          const promise3 = data(2002)(1114, dependencyMap.paths);
        }
      }
    }
    let obj2 = data(7415);
    if (obj.isDispatching()) {
      const _setImmediate = setImmediate;
      setImmediate(dispatch);
    } else {
      dispatch();
    }
    obj = DispatcherDefault;
  }
};