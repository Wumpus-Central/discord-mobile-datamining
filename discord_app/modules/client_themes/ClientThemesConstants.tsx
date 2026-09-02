// === Module 1347: ThemeTypes ===

// Module 1347 (ThemeTypes)
import set from "set" /* 2 */;
import sum from "sum" /* 502 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import create from "create" /* 1305 */;
import ClientThemeType from "ClientThemeType" /* 1348 */;
import apply from "apply" /* 12 */;

const ThemeTypes = sum.ThemeTypes;
const items = [, , ];
({ DARK: arr[0], DARKER: arr[1], MIDNIGHT: arr[2] } = ThemeTypes);
let obj = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.MINT_APPLE,
  theme: ThemeTypes.LIGHT,
  colors: items1,
  angle: 180,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.kCdS4d);
  },
  midpointPercentage: 27
};
items1 = [{ token: "BG_GRADIENT_MINT_APPLE_1", stop: 6.15 }, { token: "BG_GRADIENT_MINT_APPLE_2", stop: 48.7 }, { token: "BG_GRADIENT_MINT_APPLE_3", stop: 93.07 }];
const items2 = [obj, , , , , , , ];
obj = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.CITRUS_SHERBERT,
  theme: ThemeTypes.LIGHT,
  colors: items3,
  angle: 180,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.S4UnEz);
  },
  midpointPercentage: 27
};
items3 = [{ token: "BG_GRADIENT_CITRUS_SHERBERT_1", stop: 31.1 }, { token: "BG_GRADIENT_CITRUS_SHERBERT_2", stop: 67.09 }];
items2[1] = obj;
obj = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.RETRO_RAINCLOUD,
  theme: ThemeTypes.LIGHT,
  colors: items4,
  angle: 148.71,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["48xnKc"]);
  },
  midpointPercentage: 50
};
items4 = [{ token: "BG_GRADIENT_RETRO_RAINCLOUD_1", stop: 5.64 }, { token: "BG_GRADIENT_RETRO_RAINCLOUD_2", stop: 26.38 }, { token: "BG_GRADIENT_RETRO_RAINCLOUD_2", stop: 49.92 }, { token: "BG_GRADIENT_RETRO_RAINCLOUD_1", stop: 73.12 }];
items2[2] = obj;
const items5 = [{ token: "BG_GRADIENT_HANAMI_1", stop: 3.56 }, { token: "BG_GRADIENT_HANAMI_2", stop: 35.49 }, { token: "BG_GRADIENT_HANAMI_3", stop: 68.78 }];
items2[3] = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.HANAMI,
  theme: ThemeTypes.LIGHT,
  colors: items5,
  angle: 38.08,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.G4HsBJ);
  },
  midpointPercentage: 50
};
const obj1 = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.HANAMI,
  theme: ThemeTypes.LIGHT,
  colors: items5,
  angle: 38.08,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.G4HsBJ);
  },
  midpointPercentage: 50
};
const items6 = [{ token: "BG_GRADIENT_SUNRISE_1", stop: 8.62 }, { token: "BG_GRADIENT_SUNRISE_2", stop: 48.07 }, { token: "BG_GRADIENT_SUNRISE_3", stop: 76.04 }];
items2[4] = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.SUNRISE,
  theme: ThemeTypes.LIGHT,
  colors: items6,
  angle: 154.19,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.NAt885);
  },
  midpointPercentage: 50
};
const obj2 = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.SUNRISE,
  theme: ThemeTypes.LIGHT,
  colors: items6,
  angle: 154.19,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.NAt885);
  },
  midpointPercentage: 50
};
const items7 = [{ token: "BG_GRADIENT_COTTON_CANDY_1", stop: 8.5 }, { token: "BG_GRADIENT_COTTON_CANDY_2", stop: 94.28 }];
items2[5] = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.COTTON_CANDY,
  theme: ThemeTypes.LIGHT,
  colors: items7,
  angle: 180.14,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.godtzA);
  },
  midpointPercentage: 50
};
const obj3 = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.COTTON_CANDY,
  theme: ThemeTypes.LIGHT,
  colors: items7,
  angle: 180.14,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.godtzA);
  },
  midpointPercentage: 50
};
const items8 = [{ token: "BG_GRADIENT_LOFI_VIBES_1", stop: 7.08 }, { token: "BG_GRADIENT_LOFI_VIBES_2", stop: 34.94 }, { token: "BG_GRADIENT_LOFI_VIBES_3", stop: 65.12 }, { token: "BG_GRADIENT_LOFI_VIBES_4", stop: 96.23 }];
items2[6] = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.LOFI_VIBES,
  theme: ThemeTypes.LIGHT,
  colors: items8,
  angle: 179.52,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.hlS2xq);
  },
  midpointPercentage: 27
};
const obj4 = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.LOFI_VIBES,
  theme: ThemeTypes.LIGHT,
  colors: items8,
  angle: 179.52,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.hlS2xq);
  },
  midpointPercentage: 27
};
const items9 = [{ token: "BG_GRADIENT_DESERT_KHAKI_1", stop: 12.92 }, { token: "BG_GRADIENT_DESERT_KHAKI_2", stop: 32.92 }, { token: "BG_GRADIENT_DESERT_KHAKI_3", stop: 52.11 }];
items2[7] = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.DESERT_KHAKI,
  theme: ThemeTypes.LIGHT,
  colors: items9,
  angle: 38.99,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.abMn9y);
  },
  midpointPercentage: 50
};
const DARKER = ThemeTypes.DARKER;
const obj5 = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.DESERT_KHAKI,
  theme: ThemeTypes.LIGHT,
  colors: items9,
  angle: 38.99,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.abMn9y);
  },
  midpointPercentage: 50
};
const items10 = [{ token: "BG_GRADIENT_SUNSET_1", stop: 27.57 }, { token: "BG_GRADIENT_SUNSET_2", stop: 71.25 }];
const items11 = [
  {
    type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
    id: create.BackgroundGradientPresetId.SUNSET,
    theme: DARKER,
    colors: items10,
    angle: 141.68,
    getName() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.JKDra4);
    },
    midpointPercentage: 35
  },
,
,
,
,
,
,
,
,
,
,
,

];
const obj6 = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.SUNSET,
  theme: DARKER,
  colors: items10,
  angle: 141.68,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.JKDra4);
  },
  midpointPercentage: 35
};
const items12 = [{ token: "BG_GRADIENT_CHROMA_GLOW_1", stop: 3.94 }, { token: "BG_GRADIENT_CHROMA_GLOW_2", stop: 26.1 }, { token: "BG_GRADIENT_CHROMA_GLOW_3", stop: 39.82 }, { token: "BG_GRADIENT_CHROMA_GLOW_4", stop: 56.89 }, { token: "BG_GRADIENT_CHROMA_GLOW_5", stop: 76.45 }];
items11[1] = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.CHROMA_GLOW,
  theme: DARKER,
  colors: items12,
  angle: 128.92,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.kwc8Us);
  },
  midpointPercentage: 15
};
const obj7 = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.CHROMA_GLOW,
  theme: DARKER,
  colors: items12,
  angle: 128.92,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.kwc8Us);
  },
  midpointPercentage: 15
};
const items13 = [{ token: "BG_GRADIENT_FOREST_1", stop: 11.2 }, { token: "BG_GRADIENT_FOREST_2", stop: 29.93 }, { token: "BG_GRADIENT_FOREST_3", stop: 48.64 }, { token: "BG_GRADIENT_FOREST_4", stop: 67.85 }, { token: "BG_GRADIENT_FOREST_5", stop: 83.54 }];
items11[2] = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.FOREST,
  theme: DARKER,
  colors: items13,
  angle: 162.27,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["TeA/j8"]);
  },
  midpointPercentage: 50
};
const obj8 = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.FOREST,
  theme: DARKER,
  colors: items13,
  angle: 162.27,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["TeA/j8"]);
  },
  midpointPercentage: 50
};
const items14 = [{ token: "BG_GRADIENT_CRIMSON_MOON_1", stop: 16.17 }, { token: "BG_GRADIENT_CRIMSON_MOON_2", stop: 72 }];
items11[3] = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.CRIMSON_MOON,
  theme: DARKER,
  colors: items14,
  angle: 64.92,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.blIucj);
  },
  midpointPercentage: 30
};
const obj9 = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.CRIMSON_MOON,
  theme: DARKER,
  colors: items14,
  angle: 64.92,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.blIucj);
  },
  midpointPercentage: 30
};
const items15 = [{ token: "BG_GRADIENT_MIDNIGHT_BLURPLE_1", stop: 11.21 }, { token: "BG_GRADIENT_MIDNIGHT_BLURPLE_2", stop: 61.92 }];
items11[4] = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.MIDNIGHT_BLURPLE,
  theme: DARKER,
  colors: items15,
  angle: 48.17,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.O1yOXG);
  },
  midpointPercentage: 24
};
const obj10 = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.MIDNIGHT_BLURPLE,
  theme: DARKER,
  colors: items15,
  angle: 48.17,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.O1yOXG);
  },
  midpointPercentage: 24
};
const items16 = [{ token: "BG_GRADIENT_MARS_1", stop: 14.61 }, { token: "BG_GRADIENT_MARS_2", stop: 74.62 }];
items11[5] = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.MARS,
  theme: DARKER,
  colors: items16,
  angle: 170.82,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["1swi9s"]);
  },
  midpointPercentage: 50
};
const obj11 = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.MARS,
  theme: DARKER,
  colors: items16,
  angle: 170.82,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["1swi9s"]);
  },
  midpointPercentage: 50
};
const items17 = [{ token: "BG_GRADIENT_DUSK_1", stop: 12.84 }, { token: "BG_GRADIENT_DUSK_2", stop: 85.99 }];
items11[6] = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.DUSK,
  theme: DARKER,
  colors: items17,
  angle: 180,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.So2Wuh);
  },
  midpointPercentage: 50
};
const obj12 = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.DUSK,
  theme: DARKER,
  colors: items17,
  angle: 180,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.So2Wuh);
  },
  midpointPercentage: 50
};
const items18 = [{ token: "BG_GRADIENT_UNDER_THE_SEA_1", stop: 1.91 }, { token: "BG_GRADIENT_UNDER_THE_SEA_2", stop: 48.99 }, { token: "BG_GRADIENT_UNDER_THE_SEA_3", stop: 96.35 }];
items11[7] = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.UNDER_THE_SEA,
  theme: DARKER,
  colors: items18,
  angle: 179.14,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.a22o48);
  },
  midpointPercentage: 50
};
const obj13 = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.UNDER_THE_SEA,
  theme: DARKER,
  colors: items18,
  angle: 179.14,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.a22o48);
  },
  midpointPercentage: 50
};
const items19 = [{ token: "BG_GRADIENT_RETRO_STORM_1", stop: 5.64 }, { token: "BG_GRADIENT_RETRO_STORM_2", stop: 26.38 }, { token: "BG_GRADIENT_RETRO_STORM_2", stop: 49.92 }, { token: "BG_GRADIENT_RETRO_STORM_1", stop: 73.12 }];
items11[8] = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.RETRO_STORM,
  theme: DARKER,
  colors: items19,
  angle: 148.71,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Bf294R);
  },
  midpointPercentage: 61
};
const obj14 = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.RETRO_STORM,
  theme: DARKER,
  colors: items19,
  angle: 148.71,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Bf294R);
  },
  midpointPercentage: 61
};
const items20 = [{ token: "BG_GRADIENT_NEON_NIGHTS_1", stop: 0 }, { token: "BG_GRADIENT_NEON_NIGHTS_2", stop: 50 }, { token: "BG_GRADIENT_NEON_NIGHTS_3", stop: 100 }];
items11[9] = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.NEON_NIGHTS,
  theme: DARKER,
  colors: items20,
  angle: 180,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["p+XCta"]);
  },
  midpointPercentage: 50
};
const obj15 = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.NEON_NIGHTS,
  theme: DARKER,
  colors: items20,
  angle: 180,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["p+XCta"]);
  },
  midpointPercentage: 50
};
const items21 = [{ token: "BG_GRADIENT_STRAWBERRY_LEMONADE_1", stop: 18.79 }, { token: "BG_GRADIENT_STRAWBERRY_LEMONADE_2", stop: 49.76 }, { token: "BG_GRADIENT_STRAWBERRY_LEMONADE_3", stop: 80.72 }];
items11[10] = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.STRAWBERRY_LEMONADE,
  theme: DARKER,
  colors: items21,
  angle: 161.03,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["d5Ar+j"]);
  },
  midpointPercentage: 32
};
const obj16 = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.STRAWBERRY_LEMONADE,
  theme: DARKER,
  colors: items21,
  angle: 161.03,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["d5Ar+j"]);
  },
  midpointPercentage: 32
};
const items22 = [{ token: "BG_GRADIENT_AURORA_1", stop: 10.39 }, { token: "BG_GRADIENT_AURORA_2", stop: 26.87 }, { token: "BG_GRADIENT_AURORA_3", stop: 48.31 }, { token: "BG_GRADIENT_AURORA_4", stop: 64.98 }, { token: "BG_GRADIENT_AURORA_5", stop: 92.5 }];
items11[11] = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.AURORA,
  theme: DARKER,
  colors: items22,
  angle: 239.16,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Je1FWC);
  },
  midpointPercentage: 34
};
const obj17 = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.AURORA,
  theme: DARKER,
  colors: items22,
  angle: 239.16,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Je1FWC);
  },
  midpointPercentage: 34
};
const items23 = [{ token: "BG_GRADIENT_SEPIA_1", stop: 14.14 }, { token: "BG_GRADIENT_SEPIA_2", stop: 60.35 }];
items11[12] = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.SEPIA,
  theme: DARKER,
  colors: items23,
  angle: 69.98,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["Z+Un40"]);
  },
  midpointPercentage: 50
};
const obj19 = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.BLURPLE_TWILIGHT,
  theme: DARKER,
  colors: items24,
  angle: 47.61,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Mfoe3p);
  },
  midpointPercentage: 50
};
items24 = [{ token: "BG_GRADIENT_BLURPLE_TWILIGHT_1", stop: 11.18 }, { token: "BG_GRADIENT_BLURPLE_TWILIGHT_2", stop: 64.54 }];
const obj20 = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.EASTER_EGG,
  theme: ThemeTypes.LIGHT,
  colors: items25,
  angle: 180,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.mFinbb);
  },
  midpointPercentage: 50
};
items25 = [{ token: "BG_GRADIENT_EASTER_EGG_1", stop: 4 }, { token: "BG_GRADIENT_EASTER_EGG_2", stop: 96 }];
const items26 = [...items11, obj19, obj20];
const items27 = [obj19, ];
items27[HermesBuiltin.arraySpread(items2, HermesBuiltin.arraySpread(items11, 1))] = obj20;
const obj18 = {
  type: ClientThemeType.ClientThemeType.BACKGROUND_GRADIENT_PRESET,
  id: create.BackgroundGradientPresetId.SEPIA,
  theme: DARKER,
  colors: items23,
  angle: 69.98,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["Z+Un40"]);
  },
  midpointPercentage: 50
};
const items28 = [
  {
    type: ClientThemeType.ClientThemeType.STANDARD_BACKGROUND_THEME,
    theme: DARKER,
    getName() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.b8Cei3);
    }
  },
,
,

];
const obj21 = {
  type: ClientThemeType.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: DARKER,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.b8Cei3);
  }
};
items28[1] = {
  type: ClientThemeType.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: ThemeTypes.LIGHT,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.K2sFfo);
  }
};
const obj22 = {
  type: ClientThemeType.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: ThemeTypes.LIGHT,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.K2sFfo);
  }
};
items28[2] = {
  type: ClientThemeType.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: ThemeTypes.MIDNIGHT,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.pQwSpQ);
  }
};
const obj23 = {
  type: ClientThemeType.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: ThemeTypes.MIDNIGHT,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.pQwSpQ);
  }
};
items28[3] = {
  type: ClientThemeType.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: "system",
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.zlvNOj);
  }
};
const obj24 = {
  type: ClientThemeType.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: "system",
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.zlvNOj);
  }
};
const items29 = [
  {
    type: ClientThemeType.ClientThemeType.STANDARD_BACKGROUND_THEME,
    theme: ThemeTypes.LIGHT,
    getName() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.K2sFfo);
    }
  },
,
,
,

];
const obj25 = {
  type: ClientThemeType.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: ThemeTypes.LIGHT,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.K2sFfo);
  }
};
items29[1] = {
  type: ClientThemeType.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: ThemeTypes.DARK,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.SMPT1k);
  }
};
const obj26 = {
  type: ClientThemeType.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: ThemeTypes.DARK,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.SMPT1k);
  }
};
items29[2] = {
  type: ClientThemeType.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: ThemeTypes.DARKER,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.b8Cei3);
  }
};
const obj27 = {
  type: ClientThemeType.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: ThemeTypes.DARKER,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.b8Cei3);
  }
};
items29[3] = {
  type: ClientThemeType.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: ThemeTypes.MIDNIGHT,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Do4ZJx);
  }
};
const obj28 = {
  type: ClientThemeType.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: ThemeTypes.MIDNIGHT,
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Do4ZJx);
  }
};
items29[4] = {
  type: ClientThemeType.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: "system",
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.zlvNOj);
  }
};
const obj29 = {
  type: ClientThemeType.ClientThemeType.STANDARD_BACKGROUND_THEME,
  theme: "system",
  getName() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.zlvNOj);
  }
};
const keyByResult = apply.keyBy(items26, "id");
const result = set.fileFinishedImporting("modules/client_themes/ClientThemesConstants.tsx");

export const BASIC_DARK_THEMES = items;
export const isSelectableGradientPreset = function isSelectableGradientPreset(id) {
  return id.id !== create.BackgroundGradientPresetId.EASTER_EGG;
};
export const LIGHT_BACKGROUND_GRADIENT_PRESETS = items2;
export const DARK_BACKGROUND_GRADIENT_PRESETS = items11;
export const BACKGROUND_GRADIENT_PRESETS = items26;
export const BACKGROUND_GRADIENT_PRESETS_MOBILE = items27;
export const StandardBackgroundThemeIndex = { DARK: 0, [0]: "DARK", LIGHT: 1, [1]: "LIGHT", SYSTEM: 2, [2]: "SYSTEM" };
export const LEGACY_STANDARD_BACKGROUND_THEMES = items28;
export const REFRESH_STANDARD_BACKGROUND_THEMES = items29;
export const BACKGROUND_GRADIENT_PRESETS_MAP = keyByResult;
export const ThemeIconSizes = { SIZE_48: 48, [48]: "SIZE_48", SIZE_60: 60, [60]: "SIZE_60" };