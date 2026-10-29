// === Module 18375: NotificationCenterStoreActions ===

// Module 18375 (NotificationCenterStoreActions)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

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