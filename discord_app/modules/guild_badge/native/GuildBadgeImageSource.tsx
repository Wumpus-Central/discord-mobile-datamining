// === Module 9310: GuildBadgeImageSource ===

// Module 9310 (GuildBadgeImageSource)
import shared from "shared" /* 5021 */;
import _modDef6962 from "module_6962" /* 6962 */;
import _modDef6963 from "module_6963" /* 6963 */;
import GuildTraits from "GuildTraits" /* 9304 */;
import BadgeCategory from "BadgeCategory" /* 9305 */;
import _modDef9311 from "module_9311" /* 9311 */;
import _modDef9312 from "module_9312" /* 9312 */;
import _modDef9313 from "module_9313" /* 9313 */;
import _modDef9314 from "module_9314" /* 9314 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(9305).BadgeCategory.STAFF] = { imageSource: _modDef6962 };
let obj2 = { imageSource: _modDef6962 };
badgeVariants[fn(9305).BadgeCategory.PARTNERED] = { imageSource: _modDef6963 };
const obj3 = { imageSource: _modDef6963 };
badgeVariants[fn(9305).BadgeCategory.VERIFIED] = { imageSource: _modDef6962 };
const obj4 = { imageSource: _modDef6962 };
badgeVariants[fn(9305).BadgeCategory.COMMUNITY] = { imageSource: _modDef9311, imageSourceLight: _modDef9312, premiumImageSource: _modDef9313 };
const obj5 = { imageSource: _modDef9311, imageSourceLight: _modDef9312, premiumImageSource: _modDef9313 };
badgeVariants[fn(9305).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9314 };
const obj6 = { imageSource: _modDef9314 };
badgeVariants[fn(9305).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef6962 };
badgeVariants[fn(9305).BadgeCategory.NONE] = {};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_badge/native/GuildBadgeImageSource.tsx");

export { badgeVariants };
export function resolveImageSource(premiumImageSource, guildTraits, arg2) {
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
}
export function getGuildBadgeImageSource(guild, theme) {
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
}