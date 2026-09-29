// === Module 8368: GuildBadgeImageSource ===

// Module 8368 (GuildBadgeImageSource)
import shared from "shared" /* 4685 */;
import _modDef6069 from "module_6069" /* 6069 */;
import _modDef6070 from "module_6070" /* 6070 */;
import BadgeCategory from "BadgeCategory" /* 8369 */;
import GuildTraits from "GuildTraits" /* 8370 */;
import _modDef8371 from "module_8371" /* 8371 */;
import _modDef8372 from "module_8372" /* 8372 */;
import _modDef8373 from "module_8373" /* 8373 */;
import _modDef8374 from "module_8374" /* 8374 */;
import _modDef8375 from "module_8375" /* 8375 */;
import _modDef8376 from "module_8376" /* 8376 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(8369).BadgeCategory.STAFF] = { imageSource: _modDef6069 };
let obj2 = { imageSource: _modDef6069 };
badgeVariants[fn(8369).BadgeCategory.PARTNERED] = { imageSource: _modDef6070 };
const obj3 = { imageSource: _modDef6070 };
badgeVariants[fn(8369).BadgeCategory.VERIFIED] = { imageSource: _modDef6069 };
const obj4 = { imageSource: _modDef6069 };
badgeVariants[fn(8369).BadgeCategory.COMMUNITY] = { imageSource: _modDef8371, imageSourceLight: _modDef8372, premiumImageSource: _modDef8373 };
const obj5 = { imageSource: _modDef8371, imageSourceLight: _modDef8372, premiumImageSource: _modDef8373 };
badgeVariants[fn(8369).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef8374, imageSourceLight: _modDef8375, premiumImageSource: _modDef8376 };
const obj6 = { imageSource: _modDef8374, imageSourceLight: _modDef8375, premiumImageSource: _modDef8376 };
badgeVariants[fn(8369).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6069 };
badgeVariants[fn(8369).BadgeCategory.NONE] = {};
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