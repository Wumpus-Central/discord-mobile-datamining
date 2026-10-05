// discord_app/modules/guild_themes/GuildThemePreviewStore.tsx
import _mod12 from "../../../_runtime/metro/00012__.js";
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Timers from "../../../discord_common/js/packages/timers/Timers.tsx";
import guildThemeSerialization from "guildThemeSerialization.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import GuildThemePreviewConstants from "GuildThemePreviewConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_5;

let GuildThemePreviewOrigin;
let GuildThemePreviewOwner;
function handleEnd() {
  let flag = !(null == closure_5.guildId && !timeout.isStarted());
  const tmp = null == closure_5.guildId && !timeout.isStarted();
  if (flag) {
    timeout.stop();
    closure_5 = {
      guildId: null,
      draft: null,
      original: null,
      draftEnabled: false,
      originalEnabled: false,
      origin: null,
      owner: null,
      isSaving: false,
      isAwaitingGuildUpdate: false,
      saveError: null,
    };
    flag = true;
  }
  return flag;
}
({ GuildThemePreviewOrigin, GuildThemePreviewOwner } = GuildThemePreviewConstants);
const timeout = new Timers.Timeout();
const hasOwnProperty = {
  guildId: null,
  draft: null,
  original: null,
  draftEnabled: false,
  originalEnabled: false,
  origin: null,
  owner: null,
  isSaving: false,
  isAwaitingGuildUpdate: false,
  saveError: null,
};
const Store = get_initializedDefault.Store;
class GuildThemePreviewStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore);
  }
  hasChanges() {
    let tmp = null != closure_5.guildId;
    if (tmp) {
      let tmp4 = closure_5.draftEnabled !== closure_5.originalEnabled;
      if (!tmp4) {
        const obj = _mod12;
        tmp4 = !obj.isEqual(closure_5.draft, closure_5.original);
      }
      tmp = tmp4;
    }
    return tmp;
  }
}
const prototype = GuildThemePreviewStore.prototype;
Object.defineProperty(prototype, "guildId", {
  get: function guildId() {
    return closure_5.guildId;
  },
  set: undefined,
});
Object.defineProperty(prototype, "draft", {
  get: function draft() {
    return closure_5.draft;
  },
  set: undefined,
});
Object.defineProperty(prototype, "original", {
  get: function original() {
    return closure_5.original;
  },
  set: undefined,
});
Object.defineProperty(prototype, "draftEnabled", {
  get: function draftEnabled() {
    return closure_5.draftEnabled;
  },
  set: undefined,
});
Object.defineProperty(prototype, "originalEnabled", {
  get: function originalEnabled() {
    return closure_5.originalEnabled;
  },
  set: undefined,
});
Object.defineProperty(prototype, "origin", {
  get: function origin() {
    return closure_5.origin;
  },
  set: undefined,
});
Object.defineProperty(prototype, "owner", {
  get: function owner() {
    return closure_5.owner;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isActive", {
  get: function isActive() {
    return null != closure_5.guildId;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isSaving", {
  get: function isSaving() {
    return closure_5.isSaving;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isAwaitingGuildUpdate", {
  get: function isAwaitingGuildUpdate() {
    return closure_5.isAwaitingGuildUpdate;
  },
  set: undefined,
});
Object.defineProperty(prototype, "saveError", {
  get: function saveError() {
    return closure_5.saveError;
  },
  set: undefined,
});
GuildThemePreviewStore.displayName = "GuildThemePreviewStore";
let obj = {
  GUILD_THEME_PREVIEW_START: function handleStart(owner) {
    let draft;
    let draftEnabled;
    let guildId;
    let obj2;
    let obj3;
    let origin;
    let original;
    let originalEnabled;
    owner = owner.owner;
    ({ guildId, draft, original, draftEnabled, originalEnabled, origin } = owner);
    timeout.stop();
    const obj = {
      guildId,
      draft: obj2.cloneGuildThemeSettings(draft),
      original: obj3.cloneGuildThemeSettings(original),
      draftEnabled,
      originalEnabled,
      origin,
      owner,
      isSaving: false,
      isAwaitingGuildUpdate: false,
      saveError: null,
    };
    obj2 = guildThemeSerialization;
    obj3 = guildThemeSerialization;
    if (owner == null) {
      owner = closure_5.owner;
    }
    closure_5 = obj;
  },
  GUILD_THEME_PREVIEW_SELECT_PRESET: function handleSelectPreset(arg0) {
    if (null == closure_5.guildId) {
      return false;
    } else {
      const obj2 = { presetId: tmp, customUserThemeSettings: "r" };
      const obj3 = _mod12;
      const isEqualResult = obj3.isEqual(closure_5.draft, obj2);
      let flag = !isEqualResult;
      if (isEqualResult) {
        flag = !closure_5.draftEnabled;
      }
      if (flag) {
        timeout.stop();
        const obj = { draft: obj2, draftEnabled: true, isAwaitingGuildUpdate: false, saveError: null };
        const merged = Object.assign(closure_5);
        closure_5 = obj;
        flag = true;
      }
      return flag;
    }
  },
  GUILD_THEME_PREVIEW_UPDATE_CUSTOM: function handleUpdateCustom(colors) {
    let items;
    let obj3;
    colors = colors.colors;
    if (null == closure_5.guildId) {
      return false;
    } else {
      const obj2 = { presetId: "Array", customUserThemeSettings: obj3 };
      obj3 = { colors: items, gradientColorStops: [], gradientAngle: tmp2, baseMix: tmp3 };
      items = [];
      HermesBuiltin.arraySpread(items, colors, 0);
      const obj4 = _mod12;
      const isEqualResult = obj4.isEqual(closure_5.draft, obj2);
      let flag = !isEqualResult;
      if (isEqualResult) {
        flag = !closure_5.draftEnabled;
      }
      if (flag) {
        timeout.stop();
        const obj = { draft: obj2, draftEnabled: true, isAwaitingGuildUpdate: false, saveError: null };
        const merged = Object.assign(closure_5);
        closure_5 = obj;
        flag = true;
      }
      return flag;
    }
  },
  GUILD_THEME_PREVIEW_TRANSFER_OWNERSHIP: function handleTransferOwnership(owner) {
    owner = owner.owner;
    let flag = null != closure_5.guildId && closure_5.owner !== owner;
    if (flag) {
      const obj = { owner };
      const merged = Object.assign(closure_5);
      closure_5 = obj;
      flag = true;
    }
    return flag;
  },
  GUILD_THEME_PREVIEW_END: handleEnd,
  GUILD_THEME_PREVIEW_SAVE_START: function handleSaveStart() {
    timeout.stop();
    const obj = { isSaving: true, isAwaitingGuildUpdate: false, saveError: null };
    const merged = Object.assign(closure_5);
    closure_5 = obj;
  },
  GUILD_THEME_PREVIEW_SAVE_SUCCESS: function handleSaveSuccess(guildTheme) {
    let obj2;
    let obj3;
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
        let obj = {
          draft: obj2.cloneGuildThemeSettings(themeSettings),
          original: obj3.cloneGuildThemeSettings(themeSettings),
          draftEnabled: flag,
          originalEnabled: flag,
          isSaving: false,
          isAwaitingGuildUpdate: true,
          saveError: null,
        };
        const merged = Object.assign(closure_5);
        obj2 = guildThemeSerialization;
        closure_5 = obj;
        obj3 = guildThemeSerialization;
        timeout.stop();
        timeout.start(10000, () => {
          if (closure_1_5.isAwaitingGuildUpdate) {
            const obj = DispatcherDefault;
            obj.dispatch({ type: "GUILD_THEME_PREVIEW_END" });
          }
        });
        return true;
      }
    }
    return false;
  },
  GUILD_THEME_PREVIEW_SAVE_FAILURE: function handleSaveFailure(error) {
    let flag = null != closure_5.guildId;
    error = error.error;
    if (flag) {
      flag = tmp === closure_5.guildId;
    }
    if (flag) {
      timeout.stop();
      const obj = { isSaving: false, isAwaitingGuildUpdate: false, saveError: error };
      const merged = Object.assign(closure_5);
      closure_5 = obj;
      flag = true;
    }
    return flag;
  },
  GUILD_SETTINGS_GUILD_THEME_SAVE_SUCCESS: function handleSettingsSaveSuccess(arg0) {
    let tmp2 = null != closure_5.guildId && tmp === closure_5.guildId;
    if (tmp2) {
      let flag = !(null == closure_5.guildId && !timeout.isStarted());
      const tmp5 = null == closure_5.guildId && !timeout.isStarted();
      if (flag) {
        timeout.stop();
        closure_5 = {
          guildId: null,
          draft: null,
          original: null,
          draftEnabled: false,
          originalEnabled: false,
          origin: null,
          owner: null,
          isSaving: false,
          isAwaitingGuildUpdate: false,
          saveError: null,
        };
        flag = true;
      }
      tmp2 = flag;
    }
    return tmp2;
  },
  USER_SETTINGS_MODAL_OPEN: handleEnd,
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    let flag = null != closure_5.guildId && tmp !== closure_5.guildId;
    if (flag) {
      flag = true;
      const tmp4 = null == closure_5.guildId && !timeout.isStarted();
      if (!tmp4) {
        timeout.stop();
        closure_5 = {
          guildId: null,
          draft: null,
          original: null,
          draftEnabled: false,
          originalEnabled: false,
          origin: null,
          owner: null,
          isSaving: false,
          isAwaitingGuildUpdate: false,
          saveError: null,
        };
        flag = true;
      }
    }
    return flag;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    let flag = null != closure_5.guildId && guild.guild.id === closure_5.guildId;
    if (flag) {
      flag = true;
      const tmp3 = null == closure_5.guildId && !timeout.isStarted();
      if (!tmp3) {
        timeout.stop();
        closure_5 = {
          guildId: null,
          draft: null,
          original: null,
          draftEnabled: false,
          originalEnabled: false,
          origin: null,
          owner: null,
          isSaving: false,
          isAwaitingGuildUpdate: false,
          saveError: null,
        };
        flag = true;
      }
    }
    return flag;
  },
  GUILD_MEMBER_REMOVE: function handleGuildMemberRemove(guildId) {
    guildId = guildId.guildId;
    let tmp = guildId.user.id === AuthenticationStore.getId();
    if (tmp) {
      let flag = null != closure_5.guildId && guildId === closure_5.guildId;
      if (flag) {
        flag = true;
        const tmp6 = null == closure_5.guildId && !timeout.isStarted();
        if (!tmp6) {
          timeout.stop();
          closure_5 = {
            guildId: null,
            draft: null,
            original: null,
            draftEnabled: false,
            originalEnabled: false,
            origin: null,
            owner: null,
            isSaving: false,
            isAwaitingGuildUpdate: false,
            saveError: null,
          };
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
    if (tmp5) {
      let tmp6 = undefined !== guild.theme;
      if (tmp6) {
        const obj = guildThemeSerialization;
        const fromServerGuildThemeResult = obj.fromServerGuildTheme(guild.theme);
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
          const tmp7Result = _mod12;
          isEqualResult = tmp7Result.isEqual(themeSettings, closure_5.original);
        }
        let flag2 = isEqualResult;
        if (flag2) {
          flag2 = true;
          const tmp16 = null == closure_5.guildId && !timeout.isStarted();
          if (!tmp16) {
            timeout.stop();
            closure_5 = {
              guildId: null,
              draft: null,
              original: null,
              draftEnabled: false,
              originalEnabled: false,
              origin: null,
              owner: null,
              isSaving: false,
              isAwaitingGuildUpdate: false,
              saveError: null,
            };
            flag2 = true;
          }
        }
        tmp6 = flag2;
      }
      tmp5 = tmp6;
    }
    return tmp5;
  },
  LOGOUT: handleEnd,
};
const guildThemePreviewStore = new GuildThemePreviewStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/guild_themes/GuildThemePreviewStore.tsx");

export default guildThemePreviewStore;
export { GuildThemePreviewOrigin };
export { GuildThemePreviewOwner };
