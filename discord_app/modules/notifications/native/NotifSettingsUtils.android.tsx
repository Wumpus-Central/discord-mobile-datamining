// discord_app/modules/notifications/native/NotifSettingsUtils.android.tsx
import items2 from "items2";
import { NativeNotifSettingsModule } from "../../../../discord_common/js/packages/rtn-codegen/js/NativeNotifSettingsModule.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { SentryUtils.native } from "../../../utils/SentryUtils.native.tsx";

let c3;
let c4;
let c5;
function inferImportanceFromBehavior(visibility) {
  if (!("ringtone" in visibility)) {
    if ("popup" !== visibility.visibility) {
      if ("hidden" === visibility.visibility) {
        let HIGH = constants.MIN;
      } else {
        HIGH = visibility.sound ? tmp2.DEFAULT : tmp2.LOW;
      }
    }
    return HIGH;
  }
  HIGH = constants.HIGH;
}
function formatCategory(id) {
  const obj = { id: id.string_id, name: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(id.title);
  return obj;
}
function formatSetting(item10022, arg1) {
  const obj = { id: item10022.string_id, groupId: item10022.category, name: null, importance: null, ringtone: null, badge: null, vibrate: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(item10022.title);
  if (arg1 != null) {
    obj[3] = arg1;
    let ringtone;
    if ("ringtone" in item10022.behavior) {
      ringtone = item10022.behavior.ringtone;
    }
    obj[4] = ringtone;
    obj[5] = item10022.behavior.badge;
    obj[6] = item10022.behavior.vibrate;
    return obj;
  } else {
    const behavior = item10022.behavior;
    if (!("ringtone" in behavior)) {
      if ("popup" !== behavior.visibility) {
        if ("hidden" === behavior.visibility) {
          let HIGH = constants.MIN;
        } else {
          HIGH = behavior.sound ? tmp.DEFAULT : tmp.LOW;
        }
      }
    }
    HIGH = constants.HIGH;
  }
}
function buildChannelsAndMapping() {
  let mappings;
  let settings;
  let obj = map(13733);
  const assignedNotifSettingsAndMappings = obj.getAssignedNotifSettingsAndMappings();
  ({ settings, mappings } = assignedNotifSettingsAndMappings);
  const obj2 = (function computeInheritedImportances(mappings) {
    const map = new Map();
    const tmp = callback(table[2]);
    let prop;
    if (tmp != null) {
      prop = tmp.getAndroidNotifChannelStates;
    }
    if (null == prop) {
      return map;
    } else {
      const _Map2 = Map;
      const map1 = new Map();
      const propResult = prop();
      for (const item10020 of propResult) {
        let result = map1.set(item10020.channelId, item10020.importance);
        continue;
      }
      const _Map = Map;
      const map2 = new Map();
      for (const item10036 of closure_5) {
        let result1 = map2.set(item10036.id, item10036);
        continue;
      }
      const iter = mappings[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let notifSetting = nextResult.notifSetting;
        let tmp16 = table2;
        let tmp17 = table2[nextResult.notifType];
        if (null != tmp17) {
          let tmp40 = tmp18;
          let tmp19 = tmp17;
          for (const item10055 of tmp17) {
            let tmp21 = notifSetting;
            if (item10055 !== notifSetting) {
              let tmp22 = item10055;
              let value = map2.get(tmp20);
              let tmp24 = value;
              if (null != value) {
                let tmp25 = value;
                value = map1.get(tmp24.string_id);
                let tmp27 = value;
                if (null != value) {
                  let tmp28 = value;
                  let tmp29 = callback2;
                  let tmp30 = value;
                  if (tmp27 !== callback2(tmp24.behavior)) {
                    let tmp31 = notifSetting;
                    let tmp32 = value;
                    let result2 = map.set(notifSetting, tmp27);
                    let tmp34 = obj4;
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
  })(mappings);
  let items = [];
  map = new Map();
  for (const item10022 of settings) {
    let tmp2 = formatSetting;
    let arr = items.push(formatSetting(item10022, obj2.get(item10022.id)));
    let result = map.set(item10022.id, item10022.string_id);
    continue;
  }
  obj = {
    mapping: mappings.flatMap((notifSetting) => {
      const value = map.get(notifSetting.notifSetting);
      if (null == value) {
        let items = [];
      } else {
        items = { type: null, channel: null };
        items[0] = notifSetting.notifType;
        items[1] = value;
      }
      return items;
    }),
    channels: items,
    inheritedImportances: obj2
  };
  return obj;
}
({ NOTIF_CATEGORIES: c3, NOTIF_SETTING_MAPPING: c4, NOTIF_SETTINGS: c5 } = items2);
let closure_6 = { NONE: 0, [0]: "NONE", MIN: 1, [1]: "MIN", LOW: 2, [2]: "LOW", DEFAULT: 3, [3]: "DEFAULT", HIGH: 4, [4]: "HIGH" };
let result = require("NativeNotifSettingsModule").fileFinishedImporting("modules/notifications/native/NotifSettingsUtils.android.tsx");

export default {
  clear() {
    let registerAndroidNotifGroupsAndChannels;
    let registerAndroidNotifTypeMappings;
    let obj = NativeNotifSettingsModule;
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
    let channels;
    let inheritedImportances;
    let mapping;
    let registerAndroidNotifGroupsAndChannels;
    let registerAndroidNotifTypeMappings;
    let obj = NativeNotifSettingsModule;
    if (obj == null) {
      obj = {};
    }
    ({ registerAndroidNotifGroupsAndChannels, registerAndroidNotifTypeMappings } = obj);
    if (null != registerAndroidNotifGroupsAndChannels) {
      if (null != registerAndroidNotifTypeMappings) {
        ({ channels, inheritedImportances, mapping } = buildChannelsAndMapping());
        const tmp4 = buildChannelsAndMapping();
        obj = { message: "Registering declarative notification categories", data: null };
        obj = { channels: null, inheritedImportances: null };
        obj[0] = channels.map((id) => id.id);
        const _Array = Array;
        const tmpResult = SentryUtils.native;
        obj[1] = Array.from(inheritedImportances.entries()).map((arg0) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = arg0;
          return "NotifSettings#" + tmp + " -> " + tmp2;
        });
        obj[1] = obj;
        tmpResult.addBreadcrumb(obj);
        const result = registerAndroidNotifGroupsAndChannels(closure_3.map(formatCategory), channels);
        const result1 = registerAndroidNotifTypeMappings(mapping);
        return true;
      }
    }
    return false;
  }
};