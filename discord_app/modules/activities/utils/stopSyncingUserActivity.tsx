// === Module 7246: stopSyncingUserActivity ===

// Module 7246 (stopSyncingUserActivity)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("modules/activities/utils/stopSyncingUserActivity.tsx");

export default function stopSyncingUserActivity() {
  dispatcherDefault.dispatch({ type: "ACTIVITY_SYNC_STOP" });
};