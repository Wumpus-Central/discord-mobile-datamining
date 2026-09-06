// discord_app/modules/headless_tasks/android/MarkAsRead.tsx
import ReadStateActionCreators from "../../../actions/ReadStateActionCreators.tsx";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ AnalyticsObjectTypes: c2, AnalyticsObjects: c3 } = Constants);
const result = size.fileFinishedImporting("modules/headless_tasks/android/MarkAsRead.tsx");

export default (arg0) => {
  closure_0 = arg0;
  return new Promise((fn) => {
    const obj = { object: constants2.MARK_CHANNEL_AS_READ_FROM_NOTIFICATION, objectType: constants.ACK_MANUAL };
    obj.ack(closure_0.channelId, obj, true, true, closure_0.messageId);
    fn(true);
  });
};
