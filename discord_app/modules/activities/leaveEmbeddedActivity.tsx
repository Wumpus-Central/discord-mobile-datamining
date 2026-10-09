// === Module 10777: leaveEmbeddedActivity ===

// Module 10777 (leaveEmbeddedActivity)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/leaveEmbeddedActivity.tsx");

export const leaveEmbeddedActivity = function leaveEmbeddedActivity(arg0) {
  const merged = Object.assign(arg0);
  DispatcherDefault.dispatch({ type: "EMBEDDED_ACTIVITY_LEAVE" });
};