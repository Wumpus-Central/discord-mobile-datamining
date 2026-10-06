// === Module 4769: GuildThemeResolver ===

// Module 4769 (GuildThemeResolver)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import GuildThemePresets from "GuildThemePresets" /* 4739 */;
import ServerThemeUserExperiment from "ServerThemeUserExperiment" /* 4778 */;
import flow_Client from "flow/Client" /* 4793 */;
import react from "react" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import GuildStore from "GuildStore" /* 2074 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import GuildThemePreviewStore from "GuildThemePreviewStore" /* 4770 */;
import GuildThemeRuntimeStore from "GuildThemeRuntimeStore" /* 4772 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

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
            tmp4 = { type: "custom", customUserThemeSettings };
            const obj = { type: "custom", customUserThemeSettings };
          } else {
            tmp4 = null;
          }
        }
      }
      tmp5 = tmp4;
      if (null == tmp4) {
        const obj2 = GuildThemePresets;
        const guildThemePreset = obj2.getGuildThemePreset(themeSettings.presetId);
        let tmp9 = null;
        if (null != guildThemePreset) {
          tmp9 = { type: "preset", preset: guildThemePreset };
          const obj3 = { type: "preset", preset: guildThemePreset };
        }
        tmp5 = tmp9;
      }
    }
    tmp2 = tmp5;
  }
  return tmp2;
}
const GuildFeatures = Constants.GuildFeatures;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  let first;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("react");
  const cResult = obj.c(7);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, GuildThemeRuntimeStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp7;
    let tmp8;
    let tmp10;
    if (cResult[2] === arg1) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
    if (cResult[5] !== stateFromStores) {
      const tmp12 = resolveSavedActiveGuildTheme(stateFromStores);
      cResult[5] = stateFromStores;
      cResult[6] = tmp12;
      tmp10 = tmp12;
    } else {
      tmp10 = cResult[6];
    }
    return tmp10;
  }
  const fn = function o() {
    if (null != closure_0) {
      if (closure_1) {
        const guild = GuildStore.getGuild(closure_0);
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
}) : ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  const items = [GuildStore, GuildThemeRuntimeStore];
  const items1 = [arg0, arg1];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (null != closure_0) {
      if (closure_1) {
        const guild = GuildStore.getGuild(closure_0);
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
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let str = "useEnabledGuildThemeForGuildId";
  if (undefined !== arg1) {
    str = arg1;
  }
  const obj = ServerThemeUserExperiment;
  return closure_10(arg0, obj.useServerThemeUserEnabled(str));
}) : ((arg0) => {
  let str = arg1;
  if (arg1 === undefined) {
    str = "useEnabledGuildThemeForGuildId";
  }
  const obj = ServerThemeUserExperiment;
  return closure_10(arg0, obj.useServerThemeUserEnabled(str));
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let first;
  let serverThemeUserEnabled;
  _require = arg0;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(12);
  let str = "useActiveGuildThemeForGuildId";
  if (undefined !== arg1) {
    str = arg1;
  }
  const tmpResult = tmp(serverThemeUserEnabled[11]);
  serverThemeUserEnabled = tmpResult.useServerThemeUserEnabled(str);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildThemePreviewStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp7;
    let tmp8;
    if (cResult[2] === serverThemeUserEnabled) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    const tmpResult4 = tmp(serverThemeUserEnabled[10]);
    const stateFromStores = tmpResult4.useStateFromStores(first, tmp7, tmp8);
    const _Symbol = Symbol;
    const tmp11 = closure_10(arg0, serverThemeUserEnabled);
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [UserSettingsProtoStore];
      cResult[5] = items1;
    }
    if (cResult[6] === arg0) {
      let tmp18;
      tmp(serverThemeUserEnabled[10]);
      if (undefined === stateFromStores) {
        let tmp25 = null;
        if (tmp17 !== tmp(serverThemeUserEnabled[12]).GuildThemeSourcePreference.PERSONAL) {
          tmp25 = tmp11;
        }
        tmp18 = tmp25;
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
                tmp22 = { type: "custom", customUserThemeSettings };
                const obj2 = { type: "custom", customUserThemeSettings };
              } else {
                tmp22 = null;
              }
            }
          }
          tmp20 = tmp22;
          if (null == tmp22) {
            const tmpResult6 = tmp(serverThemeUserEnabled[7]);
            const guildThemePreset = tmpResult6.getGuildThemePreset(stateFromStores.presetId);
            let tmp24 = null;
            if (null != guildThemePreset) {
              tmp24 = { type: "preset", preset: guildThemePreset };
              const obj3 = { type: "preset", preset: guildThemePreset };
            }
            tmp20 = tmp24;
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
        let PERSONAL;
        if (serverThemeUserEnabled) {
          PERSONAL = UserSettingsProtoStore.resolveGuildThemeSourcePreference(tmp);
        }
        return PERSONAL;
      }
      PERSONAL = flow_Client.GuildThemeSourcePreference.PERSONAL;
    };
    const items2 = [arg0, serverThemeUserEnabled];
    cResult[6] = arg0;
    cResult[7] = serverThemeUserEnabled;
    cResult[8] = fn2;
    cResult[9] = items2;
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
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let str = arg1;
  if (arg1 === undefined) {
    str = "useActiveGuildThemeForGuildId";
  }
  let serverThemeUserEnabled;
  let obj = require("ServerThemeUserExperiment");
  serverThemeUserEnabled = obj.useServerThemeUserEnabled(str);
  let obj2 = require("get initialized");
  const items = [GuildThemePreviewStore];
  const items1 = [arg0, serverThemeUserEnabled];
  const stateFromStores = obj2.useStateFromStores(items, () => {

  }, items1);
  const tmp3 = closure_10(arg0, serverThemeUserEnabled);
  let closure_3 = tmp3;
  let obj3 = require("get initialized");
  const items2 = [closure_3];
  const items3 = [arg0, serverThemeUserEnabled];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => {
    if (null != closure_0) {
      let PERSONAL;
      if (serverThemeUserEnabled) {
        PERSONAL = UserSettingsProtoStore.resolveGuildThemeSourcePreference(tmp);
      }
      return PERSONAL;
    }
    PERSONAL = flow_Client.GuildThemeSourcePreference.PERSONAL;
  }, items3);
  const items4 = [tmp3, stateFromStores1, stateFromStores];
  return stateFromStores.useMemo(() => {
    let tmp5;
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
              tmp9 = { type: "custom", customUserThemeSettings };
              const obj = { type: "custom", customUserThemeSettings };
            } else {
              tmp9 = null;
            }
          }
        }
        tmp7 = tmp9;
        if (null == tmp9) {
          const obj2 = GuildThemePresets;
          const guildThemePreset = obj2.getGuildThemePreset(stateFromStores.presetId);
          let tmp13 = null;
          if (null != guildThemePreset) {
            tmp13 = { type: "preset", preset: guildThemePreset };
            const obj3 = { type: "preset", preset: guildThemePreset };
          }
          tmp7 = tmp13;
        }
      }
      tmp5 = tmp7;
    } else {
      tmp5 = null;
      if (stateFromStores1 !== flow_Client.GuildThemeSourcePreference.PERSONAL) {
        tmp5 = closure_3;
      }
    }
    return tmp5;
  }, items4);
});
let closure_11 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let guildId;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedGuildStore];
    const fn = function u() {
      return guildId.getGuildId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return closure_11(tmpResult.useStateFromStores(tmp4, tmp5), "useActiveGuildTheme");
}) : (() => {
  let guildId;
  const items = [SelectedGuildStore];
  const obj = get_initialized;
  return closure_11(obj.useStateFromStores(items, () => guildId.getGuildId()), "useActiveGuildTheme");
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildThemePreviewStore];
    const fn = function u() {
      return false;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [GuildThemePreviewStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => false);
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
          tmp2 = { type: "custom", customUserThemeSettings };
          const obj = { type: "custom", customUserThemeSettings };
        } else {
          tmp2 = null;
        }
      }
    }
    if (null != tmp2) {
      return tmp2;
    } else {
      const obj2 = GuildThemePresets;
      const guildThemePreset = obj2.getGuildThemePreset(customUserThemeSettings.presetId);
      let tmp6 = null;
      if (null != guildThemePreset) {
        tmp6 = { type: "preset", preset: guildThemePreset };
        const obj3 = { type: "preset", preset: guildThemePreset };
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
    const obj = ServerThemeUserExperiment;
    if (obj.getServerThemeUserEnabled(str)) {
      const guild = GuildStore.getGuild(guildId);
      if (null != guild) {
        const features = guild.features;
        if (features.has(GuildFeatures.GUILD_THEME)) {
          const guildThemeSourcePreference = UserSettingsProtoStore.resolveGuildThemeSourcePreference(guildId);
          if (guildThemeSourcePreference === flow_Client.GuildThemeSourcePreference.PERSONAL) {
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
  }
  return null;
}
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
          tmp3 = { type: "custom", customUserThemeSettings };
          const obj = { type: "custom", customUserThemeSettings };
        } else {
          tmp3 = null;
        }
      }
    }
    tmp = tmp3;
    if (null == tmp3) {
      const obj2 = GuildThemePresets;
      const guildThemePreset = obj2.getGuildThemePreset(customUserThemeSettings.presetId);
      let tmp7 = null;
      if (null != guildThemePreset) {
        tmp7 = { type: "preset", preset: guildThemePreset };
        const obj3 = { type: "preset", preset: guildThemePreset };
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
    const obj = ServerThemeUserExperiment;
    if (obj.getServerThemeUserEnabled("getActiveGuildTheme")) {
      const guild = GuildStore.getGuild(guildId);
      tmp11Result = null;
      if (null != guild) {
        const features = guild.features;
        tmp11Result = null;
        if (features.has(GuildFeatures.GUILD_THEME)) {
          const guildThemeSourcePreference = UserSettingsProtoStore.resolveGuildThemeSourcePreference(guildId);
          tmp11Result = null;
          if (guildThemeSourcePreference !== flow_Client.GuildThemeSourcePreference.PERSONAL) {
            let guildTheme = GuildThemeRuntimeStore.getGuildThemeSnapshot(guildId);
            if (undefined === guildTheme) {
              guildTheme = guild.guildTheme;
            }
            tmp11Result = resolveSavedActiveGuildTheme(guildTheme);
          }
        }
      }
    }
  }
  return tmp11Result;
};
export const useActiveGuildThemeForGuildId = tmp3;
export const useActiveGuildTheme = tmp4;
export const useIsGuildThemePreviewActive = tmp5;