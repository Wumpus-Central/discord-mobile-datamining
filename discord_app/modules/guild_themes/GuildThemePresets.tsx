// === Module 4296: set ===

// Module 4296 (set)
import sum from "sum" /* 505 */;
import nDefault from "n" /* 689 */;
import items21 from "items" /* 4297 */;
import set from "set" /* 2 */;

const ThemeTypes = sum.ThemeTypes;
let obj = { TWILIGHT: 1, PLUM: 2, FIRE: 3, GOLD_DUST: 4, MOSS: 5, JADE: 6, OBSIDIAN: 7, OCEAN: 8, DENIM: 9, BLURPLE: 10 };
let items = [, , , , , , , , , ];
({ TWILIGHT: arr[0], DENIM: arr[1], OCEAN: arr[2], BLURPLE: arr[3], OBSIDIAN: arr[4], PLUM: arr[5], FIRE: arr[6], GOLD_DUST: arr[7], MOSS: arr[8], JADE: arr[9] } = obj);
obj = { id: obj.TWILIGHT, darkAppearance: { color: "#69426A", angle: 0, baseMix: 100, colors: items1 }, lightAppearance: { color: "#FA9EFF", angle: 0, baseMix: 100, colors: items2 } };
items1 = [{ hex: "#69426A", stop: 0 }, { hex: "#111731", stop: 100 }];
items2 = [{ hex: "#FA9EFF", stop: 0 }, { hex: "#5A7EFE", stop: 100 }];
obj = { id: obj.DENIM, darkAppearance: { color: "#5359AD", angle: 0, baseMix: 100, colors: items3 }, lightAppearance: { color: "#DBDBFF", angle: 0, baseMix: 100, colors: items4 } };
items3 = [{ hex: "#5359AD", stop: 0 }, { hex: "#121238", stop: 100 }];
items4 = [{ hex: "#DBDBFF", stop: 0 }, { hex: "#6060FF", stop: 100 }];
const items5 = [{ hex: "#245B92", stop: 0 }, { hex: "#141D40", stop: 100 }];
const items6 = [{ hex: "#9ADBF7", stop: 0 }, { hex: "#2D3CCA", stop: 100 }];
const items7 = [{ hex: "#533D9E", stop: 0 }, { hex: "#1A1035", stop: 100 }];
const items8 = [{ hex: "#C3BFFF", stop: 0 }, { hex: "#816BDC", stop: 100 }];
const items9 = [{ hex: "#5E4C85", stop: 0 }, { hex: "#1E1740", stop: 100 }];
const items10 = [{ hex: "#B59DF2", stop: 0 }, { hex: "#8F89D2", stop: 100 }];
const items11 = [{ hex: "#8A3F7F", stop: 0 }, { hex: "#2C0D25", stop: 100 }];
const items12 = [{ hex: "#E893FF", stop: 0 }, { hex: "#FFADDC", stop: 100 }];
const items13 = [{ hex: "#9B2C2C", stop: 0 }, { hex: "#2A0C0C", stop: 100 }];
const items14 = [{ hex: "#FFEBCA", stop: 0 }, { hex: "#FF8989", stop: 100 }];
const items15 = [{ hex: "#6C523D", stop: 0 }, { hex: "#241912", stop: 100 }];
const items16 = [{ hex: "#FFE7DA", stop: 0 }, { hex: "#FFD89B", stop: 100 }];
const items17 = [{ hex: "#58694E", stop: 0 }, { hex: "#222A1C", stop: 100 }];
const items18 = [{ hex: "#B7D19F", stop: 0 }, { hex: "#B1DCA4", stop: 100 }];
const items19 = [{ hex: "#297071", stop: 0 }, { hex: "#18203F", stop: 100 }];
const items20 = [{ hex: "#C5F0D2", stop: 0 }, { hex: "#60ADB2", stop: 100 }];
let closure_4 = { [obj.TWILIGHT]: obj, [obj.DENIM]: obj, [obj.OCEAN]: { id: obj.OCEAN, darkAppearance: { color: "#245B92", angle: 0, baseMix: 100, colors: items5 }, lightAppearance: { color: "#9ADBF7", angle: 0, baseMix: 100, colors: items6 } }, [obj.BLURPLE]: { id: obj.BLURPLE, darkAppearance: { color: "#533D9E", angle: 0, baseMix: 100, colors: items7 }, lightAppearance: { color: "#C3BFFF", angle: 0, baseMix: 100, colors: items8 } }, [obj.OBSIDIAN]: { id: obj.OBSIDIAN, darkAppearance: { color: "#5E4C85", angle: 0, baseMix: 100, colors: items9 }, lightAppearance: { color: "#B59DF2", angle: 0, baseMix: 100, colors: items10 } }, [obj.PLUM]: { id: obj.PLUM, darkAppearance: { color: "#8A3F7F", angle: 0, baseMix: 100, colors: items11 }, lightAppearance: { color: "#E893FF", angle: 0, baseMix: 100, colors: items12 } }, [obj.FIRE]: { id: obj.FIRE, darkAppearance: { color: "#9B2C2C", angle: 0, baseMix: 50, colors: items13 }, lightAppearance: { color: "#FFEBCA", angle: 0, baseMix: 50, colors: items14 } }, [obj.GOLD_DUST]: { id: obj.GOLD_DUST, darkAppearance: { color: "#6C523D", angle: 0, baseMix: 50, colors: items15 }, lightAppearance: { color: "#FFE7DA", angle: 0, baseMix: 50, colors: items16 } }, [obj.MOSS]: { id: obj.MOSS, darkAppearance: { color: "#58694E", angle: 0, baseMix: 50, colors: items17 }, lightAppearance: { color: "#B7D19F", angle: 0, baseMix: 50, colors: items18 } }, [obj.JADE]: { id: obj.JADE, darkAppearance: { color: "#297071", angle: 0, baseMix: 50, colors: items19 }, lightAppearance: { color: "#C5F0D2", angle: 0, baseMix: 50, colors: items20 } } };
let set = new Set(Object.values(obj));
let mapped = items.map((arg0) => dependencyMap[arg0]);
let result = set.fileFinishedImporting("modules/guild_themes/GuildThemePresets.tsx");

export const GUILD_THEME_PRESET_IDS = obj;
export const GUILD_THEME_DEFAULT_BASE_MIX = 74;
export const GUILD_THEME_DEFAULT_COLOR = "#5865F2";
export const GUILD_THEME_MIN_TONE = 15;
export const GUILD_THEME_MAX_TONE = 75;
export const GUILD_THEME_CUSTOM_SATURATION = 0.4;
export const GUILD_THEME_TONE_TRIM = 40;
export const GUILD_THEME_PRESETS = mapped;
export const getGuildThemePreset = function getGuildThemePreset(presetId) {
  let tmp = null;
  if (null != presetId) {
    tmp = null;
    if (set.has(presetId)) {
      tmp = dependencyMap[presetId];
    }
  }
  return tmp;
};
export const getDefaultGuildThemePresetSettings = function getDefaultGuildThemePresetSettings() {
  return { presetId: mapped[0].id, customUserThemeSettings: "r" };
};
export const getGuildThemePresetAppearance = function getGuildThemePresetAppearance(preset, arg1) {
  return arg1 === ThemeTypes.LIGHT ? preset.lightAppearance : preset.darkAppearance;
};
export const getLinearGradientForGuildThemePreset = function getLinearGradientForGuildThemePreset(lightAppearance) {
  const tmp = arg1 === ThemeTypes.LIGHT ? lightAppearance.lightAppearance : lightAppearance.darkAppearance;
  const colors = tmp.colors;
  mapped = colors.map((hex) => "" + hex.hex + " " + hex.stop + "%");
  return "linear-gradient(" + tmp.angle + "deg, " + mapped.join(", ") + ")";
};
export const getSingleColorGuildThemeGradientColors = function getSingleColorGuildThemeGradientColors(first, theme) {
  const tmp2 = theme === ThemeTypes.LIGHT ? { minTone: 55, maxTone: 75 } : { minTone: 15, maxTone: 35 };
  const minTone = tmp2.minTone;
  const obj = nDefault(first);
  const result = obj.set("hsl.l", (minTone + (Math.max(15, Math.min(75, 100 * obj.get("hsl.l"))) - 15) / 60 * (tmp2.maxTone - minTone)) / 100);
  const hexResult = result.hex();
  const obj3 = nDefault(hexResult);
  let num = -0.2;
  if (theme === ThemeTypes.LIGHT) {
    num = 0.2;
  }
  const items = [hexResult, ];
  const result1 = obj3.set("hsl.l", Math.max(0, Math.min(1, obj3.get("hsl.l") + num)));
  items[1] = result1.hex();
  return items;
};
export const getRandomSingleColorGuildTheme = function getRandomSingleColorGuildTheme() {
  const diff = items21.COLOR_PALETTE.length - 1;
  const tmp2 = items21.COLOR_PALETTE[Math.floor(Math, Math.random(Math) * (diff + 1))];
  const obj = { color: null, baseMix: null };
  const bound = Math.min(45, Math.round(100 * nDefault(tmp2).get("hsl.l")));
  const obj2 = nDefault(tmp2);
  const result = nDefault(tmp2).set("hsl.l", Math.max(0.15, Math.min(0.75, bound / 100)));
  const obj3 = nDefault(tmp2);
  const hexResult = result.hex();
  const result1 = nDefault(result.hex()).set("hsl.s", 0.4);
  obj[0] = result1.hex();
  obj[1] = Math.floor(Math.random() * 11) + 70;
  return obj;
};
export const getSaturationPinnedColor = function getSaturationPinnedColor(arg0) {
  const result = nDefault(arg0).set("hsl.s", 0.4);
  return result.hex();
};
export const getToneAdjustedColor = function getToneAdjustedColor(arg0, arg1) {
  const result = nDefault(arg0).set("hsl.l", Math.max(0.15, Math.min(0.75, arg1 / 100)));
  return result.hex();
};
export const getGuildThemeToneRange = function getGuildThemeToneRange(arg0) {
  return arg0 === ThemeTypes.LIGHT ? { minTone: 55, maxTone: 75 } : { minTone: 15, maxTone: 35 };
};
export const getThemeAdjustedToneColor = function getThemeAdjustedToneColor(arg0, arg1) {
  const tmp = arg1 === ThemeTypes.LIGHT ? { minTone: 55, maxTone: 75 } : { minTone: 15, maxTone: 35 };
  const minTone = tmp.minTone;
  const obj = nDefault(arg0);
  const result = obj.set("hsl.l", (minTone + (Math.max(15, Math.min(75, 100 * obj.get("hsl.l"))) - 15) / 60 * (tmp.maxTone - minTone)) / 100);
  return result.hex();
};
export const getHueAdjustedColor = function getHueAdjustedColor(arg0, arg1) {
  const result = nDefault(arg0).set("hsl.h", arg1);
  return result.hex();
};