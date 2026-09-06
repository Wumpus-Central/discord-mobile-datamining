// discord_app/modules/local_push_notification/native/LocalPushNotificationActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import SentryUtilsDefault from "../../../utils/SentryUtils.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ChannelConstants from "../../channel/ChannelConstants.tsx";
import GuildActionCreatorsDefault from "../../../actions/GuildActionCreators.tsx";
import Constants2 from "Constants.tsx";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const LocalNotificationTypes = Constants2.LocalNotificationTypes;
({ AnalyticEvents: closure_4, Routes: hasOwnProperty } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
let result = size.fileFinishedImporting(
  "modules/local_push_notification/native/LocalPushNotificationActionCreators.tsx",
);

export const receiveLocalNotification = function receiveLocalNotification(getData) {
  if (null != getData.getData) {
    data(7475).trackAppOpened("notification");
    data = getData.getData();
    let type = data.type;
    function dispatch() {
      let obj = DispatcherDefault;
      obj.dispatch({ type: "PUSH_NOTIFICATION_CLICK" });
      let obj1 = SentryUtilsDefault;
      obj = { message: "Notification Clicked", data: null };
      obj = { type: data.type };
      obj.data = obj;
      obj1.addBreadcrumb(obj);
      obj1 = { notif_type: data.type, guild_id: null };
      let guildId = null;
      if ("guildId" in data) {
        guildId = data.guildId;
      }
      obj1.guild_id = guildId;
      AnalyticsUtilsDefault.track(constants2.NOTIFICATION_CLICKED, obj1);
      const type = data.type;
      if (constants.GUILD_VERIFICATION === type) {
        const result = GuildActionCreatorsDefault.transitionToGuildSync(data.guildId);
        const tmpResult = GuildActionCreatorsDefault;
      } else if (constants.CALL_RING === type) {
        data(1896)(9536, dependencyMap.paths).then((result) => result.default(channelId.channelId));
        const promise2 = data(1896)(9536, dependencyMap.paths);
      } else if (constants.MESSAGE_SEND_FAILED === type) {
        data(1896)(4571, dependencyMap.paths).then((transitionToMessage) => {
          ({ channelId, messageId } = closure_1_0);
          return transitionToMessage.transitionToMessage(channelId, messageId, {
            jumpType: data(4491).JumpType.INSTANT,
          });
        });
        const promise = data(1896)(4571, dependencyMap.paths);
      } else if (constants.VIBEGRATIONS === type) {
        if (null != data.guildId) {
          ({ guildId: data, projectId: closure_1 } = data);
          data(1896)(1100, dependencyMap.paths).then((transitionTo) =>
            transitionTo.transitionTo(hasOwnProperty.CHANNEL(channelId, StaticChannelRoute.VIBEGRATIONS, closure_1_1)),
          );
          const promise3 = data(1896)(1100, dependencyMap.paths);
        }
      }
    }
    const obj2 = data(7475);
    if (obj.isDispatching()) {
      const _setImmediate = setImmediate;
      setImmediate(dispatch);
    } else {
      dispatch();
    }
    obj = DispatcherDefault;
  }
};
