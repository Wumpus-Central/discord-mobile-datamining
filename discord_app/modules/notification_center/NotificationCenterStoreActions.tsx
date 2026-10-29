// discord_app/modules/notification_center/NotificationCenterStoreActions.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/notification_center/NotificationCenterStoreActions.tsx");

export function setTab(dependencyMap) {
  DispatcherDefault.dispatch({ type: "NOTIFICATION_CENTER_SET_TAB", tab: dependencyMap });
}
export function clearNotificationGuildMentions() {
  DispatcherDefault.dispatch({ type: "NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS" });
}
export function refreshNotifications() {
  DispatcherDefault.dispatch({ type: "NOTIFICATION_CENTER_REFRESH" });
}
