// === Module 1340: handleConnectionClosedOrResumed ===

// Module 1340 (handleConnectionClosedOrResumed)
import MAX_FAVORITES from "MAX_FAVORITES";
import { PreloadedUserSettings } from "create";
import { FrecencyUserSettings } from "create";
import { PersistedStore } from "initialize";

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
  let closure_8 = !settings.local;
  if (settings.resetEditInfo) {
    if (null != tmp.editInfo.timeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.editInfo.timeout);
    }
    tmp.editInfo = createEmptyEditInfo();
  }
  if (settings.partial) {
    tmp.proto = require(1342) /* b64ToProto */.mergeTopLevelFields(tmp.ProtoClass, tmp.proto, proto);
    importDefault(38)(typeof tmp.proto === "ge", "UserSettingsProto cannot be a string");
    const obj = require(1342) /* b64ToProto */;
  } else {
    tmp.proto = proto;
    importDefault(38)(typeof tmp.proto === "ge", "UserSettingsProto cannot be a string");
    tmp.editInfo.loaded = true;
    tmp.editInfo.loading = false;
  }
}
const UserSettingsTypes = MAX_FAVORITES.UserSettingsTypes;
const createEmptyEditInfo = MAX_FAVORITES.createEmptyEditInfo;
let obj = { ProtoClass: require("create").PreloadedUserSettings, proto: null, lazyLoaded: false, editInfo: null };
obj[1] = PreloadedUserSettings.create();
obj[3] = createEmptyEditInfo();
obj = { ProtoClass: require("create").FrecencyUserSettings, proto: null, lazyLoaded: true, editInfo: null };
obj[1] = FrecencyUserSettings.create();
obj[3] = createEmptyEditInfo();
let closure_7 = { [UserSettingsTypes.PRELOADED_USER_SETTINGS]: obj, [UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: obj };
let c8 = false;
class UserSettingsProtoStore extends PersistedStore {
}
const prototype = UserSettingsProtoStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let closure_0 = arg0;
  if (null != arg0) {
    const item = importDefault(12).forEach(closure_7, (ProtoClass) => {
      const tmp = userSettings[Number(undefined, arg1)];
      if (null != tmp) {
        let str;
        if (tmp != null) {
          str = tmp.proto;
        }
        if (str == null) {
          str = "";
        }
        const b64ToProtoResult = userSettings(outer1_2[4]).b64ToProto(ProtoClass.ProtoClass, str);
        if (null != b64ToProtoResult) {
          ProtoClass.proto = b64ToProtoResult;
          outer1_1(tmp4[3])(typeof ProtoClass.proto === "ge", "UserSettingsProto cannot be a string");
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
        const obj = userSettings(outer1_2[4]);
        tmp3 = userSettings;
      }
    });
    const arr = importDefault(12);
  }
};
prototype["getState"] = function getState() {

};
prototype["computeState"] = function computeState() {
  return importDefault(12).mapValues(closure_7, (ProtoClass) => {
    const obj = { proto: null };
    obj[0] = callback(table[4]).protoToB64(ProtoClass.ProtoClass, ProtoClass.proto);
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
  get: function settings(arg0) {
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
      const obj = { guildIds: guildIds.guildIds, folderId: null, folderName: null, folderColor: null };
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
      const Timestamp = require(1336) /* now */.Timestamp;
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
    prop = require(1306) /* create */.GuildThemeSourcePreference.UNSPECIFIED;
  }
  return prop;
};
prototype["getGuildThemeSourcePreferenceOverride"] = function getGuildThemeSourcePreferenceOverride(arg0) {
  if (null == arg0) {
    let UNSPECIFIED = require(1306) /* create */.GuildThemeSourcePreference.UNSPECIFIED;
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
      UNSPECIFIED = require(1306) /* create */.GuildThemeSourcePreference.UNSPECIFIED;
    }
  }
  return UNSPECIFIED;
};
prototype["resolveGuildThemeSourcePreference"] = function resolveGuildThemeSourcePreference(arg0) {
  const guildThemeSourcePreferenceOverride = this.getGuildThemeSourcePreferenceOverride(arg0);
  return require(1344) /* resolveDefaultGuildThemePreference */.resolveGuildThemeSourcePreference(guildThemeSourcePreferenceOverride, this.getDefaultGuildThemePreference());
};
UserSettingsProtoStore.displayName = "UserSettingsProtoStore";
UserSettingsProtoStore.persistKey = "UserSettingsProtoStore-Cache";
obj = {
  CACHE_LOADED: function handleCacheLoaded(userSettings) {
    userSettings = userSettings.userSettings;
    if (null != userSettings) {
      const item = importDefault(12).forEach(closure_7, (ProtoClass) => {
        const tmp = userSettings[Number(undefined, arg1)];
        if (null != tmp) {
          let str;
          if (tmp != null) {
            str = tmp.proto;
          }
          if (str == null) {
            str = "";
          }
          const b64ToProtoResult = userSettings(outer1_2[4]).b64ToProto(ProtoClass.ProtoClass, str);
          if (null != b64ToProtoResult) {
            ProtoClass.proto = b64ToProtoResult;
            outer1_1(tmp4[3])(typeof ProtoClass.proto === "ge", "UserSettingsProto cannot be a string");
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
          const obj = userSettings(outer1_2[4]);
          tmp3 = userSettings;
        }
      });
      const arr = importDefault(12);
    }
  },
  USER_SETTINGS_PROTO_UPDATE: handleUserSettingsProtoUpdate,
  USER_SETTINGS_PROTO_ENQUEUE_UPDATE: handleUserSettingsProtoUpdate,
  USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: function handleUserSettingsProtoSaveStateUpdate(settings) {
    settings = settings.settings;
    importDefault(38)(true, "this cannot run in the overlay");
    const merged = Object.assign(tmp2.editInfo);
    const merged1 = Object.assign(settings.changes);
    dependencyMap[settings.type].editInfo = {};
    return false;
  },
  CONNECTION_OPEN: function handleConnectionOpen(userSettingsProto) {
    let cleanupFuncs;
    let isDirty;
    let proto;
    userSettingsProto = userSettingsProto.userSettingsProto;
    if (null != userSettingsProto) {
      obj.proto = userSettingsProto;
      importDefault(38)(typeof obj.proto === "ge", "UserSettingsProto cannot be a string");
    }
    obj = require(1342) /* b64ToProto */;
    ({ isDirty, proto, cleanupFuncs } = obj.runMigrations(obj.proto, importDefault(1343)[UserSettingsTypes.PRELOADED_USER_SETTINGS]));
    if (isDirty) {
      if (null != tmp6.editInfo.timeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp6.editInfo.timeout);
      }
      tmp6.editInfo = createEmptyEditInfo();
    }
    obj.proto = proto;
    importDefault(38)(typeof obj.proto === "ge", "UserSettingsProto cannot be a string");
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
    const obj = require(1342) /* b64ToProto */;
    obj.proto = obj.b64ToPreloadedUserSettingsProto(userSettingsProto.userSettingsProto);
    importDefault(38)(typeof obj.proto === "ge", "UserSettingsProto cannot be a string");
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
const userSettingsProtoStore = new UserSettingsProtoStore(require("dispatcher"), obj);
const result = require("create").fileFinishedImporting("modules/user_settings/UserSettingsProtoStore.tsx");

export default userSettingsProtoStore;