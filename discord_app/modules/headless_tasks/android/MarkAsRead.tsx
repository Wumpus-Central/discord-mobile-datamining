// === Module 17149: promise ===

// Module 17149 (promise)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;

({ AnalyticsObjectTypes: obj1, AnalyticsObjects: c3 } = ME);
const result = obj132.fileFinishedImporting("modules/headless_tasks/android/MarkAsRead.tsx");

export default (arg0) => {
  closure_0 = arg0;
  return new Promise((fn) => {
    lib(dependencyMap[1]);
    const obj = { object: closure_1_3.MARK_CHANNEL_AS_READ_FROM_NOTIFICATION, objectType: closure_1_2.ACK_MANUAL };
    obj.ack(lib.channelId, obj, true, true, lib.messageId);
    fn(true);
  });
};