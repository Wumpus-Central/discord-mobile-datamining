// === Module 10031: dispatcher ===

// Module 10031 (dispatcher)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("actions/native/InAppNotificationActionCreators.tsx");

export default {
  enqueueNotification(buildResult) {
    const obj = { type: "ENQUEUE_IN_APP_NOTIFICATION", notification: buildResult };
    obj.dispatch(obj);
  },
  clearNotification() {
    dispatcherDefault.wait(() => {
      callback(table[0]).dispatch({ type: "CLEAR_IN_APP_NOTIFICATION" });
    });
  }
};