// discord_app/modules/notification_center/NotificationCenterStoreActions.tsx
const result = require("set").fileFinishedImporting("modules/notification_center/NotificationCenterStoreActions.tsx");

export const setTab = function setTab(BROWSE) {
  let obj = require("../../Dispatcher.tsx");
  obj = { type: "NOTIFICATION_CENTER_SET_TAB", tab: BROWSE };
  obj.dispatch(obj);
};
export const clearNotificationGuildMentions = function clearNotificationGuildMentions() {
  require("../../Dispatcher.tsx").dispatch({ type: "NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS" });
};
export const refreshNotifications = function refreshNotifications() {
  require("../../Dispatcher.tsx").dispatch({ type: "NOTIFICATION_CENTER_REFRESH" });
};