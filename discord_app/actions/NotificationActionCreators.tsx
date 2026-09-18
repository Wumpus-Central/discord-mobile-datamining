// === Module 15731: NotificationActionCreators ===

// Module 15731 (NotificationActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ DesktopNotificationTypes: c2, NotificationPermissionTypes: c3, AnalyticEvents: closure_4 } = Constants);
const result = size.fileFinishedImporting("actions/NotificationActionCreators.tsx");

export default {
  setDesktopType(desktopType) {
    AnalyticsUtilsDefault.track(constants3.LOCAL_SETTINGS_UPDATED, { notifications_enabled: desktopType === constants.ALL });
    const obj2 = { notifications_enabled: desktopType === constants.ALL };
    DispatcherDefault.dispatch({ type: "NOTIFICATIONS_SET_DESKTOP_TYPE", desktopType });
  },
  setTTSType(ttsType) {
    const obj = AnalyticsUtilsDefault;
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, { tts_type: ttsType.toString() });
    const obj2 = { tts_type: ttsType.toString() };
    DispatcherDefault.dispatch({ type: "NOTIFICATIONS_SET_TTS_TYPE", ttsType });
  },
  setDisabledSounds(disabled_sounds) {
    AnalyticsUtilsDefault.track(constants3.LOCAL_SETTINGS_UPDATED, { disabled_sounds });
    const obj2 = { disabled_sounds };
    DispatcherDefault.dispatch({ type: "NOTIFICATIONS_SET_DISABLED_SOUNDS", sounds: disabled_sounds });
  },
  toggleDisableAllSounds(all_sounds_enabled) {
    AnalyticsUtilsDefault.track(constants3.LOCAL_SETTINGS_UPDATED, { all_sounds_enabled: !all_sounds_enabled });
    const obj2 = { all_sounds_enabled: !all_sounds_enabled };
    DispatcherDefault.dispatch({ type: "NOTIFICATIONS_TOGGLE_ALL_DISABLED" });
  },
  setDisableUnreadBadge(disableUnreadBadge) {
    AnalyticsUtilsDefault.track(constants3.LOCAL_SETTINGS_UPDATED, { unread_badge_enabled: !disableUnreadBadge });
    const obj2 = { unread_badge_enabled: !disableUnreadBadge };
    DispatcherDefault.dispatch({ type: "NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE", disableUnreadBadge });
  },
  setTaskbarFlash(show_taskbar_flash) {
    AnalyticsUtilsDefault.track(constants3.LOCAL_SETTINGS_UPDATED, { show_taskbar_flash });
    const obj2 = { show_taskbar_flash };
    DispatcherDefault.dispatch({ type: "NOTIFICATIONS_SET_TASKBAR_FLASH", taskbarFlash: show_taskbar_flash });
  },
  setNotifyMessagesInSelectedChannel(notify_messages_in_selected_channel) {
    AnalyticsUtilsDefault.track(constants3.LOCAL_SETTINGS_UPDATED, { notify_messages_in_selected_channel });
    const obj2 = { notify_messages_in_selected_channel };
    DispatcherDefault.dispatch({ type: "NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL", notify: notify_messages_in_selected_channel });
  },
  setScreenDowntimeReminder(screen_downtime_reminder) {
    AnalyticsUtilsDefault.track(constants3.LOCAL_SETTINGS_UPDATED, { screen_downtime_reminder });
    const obj2 = { screen_downtime_reminder };
    DispatcherDefault.dispatch({ type: "NOTIFICATIONS_SET_SCREEN_DOWNTIME_REMINDER", screenDowntimeReminder: screen_downtime_reminder });
  },
  setPermissionsState(enabled, source) {
    AnalyticsUtilsDefault.track(constants3.ENABLE_NOTIFICATIONS, { enabled: enabled === constants2.ENABLED, source });
    const obj2 = { enabled: enabled === constants2.ENABLED, source };
    DispatcherDefault.dispatch({ type: "NOTIFICATIONS_SET_PERMISSION_STATE", enabled, source });
  },
  showNotification(icon, title, body, trackingProps, arg4) {
    importDefault = arg4;
    const obj2 = { type: "NOTIFICATION_CREATE", icon, title, body, trackingProps, options: null };
    const obj3 = {};
    const merged = Object.assign(arg4);
    obj3.onClick = function onClick(arg0) {
      onClick = onClick.onClick;
      if (onClick != null) {
        onClick(arg0);
      }
      DispatcherDefault.dispatch({ type: "NOTIFICATION_CLICK" });
    };
    obj2.options = obj3;
    DispatcherDefault.dispatch(obj2);
  },
  clickedNotification() {
    DispatcherDefault.dispatch({ type: "NOTIFICATION_CLICK" });
  }
};