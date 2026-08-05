// discord_app/actions/native/InAppNotificationActionCreators.tsx
import { dispatcher } from "../../Dispatcher.tsx";
const result = require("set").fileFinishedImporting("actions/native/InAppNotificationActionCreators.tsx");

export default {
  enqueueNotification(buildResult) {
    let obj = dispatcher;
    obj = { type: "ENQUEUE_IN_APP_NOTIFICATION", notification: buildResult };
    obj.dispatch(obj);
  },
  clearNotification() {
    dispatcher.wait(() => {
      callback(table[0]).dispatch({ type: "CLEAR_IN_APP_NOTIFICATION" });
    });
  }
};