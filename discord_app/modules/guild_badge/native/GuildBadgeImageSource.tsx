// === Module 9397: GuildBadgeImageSource ===

// Module 9397 (GuildBadgeImageSource)
import shared from "shared" /* 5149 */;
import _modDef7028 from "module_7028" /* 7028 */;
import _modDef7029 from "module_7029" /* 7029 */;
import GuildTraits from "GuildTraits" /* 9391 */;
import BadgeCategory from "BadgeCategory" /* 9392 */;
import _modDef9398 from "module_9398" /* 9398 */;
import _modDef9399 from "module_9399" /* 9399 */;
import _modDef9400 from "module_9400" /* 9400 */;
import _modDef9401 from "module_9401" /* 9401 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(9392).BadgeCategory.STAFF] = { imageSource: _modDef7028 };
let obj2 = { imageSource: _modDef7028 };
badgeVariants[fn(9392).BadgeCategory.PARTNERED] = { imageSource: _modDef7029 };
const obj3 = { imageSource: _modDef7029 };
badgeVariants[fn(9392).BadgeCategory.VERIFIED] = { imageSource: _modDef7028 };
const obj4 = { imageSource: _modDef7028 };
badgeVariants[fn(9392).BadgeCategory.COMMUNITY] = { imageSource: _modDef9398, imageSourceLight: _modDef9399, premiumImageSource: _modDef9400 };
const obj5 = { imageSource: _modDef9398, imageSourceLight: _modDef9399, premiumImageSource: _modDef9400 };
badgeVariants[fn(9392).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef9401 };
const obj6 = { imageSource: _modDef9401 };
badgeVariants[fn(9392).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef7028 };
badgeVariants[fn(9392).BadgeCategory.NONE] = {};
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