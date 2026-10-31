// === Module 10932: leaveEmbeddedActivity ===

// Module 10932 (leaveEmbeddedActivity)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/leaveEmbeddedActivity.tsx");

export function leaveEmbeddedActivity(arg0) {
  const merged = Object.assign(arg0);
  DispatcherDefault.dispatch({ type: "EMBEDDED_ACTIVITY_LEAVE" });
}