// === Module 14825: ? ===

// Module 14825
import obj132 from "obj132" /* 2 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import ME from "ME" /* 676 */;

({ DesktopNotificationTypes: obj1, NotificationPermissionTypes: c3, AnalyticEvents: c4 } = ME);
const result = obj132.fileFinishedImporting("actions/NotificationActionCreators.tsx");

export default {
  setDesktopType(desktopType) {
    let obj = { notifications_enabled: desktopType === constants.ALL };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_DESKTOP_TYPE", desktopType };
    dispatcherDefault.dispatch(obj);
  },
  setTTSType(ttsType) {
    let obj = { tts_type: ttsType.toString() };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_TTS_TYPE", ttsType };
    dispatcherDefault.dispatch(obj);
  },
  setDisabledSounds(disabled_sounds) {
    let obj = { disabled_sounds };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_DISABLED_SOUNDS", sounds: disabled_sounds };
    dispatcherDefault.dispatch(obj);
  },
  toggleDisableAllSounds(all_sounds_enabled) {
    const obj = { all_sounds_enabled: !all_sounds_enabled };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    dispatcherDefault.dispatch({ type: "NOTIFICATIONS_TOGGLE_ALL_DISABLED" });
  },
  setDisableUnreadBadge(disableUnreadBadge) {
    let obj = { unread_badge_enabled: !disableUnreadBadge };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE", disableUnreadBadge };
    dispatcherDefault.dispatch(obj);
  },
  setTaskbarFlash(show_taskbar_flash) {
    let obj = { show_taskbar_flash };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_TASKBAR_FLASH", taskbarFlash: show_taskbar_flash };
    dispatcherDefault.dispatch(obj);
  },
  setNotifyMessagesInSelectedChannel(notify) {
    let obj = { notify_messages_in_selected_channel: notify };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL", notify };
    dispatcherDefault.dispatch(obj);
  },
  setScreenDowntimeReminder(screenDowntimeReminder) {
    let obj = { screen_downtime_reminder: screenDowntimeReminder };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_SCREEN_DOWNTIME_REMINDER", screenDowntimeReminder };
    dispatcherDefault.dispatch(obj);
  },
  setPermissionsState(enabled, source) {
    let obj = { enabled: enabled === constants2.ENABLED, source };
    obj.track(constants3.ENABLE_NOTIFICATIONS, obj);
    obj = { type: "NOTIFICATIONS_SET_PERMISSION_STATE", enabled, source };
    dispatcherDefault.dispatch(obj);
  },
  showNotification(icon, title, body, trackingProps) {
    importDefault = arg4;
    const obj = {};
    const merged = Object.assign(arg4);
    obj.onClick = function onClick(arg0) {
      const onClick = lib.onClick;
      if (onClick != null) {
        onClick(arg0);
      }
      lib(dependencyMap[2]).dispatch({ type: "NOTIFICATION_CLICK" });
    };
    obj[5] = obj;
    obj.dispatch(obj);
  },
  clickedNotification() {
    dispatcherDefault.dispatch({ type: "NOTIFICATION_CLICK" });
  }
};