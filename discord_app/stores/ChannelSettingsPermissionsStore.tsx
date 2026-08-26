// === Module 16251: init ===

// Module 16251 (init)
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 589 */;
import Storage2 from "Storage" /* 595 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import applyOverwritesAll from "applyOverwrites" /* 4094 */;
import closure_6 from "normalizeChannelPropertyForCompare" /* 8235 */;
import closure_7 from "ensureGuildLoaded" /* 1391 */;
import ME from "ME" /* 676 */;
import { ADVANCED_MODE_ON_KEY } from "RowType" /* 7993 */;
import { Storage } from "Storage" /* 595 */;
import set from "set" /* 2 */;

require = arg1;
function init() {
  const _null2 = store.getChannel();
  const category = store.getCategory();
  if (null == _null2) {
    return false;
  } else {
    const guildId = _null2.getGuildId();
    const guildId1 = _null2.getGuildId();
    let obj = {};
    const merged = Object.assign(_null2.permissionOverwrites);
    if (tmp) {
      obj = applyOverwritesAll;
      obj[guildId1] = obj.makeEveryoneOverwrite(guildId1);
    }
    closure_5 = null != category;
    closure_4 = applyOverwritesAll.areChannelsLocked(_null2, category);
    c19 = null;
    c13 = false;
    CLOSED = FormStates.CLOSED;
    set.clear();
  }
}
function syncChannelUpdates(id) {
  if (null != channel) {
    if (channel.id === id) {
      channel = channel.getChannel(id);
      if (null == channel) {
        return false;
      } else {
        const category = store.getCategory();
        const guildId = channel.getGuildId();
        if (null == guildId) {
          return false;
        } else {
          const guildId1 = channel.getGuildId();
          let obj = {};
          const merged = Object.assign(channel.permissionOverwrites);
          if (tmp) {
            obj = applyOverwritesAll;
            obj[guildId1] = obj.makeEveryoneOverwrite(guildId1);
          }
          obj = {};
          const item = set.forEach((arg0) => {
            if (null != obj1) {
              obj[arg0] = obj1[arg0];
            }
          });
          let tmp6 = null == obj[guildId];
          if (tmp6) {
            tmp6 = null == channel.permissionOverwrites[guildId];
          }
          if (tmp6) {
            obj[guildId] = applyOverwritesAll.makeEveryoneOverwrite(guildId);
            const obj3 = applyOverwritesAll;
          }
          obj1 = {};
          const merged1 = Object.assign(channel.permissionOverwrites);
          const merged2 = Object.assign(obj);
          if (null == obj1[closure_18]) {
            closure_18 = guildId;
          } else {
            let tmp18 = null != c19;
            if (tmp18) {
              tmp18 = null != obj1[c19];
            }
            if (tmp18) {
              closure_18 = c19;
              c19 = null;
            }
          }
          closure_4 = applyOverwritesAll.areChannelsLocked(channel, category);
          return true;
        }
      }
    }
  }
  return false;
}
({ ChannelSettingsSections: closure_8, FormStates } = ME);
let set = new Set();
let CLOSED = FormStates.CLOSED;
let c13 = false;
let c14 = null;
let c15 = null;
let c16 = null;
let c17 = null;
let c18 = null;
let c19 = null;
let closure_20 = Storage.get(ADVANCED_MODE_ON_KEY) || false;
const Store = initializeDefault.Store;
class ChannelSettingsPermissionsStore extends Store {
}
const prototype = ChannelSettingsPermissionsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_6, closure_7);
};
prototype["hasChanges"] = function hasChanges() {
  return c13;
};
prototype["showNotice"] = function showNotice() {
  return this.hasChanges();
};
prototype["getPermissionOverwrite"] = function getPermissionOverwrite(arg0) {
  let tmp2;
  if (c14 != null) {
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
    return c14;
  },
  set: undefined
});
Object.defineProperty(prototype, "selectedOverwriteId", {
  get: function selectedOverwriteId() {
    return c18;
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
    return closure_4;
  },
  set: undefined
});
Object.defineProperty(prototype, "channel", {
  get: function channel(channel, arg1) {
    return c16;
  },
  set: undefined
});
Object.defineProperty(prototype, "category", {
  get: function category(arg0) {
    return c17;
  },
  set: undefined
});
Object.defineProperty(prototype, "advancedMode", {
  get: function advancedMode() {
    return closure_20;
  },
  set: undefined
});
ChannelSettingsPermissionsStore.displayName = "ChannelSettingsPermissionsStore";
const channelSettingsPermissionsStore = new ChannelSettingsPermissionsStore(dispatcherDefault, {
  CHANNEL_SETTINGS_SET_SECTION: function handleSetSection(arg0) {
    if (null == c16) {
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
    if (obj != null) {
      tmp = obj[id];
    }
    if (null != tmp) {
      if (null != c16) {
        obj = {};
        const merged = Object.assign(tmp);
        obj.allow = allow;
        obj.deny = deny;
        obj = {};
        const merged1 = Object.assign(obj);
        obj[id] = obj;
        set.add(id);
        const OPEN = FormStates.OPEN;
        closure_13 = !applyDefault.isEqual(obj, c15);
        const obj3 = applyDefault;
        closure_4 = applyOverwritesAll.areChannelsLocked(c16, c17);
      }
    }
    return false;
  },
  CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function handleSelectPermission(id) {
    id = id.id;
    if (null == c16) {
      return false;
    }
  },
  CHANNEL_SETTINGS_INIT: function handleInit() {
    if (store.getSection() === constants.PERMISSIONS) {
      init();
    }
  },
  CHANNEL_SETTINGS_CLOSE: function handleClose() {
    CLOSED = FormStates.CLOSED;
    c14 = null;
    c15 = null;
    c16 = null;
    c17 = null;
    c13 = false;
    set.clear();
    c18 = null;
    c19 = null;
  },
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    channels = channels.channels;
    if (null == c16) {
      return false;
    } else {
      let flag2 = false;
      const tmp2 = channels[Symbol.iterator]();
      while (tmp2 !== undefined) {
        let tmp6 = syncChannelUpdates;
        if (false !== syncChannelUpdates(tmp4.id)) {
          flag2 = true;
        }
        continue;
      }
      return flag2;
    }
  },
  CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function handleSubmitting() {
    const SUBMITTING = FormStates.SUBMITTING;
  },
  CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function handleSaveSuccess(silent) {
    if (silent.silent) {
      CLOSED = tmp.OPEN;
    } else {
      CLOSED = tmp.CLOSED;
      init();
    }
  },
  CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function handleSetAdvancedMode(advancedMode) {
    advancedMode = advancedMode.advancedMode;
    const Storage = Storage2.Storage;
    const result = Storage.set(ADVANCED_MODE_ON_KEY, advancedMode);
  }
});
let result = set.fileFinishedImporting("stores/ChannelSettingsPermissionsStore.tsx");

export default channelSettingsPermissionsStore;