// discord_app/actions/native/InAppNotificationActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
  },
};
