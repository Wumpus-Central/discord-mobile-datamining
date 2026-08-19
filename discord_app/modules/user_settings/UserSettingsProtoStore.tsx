// discord_app/modules/user_settings/UserSettingsProtoStore.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import applyDefault from "../../../_runtime/00012_apply.js";
import _modDef38 from "../../../_runtime/metro/00038__.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import create from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import now from "../../../discord_common/js/packages/protos/google/protobuf/timestamp.tsx";
import create2 from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/frecency_user_settings.tsx";
import b64ToProto from "UserSettingsUtils.tsx";
import MAX_FAVORITESDefault from "UserSettingsMigrationsByType.tsx";
import resolveDefaultGuildThemePreference from "GuildThemeSourcePreferenceUtils.tsx";
import MAX_FAVORITES from "UserSettingsConstants.tsx";

function handleConnectionClosedOrResumed() {
  const values = Object.values(closure_7);
  const item = values.forEach((item, index) => {
    if (null != item.editInfo.timeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(item.editInfo.timeout);
      item.editInfo.timeout = undefined;
      const _Number = Number;
      item.editInfo.timeoutDelay = Number.MAX_SAFE_INTEGER;
      item.editInfo.rateLimited = false;
      const versions = item.proto.versions;
      let num;
      if (versions != null) {
        num = versions.dataVersion;
      }
      if (num == null) {
        num = 0;
      }
      item.editInfo.offlineEditDataVersion = num;
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
        const b64ToProtoResult = userSettings(dependencyMap[4]).b64ToProto(ProtoClass.ProtoClass, str);
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
              const b64ToProtoResult1 = userSettings(dependencyMap[4]).b64ToProto(ProtoClass.ProtoClass, protoToSave);
              if (null != b64ToProtoResult1) {
                ProtoClass.editInfo.protoToSave = b64ToProtoResult1;
                ProtoClass.editInfo.offlineEditDataVersion = tmp.offlineEditDataVersion;
              }
              const tmp3Result = userSettings(dependencyMap[4]);
            }
          }
        }
        obj = userSettings(dependencyMap[4]);
      }
    });
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
  get: function settings(c2) {
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
    mapped = folders.map((item, index) => {
      let value;
      if (item.id != null) {
        value = iter.value;
      }
      value = undefined;
      if (item.color != null) {
        value = iter2.value;
      }
      obj = { guildIds: item.guildIds, folderId: null, folderName: null, folderColor: null };
      let NumberResult;
      if (null != value) {
        const _Number = Number;
        NumberResult = Number(value);
      }
      obj[1] = NumberResult;
      let value1;
      if (item.name != null) {
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
prototype["getGuildDismissedContentState"] = function getGuildDismissedContentState(closure_1) {
  const guilds = this.settings.guilds;
  let prop;
  if (guilds != null) {
    const guilds2 = guilds.guilds;
    if (guilds2 != null) {
      if (guilds2[closure_1] != null) {
        prop = tmp3.guildDismissibleContentStates;
      }
    }
  }
  return prop;
};
prototype["getGuildsProto"] = function getGuildsProto() {
  let guilds;
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
          const b64ToProtoResult = userSettings(dependencyMap[4]).b64ToProto(ProtoClass.ProtoClass, str);
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
                const b64ToProtoResult1 = userSettings(dependencyMap[4]).b64ToProto(ProtoClass.ProtoClass, protoToSave);
                if (null != b64ToProtoResult1) {
                  ProtoClass.editInfo.protoToSave = b64ToProtoResult1;
                  ProtoClass.editInfo.offlineEditDataVersion = tmp.offlineEditDataVersion;
                }
                const tmp3Result = userSettings(dependencyMap[4]);
              }
            }
          }
          obj = userSettings(dependencyMap[4]);
        }
      });
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
    const item = values.forEach((item, index) => {
      if (item.lazyLoaded) {
        item.editInfo.loaded = false;
        item.editInfo.loading = false;
      }
    });
    values = Object.values(closure_7);
    const item1 = values.forEach((item, index) => {
      if (null != item.editInfo.timeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(item.editInfo.timeout);
        item.editInfo.timeout = undefined;
        const _Number = Number;
        item.editInfo.timeoutDelay = Number.MAX_SAFE_INTEGER;
        item.editInfo.rateLimited = false;
        const versions = item.proto.versions;
        let num;
        if (versions != null) {
          num = versions.dataVersion;
        }
        if (num == null) {
          num = 0;
        }
        item.editInfo.offlineEditDataVersion = num;
      }
    });
    const runMigrationsResult = obj.runMigrations(obj.proto, MAX_FAVORITESDefault[UserSettingsTypes.PRELOADED_USER_SETTINGS]);
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
    const item = values.forEach((item, index) => {
      if (null != item.editInfo.timeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(item.editInfo.timeout);
        item.editInfo.timeout = undefined;
        const _Number = Number;
        item.editInfo.timeoutDelay = Number.MAX_SAFE_INTEGER;
        item.editInfo.rateLimited = false;
        const versions = item.proto.versions;
        let num;
        if (versions != null) {
          num = versions.dataVersion;
        }
        if (num == null) {
          num = 0;
        }
        item.editInfo.offlineEditDataVersion = num;
      }
    });
    values = Object.values(closure_7);
    const item1 = values.forEach((item, index) => {
      const ProtoClass = item.ProtoClass;
      item.proto = ProtoClass.create();
      item.editInfo = callback();
    });
  }
};
const userSettingsProtoStore = new UserSettingsProtoStore(dispatcherDefault, obj);
const result = obj132.fileFinishedImporting("modules/user_settings/UserSettingsProtoStore.tsx");

export default userSettingsProtoStore;