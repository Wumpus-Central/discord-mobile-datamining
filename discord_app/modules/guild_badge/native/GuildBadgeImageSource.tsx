// === Module 9096: GuildBadgeImageSource ===

// Module 9096 (GuildBadgeImageSource)
import shared from "shared" /* 5028 */;
import _modDef6388 from "module_6388" /* 6388 */;
import _modDef6389 from "module_6389" /* 6389 */;
import GuildTraits from "GuildTraits" /* 9093 */;
import BadgeCategory from "BadgeCategory" /* 9094 */;
import _modDef9097 from "module_9097" /* 9097 */;
import _modDef9098 from "module_9098" /* 9098 */;
import _modDef9099 from "module_9099" /* 9099 */;
import _modDef9100 from "module_9100" /* 9100 */;
import _modDef9101 from "module_9101" /* 9101 */;
import _modDef9102 from "module_9102" /* 9102 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(9094).BadgeCategory.STAFF] = { imageSource: _modDef6388 };
let obj2 = { imageSource: _modDef6388 };
badgeVariants[fn(9094).BadgeCategory.PARTNERED] = { imageSource: _modDef6389 };
const obj3 = { imageSource: _modDef6389 };
badgeVariants[fn(9094).BadgeCategory.VERIFIED] = { imageSource: _modDef6388 };
const obj4 = { imageSource: _modDef6388 };
badgeVariants[fn(9094).BadgeCategory.COMMUNITY] = { imageSource: _modDef9097, imageSourceLight: _modDef9098, premiumImageSource: _modDef9099 };
const obj5 = { imageSource: _modDef9097, imageSourceLight: _modDef9098, premiumImageSource: _modDef9099 };
badgeVariants[fn(9094).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9100, imageSourceLight: _modDef9101, premiumImageSource: _modDef9102 };
const obj6 = { imageSource: _modDef9100, imageSourceLight: _modDef9101, premiumImageSource: _modDef9102 };
badgeVariants[fn(9094).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6388 };
badgeVariants[fn(9094).BadgeCategory.NONE] = {};
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