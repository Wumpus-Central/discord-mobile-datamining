// === Module 9158: GuildBadgeImageSource ===

// Module 9158 (GuildBadgeImageSource)
import shared from "shared" /* 4952 */;
import _modDef6836 from "module_6836" /* 6836 */;
import _modDef6837 from "module_6837" /* 6837 */;
import GuildTraits from "GuildTraits" /* 9155 */;
import BadgeCategory from "BadgeCategory" /* 9156 */;
import _modDef9159 from "module_9159" /* 9159 */;
import _modDef9160 from "module_9160" /* 9160 */;
import _modDef9161 from "module_9161" /* 9161 */;
import _modDef9162 from "module_9162" /* 9162 */;
import _modDef9163 from "module_9163" /* 9163 */;
import _modDef9164 from "module_9164" /* 9164 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(9156).BadgeCategory.STAFF] = { imageSource: _modDef6836 };
let obj2 = { imageSource: _modDef6836 };
badgeVariants[fn(9156).BadgeCategory.PARTNERED] = { imageSource: _modDef6837 };
const obj3 = { imageSource: _modDef6837 };
badgeVariants[fn(9156).BadgeCategory.VERIFIED] = { imageSource: _modDef6836 };
const obj4 = { imageSource: _modDef6836 };
badgeVariants[fn(9156).BadgeCategory.COMMUNITY] = { imageSource: _modDef9159, imageSourceLight: _modDef9160, premiumImageSource: _modDef9161 };
const obj5 = { imageSource: _modDef9159, imageSourceLight: _modDef9160, premiumImageSource: _modDef9161 };
badgeVariants[fn(9156).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9162, imageSourceLight: _modDef9163, premiumImageSource: _modDef9164 };
const obj6 = { imageSource: _modDef9162, imageSourceLight: _modDef9163, premiumImageSource: _modDef9164 };
badgeVariants[fn(9156).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6836 };
badgeVariants[fn(9156).BadgeCategory.NONE] = {};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_badge/native/GuildBadgeImageSource.tsx");

export { badgeVariants };
export const resolveImageSource = function resolveImageSource(premiumImageSource, guildTraits, arg2) {
  if (guildTraits.premium) {
    if (null != premiumImageSource.premiumImageSource) {
      let imageSource = premiumImageSource.premiumImageSource;
    }
    return imageSource;
  }
  if (obj.isThemeLight(arg2)) {
    if (null != premiumImageSource.imageSourceLight) {
      imageSource = premiumImageSource.imageSourceLight;
    }
  }
  imageSource = premiumImageSource.imageSource;
};
export const getGuildBadgeImageSource = function getGuildBadgeImageSource(guild, theme) {
  const obj = GuildTraits;
  const guildTraits = obj.getGuildTraits(guild);
  const obj2 = BadgeCategory;
  const tmp4 = obj[obj2.getBadgeCategory(obj2, guildTraits)];
  if (null == tmp4) {
    return null;
  } else {
    if (!guildTraits.premium) {
      if (tmpResult.isThemeLight(theme)) {
        if (null != tmp4.imageSourceLight) {
          let premiumImageSource = tmp4.imageSourceLight;
        }
      }
      premiumImageSource = tmp4.imageSource;
      tmpResult = shared;
    }
    premiumImageSource = tmp4.premiumImageSource;
  }
};