// === Module 7944: GuildTagConstants ===

// Module 7944 (GuildTagConstants)
import Constants from "Constants" /* 1074 */;
import Powerups from "Powerups" /* 4453 */;
import size from "module_2" /* 2 */;

const GuildFeatures = Constants.GuildFeatures;
let GuildTagPalettePresetColor = { SWORD: 0, [0]: "SWORD", WATER_DROP: 1, [1]: "WATER_DROP", SKULL: 2, [2]: "SKULL", TOADSTOOL: 3, [3]: "TOADSTOOL", MOON: 4, [4]: "MOON", LIGHTNING: 5, [5]: "LIGHTNING", LEAF: 6, [6]: "LEAF", HEART: 7, [7]: "HEART", FIRE: 8, [8]: "FIRE", COMPASS: 9, [9]: "COMPASS", CROSSHAIRS: 10, [10]: "CROSSHAIRS", FLOWER: 11, [11]: "FLOWER", FORCE: 12, [12]: "FORCE", GEM: 13, [13]: "GEM", LAVA: 14, [14]: "LAVA", PSYCHIC: 15, [15]: "PSYCHIC", SMOKE: 16, [16]: "SMOKE", SNOW: 17, [17]: "SNOW", SOUND: 18, [18]: "SOUND", SUN: 19, [19]: "SUN", WIND: 20, [20]: "WIND", BUNNY: 21, [21]: "BUNNY", DOG: 22, [22]: "DOG", FROG: 23, [23]: "FROG", GOAT: 24, [24]: "GOAT", CAT: 25, [25]: "CAT", DIAMOND: 26, [26]: "DIAMOND", CROWN: 27, [27]: "CROWN", TROPHY: 28, [28]: "TROPHY", MONEY_BAG: 29, [29]: "MONEY_BAG", DOLLAR_SIGN: 30, [30]: "DOLLAR_SIGN", CLOVER: 31, [31]: "CLOVER", BLOSSOM: 32, [32]: "BLOSSOM", POTTED_PLANT: 33, [33]: "POTTED_PLANT", MAPLE: 34, [34]: "MAPLE", WILTED_FLOWER: 35, [35]: "WILTED_FLOWER", BUTTERFLY: 36, [36]: "BUTTERFLY", SNAIL: 37, [37]: "SNAIL", CATERPILLAR: 38, [38]: "CATERPILLAR", SPIDER: 39, [39]: "SPIDER", BEE: 40, [40]: "BEE" };
GuildTagPalettePresetColor = { HOT_PINK: "#ff1c90", LIGHT_PINK: "#ff7fc0", ORANGE: "#ff8f1c", PEACH: "#ffae77", GOLD: "#eebe1a", LIGHT_YELLOW: "#fffc7f", TEAL: "#32a070", MINT_GREEN: "#57b59e", BLUE_TEAL: "#32839a", LIGHT_BLUE: "#71c2d9", PURPLE: "#8a43ff", LAVENDER: "#bd95ff", VIOLET: "#9b3fe5", MAUVE: "#cc8dff", DEEP_PURPLE: "#942e8f", ORCHID: "#d46cb5", RED: "#d14242", SALMON: "#ff8989", BROWN: "#814300", TAN: "#a88a6c", OLIVE: "#717224", GRAY: "#c3c3c3", BURGUNDY: "#5d1d47", ROSE: "#c58fbb", DARK_GRAY: "#222222", LIGHT_GRAY: "#cccccc" };
GuildTagPalettePresetColor = { primary: GuildTagPalettePresetColor.HOT_PINK, secondary: GuildTagPalettePresetColor.LIGHT_PINK };
const items = [GuildTagPalettePresetColor, { primary: GuildTagPalettePresetColor.ORANGE, secondary: GuildTagPalettePresetColor.PEACH }, { primary: GuildTagPalettePresetColor.GOLD, secondary: GuildTagPalettePresetColor.LIGHT_YELLOW }, { primary: GuildTagPalettePresetColor.TEAL, secondary: GuildTagPalettePresetColor.MINT_GREEN }, { primary: GuildTagPalettePresetColor.BLUE_TEAL, secondary: GuildTagPalettePresetColor.LIGHT_BLUE }, { primary: GuildTagPalettePresetColor.PURPLE, secondary: GuildTagPalettePresetColor.LAVENDER }, { primary: GuildTagPalettePresetColor.VIOLET, secondary: GuildTagPalettePresetColor.MAUVE }, { primary: GuildTagPalettePresetColor.DEEP_PURPLE, secondary: GuildTagPalettePresetColor.ORCHID }, { primary: GuildTagPalettePresetColor.RED, secondary: GuildTagPalettePresetColor.SALMON }, { primary: GuildTagPalettePresetColor.BROWN, secondary: GuildTagPalettePresetColor.TAN }, { primary: GuildTagPalettePresetColor.OLIVE, secondary: GuildTagPalettePresetColor.GRAY }, { primary: GuildTagPalettePresetColor.BURGUNDY, secondary: GuildTagPalettePresetColor.ROSE }, { primary: GuildTagPalettePresetColor.DARK_GRAY, secondary: GuildTagPalettePresetColor.LIGHT_GRAY }];
const obj1 = { SIZE_12: 12, [12]: "SIZE_12", SIZE_14: 14, [14]: "SIZE_14", SIZE_16: 16, [16]: "SIZE_16", SIZE_24: 24, [24]: "SIZE_24", SIZE_32: 32, [32]: "SIZE_32", SIZE_36: 36, [36]: "SIZE_36" };
const items1 = [, , , , , , , , , ];
({ LEAF: arr2[0], SWORD: arr2[1], HEART: arr2[2], FIRE: arr2[3], WATER_DROP: arr2[4], SKULL: arr2[5], MOON: arr2[6], LIGHTNING: arr2[7], COMPASS: arr2[8], TOADSTOOL: arr2[9] } = GuildTagPalettePresetColor);
const items2 = [, , , , ];
({ BUNNY: arr3[0], DOG: arr3[1], FROG: arr3[2], GOAT: arr3[3], CAT: arr3[4] } = GuildTagPalettePresetColor);
const items3 = [, , , , ];
({ DIAMOND: arr4[0], CROWN: arr4[1], TROPHY: arr4[2], MONEY_BAG: arr4[3], DOLLAR_SIGN: arr4[4] } = GuildTagPalettePresetColor);
const items4 = [, , , , ];
({ CLOVER: arr5[0], BLOSSOM: arr5[1], POTTED_PLANT: arr5[2], MAPLE: arr5[3], WILTED_FLOWER: arr5[4] } = GuildTagPalettePresetColor);
const items5 = [, , , , ];
({ BUTTERFLY: arr6[0], SNAIL: arr6[1], CATERPILLAR: arr6[2], SPIDER: arr6[3], BEE: arr6[4] } = GuildTagPalettePresetColor);
({ GUILD_TAGS_BADGE_PACK_PETS, GUILD_TAGS_BADGE_PACK_FLEX, GUILD_TAGS_BADGE_PACK_PLANT, GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES } = GuildFeatures);
const result = size.fileFinishedImporting("modules/guild_tag/GuildTagConstants.tsx");

export const GuildTagBadgeKind = GuildTagPalettePresetColor;
export { GuildTagPalettePresetColor };
export const GUILD_TAG_BADGE_PALETTE_PRESETS = items;
export const GUILD_TAG_BADGE_PRIMARY_DEFAULT = items[0].primary;
export const GUILD_TAG_BADGE_SECONDARY_DEFAULT = items[0].secondary;
export const getRandomGuildTagBadgePreset = function getRandomGuildTagBadgePreset() {
  return items[Math.floor(Math, Math.random(Math) * items.length)];
};
export const GUILD_TAG_BADGE_NUM_CUSTOMIZABLE_COLORS = { [GuildTagPalettePresetColor.SWORD]: 2, [GuildTagPalettePresetColor.WATER_DROP]: 1, [GuildTagPalettePresetColor.SKULL]: 1, [GuildTagPalettePresetColor.TOADSTOOL]: 2, [GuildTagPalettePresetColor.MOON]: 1, [GuildTagPalettePresetColor.LIGHTNING]: 1, [GuildTagPalettePresetColor.LEAF]: 1, [GuildTagPalettePresetColor.HEART]: 1, [GuildTagPalettePresetColor.FIRE]: 1, [GuildTagPalettePresetColor.COMPASS]: 2, [GuildTagPalettePresetColor.CROSSHAIRS]: 2, [GuildTagPalettePresetColor.FLOWER]: 2, [GuildTagPalettePresetColor.FORCE]: 2, [GuildTagPalettePresetColor.GEM]: 2, [GuildTagPalettePresetColor.LAVA]: 2, [GuildTagPalettePresetColor.PSYCHIC]: 2, [GuildTagPalettePresetColor.SMOKE]: 2, [GuildTagPalettePresetColor.SNOW]: 2, [GuildTagPalettePresetColor.SOUND]: 2, [GuildTagPalettePresetColor.SUN]: 2, [GuildTagPalettePresetColor.WIND]: 2, [GuildTagPalettePresetColor.BUNNY]: 1, [GuildTagPalettePresetColor.DOG]: 2, [GuildTagPalettePresetColor.FROG]: 2, [GuildTagPalettePresetColor.GOAT]: 1, [GuildTagPalettePresetColor.CAT]: 1, [GuildTagPalettePresetColor.DIAMOND]: 1, [GuildTagPalettePresetColor.CROWN]: 2, [GuildTagPalettePresetColor.TROPHY]: 1, [GuildTagPalettePresetColor.MONEY_BAG]: 1, [GuildTagPalettePresetColor.DOLLAR_SIGN]: 1, [GuildTagPalettePresetColor.BEE]: 1, [GuildTagPalettePresetColor.SPIDER]: 2, [GuildTagPalettePresetColor.CATERPILLAR]: 2, [GuildTagPalettePresetColor.SNAIL]: 2, [GuildTagPalettePresetColor.BUTTERFLY]: 2, [GuildTagPalettePresetColor.WILTED_FLOWER]: 2, [GuildTagPalettePresetColor.BLOSSOM]: 1, [GuildTagPalettePresetColor.POTTED_PLANT]: 2, [GuildTagPalettePresetColor.CLOVER]: 1, [GuildTagPalettePresetColor.MAPLE]: 1 };
export const getRandomGuildTagBadgeKind = function getRandomGuildTagBadgeKind() {
  const keys = Object.keys(obj);
  const found = keys.filter((item) => isNaN(Number(item)));
  return obj[found[Math.floor(Math, Math.random(Math) * found.length)]];
};
export const GuildTagBadgeSize = obj1;
export const GuildTagBadgeMediaProxySizes = { [obj1.SIZE_12]: 16, [obj1.SIZE_14]: 16, [obj1.SIZE_16]: 16, [obj1.SIZE_24]: 24, [obj1.SIZE_32]: 32, [obj1.SIZE_36]: 40 };
export const GuildTagBadgeMediaProxySizesMobile = { [obj1.SIZE_12]: 32, [obj1.SIZE_14]: 32, [obj1.SIZE_16]: 32, [obj1.SIZE_24]: 48, [obj1.SIZE_32]: 64, [obj1.SIZE_36]: 80 };
export const BADGES = items1;
export const BADGE_PACKS = { [GuildFeatures.GUILD_TAGS_BADGE_PACK_PETS]: items2, [GuildFeatures.GUILD_TAGS_BADGE_PACK_FLEX]: items3, [GuildFeatures.GUILD_TAGS_BADGE_PACK_PLANT]: items4, [GuildFeatures.GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES]: items5 };
export const BADGE_PACK_TO_SKU_ID = { [GUILD_TAGS_BADGE_PACK_PETS]: Powerups.GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID, [GUILD_TAGS_BADGE_PACK_FLEX]: Powerups.GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID, [GUILD_TAGS_BADGE_PACK_PLANT]: Powerups.GUILD_TAGS_BADGE_PACK_PLANT_POWERUP_SKU_ID, [GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES]: Powerups.GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES_POWERUP_SKU_ID };