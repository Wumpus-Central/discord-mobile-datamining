// === Module 16282: collectGuildThemeAnalyticsMetadata ===

// Module 16282 (collectGuildThemeAnalyticsMetadata)
import closure_0 from "createGuildRecordFromRust" /* 1909 */;

const result = require("set").fileFinishedImporting("modules/guild_themes/GuildThemeAnalyticsUtils.tsx");

export const collectGuildThemeAnalyticsMetadata = function collectGuildThemeAnalyticsMetadata(selectedGuildId) {
  if (null == selectedGuildId) {
    return null;
  } else {
    guild = guild.getGuild(selectedGuildId);
    if (null == guild) {
      return null;
    } else {
      const guildTheme = guild.guildTheme;
      if (null != guildTheme) {
        if (guildTheme.enabled) {
          const themeSettings = guildTheme.themeSettings;
          let prop;
          if (themeSettings != null) {
            prop = themeSettings.customUserThemeSettings;
          }
          const obj = { guild_theme_enabled: true, guild_theme_is_custom: null };
          obj[1] = null != prop;
          const themeSettings2 = guildTheme.themeSettings;
          let presetId;
          if (themeSettings2 != null) {
            presetId = themeSettings2.presetId;
          }
          if (null != presetId) {
            obj.guild_theme_preset_id = presetId;
          }
          return obj;
        }
      }
      return { guild_theme_enabled: false, guild_theme_is_custom: false };
    }
  }
};