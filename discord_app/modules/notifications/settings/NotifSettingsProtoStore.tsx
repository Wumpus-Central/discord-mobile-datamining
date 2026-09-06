// discord_app/modules/notifications/settings/NotifSettingsProtoStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import user_settings_UserSettingsUtils from "../../user_settings/UserSettingsUtils.tsx";
import notification_settings from "../../../../discord_common/js/packages/protos/discord_protos/discord_notifications/v1/notification_settings.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let DeclarativeSettings = notification_settings.DeclarativeSettings;
const values = DeclarativeSettings.create();
let c3 = false;
const PersistedStore = initializeDefault.PersistedStore;
class NotifSettingsProtoStore extends PersistedStore {}
const prototype = NotifSettingsProtoStore.prototype;
prototype["initialize"] = function initialize(proto) {
  proto = undefined;
  if (proto != null) {
    proto = proto.proto;
  }
  if (null != proto) {
    const b64ToProtoResult = user_settings_UserSettingsUtils.b64ToProto(
      notification_settings.DeclarativeSettings,
      proto,
    );
    if (null != b64ToProtoResult) {
      closure_2 = b64ToProtoResult;
    }
  }
};
prototype["getState"] = function getState() {
  const obj = {
    proto: user_settings_UserSettingsUtils.protoToB64(notification_settings.DeclarativeSettings, closure_2),
  };
  return obj;
};
Object.defineProperty(prototype, "hasLoaded", {
  get: function hasLoaded() {
    return c3;
  },
  set: undefined,
});
Object.defineProperty(prototype, "settings", {
  get: function settings() {
    return closure_2;
  },
  set: undefined,
});
prototype["getSetting"] = function getSetting(arg0) {
  return values.values[arg0];
};
NotifSettingsProtoStore.displayName = "NotifSettingsProtoStore";
NotifSettingsProtoStore.persistKey = "NotifSettingsProtoStore-Cache";
const notifSettingsProtoStore = new NotifSettingsProtoStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen(notificationSettings) {
    let declarativeSettings = notificationSettings.notificationSettings.declarativeSettings;
    if (declarativeSettings == null) {
      declarativeSettings = closure_2;
    }
    closure_2 = declarativeSettings;
    c3 = true;
  },
  NOTIFICATION_SETTINGS_UPDATE: function handleNotificationSettingsUpdate(settings) {
    const declarativeSettings = settings.settings.declarativeSettings;
    if (null == declarativeSettings) {
      return false;
    } else {
      closure_2 = declarativeSettings;
    }
  },
  DECLARATIVE_NOTIFICATION_SETTINGS_UPDATE: function handleDeclarativeNotificationSettingsUpdate(declarativeSettings) {
    declarativeSettings = declarativeSettings.declarativeSettings;
    if (null == declarativeSettings) {
      return false;
    } else {
      closure_2 = declarativeSettings;
    }
  },
  LOGOUT: function handleLogout() {
    const DeclarativeSettings = notification_settings.DeclarativeSettings;
    closure_2 = DeclarativeSettings.create();
    c3 = false;
  },
});
const result = size.fileFinishedImporting("modules/notifications/settings/NotifSettingsProtoStore.tsx");

export default notifSettingsProtoStore;
