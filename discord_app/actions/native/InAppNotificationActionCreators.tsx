// === Module 10096: InAppNotificationActionCreators ===

// Module 10096 (InAppNotificationActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/native/InAppNotificationActionCreators.tsx");

export default {
  enqueueNotification(buildResult) {
    const obj = { type: "ENQUEUE_IN_APP_NOTIFICATION", notification: buildResult };
    obj.dispatch(obj);
  },
  clearNotification() {
    DispatcherDefault.wait(() => {
      DispatcherDefault.dispatch({ type: "CLEAR_IN_APP_NOTIFICATION" });
    });
  }
};