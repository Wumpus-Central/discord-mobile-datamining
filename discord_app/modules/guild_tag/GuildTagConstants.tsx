// === Module 7944: items ===

// Module 7944 (items)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import VANITY_URL_POWERUP_SKU_ID from "VANITY_URL_POWERUP_SKU_ID" /* 4453 */;

const GuildFeatures = ME.GuildFeatures;
let obj = { SWORD: 0, [0]: "SWORD", WATER_DROP: 1, [1]: "WATER_DROP", SKULL: 2, [2]: "SKULL", TOADSTOOL: 3, [3]: "TOADSTOOL", MOON: 4, [4]: "MOON", LIGHTNING: 5, [5]: "LIGHTNING", LEAF: 6, [6]: "LEAF", HEART: 7, [7]: "HEART", FIRE: 8, [8]: "FIRE", COMPASS: 9, [9]: "COMPASS", CROSSHAIRS: 10, [10]: "CROSSHAIRS", FLOWER: 11, [11]: "FLOWER", FORCE: 12, [12]: "FORCE", GEM: 13, [13]: "GEM", LAVA: 14, [14]: "LAVA", PSYCHIC: 15, [15]: "PSYCHIC", SMOKE: 16, [16]: "SMOKE", SNOW: 17, [17]: "SNOW", SOUND: 18, [18]: "SOUND", SUN: 19, [19]: "SUN", WIND: 20, [20]: "WIND", BUNNY: 21, [21]: "BUNNY", DOG: 22, [22]: "DOG", FROG: 23, [23]: "FROG", GOAT: 24, [24]: "GOAT", CAT: 25, [25]: "CAT", DIAMOND: 26, [26]: "DIAMOND", CROWN: 27, [27]: "CROWN", TROPHY: 28, [28]: "TROPHY", MONEY_BAG: 29, [29]: "MONEY_BAG", DOLLAR_SIGN: 30, [30]: "DOLLAR_SIGN", CLOVER: 31, [31]: "CLOVER", BLOSSOM: 32, [32]: "BLOSSOM", POTTED_PLANT: 33, [33]: "POTTED_PLANT", MAPLE: 34, [34]: "MAPLE", WILTED_FLOWER: 35, [35]: "WILTED_FLOWER", BUTTERFLY: 36, [36]: "BUTTERFLY", SNAIL: 37, [37]: "SNAIL", CATERPILLAR: 38, [38]: "CATERPILLAR", SPIDER: 39, [39]: "SPIDER", BEE: 40, [40]: "BEE" };
obj = { HOT_PINK: "#ff1c90", LIGHT_PINK: "#ff7fc0", ORANGE: "#ff8f1c", PEACH: "#ffae77", GOLD: "#eebe1a", LIGHT_YELLOW: "#fffc7f", TEAL: "#32a070", MINT_GREEN: "#57b59e", BLUE_TEAL: "#32839a", LIGHT_BLUE: "#71c2d9", PURPLE: "#8a43ff", LAVENDER: "#bd95ff", VIOLET: "#9b3fe5", MAUVE: "#cc8dff", DEEP_PURPLE: "#942e8f", ORCHID: "#d46cb5", RED: "#d14242", SALMON: "#ff8989", BROWN: "#814300", TAN: "#a88a6c", OLIVE: "#717224", GRAY: "#c3c3c3", BURGUNDY: "#5d1d47", ROSE: "#c58fbb", DARK_GRAY: "#222222", LIGHT_GRAY: "#cccccc" };
obj = { primary: obj.HOT_PINK, secondary: obj.LIGHT_PINK };
const items = [obj, { primary: obj.ORANGE, secondary: obj.PEACH }, { primary: obj.GOLD, secondary: obj.LIGHT_YELLOW }, { primary: obj.TEAL, secondary: obj.MINT_GREEN }, { primary: obj.BLUE_TEAL, secondary: obj.LIGHT_BLUE }, { primary: obj.PURPLE, secondary: obj.LAVENDER }, { primary: obj.VIOLET, secondary: obj.MAUVE }, { primary: obj.DEEP_PURPLE, secondary: obj.ORCHID }, { primary: obj.RED, secondary: obj.SALMON }, { primary: obj.BROWN, secondary: obj.TAN }, { primary: obj.OLIVE, secondary: obj.GRAY }, { primary: obj.BURGUNDY, secondary: obj.ROSE }, { primary: obj.DARK_GRAY, secondary: obj.LIGHT_GRAY }];
const obj1 = { SIZE_12: 12, [12]: "SIZE_12", SIZE_14: 14, [14]: "SIZE_14", SIZE_16: 16, [16]: "SIZE_16", SIZE_24: 24, [24]: "SIZE_24", SIZE_32: 32, [32]: "SIZE_32", SIZE_36: 36, [36]: "SIZE_36" };
const items1 = [, , , , , , , , , ];
({ LEAF: arr2[0], SWORD: arr2[1], HEART: arr2[2], FIRE: arr2[3], WATER_DROP: arr2[4], SKULL: arr2[5], MOON: arr2[6], LIGHTNING: arr2[7], COMPASS: arr2[8], TOADSTOOL: arr2[9] } = obj);
const items2 = [, , , , ];
({ BUNNY: arr3[0], DOG: arr3[1], FROG: arr3[2], GOAT: arr3[3], CAT: arr3[4] } = obj);
const items3 = [, , , , ];
({ DIAMOND: arr4[0], CROWN: arr4[1], TROPHY: arr4[2], MONEY_BAG: arr4[3], DOLLAR_SIGN: arr4[4] } = obj);
const items4 = [, , , , ];
({ CLOVER: arr5[0], BLOSSOM: arr5[1], POTTED_PLANT: arr5[2], MAPLE: arr5[3], WILTED_FLOWER: arr5[4] } = obj);
const items5 = [, , , , ];
({ BUTTERFLY: arr6[0], SNAIL: arr6[1], CATERPILLAR: arr6[2], SPIDER: arr6[3], BEE: arr6[4] } = obj);
({ GUILD_TAGS_BADGE_PACK_PETS, GUILD_TAGS_BADGE_PACK_FLEX, GUILD_TAGS_BADGE_PACK_PLANT, GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES } = GuildFeatures);
const obj2 = { [GUILD_TAGS_BADGE_PACK_PETS]: VANITY_URL_POWERUP_SKU_ID.GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID, [GUILD_TAGS_BADGE_PACK_FLEX]: VANITY_URL_POWERUP_SKU_ID.GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID, [GUILD_TAGS_BADGE_PACK_PLANT]: VANITY_URL_POWERUP_SKU_ID.GUILD_TAGS_BADGE_PACK_PLANT_POWERUP_SKU_ID, [GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES]: VANITY_URL_POWERUP_SKU_ID.GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES_POWERUP_SKU_ID };
const result = set.fileFinishedImporting("modules/guild_tag/GuildTagConstants.tsx");

export const GuildTagBadgeKind = obj;
export const GuildTagPalettePresetColor = obj;
export const GUILD_TAG_BADGE_PALETTE_PRESETS = items;
export const GUILD_TAG_BADGE_PRIMARY_DEFAULT = items[0].primary;
export const GUILD_TAG_BADGE_SECONDARY_DEFAULT = items[0].secondary;
export const getRandomGuildTagBadgePreset = function getRandomGuildTagBadgePreset() {
  return items[Math.floor(Math, Math.random(Math) * items.length)];
};
export const GUILD_TAG_BADGE_NUM_CUSTOMIZABLE_COLORS = { [obj.SWORD]: 2, [obj.WATER_DROP]: 1, [obj.SKULL]: 1, [obj.TOADSTOOL]: 2, [obj.MOON]: 1, [obj.LIGHTNING]: 1, [obj.LEAF]: 1, [obj.HEART]: 1, [obj.FIRE]: 1, [obj.COMPASS]: 2, [obj.CROSSHAIRS]: 2, [obj.FLOWER]: 2, [obj.FORCE]: 2, [obj.GEM]: 2, [obj.LAVA]: 2, [obj.PSYCHIC]: 2, [obj.SMOKE]: 2, [obj.SNOW]: 2, [obj.SOUND]: 2, [obj.SUN]: 2, [obj.WIND]: 2, [obj.BUNNY]: 1, [obj.DOG]: 2, [obj.FROG]: 2, [obj.GOAT]: 1, [obj.CAT]: 1, [obj.DIAMOND]: 1, [obj.CROWN]: 2, [obj.TROPHY]: 1, [obj.MONEY_BAG]: 1, [obj.DOLLAR_SIGN]: 1, [obj.BEE]: 1, [obj.SPIDER]: 2, [obj.CATERPILLAR]: 2, [obj.SNAIL]: 2, [obj.BUTTERFLY]: 2, [obj.WILTED_FLOWER]: 2, [obj.BLOSSOM]: 1, [obj.POTTED_PLANT]: 2, [obj.CLOVER]: 1, [obj.MAPLE]: 1 };
export const getRandomGuildTagBadgeKind = function getRandomGuildTagBadgeKind() {
  const keys = Object.keys(obj);
  const found = keys.filter((arg0) => isNaN(Number(arg0)));
  return obj[found[Math.floor(Math, Math.random(Math) * found.length)]];
};
export const GuildTagBadgeSize = obj1;
export const GuildTagBadgeMediaProxySizes = { [obj1.SIZE_12]: 16, [obj1.SIZE_14]: 16, [obj1.SIZE_16]: 16, [obj1.SIZE_24]: 24, [obj1.SIZE_32]: 32, [obj1.SIZE_36]: 40 };
export const GuildTagBadgeMediaProxySizesMobile = { [obj1.SIZE_12]: 32, [obj1.SIZE_14]: 32, [obj1.SIZE_16]: 32, [obj1.SIZE_24]: 48, [obj1.SIZE_32]: 64, [obj1.SIZE_36]: 80 };
export const BADGES = items1;
export const BADGE_PACKS = { [GuildFeatures.GUILD_TAGS_BADGE_PACK_PETS]: items2, [GuildFeatures.GUILD_TAGS_BADGE_PACK_FLEX]: items3, [GuildFeatures.GUILD_TAGS_BADGE_PACK_PLANT]: items4, [GuildFeatures.GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES]: items5 };
export const BADGE_PACK_TO_SKU_ID = obj2;