// discord_app/stores/NotificationSettingsStore.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import PlatformUtils from "../utils/PlatformUtils.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

let TTSNotificationTypes;
let c3;
const DesktopNotificationTypes = Constants.DesktopNotificationTypes;
({ NotificationPermissionTypes: c3, TTSNotificationTypes } = Constants);
let obj = {
  desktopType: PlatformUtils.isPlatformEmbedded ? DesktopNotificationTypes.ALL : DesktopNotificationTypes.NEVER,
  disableAllSounds: false,
  disabledSounds: [],
  ttsType: TTSNotificationTypes.NEVER,
  disableUnreadBadge: false,
  taskbarFlash: true,
  notifyMessagesInSelectedChannel: false,
  screenDowntimeReminder: true,
};
function handleSetDesktopType(desktopType) {
  obj.desktopType = desktopType.desktopType;
}
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class NotificationSettingsStore extends DeviceSettingsStore {
  initialize(arg0) {
    obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(arg0);
  }
  getUserAgnosticState() {
    return obj;
  }
  getDesktopType() {
    return obj.desktopType;
  }
  getTTSType() {
    return obj.ttsType;
  }
  getDisabledSounds() {
    return obj.disabledSounds;
  }
  getDisableAllSounds() {
    return obj.disableAllSounds;
  }
  getDisableUnreadBadge() {
    return obj.disableUnreadBadge;
  }
  getNotifyMessagesInSelectedChannel() {
    return obj.notifyMessagesInSelectedChannel;
  }
  isSoundDisabled(message1) {
    let disableAllSounds = obj.disableAllSounds;
    if (!disableAllSounds) {
      const disabledSounds = obj.disabledSounds;
      disableAllSounds = -1 !== disabledSounds.indexOf(message1);
    }
    return disableAllSounds;
  }
}
const prototype = NotificationSettingsStore.prototype;
Object.defineProperty(prototype, "taskbarFlash", {
  get: function taskbarFlash() {
    return obj.taskbarFlash;
  },
  set: undefined,
});
Object.defineProperty(prototype, "screenDowntimeReminder", {
  get: function screenDowntimeReminder() {
    return obj.screenDowntimeReminder;
  },
  set: undefined,
});
NotificationSettingsStore.displayName = "NotificationSettingsStore";
NotificationSettingsStore.persistKey = "notifications";
const items = [
  (arg0) => {
    let NEVER;
    obj = {
      disabledSounds: obj.disabledSounds || [],
      disableUnreadBadge: obj.disableUnreadBadge || false,
      taskbarFlash: null == obj.taskbarFlash || obj.taskbarFlash,
      ttsType: NEVER,
    };
    const merged = Object.assign(arg0);
    NEVER = obj.ttsType || TTSNotificationTypes.NEVER;
    if (null == obj.desktopType) {
      obj.desktopType = PlatformUtils.isPlatformEmbedded
        ? DesktopNotificationTypes.ALL
        : DesktopNotificationTypes.NEVER;
    }
    return obj;
  },
];
NotificationSettingsStore.migrations = items;
const obj2 = {
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
  },
};
const notificationSettingsStore = new NotificationSettingsStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("stores/NotificationSettingsStore.tsx");

export default notificationSettingsStore;
