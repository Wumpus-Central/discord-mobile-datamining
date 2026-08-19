// === Module 15672: setTab ===

// Module 15672 (setTab)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("modules/notification_center/NotificationCenterStoreActions.tsx");

export const setTab = function setTab(dependencyMap) {
  const obj = { type: "NOTIFICATION_CENTER_SET_TAB", tab: dependencyMap };
  obj.dispatch(obj);
};
export const clearNotificationGuildMentions = function clearNotificationGuildMentions() {
  dispatcherDefault.dispatch({ type: "NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS" });
};
export const refreshNotifications = function refreshNotifications() {
  dispatcherDefault.dispatch({ type: "NOTIFICATION_CENTER_REFRESH" });
};