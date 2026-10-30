// === Module 20059: LocalPushNotificationActionCreators ===

// Module 20059 (LocalPushNotificationActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import SentryUtilsDefault from "SentryUtils" /* 1243 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6896 */;
import Constants2 from "Constants" /* 10878 */;
import size from "module_2" /* 2 */;

const LocalNotificationTypes = Constants2.LocalNotificationTypes;
const AnalyticEvents = Constants.AnalyticEvents;
let result = size.fileFinishedImporting("modules/local_push_notification/native/LocalPushNotificationActionCreators.tsx");

export function receiveLocalNotification(getData) {
  if (null != getData.getData) {
    data(7647).trackAppOpened("notification");
    data = getData.getData();
    let type = data.type;
    function dispatch() {
      DispatcherDefault.dispatch({ type: "PUSH_NOTIFICATION_CLICK" });
      const obj3 = { message: "Notification Clicked", data: { type: projectId.type } };
      SentryUtilsDefault.addBreadcrumb(obj3);
      const obj4 = { type: projectId.type };
      const obj6 = { notif_type: projectId.type, guild_id: null };
      let guildId = null;
      if ("guildId" in projectId) {
        guildId = tmp4.guildId;
      }
      obj6.guild_id = guildId;
      AnalyticsUtilsDefault.track(constants2.NOTIFICATION_CLICKED, obj6);
      const type = tmp4.type;
      if (constants.GUILD_VERIFICATION === type) {
        const result = GuildActionCreatorsDefault.transitionToGuildSync(tmp4.guildId);
        const tmpResult = GuildActionCreatorsDefault;
      } else if (constants.CALL_RING === type) {
        data(1995)(13134, dependencyMap.paths).then((result) => result.default(projectId.channelId));
        const promise2 = data(1995)(13134, dependencyMap.paths);
      } else if (constants.MESSAGE_SEND_FAILED === type) {
        data(1995)(5751, dependencyMap.paths).then((transitionToMessage) => {
          ({ channelId, messageId } = projectId);
          return transitionToMessage.transitionToMessage(channelId, messageId, { jumpType: data(5244).JumpType.INSTANT });
        });
        const promise = data(1995)(5751, dependencyMap.paths);
      } else if (constants.CONJURE === type) {
        projectId = tmp4.projectId;
        data(1995)(10957, dependencyMap.paths).then((openConjureHomeScreenWhenReady) => openConjureHomeScreenWhenReady.openConjureHomeScreenWhenReady(projectId));
        const promise3 = data(1995)(10957, dependencyMap.paths);
      }
    }
    let obj2 = data(7647);
    if (obj.isDispatching()) {
      const _setImmediate = setImmediate;
      setImmediate(dispatch);
    } else {
      dispatch();
    }
    obj = DispatcherDefault;
  }
}