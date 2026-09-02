// === Module 1339: handleConnectionClosedOrResumed ===

// Module 1339 (handleConnectionClosedOrResumed)
import set from "set" /* 2 */;
import applyDefault from "apply" /* 12 */;
import _modDef38 from "module_38" /* 38 */;
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import create from "create" /* 1305 */;
import now from "now" /* 1335 */;
import create2 from "create" /* 1340 */;
import b64ToProto from "b64ToProto" /* 1341 */;
import MAX_FAVORITESDefault from "MAX_FAVORITES" /* 1342 */;
import resolveDefaultGuildThemePreference from "resolveDefaultGuildThemePreference" /* 1343 */;
import MAX_FAVORITES from "MAX_FAVORITES" /* 682 */;

function handleConnectionClosedOrResumed() {
  const values = Object.values(closure_7);
  const item = values.forEach((editInfo) => {
    if (null != editInfo.editInfo.timeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(editInfo.editInfo.timeout);
      editInfo.editInfo.timeout = undefined;
      const _Number = Number;
      editInfo.editInfo.timeoutDelay = Number.MAX_SAFE_INTEGER;
      editInfo.editInfo.rateLimited = false;
      const versions = editInfo.proto.versions;
      let num;
      if (versions != null) {
        num = versions.dataVersion;
      }
      if (num == null) {
        num = 0;
      }
      editInfo.editInfo.offlineEditDataVersion = num;
    }
  });
}
function handleUserSettingsProtoUpdate(settings) {
  settings = settings.settings;
  const proto = settings.proto;
  closure_8 = !settings.local;
  if (settings.resetEditInfo) {
    if (null != tmp.editInfo.timeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.editInfo.timeout);
    }
    tmp.editInfo = createEmptyEditInfo();
  }
  if (settings.partial) {
    tmp.proto = b64ToProto.mergeTopLevelFields(tmp.ProtoClass, tmp.proto, proto);
    _modDef38(typeof tmp.proto !== "string", "UserSettingsProto cannot be a string");
    obj = b64ToProto;
  } else {
    tmp.proto = proto;
    _modDef38(typeof tmp.proto !== "string", "UserSettingsProto cannot be a string");
    tmp.editInfo.loaded = true;
    tmp.editInfo.loading = false;
  }
}
const UserSettingsTypes = MAX_FAVORITES.UserSettingsTypes;
const createEmptyEditInfo = MAX_FAVORITES.createEmptyEditInfo;
let obj = { ProtoClass: create.PreloadedUserSettings, proto: null, lazyLoaded: false, editInfo: null };
const PreloadedUserSettings = create.PreloadedUserSettings;
obj[1] = PreloadedUserSettings.create();
obj[3] = createEmptyEditInfo();
obj = { ProtoClass: create2.FrecencyUserSettings, proto: null, lazyLoaded: true, editInfo: null };
const FrecencyUserSettings = create2.FrecencyUserSettings;
obj[1] = FrecencyUserSettings.create();
obj[3] = createEmptyEditInfo();
let closure_7 = { [UserSettingsTypes.PRELOADED_USER_SETTINGS]: obj, [UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: obj };
let c8 = false;
const PersistedStore = initializeDefault.PersistedStore;
class UserSettingsProtoStore extends PersistedStore {
}
const prototype = UserSettingsProtoStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  closure_0 = arg0;
  if (null != arg0) {
    const item = applyDefault.forEach(closure_7, (ProtoClass) => {
      const tmp = userSettings[Number(undefined, arg1)];
      if (null != tmp) {
        let str;
        if (tmp != null) {
          str = tmp.proto;
        }
        if (str == null) {
          str = "";
        }
        const b64ToProtoResult = userSettings(closure_1_2[4]).b64ToProto(ProtoClass.ProtoClass, str);
        if (null != b64ToProtoResult) {
          ProtoClass.proto = b64ToProtoResult;
          closure_1_1(tmp4[3])(typeof ProtoClass.proto !== "string", "UserSettingsProto cannot be a string");
          let protoToSave;
          if (tmp != null) {
            protoToSave = tmp.protoToSave;
          }
          if (protoToSave == null) {
            protoToSave = null;
          }
          if (null != protoToSave) {
            if (null != tmp.offlineEditDataVersion) {
              const b64ToProtoResult1 = tmp3(tmp4[4]).b64ToProto(ProtoClass.ProtoClass, protoToSave);
              if (null != b64ToProtoResult1) {
                ProtoClass.editInfo.protoToSave = b64ToProtoResult1;
                ProtoClass.editInfo.offlineEditDataVersion = tmp.offlineEditDataVersion;
              }
              const tmp3Result = tmp3(tmp4[4]);
            }
          }
        }
        obj = userSettings(closure_1_2[4]);
        tmp3 = userSettings;
      }
    });
    const arr = applyDefault;
  }
};
prototype["getState"] = function getState() {

};
prototype["computeState"] = function computeState() {
  return applyDefault.mapValues(closure_7, (ProtoClass) => {
    obj = { proto: callback(table[4]).protoToB64(ProtoClass.ProtoClass, ProtoClass.proto) };
    if (tmp3) {
      obj.protoToSave = callback(table[4]).protoToB64(ProtoClass.ProtoClass, ProtoClass.editInfo.protoToSave);
      obj.offlineEditDataVersion = ProtoClass.editInfo.offlineEditDataVersion;
      const tmpResult = callback(table[4]);
    }
    return obj;
  });
};
prototype["hasLoaded"] = function hasLoaded(arg0) {
  return dependencyMap[arg0].editInfo.loaded;
};
Object.defineProperty(prototype, "settings", {
  get: function settings() {
    return obj.proto;
  },
  set: undefined
});
Object.defineProperty(prototype, "frecencyWithoutFetchingLatest", {
  get: function frecencyWithoutFetchingLatest() {
    return obj.proto;
  },
  set: undefined
});
Object.defineProperty(prototype, "wasMostRecentUpdateFromServer", {
  get: function wasMostRecentUpdateFromServer() {
    return c8;
  },
  set: undefined
});
prototype["getFullState"] = function getFullState() {
  return closure_7;
};
prototype["getGuildFolders"] = function getGuildFolders() {
  const guildFolders = obj.proto.guildFolders;
  let folders;
  if (guildFolders != null) {
    folders = guildFolders.folders;
  }
  let mapped = null;
  if (null != folders) {
    mapped = folders.map((guildIds) => {
      let value;
      if (guildIds.id != null) {
        value = iter.value;
      }
      value = undefined;
      if (guildIds.color != null) {
        value = iter2.value;
      }
      obj = { guildIds: guildIds.guildIds, folderId: null, folderName: null, folderColor: null };
      let NumberResult;
      if (null != value) {
        const _Number = Number;
        NumberResult = Number(value);
      }
      obj[1] = NumberResult;
      let value1;
      if (guildIds.name != null) {
        value1 = iter3.value;
      }
      obj[2] = value1;
      let NumberResult1;
      if (null != value) {
        const _Number2 = Number;
        NumberResult1 = Number(value);
      }
      obj[3] = NumberResult1;
      return obj;
    });
  }
  return mapped;
};
prototype["getGuildRecentsDismissedAt"] = function getGuildRecentsDismissedAt(_guildId) {
  if (null == _guildId) {
    return 0;
  } else {
    const self = this;
    const guilds = this.settings.guilds;
    let prop;
    if (guilds != null) {
      if (guilds.guilds[_guildId] != null) {
        prop = tmp2.guildRecentsDismissedAt;
      }
    }
    let num = 0;
    if (null != prop) {
      const Timestamp = now.Timestamp;
      num = Timestamp.toDate(prop).getTime();
      const toDateResult = Timestamp.toDate(prop);
    }
    return num;
  }
};
prototype["getDismissedGuildContent"] = function getDismissedGuildContent(closure_1) {
  let tmp = null;
  if (null != closure_1) {
    const self = this;
    const guilds = this.settings.guilds;
    let prop;
    if (guilds != null) {
      const guilds2 = guilds.guilds;
      if (guilds2 != null) {
        if (guilds2[closure_1] != null) {
          prop = tmp3.dismissedGuildContent;
        }
      }
    }
    tmp = prop;
  }
  return tmp;
};
prototype["getGuildDismissedContentState"] = function getGuildDismissedContentState(closure_0) {
  const guilds = this.settings.guilds;
  let prop;
  if (guilds != null) {
    const guilds2 = guilds.guilds;
    if (guilds2 != null) {
      if (guilds2[closure_0] != null) {
        prop = tmp3.guildDismissibleContentStates;
      }
    }
  }
  return prop;
};
prototype["getGuildsProto"] = function getGuildsProto() {
  let guilds = this.settings.guilds;
  guilds = undefined;
  if (guilds != null) {
    guilds = guilds.guilds;
  }
  if (guilds == null) {
    guilds = null;
  }
  return guilds;
};
prototype["getDefaultGuildThemePreference"] = function getDefaultGuildThemePreference() {
  const appearance = this.settings.appearance;
  let prop;
  if (appearance != null) {
    prop = appearance.defaultGuildThemePreference;
  }
  if (prop == null) {
    prop = create.GuildThemeSourcePreference.UNSPECIFIED;
  }
  return prop;
};
prototype["getGuildThemeSourcePreferenceOverride"] = function getGuildThemeSourcePreferenceOverride(arg0) {
  if (null == arg0) {
    let UNSPECIFIED = create.GuildThemeSourcePreference.UNSPECIFIED;
  } else {
    const self = this;
    const guilds = this.settings.guilds;
    UNSPECIFIED = undefined;
    if (guilds != null) {
      const guilds2 = guilds.guilds;
      if (guilds2 != null) {
        if (guilds2[arg0] != null) {
          UNSPECIFIED = tmp2.guildThemeSourcePreference;
        }
      }
    }
    if (UNSPECIFIED == null) {
      UNSPECIFIED = create.GuildThemeSourcePreference.UNSPECIFIED;
    }
  }
  return UNSPECIFIED;
};
prototype["resolveGuildThemeSourcePreference"] = function resolveGuildThemeSourcePreference(arg0) {
  const guildThemeSourcePreferenceOverride = this.getGuildThemeSourcePreferenceOverride(arg0);
  return resolveDefaultGuildThemePreference.resolveGuildThemeSourcePreference(guildThemeSourcePreferenceOverride, this.getDefaultGuildThemePreference());
};
UserSettingsProtoStore.displayName = "UserSettingsProtoStore";
UserSettingsProtoStore.persistKey = "UserSettingsProtoStore-Cache";
obj = {
  CACHE_LOADED: function handleCacheLoaded(userSettings) {
    userSettings = userSettings.userSettings;
    if (null != userSettings) {
      const item = applyDefault.forEach(closure_7, (ProtoClass) => {
        const tmp = userSettings[Number(undefined, arg1)];
        if (null != tmp) {
          let str;
          if (tmp != null) {
            str = tmp.proto;
          }
          if (str == null) {
            str = "";
          }
          const b64ToProtoResult = userSettings(closure_1_2[4]).b64ToProto(ProtoClass.ProtoClass, str);
          if (null != b64ToProtoResult) {
            ProtoClass.proto = b64ToProtoResult;
            closure_1_1(tmp4[3])(typeof ProtoClass.proto !== "string", "UserSettingsProto cannot be a string");
            let protoToSave;
            if (tmp != null) {
              protoToSave = tmp.protoToSave;
            }
            if (protoToSave == null) {
              protoToSave = null;
            }
            if (null != protoToSave) {
              if (null != tmp.offlineEditDataVersion) {
                const b64ToProtoResult1 = tmp3(tmp4[4]).b64ToProto(ProtoClass.ProtoClass, protoToSave);
                if (null != b64ToProtoResult1) {
                  ProtoClass.editInfo.protoToSave = b64ToProtoResult1;
                  ProtoClass.editInfo.offlineEditDataVersion = tmp.offlineEditDataVersion;
                }
                const tmp3Result = tmp3(tmp4[4]);
              }
            }
          }
          obj = userSettings(closure_1_2[4]);
          tmp3 = userSettings;
        }
      });
      const arr = applyDefault;
    }
  },
  USER_SETTINGS_PROTO_UPDATE: handleUserSettingsProtoUpdate,
  USER_SETTINGS_PROTO_ENQUEUE_UPDATE: handleUserSettingsProtoUpdate,
  USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: function handleUserSettingsProtoSaveStateUpdate(settings) {
    settings = settings.settings;
    _modDef38(true, "this cannot run in the overlay");
    const merged = Object.assign(tmp2.editInfo);
    const merged1 = Object.assign(settings.changes);
    dependencyMap[settings.type].editInfo = {};
    return false;
  },
  CONNECTION_OPEN: function handleConnectionOpen(userSettingsProto) {
    userSettingsProto = userSettingsProto.userSettingsProto;
    if (null != userSettingsProto) {
      obj.proto = userSettingsProto;
      _modDef38(typeof obj.proto !== "string", "UserSettingsProto cannot be a string");
    }
    obj = b64ToProto;
    ({ isDirty, proto, cleanupFuncs } = obj.runMigrations(obj.proto, MAX_FAVORITESDefault[UserSettingsTypes.PRELOADED_USER_SETTINGS]));
    if (isDirty) {
      if (null != tmp6.editInfo.timeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp6.editInfo.timeout);
      }
      tmp6.editInfo = createEmptyEditInfo();
    }
    obj.proto = proto;
    _modDef38(typeof obj.proto !== "string", "UserSettingsProto cannot be a string");
    obj.editInfo.triggeredMigrations = isDirty;
    obj.editInfo.cleanupFuncs = cleanupFuncs;
    obj.editInfo.loaded = true;
    let values = Object.values(closure_7);
    const item = values.forEach((lazyLoaded) => {
      if (lazyLoaded.lazyLoaded) {
        lazyLoaded.editInfo.loaded = false;
        lazyLoaded.editInfo.loading = false;
      }
    });
    values = Object.values(closure_7);
    const item1 = values.forEach((editInfo) => {
      if (null != editInfo.editInfo.timeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(editInfo.editInfo.timeout);
        editInfo.editInfo.timeout = undefined;
        const _Number = Number;
        editInfo.editInfo.timeoutDelay = Number.MAX_SAFE_INTEGER;
        editInfo.editInfo.rateLimited = false;
        const versions = editInfo.proto.versions;
        let num;
        if (versions != null) {
          num = versions.dataVersion;
        }
        if (num == null) {
          num = 0;
        }
        editInfo.editInfo.offlineEditDataVersion = num;
      }
    });
  },
  CONNECTION_CLOSED: handleConnectionClosedOrResumed,
  CONNECTION_RESUMED: handleConnectionClosedOrResumed,
  OVERLAY_INITIALIZE: function handleOverlayInitialize(userSettingsProto) {
    obj = b64ToProto;
    obj.proto = obj.b64ToPreloadedUserSettingsProto(userSettingsProto.userSettingsProto);
    _modDef38(typeof obj.proto !== "string", "UserSettingsProto cannot be a string");
  },
  LOGOUT: function handleLogout() {
    let values = Object.values(closure_7);
    const item = values.forEach((editInfo) => {
      if (null != editInfo.editInfo.timeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(editInfo.editInfo.timeout);
        editInfo.editInfo.timeout = undefined;
        const _Number = Number;
        editInfo.editInfo.timeoutDelay = Number.MAX_SAFE_INTEGER;
        editInfo.editInfo.rateLimited = false;
        const versions = editInfo.proto.versions;
        let num;
        if (versions != null) {
          num = versions.dataVersion;
        }
        if (num == null) {
          num = 0;
        }
        editInfo.editInfo.offlineEditDataVersion = num;
      }
    });
    values = Object.values(closure_7);
    const item1 = values.forEach((ProtoClass) => {
      ProtoClass = ProtoClass.ProtoClass;
      ProtoClass.proto = ProtoClass.create();
      ProtoClass.editInfo = callback();
    });
  }
};
const userSettingsProtoStore = new UserSettingsProtoStore(dispatcherDefault, obj);
const result = set.fileFinishedImporting("modules/user_settings/UserSettingsProtoStore.tsx");

export default userSettingsProtoStore;