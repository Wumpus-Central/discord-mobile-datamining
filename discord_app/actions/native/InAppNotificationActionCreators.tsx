// === Module 12530: InAppNotificationActionCreators ===

// Module 12530 (InAppNotificationActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/native/InAppNotificationActionCreators.tsx");

export default {
  enqueueNotification(buildResult) {
    DispatcherDefault.dispatch({ type: "ENQUEUE_IN_APP_NOTIFICATION", notification: buildResult });
  },
  clearNotification() {
    DispatcherDefault.wait(() => {
      DispatcherDefault.dispatch({ type: "CLEAR_IN_APP_NOTIFICATION" });
    });
  }
};