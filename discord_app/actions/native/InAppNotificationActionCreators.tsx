// === Module 11005: InAppNotificationActionCreators ===

// Module 11005 (InAppNotificationActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/native/InAppNotificationActionCreators.tsx");

export default {
  enqueueNotification(buildResult) {
    DispatcherDefault.dispatch({ type: "ENQUEUE_IN_APP_NOTIFICATION", notification: buildResult });
  },
  clearNotification() {
    DispatcherDefault.dispatch({ type: "CLEAR_IN_APP_NOTIFICATION" });
  }
};