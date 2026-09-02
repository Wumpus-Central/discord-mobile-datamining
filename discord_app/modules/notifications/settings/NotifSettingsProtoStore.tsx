// discord_app/modules/notifications/settings/NotifSettingsProtoStore.tsx
import set from "../../../../_runtime/00002_set.js";
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";
import b64ToProto from "../../user_settings/UserSettingsUtils.tsx";
import create from "../../../../discord_common/js/packages/protos/discord_protos/discord_notifications/v1/notification_settings.tsx";

let DeclarativeSettings = create.DeclarativeSettings;
let closure_2 = DeclarativeSettings.create();
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
    const b64ToProtoResult = b64ToProto.b64ToProto(create.DeclarativeSettings, proto);
    if (null != b64ToProtoResult) {
      closure_2 = b64ToProtoResult;
    }
    const obj = b64ToProto;
  }
};
prototype["getState"] = function getState() {
  const obj = { proto: b64ToProto.protoToB64(create.DeclarativeSettings, closure_2) };
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
const notifSettingsProtoStore = new NotifSettingsProtoStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen(notificationSettings) {
    const declarativeSettings = notificationSettings.notificationSettings.declarativeSettings;
    c3 = true;
  },
  NOTIFICATION_SETTINGS_UPDATE: function handleNotificationSettingsUpdate(settings) {
    const declarativeSettings = settings.settings.declarativeSettings;
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
    const DeclarativeSettings = create.DeclarativeSettings;
    closure_2 = DeclarativeSettings.create();
    c3 = false;
  },
});
const result = set.fileFinishedImporting("modules/notifications/settings/NotifSettingsProtoStore.tsx");

export default notifSettingsProtoStore;
