// === Module 9142: GuildBadgeImageSource ===

// Module 9142 (GuildBadgeImageSource)
import shared from "shared" /* 5065 */;
import _modDef6441 from "module_6441" /* 6441 */;
import _modDef6442 from "module_6442" /* 6442 */;
import GuildTraits from "GuildTraits" /* 9139 */;
import BadgeCategory from "BadgeCategory" /* 9140 */;
import _modDef9143 from "module_9143" /* 9143 */;
import _modDef9144 from "module_9144" /* 9144 */;
import _modDef9145 from "module_9145" /* 9145 */;
import _modDef9146 from "module_9146" /* 9146 */;
import _modDef9147 from "module_9147" /* 9147 */;
import _modDef9148 from "module_9148" /* 9148 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(9140).BadgeCategory.STAFF] = { imageSource: _modDef6441 };
let obj2 = { imageSource: _modDef6441 };
badgeVariants[fn(9140).BadgeCategory.PARTNERED] = { imageSource: _modDef6442 };
const obj3 = { imageSource: _modDef6442 };
badgeVariants[fn(9140).BadgeCategory.VERIFIED] = { imageSource: _modDef6441 };
const obj4 = { imageSource: _modDef6441 };
badgeVariants[fn(9140).BadgeCategory.COMMUNITY] = { imageSource: _modDef9143, imageSourceLight: _modDef9144, premiumImageSource: _modDef9145 };
const obj5 = { imageSource: _modDef9143, imageSourceLight: _modDef9144, premiumImageSource: _modDef9145 };
badgeVariants[fn(9140).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9146, imageSourceLight: _modDef9147, premiumImageSource: _modDef9148 };
const obj6 = { imageSource: _modDef9146, imageSourceLight: _modDef9147, premiumImageSource: _modDef9148 };
badgeVariants[fn(9140).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6441 };
badgeVariants[fn(9140).BadgeCategory.NONE] = {};
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