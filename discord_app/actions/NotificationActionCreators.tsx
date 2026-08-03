// === Module 14563: ? ===

// Module 14563
import ME from "ME";

let c3;
let c4;
let obj1;
({ DesktopNotificationTypes: obj1, NotificationPermissionTypes: c3, AnalyticEvents: c4 } = ME);
const result = require("dispatcher").fileFinishedImporting("actions/NotificationActionCreators.tsx");

export default {
  setDesktopType(desktopType) {
    let obj = importDefault(698);
    obj = { notifications_enabled: desktopType === constants.ALL };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_DESKTOP_TYPE", desktopType };
    importDefault(709).dispatch(obj);
  },
  setTTSType(ttsType) {
    let obj = importDefault(698);
    obj = { tts_type: ttsType.toString() };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_TTS_TYPE", ttsType };
    importDefault(709).dispatch(obj);
  },
  setDisabledSounds(disabled_sounds) {
    let obj = importDefault(698);
    obj = { disabled_sounds };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_DISABLED_SOUNDS", sounds: disabled_sounds };
    importDefault(709).dispatch(obj);
  },
  toggleDisableAllSounds(all_sounds_enabled) {
    let obj = importDefault(698);
    obj = { all_sounds_enabled: !all_sounds_enabled };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    importDefault(709).dispatch({ type: "NOTIFICATIONS_TOGGLE_ALL_DISABLED" });
  },
  setDisableUnreadBadge(disableUnreadBadge) {
    let obj = importDefault(698);
    obj = { unread_badge_enabled: !disableUnreadBadge };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE", disableUnreadBadge };
    importDefault(709).dispatch(obj);
  },
  setTaskbarFlash(show_taskbar_flash) {
    let obj = importDefault(698);
    obj = { show_taskbar_flash };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_TASKBAR_FLASH", taskbarFlash: show_taskbar_flash };
    importDefault(709).dispatch(obj);
  },
  setNotifyMessagesInSelectedChannel(notify) {
    let obj = importDefault(698);
    obj = { notify_messages_in_selected_channel: notify };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL", notify };
    importDefault(709).dispatch(obj);
  },
  setScreenDowntimeReminder(screenDowntimeReminder) {
    let obj = importDefault(698);
    obj = { screen_downtime_reminder: screenDowntimeReminder };
    obj.track(constants3.LOCAL_SETTINGS_UPDATED, obj);
    obj = { type: "NOTIFICATIONS_SET_SCREEN_DOWNTIME_REMINDER", screenDowntimeReminder };
    importDefault(709).dispatch(obj);
  },
  setPermissionsState(enabled, source) {
    let obj = importDefault(698);
    obj = { enabled: enabled === constants2.ENABLED, source };
    obj.track(constants3.ENABLE_NOTIFICATIONS, obj);
    obj = { type: "NOTIFICATIONS_SET_PERMISSION_STATE", enabled, source };
    importDefault(709).dispatch(obj);
  },
  showNotification(icon, title, body, trackingProps) {
    const importDefault = arg4;
    let obj = importDefault(709);
    obj = { type: "NOTIFICATION_CREATE", icon, title, body, trackingProps, options: null };
    obj = {};
    const merged = Object.assign(arg4);
    obj.onClick = function onClick(arg0) {
      const onClick = lib.onClick;
      if (onClick != null) {
        onClick(arg0);
      }
      lib(outer1_1[2]).dispatch({ type: "NOTIFICATION_CLICK" });
    };
    obj[5] = obj;
    obj.dispatch(obj);
  },
  clickedNotification() {
    importDefault(709).dispatch({ type: "NOTIFICATION_CLICK" });
  }
};