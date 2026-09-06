// discord_app/modules/notification_center/NotificationCenterStoreActions.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/notification_center/NotificationCenterStoreActions.tsx");

export const setTab = function setTab(dependencyMap) {
  const obj = { type: "NOTIFICATION_CENTER_SET_TAB", tab: dependencyMap };
  obj.dispatch(obj);
};
export const clearNotificationGuildMentions = function clearNotificationGuildMentions() {
  DispatcherDefault.dispatch({ type: "NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS" });
};
export const refreshNotifications = function refreshNotifications() {
  DispatcherDefault.dispatch({ type: "NOTIFICATION_CENTER_REFRESH" });
};
