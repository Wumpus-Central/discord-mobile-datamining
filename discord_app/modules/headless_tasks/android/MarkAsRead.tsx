// === Module 17933: MarkAsRead ===

// Module 17933 (MarkAsRead)
import ReadStateActionCreators from "ReadStateActionCreators" /* 7110 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

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