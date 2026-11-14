// === Module 16901: ClientNotifDenylist ===

// Module 16901 (ClientNotifDenylist)
import DispatcherDefault from "Dispatcher" /* 572 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import notification_settings from "notification_settings" /* 16164 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 16902 */;
import _slicedToArray from "module_32" /* 32 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import NotifSettingsProtoStore from "NotifSettingsProtoStore" /* 16163 */;

const require = globalThis.__r;

require = fn;
function getClientNotifTypeChoices() {
  if (fn === undefined) {
    fn = function t(map) {
      return guildDisabledTypes.getSetting(map);
    };
  }
  let assignedNotifSettingsAndMappings = arg1;
  if (arg1 === undefined) {
    assignedNotifSettingsAndMappings = fn(map[6]).getAssignedNotifSettingsAndMappings();
    const obj = fn(map[6]);
  }
  c1 = undefined;
  c8 = undefined;
  c9 = undefined;
  ({ settings, mappings, redesignState: c1 } = assignedNotifSettingsAndMappings);
  map = new Map(settings.map((id) => {
    items = [id.id, id];
    return items;
  }));
  const disabledTypes = [];
  const enabledTypes = [];
  const radioTypes = [];
  const dmDisabledTypes = [];
  const guildDisabledTypes = [];
  function _loop() {
    value = map.get(c8);
    if (null != value) {
      const tmp4 = fn(c8);
      let radio = tmp4;
      if ("radioScopesByValue" in value) {
        if (null != value.radioScopesByValue) {
          if (c1) {
            if (null != tmp4) {
              if (!tmp4.toggle) {
                const _Object = Object;
                const entries = Object.entries(value.radioScopesByValue);
                const found = entries.find((item) => {
                  [tmp] = item;
                  return Number(tmp) === radio.radio;
                });
                let tmp16;
                if (found != null) {
                  tmp16 = found[1];
                }
                if (null == tmp16) {
                  return 0;
                } else {
                  const _Set = Set;
                  set = new Set(tmp16);
                  radioTypes.push(c9);
                  if (!set.has("dm")) {
                    dmDisabledTypes.push(c9);
                  }
                  if (!set.has("guild")) {
                    guildDisabledTypes.push(c9);
                  }
                  return 0;
                }
              }
            }
          }
          return 0;
        }
      }
      let num2 = 0;
      if (set.has(c8)) {
        radio = undefined;
        if (tmp4 != null) {
          radio = tmp4.radio;
        }
        if (0 !== radio) {
          num2 = 0;
        } else if (false === tmp4.toggle) {
          disabledTypes.push(c9);
        } else {
          enabledTypes.push(c9);
        }
      }
      return num2;
    }
    return 0;
  }
  const iter = mappings[Symbol.iterator]();
  while (iter !== undefined) {
    ({ notifSetting: c8, notifType: c9 } = nextResult);
    let _loopResult = _loop();
    continue;
  }
  return { disabledTypes, enabledTypes, radioTypes, dmDisabledTypes, guildDisabledTypes };
}
function syncClientNotifDenylist(map) {
  if (set === undefined) {
    const _Set = Set;
    set = new Set();
  }
  if (set1 === undefined) {
    const _Set2 = Set;
    set1 = new Set();
  }
  let set2;
  const str = AuthenticationStore.getId();
  let str2;
  if (str != null) {
    str2 = str.toString();
  }
  if (str2 == null) {
    str2 = "";
  }
  const enforcing = TurboModuleRegistry.getEnforcing("NativeNotifSettingsModule");
  disabledTypes = [];
  dmDisabledTypes = [];
  guildDisabledTypes = [];
  radioTypes = [];
  try {
    const assignedNotifSettingsAndMappings = notifications_NotificationSettingsUtils.getAssignedNotifSettingsAndMappings();
    let redesignState = assignedNotifSettingsAndMappings.redesignState;
    let flag = redesignState;
    if (redesignState) {
      redesignState = "" !== str2;
    }
    if (!redesignState) {
      const result = enforcing.setAndroidNotifScopeDenylist(str2, [], [], [], true);
    }
    if (tmp17) {
      let fn;
      if (null != map) {
        fn = (arg0) => map.get(arg0);
      }
      const tmp19Result = getClientNotifTypeChoices(fn, tmp13);
      ({ disabledTypes, dmDisabledTypes, guildDisabledTypes, radioTypes } = tmp19Result);
      if (null != map) {
        items = [];
        HermesBuiltin.arraySpread(tmp19Result.radioTypes, HermesBuiltin.arraySpread(tmp19Result.enabledTypes, HermesBuiltin.arraySpread(disabledTypes, 0)));
        for (const item10068 of items) {
          let addResult = set.add(item10068);
          continue;
        }
        for (const item10077 of radioTypes) {
          let addResult1 = set1.add(item10077);
          continue;
        }
        const items1 = [];
        HermesBuiltin.arraySpread(set1, 0);
        radioTypes = items1;
        const _Set3 = Set;
        set2 = new Set(disabledTypes);
        const items2 = [];
        HermesBuiltin.arraySpread(set, 0);
        const found = items2.filter((item) => !set2.has(item));
      }
    }
    if (null != found) {
      const result1 = enforcing.updateAndroidNotifTypeDenylist(str2, disabledTypes, found);
    } else {
      const result2 = enforcing.setAndroidNotifTypeDenylist(str2, disabledTypes);
    }
    if (flag) {
      flag = "" !== str2;
    }
    if (flag) {
      const result3 = enforcing.setAndroidNotifScopeDenylist(str2, dmDisabledTypes, guildDisabledTypes, radioTypes, null == map);
    }
    tmp13 = assignedNotifSettingsAndMappings;
    tmp17 = "" !== str2;
  } catch (tmp40) {
    disabledTypes = [];
    obj3.clear();
    dmDisabledTypes = [];
    guildDisabledTypes = [];
    obj2.clear();
    radioTypes = [];
    flag = false;
    const result4 = obj.setAndroidNotifScopeDenylist(tmp2, [], [], [], true);
    SentryUtilsDefault.captureException(tmp40);
  }
}
const TurboModuleRegistry = fn(17).TurboModuleRegistry;
let items = [fn(16899).NotifSettings.CALLS, fn(16899).NotifSettings.FRIEND_REQUESTS, fn(16899).NotifSettings.POLLS, fn(16899).NotifSettings.REACTIONS, fn(16899).NotifSettings.MISSED_MESSAGES_LOW, fn(16899).NotifSettings.MISSED_MESSAGES_DEFAULT, fn(16899).NotifSettings.VOICE_ACTIVITY_LOW, fn(16899).NotifSettings.VOICE_ACTIVITY_DEFAULT, fn(16899).NotifSettings.VOICE_CHANNEL_ACTIVITY, fn(16899).NotifSettings.GO_LIVE, fn(16899).NotifSettings.FRIENDS_GAMING_LOW, fn(16899).NotifSettings.FRIENDS_GAMING_DEFAULT, fn(16899).NotifSettings.GAMING_OTHER, fn(16899).NotifSettings.CUSTOM_STATUS_UPDATE, fn(16899).NotifSettings.PROFILE_UPDATES, fn(16899).NotifSettings.FRIEND_ONLINE, fn(16899).NotifSettings.FRIEND_REQUEST_REMINDER, fn(16899).NotifSettings.FRIEND_SUGGESTIONS, fn(16899).NotifSettings.NUDGE_NEW_FRIEND_DM, fn(16899).NotifSettings.FORUM_NOTIFICATIONS, fn(16899).NotifSettings.GUILD_EVENT_NOTIFICATIONS, fn(16899).NotifSettings.STAGE_NOTIFICATIONS, fn(16899).NotifSettings.OTHER_GUILD, fn(16899).NotifSettings.SAFETY_ALERTS, fn(16899).NotifSettings.INVITES_RECONNECTING, fn(16899).NotifSettings.TRENDING_SUGGESTIONS, fn(16899).NotifSettings.UPDATES_OFFERS];
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
      set1.clear();
    }
    if (null != map) {
      const tmp28 = map[Symbol.iterator]();
      while (tmp28 !== undefined) {
        let tmp10 = _slicedToArray(tmp7, 2);
        [tmp11, tmp13] = tmp10;
        let setting = NotifSettingsProtoStore.getSetting(tmp11);
        let toggle;
        let tmp16 = setting;
        if (setting != null) {
          toggle = setting.toggle;
        }
        let tmp19 = toggle === tmp13.toggle;
        if (tmp19) {
          tmp19 = tmp16.radio === tmp13.radio;
        }
        if (!tmp19) {
          let deleteResult = map.delete(tmp11);
        }
        continue;
      }
    }
    syncClientNotifDenylist(map, set, set1);
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
  const set1 = new Set();
  NotifSettingsProtoStore.addChangeListener(sync);
  AuthenticationStore.addChangeListener(sync);
  onEdit.addChangeListener(sync);
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