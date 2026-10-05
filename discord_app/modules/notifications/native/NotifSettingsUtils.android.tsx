// discord_app/modules/notifications/native/NotifSettingsUtils.android.tsx
import intl2 from "../../../intl/index.native.tsx";
import SentryUtilsDefault from "../../../utils/SentryUtils.native.tsx";
import react_nativeDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeNotifSettingsModule.tsx";
import NotificationSettingsConstants from "../NotificationSettingsConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let map, map1, notifType;

let c3;
let closure_4;
let hasOwnProperty;
function inferImportanceFromBehavior(visibility) {
  if (!("ringtone" in visibility)) {
    let HIGH;
    if ("popup" !== visibility.visibility) {
      if ("hidden" === visibility.visibility) {
        HIGH = constants.MIN;
      } else {
        HIGH = visibility.sound ? constants.DEFAULT : constants.LOW;
      }
    }
    return HIGH;
  }
  HIGH = constants.HIGH;
}
function formatCategory(id) {
  let intl;
  const obj = { id: id.string_id, name: intl.string(id.title) };
  intl = intl2.intl;
  return obj;
}
function formatSetting(item10022, arg1) {
  let intl;
  let ringtone;
  let tmp = arg1;
  const obj = {
    id: item10022.string_id,
    groupId: item10022.category,
    name: intl.string(item10022.title),
    importance: tmp,
    ringtone,
    badge: item10022.behavior.badge,
    vibrate: item10022.behavior.vibrate,
  };
  intl = intl2.intl;
  if (arg1 == null) {
    const behavior = item10022.behavior;
    if (!("ringtone" in behavior)) {
      let HIGH;
      if ("popup" !== behavior.visibility) {
        if ("hidden" === behavior.visibility) {
          HIGH = constants.MIN;
        } else {
          HIGH = behavior.sound ? constants.DEFAULT : constants.LOW;
        }
      }
      tmp = HIGH;
    }
    HIGH = constants.HIGH;
  }
  ringtone = undefined;
  if ("ringtone" in item10022.behavior) {
    ringtone = item10022.behavior.ringtone;
  }
  return obj;
}
function buildChannelsAndMapping() {
  let mappings;
  let settings;
  function computeInheritedImportances(mappings) {
    map = new Map();
    const tmp = react_nativeDefault;
    let prop;
    if (tmp != null) {
      prop = tmp.getAndroidNotifChannelStates;
    }
    if (null == prop) {
      return map;
    } else {
      const _Map2 = Map;
      const self3 = this;
      const self4 = this;
      map1 = new Map();
      const propResult = prop();
      for (const item10020 of propResult) {
        let result = map1.set(item10020.channelId, item10020.importance);
        continue;
      }
      const _Map = Map;
      const self = this;
      const self2 = this;
      const map2 = new Map();
      for (const item10036 of closure_1_5) {
        let result1 = map2.set(item10036.id, item10036);
        continue;
      }
      const iter = mappings[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let notifSetting = nextResult.notifSetting;
        let tmp15 = closure_1_4[nextResult.notifType];
        if (null != tmp15) {
          for (const item10055 of tmp15) {
            if (item10055 !== notifSetting) {
              let value = map2.get(tmp18);
              let tmp22 = value;
              if (null != value) {
                let value2 = map1.get(tmp22.string_id);
                let tmp25 = value2;
                if (null != value2) {
                  if (tmp25 !== inferImportanceFromBehavior(tmp22.behavior)) {
                    let result2 = map.set(notifSetting, tmp25);
                    obj4.return();
                    break;
                  }
                }
              }
            }
            continue;
          }
        }
        continue;
      }
      return map;
    }
  }
  const obj = map(14290);
  const assignedNotifSettingsAndMappings = obj.getAssignedNotifSettingsAndMappings();
  ({ settings, mappings } = assignedNotifSettingsAndMappings);
  const obj2 = computeInheritedImportances(mappings);
  let items = [];
  map = new Map();
  for (const item10022 of settings) {
    let arr = items.push(formatSetting(item10022, obj2.get(item10022.id)));
    let result = map.set(item10022.id, item10022.string_id);
    continue;
  }
  const obj3 = {
    mapping: mappings.flatMap((notifType) => {
      let items;
      notifType = notifType.notifType;
      const value = map.get(notifType.notifSetting);
      if (null == value) {
        items = [];
      } else {
        items = { type: notifType, channel: value };
      }
      return items;
    }),
    channels: items,
    inheritedImportances: obj2,
  };
  return obj3;
}
({
  NOTIF_CATEGORIES: c3,
  NOTIF_SETTING_MAPPING: closure_4,
  NOTIF_SETTINGS: hasOwnProperty,
} = NotificationSettingsConstants);
const constants = {
  NONE: 0,
  [0]: "NONE",
  MIN: 1,
  [1]: "MIN",
  LOW: 2,
  [2]: "LOW",
  DEFAULT: 3,
  [3]: "DEFAULT",
  HIGH: 4,
  [4]: "HIGH",
};
let obj = {
  clear() {
    let registerAndroidNotifGroupsAndChannels;
    let registerAndroidNotifTypeMappings;
    let obj = react_nativeDefault;
    if (obj == null) {
      obj = {};
    }
    ({ registerAndroidNotifGroupsAndChannels, registerAndroidNotifTypeMappings } = obj);
    if (null != registerAndroidNotifGroupsAndChannels) {
      const result = registerAndroidNotifGroupsAndChannels([], []);
    }
    if (null != registerAndroidNotifTypeMappings) {
      const result1 = registerAndroidNotifTypeMappings([]);
    }
  },
  registerDeclarativeNotificationCategories() {
    let arr;
    let channels;
    let inheritedImportances;
    let mapping;
    let obj3;
    let registerAndroidNotifGroupsAndChannels;
    let registerAndroidNotifTypeMappings;
    let obj = react_nativeDefault;
    if (obj == null) {
      obj = {};
    }
    ({ registerAndroidNotifGroupsAndChannels, registerAndroidNotifTypeMappings } = obj);
    if (null != registerAndroidNotifGroupsAndChannels) {
      if (null != registerAndroidNotifTypeMappings) {
        ({ channels, inheritedImportances, mapping } = buildChannelsAndMapping());
        buildChannelsAndMapping();
        const obj2 = { message: "Registering declarative notification categories", data: obj3 };
        obj3 = {
          channels: channels.map((id) => id.id),
          inheritedImportances: arr.map((item) => {
            let tmp;
            let tmp2;
            [tmp, tmp2] = item;
            return "NotifSettings#" + tmp + " -> " + tmp2;
          }),
        };
        const addBreadcrumb = SentryUtilsDefault.addBreadcrumb;
        SentryUtilsDefault;
        const _Array = Array;
        arr = Array.from(inheritedImportances.entries());
        addBreadcrumb(obj2);
        const result = registerAndroidNotifGroupsAndChannels(_false.map(formatCategory), channels);
        const result1 = registerAndroidNotifTypeMappings(mapping);
        return true;
      }
    }
    return false;
  },
};
let result = size.fileFinishedImporting("modules/notifications/native/NotifSettingsUtils.android.tsx");

export default obj;
