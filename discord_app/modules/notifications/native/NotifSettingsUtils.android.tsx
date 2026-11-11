// === Module 16786: NotifSettingsUtils ===

// Module 16786 (NotifSettingsUtils)
import util from "util" /* 1113 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import NativeNotifSettingsModuleDefault from "NativeNotifSettingsModule" /* 16787 */;
import NotificationSettingsConstants from "NotificationSettingsConstants" /* 16780 */;
import size from "module_2" /* 2 */;

function inferImportanceFromBehavior(visibility) {
  if (!("ringtone" in visibility)) {
    if ("popup" !== visibility.visibility) {
      if ("hidden" === visibility.visibility) {
        let HIGH = constants.MIN;
      } else {
        HIGH = visibility.sound ? constants.DEFAULT : constants.LOW;
      }
    }
    return HIGH;
  }
  HIGH = constants.HIGH;
}
function formatCategory(id) {
  const obj = { id: id.stringId, name: null };
  const intl = util.intl;
  const stringResult = intl.string(id.title);
  let stringId = id.stringId;
  if ("" !== stringResult) {
    stringId = stringResult;
  }
  obj.name = stringId;
  return obj;
}
function formatSetting(item10037, importance) {
  const obj = { id: item10037.string_id, groupId: item10037.category, name: null, importance: null, ringtone: null, badge: null, vibrate: null };
  const intl = util.intl;
  const stringResult = intl.string(item10037.title);
  let string_id = item10037.string_id;
  if ("" !== stringResult) {
    string_id = stringResult;
  }
  obj.name = string_id;
  if (importance != null) {
    obj.importance = importance;
    let ringtone;
    if ("ringtone" in item10037.behavior) {
      ringtone = item10037.behavior.ringtone;
    }
    obj.ringtone = ringtone;
    obj.badge = item10037.behavior.badge;
    obj.vibrate = item10037.behavior.vibrate;
    return obj;
  } else {
    const behavior = item10037.behavior;
    if (!("ringtone" in behavior)) {
      if ("popup" !== behavior.visibility) {
        if ("hidden" === behavior.visibility) {
          let HIGH = constants.MIN;
        } else {
          HIGH = behavior.sound ? constants.DEFAULT : constants.LOW;
        }
      }
    }
    HIGH = constants.HIGH;
  }
}
function buildChannelsAndMapping() {
  const assignedNotifSettingsAndMappings = items(set[2]).getAssignedNotifSettingsAndMappings();
  ({ categories, settings, mappings, redesignState } = assignedNotifSettingsAndMappings);
  const tmp2 = map(set[3]);
  let androidNotifChannelStates;
  if (tmp2 != null) {
    const getAndroidNotifChannelStates = tmp2.getAndroidNotifChannelStates;
    if (getAndroidNotifChannelStates != null) {
      androidNotifChannelStates = getAndroidNotifChannelStates();
    }
  }
  if (androidNotifChannelStates == null) {
    androidNotifChannelStates = [];
  }
  let obj2 = (function computeInheritedImportances(settings, mappings, androidNotifChannelStates, redesignState) {
    map = new Map();
    const map1 = new Map(androidNotifChannelStates.map((item) => {
      items = [, ];
      ({ channelId: arr[0], importance: arr[1] } = item);
      return items;
    }));
    const map2 = new Map(set2.map((id) => {
      items = [id.id, id];
      return items;
    }));
    const map3 = new Map();
    const map4 = new Map();
    const iter = set2[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      set1 = map4.get(nextResult.string_id);
      if (set1 == null) {
        let _Set = Set;
        let tmp4 = new.target;
        let tmp5 = new.target;
        set1 = new Set();
      }
      let addResult = set1.add(inferImportanceFromBehavior(tmp3.behavior));
      let result = map4.set(tmp3.string_id, set1);
      continue;
    }
    const iter2 = settings[Symbol.iterator]();
    const nextResult1 = iter2.next();
    while (iter2 !== undefined) {
      let tmp11 = nextResult1;
      let prop = nextResult1.sourceAndroidChannels;
      if (prop == null) {
        prop = [];
      }
      let tmp12 = new.target;
      let tmp13 = new.target;
      set = new Set(prop);
      let obj7 = set;
      if (!redesignState) {
        for (const item10092 of set2) {
          let sourceAndroidChannels = item10092.sourceAndroidChannels;
          let hasItem;
          if (sourceAndroidChannels != null) {
            hasItem = sourceAndroidChannels.includes(tmp11.string_id);
          }
          if (hasItem) {
            let addResult1 = obj7.add(item10092.string_id);
          }
          continue;
        }
      }
      let result1 = map3.set(tmp11.id, obj7);
      continue;
    }
    const iter3 = mappings[Symbol.iterator]();
    while (iter3 !== undefined) {
      ({ notifType, notifSetting } = nextResult2);
      let value7 = map2.get(notifSetting);
      let tmp30 = value7;
      if (null != value7) {
        if (!("sourceAndroidChannels" in tmp30)) {
          items = mapped[notifType];
          if (items == null) {
            items = [];
          }
          for (const item10132 of items) {
            let value8 = map2.get(item10132);
            let tmp36 = value8;
            let tmp37 = null != value8;
            if (tmp37) {
              tmp37 = tmp36.string_id !== tmp30.string_id;
            }
            if (tmp37) {
              let value9 = map3.get(notifSetting);
              if (value9 != null) {
                let addResult2 = value9.add(tmp36.string_id);
              }
            }
            continue;
          }
        }
      }
      continue;
    }
    const iter4 = settings[Symbol.iterator]();
    const nextResult3 = iter4.next();
    while (iter4 !== undefined) {
      let tmp44 = nextResult3;
      if (!map1.has(nextResult3.string_id)) {
        let tmp47 = inferImportanceFromBehavior(tmp44.behavior);
        let bound = tmp47;
        let tmp48 = tmp47;
        let value10 = map3.get(tmp44.id);
        if (value10 == null) {
          value10 = [];
        }
        for (const item10173 of value10) {
          let value11 = map1.get(item10173);
          let tmp54 = value11;
          let tmp55 = null == value11;
          if (!tmp55) {
            let _Number = Number;
            tmp55 = !Number.isInteger(tmp54);
          }
          if (!tmp55) {
            tmp55 = tmp54 < constants.NONE;
          }
          if (!tmp55) {
            let value12 = map4.get(item10173);
            let hasItem1;
            if (value12 != null) {
              hasItem1 = value12.has(tmp54);
            }
            if (true !== hasItem1) {
              let _Math = Math;
              bound = Math.min(bound, tmp54);
            }
          }
          continue;
        }
        if (bound < tmp48) {
          let result2 = map.set(tmp44.id, bound);
        }
      }
      continue;
    }
    return map;
  })(settings, mappings, androidNotifChannelStates, redesignState);
  items = [];
  map = new Map();
  for (const item10037 of settings) {
    let arr = items.push(formatSetting(item10037, obj2.get(item10037.id)));
    let result = map.set(item10037.id, item10037.string_id);
    continue;
  }
  set = new Set(items.map((id) => id.id));
  new Set(androidNotifChannelStates.map((channelId) => channelId.channelId));
  const mapped = categories.map(formatCategory);
  const obj = items(set[2]);
  for (const item10083 of set2) {
    let tmp9 = (function _loop(item10083) {
      if (set1.has(item10083.string_id)) {
        if (!set.has(item10083.string_id)) {
          items.push(formatSetting(item10083));
          set.add(item10083.string_id);
          const found = React3.find((string_id) => string_id.string_id === item10083.category);
          let hasItem = null == found;
          if (!hasItem) {
            hasItem = set2.has(found.string_id);
          }
          if (!hasItem) {
            let string_id = found.string_id;
            const obj2 = { id: string_id, name: null };
            const intl = util.intl;
            const stringResult = intl.string(found.title);
            if ("" !== stringResult) {
              string_id = stringResult;
            }
            obj2.name = string_id;
            mapped.push(obj2);
            set2.add(found.string_id);
          }
        }
      }
      return 1;
    })(item10083);
    continue;
  }
  const set2 = new Set(mapped.map((id) => id.id));
  return {
    groups: mapped,
    mapping: mappings.flatMap((notifSetting) => {
      value = map.get(notifSetting.notifSetting);
      if (null == value) {
        items = [];
      } else {
        items = { type: notifSetting.notifType, channel: value };
      }
      return items;
    }),
    channels: items,
    inheritedImportances: obj2
  };
}
({ NOTIF_CATEGORIES: c3, NOTIF_SETTING_MAPPING: closure_4, NOTIF_SETTINGS: hasOwnProperty } = NotificationSettingsConstants);
const constants = { NONE: 0, [0]: "NONE", MIN: 1, [1]: "MIN", LOW: 2, [2]: "LOW", DEFAULT: 3, [3]: "DEFAULT", HIGH: 4, [4]: "HIGH" };
let result = size.fileFinishedImporting("modules/notifications/native/NotifSettingsUtils.android.tsx");

export default {
  registerDeclarativeNotificationCategories() {
    let obj = NativeNotifSettingsModuleDefault;
    if (obj == null) {
      obj = {};
    }
    ({ registerAndroidNotifGroupsAndChannels, registerAndroidNotifTypeMappings } = obj);
    if (null != registerAndroidNotifGroupsAndChannels) {
      if (null != registerAndroidNotifTypeMappings) {
        ({ groups, channels, inheritedImportances, mapping } = buildChannelsAndMapping());
        const tmp4 = buildChannelsAndMapping();
        const obj2 = { message: "Registering declarative notification categories", data: null };
        const obj3 = { channels: channels.map((id) => id.id), entriesWithFallbackNames: null, inheritedImportances: null };
        items = [];
        HermesBuiltin.arraySpread(channels, HermesBuiltin.arraySpread(groups, 0));
        const found = items.filter((name) => name.name === name.id);
        obj3.entriesWithFallbackNames = found.map((id) => id.id);
        const _Array = Array;
        const tmpResult = SentryUtilsDefault;
        obj3.inheritedImportances = Array.from(inheritedImportances.entries()).map((item) => {
          [tmp, tmp2] = item;
          return "NotifSettings#" + tmp + " -> " + tmp2;
        });
        obj2.data = obj3;
        tmpResult.addBreadcrumb(obj2);
        const result = registerAndroidNotifGroupsAndChannels(groups, channels);
        const result1 = registerAndroidNotifTypeMappings(mapping);
        return true;
      }
    }
    return false;
  }
};