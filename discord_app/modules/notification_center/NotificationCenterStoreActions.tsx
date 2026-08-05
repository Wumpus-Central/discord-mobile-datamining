// discord_app/modules/notification_center/NotificationCenterStoreActions.tsx
import { dispatcher } from "../../Dispatcher.tsx";
const result = require("set").fileFinishedImporting("modules/notification_center/NotificationCenterStoreActions.tsx");

export const setTab = function setTab(BROWSE) {
  let obj = dispatcher;
  obj = { type: "NOTIFICATION_CENTER_SET_TAB", tab: BROWSE };
  obj.dispatch(obj);
};
export const clearNotificationGuildMentions = function clearNotificationGuildMentions() {
  dispatcher.dispatch({ type: "NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS" });
};
export const refreshNotifications = function refreshNotifications() {
  dispatcher.dispatch({ type: "NOTIFICATION_CENTER_REFRESH" });
};