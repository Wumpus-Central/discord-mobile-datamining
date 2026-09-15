// === Module 1220: UserSettingsProtoStore ===

// Module 1220 (UserSettingsProtoStore)
import _modDef12 from "module_12" /* 12 */;
import _modDef38 from "module_38" /* 38 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import timestamp from "timestamp" /* 1216 */;
import frecency_user_settings from "frecency_user_settings" /* 1221 */;
import user_settings_UserSettingsUtils from "user_settings/UserSettingsUtils" /* 1222 */;
import UserSettingsMigrationsByTypeDefault from "UserSettingsMigrationsByType" /* 1224 */;
import GuildThemeSourcePreferenceUtils from "GuildThemeSourcePreferenceUtils" /* 1225 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import size from "module_2" /* 2 */;

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
    tmp.proto = user_settings_UserSettingsUtils.mergeTopLevelFields(tmp.ProtoClass, tmp.proto, proto);
    _modDef38(typeof tmp.proto !== "string", "UserSettingsProto cannot be a string");
  } else {
    tmp.proto = proto;
    _modDef38(typeof tmp.proto !== "string", "UserSettingsProto cannot be a string");
    tmp.editInfo.loaded = true;
    tmp.editInfo.loading = false;
  }
}
const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
const createEmptyEditInfo = UserSettingsConstants.createEmptyEditInfo;
let editInfo = { ProtoClass: preloaded_user_settings.PreloadedUserSettings, proto: null, lazyLoaded: false, editInfo: null };
const PreloadedUserSettings = preloaded_user_settings.PreloadedUserSettings;
editInfo.proto = PreloadedUserSettings.create();
editInfo.editInfo = createEmptyEditInfo();
const obj2 = { ProtoClass: frecency_user_settings.FrecencyUserSettings, proto: null, lazyLoaded: true, editInfo: null };
const FrecencyUserSettings = frecency_user_settings.FrecencyUserSettings;
obj2.proto = FrecencyUserSettings.create();
obj2.editInfo = createEmptyEditInfo();
const dependencyMap = { [UserSettingsTypes.PRELOADED_USER_SETTINGS]: editInfo, [UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: obj2 };
let closure_8 = false;
const PersistedStore = initializeDefault.PersistedStore;
class UserSettingsProtoStore extends PersistedStore {
}
const prototype = UserSettingsProtoStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  closure_0 = arg0;
  if (null != arg0) {
    const item = _modDef12.forEach(closure_7, (ProtoClass, arg1) => {
      const tmp = userSettings[Number(undefined, arg1)];
      if (null != tmp) {
        let str;
        if (tmp != null) {
          str = tmp.proto;
        }
        if (str == null) {
          str = "";
        }
        const b64ToProtoResult = user_settings_UserSettingsUtils.b64ToProto(ProtoClass.ProtoClass, str);
        if (null != b64ToProtoResult) {
          ProtoClass.proto = b64ToProtoResult;
          _modDef38(typeof ProtoClass.proto !== "string", "UserSettingsProto cannot be a string");
          let protoToSave;
          if (tmp != null) {
            protoToSave = tmp.protoToSave;
          }
          if (protoToSave == null) {
            protoToSave = null;
          }
          if (null != protoToSave) {
            if (null != tmp.offlineEditDataVersion) {
              const b64ToProtoResult1 = user_settings_UserSettingsUtils.b64ToProto(ProtoClass.ProtoClass, protoToSave);
              if (null != b64ToProtoResult1) {
                ProtoClass.editInfo.protoToSave = b64ToProtoResult1;
                ProtoClass.editInfo.offlineEditDataVersion = tmp.offlineEditDataVersion;
              }
              const tmp3Result = user_settings_UserSettingsUtils;
            }
          }
        }
      }
    });
  }
};
prototype["getState"] = function getState() {

};
prototype["computeState"] = function computeState() {
  return _modDef12.mapValues(closure_7, (ProtoClass) => {
    const obj = { proto: user_settings_UserSettingsUtils.protoToB64(ProtoClass.ProtoClass, ProtoClass.proto) };
    if (tmp3) {
      obj.protoToSave = user_settings_UserSettingsUtils.protoToB64(ProtoClass.ProtoClass, ProtoClass.editInfo.protoToSave);
      obj.offlineEditDataVersion = ProtoClass.editInfo.offlineEditDataVersion;
      const tmpResult = user_settings_UserSettingsUtils;
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
    return obj2.proto;
  },
  set: undefined
});
Object.defineProperty(prototype, "wasMostRecentUpdateFromServer", {
  get: function wasMostRecentUpdateFromServer() {
    return closure_8;
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
      value = undefined;
      if (guildIds.id != null) {
        value = iter.value;
      }
      let value3;
      if (guildIds.color != null) {
        value3 = iter2.value;
      }
      const obj = { guildIds: guildIds.guildIds, folderId: null, folderName: null, folderColor: null };
      let NumberResult;
      if (null != value) {
        const _Number = Number;
        NumberResult = Number(value);
      }
      obj.folderId = NumberResult;
      let value4;
      if (guildIds.name != null) {
        value4 = iter3.value;
      }
      obj.folderName = value4;
      let NumberResult1;
      if (null != value3) {
        const _Number2 = Number;
        NumberResult1 = Number(value3);
      }
      obj.folderColor = NumberResult1;
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
      const Timestamp = timestamp.Timestamp;
      num = Timestamp.toDate(prop).getTime();
      const toDateResult = Timestamp.toDate(prop);
    }
    return num;
  }
};
prototype["getDismissedGuildContent"] = function getDismissedGuildContent(id) {
  let tmp = null;
  if (null != id) {
    const self = this;
    const guilds = this.settings.guilds;
    let prop;
    if (guilds != null) {
      const guilds2 = guilds.guilds;
      if (guilds2 != null) {
        if (guilds2[id] != null) {
          prop = tmp3.dismissedGuildContent;
        }
      }
    }
    tmp = prop;
  }
  return tmp;
};
prototype["getGuildDismissedContentState"] = function getGuildDismissedContentState(guildId) {
  const guilds = this.settings.guilds;
  let prop;
  if (guilds != null) {
    const guilds2 = guilds.guilds;
    if (guilds2 != null) {
      if (guilds2[guildId] != null) {
        prop = tmp3.guildDismissibleContentStates;
      }
    }
  }
  return prop;
};
prototype["getGuildsProto"] = function getGuildsProto() {
  const guilds = this.settings.guilds;
  let guilds1;
  if (guilds != null) {
    guilds1 = guilds.guilds;
  }
  if (guilds1 == null) {
    guilds1 = null;
  }
  return guilds1;
};
prototype["getDefaultGuildThemePreference"] = function getDefaultGuildThemePreference() {
  const appearance = this.settings.appearance;
  let prop;
  if (appearance != null) {
    prop = appearance.defaultGuildThemePreference;
  }
  if (prop == null) {
    prop = preloaded_user_settings.GuildThemeSourcePreference.UNSPECIFIED;
  }
  return prop;
};
prototype["getGuildThemeSourcePreferenceOverride"] = function getGuildThemeSourcePreferenceOverride(arg0) {
  if (null == arg0) {
    let UNSPECIFIED = preloaded_user_settings.GuildThemeSourcePreference.UNSPECIFIED;
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
      UNSPECIFIED = preloaded_user_settings.GuildThemeSourcePreference.UNSPECIFIED;
    }
  }
  return UNSPECIFIED;
};
prototype["resolveGuildThemeSourcePreference"] = function resolveGuildThemeSourcePreference(arg0) {
  const guildThemeSourcePreferenceOverride = this.getGuildThemeSourcePreferenceOverride(arg0);
  return GuildThemeSourcePreferenceUtils.resolveGuildThemeSourcePreference(guildThemeSourcePreferenceOverride, this.getDefaultGuildThemePreference());
};
UserSettingsProtoStore.displayName = "UserSettingsProtoStore";
UserSettingsProtoStore.persistKey = "UserSettingsProtoStore-Cache";
const userSettingsProtoStore = new UserSettingsProtoStore(DispatcherDefault, {
  CACHE_LOADED: function handleCacheLoaded(userSettings) {
    userSettings = userSettings.userSettings;
    if (null != userSettings) {
      const item = _modDef12.forEach(closure_7, (ProtoClass, arg1) => {
        const tmp = userSettings[Number(undefined, arg1)];
        if (null != tmp) {
          let str;
          if (tmp != null) {
            str = tmp.proto;
          }
          if (str == null) {
            str = "";
          }
          const b64ToProtoResult = user_settings_UserSettingsUtils.b64ToProto(ProtoClass.ProtoClass, str);
          if (null != b64ToProtoResult) {
            ProtoClass.proto = b64ToProtoResult;
            _modDef38(typeof ProtoClass.proto !== "string", "UserSettingsProto cannot be a string");
            let protoToSave;
            if (tmp != null) {
              protoToSave = tmp.protoToSave;
            }
            if (protoToSave == null) {
              protoToSave = null;
            }
            if (null != protoToSave) {
              if (null != tmp.offlineEditDataVersion) {
                const b64ToProtoResult1 = user_settings_UserSettingsUtils.b64ToProto(ProtoClass.ProtoClass, protoToSave);
                if (null != b64ToProtoResult1) {
                  ProtoClass.editInfo.protoToSave = b64ToProtoResult1;
                  ProtoClass.editInfo.offlineEditDataVersion = tmp.offlineEditDataVersion;
                }
                const tmp3Result = user_settings_UserSettingsUtils;
              }
            }
          }
        }
      });
    }
  },
  USER_SETTINGS_PROTO_UPDATE: handleUserSettingsProtoUpdate,
  USER_SETTINGS_PROTO_ENQUEUE_UPDATE: handleUserSettingsProtoUpdate,
  USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: function handleUserSettingsProtoSaveStateUpdate(settings) {
    settings = settings.settings;
    _modDef38(true, "this cannot run in the overlay");
    editInfo = {};
    const merged = Object.assign(tmp2.editInfo);
    const merged1 = Object.assign(settings.changes);
    dependencyMap[settings.type].editInfo = editInfo;
    return false;
  },
  CONNECTION_OPEN: function handleConnectionOpen(userSettingsProto) {
    userSettingsProto = userSettingsProto.userSettingsProto;
    if (null != userSettingsProto) {
      obj.proto = userSettingsProto;
      _modDef38(typeof obj.proto !== "string", "UserSettingsProto cannot be a string");
    }
    obj = user_settings_UserSettingsUtils;
    ({ isDirty, proto, cleanupFuncs } = obj.runMigrations(obj.proto, UserSettingsMigrationsByTypeDefault[UserSettingsTypes.PRELOADED_USER_SETTINGS]));
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
    const values = Object.values(closure_7);
    const item = values.forEach((lazyLoaded) => {
      if (lazyLoaded.lazyLoaded) {
        lazyLoaded.editInfo.loaded = false;
        lazyLoaded.editInfo.loading = false;
      }
    });
    const values2 = Object.values(closure_7);
    const item1 = values2.forEach((editInfo) => {
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
    const runMigrationsResult = obj.runMigrations(obj.proto, UserSettingsMigrationsByTypeDefault[UserSettingsTypes.PRELOADED_USER_SETTINGS]);
  },
  CONNECTION_CLOSED: handleConnectionClosedOrResumed,
  CONNECTION_RESUMED: handleConnectionClosedOrResumed,
  OVERLAY_INITIALIZE: function handleOverlayInitialize(userSettingsProto) {
    const obj = user_settings_UserSettingsUtils;
    obj.proto = obj.b64ToPreloadedUserSettingsProto(userSettingsProto.userSettingsProto);
    _modDef38(typeof obj.proto !== "string", "UserSettingsProto cannot be a string");
  },
  LOGOUT: function handleLogout() {
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
    const values2 = Object.values(closure_7);
    const item1 = values2.forEach((ProtoClass) => {
      ProtoClass = ProtoClass.ProtoClass;
      ProtoClass.proto = ProtoClass.create();
      ProtoClass.editInfo = createEmptyEditInfo();
    });
  }
});
const result = size.fileFinishedImporting("modules/user_settings/UserSettingsProtoStore.tsx");

export default userSettingsProtoStore;