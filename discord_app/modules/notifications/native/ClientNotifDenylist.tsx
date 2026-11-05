// discord_app/modules/notifications/native/ClientNotifDenylist.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import SentryUtilsDefault from "../../../utils/SentryUtils.native.tsx";
import notification_settings from "../../../../discord_common/js/packages/protos/discord_protos/discord_notifications/v1/notification_settings.tsx";
import notifications_NotificationSettingsUtils from "../NotificationSettingsUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import ApexExperimentStore from "../../experiments/apex/ApexExperimentStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import NotifSettingsProtoStore from "../settings/NotifSettingsProtoStore.tsx";

const require = globalThis.__r;

require = fn;
function getClientNotifTypeChoices() {
  if (fn === undefined) {
    fn = function t(arg0) {
      return setting.getSetting(arg0);
    };
  }
  const assignedNotifSettingsAndMappings =
    notifications_NotificationSettingsUtils.getAssignedNotifSettingsAndMappings();
  ({ settings, mappings } = assignedNotifSettingsAndMappings);
  const disabledTypes = [];
  const enabledTypes = [];
  const iter = mappings[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let notifSetting = nextResult.notifSetting;
    let tmp3 = notifSetting;
    let notifType = nextResult.notifType;
    value = map.get(notifSetting);
    let tmp5 = value;
    if (null != value) {
      if (set.has(tmp3)) {
        if (!("systemOnly" in tmp5)) {
          let fnResult = fn(tmp3);
          let radio;
          let tmp12 = fnResult;
          if (fnResult != null) {
            radio = fnResult.radio;
          }
          if (0 === radio) {
            if (false === tmp12.toggle) {
              let arr = disabledTypes.push(notifType);
            } else {
              let arr2 = enabledTypes.push(notifType);
            }
          }
        }
      }
    }
    continue;
  }
  return { disabledTypes, enabledTypes };
}
function syncClientNotifDenylist(map) {
  if (set === undefined) {
    const _Set = Set;
    set = new Set();
  }
  let set1;
  const str = AuthenticationStore.getId();
  let str2;
  if (str != null) {
    str2 = str.toString();
  }
  if (str2 == null) {
    str2 = "";
  }
  items = [];
  try {
    if ("" !== str2) {
      let fn;
      if (null != map) {
        fn = (arg0) => map.get(arg0);
      }
      const tmp30Result = getClientNotifTypeChoices(fn);
      items = tmp30Result.disabledTypes;
      if (null != map) {
        const items1 = [];
        HermesBuiltin.arraySpread(tmp30Result.enabledTypes, HermesBuiltin.arraySpread(items, 0));
        for (const item10027 of items1) {
          let addResult = set.add(item10027);
          continue;
        }
        const _Set2 = Set;
        set1 = new Set(items);
        const items2 = [];
        HermesBuiltin.arraySpread(set, 0);
        const found = items2.filter((item) => !set1.has(item));
      }
    }
    const enforcing = TurboModuleRegistry.getEnforcing("NativeNotifSettingsModule");
    if (null != found) {
      const result = enforcing.updateAndroidNotifTypeDenylist(str2, items, found);
    } else {
      const result1 = enforcing.setAndroidNotifTypeDenylist(str2, items);
    }
  } catch (tmp20) {
    items = [];
    obj.clear();
    SentryUtilsDefault.captureException(tmp20);
  }
}
const TurboModuleRegistry = fn(17).TurboModuleRegistry;
let items = [
  fn(16538).NotifSettings.CALLS,
  fn(16538).NotifSettings.FRIEND_REQUESTS,
  fn(16538).NotifSettings.POLLS,
  fn(16538).NotifSettings.REACTIONS,
  fn(16538).NotifSettings.MISSED_MESSAGES_LOW,
  fn(16538).NotifSettings.MISSED_MESSAGES_DEFAULT,
  fn(16538).NotifSettings.VOICE_ACTIVITY_LOW,
  fn(16538).NotifSettings.VOICE_ACTIVITY_DEFAULT,
  fn(16538).NotifSettings.VOICE_CHANNEL_ACTIVITY,
  fn(16538).NotifSettings.GO_LIVE,
  fn(16538).NotifSettings.FRIENDS_GAMING_LOW,
  fn(16538).NotifSettings.FRIENDS_GAMING_DEFAULT,
  fn(16538).NotifSettings.GAMING_OTHER,
  fn(16538).NotifSettings.CUSTOM_STATUS_UPDATE,
  fn(16538).NotifSettings.PROFILE_UPDATES,
  fn(16538).NotifSettings.FRIEND_ONLINE,
  fn(16538).NotifSettings.FRIEND_REQUEST_REMINDER,
  fn(16538).NotifSettings.FRIEND_SUGGESTIONS,
  fn(16538).NotifSettings.NUDGE_NEW_FRIEND_DM,
  fn(16538).NotifSettings.FORUM_NOTIFICATIONS,
  fn(16538).NotifSettings.GUILD_EVENT_NOTIFICATIONS,
  fn(16538).NotifSettings.STAGE_NOTIFICATIONS,
  fn(16538).NotifSettings.OTHER_GUILD,
  fn(16538).NotifSettings.SAFETY_ALERTS,
  fn(16538).NotifSettings.INVITES_RECONNECTING,
  fn(16538).NotifSettings.TRENDING_SUGGESTIONS,
  fn(16538).NotifSettings.UPDATES_OFFERS,
];
let set = new Set(items);
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/native/ClientNotifDenylist.tsx");

export function getClientDisabledNotifTypes() {
  return getClientNotifTypeChoices().disabledTypes;
}
export { syncClientNotifDenylist };
export function initializeClientNotifDenylist() {
  function sync() {
    let hasLoaded = id !== AuthenticationStore.getId();
    if (!hasLoaded) {
      hasLoaded = NotifSettingsProtoStore.hasLoaded;
    }
    if (hasLoaded) {
      id = AuthenticationStore.getId();
      set.clear();
    }
    if (null != map) {
      const tmp26 = map[Symbol.iterator]();
      while (tmp26 !== undefined) {
        let tmp8 = _slicedToArray(tmp5, 2);
        [tmp9, tmp11] = tmp8;
        let setting = NotifSettingsProtoStore.getSetting(tmp9);
        let toggle;
        let tmp14 = setting;
        if (setting != null) {
          toggle = setting.toggle;
        }
        let tmp17 = toggle === tmp11.toggle;
        if (tmp17) {
          tmp17 = tmp14.radio === tmp11.radio;
        }
        if (!tmp17) {
          let deleteResult = map.delete(tmp9);
        }
        continue;
      }
    }
    syncClientNotifDenylist(map, set);
  }
  function onEdit(updatedSettingId) {
    updatedSettingId = updatedSettingId.updatedSettingId;
    sync();
    if (null != updatedSettingId) {
      if (!NotifSettingsProtoStore.hasLoaded) {
        if (null != updatedSettingId.edit.partialSettings.values[updatedSettingId]) {
          if (map == null) {
            const _Map = Map;
            map = new Map();
          }
          const DeclarativeNotifSetting = notification_settings.DeclarativeNotifSetting;
          const result = map.set(updatedSettingId, DeclarativeNotifSetting.clone(tmp3));
          sync();
        }
      }
    }
  }
  importDefault = AuthenticationStore.getId();
  set = new Set();
  NotifSettingsProtoStore.addChangeListener(sync);
  AuthenticationStore.addChangeListener(sync);
  ApexExperimentStore.addChangeListener(sync);
  const subscription = require("Dispatcher").subscribe("APP_STATE_UPDATE", sync);
  let obj = require("Dispatcher");
  const subscription1 = require("Dispatcher").subscribe("DECLARATIVE_NOTIFICATION_SETTINGS_EDIT", onEdit);
  sync();
  return () => {
    NotifSettingsProtoStore.removeChangeListener(sync);
    AuthenticationStore.removeChangeListener(sync);
    ApexExperimentStore.removeChangeListener(sync);
    DispatcherDefault.unsubscribe("APP_STATE_UPDATE", sync);
    DispatcherDefault.unsubscribe("DECLARATIVE_NOTIFICATION_SETTINGS_EDIT", onEdit);
  };
}
