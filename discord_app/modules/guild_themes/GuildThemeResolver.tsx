// discord_app/modules/guild_themes/GuildThemeResolver.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import GuildThemePresets from "GuildThemePresets.tsx";
import ServerThemeUserExperiment from "../premium/powerups/experiments/ServerThemeUserExperiment.tsx";
import Client from "../../flow/Client.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import GuildThemePreviewStore from "GuildThemePreviewStore.tsx";
import GuildThemeRuntimeStore from "GuildThemeRuntimeStore.tsx";

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
            let obj = { type: "custom", customUserThemeSettings };
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
          obj = { type: "preset", preset: guildThemePreset };
          tmp9 = obj;
        }
        tmp5 = tmp9;
      }
    }
    tmp2 = tmp5;
  }
  return tmp2;
}
function useActiveGuildThemeForGuildId(context) {
  _require = context;
  let str = useActiveGuildTheme;
  if (useActiveGuildTheme === undefined) {
    str = "useActiveGuildThemeForGuildId";
  }
  let serverThemeUserEnabled;
  let stateFromStores2;
  serverThemeUserEnabled = require("ServerThemeUserExperiment").useServerThemeUserEnabled(str);
  let obj = require("ServerThemeUserExperiment");
  const items = [GuildThemePreviewStore];
  const items1 = [context, serverThemeUserEnabled];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {}, items1);
  closure_129_0 = context;
  closure_129_1 = serverThemeUserEnabled;
  let obj2 = require("initialize");
  const items2 = [stateFromStores2, GuildThemeRuntimeStore];
  const items3 = [context, serverThemeUserEnabled];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items2,
    () => {
      if (null != closure_0) {
        if (serverThemeUserEnabled) {
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
    },
    items3,
  );
  closure_129_2 = stateFromStores1;
  const items4 = [stateFromStores1];
  const memo = stateFromStores.useMemo(() => resolveSavedActiveGuildTheme(stateFromStores), items4);
  const obj3 = require("initialize");
  const items5 = [memo];
  const items6 = [context, serverThemeUserEnabled];
  stateFromStores2 = require("initialize").useStateFromStores(
    items5,
    () => {
      if (null != closure_0) {
        if (serverThemeUserEnabled) {
          let PERSONAL = UserSettingsProtoStore.resolveGuildThemeSourcePreference(tmp);
        }
        return PERSONAL;
      }
      PERSONAL = Client.GuildThemeSourcePreference.PERSONAL;
    },
    items6,
  );
  const items7 = [memo, stateFromStores2, stateFromStores];
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
              let obj = { type: "custom", customUserThemeSettings };
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
            obj = { type: "preset", preset: guildThemePreset };
            tmp13 = obj;
          }
          tmp7 = tmp13;
        }
      }
      let tmp5 = tmp7;
    } else {
      tmp5 = null;
      if (stateFromStores2 !== Client.GuildThemeSourcePreference.PERSONAL) {
        tmp5 = memo;
      }
    }
    return tmp5;
  }, items7);
}
const GuildFeatures = fn(1074).GuildFeatures;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_themes/GuildThemeResolver.tsx");

export const resolveRenderableGuildThemeSettings = function resolveRenderableGuildThemeSettings(
  customUserThemeSettings,
) {
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
          let obj = { type: "custom", customUserThemeSettings };
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
        obj = { type: "preset", preset: guildThemePreset };
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
          let obj = { type: "custom", customUserThemeSettings };
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
        obj = { type: "preset", preset: guildThemePreset };
        tmp7 = obj;
      }
      tmp = tmp7;
    }
  }
  return null != tmp;
};
export { resolveSavedActiveGuildTheme };
export const useEnabledGuildThemeForGuildId = function useEnabledGuildThemeForGuildId(guildId) {
  let str = GuildThemeNuxTrigger;
  if (GuildThemeNuxTrigger === undefined) {
    str = "useEnabledGuildThemeForGuildId";
  }
  serverThemeUserEnabled = require("ServerThemeUserExperiment").useServerThemeUserEnabled(str);
  _require = guildId;
  const obj = require("ServerThemeUserExperiment");
  const items = [GuildStore, GuildThemeRuntimeStore];
  const items1 = [guildId, serverThemeUserEnabled];
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => {
      if (null != closure_0) {
        if (serverThemeUserEnabled) {
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
    },
    items1,
  );
  const items2 = [stateFromStores];
  return stateFromStores.useMemo(() => resolveSavedActiveGuildTheme(stateFromStores), items2);
};
export const getActiveGuildThemeForGuildId = function getActiveGuildThemeForGuildId(guildId) {
  let str = GuildPowerupsConstants;
  if (GuildPowerupsConstants === undefined) {
    str = "getActiveGuildThemeForGuildId";
  }
  if (null != guildId) {
    if (obj.getServerThemeUserEnabled(str)) {
      const guild = GuildStore.getGuild(guildId);
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
};
export const getActiveGuildTheme = function getActiveGuildTheme() {
  const guildId = SelectedGuildStore.getGuildId();
  let tmp11Result = null;
  if (null != guildId) {
    tmp11Result = null;
    if (obj.getServerThemeUserEnabled("getActiveGuildTheme")) {
      const guild = GuildStore.getGuild(guildId);
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
export { useActiveGuildThemeForGuildId };
export const useActiveGuildTheme = function useActiveGuildTheme() {
  const items = [SelectedGuildStore];
  return useActiveGuildThemeForGuildId(
    initialize.useStateFromStores(items, () => guildId.getGuildId()),
    "useActiveGuildTheme",
  );
};
export const useIsGuildThemePreviewActive = function useIsGuildThemePreviewActive() {
  const items = [GuildThemePreviewStore];
  return initialize.useStateFromStores(items, () => false);
};
