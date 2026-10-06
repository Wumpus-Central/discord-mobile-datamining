// === Module 15357: NotificationActionCreators ===

// Module 15357 (NotificationActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let importDefault, onClick;

let c2;
let c3;
let closure_4;
({ DesktopNotificationTypes: c2, NotificationPermissionTypes: c3, AnalyticEvents: closure_4 } = Constants);
let obj = {
  setDesktopType(desktopType) {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { notifications_enabled: desktopType === constants.ALL };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj2);
    const obj3 = DispatcherDefault;
    const obj4 = { type: "NOTIFICATIONS_SET_DESKTOP_TYPE", desktopType };
    obj3.dispatch(obj4);
  },
  setTTSType(ttsType) {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { tts_type: ttsType.toString() };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj2);
    const obj3 = DispatcherDefault;
    const obj4 = { type: "NOTIFICATIONS_SET_TTS_TYPE", ttsType };
    obj3.dispatch(obj4);
  },
  setDisabledSounds(disabled_sounds) {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { disabled_sounds };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj2);
    const obj3 = DispatcherDefault;
    const obj4 = { type: "NOTIFICATIONS_SET_DISABLED_SOUNDS", sounds: disabled_sounds };
    obj3.dispatch(obj4);
  },
  toggleDisableAllSounds(all_sounds_enabled) {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { all_sounds_enabled: !all_sounds_enabled };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj2);
    const obj3 = DispatcherDefault;
    obj3.dispatch({ type: "NOTIFICATIONS_TOGGLE_ALL_DISABLED" });
  },
  setDisableUnreadBadge(disableUnreadBadge) {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { unread_badge_enabled: !disableUnreadBadge };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj2);
    const obj3 = DispatcherDefault;
    const obj4 = { type: "NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE", disableUnreadBadge };
    obj3.dispatch(obj4);
  },
  setTaskbarFlash(show_taskbar_flash) {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { show_taskbar_flash };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj2);
    const obj3 = DispatcherDefault;
    const obj4 = { type: "NOTIFICATIONS_SET_TASKBAR_FLASH", taskbarFlash: show_taskbar_flash };
    obj3.dispatch(obj4);
  },
  setNotifyMessagesInSelectedChannel(notify_messages_in_selected_channel) {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { notify_messages_in_selected_channel };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj2);
    const obj3 = DispatcherDefault;
    const obj4 = { type: "NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL", notify: notify_messages_in_selected_channel };
    obj3.dispatch(obj4);
  },
  setScreenDowntimeReminder(screen_downtime_reminder) {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { screen_downtime_reminder };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj2);
    const obj3 = DispatcherDefault;
    const obj4 = { type: "NOTIFICATIONS_SET_SCREEN_DOWNTIME_REMINDER", screenDowntimeReminder: screen_downtime_reminder };
    obj3.dispatch(obj4);
  },
  setPermissionsState(enabled, source) {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { enabled: enabled === constants2.ENABLED, source };
    obj.track(constants3.ENABLE_NOTIFICATIONS, obj2);
    const obj3 = DispatcherDefault;
    const obj4 = { type: "NOTIFICATIONS_SET_PERMISSION_STATE", enabled, source };
    obj3.dispatch(obj4);
  },
  showNotification(icon, title, body, trackingProps, arg4) {
    let obj2;
    importDefault = arg4;
    let obj = { type: "NOTIFICATION_CREATE", icon, title, body, trackingProps, options: obj2 };
    obj2 = {
      onClick(arg0) {
        onClick = onClick.onClick;
        if (onClick != null) {
          onClick(arg0);
        }
        const obj = DispatcherDefault;
        obj.dispatch({ type: "NOTIFICATION_CLICK" });
      }
    };
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    const merged = Object.assign(arg4);
    dispatch(obj);
  },
  clickedNotification() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "NOTIFICATION_CLICK" });
  }
};
const result = size.fileFinishedImporting("actions/NotificationActionCreators.tsx");

export default obj;