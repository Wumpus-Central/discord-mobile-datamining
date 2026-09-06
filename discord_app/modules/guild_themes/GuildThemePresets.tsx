// === Module 4414: GuildThemePresets ===

// Module 4414 (GuildThemePresets)
import _modDef672 from "module_672" /* 672 */;
import Constants from "Constants" /* 1085 */;
import CustomThemesRandomUtils from "CustomThemesRandomUtils" /* 4415 */;
import size from "module_2" /* 2 */;

const ThemeTypes = Constants.ThemeTypes;
let obj = { TWILIGHT: 1, PLUM: 2, FIRE: 3, GOLD_DUST: 4, MOSS: 5, JADE: 6, OBSIDIAN: 7, OCEAN: 8, DENIM: 9, BLURPLE: 10 };
let items = [, , , , , , , , , ];
({ TWILIGHT: arr[0], DENIM: arr[1], OCEAN: arr[2], BLURPLE: arr[3], OBSIDIAN: arr[4], PLUM: arr[5], FIRE: arr[6], GOLD_DUST: arr[7], MOSS: arr[8], JADE: arr[9] } = obj);
obj = { id: obj.TWILIGHT, darkAppearance: null, lightAppearance: null };
obj = { color: "#69426A", angle: 0, baseMix: 100, colors: null };
const items1 = [{ hex: "#69426A", stop: 0 }, { hex: "#111731", stop: 100 }];
obj.colors = items1;
obj.darkAppearance = obj;
const obj1 = { color: "#FA9EFF", angle: 0, baseMix: 100, colors: null };
const items2 = [{ hex: "#FA9EFF", stop: 0 }, { hex: "#5A7EFE", stop: 100 }];
obj1.colors = items2;
obj.lightAppearance = obj1;
let obj2 = { id: obj.DENIM, darkAppearance: null, lightAppearance: null };
let obj3 = { color: "#5359AD", angle: 0, baseMix: 100, colors: null };
const items3 = [{ hex: "#5359AD", stop: 0 }, { hex: "#121238", stop: 100 }];
obj3.colors = items3;
obj2.darkAppearance = obj3;
const obj4 = { color: "#DBDBFF", angle: 0, baseMix: 100, colors: null };
const items4 = [{ hex: "#DBDBFF", stop: 0 }, { hex: "#6060FF", stop: 100 }];
obj4.colors = items4;
obj2.lightAppearance = obj4;
const obj5 = { id: obj.OCEAN, darkAppearance: null, lightAppearance: null };
const obj6 = { color: "#245B92", angle: 0, baseMix: 100, colors: null };
const items5 = [{ hex: "#245B92", stop: 0 }, { hex: "#141D40", stop: 100 }];
obj6.colors = items5;
obj5.darkAppearance = obj6;
const obj7 = { color: "#9ADBF7", angle: 0, baseMix: 100, colors: null };
const items6 = [{ hex: "#9ADBF7", stop: 0 }, { hex: "#2D3CCA", stop: 100 }];
obj7.colors = items6;
obj5.lightAppearance = obj7;
const obj8 = { id: obj.BLURPLE, darkAppearance: null, lightAppearance: null };
const obj9 = { color: "#533D9E", angle: 0, baseMix: 100, colors: null };
const items7 = [{ hex: "#533D9E", stop: 0 }, { hex: "#1A1035", stop: 100 }];
obj9.colors = items7;
obj8.darkAppearance = obj9;
const obj10 = { color: "#C3BFFF", angle: 0, baseMix: 100, colors: null };
const items8 = [{ hex: "#C3BFFF", stop: 0 }, { hex: "#816BDC", stop: 100 }];
obj10.colors = items8;
obj8.lightAppearance = obj10;
const obj11 = { id: obj.OBSIDIAN, darkAppearance: null, lightAppearance: null };
const obj12 = { color: "#5E4C85", angle: 0, baseMix: 100, colors: null };
const items9 = [{ hex: "#5E4C85", stop: 0 }, { hex: "#1E1740", stop: 100 }];
obj12.colors = items9;
obj11.darkAppearance = obj12;
const obj13 = { color: "#B59DF2", angle: 0, baseMix: 100, colors: null };
const items10 = [{ hex: "#B59DF2", stop: 0 }, { hex: "#8F89D2", stop: 100 }];
obj13.colors = items10;
obj11.lightAppearance = obj13;
const obj14 = { id: obj.PLUM, darkAppearance: null, lightAppearance: null };
const obj15 = { color: "#8A3F7F", angle: 0, baseMix: 100, colors: null };
const items11 = [{ hex: "#8A3F7F", stop: 0 }, { hex: "#2C0D25", stop: 100 }];
obj15.colors = items11;
obj14.darkAppearance = obj15;
const obj16 = { color: "#E893FF", angle: 0, baseMix: 100, colors: null };
const items12 = [{ hex: "#E893FF", stop: 0 }, { hex: "#FFADDC", stop: 100 }];
obj16.colors = items12;
obj14.lightAppearance = obj16;
const obj17 = { id: obj.FIRE, darkAppearance: null, lightAppearance: null };
const obj18 = { color: "#9B2C2C", angle: 0, baseMix: 50, colors: null };
const items13 = [{ hex: "#9B2C2C", stop: 0 }, { hex: "#2A0C0C", stop: 100 }];
obj18.colors = items13;
obj17.darkAppearance = obj18;
const obj19 = { color: "#FFEBCA", angle: 0, baseMix: 50, colors: null };
const items14 = [{ hex: "#FFEBCA", stop: 0 }, { hex: "#FF8989", stop: 100 }];
obj19.colors = items14;
obj17.lightAppearance = obj19;
const obj20 = { id: obj.GOLD_DUST, darkAppearance: null, lightAppearance: null };
const obj21 = { color: "#6C523D", angle: 0, baseMix: 50, colors: null };
const items15 = [{ hex: "#6C523D", stop: 0 }, { hex: "#241912", stop: 100 }];
obj21.colors = items15;
obj20.darkAppearance = obj21;
const obj22 = { color: "#FFE7DA", angle: 0, baseMix: 50, colors: null };
const items16 = [{ hex: "#FFE7DA", stop: 0 }, { hex: "#FFD89B", stop: 100 }];
obj22.colors = items16;
obj20.lightAppearance = obj22;
const obj23 = { id: obj.MOSS, darkAppearance: null, lightAppearance: null };
const obj24 = { color: "#58694E", angle: 0, baseMix: 50, colors: null };
const items17 = [{ hex: "#58694E", stop: 0 }, { hex: "#222A1C", stop: 100 }];
obj24.colors = items17;
obj23.darkAppearance = obj24;
const obj25 = { color: "#B7D19F", angle: 0, baseMix: 50, colors: null };
const items18 = [{ hex: "#B7D19F", stop: 0 }, { hex: "#B1DCA4", stop: 100 }];
obj25.colors = items18;
obj23.lightAppearance = obj25;
const obj26 = { id: obj.JADE, darkAppearance: null, lightAppearance: null };
const obj27 = { color: "#297071", angle: 0, baseMix: 50, colors: null };
const items19 = [{ hex: "#297071", stop: 0 }, { hex: "#18203F", stop: 100 }];
obj27.colors = items19;
obj26.darkAppearance = obj27;
const obj28 = { color: "#C5F0D2", angle: 0, baseMix: 50, colors: null };
const items20 = [{ hex: "#C5F0D2", stop: 0 }, { hex: "#60ADB2", stop: 100 }];
obj28.colors = items20;
obj26.lightAppearance = obj28;
const dependencyMap = { [obj.TWILIGHT]: obj, [obj.DENIM]: obj2, [obj.OCEAN]: obj5, [obj.BLURPLE]: obj8, [obj.OBSIDIAN]: obj11, [obj.PLUM]: obj14, [obj.FIRE]: obj17, [obj.GOLD_DUST]: obj20, [obj.MOSS]: obj23, [obj.JADE]: obj26 };
const set = new Set(Object.values(obj));
let mapped = items.map((item) => dependencyMap[item]);
let result = size.fileFinishedImporting("modules/guild_themes/GuildThemePresets.tsx");

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
  return { presetId: mapped[0].id, customUserThemeSettings: "a" };
};
export const getGuildThemePresetAppearance = function getGuildThemePresetAppearance(preset, stateFromStores) {
  return stateFromStores === ThemeTypes.LIGHT ? preset.lightAppearance : preset.darkAppearance;
};
export const getLinearGradientForGuildThemePreset = function getLinearGradientForGuildThemePreset(lightAppearance, arg1) {
  const tmp = arg1 === ThemeTypes.LIGHT ? lightAppearance.lightAppearance : lightAppearance.darkAppearance;
  const colors = tmp.colors;
  mapped = colors.map((hex) => "" + hex.hex + " " + hex.stop + "%");
  return "linear-gradient(" + tmp.angle + "deg, " + mapped.join(", ") + ")";
};
export const getSingleColorGuildThemeGradientColors = function getSingleColorGuildThemeGradientColors(arg0, stateFromStores) {
  const tmp2 = stateFromStores === ThemeTypes.LIGHT ? { minTone: 55, maxTone: 75 } : { minTone: 15, maxTone: 35 };
  const minTone = tmp2.minTone;
  const obj = _modDef672(arg0);
  const result = obj.set("hsl.l", (minTone + (Math.max(15, Math.min(75, 100 * obj.get("hsl.l"))) - 15) / 60 * (tmp2.maxTone - minTone)) / 100);
  const hexResult = result.hex();
  const obj3 = _modDef672(hexResult);
  let num = -0.2;
  if (stateFromStores === ThemeTypes.LIGHT) {
    num = 0.2;
  }
  const items = [hexResult, ];
  const result1 = obj3.set("hsl.l", Math.max(0, Math.min(1, obj3.get("hsl.l") + num)));
  items[1] = result1.hex();
  return items;
};
export const getRandomSingleColorGuildTheme = function getRandomSingleColorGuildTheme() {
  const diff = CustomThemesRandomUtils.COLOR_PALETTE.length - 1;
  const tmp2 = CustomThemesRandomUtils.COLOR_PALETTE[Math.floor(Math, Math.random(Math) * (diff + 1))];
  const obj = { color: null, baseMix: null };
  const bound = Math.min(45, Math.round(100 * _modDef672(tmp2).get("hsl.l")));
  const obj2 = _modDef672(tmp2);
  const result = _modDef672(tmp2).set("hsl.l", Math.max(0.15, Math.min(0.75, bound / 100)));
  const obj3 = _modDef672(tmp2);
  const hexResult = result.hex();
  const result1 = _modDef672(result.hex()).set("hsl.s", 0.4);
  obj.color = result1.hex();
  obj.baseMix = Math.floor(Math.random() * 11) + 70;
  return obj;
};
export const getSaturationPinnedColor = function getSaturationPinnedColor(arg0) {
  const result = _modDef672(arg0).set("hsl.s", 0.4);
  return result.hex();
};
export const getToneAdjustedColor = function getToneAdjustedColor(arg0, arg1) {
  const result = _modDef672(arg0).set("hsl.l", Math.max(0.15, Math.min(0.75, arg1 / 100)));
  return result.hex();
};
export const getGuildThemeToneRange = function getGuildThemeToneRange(arg0) {
  return arg0 === ThemeTypes.LIGHT ? { minTone: 55, maxTone: 75 } : { minTone: 15, maxTone: 35 };
};
export const getThemeAdjustedToneColor = function getThemeAdjustedToneColor(arg0, arg1) {
  const tmp = arg1 === ThemeTypes.LIGHT ? { minTone: 55, maxTone: 75 } : { minTone: 15, maxTone: 35 };
  const minTone = tmp.minTone;
  const obj = _modDef672(arg0);
  const result = obj.set("hsl.l", (minTone + (Math.max(15, Math.min(75, 100 * obj.get("hsl.l"))) - 15) / 60 * (tmp.maxTone - minTone)) / 100);
  return result.hex();
};
export const getHueAdjustedColor = function getHueAdjustedColor(arg0, arg1) {
  const result = _modDef672(arg0).set("hsl.h", arg1);
  return result.hex();
};