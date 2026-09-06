// discord_app/modules/client_themes/ClientThemesConstants.tsx
import Constants from "../../../discord_common/js/shared/Constants.tsx";
import util from "../../intl/index.native.tsx";
import preloaded_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import ClientThemesTypes from "ClientThemesTypes.tsx";
import apply from "../../../_runtime/metro/00012__.js";
import size from "../../../_runtime/metro/00002__.js";

const ThemeTypes = Constants.ThemeTypes;
const items = [, ,];
({ DARK: arr[0], DARKER: arr[1], MIDNIGHT: arr[2] } = ThemeTypes);
let obj = {
  type: ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: preloaded_user_settings.BackgroundGradientPresetId.MINT_APPLE,
  theme: ThemeTypes.LIGHT,
  colors: null,
  angle: 180,
  getName() {
    const intl = util.intl;
    return intl.string(util.t.kCdS4d);
  },
  midpointPercentage: 27,
};
const items1 = [
  { token: "BG_GRADIENT_MINT_APPLE_1", stop: 6.15 },
  { token: "BG_GRADIENT_MINT_APPLE_2", stop: 48.7 },
  { token: "BG_GRADIENT_MINT_APPLE_3", stop: 93.07 },
];
obj.colors = items1;
const items2 = [obj, , , , , , ,];
obj = {
  type: ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: preloaded_user_settings.BackgroundGradientPresetId.CITRUS_SHERBERT,
  theme: ThemeTypes.LIGHT,
  colors: null,
  angle: 180,
  getName() {
    const intl = util.intl;
    return intl.string(util.t.S4UnEz);
  },
  midpointPercentage: 27,
};
const items3 = [
  { token: "BG_GRADIENT_CITRUS_SHERBERT_1", stop: 31.1 },
  { token: "BG_GRADIENT_CITRUS_SHERBERT_2", stop: 67.09 },
];
obj.colors = items3;
items2[1] = obj;
obj = {
  type: ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: preloaded_user_settings.BackgroundGradientPresetId.RETRO_RAINCLOUD,
  theme: ThemeTypes.LIGHT,
  colors: null,
  angle: 148.71,
  getName() {
    const intl = util.intl;
    return intl.string(util.t["48xnKc"]);
  },
  midpointPercentage: 50,
};
const items4 = [
  { token: "BG_GRADIENT_RETRO_RAINCLOUD_1", stop: 5.64 },
  { token: "BG_GRADIENT_RETRO_RAINCLOUD_2", stop: 26.38 },
  { token: "BG_GRADIENT_RETRO_RAINCLOUD_2", stop: 49.92 },
  { token: "BG_GRADIENT_RETRO_RAINCLOUD_1", stop: 73.12 },
];
obj.colors = items4;
items2[2] = obj;
const obj1 = {
  type: ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: preloaded_user_settings.BackgroundGradientPresetId.HANAMI,
  theme: ThemeTypes.LIGHT,
  colors: null,
  angle: 38.08,
  getName() {
    const intl = util.intl;
    return intl.string(util.t.G4HsBJ);
  },
  midpointPercentage: 50,
};
const items5 = [
  { token: "BG_GRADIENT_HANAMI_1", stop: 3.56 },
  { token: "BG_GRADIENT_HANAMI_2", stop: 35.49 },
  { token: "BG_GRADIENT_HANAMI_3", stop: 68.78 },
];
obj1.colors = items5;
items2[3] = obj1;
const obj2 = {
  type: ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: preloaded_user_settings.BackgroundGradientPresetId.SUNRISE,
  theme: ThemeTypes.LIGHT,
  colors: null,
  angle: 154.19,
  getName() {
    const intl = util.intl;
    return intl.string(util.t.NAt885);
  },
  midpointPercentage: 50,
};
const items6 = [
  { token: "BG_GRADIENT_SUNRISE_1", stop: 8.62 },
  { token: "BG_GRADIENT_SUNRISE_2", stop: 48.07 },
  { token: "BG_GRADIENT_SUNRISE_3", stop: 76.04 },
];
obj2.colors = items6;
items2[4] = obj2;
const obj3 = {
  type: ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: preloaded_user_settings.BackgroundGradientPresetId.COTTON_CANDY,
  theme: ThemeTypes.LIGHT,
  colors: null,
  angle: 180.14,
  getName() {
    const intl = util.intl;
    return intl.string(util.t.godtzA);
  },
  midpointPercentage: 50,
};
const items7 = [
  { token: "BG_GRADIENT_COTTON_CANDY_1", stop: 8.5 },
  { token: "BG_GRADIENT_COTTON_CANDY_2", stop: 94.28 },
];
obj3.colors = items7;
items2[5] = obj3;
const obj4 = {
  type: ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: preloaded_user_settings.BackgroundGradientPresetId.LOFI_VIBES,
  theme: ThemeTypes.LIGHT,
  colors: null,
  angle: 179.52,
  getName() {
    const intl = util.intl;
    return intl.string(util.t.hlS2xq);
  },
  midpointPercentage: 27,
};
const items8 = [
  { token: "BG_GRADIENT_LOFI_VIBES_1", stop: 7.08 },
  { token: "BG_GRADIENT_LOFI_VIBES_2", stop: 34.94 },
  { token: "BG_GRADIENT_LOFI_VIBES_3", stop: 65.12 },
  { token: "BG_GRADIENT_LOFI_VIBES_4", stop: 96.23 },
];
obj4.colors = items8;
items2[6] = obj4;
const obj5 = {
  type: ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: preloaded_user_settings.BackgroundGradientPresetId.DESERT_KHAKI,
  theme: ThemeTypes.LIGHT,
  colors: null,
  angle: 38.99,
  getName() {
    const intl = util.intl;
    return intl.string(util.t.abMn9y);
  },
  midpointPercentage: 50,
};
const items9 = [
  { token: "BG_GRADIENT_DESERT_KHAKI_1", stop: 12.92 },
  { token: "BG_GRADIENT_DESERT_KHAKI_2", stop: 32.92 },
  { token: "BG_GRADIENT_DESERT_KHAKI_3", stop: 52.11 },
];
obj5.colors = items9;
items2[7] = obj5;
const DARKER = ThemeTypes.DARKER;
const obj6 = {
  type: ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: preloaded_user_settings.BackgroundGradientPresetId.SUNSET,
  theme: DARKER,
  colors: null,
  angle: 141.68,
  getName() {
    const intl = util.intl;
    return intl.string(util.t.JKDra4);
  },
  midpointPercentage: 35,
};
const items10 = [
  { token: "BG_GRADIENT_SUNSET_1", stop: 27.57 },
  { token: "BG_GRADIENT_SUNSET_2", stop: 71.25 },
];
obj6.colors = items10;
const items11 = [obj6, , , , , , , , , , , ,];
const obj7 = {
  type: ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: preloaded_user_settings.BackgroundGradientPresetId.CHROMA_GLOW,
  theme: DARKER,
  colors: null,
  angle: 128.92,
  getName() {
    const intl = util.intl;
    return intl.string(util.t.kwc8Us);
  },
  midpointPercentage: 15,
};
const items12 = [
  { token: "BG_GRADIENT_CHROMA_GLOW_1", stop: 3.94 },
  { token: "BG_GRADIENT_CHROMA_GLOW_2", stop: 26.1 },
  { token: "BG_GRADIENT_CHROMA_GLOW_3", stop: 39.82 },
  { token: "BG_GRADIENT_CHROMA_GLOW_4", stop: 56.89 },
  { token: "BG_GRADIENT_CHROMA_GLOW_5", stop: 76.45 },
];
obj7.colors = items12;
items11[1] = obj7;
const obj8 = {
  type: ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: preloaded_user_settings.BackgroundGradientPresetId.FOREST,
  theme: DARKER,
  colors: null,
  angle: 162.27,
  getName() {
    const intl = util.intl;
    return intl.string(util.t["TeA/j8"]);
  },
  midpointPercentage: 50,
};
const items13 = [
  { token: "BG_GRADIENT_FOREST_1", stop: 11.2 },
  { token: "BG_GRADIENT_FOREST_2", stop: 29.93 },
  { token: "BG_GRADIENT_FOREST_3", stop: 48.64 },
  { token: "BG_GRADIENT_FOREST_4", stop: 67.85 },
  { token: "BG_GRADIENT_FOREST_5", stop: 83.54 },
];
obj8.colors = items13;
items11[2] = obj8;
const obj9 = {
  type: ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: preloaded_user_settings.BackgroundGradientPresetId.CRIMSON_MOON,
  theme: DARKER,
  colors: null,
  angle: 64.92,
  getName() {
    const intl = util.intl;
    return intl.string(util.t.blIucj);
  },
  midpointPercentage: 30,
};
const items14 = [
  { token: "BG_GRADIENT_CRIMSON_MOON_1", stop: 16.17 },
  { token: "BG_GRADIENT_CRIMSON_MOON_2", stop: 72 },
];
obj9.colors = items14;
items11[3] = obj9;
const obj10 = {
  type: ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: preloaded_user_settings.BackgroundGradientPresetId.MIDNIGHT_BLURPLE,
  theme: DARKER,
  colors: null,
  angle: 48.17,
  getName() {
    const intl = util.intl;
    return intl.string(util.t.O1yOXG);
  },
  midpointPercentage: 24,
};
const items15 = [
  { token: "BG_GRADIENT_MIDNIGHT_BLURPLE_1", stop: 11.21 },
  { token: "BG_GRADIENT_MIDNIGHT_BLURPLE_2", stop: 61.92 },
];
obj10.colors = items15;
items11[4] = obj10;
const obj11 = {
  type: ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: preloaded_user_settings.BackgroundGradientPresetId.MARS,
  theme: DARKER,
  colors: null,
  angle: 170.82,
  getName() {
    const intl = util.intl;
    return intl.string(util.t["1swi9s"]);
  },
  midpointPercentage: 50,
};
const items16 = [
  { token: "BG_GRADIENT_MARS_1", stop: 14.61 },
  { token: "BG_GRADIENT_MARS_2", stop: 74.62 },
];
obj11.colors = items16;
items11[5] = obj11;
const obj12 = {
  type: ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: preloaded_user_settings.BackgroundGradientPresetId.DUSK,
  theme: DARKER,
  colors: null,
  angle: 180,
  getName() {
    const intl = util.intl;
    return intl.string(util.t.So2Wuh);
  },
  midpointPercentage: 50,
};
const items17 = [
  { token: "BG_GRADIENT_DUSK_1", stop: 12.84 },
  { token: "BG_GRADIENT_DUSK_2", stop: 85.99 },
];
obj12.colors = items17;
items11[6] = obj12;
const obj13 = {
  type: ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: preloaded_user_settings.BackgroundGradientPresetId.UNDER_THE_SEA,
  theme: DARKER,
  colors: null,
  angle: 179.14,
  getName() {
    const intl = util.intl;
    return intl.string(util.t.a22o48);
  },
  midpointPercentage: 50,
};
const items18 = [
  { token: "BG_GRADIENT_UNDER_THE_SEA_1", stop: 1.91 },
  { token: "BG_GRADIENT_UNDER_THE_SEA_2", stop: 48.99 },
  { token: "BG_GRADIENT_UNDER_THE_SEA_3", stop: 96.35 },
];
obj13.colors = items18;
items11[7] = obj13;
const obj14 = {
  type: ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: preloaded_user_settings.BackgroundGradientPresetId.RETRO_STORM,
  theme: DARKER,
  colors: null,
  angle: 148.71,
  getName() {
    const intl = util.intl;
    return intl.string(util.t.Bf294R);
  },
  midpointPercentage: 61,
};
const items19 = [
  { token: "BG_GRADIENT_RETRO_STORM_1", stop: 5.64 },
  { token: "BG_GRADIENT_RETRO_STORM_2", stop: 26.38 },
  { token: "BG_GRADIENT_RETRO_STORM_2", stop: 49.92 },
  { token: "BG_GRADIENT_RETRO_STORM_1", stop: 73.12 },
];
obj14.colors = items19;
items11[8] = obj14;
const obj15 = {
  type: ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: preloaded_user_settings.BackgroundGradientPresetId.NEON_NIGHTS,
  theme: DARKER,
  colors: null,
  angle: 180,
  getName() {
    const intl = util.intl;
    return intl.string(util.t["p+XCta"]);
  },
  midpointPercentage: 50,
};
const items20 = [
  { token: "BG_GRADIENT_NEON_NIGHTS_1", stop: 0 },
  { token: "BG_GRADIENT_NEON_NIGHTS_2", stop: 50 },
  { token: "BG_GRADIENT_NEON_NIGHTS_3", stop: 100 },
];
obj15.colors = items20;
items11[9] = obj15;
const obj16 = {
  type: ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: preloaded_user_settings.BackgroundGradientPresetId.STRAWBERRY_LEMONADE,
  theme: DARKER,
  colors: null,
  angle: 161.03,
  getName() {
    const intl = util.intl;
    return intl.string(util.t["d5Ar+j"]);
  },
  midpointPercentage: 32,
};
const items21 = [
  { token: "BG_GRADIENT_STRAWBERRY_LEMONADE_1", stop: 18.79 },
  { token: "BG_GRADIENT_STRAWBERRY_LEMONADE_2", stop: 49.76 },
  { token: "BG_GRADIENT_STRAWBERRY_LEMONADE_3", stop: 80.72 },
];
obj16.colors = items21;
items11[10] = obj16;
const obj17 = {
  type: ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: preloaded_user_settings.BackgroundGradientPresetId.AURORA,
  theme: DARKER,
  colors: null,
  angle: 239.16,
  getName() {
    const intl = util.intl;
    return intl.string(util.t.Je1FWC);
  },
  midpointPercentage: 34,
};
const items22 = [
  { token: "BG_GRADIENT_AURORA_1", stop: 10.39 },
  { token: "BG_GRADIENT_AURORA_2", stop: 26.87 },
  { token: "BG_GRADIENT_AURORA_3", stop: 48.31 },
  { token: "BG_GRADIENT_AURORA_4", stop: 64.98 },
  { token: "BG_GRADIENT_AURORA_5", stop: 92.5 },
];
obj17.colors = items22;
items11[11] = obj17;
const obj18 = {
  type: ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: preloaded_user_settings.BackgroundGradientPresetId.SEPIA,
  theme: DARKER,
  colors: null,
  angle: 69.98,
  getName() {
    const intl = util.intl;
    return intl.string(util.t["Z+Un40"]);
  },
  midpointPercentage: 50,
};
const items23 = [
  { token: "BG_GRADIENT_SEPIA_1", stop: 14.14 },
  { token: "BG_GRADIENT_SEPIA_2", stop: 60.35 },
];
obj18.colors = items23;
items11[12] = obj18;
const obj19 = {
  type: ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: preloaded_user_settings.BackgroundGradientPresetId.BLURPLE_TWILIGHT,
  theme: DARKER,
  colors: null,
  angle: 47.61,
  getName() {
    const intl = util.intl;
    return intl.string(util.t.Mfoe3p);
  },
  midpointPercentage: 50,
};
const items24 = [
  { token: "BG_GRADIENT_BLURPLE_TWILIGHT_1", stop: 11.18 },
  { token: "BG_GRADIENT_BLURPLE_TWILIGHT_2", stop: 64.54 },
];
obj19.colors = items24;
const obj20 = {
  type: ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: preloaded_user_settings.BackgroundGradientPresetId.EASTER_EGG,
  theme: ThemeTypes.LIGHT,
  colors: null,
  angle: 180,
  getName() {
    const intl = util.intl;
    return intl.string(util.t.mFinbb);
  },
  midpointPercentage: 50,
};
const items25 = [
  { token: "BG_GRADIENT_EASTER_EGG_1", stop: 4 },
  { token: "BG_GRADIENT_EASTER_EGG_2", stop: 96 },
];
obj20.colors = items25;
const items26 = [...items11, obj19, obj20];
const items27 = [obj19];
items27[HermesBuiltin.arraySpread(items2, HermesBuiltin.arraySpread(items11, 1))] = obj20;
const items28 = [
  {
    type: ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME,
    theme: DARKER,
    getName() {
      const intl = util.intl;
      return intl.string(util.t.b8Cei3);
    },
  },
  ,
  ,
];
const obj21 = {
  type: ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: DARKER,
  getName() {
    const intl = util.intl;
    return intl.string(util.t.b8Cei3);
  },
};
items28[1] = {
  type: ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: ThemeTypes.LIGHT,
  getName() {
    const intl = util.intl;
    return intl.string(util.t.K2sFfo);
  },
};
const obj22 = {
  type: ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: ThemeTypes.LIGHT,
  getName() {
    const intl = util.intl;
    return intl.string(util.t.K2sFfo);
  },
};
items28[2] = {
  type: ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: ThemeTypes.MIDNIGHT,
  getName() {
    const intl = util.intl;
    return intl.string(util.t.pQwSpQ);
  },
};
const obj23 = {
  type: ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: ThemeTypes.MIDNIGHT,
  getName() {
    const intl = util.intl;
    return intl.string(util.t.pQwSpQ);
  },
};
items28[3] = {
  type: ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: "system",
  getName() {
    const intl = util.intl;
    return intl.string(util.t.zlvNOj);
  },
};
const obj24 = {
  type: ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: "system",
  getName() {
    const intl = util.intl;
    return intl.string(util.t.zlvNOj);
  },
};
const items29 = [
  {
    type: ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME,
    theme: ThemeTypes.LIGHT,
    getName() {
      const intl = util.intl;
      return intl.string(util.t.K2sFfo);
    },
  },
  ,
  ,
  ,
];
const obj25 = {
  type: ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: ThemeTypes.LIGHT,
  getName() {
    const intl = util.intl;
    return intl.string(util.t.K2sFfo);
  },
};
items29[1] = {
  type: ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: ThemeTypes.DARK,
  getName() {
    const intl = util.intl;
    return intl.string(util.t.SMPT1k);
  },
};
const obj26 = {
  type: ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: ThemeTypes.DARK,
  getName() {
    const intl = util.intl;
    return intl.string(util.t.SMPT1k);
  },
};
items29[2] = {
  type: ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: ThemeTypes.DARKER,
  getName() {
    const intl = util.intl;
    return intl.string(util.t.b8Cei3);
  },
};
const obj27 = {
  type: ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: ThemeTypes.DARKER,
  getName() {
    const intl = util.intl;
    return intl.string(util.t.b8Cei3);
  },
};
items29[3] = {
  type: ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: ThemeTypes.MIDNIGHT,
  getName() {
    const intl = util.intl;
    return intl.string(util.t.Do4ZJx);
  },
};
const obj28 = {
  type: ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: ThemeTypes.MIDNIGHT,
  getName() {
    const intl = util.intl;
    return intl.string(util.t.Do4ZJx);
  },
};
items29[4] = {
  type: ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: "system",
  getName() {
    const intl = util.intl;
    return intl.string(util.t.zlvNOj);
  },
};
const obj29 = {
  type: ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: "system",
  getName() {
    const intl = util.intl;
    return intl.string(util.t.zlvNOj);
  },
};
const result = size.fileFinishedImporting("modules/client_themes/ClientThemesConstants.tsx");

export const BASIC_DARK_THEMES = items;
export const isSelectableGradientPreset = function isSelectableGradientPreset(id) {
  return id.id !== preloaded_user_settings.BackgroundGradientPresetId.EASTER_EGG;
};
export const LIGHT_BACKGROUND_GRADIENT_PRESETS = items2;
export const DARK_BACKGROUND_GRADIENT_PRESETS = items11;
export const BACKGROUND_GRADIENT_PRESETS = items26;
export const BACKGROUND_GRADIENT_PRESETS_MOBILE = items27;
export const StandardBackgroundThemeIndex = { DARK: 0, [0]: "DARK", LIGHT: 1, [1]: "LIGHT", SYSTEM: 2, [2]: "SYSTEM" };
export const LEGACY_STANDARD_BACKGROUND_THEMES = items28;
export const REFRESH_STANDARD_BACKGROUND_THEMES = items29;
export const BACKGROUND_GRADIENT_PRESETS_MAP = apply.keyBy(items26, "id");
export const ThemeIconSizes = { SIZE_48: 48, [48]: "SIZE_48", SIZE_60: 60, [60]: "SIZE_60" };
