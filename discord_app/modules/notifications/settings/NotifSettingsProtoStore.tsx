// === Module 13507: NotifSettingsProtoStore ===

// Module 13507 (NotifSettingsProtoStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import user_settings_UserSettingsUtils from "user_settings/UserSettingsUtils" /* 1233 */;
import notification_settings from "notification_settings" /* 13508 */;
import size from "module_2" /* 2 */;

let DeclarativeSettings = notification_settings.DeclarativeSettings;
let declarativeSettings = DeclarativeSettings.create();
let c3 = false;
const PersistedStore = get_initializedDefault.PersistedStore;
class NotifSettingsProtoStore extends PersistedStore {
  initialize(proto) {
    proto = undefined;
    if (proto != null) {
      proto = proto.proto;
    }
    if (null != proto) {
      const obj = user_settings_UserSettingsUtils;
      const b64ToProtoResult = obj.b64ToProto(notification_settings.DeclarativeSettings, proto);
      if (null != b64ToProtoResult) {
        declarativeSettings = b64ToProtoResult;
      }
    }
  }
  getState() {
    let obj2;
    const obj = { proto: obj2.protoToB64(notification_settings.DeclarativeSettings, declarativeSettings) };
    obj2 = user_settings_UserSettingsUtils;
    return obj;
  }
  getSetting(arg0) {
    return declarativeSettings.values[arg0];
  }
}
const prototype = NotifSettingsProtoStore.prototype;
Object.defineProperty(prototype, "hasLoaded", {
  get: function hasLoaded() {
    return c3;
  },
  set: undefined
});
Object.defineProperty(prototype, "settings", {
  get: function settings() {
    return declarativeSettings;
  },
  set: undefined
});
NotifSettingsProtoStore.displayName = "NotifSettingsProtoStore";
NotifSettingsProtoStore.persistKey = "NotifSettingsProtoStore-Cache";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen(notificationSettings) {
    declarativeSettings = notificationSettings.notificationSettings.declarativeSettings;
    c3 = true;
  },
  NOTIFICATION_SETTINGS_UPDATE: function handleNotificationSettingsUpdate(settings) {
    declarativeSettings = settings.settings.declarativeSettings;
    if (null == declarativeSettings) {
      return false;
    }
  },
  DECLARATIVE_NOTIFICATION_SETTINGS_UPDATE: function handleDeclarativeNotificationSettingsUpdate(declarativeSettings) {
    declarativeSettings = declarativeSettings.declarativeSettings;
    if (null == declarativeSettings) {
      return false;
    }
  },
  LOGOUT: function handleLogout() {
    const DeclarativeSettings = notification_settings.DeclarativeSettings;
    declarativeSettings = DeclarativeSettings.create();
    c3 = false;
  }
};
const notifSettingsProtoStore = new NotifSettingsProtoStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/notifications/settings/NotifSettingsProtoStore.tsx");

export default notifSettingsProtoStore;