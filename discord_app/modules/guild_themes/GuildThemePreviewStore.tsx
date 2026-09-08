// === Module 4445: GuildThemePreviewStore ===

// Module 4445 (GuildThemePreviewStore)
import _mod12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import guildThemeSerialization from "guildThemeSerialization" /* 1978 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
function handleEnd() {
  let tmp = null == closure_5.guildId;
  if (tmp) {
    tmp = !timeout.isStarted();
  }
  let flag = !tmp;
  if (!tmp) {
    timeout.stop();
    closure_5 = { guildId: null, draft: null, original: null, draftEnabled: false, originalEnabled: false, origin: null, owner: null, isSaving: false, isAwaitingGuildUpdate: false, saveError: null };
    flag = true;
  }
  return flag;
}
const GuildThemePreviewConstants = fn(4446);
({ GuildThemePreviewOrigin, GuildThemePreviewOwner } = GuildThemePreviewConstants);
const timeout = new fn(4447).Timeout();
let closure_5 = { guildId: null, draft: null, original: null, draftEnabled: false, originalEnabled: false, origin: null, owner: null, isSaving: false, isAwaitingGuildUpdate: false, saveError: null };
const Store = initializeDefault.Store;
class GuildThemePreviewStore extends Store {
}
const prototype = GuildThemePreviewStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore);
};
Object.defineProperty(prototype, "guildId", {
  get: function guildId() {
    return closure_5.guildId;
  },
  set: undefined
});
Object.defineProperty(prototype, "draft", {
  get: function draft() {
    return closure_5.draft;
  },
  set: undefined
});
Object.defineProperty(prototype, "original", {
  get: function original() {
    return closure_5.original;
  },
  set: undefined
});
Object.defineProperty(prototype, "draftEnabled", {
  get: function draftEnabled() {
    return closure_5.draftEnabled;
  },
  set: undefined
});
Object.defineProperty(prototype, "originalEnabled", {
  get: function originalEnabled() {
    return closure_5.originalEnabled;
  },
  set: undefined
});
Object.defineProperty(prototype, "origin", {
  get: function origin() {
    return closure_5.origin;
  },
  set: undefined
});
Object.defineProperty(prototype, "owner", {
  get: function owner() {
    return closure_5.owner;
  },
  set: undefined
});
Object.defineProperty(prototype, "isActive", {
  get: function isActive() {
    return null != closure_5.guildId;
  },
  set: undefined
});
Object.defineProperty(prototype, "isSaving", {
  get: function isSaving() {
    return closure_5.isSaving;
  },
  set: undefined
});
Object.defineProperty(prototype, "isAwaitingGuildUpdate", {
  get: function isAwaitingGuildUpdate() {
    return closure_5.isAwaitingGuildUpdate;
  },
  set: undefined
});
Object.defineProperty(prototype, "saveError", {
  get: function saveError() {
    return closure_5.saveError;
  },
  set: undefined
});
prototype["hasChanges"] = function hasChanges() {
  let tmp = null != closure_5.guildId;
  if (tmp) {
    let tmp4 = closure_5.draftEnabled !== closure_5.originalEnabled;
    if (!tmp4) {
      tmp4 = !_mod12.isEqual(closure_5.draft, closure_5.original);
    }
    tmp = tmp4;
  }
  return tmp;
};
GuildThemePreviewStore.displayName = "GuildThemePreviewStore";
const guildThemePreviewStore = new GuildThemePreviewStore(DispatcherDefault, {
  GUILD_THEME_PREVIEW_START: function handleStart(owner) {
    owner = owner.owner;
    ({ guildId, draft, original, draftEnabled, originalEnabled, origin } = owner);
    timeout.stop();
    const obj = { guildId, draft: guildThemeSerialization.cloneGuildThemeSettings(draft), original: null, draftEnabled: null, originalEnabled: null, origin: null, owner: null, isSaving: false, isAwaitingGuildUpdate: false, saveError: null };
    obj.original = guildThemeSerialization.cloneGuildThemeSettings(original);
    obj.draftEnabled = draftEnabled;
    obj.originalEnabled = originalEnabled;
    obj.origin = origin;
    if (owner == null) {
      owner = closure_5.owner;
    }
    obj.owner = owner;
    closure_5 = obj;
  },
  GUILD_THEME_PREVIEW_SELECT_PRESET: function handleSelectPreset(arg0) {
    if (null == closure_5.guildId) {
      return false;
    } else {
      let obj = { presetId: tmp, customUserThemeSettings: "a" };
      const isEqualResult = _mod12.isEqual(closure_5.draft, obj);
      let flag = !isEqualResult;
      if (isEqualResult) {
        flag = !closure_5.draftEnabled;
      }
      if (flag) {
        timeout.stop();
        obj = {};
        const merged = Object.assign(closure_5);
        obj.draft = obj;
        obj.draftEnabled = true;
        obj.isAwaitingGuildUpdate = false;
        obj.saveError = null;
        closure_5 = obj;
        flag = true;
      }
      return flag;
    }
  },
  GUILD_THEME_PREVIEW_UPDATE_CUSTOM: function handleUpdateCustom(colors) {
    colors = colors.colors;
    if (null == closure_5.guildId) {
      return false;
    } else {
      let obj = { presetId: "Array", customUserThemeSettings: 0 };
      obj = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
      const items = [];
      HermesBuiltin.arraySpread(colors, 0);
      obj.colors = items;
      obj.gradientColorStops = [];
      obj.gradientAngle = tmp;
      obj.baseMix = tmp2;
      obj.customUserThemeSettings = obj;
      const isEqualResult = _mod12.isEqual(closure_5.draft, obj);
      let flag = !isEqualResult;
      if (isEqualResult) {
        flag = !closure_5.draftEnabled;
      }
      if (flag) {
        timeout.stop();
        obj = {};
        const merged = Object.assign(closure_5);
        obj.draft = obj;
        obj.draftEnabled = true;
        obj.isAwaitingGuildUpdate = false;
        obj.saveError = null;
        closure_5 = obj;
        flag = true;
      }
      return flag;
    }
  },
  GUILD_THEME_PREVIEW_TRANSFER_OWNERSHIP: function handleTransferOwnership(owner) {
    owner = owner.owner;
    let flag = null != closure_5.guildId;
    if (flag) {
      flag = closure_5.owner !== owner;
    }
    if (flag) {
      const obj = {};
      const merged = Object.assign(closure_5);
      obj.owner = owner;
      closure_5 = obj;
      flag = true;
    }
    return flag;
  },
  GUILD_THEME_PREVIEW_END: handleEnd,
  GUILD_THEME_PREVIEW_SAVE_START: function handleSaveStart() {
    timeout.stop();
    const obj = {};
    const merged = Object.assign(closure_5);
    obj.isSaving = true;
    obj.isAwaitingGuildUpdate = false;
    obj.saveError = null;
    closure_5 = obj;
  },
  GUILD_THEME_PREVIEW_SAVE_SUCCESS: function handleSaveSuccess(guildTheme) {
    guildTheme = guildTheme.guildTheme;
    if (null != closure_5.guildId) {
      if (tmp === closure_5.guildId) {
        let themeSettings;
        if (guildTheme != null) {
          themeSettings = guildTheme.themeSettings;
        }
        if (themeSettings == null) {
          themeSettings = null;
        }
        let flag;
        if (guildTheme != null) {
          flag = guildTheme.enabled;
        }
        if (flag == null) {
          flag = false;
        }
        let obj = {};
        const merged = Object.assign(closure_5);
        obj.draft = guildThemeSerialization.cloneGuildThemeSettings(themeSettings);
        obj.original = guildThemeSerialization.cloneGuildThemeSettings(themeSettings);
        obj.draftEnabled = flag;
        obj.originalEnabled = flag;
        obj.isSaving = false;
        obj.isAwaitingGuildUpdate = true;
        obj.saveError = null;
        closure_5 = obj;
        timeout.stop();
        timeout.start(10000, () => {
          if (closure_1_5.isAwaitingGuildUpdate) {
            DispatcherDefault.dispatch({ type: "GUILD_THEME_PREVIEW_END" });
          }
        });
        return true;
      }
    }
    return false;
  },
  GUILD_THEME_PREVIEW_SAVE_FAILURE: function handleSaveFailure(error) {
    let flag = null != closure_5.guildId;
    if (flag) {
      flag = tmp === closure_5.guildId;
    }
    if (flag) {
      timeout.stop();
      const obj = {};
      const merged = Object.assign(closure_5);
      obj.isSaving = false;
      obj.isAwaitingGuildUpdate = false;
      obj.saveError = error.error;
      closure_5 = obj;
      flag = true;
    }
    return flag;
  },
  GUILD_SETTINGS_GUILD_THEME_SAVE_SUCCESS: function handleSettingsSaveSuccess(arg0) {
    let tmp2 = null != closure_5.guildId;
    if (tmp2) {
      tmp2 = tmp === closure_5.guildId;
    }
    if (tmp2) {
      let tmp5 = null == closure_5.guildId;
      if (tmp5) {
        tmp5 = !timeout.isStarted();
      }
      let flag = !tmp5;
      if (!tmp5) {
        timeout.stop();
        closure_5 = { guildId: null, draft: null, original: null, draftEnabled: false, originalEnabled: false, origin: null, owner: null, isSaving: false, isAwaitingGuildUpdate: false, saveError: null };
        flag = true;
      }
      tmp2 = flag;
    }
    return tmp2;
  },
  USER_SETTINGS_MODAL_OPEN: handleEnd,
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    let flag = null != closure_5.guildId;
    if (flag) {
      flag = tmp !== closure_5.guildId;
    }
    if (flag) {
      let tmp4 = null == closure_5.guildId;
      if (tmp4) {
        tmp4 = !timeout.isStarted();
      }
      flag = true;
      if (!tmp4) {
        timeout.stop();
        closure_5 = { guildId: null, draft: null, original: null, draftEnabled: false, originalEnabled: false, origin: null, owner: null, isSaving: false, isAwaitingGuildUpdate: false, saveError: null };
        flag = true;
      }
    }
    return flag;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    let flag = null != closure_5.guildId;
    if (flag) {
      flag = guild.guild.id === closure_5.guildId;
    }
    if (flag) {
      let tmp3 = null == closure_5.guildId;
      if (tmp3) {
        tmp3 = !timeout.isStarted();
      }
      flag = true;
      if (!tmp3) {
        timeout.stop();
        closure_5 = { guildId: null, draft: null, original: null, draftEnabled: false, originalEnabled: false, origin: null, owner: null, isSaving: false, isAwaitingGuildUpdate: false, saveError: null };
        flag = true;
      }
    }
    return flag;
  },
  GUILD_MEMBER_REMOVE: function handleGuildMemberRemove(user) {
    let tmp = user.user.id === AuthenticationStore.getId();
    if (tmp) {
      let flag = null != closure_5.guildId;
      if (flag) {
        flag = user.guildId === closure_5.guildId;
      }
      if (flag) {
        let tmp6 = null == closure_5.guildId;
        if (tmp6) {
          tmp6 = !timeout.isStarted();
        }
        flag = true;
        if (!tmp6) {
          timeout.stop();
          closure_5 = { guildId: null, draft: null, original: null, draftEnabled: false, originalEnabled: false, origin: null, owner: null, isSaving: false, isAwaitingGuildUpdate: false, saveError: null };
          flag = true;
        }
      }
      tmp = flag;
    }
    return tmp;
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    guild = guild.guild;
    const isAwaitingGuildUpdate = closure_5.isAwaitingGuildUpdate;
    let tmp = !isAwaitingGuildUpdate;
    if (isAwaitingGuildUpdate) {
      tmp = null == closure_5.guildId;
    }
    if (!tmp) {
      tmp = guild.id !== closure_5.guildId;
    }
    let tmp5 = !tmp;
    if (!tmp) {
      let tmp6 = undefined !== guild.theme;
      if (tmp6) {
        const fromServerGuildThemeResult = guildThemeSerialization.fromServerGuildTheme(guild.theme);
        let flag;
        if (fromServerGuildThemeResult != null) {
          flag = fromServerGuildThemeResult.enabled;
        }
        if (flag == null) {
          flag = false;
        }
        let themeSettings;
        if (fromServerGuildThemeResult != null) {
          themeSettings = fromServerGuildThemeResult.themeSettings;
        }
        if (themeSettings == null) {
          themeSettings = null;
        }
        let isEqualResult = flag === closure_5.originalEnabled;
        if (isEqualResult) {
          isEqualResult = _mod12.isEqual(themeSettings, closure_5.original);
          const tmp7Result = _mod12;
        }
        let flag2 = isEqualResult;
        if (flag2) {
          let tmp16 = null == closure_5.guildId;
          if (tmp16) {
            tmp16 = !timeout.isStarted();
          }
          flag2 = true;
          if (!tmp16) {
            timeout.stop();
            closure_5 = { guildId: null, draft: null, original: null, draftEnabled: false, originalEnabled: false, origin: null, owner: null, isSaving: false, isAwaitingGuildUpdate: false, saveError: null };
            flag2 = true;
          }
        }
        tmp6 = flag2;
      }
      tmp5 = tmp6;
    }
    return tmp5;
  },
  LOGOUT: handleEnd
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_themes/GuildThemePreviewStore.tsx");

export default guildThemePreviewStore;
export { GuildThemePreviewOrigin };
export { GuildThemePreviewOwner };