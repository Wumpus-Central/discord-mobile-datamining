// discord_app/actions/NotificationActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../utils/AnalyticsUtils.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

({ DesktopNotificationTypes: c2, NotificationPermissionTypes: c3, AnalyticEvents: closure_4 } = Constants);
const result = size.fileFinishedImporting("actions/NotificationActionCreators.tsx");

export default {
  setDesktopType(desktopType) {
    let obj = { notifications_enabled: desktopType === constants.ALL };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_DESKTOP_TYPE", desktopType };
    DispatcherDefault.dispatch(obj);
  },
  setTTSType(ttsType) {
    let obj = { tts_type: ttsType.toString() };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_TTS_TYPE", ttsType };
    DispatcherDefault.dispatch(obj);
  },
  setDisabledSounds(disabled_sounds) {
    let obj = { disabled_sounds };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_DISABLED_SOUNDS", sounds: disabled_sounds };
    DispatcherDefault.dispatch(obj);
  },
  toggleDisableAllSounds(all_sounds_enabled) {
    const obj = { all_sounds_enabled: !all_sounds_enabled };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    DispatcherDefault.dispatch({ type: "NOTIFICATIONS_TOGGLE_ALL_DISABLED" });
  },
  setDisableUnreadBadge(disableUnreadBadge) {
    let obj = { unread_badge_enabled: !disableUnreadBadge };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE", disableUnreadBadge };
    DispatcherDefault.dispatch(obj);
  },
  setTaskbarFlash(show_taskbar_flash) {
    let obj = { show_taskbar_flash };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_TASKBAR_FLASH", taskbarFlash: show_taskbar_flash };
    DispatcherDefault.dispatch(obj);
  },
  setNotifyMessagesInSelectedChannel(notify_messages_in_selected_channel) {
    let obj = { notify_messages_in_selected_channel };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = {
      type: "NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL",
      notify: notify_messages_in_selected_channel,
    };
    DispatcherDefault.dispatch(obj);
  },
  setScreenDowntimeReminder(screen_downtime_reminder) {
    let obj = { screen_downtime_reminder };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_SCREEN_DOWNTIME_REMINDER", screenDowntimeReminder: screen_downtime_reminder };
    DispatcherDefault.dispatch(obj);
  },
  setPermissionsState(enabled, source) {
    let obj = { enabled: enabled === constants2.ENABLED, source };
    obj.track(constants3.ENABLE_NOTIFICATIONS, obj);
    obj = { type: "NOTIFICATIONS_SET_PERMISSION_STATE", enabled, source };
    DispatcherDefault.dispatch(obj);
  },
  showNotification(icon, title, body, trackingProps, arg4) {
    importDefault = arg4;
    let obj = { type: "NOTIFICATION_CREATE", icon, title, body, trackingProps, options: null };
    obj = {};
    const merged = Object.assign(arg4);
    obj.onClick = function onClick(arg0) {
      onClick = onClick.onClick;
      if (onClick != null) {
        onClick(arg0);
      }
      DispatcherDefault.dispatch({ type: "NOTIFICATION_CLICK" });
    };
    obj.options = obj;
    obj.dispatch(obj);
  },
  clickedNotification() {
    DispatcherDefault.dispatch({ type: "NOTIFICATION_CLICK" });
  },
};
