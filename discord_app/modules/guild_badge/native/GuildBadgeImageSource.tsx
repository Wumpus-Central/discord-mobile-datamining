// === Module 9095: GuildBadgeImageSource ===

// Module 9095 (GuildBadgeImageSource)
import shared from "shared" /* 5028 */;
import _modDef6386 from "module_6386" /* 6386 */;
import _modDef6387 from "module_6387" /* 6387 */;
import GuildTraits from "GuildTraits" /* 9092 */;
import BadgeCategory from "BadgeCategory" /* 9093 */;
import _modDef9096 from "module_9096" /* 9096 */;
import _modDef9097 from "module_9097" /* 9097 */;
import _modDef9098 from "module_9098" /* 9098 */;
import _modDef9099 from "module_9099" /* 9099 */;
import _modDef9100 from "module_9100" /* 9100 */;
import _modDef9101 from "module_9101" /* 9101 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(9093).BadgeCategory.STAFF] = { imageSource: _modDef6386 };
let obj2 = { imageSource: _modDef6386 };
badgeVariants[fn(9093).BadgeCategory.PARTNERED] = { imageSource: _modDef6387 };
const obj3 = { imageSource: _modDef6387 };
badgeVariants[fn(9093).BadgeCategory.VERIFIED] = { imageSource: _modDef6386 };
const obj4 = { imageSource: _modDef6386 };
badgeVariants[fn(9093).BadgeCategory.COMMUNITY] = { imageSource: _modDef9096, imageSourceLight: _modDef9097, premiumImageSource: _modDef9098 };
const obj5 = { imageSource: _modDef9096, imageSourceLight: _modDef9097, premiumImageSource: _modDef9098 };
badgeVariants[fn(9093).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9099, imageSourceLight: _modDef9100, premiumImageSource: _modDef9101 };
const obj6 = { imageSource: _modDef9099, imageSourceLight: _modDef9100, premiumImageSource: _modDef9101 };
badgeVariants[fn(9093).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6386 };
badgeVariants[fn(9093).BadgeCategory.NONE] = {};
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