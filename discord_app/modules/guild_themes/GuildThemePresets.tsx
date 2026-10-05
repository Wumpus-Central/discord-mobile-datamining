// discord_app/modules/guild_themes/GuildThemePresets.tsx
import _modDef683 from "../../../_runtime/metro/00683__.js";
import Constants from "../../../discord_common/js/shared/Constants.tsx";
import CustomThemesRandomUtils from "../client_themes/CustomThemesRandomUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

let items1;
let items10;
let items11;
let items12;
let items13;
let items14;
let items15;
let items16;
let items17;
let items18;
let items19;
let items2;
let items20;
let items3;
let items4;
let items5;
let items6;
let items7;
let items8;
let items9;
let obj10;
let obj12;
let obj13;
let obj15;
let obj16;
let obj18;
let obj19;
let obj21;
let obj22;
let obj24;
let obj25;
let obj27;
let obj28;
let obj3;
let obj30;
let obj31;
let obj4;
let obj6;
let obj7;
let obj9;
const ThemeTypes = Constants.ThemeTypes;
let obj = {
  TWILIGHT: 1,
  PLUM: 2,
  FIRE: 3,
  GOLD_DUST: 4,
  MOSS: 5,
  JADE: 6,
  OBSIDIAN: 7,
  OCEAN: 8,
  DENIM: 9,
  BLURPLE: 10,
};
let items = [, , , , , , , , ,];
({
  TWILIGHT: arr[0],
  DENIM: arr[1],
  OCEAN: arr[2],
  BLURPLE: arr[3],
  OBSIDIAN: arr[4],
  PLUM: arr[5],
  FIRE: arr[6],
  GOLD_DUST: arr[7],
  MOSS: arr[8],
  JADE: arr[9],
} = obj);
let obj2 = { id: obj.TWILIGHT, darkAppearance: obj3, lightAppearance: obj4 };
obj3 = { color: "#69426A", angle: 0, baseMix: 100, colors: items1 };
items1 = [
  { hex: "#69426A", stop: 0 },
  { hex: "#111731", stop: 100 },
];
obj4 = { color: "#FA9EFF", angle: 0, baseMix: 100, colors: items2 };
items2 = [
  { hex: "#FA9EFF", stop: 0 },
  { hex: "#5A7EFE", stop: 100 },
];
let obj5 = { id: obj.DENIM, darkAppearance: obj6, lightAppearance: obj7 };
obj6 = { color: "#5359AD", angle: 0, baseMix: 100, colors: items3 };
items3 = [
  { hex: "#5359AD", stop: 0 },
  { hex: "#121238", stop: 100 },
];
obj7 = { color: "#DBDBFF", angle: 0, baseMix: 100, colors: items4 };
items4 = [
  { hex: "#DBDBFF", stop: 0 },
  { hex: "#6060FF", stop: 100 },
];
const obj8 = { id: obj.OCEAN, darkAppearance: obj9, lightAppearance: obj10 };
obj9 = { color: "#245B92", angle: 0, baseMix: 100, colors: items5 };
items5 = [
  { hex: "#245B92", stop: 0 },
  { hex: "#141D40", stop: 100 },
];
obj10 = { color: "#9ADBF7", angle: 0, baseMix: 100, colors: items6 };
items6 = [
  { hex: "#9ADBF7", stop: 0 },
  { hex: "#2D3CCA", stop: 100 },
];
const obj11 = { id: obj.BLURPLE, darkAppearance: obj12, lightAppearance: obj13 };
obj12 = { color: "#533D9E", angle: 0, baseMix: 100, colors: items7 };
items7 = [
  { hex: "#533D9E", stop: 0 },
  { hex: "#1A1035", stop: 100 },
];
obj13 = { color: "#C3BFFF", angle: 0, baseMix: 100, colors: items8 };
items8 = [
  { hex: "#C3BFFF", stop: 0 },
  { hex: "#816BDC", stop: 100 },
];
const obj14 = { id: obj.OBSIDIAN, darkAppearance: obj15, lightAppearance: obj16 };
obj15 = { color: "#5E4C85", angle: 0, baseMix: 100, colors: items9 };
items9 = [
  { hex: "#5E4C85", stop: 0 },
  { hex: "#1E1740", stop: 100 },
];
obj16 = { color: "#B59DF2", angle: 0, baseMix: 100, colors: items10 };
items10 = [
  { hex: "#B59DF2", stop: 0 },
  { hex: "#8F89D2", stop: 100 },
];
const obj17 = { id: obj.PLUM, darkAppearance: obj18, lightAppearance: obj19 };
obj18 = { color: "#8A3F7F", angle: 0, baseMix: 100, colors: items11 };
items11 = [
  { hex: "#8A3F7F", stop: 0 },
  { hex: "#2C0D25", stop: 100 },
];
obj19 = { color: "#E893FF", angle: 0, baseMix: 100, colors: items12 };
items12 = [
  { hex: "#E893FF", stop: 0 },
  { hex: "#FFADDC", stop: 100 },
];
const obj20 = { id: obj.FIRE, darkAppearance: obj21, lightAppearance: obj22 };
obj21 = { color: "#9B2C2C", angle: 0, baseMix: 50, colors: items13 };
items13 = [
  { hex: "#9B2C2C", stop: 0 },
  { hex: "#2A0C0C", stop: 100 },
];
obj22 = { color: "#FFEBCA", angle: 0, baseMix: 50, colors: items14 };
items14 = [
  { hex: "#FFEBCA", stop: 0 },
  { hex: "#FF8989", stop: 100 },
];
const obj23 = { id: obj.GOLD_DUST, darkAppearance: obj24, lightAppearance: obj25 };
obj24 = { color: "#6C523D", angle: 0, baseMix: 50, colors: items15 };
items15 = [
  { hex: "#6C523D", stop: 0 },
  { hex: "#241912", stop: 100 },
];
obj25 = { color: "#FFE7DA", angle: 0, baseMix: 50, colors: items16 };
items16 = [
  { hex: "#FFE7DA", stop: 0 },
  { hex: "#FFD89B", stop: 100 },
];
const obj26 = { id: obj.MOSS, darkAppearance: obj27, lightAppearance: obj28 };
obj27 = { color: "#58694E", angle: 0, baseMix: 50, colors: items17 };
items17 = [
  { hex: "#58694E", stop: 0 },
  { hex: "#222A1C", stop: 100 },
];
obj28 = { color: "#B7D19F", angle: 0, baseMix: 50, colors: items18 };
items18 = [
  { hex: "#B7D19F", stop: 0 },
  { hex: "#B1DCA4", stop: 100 },
];
const obj29 = { id: obj.JADE, darkAppearance: obj30, lightAppearance: obj31 };
obj30 = { color: "#297071", angle: 0, baseMix: 50, colors: items19 };
items19 = [
  { hex: "#297071", stop: 0 },
  { hex: "#18203F", stop: 100 },
];
obj31 = { color: "#C5F0D2", angle: 0, baseMix: 50, colors: items20 };
items20 = [
  { hex: "#C5F0D2", stop: 0 },
  { hex: "#60ADB2", stop: 100 },
];
let closure_4 = {
  [obj.TWILIGHT]: obj2,
  [obj.DENIM]: obj5,
  [obj.OCEAN]: obj8,
  [obj.BLURPLE]: obj11,
  [obj.OBSIDIAN]: obj14,
  [obj.PLUM]: obj17,
  [obj.FIRE]: obj20,
  [obj.GOLD_DUST]: obj23,
  [obj.MOSS]: obj26,
  [obj.JADE]: obj29,
};
const set = new Set(Object.values(obj));
let mapped = items.map((item) => closure_4[item]);
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
      tmp = closure_4[presetId];
    }
  }
  return tmp;
};
export const getDefaultGuildThemePresetSettings = function getDefaultGuildThemePresetSettings() {
  return { presetId: mapped[0].id, customUserThemeSettings: "r" };
};
export const getGuildThemePresetAppearance = function getGuildThemePresetAppearance(preset, stateFromStores) {
  return stateFromStores === ThemeTypes.LIGHT ? preset.lightAppearance : preset.darkAppearance;
};
export const getLinearGradientForGuildThemePreset = function getLinearGradientForGuildThemePreset(
  lightAppearance,
  arg1,
) {
  const tmp = arg1 === ThemeTypes.LIGHT ? lightAppearance.lightAppearance : lightAppearance.darkAppearance;
  const colors = tmp.colors;
  mapped = colors.map((hex) => "" + hex.hex + " " + hex.stop + "%");
  return "linear-gradient(" + tmp.angle + "deg, " + mapped.join(", ") + ")";
};
export const getSingleColorGuildThemeGradientColors = function getSingleColorGuildThemeGradientColors(arg0, cResult) {
  const tmp2 = cResult === ThemeTypes.LIGHT ? { minTone: 55, maxTone: 75 } : { minTone: 15, maxTone: 35 };
  const minTone = tmp2.minTone;
  const maxTone = tmp2.maxTone;
  const obj = _modDef683(arg0);
  const result = obj.set(
    "hsl.l",
    (minTone + ((Math.max(15, Math.min(75, 100 * obj.get("hsl.l"))) - 15) / 60) * (maxTone - minTone)) / 100,
  );
  const hexResult = result.hex();
  const obj3 = _modDef683(hexResult);
  let num = -0.2;
  if (cResult === ThemeTypes.LIGHT) {
    num = 0.2;
  }
  const items = [hexResult];
  const result1 = obj3.set("hsl.l", Math.max(0, Math.min(1, obj3.get("hsl.l") + num)));
  items[1] = result1.hex();
  return items;
};
export const getRandomSingleColorGuildTheme = function getRandomSingleColorGuildTheme() {
  let result1;
  const COLOR_PALETTE = CustomThemesRandomUtils.COLOR_PALETTE;
  const diff = CustomThemesRandomUtils.COLOR_PALETTE.length - 1;
  const tmp2 = COLOR_PALETTE[Math.floor(Math, Math.random(Math) * (diff + 1))];
  const obj = { color: result1.hex(), baseMix: Math.floor(Math.random() * 11) + 70 };
  const obj2 = _modDef683(tmp2);
  const minResult = min(45, round(100 * obj2.get("hsl.l")));
  const obj3 = _modDef683(tmp2);
  const result = obj3.set("hsl.l", Math.max(0.15, Math.min(0.75, minResult / 100)));
  const hexResult = result.hex();
  const obj5 = _modDef683(hexResult);
  result1 = obj5.set("hsl.s", 0.4);
  return obj;
};
export const getSaturationPinnedColor = function getSaturationPinnedColor(arg0) {
  const obj = _modDef683(arg0);
  const result = obj.set("hsl.s", 0.4);
  return result.hex();
};
export const getToneAdjustedColor = function getToneAdjustedColor(arg0, arg1) {
  const obj = _modDef683(arg0);
  const result = obj.set("hsl.l", Math.max(0.15, Math.min(0.75, arg1 / 100)));
  return result.hex();
};
export const getGuildThemeToneRange = function getGuildThemeToneRange(arg0) {
  return arg0 === ThemeTypes.LIGHT ? { minTone: 55, maxTone: 75 } : { minTone: 15, maxTone: 35 };
};
export const getThemeAdjustedToneColor = function getThemeAdjustedToneColor(arg0, arg1) {
  const tmp = arg1 === ThemeTypes.LIGHT ? { minTone: 55, maxTone: 75 } : { minTone: 15, maxTone: 35 };
  const minTone = tmp.minTone;
  const maxTone = tmp.maxTone;
  const obj = _modDef683(arg0);
  const result = obj.set(
    "hsl.l",
    (minTone + ((Math.max(15, Math.min(75, 100 * obj.get("hsl.l"))) - 15) / 60) * (maxTone - minTone)) / 100,
  );
  return result.hex();
};
export const getHueAdjustedColor = function getHueAdjustedColor(arg0, arg1) {
  const obj = _modDef683(arg0);
  const result = obj.set("hsl.h", arg1);
  return result.hex();
};
