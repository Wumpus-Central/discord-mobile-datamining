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
        guildId = tmp4.guildId;
      }
      obj1.guild_id = guildId;
      AnalyticsUtilsDefault.track(constants2.NOTIFICATION_CLICKED, obj1);
      const type = tmp4.type;
      if (constants.GUILD_VERIFICATION === type) {
        const result = GuildActionCreatorsDefault.transitionToGuildSync(tmp4.guildId);
        const tmpResult = GuildActionCreatorsDefault;
      } else if (tmp8.CALL_RING === type) {
        data(1896)(9536, tmp2.paths).then((result) => result.default(channelId.channelId));
        const promise2 = data(1896)(9536, tmp2.paths);
      } else if (tmp8.MESSAGE_SEND_FAILED === type) {
        data(1896)(4571, tmp2.paths).then((transitionToMessage) => {
          ({ channelId, messageId } = closure_1_0);
          return transitionToMessage.transitionToMessage(channelId, messageId, {
            jumpType: data(4491).JumpType.INSTANT,
          });
        });
        const promise = data(1896)(4571, tmp2.paths);
      } else if (tmp8.VIBEGRATIONS === type) {
        if (null != tmp4.guildId) {
          ({ guildId: data, projectId: closure_1 } = tmp4);
          data(1896)(1100, tmp2.paths).then((transitionTo) =>
            transitionTo.transitionTo(hasOwnProperty.CHANNEL(channelId, StaticChannelRoute.VIBEGRATIONS, closure_1_1)),
          );
          const promise3 = data(1896)(1100, tmp2.paths);
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
