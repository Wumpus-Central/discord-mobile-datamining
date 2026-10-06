// discord_app/stores/ChannelSettingsPermissionsStore.tsx
import _modDef12 from "../../_runtime/metro/00012__.js";
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import Storage2 from "../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import PermissionUtilsAll from "../utils/PermissionUtils.tsx";
import ChannelPermissionsConstants from "../modules/channel_permissions/ChannelPermissionsConstants.tsx";
import AppChannelPermissionUtils from "../modules/app_channels/AppChannelPermissionUtils.tsx";
import ApplicationStore from "../modules/applications/ApplicationStore.tsx";
import ChannelSettingsStore from "ChannelSettingsStore.tsx";
import ChannelStore from "ChannelStore.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

let areChannelsLockedResult, closure_20, closure_5;

let FormStates;
let c10;
let c9;
function init() {
  let c18 = ChannelSettingsStore.getChannel();
  const category = ChannelSettingsStore.getCategory();
  if (null == c18) {
    return false;
  } else {
    const guildId = c18.getGuildId();
    const guildId1 = c18.getGuildId();
    const obj3 = {};
    const merged = Object.assign(c18.permissionOverwrites);
    const tmp = null != guildId1 && null == obj3[guildId1];
    if (tmp) {
      const obj = PermissionUtilsAll;
      obj3[guildId1] = obj.makeEveryoneOverwrite(guildId1);
    }
    let c16 = obj3;
    c17 = obj3;
    if (null == obj3[c20]) {
      c20 = guildId;
    }
    closure_5 = null != category;
    const areChannelsLocked = PermissionUtilsAll.areChannelsLocked;
    PermissionUtilsAll;
    const obj2 = AppChannelPermissionUtils;
    areChannelsLocked(c18, category, obj2.getAppChannelBotUserId(c18));
    c21 = null;
    c15 = false;
    CLOSED = FormStates.CLOSED;
    set.clear();
  }
}
function syncChannelUpdates(id) {
  let channel;
  let closure_19;
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
          const obj2 = {};
          const merged = Object.assign(channel.permissionOverwrites);
          const tmp = null != guildId1 && null == obj2[guildId1];
          if (tmp) {
            const obj = PermissionUtilsAll;
            obj2[guildId1] = obj.makeEveryoneOverwrite(guildId1);
          }
          const obj4 = {};
          const item = set.forEach((item) => {
            if (null != c16) {
              obj4[item] = c16[item];
            }
          });
          const tmp6 = null == obj4[guildId] && null == channel.permissionOverwrites[guildId];
          if (tmp6) {
            const obj3 = PermissionUtilsAll;
            obj4[guildId] = obj3.makeEveryoneOverwrite(guildId);
          }
          const obj6 = {};
          const merged1 = Object.assign(channel.permissionOverwrites);
          const merged2 = Object.assign(obj4);
          if (null == obj6[closure_20]) {
            closure_20 = guildId;
          } else {
            const tmp18 = null != c21 && null != obj6[c21];
            if (tmp18) {
              closure_20 = c21;
              c21 = null;
            }
          }
          const areChannelsLocked = PermissionUtilsAll.areChannelsLocked;
          PermissionUtilsAll;
          const obj5 = obj4(11245);
          let closure_4 = areChannelsLocked(channel, category, obj5.getAppChannelBotUserId(channel));
          return true;
        }
      }
    }
  }
  return false;
}
({ ChannelSettingsSections: c9, ChannelTypes: c10, FormStates } = Constants);
const ADVANCED_MODE_ON_KEY = ChannelPermissionsConstants.ADVANCED_MODE_ON_KEY;
const set = new Set();
let CLOSED = FormStates.CLOSED;
let c15 = false;
let c16 = null;
let c17 = null;
let c18 = null;
let c19 = null;
let c20 = null;
let c21 = null;
let Storage = Storage2.Storage;
const tmp4 = Storage.get(ADVANCED_MODE_ON_KEY) || false;
let advancedMode = tmp4;
const Store = get_initializedDefault.Store;
class ChannelSettingsPermissionsStore extends Store {
  initialize() {
    this.waitFor(ChannelSettingsStore, ChannelStore, ApplicationStore);
  }
  hasChanges() {
    return c15;
  }
  showNotice() {
    return this.hasChanges();
  }
  getPermissionOverwrite(arg0) {
    let tmp2;
    if (c16 != null) {
      tmp2 = tmp[arg0];
    }
    return tmp2;
  }
}
const prototype = ChannelSettingsPermissionsStore.prototype;
Object.defineProperty(prototype, "editedPermissionIds", {
  get: function editedPermissionIds() {
    return Array.from(set);
  },
  set: undefined,
});
Object.defineProperty(prototype, "permissionOverwrites", {
  get: function permissionOverwrites() {
    return c16;
  },
  set: undefined,
});
Object.defineProperty(prototype, "selectedOverwriteId", {
  get: function selectedOverwriteId() {
    return c20;
  },
  set: undefined,
});
Object.defineProperty(prototype, "formState", {
  get: function formState() {
    return CLOSED;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isLockable", {
  get: function isLockable() {
    return closure_5;
  },
  set: undefined,
});
Object.defineProperty(prototype, "locked", {
  get: function locked() {
    return areChannelsLockedResult;
  },
  set: undefined,
});
Object.defineProperty(prototype, "channel", {
  get: function channel() {
    return c18;
  },
  set: undefined,
});
Object.defineProperty(prototype, "category", {
  get: function category() {
    return c19;
  },
  set: undefined,
});
Object.defineProperty(prototype, "advancedMode", {
  get: function advancedMode() {
    return advancedMode;
  },
  set: undefined,
});
ChannelSettingsPermissionsStore.displayName = "ChannelSettingsPermissionsStore";
let obj = {
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
    let allow;
    let deny;
    id = id.id;
    let tmp;
    ({ allow, deny } = id);
    if (c16 != null) {
      tmp = c16[id];
    }
    if (null != tmp) {
      if (null != c18) {
        const obj = { allow, deny };
        const merged = Object.assign(tmp);
        const obj2 = {};
        const merged1 = Object.assign(c16);
        obj2[id] = obj;
        c16 = obj2;
        set.add(id);
        CLOSED = FormStates.OPEN;
        const obj3 = _modDef12;
        c15 = !obj3.isEqual(c16, c17);
        const areChannelsLocked = PermissionUtilsAll.areChannelsLocked;
        PermissionUtilsAll;
        const obj4 = AppChannelPermissionUtils;
        areChannelsLocked(c18, c19, obj4.getAppChannelBotUserId(c18));
      }
    }
    return false;
  },
  CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function handleSelectPermission(id) {
    id = id.id;
    if (null != c16) {
      if (null != c16[id]) {
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
    let c16 = null;
    c17 = null;
    let c18 = null;
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
    if (null != c18) {
      if (c18.type === constants2.GUILD_APP) {
        const areChannelsLocked = PermissionUtilsAll.areChannelsLocked;
        PermissionUtilsAll;
        const obj = AppChannelPermissionUtils;
        areChannelsLockedResult = areChannelsLocked(c18, c19, obj.getAppChannelBotUserId(c18));
        return areChannelsLockedResult !== areChannelsLockedResult;
      }
    }
    return false;
  },
};
const channelSettingsPermissionsStore = new ChannelSettingsPermissionsStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/ChannelSettingsPermissionsStore.tsx");

export default channelSettingsPermissionsStore;
