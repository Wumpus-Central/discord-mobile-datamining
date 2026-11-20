// === Module 4997: GuildThemeResolver ===

// Module 4997 (GuildThemeResolver)
import initialize from "initialize" /* 504 */;
import GuildThemePresets from "GuildThemePresets" /* 4967 */;
import GuildThemePreviewStore from "GuildThemePreviewStore" /* 4998 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_themes/GuildThemeResolver.tsx");

export function resolveRenderableGuildThemeSettings(customUserThemeSettings) {
  if (null == customUserThemeSettings) {
    return null;
  } else {
    customUserThemeSettings = customUserThemeSettings.customUserThemeSettings;
    colors = undefined;
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
export function isRenderableGuildThemeSettings(customUserThemeSettings) {
  let tmp = null;
  if (null != customUserThemeSettings) {
    customUserThemeSettings = customUserThemeSettings.customUserThemeSettings;
    colors = undefined;
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
}
export function useEnabledGuildThemeForGuildId() {
  return null;
}
export function getActiveGuildTheme() {
  return null;
}
export function useActiveGuildThemeForGuildId() {
  return null;
}
export function useActiveGuildTheme() {
  return null;
}
export function useIsGuildThemePreviewActive() {
  items = [GuildThemePreviewStore];
  return initialize.useStateFromStores(items, () => false);
}