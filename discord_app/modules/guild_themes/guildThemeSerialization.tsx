// === Module 2062: guildThemeSerialization ===

// Module 2062 (guildThemeSerialization)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_themes/guildThemeSerialization.tsx");

export const cloneGuildThemeSettings = function cloneGuildThemeSettings(themeSettings) {
  let tmp = null;
  if (null != themeSettings) {
    const obj = { presetId: null, customUserThemeSettings: null };
    ({ presetId: obj.presetId, customUserThemeSettings } = themeSettings);
    let tmp2;
    if (null != customUserThemeSettings) {
      const obj3 = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
      const items = [];
      HermesBuiltin.arraySpread(customUserThemeSettings.colors, 0);
      obj3.colors = items;
      let gradientColorStops = customUserThemeSettings.gradientColorStops;
      if (gradientColorStops == null) {
        gradientColorStops = [];
      }
      const items1 = [];
      HermesBuiltin.arraySpread(gradientColorStops, 0);
      obj3.gradientColorStops = items1;
      ({ gradientAngle: obj2.gradientAngle, baseMix: obj2.baseMix } = customUserThemeSettings);
      tmp2 = obj3;
    }
    obj.customUserThemeSettings = tmp2;
    tmp = obj;
  }
  return tmp;
};
export const cloneGuildTheme = function cloneGuildTheme(guildTheme) {
  let tmp = null;
  if (null != guildTheme) {
    const obj = { enabled: null, themeSettings: null };
    ({ enabled: obj.enabled, themeSettings } = guildTheme);
    let tmp2 = null;
    if (null != themeSettings) {
      const obj5 = { presetId: null, customUserThemeSettings: null };
      ({ presetId: obj2.presetId, customUserThemeSettings } = themeSettings);
      let tmp3;
      if (null != customUserThemeSettings) {
        const obj6 = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
        const items = [];
        HermesBuiltin.arraySpread(customUserThemeSettings.colors, 0);
        obj6.colors = items;
        let gradientColorStops = customUserThemeSettings.gradientColorStops;
        if (gradientColorStops == null) {
          gradientColorStops = [];
        }
        const items1 = [];
        HermesBuiltin.arraySpread(gradientColorStops, 0);
        obj6.gradientColorStops = items1;
        ({ gradientAngle: obj3.gradientAngle, baseMix: obj3.baseMix } = customUserThemeSettings);
        tmp3 = obj6;
      }
      obj5.customUserThemeSettings = tmp3;
      tmp2 = obj5;
    }
    obj.themeSettings = tmp2;
    tmp = obj;
  }
  return tmp;
};
export const toServerGuildThemeSettings = function toServerGuildThemeSettings(themeSettings) {
  if (null == themeSettings) {
    let obj = { preset_id: null, custom_user_theme_settings: null };
  } else {
    let presetId = themeSettings.presetId;
    if (presetId == null) {
      presetId = null;
    }
    obj = { preset_id: presetId, custom_user_theme_settings: null };
    const customUserThemeSettings = themeSettings.customUserThemeSettings;
    let tmp2 = null;
    if (null != customUserThemeSettings) {
      const obj2 = { colors: null, gradient_color_stops: null, gradient_angle: null, base_mix: null };
      const items = [];
      HermesBuiltin.arraySpread(customUserThemeSettings.colors, 0);
      obj2.colors = items;
      if (null != customUserThemeSettings.gradientColorStops) {
        const items1 = [];
        HermesBuiltin.arraySpread(customUserThemeSettings.gradientColorStops, 0);
        let items2 = items1;
      } else {
        items2 = [];
      }
      obj2.gradient_color_stops = items2;
      let num3 = customUserThemeSettings.gradientAngle;
      if (num3 == null) {
        num3 = 0;
      }
      obj2.gradient_angle = num3;
      let num4 = customUserThemeSettings.baseMix;
      if (num4 == null) {
        num4 = 0;
      }
      obj2.base_mix = num4;
      tmp2 = obj2;
    }
    obj.custom_user_theme_settings = tmp2;
  }
  return obj;
};
export const fromServerGuildThemeSettings = function fromServerGuildThemeSettings(preset_id) {
  let tmp = null;
  if (null != preset_id) {
    if (null != preset_id.preset_id) {
      preset_id = undefined;
      if (null != preset_id.preset_id) {
        preset_id = preset_id.preset_id;
      }
      const obj = { presetId: preset_id, customUserThemeSettings: null };
      const custom_user_theme_settings = preset_id.custom_user_theme_settings;
      let tmp3;
      if (null != custom_user_theme_settings) {
        const obj3 = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
        ({ colors: obj2.colors, gradient_color_stops } = custom_user_theme_settings);
        if (gradient_color_stops == null) {
          gradient_color_stops = [];
        }
        obj3.gradientColorStops = gradient_color_stops;
        let num = custom_user_theme_settings.gradient_angle;
        if (num == null) {
          num = 0;
        }
        obj3.gradientAngle = num;
        let num2 = custom_user_theme_settings.base_mix;
        if (num2 == null) {
          num2 = 0;
        }
        obj3.baseMix = num2;
        tmp3 = obj3;
      }
      obj.customUserThemeSettings = tmp3;
      tmp = obj;
    } else {
      tmp = null;
    }
  }
  return tmp;
};
export const fromServerGuildTheme = function fromServerGuildTheme(theme) {
  let tmp = null;
  if (null != theme) {
    const obj = { enabled: theme.enabled, themeSettings: null };
    let tmp2 = null;
    if (null != theme) {
      if (null != theme.preset_id) {
        let preset_id;
        if (null != theme.preset_id) {
          preset_id = theme.preset_id;
        }
        const obj2 = { presetId: preset_id, customUserThemeSettings: null };
        const custom_user_theme_settings = theme.custom_user_theme_settings;
        let tmp4;
        if (null != custom_user_theme_settings) {
          const obj5 = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
          ({ colors: obj3.colors, gradient_color_stops } = custom_user_theme_settings);
          if (gradient_color_stops == null) {
            gradient_color_stops = [];
          }
          obj5.gradientColorStops = gradient_color_stops;
          let num = custom_user_theme_settings.gradient_angle;
          if (num == null) {
            num = 0;
          }
          obj5.gradientAngle = num;
          let num2 = custom_user_theme_settings.base_mix;
          if (num2 == null) {
            num2 = 0;
          }
          obj5.baseMix = num2;
          tmp4 = obj5;
        }
        obj2.customUserThemeSettings = tmp4;
        tmp2 = obj2;
      } else {
        tmp2 = null;
      }
    }
    obj.themeSettings = tmp2;
    tmp = obj;
  }
  return tmp;
};