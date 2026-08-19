// === Module 15672: setTab ===

// Module 15672 (setTab)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("modules/notification_center/NotificationCenterStoreActions.tsx");

export const setTab = function setTab(BROWSE) {
  let obj = dispatcherDefault;
  obj = { type: "NOTIFICATION_CENTER_SET_TAB", tab: BROWSE };
  obj.dispatch(obj);
};
export const clearNotificationGuildMentions = function clearNotificationGuildMentions() {
  dispatcherDefault.dispatch({ type: "NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS" });
};
export const refreshNotifications = function refreshNotifications() {
  dispatcherDefault.dispatch({ type: "NOTIFICATION_CENTER_REFRESH" });
};