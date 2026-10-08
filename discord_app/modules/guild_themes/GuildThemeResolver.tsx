// === Module 4963: GuildThemeResolver ===

// Module 4963 (GuildThemeResolver)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import GuildThemePresets from "GuildThemePresets" /* 4933 */;
import ServerThemeUserExperiment from "ServerThemeUserExperiment" /* 4972 */;
import Client from "Client" /* 4987 */;
import noop from "module_19" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1243 */;
import GuildStore from "GuildStore" /* 2086 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4899 */;
import GuildThemePreviewStore from "GuildThemePreviewStore" /* 4964 */;
import GuildThemeRuntimeStore from "GuildThemeRuntimeStore" /* 4966 */;

require = fn;
function resolveSavedActiveGuildTheme(stateFromStores) {
  let enabled;
  if (stateFromStores != null) {
    enabled = stateFromStores.enabled;
  }
  let tmp2 = null;
  if (true === enabled) {
    const themeSettings = stateFromStores.themeSettings;
    let tmp5 = null;
    if (null != themeSettings) {
      const customUserThemeSettings = themeSettings.customUserThemeSettings;
      let colors;
      if (customUserThemeSettings != null) {
        colors = customUserThemeSettings.colors;
      }
      let tmp4 = null;
      if (null != colors) {
        tmp4 = null;
        if (1 === customUserThemeSettings.colors.length) {
          if (null == customUserThemeSettings.gradientColorStops) {
            const obj = { type: "custom", customUserThemeSettings };
            tmp4 = obj;
          } else {
            tmp4 = null;
          }
        }
      }
      tmp5 = tmp4;
      if (null == tmp4) {
        const guildThemePreset = GuildThemePresets.getGuildThemePreset(themeSettings.presetId);
        let tmp9 = null;
        if (null != guildThemePreset) {
          const obj3 = { type: "preset", preset: guildThemePreset };
          tmp9 = obj3;
        }
        tmp5 = tmp9;
      }
    }
    tmp2 = tmp5;
  }
  return tmp2;
}
const GuildFeatures = fn(1085).GuildFeatures;
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSavedActiveGuildThemeForGuildId(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, GuildThemeRuntimeStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === arg1) {
      let tmp7 = cResult[3];
      let tmp8 = cResult[4];
    }
    const stateFromStores = tmp(504).useStateFromStores(first, tmp7, tmp8);
    if (cResult[5] !== stateFromStores) {
      const tmp12 = resolveSavedActiveGuildTheme(stateFromStores);
      cResult[5] = stateFromStores;
      cResult[6] = tmp12;
      let tmp10 = tmp12;
    } else {
      tmp10 = cResult[6];
    }
    return tmp10;
  }
  const fn = function o() {
    if (null != closure_0) {
      if (closure_1) {
        guild = GuildStore.getGuild(closure_0);
        if (null != guild) {
          const features = guild.features;
          if (features.has(GuildFeatures.GUILD_THEME)) {
            let guildTheme = GuildThemeRuntimeStore.getGuildThemeSnapshot(closure_0);
            if (undefined === guildTheme) {
              guildTheme = guild.guildTheme;
            }
            return guildTheme;
          }
        }
        return null;
      }
    }
    return null;
  };
  const items1 = [arg0, arg1];
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
  const obj = require("c");
  tmp = _require;
}) : (function useSavedActiveGuildThemeForGuildId(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const items = [GuildStore, GuildThemeRuntimeStore];
  const items1 = [arg0, arg1];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    if (null != closure_0) {
      if (closure_1) {
        guild = GuildStore.getGuild(closure_0);
        if (null != guild) {
          const features = guild.features;
          if (features.has(GuildFeatures.GUILD_THEME)) {
            let guildTheme = GuildThemeRuntimeStore.getGuildThemeSnapshot(closure_0);
            if (undefined === guildTheme) {
              guildTheme = guild.guildTheme;
            }
            return guildTheme;
          }
        }
        return null;
      }
    }
    return null;
  }, items1);
  const items2 = [stateFromStores];
  return stateFromStores.useMemo(() => resolveSavedActiveGuildTheme(stateFromStores), items2);
});
fn(558);
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useActiveGuildThemeForGuildId(arg0, arg1) {
  _require = arg0;
  const cResult = require("c").c(12);
  let str = "useActiveGuildThemeForGuildId";
  if (undefined !== arg1) {
    str = arg1;
  }
  const obj = require("c");
  serverThemeUserEnabled = require("ServerThemeUserExperiment").useServerThemeUserEnabled(str);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildThemePreviewStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === serverThemeUserEnabled) {
      let tmp7 = cResult[3];
      let tmp8 = cResult[4];
    }
    const stateFromStores = tmp(tmp2[10]).useStateFromStores(first, tmp7, tmp8);
    const _Symbol = Symbol;
    const tmpResult4 = tmp(tmp2[10]);
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [UserSettingsProtoStore];
      cResult[5] = items1;
    }
    if (cResult[6] === arg0) {
      tmp(tmp2[10]);
      if (undefined === stateFromStores) {
        let tmp25 = null;
        if (tmp17 !== tmp(tmp2[12]).GuildThemeSourcePreference.PERSONAL) {
          tmp25 = tmp11;
        }
        let tmp18 = tmp25;
      } else if (cResult[10] !== stateFromStores) {
        let tmp20 = null;
        if (null != stateFromStores) {
          const customUserThemeSettings = stateFromStores.customUserThemeSettings;
          let colors;
          if (customUserThemeSettings != null) {
            colors = customUserThemeSettings.colors;
          }
          let tmp22 = null;
          if (null != colors) {
            tmp22 = null;
            if (1 === customUserThemeSettings.colors.length) {
              if (null == customUserThemeSettings.gradientColorStops) {
                const obj2 = { type: "custom", customUserThemeSettings };
                tmp22 = obj2;
              } else {
                tmp22 = null;
              }
            }
          }
          tmp20 = tmp22;
          if (null == tmp22) {
            const guildThemePreset = tmp(tmp2[7]).getGuildThemePreset(stateFromStores.presetId);
            let tmp24 = null;
            if (null != guildThemePreset) {
              const obj3 = { type: "preset", preset: guildThemePreset };
              tmp24 = obj3;
            }
            tmp20 = tmp24;
            const tmpResult6 = tmp(tmp2[7]);
          }
        }
        cResult[10] = stateFromStores;
        cResult[11] = tmp20;
        tmp18 = tmp20;
      } else {
        tmp18 = cResult[11];
      }
      return tmp18;
    }
    const fn2 = function f() {
      if (null != closure_0) {
        if (serverThemeUserEnabled) {
          let PERSONAL = UserSettingsProtoStore.resolveGuildThemeSourcePreference(tmp);
        }
        return PERSONAL;
      }
      PERSONAL = Client.GuildThemeSourcePreference.PERSONAL;
    };
    const items2 = [arg0, serverThemeUserEnabled];
    cResult[6] = arg0;
    cResult[7] = serverThemeUserEnabled;
    cResult[8] = fn2;
    cResult[9] = items2;
    tmp11 = closure_10(arg0, serverThemeUserEnabled);
  }
  const fn = function s() {

  };
  const items3 = [arg0, serverThemeUserEnabled];
  cResult[1] = arg0;
  cResult[2] = serverThemeUserEnabled;
  cResult[3] = fn;
  cResult[4] = items3;
  tmp8 = items3;
  tmp7 = fn;
  const tmpResult = require("ServerThemeUserExperiment");
}) : (function useActiveGuildThemeForGuildId(arg0) {
  _require = arg0;
  let str = arg1;
  if (arg1 === undefined) {
    str = "useActiveGuildThemeForGuildId";
  }
  let serverThemeUserEnabled;
  serverThemeUserEnabled = require("ServerThemeUserExperiment").useServerThemeUserEnabled(str);
  let obj = require("ServerThemeUserExperiment");
  const items = [GuildThemePreviewStore];
  const items1 = [arg0, serverThemeUserEnabled];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {

  }, items1);
  const tmp3 = closure_10(arg0, serverThemeUserEnabled);
  closure_3 = tmp3;
  let obj2 = require("initialize");
  const items2 = [closure_3];
  const items3 = [arg0, serverThemeUserEnabled];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
    if (null != closure_0) {
      if (serverThemeUserEnabled) {
        let PERSONAL = UserSettingsProtoStore.resolveGuildThemeSourcePreference(tmp);
      }
      return PERSONAL;
    }
    PERSONAL = Client.GuildThemeSourcePreference.PERSONAL;
  }, items3);
  const items4 = [tmp3, stateFromStores1, stateFromStores];
  return stateFromStores.useMemo(() => {
    if (undefined !== stateFromStores) {
      let tmp7 = null;
      if (null != stateFromStores) {
        const customUserThemeSettings = stateFromStores.customUserThemeSettings;
        let colors;
        if (customUserThemeSettings != null) {
          colors = customUserThemeSettings.colors;
        }
        let tmp9 = null;
        if (null != colors) {
          tmp9 = null;
          if (1 === customUserThemeSettings.colors.length) {
            if (null == customUserThemeSettings.gradientColorStops) {
              const obj = { type: "custom", customUserThemeSettings };
              tmp9 = obj;
            } else {
              tmp9 = null;
            }
          }
        }
        tmp7 = tmp9;
        if (null == tmp9) {
          const guildThemePreset = GuildThemePresets.getGuildThemePreset(stateFromStores.presetId);
          let tmp13 = null;
          if (null != guildThemePreset) {
            const obj3 = { type: "preset", preset: guildThemePreset };
            tmp13 = obj3;
          }
          tmp7 = tmp13;
        }
      }
      let tmp5 = tmp7;
    } else {
      tmp5 = null;
      if (stateFromStores1 !== Client.GuildThemeSourcePreference.PERSONAL) {
        tmp5 = closure_3;
      }
    }
    return tmp5;
  }, items4);
});
let closure_11 = tmp3;
ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEnabledGuildThemeForGuildId(arg0, arg1) {
  let str = "useEnabledGuildThemeForGuildId";
  if (undefined !== arg1) {
    str = arg1;
  }
  return closure_10(arg0, ServerThemeUserExperiment.useServerThemeUserEnabled(str));
}) : (function useEnabledGuildThemeForGuildId(arg0) {
  let str = arg1;
  if (arg1 === undefined) {
    str = "useEnabledGuildThemeForGuildId";
  }
  return closure_10(arg0, ServerThemeUserExperiment.useServerThemeUserEnabled(str));
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useActiveGuildTheme() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedGuildStore];
    const fn = function l() {
      return guildId.getGuildId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return closure_11(initialize.useStateFromStores(tmp4, tmp5), "useActiveGuildTheme");
}) : (function useActiveGuildTheme() {
  const items = [SelectedGuildStore];
  return closure_11(initialize.useStateFromStores(items, () => guildId.getGuildId()), "useActiveGuildTheme");
});
function resolveRenderableGuildThemeSettings(customUserThemeSettings) {
  if (null == customUserThemeSettings) {
    return null;
  } else {
    customUserThemeSettings = customUserThemeSettings.customUserThemeSettings;
    let colors;
    if (customUserThemeSettings != null) {
      colors = customUserThemeSettings.colors;
    }
    let tmp2 = null;
    if (null != colors) {
      tmp2 = null;
      if (1 === customUserThemeSettings.colors.length) {
        if (null == customUserThemeSettings.gradientColorStops) {
          const obj = { type: "custom", customUserThemeSettings };
          tmp2 = obj;
        } else {
          tmp2 = null;
        }
      }
    }
    if (null != tmp2) {
      return tmp2;
    } else {
      const guildThemePreset = GuildThemePresets.getGuildThemePreset(customUserThemeSettings.presetId);
      let tmp6 = null;
      if (null != guildThemePreset) {
        const obj3 = { type: "preset", preset: guildThemePreset };
        tmp6 = obj3;
      }
      return tmp6;
    }
  }
}
function getActiveGuildThemeForGuildId(guildId) {
  let str = GuildPowerupsConstants;
  if (GuildPowerupsConstants === undefined) {
    str = "getActiveGuildThemeForGuildId";
  }
  if (null != guildId) {
    if (obj.getServerThemeUserEnabled(str)) {
      guild = GuildStore.getGuild(guildId);
      if (null != guild) {
        const features = guild.features;
        if (features.has(GuildFeatures.GUILD_THEME)) {
          const guildThemeSourcePreference = UserSettingsProtoStore.resolveGuildThemeSourcePreference(guildId);
          if (guildThemeSourcePreference === Client.GuildThemeSourcePreference.PERSONAL) {
            return null;
          } else {
            let guildTheme = GuildThemeRuntimeStore.getGuildThemeSnapshot(guildId);
            if (undefined === guildTheme) {
              guildTheme = guild.guildTheme;
            }
            return resolveSavedActiveGuildTheme(guildTheme);
          }
        }
      }
      return null;
    }
    obj = ServerThemeUserExperiment;
  }
  return null;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_themes/GuildThemeResolver.tsx");

export { resolveRenderableGuildThemeSettings };
export const isRenderableGuildThemeSettings = function isRenderableGuildThemeSettings(customUserThemeSettings) {
  let tmp = null;
  if (null != customUserThemeSettings) {
    customUserThemeSettings = customUserThemeSettings.customUserThemeSettings;
    let colors;
    if (customUserThemeSettings != null) {
      colors = customUserThemeSettings.colors;
    }
    let tmp3 = null;
    if (null != colors) {
      tmp3 = null;
      if (1 === customUserThemeSettings.colors.length) {
        if (null == customUserThemeSettings.gradientColorStops) {
          const obj = { type: "custom", customUserThemeSettings };
          tmp3 = obj;
        } else {
          tmp3 = null;
        }
      }
    }
    tmp = tmp3;
    if (null == tmp3) {
      const guildThemePreset = GuildThemePresets.getGuildThemePreset(customUserThemeSettings.presetId);
      let tmp7 = null;
      if (null != guildThemePreset) {
        const obj3 = { type: "preset", preset: guildThemePreset };
        tmp7 = obj3;
      }
      tmp = tmp7;
    }
  }
  return null != tmp;
};
export { resolveSavedActiveGuildTheme };
export const useEnabledGuildThemeForGuildId = tmp2;
export { getActiveGuildThemeForGuildId };
export const getActiveGuildTheme = function getActiveGuildTheme() {
  const guildId = SelectedGuildStore.getGuildId();
  let tmp11Result = null;
  if (null != guildId) {
    tmp11Result = null;
    if (obj.getServerThemeUserEnabled("getActiveGuildTheme")) {
      guild = GuildStore.getGuild(guildId);
      tmp11Result = null;
      if (null != guild) {
        const features = guild.features;
        tmp11Result = null;
        if (features.has(GuildFeatures.GUILD_THEME)) {
          const guildThemeSourcePreference = UserSettingsProtoStore.resolveGuildThemeSourcePreference(guildId);
          tmp11Result = null;
          if (guildThemeSourcePreference !== Client.GuildThemeSourcePreference.PERSONAL) {
            let guildTheme = GuildThemeRuntimeStore.getGuildThemeSnapshot(guildId);
            if (undefined === guildTheme) {
              guildTheme = guild.guildTheme;
            }
            tmp11Result = resolveSavedActiveGuildTheme(guildTheme);
          }
        }
      }
    }
    obj = ServerThemeUserExperiment;
  }
  return tmp11Result;
};
export const useActiveGuildThemeForGuildId = tmp3;
export const useActiveGuildTheme = tmp4;
export const useIsGuildThemePreviewActive = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsGuildThemePreviewActive() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildThemePreviewStore];
    const fn = function l() {
      return false;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useIsGuildThemePreviewActive() {
  const items = [GuildThemePreviewStore];
  return initialize.useStateFromStores(items, () => false);
});