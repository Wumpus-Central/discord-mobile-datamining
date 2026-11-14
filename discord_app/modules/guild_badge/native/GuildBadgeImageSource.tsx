// === Module 10396: GuildBadgeImageSource ===

// Module 10396 (GuildBadgeImageSource)
import shared from "shared" /* 5313 */;
import _modDef7724 from "module_7724" /* 7724 */;
import _modDef7725 from "module_7725" /* 7725 */;
import BadgeCategory from "BadgeCategory" /* 10391 */;
import GuildTraits from "GuildTraits" /* 10392 */;
import _modDef10397 from "module_10397" /* 10397 */;
import _modDef10398 from "module_10398" /* 10398 */;
import _modDef10399 from "module_10399" /* 10399 */;
import _modDef10400 from "module_10400" /* 10400 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(10391).BadgeCategory.STAFF] = { imageSource: _modDef7724 };
let obj2 = { imageSource: _modDef7724 };
badgeVariants[fn(10391).BadgeCategory.PARTNERED] = { imageSource: _modDef7725 };
const obj3 = { imageSource: _modDef7725 };
badgeVariants[fn(10391).BadgeCategory.VERIFIED] = { imageSource: _modDef7724 };
const obj4 = { imageSource: _modDef7724 };
badgeVariants[fn(10391).BadgeCategory.COMMUNITY] = { imageSource: _modDef10397, imageSourceLight: _modDef10398, premiumImageSource: _modDef10399 };
const obj5 = { imageSource: _modDef10397, imageSourceLight: _modDef10398, premiumImageSource: _modDef10399 };
badgeVariants[fn(10391).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef10400 };
const obj6 = { imageSource: _modDef10400 };
badgeVariants[fn(10391).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef7724 };
badgeVariants[fn(10391).BadgeCategory.NONE] = {};
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