// === Module 16822: ChannelSettingsPermissionsStore ===

// Module 16822 (ChannelSettingsPermissionsStore)
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import PermissionUtilsAll from "PermissionUtils" /* 4204 */;
import AppChannelPermissionUtils from "AppChannelPermissionUtils" /* 11610 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;
import ChannelSettingsStore from "ChannelSettingsStore" /* 8626 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
function init() {
  _null2 = ChannelSettingsStore.getChannel();
  const category = ChannelSettingsStore.getCategory();
  if (null == _null2) {
    return false;
  } else {
    const guildId = _null2.getGuildId();
    const guildId1 = _null2.getGuildId();
    let obj = {};
    const merged = Object.assign(_null2.permissionOverwrites);
    if (tmp) {
      obj = PermissionUtilsAll;
      obj[guildId1] = obj.makeEveryoneOverwrite(guildId1);
    }
    c16 = obj;
    c17 = obj;
    if (null == obj[c20]) {
      c20 = guildId;
    }
    closure_5 = null != category;
    const obj2 = PermissionUtilsAll;
    tmp = null != guildId1 && null == obj[guildId1];
    obj2.areChannelsLocked(_null2, category, AppChannelPermissionUtils.getAppChannelBotUserId(_null2));
    c21 = null;
    c15 = false;
    CLOSED = FormStates.CLOSED;
    set.clear();
  }
}
function syncChannelUpdates(id) {
  if (null != channel) {
    if (channel.id === id) {
      channel = ChannelStore.getChannel(id);
      if (null == channel) {
        return false;
      } else {
        const category = ChannelSettingsStore.getCategory();
        const guildId = channel.getGuildId();
        if (null == guildId) {
          return false;
        } else {
          const guildId1 = channel.getGuildId();
          let obj = {};
          const merged = Object.assign(channel.permissionOverwrites);
          if (tmp) {
            obj = PermissionUtilsAll;
            obj[guildId1] = obj.makeEveryoneOverwrite(guildId1);
          }
          obj = {};
          const item = set.forEach((item) => {
            if (null != obj1) {
              obj[item] = obj1[item];
            }
          });
          let tmp6 = null == obj[guildId];
          if (tmp6) {
            tmp6 = null == channel.permissionOverwrites[guildId];
          }
          if (tmp6) {
            obj[guildId] = PermissionUtilsAll.makeEveryoneOverwrite(guildId);
          }
          const obj1 = {};
          const merged1 = Object.assign(channel.permissionOverwrites);
          const merged2 = Object.assign(obj);
          if (null == obj1[closure_20]) {
            closure_20 = guildId;
          } else {
            let tmp18 = null != c21;
            if (tmp18) {
              tmp18 = null != obj1[c21];
            }
            if (tmp18) {
              closure_20 = c21;
              c21 = null;
            }
          }
          const obj5 = PermissionUtilsAll;
          tmp = null != guildId1 && null == obj[guildId1];
          closure_4 = obj5.areChannelsLocked(channel, category, obj(11610).getAppChannelBotUserId(channel));
          return true;
        }
      }
    }
  }
  return false;
}
const Constants = fn(1074);
({ ChannelSettingsSections: closure_9, ChannelTypes: c10, FormStates } = Constants);
const ADVANCED_MODE_ON_KEY = fn(8401).ADVANCED_MODE_ON_KEY;
const set = new Set();
let CLOSED = FormStates.CLOSED;
let c15 = false;
let c16 = null;
let c17 = null;
let c18 = null;
let c19 = null;
let c20 = null;
let c21 = null;
let Storage = fn(510).Storage;
let advancedMode = Storage.get(ADVANCED_MODE_ON_KEY) || false;
const Store = initializeDefault.Store;
class ChannelSettingsPermissionsStore extends Store {
}
const prototype = ChannelSettingsPermissionsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelSettingsStore, ChannelStore, ApplicationStore);
};
prototype["hasChanges"] = function hasChanges() {
  return c15;
};
prototype["showNotice"] = function showNotice() {
  return this.hasChanges();
};
prototype["getPermissionOverwrite"] = function getPermissionOverwrite(arg0) {
  let tmp2;
  if (c16 != null) {
    tmp2 = tmp[arg0];
  }
  return tmp2;
};
Object.defineProperty(prototype, "editedPermissionIds", {
  get: function editedPermissionIds() {
    return Array.from(set);
  },
  set: undefined
});
Object.defineProperty(prototype, "permissionOverwrites", {
  get: function permissionOverwrites() {
    return c16;
  },
  set: undefined
});
Object.defineProperty(prototype, "selectedOverwriteId", {
  get: function selectedOverwriteId() {
    return c20;
  },
  set: undefined
});
Object.defineProperty(prototype, "formState", {
  get: function formState() {
    return CLOSED;
  },
  set: undefined
});
Object.defineProperty(prototype, "isLockable", {
  get: function isLockable() {
    return closure_5;
  },
  set: undefined
});
Object.defineProperty(prototype, "locked", {
  get: function locked() {
    return areChannelsLockedResult;
  },
  set: undefined
});
Object.defineProperty(prototype, "channel", {
  get: function channel() {
    return c18;
  },
  set: undefined
});
Object.defineProperty(prototype, "category", {
  get: function category() {
    return c19;
  },
  set: undefined
});
Object.defineProperty(prototype, "advancedMode", {
  get: function advancedMode() {
    return advancedMode;
  },
  set: undefined
});
ChannelSettingsPermissionsStore.displayName = "ChannelSettingsPermissionsStore";
const channelSettingsPermissionsStore = new ChannelSettingsPermissionsStore(DispatcherDefault, {
  CHANNEL_SETTINGS_SET_SECTION: function handleSetSection(arg0) {
    if (null == c18) {
      if (tmp === constants.PERMISSIONS) {
        init();
      }
    }
    return false;
  },
  CHANNEL_SETTINGS_PERMISSIONS_INIT: init,
  CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function handleUpdatePermission(id) {
    id = id.id;
    let tmp;
    ({ allow, deny } = id);
    if (_null != null) {
      tmp = _null[id];
    }
    if (null != tmp) {
      if (null != c18) {
        let obj = {};
        const merged = Object.assign(tmp);
        obj.allow = allow;
        obj.deny = deny;
        obj = {};
        const merged1 = Object.assign(_null);
        obj[id] = obj;
        _null = obj;
        set.add(id);
        CLOSED = FormStates.OPEN;
        c15 = !_modDef12.isEqual(_null, c17);
        const obj4 = PermissionUtilsAll;
        obj4.areChannelsLocked(c18, c19, AppChannelPermissionUtils.getAppChannelBotUserId(c18));
      }
    }
    return false;
  },
  CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function handleSelectPermission(id) {
    id = id.id;
    if (null != _null) {
      if (null != _null[id]) {
        c20 = id;
      }
    }
    if (null == c18) {
      return false;
    } else {
      c21 = id;
    }
  },
  CHANNEL_SETTINGS_INIT: function handleInit() {
    if (ChannelSettingsStore.getSection() === constants.PERMISSIONS) {
      init();
    }
  },
  CHANNEL_SETTINGS_CLOSE: function handleClose() {
    CLOSED = FormStates.CLOSED;
    c16 = null;
    c17 = null;
    c18 = null;
    c19 = null;
    c15 = false;
    set.clear();
    c20 = null;
    c21 = null;
  },
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    channels = channels.channels;
    if (null == c18) {
      return false;
    } else {
      let flag2 = false;
      const tmp2 = channels[Symbol.iterator]();
      while (tmp2 !== undefined) {
        if (false !== syncChannelUpdates(tmp4.id)) {
          flag2 = true;
        }
        continue;
      }
      return flag2;
    }
  },
  CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function handleSubmitting() {
    CLOSED = FormStates.SUBMITTING;
  },
  CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function handleSaveSuccess(silent) {
    if (silent.silent) {
      CLOSED = FormStates.OPEN;
    } else {
      CLOSED = FormStates.CLOSED;
      init();
    }
  },
  CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function handleSetAdvancedMode(advancedMode) {
    advancedMode = advancedMode.advancedMode;
    const Storage = Storage2.Storage;
    const result = Storage.set(ADVANCED_MODE_ON_KEY, advancedMode);
  },
  APPLICATION_FETCH_SUCCESS: function handleApplicationFetchSuccess() {
    if (null != _null2) {
      if (_null2.type === constants2.GUILD_APP) {
        const obj = PermissionUtilsAll;
        areChannelsLockedResult = obj.areChannelsLocked(_null2, c19, AppChannelPermissionUtils.getAppChannelBotUserId(_null2));
        return areChannelsLockedResult !== areChannelsLockedResult;
      }
    }
    return false;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("stores/ChannelSettingsPermissionsStore.tsx");

export default channelSettingsPermissionsStore;