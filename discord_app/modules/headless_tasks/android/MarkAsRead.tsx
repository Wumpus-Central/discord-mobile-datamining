// === Module 17360: promise ===

// Module 17360 (promise)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;

({ AnalyticsObjectTypes: obj1, AnalyticsObjects: c3 } = ME);
const result = set.fileFinishedImporting("modules/headless_tasks/android/MarkAsRead.tsx");

export default (arg0) => {
  closure_0 = arg0;
  return new Promise((arg0) => {
    let obj = lib(closure_1_1[1]);
    obj = { object: closure_1_3.MARK_CHANNEL_AS_READ_FROM_NOTIFICATION, objectType: closure_1_2.ACK_MANUAL };
    obj.ack(lib.channelId, obj, true, true, lib.messageId);
    arg0(true);
  });
};