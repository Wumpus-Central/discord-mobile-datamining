// === Module 18126: MarkAsRead ===

// Module 18126 (MarkAsRead)
import ReadStateActionCreators from "ReadStateActionCreators" /* 6605 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ AnalyticsObjectTypes: c2, AnalyticsObjects: c3 } = Constants);
const result = size.fileFinishedImporting("modules/headless_tasks/android/MarkAsRead.tsx");

export default (arg0) => {
  let closure_0 = arg0;
  const promise = new Promise((fn) => {
    const obj = ReadStateActionCreators;
    const obj2 = { object: constants2.MARK_CHANNEL_AS_READ_FROM_NOTIFICATION, objectType: constants.ACK_MANUAL };
    obj.ack(closure_0.channelId, obj2, true, true, closure_0.messageId);
    fn(true);
  });
  return promise;
};