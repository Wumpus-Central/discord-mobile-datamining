// discord_app/modules/notifications/native/NotifSettingsUtils.android.tsx
import util from "../../../intl/index.native.tsx";
import SentryUtilsDefault from "../../../utils/SentryUtils.native.tsx";
import NativeNotifSettingsModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeNotifSettingsModule.tsx";
import NotificationSettingsConstants from "../NotificationSettingsConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
  obj.name = intl.string(id.title);
  return obj;
}
function formatSetting(item10023, importance) {
  const obj = {
    id: item10023.string_id,
    groupId: item10023.category,
    name: null,
    importance: null,
    ringtone: null,
    badge: null,
    vibrate: null,
  };
  const intl = util.intl;
  obj.name = intl.string(item10023.title);
  if (importance != null) {
    obj.importance = importance;
    let ringtone;
    if ("ringtone" in item10023.behavior) {
      ringtone = item10023.behavior.ringtone;
    }
    obj.ringtone = ringtone;
    obj.badge = item10023.behavior.badge;
    obj.vibrate = item10023.behavior.vibrate;
    return obj;
  } else {
    const behavior = item10023.behavior;
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
  const assignedNotifSettingsAndMappings = map(15960).getAssignedNotifSettingsAndMappings();
  ({ categories, settings, mappings } = assignedNotifSettingsAndMappings);
  const obj2 = (function computeInheritedImportances(mappings) {
    map = new Map();
    const tmp = NativeNotifSettingsModuleDefault;
    let prop;
    if (tmp != null) {
      prop = tmp.getAndroidNotifChannelStates;
    }
    if (null == prop) {
      return map;
    } else {
      const _Map2 = Map;
      map1 = new Map();
      const propResult = prop();
      for (const item10020 of propResult) {
        let result = map1.set(item10020.channelId, item10020.importance);
        continue;
      }
      const _Map = Map;
      const map2 = new Map();
      for (const item10036 of closure_1_4) {
        let result1 = map2.set(item10036.id, item10036);
        continue;
      }
      const iter = mappings[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let notifSetting = nextResult.notifSetting;
        let tmp17 = closure_1_3[nextResult.notifType];
        if (null != tmp17) {
          for (const item10055 of tmp17) {
            if (item10055 !== notifSetting) {
              value = map2.get(tmp20);
              let tmp24 = value;
              if (null != value) {
                value2 = map1.get(tmp24.string_id);
                let tmp27 = value2;
                if (null != value2) {
                  if (tmp27 !== inferImportanceFromBehavior(tmp24.behavior)) {
                    let result2 = map.set(notifSetting, tmp27);
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
  for (const item10023 of settings) {
    let arr = items.push(formatSetting(item10023, obj2.get(item10023.id)));
    let result = map.set(item10023.id, item10023.string_id);
    continue;
  }
  const obj3 = { groups: null, mapping: null, channels: null, inheritedImportances: null };
  const obj = map(15960);
  obj3.groups = categories.map(formatCategory);
  obj3.mapping = mappings.flatMap((notifSetting) => {
    value = map.get(notifSetting.notifSetting);
    if (null == value) {
      let items = [];
    } else {
      items = { type: notifSetting.notifType, channel: value };
    }
    return items;
  });
  obj3.channels = items;
  obj3.inheritedImportances = obj2;
  return obj3;
}
({ NOTIF_SETTING_MAPPING: c3, NOTIF_SETTINGS: closure_4 } = NotificationSettingsConstants);
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
        ({ channels, inheritedImportances, groups, mapping } = buildChannelsAndMapping());
        const tmp4 = buildChannelsAndMapping();
        const obj2 = { message: "Registering declarative notification categories", data: null };
        const obj3 = { channels: channels.map((id) => id.id), inheritedImportances: null };
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
  },
};
