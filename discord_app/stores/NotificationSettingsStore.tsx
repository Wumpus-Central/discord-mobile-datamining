// === Module 10054: DesktopNotificationTypes ===

// Module 10054 (DesktopNotificationTypes)
import set from "set" /* 2 */;
import set2 from "set" /* 500 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import ME from "ME" /* 676 */;

const DesktopNotificationTypes = ME.DesktopNotificationTypes;
({ NotificationPermissionTypes: c3, TTSNotificationTypes } = ME);
let obj = { desktopType: set2.isPlatformEmbedded ? DesktopNotificationTypes.ALL : DesktopNotificationTypes.NEVER, disableAllSounds: false, disabledSounds: [], ttsType: TTSNotificationTypes.NEVER, disableUnreadBadge: false, taskbarFlash: true, notifyMessagesInSelectedChannel: false, screenDowntimeReminder: true };
function handleSetDesktopType(desktopType) {
  obj.desktopType = desktopType.desktopType;
}
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class NotificationSettingsStore extends DeviceSettingsStore {
}
const prototype = NotificationSettingsStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  obj = {};
  const merged = Object.assign(obj);
  const merged1 = Object.assign(arg0);
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return obj;
};
prototype["getDesktopType"] = function getDesktopType() {
  return obj.desktopType;
};
prototype["getTTSType"] = function getTTSType() {
  return obj.ttsType;
};
prototype["getDisabledSounds"] = function getDisabledSounds() {
  return obj.disabledSounds;
};
prototype["getDisableAllSounds"] = function getDisableAllSounds() {
  return obj.disableAllSounds;
};
prototype["getDisableUnreadBadge"] = function getDisableUnreadBadge() {
  return obj.disableUnreadBadge;
};
prototype["getNotifyMessagesInSelectedChannel"] = function getNotifyMessagesInSelectedChannel() {
  return obj.notifyMessagesInSelectedChannel;
};
Object.defineProperty(prototype, "taskbarFlash", {
  get: function taskbarFlash() {
    return obj.taskbarFlash;
  },
  set: undefined
});
Object.defineProperty(prototype, "screenDowntimeReminder", {
  get: function screenDowntimeReminder() {
    return obj.screenDowntimeReminder;
  },
  set: undefined
});
prototype["isSoundDisabled"] = function isSoundDisabled(message1) {
  let disableAllSounds = obj.disableAllSounds;
  if (!disableAllSounds) {
    const disabledSounds = obj.disabledSounds;
    disableAllSounds = -1 !== disabledSounds.indexOf(message1);
  }
  return disableAllSounds;
};
NotificationSettingsStore.displayName = "NotificationSettingsStore";
NotificationSettingsStore.persistKey = "notifications";
const items = [
  (arg0) => {
    obj = {};
    const merged = Object.assign(arg0);
    obj.disabledSounds = obj.disabledSounds || [];
    obj.disableUnreadBadge = obj.disableUnreadBadge || false;
    obj.taskbarFlash = null == obj.taskbarFlash || obj.taskbarFlash;
    let NEVER = obj.ttsType;
    if (!NEVER) {
      NEVER = TTSNotificationTypes.NEVER;
    }
    obj.ttsType = NEVER;
    if (null != obj.desktopType) {
      return obj;
    } else {
      obj.desktopType = set2.isPlatformEmbedded ? DesktopNotificationTypes.ALL : DesktopNotificationTypes.NEVER;
    }
  }
];
NotificationSettingsStore.migrations = items;
obj = {
  NOTIFICATIONS_SET_DESKTOP_TYPE: handleSetDesktopType,
  NOTIFICATIONS_SET_TTS_TYPE: function handleSetTTSType(ttsType) {
    obj.ttsType = ttsType.ttsType;
  },
  NOTIFICATIONS_SET_DISABLED_SOUNDS: function handleSetDisabledSounds(sounds) {
    obj.disabledSounds = sounds.sounds;
  },
  NOTIFICATIONS_TOGGLE_ALL_DISABLED: function handleToggleAllDisabled() {
    obj.disableAllSounds = !obj.disableAllSounds;
  },
  NOTIFICATIONS_SET_PERMISSION_STATE: function handleSetHavePermission(enabled) {
    enabled = enabled.enabled;
    if (enabled === constants.BLOCKED) {
      obj.desktopType = DesktopNotificationTypes.NEVER;
    } else if (enabled === tmp.ENABLED) {
      obj.desktopType = DesktopNotificationTypes.ALL;
    }
  },
  NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE: function handleSetDisableUnreadBadge(disableUnreadBadge) {
    obj.disableUnreadBadge = disableUnreadBadge.disableUnreadBadge;
  },
  NOTIFICATIONS_SET_TASKBAR_FLASH: function handleSetTaskbarFlash(taskbarFlash) {
    obj.taskbarFlash = taskbarFlash.taskbarFlash;
  },
  NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL: function handleSetNotifyMessagesInSelectedChannel(notify) {
    obj.notifyMessagesInSelectedChannel = notify.notify;
  },
  NOTIFICATIONS_SET_SCREEN_DOWNTIME_REMINDER: function handleSetScreenDowntimeReminder(screenDowntimeReminder) {
    obj.screenDowntimeReminder = screenDowntimeReminder.screenDowntimeReminder;
  }
};
const notificationSettingsStore = new NotificationSettingsStore(dispatcherDefault, obj);
const result = set.fileFinishedImporting("stores/NotificationSettingsStore.tsx");

export default notificationSettingsStore;