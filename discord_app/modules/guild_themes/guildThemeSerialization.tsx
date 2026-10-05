// discord_app/modules/guild_themes/guildThemeSerialization.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_themes/guildThemeSerialization.tsx");

export const cloneGuildThemeSettings = function cloneGuildThemeSettings(themeSettings) {
  let customUserThemeSettings;
  let items;
  let items1;
  let tmp3;
  let tmp2 = null;
  if (null != themeSettings) {
    const obj = { presetId: null, customUserThemeSettings: tmp3 };
    ({ presetId: obj.presetId, customUserThemeSettings } = themeSettings);
    tmp3 = undefined;
    if (null != customUserThemeSettings) {
      const obj3 = { colors: items, gradientColorStops: items1, gradientAngle: null, baseMix: null };
      items = [];
      HermesBuiltin.arraySpread(items, customUserThemeSettings.colors, 0);
      let gradientColorStops = customUserThemeSettings.gradientColorStops;
      if (gradientColorStops == null) {
        gradientColorStops = [];
      }
      items1 = [];
      HermesBuiltin.arraySpread(items1, gradientColorStops, 0);
      ({ gradientAngle: obj2.gradientAngle, baseMix: obj2.baseMix } = customUserThemeSettings);
      tmp3 = obj3;
    }
    tmp2 = obj;
  }
  return tmp2;
};
export const cloneGuildTheme = function cloneGuildTheme(guildTheme) {
  let customUserThemeSettings;
  let items;
  let items1;
  let themeSettings;
  let tmp3;
  let tmp4;
  let tmp2 = null;
  if (null != guildTheme) {
    const obj = { enabled: null, themeSettings: tmp3 };
    ({ enabled: obj.enabled, themeSettings } = guildTheme);
    tmp3 = null;
    if (null != themeSettings) {
      const obj5 = { presetId: null, customUserThemeSettings: tmp4 };
      ({ presetId: obj2.presetId, customUserThemeSettings } = themeSettings);
      tmp4 = undefined;
      if (null != customUserThemeSettings) {
        const obj6 = { colors: items, gradientColorStops: items1, gradientAngle: null, baseMix: null };
        items = [];
        HermesBuiltin.arraySpread(items, customUserThemeSettings.colors, 0);
        let gradientColorStops = customUserThemeSettings.gradientColorStops;
        if (gradientColorStops == null) {
          gradientColorStops = [];
        }
        items1 = [];
        HermesBuiltin.arraySpread(items1, gradientColorStops, 0);
        ({ gradientAngle: obj3.gradientAngle, baseMix: obj3.baseMix } = customUserThemeSettings);
        tmp4 = obj6;
      }
      tmp3 = obj5;
    }
    tmp2 = obj;
  }
  return tmp2;
};
export const toServerGuildThemeSettings = function toServerGuildThemeSettings(themeSettings) {
  let items;
  let items2;
  let num3;
  let num4;
  let obj;
  let tmp3;
  if (null == themeSettings) {
    obj = { preset_id: null, custom_user_theme_settings: null };
  } else {
    let presetId = themeSettings.presetId;
    if (presetId == null) {
      presetId = null;
    }
    obj = { preset_id: presetId, custom_user_theme_settings: tmp3 };
    const customUserThemeSettings = themeSettings.customUserThemeSettings;
    tmp3 = null;
    if (null != customUserThemeSettings) {
      const obj2 = { colors: items, gradient_color_stops: items2, gradient_angle: num3, base_mix: num4 };
      items = [];
      HermesBuiltin.arraySpread(items, customUserThemeSettings.colors, 0);
      if (null != customUserThemeSettings.gradientColorStops) {
        const items1 = [];
        HermesBuiltin.arraySpread(items1, customUserThemeSettings.gradientColorStops, 0);
        items2 = items1;
      } else {
        items2 = [];
      }
      num3 = customUserThemeSettings.gradientAngle;
      if (num3 == null) {
        num3 = 0;
      }
      num4 = customUserThemeSettings.baseMix;
      if (num4 == null) {
        num4 = 0;
      }
      tmp3 = obj2;
    }
  }
  return obj;
};
export const fromServerGuildThemeSettings = function fromServerGuildThemeSettings(preset_id) {
  let gradient_color_stops;
  let num;
  let num2;
  let tmp3;
  let tmp = null;
  if (null != preset_id) {
    if (null != preset_id.preset_id) {
      preset_id = undefined;
      if (null != preset_id.preset_id) {
        preset_id = preset_id.preset_id;
      }
      const custom_user_theme_settings = preset_id.custom_user_theme_settings;
      const obj = { presetId: preset_id, customUserThemeSettings: tmp3 };
      tmp3 = undefined;
      if (null != custom_user_theme_settings) {
        const obj3 = { colors: null, gradientColorStops: gradient_color_stops, gradientAngle: num, baseMix: num2 };
        ({ colors: obj2.colors, gradient_color_stops } = custom_user_theme_settings);
        if (gradient_color_stops == null) {
          gradient_color_stops = [];
        }
        num = custom_user_theme_settings.gradient_angle;
        if (num == null) {
          num = 0;
        }
        num2 = custom_user_theme_settings.base_mix;
        if (num2 == null) {
          num2 = 0;
        }
        tmp3 = obj3;
      }
      tmp = obj;
    } else {
      tmp = null;
    }
  }
  return tmp;
};
export const fromServerGuildTheme = function fromServerGuildTheme(theme) {
  let gradient_color_stops;
  let num;
  let num2;
  let tmp2;
  let tmp4;
  let tmp = null;
  if (null != theme) {
    const obj = { enabled: theme.enabled, themeSettings: tmp2 };
    tmp2 = null;
    if (null != theme) {
      if (null != theme.preset_id) {
        let preset_id;
        if (null != theme.preset_id) {
          preset_id = theme.preset_id;
        }
        const custom_user_theme_settings = theme.custom_user_theme_settings;
        const obj2 = { presetId: preset_id, customUserThemeSettings: tmp4 };
        tmp4 = undefined;
        if (null != custom_user_theme_settings) {
          const obj5 = { colors: null, gradientColorStops: gradient_color_stops, gradientAngle: num, baseMix: num2 };
          ({ colors: obj3.colors, gradient_color_stops } = custom_user_theme_settings);
          if (gradient_color_stops == null) {
            gradient_color_stops = [];
          }
          num = custom_user_theme_settings.gradient_angle;
          if (num == null) {
            num = 0;
          }
          num2 = custom_user_theme_settings.base_mix;
          if (num2 == null) {
            num2 = 0;
          }
          tmp4 = obj5;
        }
        tmp2 = obj2;
      } else {
        tmp2 = null;
      }
    }
    tmp = obj;
  }
  return tmp;
};
