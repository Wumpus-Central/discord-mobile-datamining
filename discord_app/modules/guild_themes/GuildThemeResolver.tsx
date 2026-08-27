// === Module 4326: resolveSavedActiveGuildTheme ===

// Module 4326 (resolveSavedActiveGuildTheme)
import initialize from "initialize" /* 589 */;
import set from "set" /* 4296 */;
import apexExperiment from "apexExperiment" /* 4373 */;
import closure_2 from "noop" /* 19 */;
import closure_3 from "handleConnectionClosedOrResumed" /* 1340 */;
import closure_4 from "createGuildRecordFromRust" /* 1910 */;
import closure_5 from "handleConnectionOpen" /* 4267 */;
import closure_6 from "handleEnd" /* 4327 */;
import closure_7 from "snapshotSelectedGuildId" /* 4330 */;
import { GuildFeatures } from "ME" /* 676 */;

require = arg1;
function resolveSavedActiveGuildTheme(enabled) {
  enabled = undefined;
  if (enabled != null) {
    enabled = enabled.enabled;
  }
  let tmp2 = null;
  if (true === enabled) {
    const themeSettings = enabled.themeSettings;
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
            let obj = { type: "custom", customUserThemeSettings: null };
            obj[1] = customUserThemeSettings;
            tmp4 = obj;
          } else {
            tmp4 = null;
          }
        }
      }
      tmp5 = tmp4;
      if (null == tmp4) {
        const guildThemePreset = set.getGuildThemePreset(themeSettings.presetId);
        let tmp9 = null;
        if (null != guildThemePreset) {
          obj = { type: "preset", preset: null };
          obj[1] = guildThemePreset;
          tmp9 = obj;
        }
        tmp5 = tmp9;
        const obj2 = set;
      }
    }
    tmp2 = tmp5;
  }
  return tmp2;
}
function useActiveGuildThemeForGuildId(arg0, useActiveGuildTheme) {
  let _require = arg0;
  let str = useActiveGuildTheme;
  if (useActiveGuildTheme === undefined) {
    str = "useActiveGuildThemeForGuildId";
  }
  let serverThemeUserEnabled;
  let stateFromStores1;
  let memo;
  let stateFromStores2;
  serverThemeUserEnabled = _require(serverThemeUserEnabled[9]).useServerThemeUserEnabled(str);
  let obj = _require(serverThemeUserEnabled[9]);
  const items = [closure_6];
  const items1 = [arg0, serverThemeUserEnabled];
  const stateFromStores = _require(serverThemeUserEnabled[8]).useStateFromStores(items, () => {

  }, items1);
  stateFromStores1 = stateFromStores;
  _require = arg0;
  stateFromStores1 = undefined;
  let obj2 = _require(serverThemeUserEnabled[8]);
  const items2 = [stateFromStores2, closure_7];
  const items3 = [arg0, serverThemeUserEnabled];
  stateFromStores1 = _require(serverThemeUserEnabled[8]).useStateFromStores(items2, () => {
    if (null != closure_0) {
      if (serverThemeUserEnabled) {
        const guild = closure_1_4.getGuild(tmp);
        if (null != guild) {
          const features = guild.features;
          if (features.has(closure_1_8.GUILD_THEME)) {
            let guildTheme = closure_1_7.getGuildThemeSnapshot(tmp);
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
  }, items3);
  const items4 = [stateFromStores1];
  memo = stateFromStores1.useMemo(() => closure_1_9(stateFromStores), items4);
  const obj3 = _require(serverThemeUserEnabled[8]);
  const items5 = [memo];
  const items6 = [arg0, serverThemeUserEnabled];
  stateFromStores2 = _require(serverThemeUserEnabled[8]).useStateFromStores(items5, () => {
    if (null != callback) {
      if (serverThemeUserEnabled) {
        let PERSONAL = memo.resolveGuildThemeSourcePreference(tmp);
      }
      return PERSONAL;
    }
    PERSONAL = callback(serverThemeUserEnabled[10]).GuildThemeSourcePreference.PERSONAL;
  }, items6);
  const items7 = [memo, stateFromStores2, stateFromStores];
  return stateFromStores1.useMemo(() => {
    if (undefined !== stateFromStores1) {
      let tmp7 = null;
      if (null != tmp) {
        const customUserThemeSettings = tmp.customUserThemeSettings;
        let colors;
        if (customUserThemeSettings != null) {
          colors = customUserThemeSettings.colors;
        }
        let tmp9 = null;
        if (null != colors) {
          tmp9 = null;
          if (1 === customUserThemeSettings.colors.length) {
            if (null == customUserThemeSettings.gradientColorStops) {
              let obj = { type: "custom", customUserThemeSettings: null };
              obj[1] = customUserThemeSettings;
              tmp9 = obj;
            } else {
              tmp9 = null;
            }
          }
        }
        tmp7 = tmp9;
        if (null == tmp9) {
          const guildThemePreset = callback(serverThemeUserEnabled[7]).getGuildThemePreset(tmp.presetId);
          let tmp13 = null;
          if (null != guildThemePreset) {
            obj = { type: "preset", preset: null };
            obj[1] = guildThemePreset;
            tmp13 = obj;
          }
          tmp7 = tmp13;
          const obj2 = callback(serverThemeUserEnabled[7]);
        }
      }
      let tmp5 = tmp7;
    } else {
      tmp5 = null;
      if (stateFromStores2 !== callback(serverThemeUserEnabled[10]).GuildThemeSourcePreference.PERSONAL) {
        tmp5 = memo;
      }
    }
    return tmp5;
  }, items7);
}
const result = require("set").fileFinishedImporting("modules/guild_themes/GuildThemeResolver.tsx");

export const resolveRenderableGuildThemeSettings = function resolveRenderableGuildThemeSettings(customUserThemeSettings) {
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
          let obj = { type: "custom", customUserThemeSettings: null };
          obj[1] = customUserThemeSettings;
          tmp2 = obj;
        } else {
          tmp2 = null;
        }
      }
    }
    if (null != tmp2) {
      return tmp2;
    } else {
      const guildThemePreset = set.getGuildThemePreset(customUserThemeSettings.presetId);
      let tmp6 = null;
      if (null != guildThemePreset) {
        obj = { type: "preset", preset: null };
        obj[1] = guildThemePreset;
        tmp6 = obj;
      }
      return tmp6;
    }
  }
};
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
          let obj = { type: "custom", customUserThemeSettings: null };
          obj[1] = customUserThemeSettings;
          tmp3 = obj;
        } else {
          tmp3 = null;
        }
      }
    }
    tmp = tmp3;
    if (null == tmp3) {
      const guildThemePreset = set.getGuildThemePreset(customUserThemeSettings.presetId);
      let tmp7 = null;
      if (null != guildThemePreset) {
        obj = { type: "preset", preset: null };
        obj[1] = guildThemePreset;
        tmp7 = obj;
      }
      tmp = tmp7;
      const obj2 = set;
    }
  }
  return null != tmp;
};
export { resolveSavedActiveGuildTheme };
export const useEnabledGuildThemeForGuildId = function useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger) {
  let str = GuildThemeNuxTrigger;
  if (GuildThemeNuxTrigger === undefined) {
    str = "useEnabledGuildThemeForGuildId";
  }
  serverThemeUserEnabled = _require(serverThemeUserEnabled[9]).useServerThemeUserEnabled(str);
  _require = guildId;
  let stateFromStores;
  const obj = _require(serverThemeUserEnabled[9]);
  const items = [closure_4, closure_7];
  const items1 = [guildId, serverThemeUserEnabled];
  stateFromStores = _require(serverThemeUserEnabled[8]).useStateFromStores(items, () => {
    if (null != closure_0) {
      if (serverThemeUserEnabled) {
        const guild = closure_1_4.getGuild(tmp);
        if (null != guild) {
          const features = guild.features;
          if (features.has(closure_1_8.GUILD_THEME)) {
            let guildTheme = closure_1_7.getGuildThemeSnapshot(tmp);
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
  return stateFromStores.useMemo(() => closure_1_9(stateFromStores), items2);
};
export const getActiveGuildThemeForGuildId = function getActiveGuildThemeForGuildId(guildId, GuildPowerupsConstants) {
  let str = GuildPowerupsConstants;
  if (GuildPowerupsConstants === undefined) {
    str = "getActiveGuildThemeForGuildId";
  }
  if (null != guildId) {
    if (obj.getServerThemeUserEnabled(str)) {
      const guild = store.getGuild(guildId);
      if (null != guild) {
        const features = guild.features;
        if (features.has(GuildFeatures.GUILD_THEME)) {
          const guildThemeSourcePreference = closure_3.resolveGuildThemeSourcePreference(guildId);
          if (guildThemeSourcePreference === tmp8(4376).GuildThemeSourcePreference.PERSONAL) {
            return null;
          } else {
            let guildTheme = store2.getGuildThemeSnapshot(guildId);
            if (undefined === guildTheme) {
              guildTheme = guild.guildTheme;
            }
            return resolveSavedActiveGuildTheme(guildTheme);
          }
        }
      }
      return null;
    }
    obj = apexExperiment;
    tmp8 = require;
  }
  return null;
};
export const getActiveGuildTheme = function getActiveGuildTheme() {
  guildId = guildId.getGuildId();
  let tmp11Result = null;
  if (null != guildId) {
    tmp11Result = null;
    if (obj.getServerThemeUserEnabled("getActiveGuildTheme")) {
      const guild = store.getGuild(guildId);
      tmp11Result = null;
      if (null != guild) {
        const features = guild.features;
        tmp11Result = null;
        if (features.has(GuildFeatures.GUILD_THEME)) {
          const guildThemeSourcePreference = closure_3.resolveGuildThemeSourcePreference(guildId);
          tmp11Result = null;
          if (guildThemeSourcePreference !== tmp3(4376).GuildThemeSourcePreference.PERSONAL) {
            let guildTheme = store2.getGuildThemeSnapshot(guildId);
            if (undefined === guildTheme) {
              guildTheme = guild.guildTheme;
            }
            tmp11Result = resolveSavedActiveGuildTheme(guildTheme);
            const tmp11 = resolveSavedActiveGuildTheme;
          }
        }
      }
    }
    obj = apexExperiment;
    tmp3 = require;
  }
  return tmp11Result;
};
export { useActiveGuildThemeForGuildId };
export const useActiveGuildTheme = function useActiveGuildTheme() {
  const items = [closure_5];
  return useActiveGuildThemeForGuildId(initialize.useStateFromStores(items, () => guildId.getGuildId()), "useActiveGuildTheme");
};
export const useIsGuildThemePreviewActive = function useIsGuildThemePreviewActive() {
  const items = [closure_6];
  return initialize.useStateFromStores(items, () => false);
};