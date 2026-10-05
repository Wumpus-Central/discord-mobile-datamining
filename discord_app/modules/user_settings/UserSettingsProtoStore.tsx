// discord_app/modules/user_settings/UserSettingsProtoStore.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import _modDef38 from "../../../_runtime/metro/00038__.js";
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import preloaded_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import timestamp from "../../../discord_common/js/packages/protos/google/protobuf/timestamp.tsx";
import frecency_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/frecency_user_settings.tsx";
import user_settings_UserSettingsUtils from "UserSettingsUtils.tsx";
import UserSettingsMigrationsByTypeDefault from "UserSettingsMigrationsByType.tsx";
import GuildThemeSourcePreferenceUtils from "GuildThemeSourcePreferenceUtils.tsx";
import UserSettingsConstants from "UserSettingsConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let ProtoClass;

let FrecencyUserSettings;
let PreloadedUserSettings;
const f83628 = (editInfo) => {
  if (null != editInfo.editInfo.timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(editInfo.editInfo.timeout);
    editInfo.editInfo.timeout = undefined;
    const _Number = Number;
    editInfo.editInfo.timeoutDelay = Number.MAX_SAFE_INTEGER;
    editInfo.editInfo.rateLimited = false;
    const versions = editInfo.proto.versions;
    let num;
    editInfo = editInfo.editInfo;
    if (versions != null) {
      num = versions.dataVersion;
    }
    if (num == null) {
      num = 0;
    }
    editInfo.offlineEditDataVersion = num;
  }
};
function handleConnectionClosedOrResumed() {
  const values = Object.values(closure_7);
  const item = values.forEach(f83628);
}
function handleUserSettingsProtoUpdate(settings) {
  settings = settings.settings;
  const proto = settings.proto;
  closure_8 = !settings.local;
  const partial = settings.partial;
  if (settings.resetEditInfo) {
    if (null != closure_7[settings.type].editInfo.timeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_7[settings.type].editInfo.timeout);
    }
    closure_7[settings.type].editInfo = createEmptyEditInfo();
  }
  if (partial) {
    const obj = user_settings_UserSettingsUtils;
    closure_7[settings.type].proto = obj.mergeTopLevelFields(
      closure_7[settings.type].ProtoClass,
      closure_7[settings.type].proto,
      proto,
    );
    _modDef38(typeof closure_7[settings.type].proto !== "string", "UserSettingsProto cannot be a string");
  } else {
    closure_7[settings.type].proto = proto;
    _modDef38(typeof closure_7[settings.type].proto !== "string", "UserSettingsProto cannot be a string");
    closure_7[settings.type].editInfo.loaded = true;
    closure_7[settings.type].editInfo.loading = false;
  }
}
const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
const createEmptyEditInfo = UserSettingsConstants.createEmptyEditInfo;
let editInfo = {
  ProtoClass: preloaded_user_settings.PreloadedUserSettings,
  proto: PreloadedUserSettings.create(),
  lazyLoaded: false,
  editInfo: createEmptyEditInfo(),
};
PreloadedUserSettings = preloaded_user_settings.PreloadedUserSettings;
let obj2 = {
  ProtoClass: frecency_user_settings.FrecencyUserSettings,
  proto: FrecencyUserSettings.create(),
  lazyLoaded: true,
  editInfo: createEmptyEditInfo(),
};
FrecencyUserSettings = frecency_user_settings.FrecencyUserSettings;
const metroImportDefault = {
  [UserSettingsTypes.PRELOADED_USER_SETTINGS]: editInfo,
  [UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: obj2,
};
let closure_8 = false;
const PersistedStore = get_initializedDefault.PersistedStore;
class UserSettingsProtoStore extends PersistedStore {
  initialize(arg0) {
    let closure_0 = arg0;
    if (null != arg0) {
      const arr = _modDef12;
      const item = arr.forEach(closure_7, (ProtoClass, arg1) => {
        const tmp = userSettings[Number(undefined, arg1)];
        if (null != tmp) {
          let str;
          if (tmp != null) {
            str = tmp.proto;
          }
          if (str == null) {
            str = "";
          }
          const obj = user_settings_UserSettingsUtils;
          const b64ToProtoResult = obj.b64ToProto(ProtoClass.ProtoClass, str);
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
                const tmp3Result = user_settings_UserSettingsUtils;
                const b64ToProtoResult1 = tmp3Result.b64ToProto(ProtoClass.ProtoClass, protoToSave);
                if (null != b64ToProtoResult1) {
                  ProtoClass.editInfo.protoToSave = b64ToProtoResult1;
                  ProtoClass.editInfo.offlineEditDataVersion = tmp.offlineEditDataVersion;
                }
              }
            }
          }
        }
      });
    }
  }
  getState() {}
  computeState() {
    let obj = _modDef12;
    return obj.mapValues(closure_7, (ProtoClass) => {
      const obj = { proto: obj2.protoToB64(ProtoClass.ProtoClass, ProtoClass.proto) };
      obj2 = user_settings_UserSettingsUtils;
      const tmp3 = null != ProtoClass.editInfo.offlineEditDataVersion && null != ProtoClass.editInfo.protoToSave;
      if (tmp3) {
        const tmpResult = user_settings_UserSettingsUtils;
        obj.protoToSave = tmpResult.protoToB64(ProtoClass.ProtoClass, ProtoClass.editInfo.protoToSave);
        obj.offlineEditDataVersion = ProtoClass.editInfo.offlineEditDataVersion;
      }
      return obj;
    });
  }
  hasLoaded(arg0) {
    return closure_7[arg0].editInfo.loaded;
  }
  getFullState() {
    return closure_7;
  }
  getGuildFolders() {
    let obj;
    const guildFolders = obj.proto.guildFolders;
    let folders;
    if (guildFolders != null) {
      folders = guildFolders.folders;
    }
    let mapped = null;
    if (null != folders) {
      mapped = folders.map((guildIds) => {
        let NumberResult;
        let NumberResult1;
        let value4;
        let value;
        if (guildIds.id != null) {
          value = iter.value;
        }
        let value3;
        if (guildIds.color != null) {
          value3 = iter2.value;
        }
        const obj = {
          guildIds: guildIds.guildIds,
          folderId: NumberResult,
          folderName: value4,
          folderColor: NumberResult1,
        };
        NumberResult = undefined;
        if (null != value) {
          const _Number = Number;
          NumberResult = Number(value);
        }
        value4 = undefined;
        if (guildIds.name != null) {
          value4 = iter3.value;
        }
        NumberResult1 = undefined;
        if (null != value3) {
          const _Number2 = Number;
          NumberResult1 = Number(value3);
        }
        return obj;
      });
    }
    return mapped;
  }
  getGuildRecentsDismissedAt(_guildId) {
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
        const toDateResult = Timestamp.toDate(prop);
        num = toDateResult.getTime();
      }
      return num;
    }
  }
  getDismissedGuildContent(c0) {
    let tmp = null;
    if (null != c0) {
      const self = this;
      const guilds = this.settings.guilds;
      let prop;
      if (guilds != null) {
        const guilds2 = guilds.guilds;
        if (guilds2 != null) {
          if (guilds2[c0] != null) {
            prop = tmp3.dismissedGuildContent;
          }
        }
      }
      tmp = prop;
    }
    return tmp;
  }
  getGuildDismissedContentState(guildId) {
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
  }
  getGuildsProto() {
    const guilds = this.settings.guilds;
    let tmp;
    if (guilds != null) {
      tmp = guilds.guilds;
    }
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  }
  getDefaultGuildThemePreference() {
    const appearance = this.settings.appearance;
    let prop;
    if (appearance != null) {
      prop = appearance.defaultGuildThemePreference;
    }
    if (prop == null) {
      prop = preloaded_user_settings.GuildThemeSourcePreference.UNSPECIFIED;
    }
    return prop;
  }
  getGuildThemeSourcePreferenceOverride(arg0) {
    let UNSPECIFIED;
    if (null == arg0) {
      UNSPECIFIED = preloaded_user_settings.GuildThemeSourcePreference.UNSPECIFIED;
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
  }
  resolveGuildThemeSourcePreference(arg0) {
    const resolveGuildThemeSourcePreference = GuildThemeSourcePreferenceUtils.resolveGuildThemeSourcePreference;
    GuildThemeSourcePreferenceUtils;
    const guildThemeSourcePreferenceOverride = this.getGuildThemeSourcePreferenceOverride(arg0);
    return resolveGuildThemeSourcePreference(guildThemeSourcePreferenceOverride, this.getDefaultGuildThemePreference());
  }
}
const prototype = UserSettingsProtoStore.prototype;
Object.defineProperty(prototype, "settings", {
  get: function settings() {
    return obj.proto;
  },
  set: undefined,
});
Object.defineProperty(prototype, "frecencyWithoutFetchingLatest", {
  get: function frecencyWithoutFetchingLatest() {
    return obj2.proto;
  },
  set: undefined,
});
Object.defineProperty(prototype, "wasMostRecentUpdateFromServer", {
  get: function wasMostRecentUpdateFromServer() {
    return closure_8;
  },
  set: undefined,
});
UserSettingsProtoStore.displayName = "UserSettingsProtoStore";
UserSettingsProtoStore.persistKey = "UserSettingsProtoStore-Cache";
const obj3 = {
  CACHE_LOADED: function handleCacheLoaded(userSettings) {
    userSettings = userSettings.userSettings;
    if (null != userSettings) {
      const arr = _modDef12;
      const item = arr.forEach(closure_7, (ProtoClass, arg1) => {
        const tmp = userSettings[Number(undefined, arg1)];
        if (null != tmp) {
          let str;
          if (tmp != null) {
            str = tmp.proto;
          }
          if (str == null) {
            str = "";
          }
          const obj = user_settings_UserSettingsUtils;
          const b64ToProtoResult = obj.b64ToProto(ProtoClass.ProtoClass, str);
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
                const tmp3Result = user_settings_UserSettingsUtils;
                const b64ToProtoResult1 = tmp3Result.b64ToProto(ProtoClass.ProtoClass, protoToSave);
                if (null != b64ToProtoResult1) {
                  ProtoClass.editInfo.protoToSave = b64ToProtoResult1;
                  ProtoClass.editInfo.offlineEditDataVersion = tmp.offlineEditDataVersion;
                }
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
    const changes = settings.changes;
    const type = settings.type;
    _modDef38(true, "this cannot run in the overlay");
    editInfo = {};
    const merged = Object.assign(tmp2.editInfo);
    const merged1 = Object.assign(changes);
    closure_7[type].editInfo = editInfo;
    return false;
  },
  CONNECTION_OPEN: function handleConnectionOpen(userSettingsProto) {
    let cleanupFuncs;
    let isDirty;
    let obj;
    let proto;
    userSettingsProto = userSettingsProto.userSettingsProto;
    if (null != userSettingsProto) {
      obj.proto = userSettingsProto;
      _modDef38(typeof obj.proto !== "string", "UserSettingsProto cannot be a string");
    }
    obj = user_settings_UserSettingsUtils;
    ({ isDirty, proto, cleanupFuncs } = obj.runMigrations(
      obj.proto,
      UserSettingsMigrationsByTypeDefault[UserSettingsTypes.PRELOADED_USER_SETTINGS],
    ));
    obj.runMigrations(obj.proto, UserSettingsMigrationsByTypeDefault[UserSettingsTypes.PRELOADED_USER_SETTINGS]);
    if (isDirty) {
      if (null != obj.editInfo.timeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(obj.editInfo.timeout);
      }
      obj.editInfo = createEmptyEditInfo();
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
    const item1 = values2.forEach(f83628);
  },
  CONNECTION_CLOSED: handleConnectionClosedOrResumed,
  CONNECTION_RESUMED: handleConnectionClosedOrResumed,
  OVERLAY_INITIALIZE: function handleOverlayInitialize(userSettingsProto) {
    userSettingsProto = userSettingsProto.userSettingsProto;
    const obj = user_settings_UserSettingsUtils;
    obj.proto = obj.b64ToPreloadedUserSettingsProto(userSettingsProto);
    _modDef38(typeof obj.proto !== "string", "UserSettingsProto cannot be a string");
  },
  LOGOUT: function handleLogout() {
    const values = Object.values(closure_7);
    const item = values.forEach(f83628);
    const values2 = Object.values(closure_7);
    const item1 = values2.forEach((ProtoClass) => {
      ProtoClass = ProtoClass.ProtoClass;
      ProtoClass.proto = ProtoClass.create();
      ProtoClass.editInfo = createEmptyEditInfo();
    });
  },
};
const userSettingsProtoStore = new UserSettingsProtoStore(DispatcherDefault, obj3);
const result = size.fileFinishedImporting("modules/user_settings/UserSettingsProtoStore.tsx");

export default userSettingsProtoStore;
