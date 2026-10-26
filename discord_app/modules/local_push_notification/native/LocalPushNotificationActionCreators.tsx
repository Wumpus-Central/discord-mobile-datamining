// === Module 19472: LocalPushNotificationActionCreators ===

// Module 19472 (LocalPushNotificationActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1087 */;
import SentryUtilsDefault from "SentryUtils" /* 1257 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6830 */;
import Constants2 from "Constants" /* 10743 */;
import size from "module_2" /* 2 */;

const LocalNotificationTypes = Constants2.LocalNotificationTypes;
const AnalyticEvents = Constants.AnalyticEvents;
let result = size.fileFinishedImporting("modules/local_push_notification/native/LocalPushNotificationActionCreators.tsx");

export const receiveLocalNotification = function receiveLocalNotification(getData) {
  if (null != getData.getData) {
    data(7584).trackAppOpened("notification");
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
        data(2002)(12711, dependencyMap.paths).then((result) => result.default(projectId.channelId));
        const promise2 = data(2002)(12711, dependencyMap.paths);
      } else if (constants.MESSAGE_SEND_FAILED === type) {
        data(2002)(5707, dependencyMap.paths).then((transitionToMessage) => {
          ({ channelId, messageId } = projectId);
          return transitionToMessage.transitionToMessage(channelId, messageId, { jumpType: data(5201).JumpType.INSTANT });
        });
        const promise = data(2002)(5707, dependencyMap.paths);
      } else if (constants.CONJURE === type) {
        projectId = tmp4.projectId;
        data(2002)(10818, dependencyMap.paths).then((openConjureHomeScreenWhenReady) => openConjureHomeScreenWhenReady.openConjureHomeScreenWhenReady(projectId));
        const promise3 = data(2002)(10818, dependencyMap.paths);
      }
    }
    let obj2 = data(7584);
    if (obj.isDispatching()) {
      const _setImmediate = setImmediate;
      setImmediate(dispatch);
    } else {
      dispatch();
    }
    obj = DispatcherDefault;
  }
};